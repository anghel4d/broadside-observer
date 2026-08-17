import { renderCanvas } from "../canvas/evaluate.ts";
import {
  canvasJumpHtml,
  followCaretInScroller,
  jumpCanvasScroller,
  lockEditorScroll,
  mountRawEditor,
  paintRawHighlight,
  rawEditorHtml,
} from "../canvas/raw.ts";
import {
  FILTER_KEYS,
  activeFilters,
  applyCanvasQuery,
  applyQuery,
  clearFilter,
  findCardByRank,
  selectionState,
  type FilterKey,
} from "../domain/query.ts";
import { parseRoute, printRoute, routeId } from "../domain/route.ts";
import { formatDiscordCard } from "../domain/discordCard.ts";
import { assertNever } from "../domain/never.ts";
import {
  CanvasIdSchema,
  CardIdSchema,
  LineageSchema,
  PoolSchema,
  SECTION_HEADING,
  SECTION_KEYS,
  SORT_KEYS,
  SeedBatchSchema,
  SeedRankSchema,
  TopicSchema,
  YearSchema,
  defaultQuery,
  type BatchFilter,
  type CanvasId,
  type CardId,
  type Lineage,
  type LineageFilter,
  type PoolFilter,
  type Query,
  type Route,
  type SeedCanvas,
  type SeedCard,
  type SeedRank,
  type SortKey,
  type TopicFilter,
  type Year,
} from "../domain/schema.ts";
import { inLibraryIds, type Corpus } from "../domain/corpus.ts";
import { labelForLineage, labelForPool } from "../domain/lineageLabels.ts";
import { createBrowseVirtualizer, type BrowseRender } from "./browse.ts";
import { debounce } from "./debounce.ts";
import { gridDirFromKey, moveGridIndex, type GridDir } from "./gridNav.ts";
import { attr, closestControl, escapeHtml, syncAriaChecked } from "./html.ts";
import {
  BROWSE_MIN_REM,
  COMPACT_MEDIA,
  DETAIL_MIN_REM,
  PHONE_MEDIA,
  SPLIT_GUTTER_PX,
  clearStoredDetailWidth,
  clampDetailWidthPx,
  detailWidthFromClientX,
  isCardsSheetLayout,
  isCardsSheetVisible,
  isSideSplitLayout,
  persistDetailWidthPx,
  readStoredDetailWidth,
  resolveDetailWidthPx,
  rootRem,
} from "./layout.ts";
import { renderMarkdown } from "./markdown.ts";
import { displayTopics } from "./tags.ts";
import { bindThemeControls, readStoredTheme, resolveTheme, THEME_MEDIA, type ThemeMode } from "./theme.ts";
import type { Slice } from "./virtualize.ts";
import {
  browserStorage,
  parseCanvasSurface,
  parseViewMode,
  printViewSearch,
  readStoredCanvasBuffer,
  resolveView,
  writeStoredCanvasBuffer,
  writeStoredView,
  type CanvasSurface,
  type ViewMode,
} from "./view.ts";

type Model = {
  readonly corpus: Corpus;
  readonly canvases: ReadonlyArray<SeedCanvas>;
  readonly query: Query;
  readonly route: Route;
  readonly view: ViewMode;
  readonly cardsSheet: boolean;
  readonly canvasId: CanvasId | null;
  readonly canvasSource: string;
  readonly canvasSurface: CanvasSurface;
};

type Msg =
  | { readonly _tag: "SetSearch"; readonly value: string }
  | { readonly _tag: "SetTopic"; readonly filter: TopicFilter }
  | { readonly _tag: "SetBatch"; readonly filter: BatchFilter }
  | { readonly _tag: "SetPool"; readonly filter: PoolFilter }
  | { readonly _tag: "SetLineage"; readonly filter: LineageFilter }
  | { readonly _tag: "SetYearMin"; readonly value: Year | null }
  | { readonly _tag: "SetYearMax"; readonly value: Year | null }
  | { readonly _tag: "SetSort"; readonly sort: SortKey }
  | { readonly _tag: "ToggleSortDir" }
  | { readonly _tag: "SetView"; readonly view: ViewMode }
  | { readonly _tag: "SetCardsSheet"; readonly value: boolean }
  | { readonly _tag: "SelectCanvas"; readonly id: CanvasId }
  | { readonly _tag: "SetCanvasSource"; readonly value: string }
  | { readonly _tag: "SetCanvasSurface"; readonly surface: CanvasSurface }
  | { readonly _tag: "ClearFilter"; readonly key: FilterKey }
  | { readonly _tag: "Reset" }
  | { readonly _tag: "Select"; readonly id: CardId }
  | { readonly _tag: "SelectFirst" }
  | { readonly _tag: "JumpRank"; readonly rank: SeedRank }
  | { readonly _tag: "Move"; readonly delta: -1 | 1 }
  | { readonly _tag: "MoveGrid"; readonly dir: GridDir; readonly cols: number }
  | { readonly _tag: "Hash"; readonly hash: string };

const SORT_LABEL = {
  rank: "Id",
  year: "Year",
  title: "Title",
  relevance: "Relevance",
} as const satisfies Record<SortKey, string>;

type ViewModel = {
  readonly visible: ReadonlyArray<SeedCard>;
  readonly selected: SeedCard | null;
  readonly offFilter: boolean;
  readonly view: ViewMode;
  readonly cardsSheet: boolean;
  readonly corpus: Corpus;
  readonly query: Query;
  readonly visibleCanvases: ReadonlyArray<SeedCanvas>;
  readonly selectedCanvas: SeedCanvas | null;
  readonly canvasSource: string;
  readonly canvasSurface: CanvasSurface;
};

type Paint = {
  readonly detail: CardId | null;
  readonly offFilter: boolean;
  readonly hasVisible: boolean;
  readonly filterKey: string;
  readonly view: ViewMode;
  readonly canvasId: CanvasId | null;
  readonly canvasSurface: CanvasSurface;
  readonly canvasSource: string;
};

function restoreCanvas(
  canvases: ReadonlyArray<SeedCanvas>,
  buffer: { readonly source: string; readonly id: string | null; readonly surface: CanvasSurface } | null,
): { readonly id: CanvasId | null; readonly source: string; readonly surface: CanvasSurface } {
  if (buffer !== null) {
    const parsed = buffer.id === null ? null : CanvasIdSchema.safeParse(buffer.id);
    return {
      id: parsed?.success === true ? parsed.data : null,
      source: buffer.source,
      surface: buffer.surface,
    };
  }
  const first = canvases[0];
  return { id: first?.id ?? null, source: first?.source ?? "", surface: "render" };
}

function init(
  corpus: Corpus,
  canvases: ReadonlyArray<SeedCanvas>,
  hash: string,
  view: ViewMode,
  buffer: { readonly source: string; readonly id: string | null; readonly surface: CanvasSurface } | null,
): Model {
  const route = parseRoute(hash);
  const canvas = restoreCanvas(canvases, buffer);
  return {
    corpus,
    canvases,
    query: defaultQuery,
    route,
    view,
    cardsSheet: view === "cards" && route._tag === "Card",
    canvasId: canvas.id,
    canvasSource: canvas.source,
    canvasSurface: canvas.surface,
  };
}

function selectCard(model: Model, id: CardId): Model {
  const sheet = model.view === "cards" ? true : model.cardsSheet;
  if (routeId(model.route) === id && model.cardsSheet === sheet) return model;
  return { ...model, route: { _tag: "Card", id }, cardsSheet: sheet };
}

function selectCanvas(model: Model, id: CanvasId): Model {
  const hit = model.canvases.find((canvas) => canvas.id === id);
  if (hit === undefined) return model;
  if (model.canvasId === id && model.canvasSource === hit.source) return model;
  return { ...model, canvasId: id, canvasSource: hit.source };
}

function pickAlong<T extends { readonly id: string }>(
  items: ReadonlyArray<T>,
  currentId: string | null,
  nextIndex: (index: number, count: number) => number,
  forward: boolean,
): T | undefined {
  if (items.length === 0) return undefined;
  const index = currentId === null ? -1 : items.findIndex((item) => item.id === currentId);
  const pick =
    index < 0
      ? forward
        ? items[0]
        : items[items.length - 1]
      : items[nextIndex(index, items.length)];
  if (pick === undefined || pick.id === currentId) return undefined;
  return pick;
}

