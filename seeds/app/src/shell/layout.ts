import type { ViewMode } from "./view.ts";

export const PANE_SPLIT_STORAGE_KEY = "broadside.seed-browser.paneSplit";

/** Viewport width at which List stacks and Cards uses a detail sheet. Keep in sync with `style.css`. */
export const COMPACT_MAX_PX = 980;
export const COMPACT_MEDIA = `(max-width: ${COMPACT_MAX_PX}px)`;

/** Splitter column width. Keep in sync with `--split-gutter` in `style.css`. */
export const SPLIT_GUTTER_PX = 6;

/** Split mins: browse stays a usable list/grid; detail stays readable. */
export const BROWSE_MIN_REM = 17;
export const DETAIL_MIN_REM = 19;

/** List default: browse rail at 24rem, detail takes the rest (matches prior grid). */
export const LIST_BROWSE_DEFAULT_REM = 24;
/** Cards default detail: 42% of the workspace, clamped to 28–34rem. */
export const CARDS_DETAIL_RATIO = 0.42;
export const CARDS_DETAIL_MIN_DEFAULT_REM = 28;
export const CARDS_DETAIL_MAX_DEFAULT_REM = 34;

const PANE_SPLIT_KEYS = ["canvas", "list", "cards"] as const;
export type PaneSplitKey = (typeof PANE_SPLIT_KEYS)[number];
export type PaneSplitMap = { readonly [K in PaneSplitKey]?: number };

export type CardsSheetArgs = {
  readonly view: ViewMode;
  readonly compact: boolean;
  readonly sheetOpen: boolean;
  readonly hasSelection: boolean;
};

/** Compact Cards cannot keep a useful grid and a useful side pane at once. */
export function isCardsSheetLayout(view: ViewMode, compact: boolean): boolean {
  return view === "cards" && compact;
}

/** Sheet covers the grid only in compact Cards, when opened, with a selected card. */
export function isCardsSheetVisible(args: CardsSheetArgs): boolean {
  return isCardsSheetLayout(args.view, args.compact) && args.sheetOpen && args.hasSelection;
}

export function isSideSplitLayout(compact: boolean): boolean {
  return !compact;
}

/** Root `font-size` in px. Splitter nudges and tile metrics are rem-based. */
export function rootRem(doc: Document = document): number {
  const raw = getComputedStyle(doc.documentElement).fontSize;
  const px = Number.parseFloat(raw);
  return Number.isFinite(px) && px > 0 ? px : 16;
}

export function parsePaneSplitMap(raw: string | null | undefined): PaneSplitMap {
  if (raw == null || raw === "") return {};
  try {
    const parsed: unknown = JSON.parse(raw);
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const record = parsed as Record<string, unknown>;
    const out: { [K in PaneSplitKey]?: number } = {};
    for (const key of PANE_SPLIT_KEYS) {
      const value = record[key];
      if (typeof value === "number" && Number.isFinite(value) && value > 0) {
        out[key] = value;
      }
    }
    return out;
  } catch {
    return {};
  }
}

export function readStoredDetailWidth(
  storage: Pick<Storage, "getItem"> | null,
  key: PaneSplitKey,
): number | null {
  if (storage === null) return null;
  try {
    const value = parsePaneSplitMap(storage.getItem(PANE_SPLIT_STORAGE_KEY))[key];
    return value === undefined ? null : value;
  } catch {
    return null;
  }
}

function writePaneSplitMap(
  storage: Pick<Storage, "setItem">,
  map: PaneSplitMap,
): void {
  const compact: { [K in PaneSplitKey]?: number } = {};
  for (const key of PANE_SPLIT_KEYS) {
    const value = map[key];
    if (value !== undefined) compact[key] = value;
  }
  storage.setItem(PANE_SPLIT_STORAGE_KEY, JSON.stringify(compact));
}

export function writeStoredDetailWidth(
  storage: Pick<Storage, "getItem" | "setItem"> | null,
  key: PaneSplitKey,
  px: number,
): void {
  if (storage === null) return;
  if (!Number.isFinite(px) || px <= 0) return;
  try {
    const current = parsePaneSplitMap(storage.getItem(PANE_SPLIT_STORAGE_KEY));
    writePaneSplitMap(storage, { ...current, [key]: Math.round(px) });
  } catch {
    // private mode / blocked storage
  }
}

export function clearStoredDetailWidth(
  storage: Pick<Storage, "getItem" | "setItem"> | null,
  key: PaneSplitKey,
): void {
  if (storage === null) return;
  try {
    const current = parsePaneSplitMap(storage.getItem(PANE_SPLIT_STORAGE_KEY));
    const next: { [K in PaneSplitKey]?: number } = { ...current };
    delete next[key];
    writePaneSplitMap(storage, next);
  } catch {
    // private mode / blocked storage
  }
}

export type SplitMeasure = {
  readonly view: ViewMode;
  readonly workspacePx: number;
  readonly gutterPx: number;
  readonly rem: number;
};

export function defaultDetailWidthPx(args: SplitMeasure): number {
  const { view, workspacePx, gutterPx, rem } = args;
  if (view === "cards") {
    const ratio = workspacePx * CARDS_DETAIL_RATIO;
    const lo = CARDS_DETAIL_MIN_DEFAULT_REM * rem;
    const hi = CARDS_DETAIL_MAX_DEFAULT_REM * rem;
    return Math.min(hi, Math.max(lo, ratio));
  }
  return workspacePx - gutterPx - LIST_BROWSE_DEFAULT_REM * rem;
}

export function clampDetailWidthPx(args: SplitMeasure & { readonly detailPx: number }): number {
  const browseMin = BROWSE_MIN_REM * args.rem;
  const detailMin = DETAIL_MIN_REM * args.rem;
  const maxDetail = Math.max(detailMin, args.workspacePx - args.gutterPx - browseMin);
  const minDetail = Math.min(detailMin, maxDetail);
  return Math.min(maxDetail, Math.max(minDetail, args.detailPx));
}

export function resolveDetailWidthPx(args: SplitMeasure & { readonly storedPx: number | null }): number {
  const desired = args.storedPx ?? defaultDetailWidthPx(args);
  return clampDetailWidthPx({ ...args, detailPx: desired });
}

/** Detail width from pointer X in workspace coords. Caller clamps. */
export function detailWidthFromClientX(args: {
  readonly clientX: number;
  readonly workspaceLeft: number;
  readonly workspacePx: number;
  readonly gutterPx: number;
}): number {
  return args.workspacePx - (args.clientX - args.workspaceLeft) - args.gutterPx / 2;
}

/** Clamp, then store. No column-track snap. */
export function persistDetailWidthPx(
  storage: Pick<Storage, "getItem" | "setItem"> | null,
  key: PaneSplitKey,
  measure: SplitMeasure & { readonly detailPx: number },
): number {
  const next = clampDetailWidthPx(measure);
  writeStoredDetailWidth(storage, key, next);
  return next;
}
