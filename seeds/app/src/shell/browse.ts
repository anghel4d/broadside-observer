import type { CardId, SeedCard } from "../domain/schema.ts";
import { SEED_CARD_COLS_VAR, cardGridMetricsFromCss } from "./cardMetrics.ts";
import { measureGridColumns } from "./gridNav.ts";
import type { ViewMode } from "./view.ts";
import {
  fillSizes,
  gridItemBounds,
  gridRowCount,
  gridSlice,
  gridTotalHeight,
  listItemBounds,
  listSlice,
  maxScrollTop,
  prefixSums,
  scrollToShow,
  shouldRevealOnSet,
  type Slice,
} from "./virtualize.ts";

export type BrowseRender = (
  view: ViewMode,
  cards: ReadonlyArray<SeedCard>,
  selectedId: CardId | null,
  slice: Slice,
) => string;

export type BrowseVirtualizer = {
  readonly set: (
    view: ViewMode,
    cards: ReadonlyArray<SeedCard>,
    selectedId: CardId | null,
  ) => void;
  readonly reveal: (id: CardId | null) => void;
  readonly flash: (id: CardId) => void;
  readonly refresh: () => void;
  /** Live Cards column count from `gridColumns` (same value written to `--seed-card-cols`). */
  readonly columns: () => number;
  readonly disconnect: () => void;
};

const LIST_OVERSCAN = 8;
const GRID_OVERSCAN_ROWS = 3;
const EDGE_PAD = 6;

function rootRem(): number {
  const raw = getComputedStyle(document.documentElement).fontSize;
  const px = Number.parseFloat(raw);
  return Number.isFinite(px) && px > 0 ? px : 16;
}