function moveAlongCanvas(
  model: Model,
  nextIndex: (index: number, count: number) => number,
  forward: boolean,
): Model {
  const pick = pickAlong(applyCanvasQuery(model.canvases, model.query), model.canvasId, nextIndex, forward);
  return pick === undefined ? model : selectCanvas(model, pick.id);
}

function moveAlong(
  model: Model,
  nextIndex: (index: number, count: number) => number,
  forward: boolean,
): Model {
  const pick = pickAlong(applyQuery(model.corpus, model.query), routeId(model.route), nextIndex, forward);
  return pick === undefined ? model : { ...model, route: { _tag: "Card", id: pick.id } };
}

function update(model: Model, msg: Msg): Model {
  switch (msg._tag) {
    case "SetSearch":
      return { ...model, query: { ...model.query, search: msg.value } };
    case "SetTopic":
      return { ...model, query: { ...model.query, topic: msg.filter } };
    case "SetBatch":
      return { ...model, query: { ...model.query, batch: msg.filter } };
    case "SetPool":
      return { ...model, query: { ...model.query, pool: msg.filter } };
    case "SetLineage":
      return { ...model, query: { ...model.query, lineage: msg.filter } };
    case "SetYearMin":
      return { ...model, query: { ...model.query, year: { ...model.query.year, min: msg.value } } };
    case "SetYearMax":
      return { ...model, query: { ...model.query, year: { ...model.query.year, max: msg.value } } };
    case "SetSort":
      return { ...model, query: { ...model.query, sort: msg.sort, sortReversed: false } };
    case "ToggleSortDir":
      return { ...model, query: { ...model.query, sortReversed: !model.query.sortReversed } };
    case "SetView":
      return model.view === msg.view ? model : { ...model, view: msg.view, cardsSheet: false };
    case "SetCardsSheet":
      return model.cardsSheet === msg.value ? model : { ...model, cardsSheet: msg.value };
    case "SelectCanvas":
      return selectCanvas(model, msg.id);
    case "SetCanvasSource":
      return model.canvasSource === msg.value ? model : { ...model, canvasSource: msg.value };
    case "SetCanvasSurface":
      return model.canvasSurface === msg.surface ? model : { ...model, canvasSurface: msg.surface };
    case "ClearFilter":
      return { ...model, query: clearFilter(model.query, msg.key) };
    case "Reset":
      return { ...model, query: defaultQuery };
    case "Select":
      return selectCard(model, msg.id);
    case "SelectFirst": {
      const visible = applyQuery(model.corpus, model.query);
      const first = visible[0];
      if (first === undefined) return model;
      return selectCard(model, first.id);
    }
    case "JumpRank": {
      const visible = applyQuery(model.corpus, model.query);
      const hit = findCardByRank(visible, model.corpus.cards, msg.rank);
      if (hit === null) return model;
      return selectCard(model, hit.id);
    }
    case "Move":
      return model.view === "canvas"
        ? moveAlongCanvas(
            model,
            (index, count) => Math.min(count - 1, Math.max(0, index + msg.delta)),
            msg.delta > 0,
          )
        : moveAlong(model, (index, count) => Math.min(count - 1, Math.max(0, index + msg.delta)), msg.delta > 0);
    case "MoveGrid":
      return moveAlong(
        model,
        (index, count) => moveGridIndex(index, msg.cols, count, msg.dir),
        msg.dir === "j" || msg.dir === "l",
      );
    case "Hash": {
      const route = parseRoute(msg.hash);
      return {
        ...model,
        route,
        cardsSheet: route._tag === "Card" && model.view === "cards" ? true : model.cardsSheet,
      };
    }
    default:
      return assertNever(msg);
  }
}

function project(model: Model): ViewModel {
  const visible = applyQuery(model.corpus, model.query);
  const state = selectionState(model.corpus, visible, routeId(model.route));
  const visibleCanvases = applyCanvasQuery(model.canvases, model.query);
  const selectedCanvas =
    model.canvasId === null
      ? (visibleCanvases[0] ?? null)
      : (visibleCanvases.find((canvas) => canvas.id === model.canvasId) ??
        model.canvases.find((canvas) => canvas.id === model.canvasId) ??
        null);
  return {
    visible,
    selected: state._tag === "None" ? null : state.card,
    offFilter: state._tag === "OffFilter",
    view: model.view,
    cardsSheet: model.cardsSheet,
    corpus: model.corpus,
    query: model.query,
    visibleCanvases,
    selectedCanvas,
    canvasSource: model.canvasSource,
    canvasSurface: model.canvasSurface,
  };
}

function option(value: string, label: string, selected: boolean): string {
  return `<option value="${attr(value)}"${selected ? " selected" : ""}>${escapeHtml(label)}</option>`;
}

function yearFromInput(raw: string): Year | null {
  if (!/^\d{4}$/u.test(raw)) return null;
  const parsed = YearSchema.safeParse(Number(raw));
  return parsed.success ? parsed.data : null;
}

function parseKey<T extends string>(keys: readonly T[], value: string): T | null {
  for (const key of keys) {
    if (key === value) return key;
  }
  return null;
}

function parseCardId(value: string): CardId | null {
  const parsed = CardIdSchema.safeParse(value);
  return parsed.success ? parsed.data : null;
}

function parseCanvasId(value: string): CanvasId | null {
  const parsed = CanvasIdSchema.safeParse(value);
  return parsed.success ? parsed.data : null;
}

function parseRank(raw: string): SeedRank | null {
  if (!/^-?\d+$/u.test(raw.trim())) return null;
  const parsed = SeedRankSchema.safeParse(Number(raw.trim()));
  return parsed.success ? parsed.data : null;
}

function plainText(value: string): string {
  return value.replace(/\s+/gu, " ").trim();
}

function filterKey(query: Query): string {
  return activeFilters(query)
    .map((filter) => `${filter.key}:${filter.label}`)
    .join("\n");
}

const THEME_SUN_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';

const THEME_MOON_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';

const MENU_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';

const LINK_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';

const COPY_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';

const CHECK_ICON =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M20 6 9 17l-5-5"/></svg>';

function menuToggleHtml(id?: string): string {
  const idAttr = id === undefined ? "" : ` id="${attr(id)}"`;
  return `<button type="button" class="menu-toggle"${idAttr} aria-controls="chrome browse" aria-expanded="false" aria-label="Menu">
        ${MENU_ICON}
      </button>`;
}

