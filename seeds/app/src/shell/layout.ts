import type { ViewMode } from "./view.ts";

export const DETAIL_FOCUS_STORAGE_KEY = "broadside.seed-browser.detailFocus";

/** Viewport width at which List stacks and Cards uses a detail sheet. Keep in sync with `style.css`. */
export const COMPACT_MAX_PX = 980;
export const COMPACT_MEDIA = `(max-width: ${COMPACT_MAX_PX}px)`;

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

export function parseDetailFocus(value: string | null | undefined): boolean {
  return value === "1" || value === "true";
}

export function readStoredDetailFocus(storage: Pick<Storage, "getItem"> | null): boolean {
  if (storage === null) return false;
  try {
    return parseDetailFocus(storage.getItem(DETAIL_FOCUS_STORAGE_KEY));
  } catch {
    return false;
  }
}

export function writeStoredDetailFocus(
  storage: Pick<Storage, "setItem"> | null,
  focus: boolean,
): void {
  if (storage === null) return;
  try {
    storage.setItem(DETAIL_FOCUS_STORAGE_KEY, focus ? "1" : "0");
  } catch {
    // private mode / blocked storage
  }
}