export function createBrowseVirtualizer(
  pane: HTMLElement,
  render: BrowseRender,
): BrowseVirtualizer {
  let view: ViewMode = "list";
  let cards: ReadonlyArray<SeedCard> = [];
  let selectedId: CardId | null = null;
  let idsKey = "";
  let listHeights = new Map<number, number>();
  let prefix: Float64Array = new Float64Array([0]);
  let prefixDirty = true;
  let lastSlice: Slice | null = null;
  let ignoreScroll = false;
  let raf = 0;
  let measureDepth = 0;
  let idToIndex = new Map<string, number>();
  let lastBox = { width: -1, height: -1 };
  let lastColsWritten = Number.NaN;

  const remMetrics = () => {
    const rem = rootRem();
    const grid = cardGridMetricsFromCss(getComputedStyle(document.documentElement), rem);
    return {
      listInset: 0.2 * rem,
      listDefault: 5.85 * rem,
      gridPad: grid.inset,
      gridGap: grid.gap,
      gridCardWidth: grid.width,
      gridCardHeight: grid.height,
    };
  };

  const reindex = (): void => {
    const next = new Map<string, number>();
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (card !== undefined) next.set(card.id, i);
    }
    idToIndex = next;
  };

  const liveColumns = (): number => {
    const m = remMetrics();
    const inner = Math.max(0, pane.clientWidth - m.gridPad * 2);
    return measureGridColumns({
      templateColumns: undefined,
      width: inner,
      track: m.gridCardWidth,
      gap: m.gridGap,
    });
  };

  const syncColumnCount = (): number => {
    const cols = liveColumns();
    if (cols !== lastColsWritten) {
      lastColsWritten = cols;
      pane.style.setProperty(SEED_CARD_COLS_VAR, String(cols));
    }
    return cols;
  };

  const listPrefix = (count: number, fallback: number): Float64Array => {
    if (!prefixDirty && prefix.length === count + 1) return prefix;
    prefix = prefixSums(fillSizes(count, fallback, listHeights));
    prefixDirty = false;
    return prefix;
  };

  const rowHeightPx = (): number => remMetrics().gridCardHeight;

  const computeSlice = (): Slice => {
    const m = remMetrics();
    const viewport = pane.clientHeight;
    const scrollTop = pane.scrollTop;
    if (view === "list") {
      return listSlice(
        listPrefix(cards.length, m.listDefault),
        scrollTop,
        viewport,
        LIST_OVERSCAN,
        m.listInset,
        m.listInset,
      );
    }
    return gridSlice(
      cards.length,
      syncColumnCount(),
      rowHeightPx(),
      m.gridGap,
      scrollTop,
      viewport,
      GRID_OVERSCAN_ROWS,
      m.gridPad,
      m.gridPad,
    );
  };

  const applyPads = (slice: Slice): void => {
    const plane = pane.querySelector(".virt-plane");
    if (!(plane instanceof HTMLElement)) return;
    plane.style.paddingTop = `${slice.padTop}px`;
    plane.style.paddingBottom = `${slice.padBottom}px`;
    plane.style.minHeight = `${slice.total}px`;
    const grid = plane.querySelector(".card-grid");
    if (grid instanceof HTMLElement) {
      grid.style.gridAutoRows = `${rowHeightPx()}px`;
    }
  };

  const measure = (): void => {
    if (view !== "list" || cards.length === 0 || measureDepth > 3) return;
    measureDepth += 1;
    try {
      let changed = false;
      for (const row of pane.querySelectorAll(".card-row")) {
        if (!(row instanceof HTMLElement) || row.dataset.id === undefined) continue;
        const index = idToIndex.get(row.dataset.id);
        if (index === undefined) continue;
        const host = row.parentElement;
        const height = host instanceof HTMLElement ? host.offsetHeight : row.offsetHeight;
        if (height > 0 && listHeights.get(index) !== height) {
          listHeights.set(index, height);
          changed = true;
        }
      }
      if (!changed) return;
      prefixDirty = true;
      const next = computeSlice();
      if (lastSlice !== null && (next.start !== lastSlice.start || next.end !== lastSlice.end)) {
        paint(true);
      } else {
        applyPads(next);
        lastSlice = next;
      }
    } finally {
      measureDepth -= 1;
    }
  };

  const paint = (force: boolean): void => {
    if (cards.length === 0) {
      if (force || lastSlice !== null || pane.childElementCount === 0) {
        pane.innerHTML = render(view, cards, selectedId, {
          start: 0,
          end: 0,
          padTop: 0,
          padBottom: 0,
          total: 0,
        });
        lastSlice = { start: 0, end: 0, padTop: 0, padBottom: 0, total: 0 };
      }
      return;
    }
    const slice = computeSlice();
    const sameRange =
      lastSlice !== null &&
      lastSlice.start === slice.start &&
      lastSlice.end === slice.end;
    if (!force && sameRange) {
      applyPads(slice);
      setActive(pane, selectedId);
      lastSlice = slice;
      return;
    }
    pane.innerHTML = render(view, cards, selectedId, slice);
    lastSlice = slice;
    applyPads(slice);
    measure();
  };

  const alignChild = (child: HTMLElement): void => {
    const paneRect = pane.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    if (childRect.top < paneRect.top + EDGE_PAD) {
      ignoreScroll = true;
      pane.scrollTop += childRect.top - paneRect.top - EDGE_PAD;
      ignoreScroll = false;
    } else if (childRect.bottom > paneRect.bottom - EDGE_PAD) {
      ignoreScroll = true;
      pane.scrollTop += childRect.bottom - paneRect.bottom + EDGE_PAD;
      ignoreScroll = false;
    }
  };

  const reveal = (id: CardId | null): void => {
    if (id === null || cards.length === 0) {
      paint(true);
      return;
    }
    const index = idToIndex.get(id);
    if (index === undefined) {
      paint(true);
      return;
    }
    const m = remMetrics();
    const viewport = pane.clientHeight;
    const columns = view === "list" ? 1 : syncColumnCount();
    const rowH = rowHeightPx();
    const bounds =
      view === "list"
        ? listItemBounds(listPrefix(cards.length, m.listDefault), index, m.listInset)
        : gridItemBounds(index, columns, rowH, m.gridGap, m.gridPad);
    const total =
      view === "list"
        ? (listPrefix(cards.length, m.listDefault)[cards.length] ?? 0) + m.listInset * 2
        : gridTotalHeight(gridRowCount(cards.length, columns), rowH, m.gridGap, m.gridPad, m.gridPad);
    if (bounds !== null) {
      const next = scrollToShow(bounds.top, bounds.bottom, pane.scrollTop, viewport, EDGE_PAD);
      if (next !== null) {
        const clamped = Math.min(next, maxScrollTop(total, viewport));
        if (Math.abs(clamped - pane.scrollTop) > 1) {
          ignoreScroll = true;
          pane.scrollTop = clamped;
          ignoreScroll = false;
        }
      }
    }
    paint(true);
    const node = pane.querySelector(`[data-id="${CSS.escape(id)}"]`);
    if (node instanceof HTMLElement) {
      const before = pane.scrollTop;
      alignChild(node);
      if (Math.abs(pane.scrollTop - before) > 1) paint(true);
    }
  };

  const flash = (id: CardId): void => {
    reveal(id);
    const node = pane.querySelector(`[data-id="${CSS.escape(id)}"]`);
    if (!(node instanceof HTMLElement)) return;
    node.classList.remove("is-flash");
    void node.offsetWidth;
    node.classList.add("is-flash");
    const clear = (): void => {
      node.classList.remove("is-flash");
      node.removeEventListener("animationend", clear);
    };
    node.addEventListener("animationend", clear);
  };

  const set = (
    nextView: ViewMode,
    nextCards: ReadonlyArray<SeedCard>,
    nextSelected: CardId | null,
  ): void => {
    const nextKey = `${nextView}\n${nextCards.map((card) => card.id).join("\n")}`;
    const idsChanged = nextKey !== idsKey;
    const viewChanged = nextView !== view;
    const selChanged = nextSelected !== selectedId;
    view = nextView;
    cards = nextCards;
    selectedId = nextSelected;
    if (idsChanged) {
      idsKey = nextKey;
      listHeights = new Map();
      prefixDirty = true;
      lastSlice = null;
      reindex();
    }
    if (viewChanged) {
      lastSlice = null;
      lastBox = { width: -1, height: -1 };
      lastColsWritten = Number.NaN;
    }
    if (
      shouldRevealOnSet({
        selectionChanged: selChanged,
        viewChanged,
        itemsChanged: idsChanged,
      })
    ) {
      if (selChanged && selectedId === null && !viewChanged) {
        setActive(pane, null);
        if (idsChanged) paint(true);
        return;
      }
      if (selChanged && !viewChanged && !idsChanged && selectedId !== null) {
        const node = pane.querySelector(`[data-id="${CSS.escape(selectedId)}"]`);
        if (node instanceof HTMLElement) {
          setActive(pane, selectedId);
          const before = pane.scrollTop;
          alignChild(node);
          if (Math.abs(pane.scrollTop - before) > 1) paint(false);
          return;
        }
      }
      reveal(selectedId);
      return;
    }
    if (idsChanged) {
      paint(true);
      return;
    }
    paint(false);
  };

  const onScroll = (): void => {
    if (ignoreScroll) return;
    if (raf !== 0) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      paint(false);
    });
  };

  const onResize = (): void => {
    const width = pane.clientWidth;
    const height = pane.clientHeight;
    if (width === lastBox.width && height === lastBox.height) return;
    lastBox = { width, height };
    lastSlice = null;
    paint(true);
  };

  pane.addEventListener("scroll", onScroll, { passive: true });
  const observer = new ResizeObserver(onResize);
  observer.observe(pane);

  return {
    set,
    reveal,
    flash,
    columns: syncColumnCount,
    refresh: () => {
      lastSlice = null;
      paint(true);
    },
    disconnect: () => {
      pane.removeEventListener("scroll", onScroll);
      observer.disconnect();
      if (raf !== 0) cancelAnimationFrame(raf);
    },
  };
}

export function setActive(root: HTMLElement, id: CardId | null): void {
  for (const node of root.querySelectorAll("[data-id]")) {
    if (!(node instanceof HTMLElement)) continue;
    const on = id !== null && node.dataset.id === id;
    node.classList.toggle("is-active", on);
    node.setAttribute("aria-current", on ? "true" : "false");
  }
}