function shellHtml(corpus: Corpus, view: ViewMode, theme: ThemeMode): string {
  const yearLo = corpus.yearBounds?.[0];
  const yearHi = corpus.yearBounds?.[1];
  const lightOn = theme === "light";
  return `
    <div class="phone-bar" id="phone-bar">
      ${menuToggleHtml("menu-toggle")}
    </div>
    <header class="topbar">
      <div class="brand">
        <h1>Seed browser</h1>
        <p class="lede">In-memory catalog. <kbd>/</kbd> search · <kbd>j</kbd>/<kbd>k</kbd> list · <kbd>hjkl</kbd> cards · <kbd>Esc</kbd> clear.</p>
      </div>
      <div class="topbar-tools">
        <div class="seg" id="view-toggle" role="radiogroup" aria-label="View mode">
          <button type="button" role="radio" data-view="canvas" aria-checked="${view === "canvas" ? "true" : "false"}">Canvas</button>
          <button type="button" role="radio" data-view="list" aria-checked="${view === "list" ? "true" : "false"}">List</button>
          <button type="button" role="radio" data-view="cards" aria-checked="${view === "cards" ? "true" : "false"}">Cards</button>
        </div>
        <div class="seg" id="theme-toggle" role="radiogroup" aria-label="Theme">
          <button type="button" role="radio" data-theme="light" aria-label="Light" aria-checked="${lightOn ? "true" : "false"}">${THEME_SUN_ICON}</button>
          <button type="button" role="radio" data-theme="dark" aria-label="Dark" aria-checked="${lightOn ? "false" : "true"}">${THEME_MOON_ICON}</button>
        </div>
        <p class="status" id="status"></p>
      </div>
    </header>
    <div class="chrome" id="chrome" aria-label="Filters">
      <label class="search-field">
        Search
        <input id="query" type="search" placeholder="Title, authors, topics, takeaway" autocomplete="off" spellcheck="false" />
      </label>
      <button type="button" class="filters-toggle" id="filters-toggle" aria-controls="filter-fields" aria-expanded="false">
        Filters
      </button>
      <div class="filter-fields" id="filter-fields">
        <label class="facet-card">
          Topic
          <select id="topic">
            ${option("", "All topics", true)}
            ${corpus.topics.map((topic) => option(topic, topic, false)).join("")}
          </select>
        </label>
        <label class="facet-card">
          Batch
          <select id="batch">
            ${option("", "All batches", true)}
            ${corpus.batches.map((batch) => option(batch, batch, false)).join("")}
          </select>
        </label>
        <label class="facet-card">
          Pool
          <select id="pool">
            ${option("", "All pools", true)}
            ${corpus.hasUnpooled ? option("__none__", "No pool", false) : ""}
            ${corpus.pools.map((pool) => option(pool, labelForPool(pool), false)).join("")}
          </select>
        </label>
        <label class="facet-card">
          Lineage
          <select id="lineage">
            ${option("", "All lineages", true)}
            ${corpus.hasUnlineaged ? option("__none__", "No lineage", false) : ""}
            ${corpus.lineages.map((lineage) => option(lineage, labelForLineage(lineage), false)).join("")}
          </select>
        </label>
        <div class="year-fields facet-card">
          <span class="field-label">Year</span>
          <span class="year-inputs">
            <input id="yearMin" type="number" inputmode="numeric" min="1000" max="3000" placeholder="${yearLo ?? "from"}" aria-label="Year from" />
            <span class="year-dash" aria-hidden="true">–</span>
            <input id="yearMax" type="number" inputmode="numeric" min="1000" max="3000" placeholder="${yearHi ?? "to"}" aria-label="Year to" />
          </span>
        </div>
        <div class="sort-field">
          <label>
            Sort
            <select id="sort">
              ${SORT_KEYS.map((key) => option(key, SORT_LABEL[key], key === "rank")).join("")}
            </select>
          </label>
          <button type="button" class="sort-dir" id="sort-dir" aria-pressed="false" title="Reverse sort order" aria-label="Reverse sort order">↕</button>
        </div>
        <label class="jump-field facet-card">
          Id
          <input id="jump-rank" type="text" inputmode="numeric" placeholder="#" autocomplete="off" spellcheck="false" aria-label="Jump to id" />
        </label>
      </div>
      <button type="button" class="reset" id="reset">Reset</button>
    </div>
    <div class="filter-pills" id="filter-pills" role="list" aria-label="Active filters"></div>
    <div class="workspace" id="workspace" data-view="${attr(view)}" data-sheet="closed">
      <section class="browse-pane" id="browse" aria-label="Card list"></section>
      <div class="pane-split" id="pane-split" role="separator" aria-orientation="vertical" aria-label="Resize browse and detail panes" aria-controls="browse detail" aria-keyshortcuts="Shift+ArrowLeft Shift+ArrowRight Shift+H Shift+L" tabindex="0" title="Drag to resize. Shift+←/→ or Shift+H/L to nudge. Double-click to reset."></div>
      <section class="detail-pane" id="detail" aria-live="polite"></section>
    </div>
  `;
}

function chip(label: string, kind: string, value?: string): string {
  if (value !== undefined) {
    return `<button type="button" class="chip chip-${attr(kind)} is-filter" data-filter="${attr(kind)}" data-value="${attr(value)}">${escapeHtml(label)}</button>`;
  }
  return `<span class="chip chip-${attr(kind)}">${escapeHtml(label)}</span>`;
}

const LINEAGE_DOC_BASE = "https://github.com/anghel4d/broadside-observer/blob/main/seeds/lineages/";

function lineageDocHref(slug: Lineage): string {
  return `${LINEAGE_DOC_BASE}${encodeURIComponent(slug)}.md`;
}

function renderBibliography(card: SeedCard): string {
  if (card.cites.length === 0) return "";
  const items = card.cites
    .map((cite) => {
      const year = cite.year === null ? "" : ` <span class="cite-year">${cite.year}</span>`;
      const extras: string[] = [];
      if (cite.url !== null) {
        extras.push(
          `<a class="cite-url" href="${attr(cite.url)}" title="${attr(cite.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(cite.url)}</a>`,
        );
      }
      if (cite.arxiv !== null) {
        const href = `https://arxiv.org/abs/${cite.arxiv}`;
        extras.push(
          `<a class="cite-id" href="${attr(href)}" title="${attr(href)}" target="_blank" rel="noopener noreferrer">arXiv ${escapeHtml(cite.arxiv)}</a>`,
        );
      }
      if (cite.doi !== null) {
        const href = `https://doi.org/${cite.doi}`;
        extras.push(
          `<a class="cite-id" href="${attr(href)}" title="${attr(href)}" target="_blank" rel="noopener noreferrer">doi:${escapeHtml(cite.doi)}</a>`,
        );
      }
      const links = extras.length === 0 ? "" : `<div class="cite-links">${extras.join("")}</div>`;
      return `<li class="cite">
        <div class="cite-head"><span class="cite-title">${escapeHtml(cite.title)}</span>${year}</div>
        ${links}
      </li>`;
    })
    .join("");
  return `<section>
      <h3>Cites</h3>
      <ul class="cites">${items}</ul>
    </section>`;
}

function renderSee(card: SeedCard, corpus: Corpus): string {
  const ids = inLibraryIds(card, corpus);
  if (ids.length === 0) return "";
  const chips = ids
    .map((id) => {
      const target = corpus.byId.get(id);
      const label = target === undefined ? id : target.title;
      return `<a class="chip chip-see" href="${attr(printRoute({ _tag: "Card", id }))}" title="${attr(id)}">${escapeHtml(label)}</a>`;
    })
    .join("");
  return `<section>
      <h3>See</h3>
      <div class="chips see-chips">${chips}</div>
    </section>`;
}

function renderCites(card: SeedCard, corpus: Corpus): string {
  return `${renderBibliography(card)}${renderSee(card, corpus)}`;
}

function renderLineageChip(card: SeedCard, corpus: Corpus): string {
  if (card.lineage === null) return "";
  const notes = corpus.lineageDocs.has(card.lineage)
    ? `<a class="chip chip-lineage-doc" href="${attr(lineageDocHref(card.lineage))}" target="_blank" rel="noopener noreferrer">lineage notes</a>`
    : "";
  return `${chip(labelForLineage(card.lineage), "lineage", card.lineage)}${notes}`;
}

function renderListRow(args: {
  readonly id: string;
  readonly title: string;
  readonly selected: boolean;
  readonly index: number;
  readonly count: number;
  readonly meta: string;
  readonly sub: string;
}): string {
  return `<button type="button" class="card-row${args.selected ? " is-active" : ""}" data-id="${attr(args.id)}" tabindex="-1" aria-current="${args.selected ? "true" : "false"}" aria-setsize="${args.count}" aria-posinset="${args.index + 1}" title="${attr(args.title)}">
          <span class="row-meta">${args.meta}</span>
          <span class="row-title" title="${attr(args.title)}">${escapeHtml(args.title)}</span>
          <span class="row-sub">${escapeHtml(args.sub)}</span>
        </button>`;
}

function cardListMeta(card: SeedCard): string {
  return `<span class="rank">#${card.seed_rank}</span>
            <span class="year">${card.year}</span>
            ${card.pool === null ? "" : `<span class="pool">${escapeHtml(labelForPool(card.pool))}</span>`}
            ${card.lineage === null ? "" : `<span class="lineage">${escapeHtml(labelForLineage(card.lineage))}</span>`}`;
}

const EMPTY_BROWSE = `<p class="empty">No cards match the current filters.</p>`;

function virtPlane(slice: Slice, inner: string): string {
  return `<div class="virt-plane" style="padding-top:${slice.padTop}px;padding-bottom:${slice.padBottom}px;min-height:${slice.total}px">${inner}</div>`;
}

function renderList(visible: ReadonlyArray<SeedCard>, selectedId: CardId | null, slice: Slice): string {
  if (visible.length === 0) return EMPTY_BROWSE;
  const items: string[] = [];
  for (let i = slice.start; i < slice.end; i++) {
    const card = visible[i];
    if (card === undefined) continue;
    const authors = card.authors.slice(0, 2).join(", ") + (card.authors.length > 2 ? " et al." : "");
    items.push(
      `<li>${renderListRow({
        id: card.id,
        title: card.title,
        selected: card.id === selectedId,
        index: i,
        count: visible.length,
        meta: cardListMeta(card),
        sub: authors,
      })}</li>`,
    );
  }
  return virtPlane(slice, `<ul class="card-list">${items.join("")}</ul>`);
}

function cardFaceChips(card: SeedCard): string {
  const topics = displayTopics(card);
  const topicLimit = card.lineage === null ? 3 : 2;
  return [
    ...(card.lineage === null ? [] : [chip(labelForLineage(card.lineage), "lineage")]),
    ...topics.slice(0, topicLimit).map((topic) => chip(topic, "topic")),
  ].join("");
}

function renderGrid(visible: ReadonlyArray<SeedCard>, selectedId: CardId | null, slice: Slice): string {
  if (visible.length === 0) return EMPTY_BROWSE;
  const items: string[] = [];
  for (let i = slice.start; i < slice.end; i++) {
    const card = visible[i];
    if (card === undefined) continue;
    const active = card.id === selectedId;
    items.push(`<button type="button" class="seed-card${active ? " is-active" : ""}" data-id="${attr(card.id)}" tabindex="-1" aria-current="${active ? "true" : "false"}" aria-setsize="${visible.length}" aria-posinset="${i + 1}" title="${attr(card.title)}">
        <span class="seed-card-meta">
          <span class="rank">#${card.seed_rank}</span>
          <span class="year">${card.year}</span>
        </span>
        <span class="seed-card-title" title="${attr(card.title)}">${escapeHtml(card.title)}</span>
        <span class="seed-card-chips">${cardFaceChips(card)}</span>
        <span class="seed-card-takeaway">${escapeHtml(plainText(card.sections.takeaway))}</span>
      </button>`);
  }
  return virtPlane(slice, `<div class="card-grid">${items.join("")}</div>`);
}

const renderBrowse: BrowseRender = (view, visible, selectedId, slice) =>
  view === "cards" ? renderGrid(visible, selectedId, slice) : renderList(visible, selectedId, slice);

function renderCanvasList(visible: ReadonlyArray<SeedCanvas>, selectedId: string | null): string {
  if (visible.length === 0) return `<p class="empty">No canvases match the current filters.</p>`;
  const items = visible.map((canvas, index) => {
    return `<li>${renderListRow({
      id: canvas.id,
      title: canvas.title,
      selected: canvas.id === selectedId,
      index,
      count: visible.length,
      meta: `<span class="year">canvas</span>`,
      sub: canvas.file,
    })}</li>`;
  });
  return `<ul class="card-list">${items.join("")}</ul>`;
}

function renderCanvasDetail(title: string, surface: CanvasSurface, source: string): string {
  const rawOn = surface === "raw";
  return `
    <div class="reading-col">
      <article class="detail">
        <header class="detail-head">
          <div class="detail-title-row">
            <h2 id="detail-title" title="${attr(title)}">${escapeHtml(title === "" ? "Canvas" : title)}</h2>
            <div class="detail-actions">
              <div class="seg" id="canvas-surface" role="radiogroup" aria-label="Canvas surface">
                <button type="button" role="radio" data-surface="raw" aria-checked="${rawOn ? "true" : "false"}">Raw</button>
                <button type="button" role="radio" data-surface="render" aria-checked="${rawOn ? "false" : "true"}">Render</button>
              </div>
              ${canvasJumpHtml()}
              ${menuToggleHtml()}
            </div>
          </div>
        </header>
        <div class="detail-body">
          ${
            rawOn ? rawEditorHtml(escapeHtml(source)) : `<div id="canvas-host" class="canvas-host"></div>`
          }
        </div>
      </article>
    </div>
  `;
}

function renderFilterPills(query: Query): string {
  const filters = activeFilters(query);
  if (filters.length === 0) return "";
  return filters
    .map(
      (filter) =>
        `<span class="filter-pill" role="listitem">
          <span class="filter-pill-key">${escapeHtml(filter.key)}</span>
          <span class="filter-pill-value">${escapeHtml(filter.label)}</span>
          <button type="button" class="filter-pill-clear" data-clear="${attr(filter.key)}" aria-label="Clear ${attr(filter.key)} filter">×</button>
        </span>`,
    )
    .join("");
}

function renderDetail(
  card: SeedCard | null,
  corpus: Corpus,
  offFilter: boolean,
  visibleCount: number,
): string {
  if (card === null) {
    const message = visibleCount === 0
      ? "No cards match the current filters."
      : "Select a card from the list.";
    return `<div class="reading-col"><div class="empty-detail"><p>${escapeHtml(message)}</p></div></div>`;
  }

  const firstAction =
    visibleCount > 0
      ? `<button type="button" class="off-filter-btn" data-off="first" title="Shortcut: Enter" aria-keyshortcuts="Enter">Show first match</button>`
      : "";
  const banner = offFilter
    ? `<div class="off-filter" role="status">
        <p class="off-filter-copy">Not in the current filter. Linked card still shown.</p>
        <p class="off-filter-actions">
          <button type="button" class="off-filter-btn" data-off="clear" title="Shortcut: c" aria-keyshortcuts="c">Clear filters</button>
          ${firstAction}
        </p>
      </div>`
    : "";

  const topicChips = [
    ...displayTopics(card).map((topic) => chip(topic, "topic", topic)),
    renderLineageChip(card, corpus),
  ].join("");

  const provenance = [
    `<span class="prov-item">id ${card.seed_rank}</span>`,
    `<span class="prov-item">${card.year}</span>`,
    `<button type="button" class="prov-filter" data-filter="batch" data-value="${attr(card.seed_batch)}">${escapeHtml(card.seed_batch)}</button>`,
    ...(card.pool === null
      ? []
      : [
          `<button type="button" class="prov-filter" data-filter="pool" data-value="${attr(card.pool)}">${escapeHtml(labelForPool(card.pool))}</button>`,
        ]),
    ...(card.relevance_score === null ? [] : [`<span class="prov-item">relevance ${card.relevance_score}</span>`]),
    ...(card.venue.length > 0 ? [`<span class="prov-item prov-venue">${escapeHtml(card.venue)}</span>`] : []),
  ].join("");

  const identifiers = [
    card.arxiv === null
      ? null
      : `arXiv <a href="https://arxiv.org/abs/${attr(card.arxiv)}" target="_blank" rel="noopener noreferrer">${escapeHtml(card.arxiv)}</a>`,
    card.doi === null
      ? null
      : `DOI <a href="https://doi.org/${attr(card.doi)}" target="_blank" rel="noopener noreferrer">${escapeHtml(card.doi)}</a>`,
    card.source.length > 0
      ? `source <a href="${attr(card.source)}" target="_blank" rel="noopener noreferrer">${escapeHtml(card.source)}</a>`
      : null,
  ]
    .filter((item): item is string => item !== null)
    .join(" · ");

  const sections = SECTION_KEYS.map(
    (key) => `<section>
      <h3>${escapeHtml(SECTION_HEADING[key])}</h3>
      ${renderMarkdown(card.sections[key])}
    </section>`,
  ).join("");

  return `
    <div class="reading-col">
      <article class="detail">
        <header class="detail-head">
          <button type="button" class="detail-dismiss" data-sheet="close" title="Back to grid (Esc)" aria-keyshortcuts="Escape">Back to grid</button>
          ${banner}
          <div class="detail-title-row">
            <h2 id="detail-title" title="${attr(card.title)}"><span class="detail-rank">#${card.seed_rank}</span>${escapeHtml(card.title)}</h2>
            <div class="detail-actions">
              <button type="button" class="detail-action" data-copy="link" title="Copy link to this view" aria-label="Copy link">${LINK_ICON}</button>
              <button type="button" class="detail-action" data-copy="card" data-copy-card="${attr(card.id)}" title="Copy card as Discord markdown" aria-label="Copy card">${COPY_ICON}</button>
            </div>
          </div>
        </header>
        <div class="detail-body">
          <p class="detail-id">${escapeHtml(card.id)}</p>
          <p class="authors" title="${attr(card.authors.join(" · "))}">${escapeHtml(card.authors.join(" · "))}</p>
          <p class="ids">${identifiers}</p>
          <div class="chips chips-topics">${topicChips}</div>
          <p class="provenance">${provenance}</p>
          ${renderCites(card, corpus)}
          ${sections}
          <p class="reviewed">Reviewed ${escapeHtml(card.reviewed)}</p>
        </div>
      </article>
    </div>
  `;
}

function requireElement<T extends HTMLElement>(root: HTMLElement, id: string): T {
  const node = root.querySelector(`#${id}`);
  if (!(node instanceof HTMLElement)) throw new Error(`Missing #${id}`);
  return node as T;
}

function syncLocation(route: Route, view: ViewMode): void {
  const hash = printRoute(route);
  const search = printViewSearch(location.search, view);
  const next = `${location.pathname}${search}${hash}`;
  const currentHash = location.hash === "#" ? "" : location.hash;
  const current = `${location.pathname}${location.search}${currentHash}`;
  if (next === current) return;
  history.replaceState(null, "", next);
}

function isTypingTarget(target: EventTarget | null): boolean {
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLSelectElement ||
    target instanceof HTMLTextAreaElement ||
    (target instanceof HTMLElement && target.isContentEditable)
  );
}

function copyText(text: string): Promise<boolean> {
  const fallback = (): boolean => {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.left = "-9999px";
    document.body.appendChild(field);
    field.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    field.remove();
    return ok;
  };
  if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    return navigator.clipboard.writeText(text).then(
      () => true,
      () => fallback(),
    );
  }
  return Promise.resolve(fallback());
}

function flashCopied(button: HTMLButtonElement, ok: boolean): void {
  const idle = button.innerHTML;
  button.dataset.copied = ok ? "true" : "false";
  button.innerHTML = ok ? CHECK_ICON : idle;
  window.setTimeout(() => {
    if (!button.isConnected) return;
    delete button.dataset.copied;
    button.innerHTML = idle;
  }, 1200);
}

export function startApp(root: HTMLElement, corpus: Corpus, canvases: ReadonlyArray<SeedCanvas>): void {
  const storage = browserStorage();
  const initialView = resolveView(location.search, storage);
  const initialTheme = resolveTheme(
    readStoredTheme(storage),
    window.matchMedia(THEME_MEDIA).matches,
  );
  root.innerHTML = shellHtml(corpus, initialView, initialTheme);
  bindThemeControls(root, storage);
  root.dataset.view = initialView;
  root.dataset.menu = "closed";

  const chrome = requireElement<HTMLElement>(root, "chrome");
  const queryInput = requireElement<HTMLInputElement>(root, "query");
  const filtersToggle = requireElement<HTMLButtonElement>(root, "filters-toggle");
  const filterFields = requireElement<HTMLElement>(root, "filter-fields");
  const filterPills = requireElement<HTMLElement>(root, "filter-pills");
  const topicSelect = requireElement<HTMLSelectElement>(root, "topic");
  const batchSelect = requireElement<HTMLSelectElement>(root, "batch");
  const poolSelect = requireElement<HTMLSelectElement>(root, "pool");
  const lineageSelect = requireElement<HTMLSelectElement>(root, "lineage");
  const yearMinInput = requireElement<HTMLInputElement>(root, "yearMin");
  const yearMaxInput = requireElement<HTMLInputElement>(root, "yearMax");
  const sortSelect = requireElement<HTMLSelectElement>(root, "sort");
  const sortDirButton = requireElement<HTMLButtonElement>(root, "sort-dir");
  const jumpRankInput = requireElement<HTMLInputElement>(root, "jump-rank");
  const resetButton = requireElement<HTMLButtonElement>(root, "reset");
  const viewToggle = requireElement<HTMLElement>(root, "view-toggle");
  const workspace = requireElement<HTMLElement>(root, "workspace");
  const browse = requireElement<HTMLElement>(root, "browse");
  const splitter = requireElement<HTMLElement>(root, "pane-split");
  const detail = requireElement<HTMLElement>(root, "detail");
  const status = requireElement<HTMLParagraphElement>(root, "status");
  const virt = createBrowseVirtualizer(browse, renderBrowse);

  const paintCanvasSurface = (): void => {
    if (model.view !== "canvas") return;
    if (model.canvasSurface === "render") {
      const host = detail.querySelector("#canvas-host");
      if (!(host instanceof HTMLElement)) return;
      const paintedCanvas = renderCanvas(model.canvasSource, host);
      if (paintedCanvas._tag === "Err") {
        host.innerHTML = `<p class="empty-detail">${escapeHtml(paintedCanvas.error)}</p>`;
      }
      return;
    }
    mountRawEditor(detail);
  };
  root.querySelector("#theme-toggle")?.addEventListener("click", () => {
    paintCanvasSurface();
  });

  let model = init(corpus, canvases, location.hash, initialView, readStoredCanvasBuffer(storage));
  let painted: Paint | null = null;
  let filtersOpen = false;
  let menuOpen = false;
  let sheetWasVisible = false;
  const compactLayout = window.matchMedia(COMPACT_MEDIA);
  const phoneLayout = window.matchMedia(PHONE_MEDIA);

  type SplitDrag = {
    readonly pointerId: number;
    readonly startX: number;
    readonly workspaceLeft: number;
    readonly workspacePx: number;
    readonly rem: number;
    moved: boolean;
  };
  let splitDrag: SplitDrag | null = null;
  let liveDetailPx: number | null = null;
  let endingSplit = false;

  const liveSplitMeasure = () => ({
    view: model.view,
    workspacePx: workspace.clientWidth,
    gutterPx: SPLIT_GUTTER_PX,
    rem: rootRem(),
  });

  /** Freeze workspace size while dragging so a scrollbar/reflow cannot retarget the clamp. */
  const splitMeasure = () =>
    splitDrag === null
      ? liveSplitMeasure()
      : {
          view: model.view,
          workspacePx: splitDrag.workspacePx,
          gutterPx: SPLIT_GUTTER_PX,
          rem: splitDrag.rem,
        };

  const applyPaneSplit = (): void => {
    const side = isSideSplitLayout(compactLayout.matches);
    splitter.hidden = !side;
    splitter.tabIndex = side ? 0 : -1;
    if (side) splitter.removeAttribute("aria-hidden");
    else {
      splitter.setAttribute("aria-hidden", "true");
      if (document.activeElement === splitter) splitter.blur();
      workspace.classList.remove("is-resizing");
      return;
    }
    const measure = splitMeasure();
    if (measure.workspacePx <= 0) return;
    const key = model.view;
    const stored = liveDetailPx ?? readStoredDetailWidth(storage, key);
    const detailPx = resolveDetailWidthPx({ ...measure, storedPx: stored });
    const detailMin = DETAIL_MIN_REM * measure.rem;
    const maxDetail = Math.max(
      detailMin,
      measure.workspacePx - measure.gutterPx - BROWSE_MIN_REM * measure.rem,
    );
    workspace.style.setProperty("--split-gutter", `${SPLIT_GUTTER_PX}px`);
    workspace.style.setProperty("--browse-min", `${BROWSE_MIN_REM}rem`);
    workspace.style.setProperty("--detail-min", `${DETAIL_MIN_REM}rem`);
    workspace.style.setProperty("--detail-width", `${detailPx}px`);
    splitter.setAttribute("aria-valuemin", String(Math.round(Math.min(detailMin, maxDetail))));
    splitter.setAttribute("aria-valuemax", String(Math.round(maxDetail)));
    splitter.setAttribute("aria-valuenow", String(Math.round(detailPx)));
  };

  const commitDetailWidth = (detailPx: number, persist: boolean): void => {
    const measure = splitMeasure();
    const next = clampDetailWidthPx({ ...measure, detailPx });
    liveDetailPx = next;
    applyPaneSplit();
    if (persist) {
      persistDetailWidthPx(storage, model.view, { ...measure, detailPx: next });
      liveDetailPx = null;
      virt.refresh();
    }
  };

  const endSplitDrag = (): void => {
    if (splitDrag === null || endingSplit) return;
    endingSplit = true;
    const pointerId = splitDrag.pointerId;
    const moved = splitDrag.moved;
    const measure = splitMeasure();
    if (moved && liveDetailPx !== null) {
      persistDetailWidthPx(storage, model.view, {
        ...measure,
        detailPx: liveDetailPx,
      });
    }
    liveDetailPx = null;
    splitDrag = null;
    workspace.classList.remove("is-resizing");
    if (splitter.hasPointerCapture(pointerId)) splitter.releasePointerCapture(pointerId);
    if (moved) virt.refresh();
    endingSplit = false;
  };

  const syncFilterDisclosure = (): void => {
    const narrow = compactLayout.matches;
    const showFields = !narrow || filtersOpen;
    filterFields.toggleAttribute("hidden", !showFields);
    chrome.classList.toggle("is-filters-open", filtersOpen);
    filtersToggle.setAttribute("aria-expanded", filtersOpen ? "true" : "false");
    filtersToggle.hidden = !narrow;
  };

  const syncPhoneMenu = (refresh = false): void => {
    if (!phoneLayout.matches) menuOpen = false;
    root.dataset.menu = menuOpen ? "open" : "closed";
    const expanded = menuOpen ? "true" : "false";
    for (const node of root.querySelectorAll(".menu-toggle")) {
      if (!(node instanceof HTMLButtonElement)) continue;
      node.hidden = !phoneLayout.matches;
      node.setAttribute("aria-expanded", expanded);
    }
    if (refresh) virt.refresh();
  };

  const closePhoneMenu = (): void => {
    if (!menuOpen) return;
    menuOpen = false;
    syncPhoneMenu(true);
  };

  const syncSheetChrome = (vm: ViewModel, detailHadFocus: boolean): void => {
    const compact = compactLayout.matches;
    const sheetLayout = isCardsSheetLayout(vm.view, compact);
    const sheetVisible = isCardsSheetVisible({
      view: vm.view,
      compact,
      sheetOpen: vm.cardsSheet,
      hasSelection: vm.selected !== null,
    });
    workspace.dataset.sheet = sheetVisible ? "open" : "closed";
    if (sheetVisible) {
      detail.setAttribute("role", "dialog");
      detail.setAttribute("aria-modal", "true");
      detail.setAttribute("aria-labelledby", "detail-title");
      detail.removeAttribute("aria-hidden");
    } else {
      detail.removeAttribute("role");
      detail.removeAttribute("aria-modal");
      detail.removeAttribute("aria-labelledby");
      if (sheetLayout) detail.setAttribute("aria-hidden", "true");
      else detail.removeAttribute("aria-hidden");
    }
    detail.toggleAttribute("inert", sheetLayout && !sheetVisible);
    browse.toggleAttribute("inert", sheetVisible);
    const active = document.activeElement;
    const focusInDetail = active instanceof Node && detail.contains(active);
    if (sheetVisible && !sheetWasVisible) {
      const closeBtn = detail.querySelector(".detail-dismiss");
      if (closeBtn instanceof HTMLButtonElement) closeBtn.focus();
    } else if (sheetVisible && detailHadFocus && !focusInDetail) {
      const closeBtn = detail.querySelector(".detail-dismiss");
      if (closeBtn instanceof HTMLButtonElement) closeBtn.focus();
    } else if (!sheetVisible && sheetWasVisible) {
      const selected = browse.querySelector("[data-id].is-active");
      if (selected instanceof HTMLElement) selected.focus();
    }
    sheetWasVisible = sheetVisible;
  };

  const syncFilterControls = (query: Query): void => {
    if (document.activeElement !== queryInput) queryInput.value = query.search;
    topicSelect.value = query.topic._tag === "All" ? "" : query.topic.topic;
    batchSelect.value = query.batch._tag === "All" ? "" : query.batch.batch;
    poolSelect.value =
      query.pool._tag === "All" ? "" : query.pool._tag === "None" ? "__none__" : query.pool.pool;
    lineageSelect.value =
      query.lineage._tag === "All"
        ? ""
        : query.lineage._tag === "None"
          ? "__none__"
          : query.lineage.lineage;
    if (document.activeElement !== yearMinInput) {
      yearMinInput.value = query.year.min === null ? "" : String(query.year.min);
    }
    if (document.activeElement !== yearMaxInput) {
      yearMaxInput.value = query.year.max === null ? "" : String(query.year.max);
    }
    sortSelect.value = query.sort;
    sortDirButton.setAttribute("aria-pressed", query.sortReversed ? "true" : "false");
    sortDirButton.title = query.sortReversed ? "Default sort order" : "Reverse sort order";
    sortDirButton.setAttribute("aria-label", sortDirButton.title);
  };

  const patch = (next: Model): void => {
    const vm = project(next);
    const highlight = vm.offFilter ? null : (vm.selected?.id ?? null);
    const detailId = vm.selected?.id ?? null;
    const filters = filterKey(vm.query);
    const hasVisible = vm.visible.length > 0;
    const pillsQuery =
      vm.view === "canvas"
        ? FILTER_KEYS.reduce((query, key) => (key === "search" ? query : clearFilter(query, key)), vm.query)
        : vm.query;
    const shownFilters = activeFilters(pillsQuery);
    const activeCount = shownFilters.length;
    status.textContent =
      vm.view === "canvas"
        ? `${vm.visibleCanvases.length} shown · ${model.canvases.length} packed`
        : `${vm.visible.length} shown · ${vm.corpus.cards.length} packed`;
    root.dataset.view = vm.view;
    workspace.dataset.view = vm.view;
    browse.setAttribute("aria-label", vm.view === "canvas" ? "Canvas list" : "Card list");
    applyPaneSplit();
    syncAriaChecked(root, "#view-toggle [data-view]", "view", vm.view);
    syncFilterControls(vm.query);
    filtersToggle.textContent = activeCount > 0 ? `Filters (${activeCount})` : "Filters";
    if (painted === null || painted.filterKey !== filters || painted.view !== vm.view) {
      filterPills.innerHTML = renderFilterPills(pillsQuery);
    }

    const prev = painted;
    if (prev !== null && prev.view !== vm.view) {
      void workspace.offsetWidth;
    }
    if (vm.view === "canvas") {
      virt.set("canvas", [], null);
      browse.innerHTML = renderCanvasList(vm.visibleCanvases, vm.selectedCanvas?.id ?? null);
    } else {
      virt.set(vm.view, vm.visible, highlight);
      if (prev !== null && prev.view !== vm.view) {
        requestAnimationFrame(() => {
          virt.refresh();
        });
      }
    }

    const detailHadFocus = detail.contains(document.activeElement);
    const rawField = detail.querySelector("#canvas-source");
    const rawFocused = rawField instanceof HTMLTextAreaElement && document.activeElement === rawField;
    if (vm.view === "canvas") {
      const canvasChanged =
        prev === null ||
        prev.view !== "canvas" ||
        prev.canvasId !== (vm.selectedCanvas?.id ?? null) ||
        prev.canvasSurface !== vm.canvasSurface ||
        (prev.canvasSource !== vm.canvasSource && !rawFocused);
      if (canvasChanged) {
        detail.innerHTML = renderCanvasDetail(
          vm.selectedCanvas?.title ?? "",
          vm.canvasSurface,
          vm.canvasSource,
        );
        paintCanvasSurface();
      }
    } else if (
      prev === null ||
      prev.view === "canvas" ||
      prev.detail !== detailId ||
      prev.offFilter !== vm.offFilter ||
      prev.hasVisible !== hasVisible
    ) {
      detail.innerHTML = renderDetail(vm.selected, vm.corpus, vm.offFilter, vm.visible.length);
    }

    syncSheetChrome(vm, detailHadFocus);
    syncPhoneMenu();

    painted = {
      detail: detailId,
      offFilter: vm.offFilter,
      hasVisible,
      filterKey: filters,
      view: vm.view,
      canvasId: vm.selectedCanvas?.id ?? null,
      canvasSurface: vm.canvasSurface,
      canvasSource: vm.canvasSource,
    };
  };

  const dispatch = (msg: Msg): void => {
    const next = update(model, msg);
    if (next === model) return;
    model = next;
    if (msg._tag !== "Hash") syncLocation(model.route, model.view);
    if (msg._tag === "SetView") writeStoredView(storage, model.view);
    if (msg._tag === "SetView" && splitDrag === null) {
      liveDetailPx = null;
    }
    if (
      msg._tag === "SetView" ||
      msg._tag === "SelectCanvas" ||
      msg._tag === "SetCanvasSource" ||
      msg._tag === "SetCanvasSurface"
    ) {
      writeStoredCanvasBuffer(storage, {
        source: model.canvasSource,
        id: model.canvasId,
        surface: model.canvasSurface,
      });
    }
    patch(model);
  };

  const flashFirstMatch = (): void => {
    dispatch({ _tag: "SelectFirst" });
    const id = routeId(model.route);
    if (id !== null) virt.flash(id);
  };

  const onSearch = debounce(75, () => {
    dispatch({ _tag: "SetSearch", value: queryInput.value });
  });

  queryInput.addEventListener("input", () => {
    onSearch();
  });
  const bindFacet = <T>(
    select: HTMLSelectElement,
    schema: { readonly safeParse: (value: string) => { success: true; data: T } | { success: false } },
    all: Msg,
    one: (value: T) => Msg,
    none?: Msg,
  ): void => {
    select.addEventListener("change", () => {
      if (select.value === "") {
        dispatch(all);
        return;
      }
      if (none !== undefined && select.value === "__none__") {
        dispatch(none);
        return;
      }
      const parsed = schema.safeParse(select.value);
      if (parsed.success) dispatch(one(parsed.data));
    });
  };
  bindFacet(topicSelect, TopicSchema, { _tag: "SetTopic", filter: { _tag: "All" } }, (topic) => ({
    _tag: "SetTopic",
    filter: { _tag: "One", topic },
  }));
  bindFacet(batchSelect, SeedBatchSchema, { _tag: "SetBatch", filter: { _tag: "All" } }, (batch) => ({
    _tag: "SetBatch",
    filter: { _tag: "One", batch },
  }));
  bindFacet(
    poolSelect,
    PoolSchema,
    { _tag: "SetPool", filter: { _tag: "All" } },
    (pool) => ({ _tag: "SetPool", filter: { _tag: "One", pool } }),
    { _tag: "SetPool", filter: { _tag: "None" } },
  );
  bindFacet(
    lineageSelect,
    LineageSchema,
    { _tag: "SetLineage", filter: { _tag: "All" } },
    (lineage) => ({ _tag: "SetLineage", filter: { _tag: "One", lineage } }),
    { _tag: "SetLineage", filter: { _tag: "None" } },
  );
  const onYearInput = (input: HTMLInputElement, tag: "SetYearMin" | "SetYearMax"): void => {
    const raw = input.value.trim();
    if (raw === "") dispatch({ _tag: tag, value: null });
    else {
      const year = yearFromInput(raw);
      if (year !== null) dispatch({ _tag: tag, value: year });
    }
  };
  yearMinInput.addEventListener("input", () => {
    onYearInput(yearMinInput, "SetYearMin");
  });
  yearMaxInput.addEventListener("input", () => {
    onYearInput(yearMaxInput, "SetYearMax");
  });
  sortSelect.addEventListener("change", () => {
    const sort = parseKey(SORT_KEYS, sortSelect.value);
    if (sort !== null) dispatch({ _tag: "SetSort", sort });
  });
  sortDirButton.addEventListener("click", () => {
    dispatch({ _tag: "ToggleSortDir" });
  });

  jumpRankInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const rank = parseRank(jumpRankInput.value);
    if (rank !== null) dispatch({ _tag: "JumpRank", rank });
  });
  viewToggle.addEventListener("click", (event) => {
    const button = closestControl(event.target, "button[data-view]");
    if (!(button instanceof HTMLButtonElement) || !viewToggle.contains(button)) return;
    const view = parseViewMode(button.dataset.view);
    if (view !== null) dispatch({ _tag: "SetView", view });
  });
  splitter.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || !isSideSplitLayout(compactLayout.matches)) return;
    event.preventDefault();
    splitter.focus({ preventScroll: true });
    const box = workspace.getBoundingClientRect();
    splitDrag = {
      pointerId: event.pointerId,
      startX: event.clientX,
      workspaceLeft: box.left,
      workspacePx: box.width,
      rem: rootRem(),
      moved: false,
    };
    splitter.setPointerCapture(event.pointerId);
  });
  splitter.addEventListener("pointermove", (event) => {
    if (splitDrag === null || event.pointerId !== splitDrag.pointerId) return;
    if (!splitDrag.moved && Math.abs(event.clientX - splitDrag.startX) < 3) return;
    const desired = detailWidthFromClientX({
      clientX: event.clientX,
      workspaceLeft: splitDrag.workspaceLeft,
      workspacePx: splitDrag.workspacePx,
      gutterPx: SPLIT_GUTTER_PX,
    });
    splitDrag.moved = true;
    workspace.classList.add("is-resizing");
    commitDetailWidth(desired, false);
  });
  splitter.addEventListener("pointerup", (event) => {
    if (splitDrag === null || event.pointerId !== splitDrag.pointerId) return;
    endSplitDrag();
  });
  splitter.addEventListener("pointercancel", (event) => {
    if (splitDrag === null || event.pointerId !== splitDrag.pointerId) return;
    endSplitDrag();
  });
  splitter.addEventListener("lostpointercapture", (event) => {
    if (splitDrag === null || event.pointerId !== splitDrag.pointerId) return;
    if (endingSplit) return;
    if (event.buttons !== 0) {
      try {
        splitter.setPointerCapture(event.pointerId);
      } catch {
        endSplitDrag();
      }
      return;
    }
    endSplitDrag();
  });
  splitter.addEventListener("dblclick", (event) => {
    if (!isSideSplitLayout(compactLayout.matches)) return;
    event.preventDefault();
    endSplitDrag();
    clearStoredDetailWidth(storage, model.view);
    applyPaneSplit();
    virt.refresh();
  });
  filtersToggle.addEventListener("click", () => {
    filtersOpen = !filtersOpen;
    syncFilterDisclosure();
  });
  resetButton.addEventListener("click", () => {
    dispatch({ _tag: "Reset" });
  });
  filterPills.addEventListener("click", (event) => {
    const button = closestControl(event.target, "button[data-clear]");
    if (!(button instanceof HTMLButtonElement) || button.dataset.clear === undefined) return;
    const key = parseKey(FILTER_KEYS, button.dataset.clear);
    if (key !== null) dispatch({ _tag: "ClearFilter", key });
  });
  root.addEventListener("click", (event) => {
    const toggle = closestControl(event.target, "button.menu-toggle");
    if (!(toggle instanceof HTMLButtonElement)) return;
    if (!phoneLayout.matches) return;
    menuOpen = !menuOpen;
    syncPhoneMenu(true);
  });
  browse.addEventListener("click", (event) => {
    const button = closestControl(event.target, "button[data-id]");
    if (!(button instanceof HTMLButtonElement) || button.dataset.id === undefined) return;
    if (model.view === "canvas") {
      const id = parseCanvasId(button.dataset.id);
      if (id !== null) {
        dispatch({ _tag: "SelectCanvas", id });
        closePhoneMenu();
      }
      return;
    }
    const id = parseCardId(button.dataset.id);
    if (id !== null) {
      dispatch({ _tag: "Select", id });
      closePhoneMenu();
    }
  });
  const syncRawOverlay = (textarea: HTMLTextAreaElement): void => {
    const highlight = detail.querySelector(".canvas-source-highlight");
    if (highlight instanceof HTMLElement) paintRawHighlight(highlight, textarea.value);
    followCaretInScroller(detail, textarea);
  };
  detail.addEventListener(
    "scroll",
    (event) => {
      if (!(event.target instanceof HTMLTextAreaElement) || event.target.id !== "canvas-source") return;
      lockEditorScroll(event.target);
    },
    true,
  );
  detail.addEventListener("input", (event) => {
    if (!(event.target instanceof HTMLTextAreaElement) || event.target.id !== "canvas-source") return;
    dispatch({ _tag: "SetCanvasSource", value: event.target.value });
    syncRawOverlay(event.target);
  });
  detail.addEventListener("keyup", (event) => {
    if (!(event.target instanceof HTMLTextAreaElement) || event.target.id !== "canvas-source") return;
    followCaretInScroller(detail, event.target);
  });
  detail.addEventListener("click", (event) => {
    if (event.target instanceof HTMLTextAreaElement && event.target.id === "canvas-source") {
      followCaretInScroller(detail, event.target);
    }
    const jump = closestControl(event.target, "button[data-canvas-jump]");
    if (jump instanceof HTMLButtonElement && jump.dataset.canvasJump !== undefined) {
      jumpCanvasScroller(detail, jump.dataset.canvasJump === "bottom" ? "bottom" : "top");
      return;
    }
    const surface = closestControl(event.target, "button[data-surface]");
    if (surface instanceof HTMLButtonElement && surface.dataset.surface !== undefined) {
      const next = parseCanvasSurface(surface.dataset.surface);
      if (next !== null) dispatch({ _tag: "SetCanvasSurface", surface: next });
      return;
    }
    const dismiss = closestControl(event.target, "button[data-sheet]");
    if (dismiss instanceof HTMLButtonElement && dismiss.dataset.sheet === "close") {
      dispatch({ _tag: "SetCardsSheet", value: false });
      return;
    }
    const off = closestControl(event.target, "button[data-off]");
    if (off instanceof HTMLButtonElement) {
      if (off.dataset.off === "clear") dispatch({ _tag: "Reset" });
      else if (off.dataset.off === "first") flashFirstMatch();
      return;
    }
    const copy = closestControl(event.target, "button[data-copy]");
    if (copy instanceof HTMLButtonElement) {
      const kind = copy.dataset.copy;
      if (kind === "link") {
        void copyText(location.href).then((ok) => flashCopied(copy, ok));
        return;
      }
      if (kind === "card") {
        const id = parseCardId(copy.dataset.copyCard ?? "");
        const card = id === null ? undefined : corpus.byId.get(id);
        if (card === undefined) {
          flashCopied(copy, false);
          return;
        }
        void copyText(formatDiscordCard(card)).then((ok) => flashCopied(copy, ok));
      }
      return;
    }

    const button = closestControl(event.target, "button[data-filter]");
    if (!(button instanceof HTMLButtonElement)) return;
    const kind = button.dataset.filter;
    const value = button.dataset.value;
    if (kind === undefined || value === undefined) return;
    if (kind === "topic") {
      const topic = TopicSchema.safeParse(value);
      if (!topic.success) return;
      dispatch({ _tag: "SetTopic", filter: { _tag: "One", topic: topic.data } });
    } else if (kind === "batch") {
      const batch = SeedBatchSchema.safeParse(value);
      if (!batch.success) return;
      dispatch({ _tag: "SetBatch", filter: { _tag: "One", batch: batch.data } });
    } else if (kind === "pool") {
      const pool = PoolSchema.safeParse(value);
      if (!pool.success) return;
      dispatch({ _tag: "SetPool", filter: { _tag: "One", pool: pool.data } });
    } else if (kind === "lineage") {
      const lineage = LineageSchema.safeParse(value);
      if (!lineage.success) return;
      dispatch({ _tag: "SetLineage", filter: { _tag: "One", lineage: lineage.data } });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.key === "Escape") {
      event.preventDefault();
      if (phoneLayout.matches && menuOpen) {
        closePhoneMenu();
        return;
      }
      if (isTypingTarget(event.target)) {
        if (event.target === queryInput && queryInput.value !== "") {
          queryInput.value = "";
          dispatch({ _tag: "SetSearch", value: "" });
          return;
        }
        if (event.target instanceof HTMLElement) event.target.blur();
        return;
      }
      if (
        isCardsSheetVisible({
          view: model.view,
          compact: compactLayout.matches,
          sheetOpen: model.cardsSheet,
          hasSelection: routeId(model.route) !== null,
        })
      ) {
        dispatch({ _tag: "SetCardsSheet", value: false });
        return;
      }
      if (model.query.search.trim() !== "") {
        queryInput.value = "";
        dispatch({ _tag: "SetSearch", value: "" });
        return;
      }
      if (filtersOpen) {
        filtersOpen = false;
        syncFilterDisclosure();
      }
      return;
    }
    if (isTypingTarget(event.target)) return;
    if (event.key === "/") {
      event.preventDefault();
      queryInput.focus();
      queryInput.select();
      return;
    }
    if (
      event.shiftKey &&
      isSideSplitLayout(compactLayout.matches) &&
      (event.key === "ArrowLeft" ||
        event.key === "ArrowRight" ||
        event.key === "H" ||
        event.key === "L")
    ) {
      event.preventDefault();
      const rem = rootRem();
      const delta = event.key === "ArrowLeft" || event.key === "H" ? rem : -rem;
      const key = model.view;
      const current = resolveDetailWidthPx({
        ...splitMeasure(),
        storedPx: liveDetailPx ?? readStoredDetailWidth(storage, key),
      });
      commitDetailWidth(current + delta, true);
      return;
    }
    if (painted?.offFilter && model.view !== "canvas") {
      if (event.key === "Enter") {
        event.preventDefault();
        flashFirstMatch();
        return;
      }
      if (event.key === "c") {
        event.preventDefault();
        dispatch({ _tag: "Reset" });
        return;
      }
    }
    if (
      event.key === "Enter" &&
      model.view === "cards" &&
      compactLayout.matches &&
      !model.cardsSheet &&
      routeId(model.route) !== null
    ) {
      event.preventDefault();
      dispatch({ _tag: "SetCardsSheet", value: true });
      return;
    }
    if (model.view === "cards") {
      const dir = gridDirFromKey(event.key);
      if (dir !== null) {
        event.preventDefault();
        dispatch({ _tag: "MoveGrid", dir, cols: virt.columns() });
        return;
      }
    }
    if (event.key === "ArrowDown" || event.key === "j") {
      event.preventDefault();
      dispatch({ _tag: "Move", delta: 1 });
    } else if (event.key === "ArrowUp" || event.key === "k") {
      event.preventDefault();
      dispatch({ _tag: "Move", delta: -1 });
    }
  });

  window.addEventListener("hashchange", () => {
    dispatch({ _tag: "Hash", hash: location.hash });
  });
  const onCompactChange = (): void => {
    if (compactLayout.matches) endSplitDrag();
    syncFilterDisclosure();
    if (compactLayout.matches && model.view === "cards" && routeId(model.route) !== null) {
      dispatch({ _tag: "SetCardsSheet", value: true });
    }
    patch(model);
  };
  if (typeof compactLayout.addEventListener === "function") {
    compactLayout.addEventListener("change", onCompactChange);
  } else {
    compactLayout.addListener(onCompactChange);
  }
  const onPhoneChange = (): void => {
    if (!phoneLayout.matches) menuOpen = false;
    syncPhoneMenu(true);
  };
  if (typeof phoneLayout.addEventListener === "function") {
    phoneLayout.addEventListener("change", onPhoneChange);
  } else {
    phoneLayout.addListener(onPhoneChange);
  }
  const splitObserver = new ResizeObserver(() => {
    applyPaneSplit();
  });
  splitObserver.observe(workspace);

  syncFilterDisclosure();
  syncLocation(model.route, model.view);
  patch(model);
}
