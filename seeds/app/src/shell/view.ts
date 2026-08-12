export const VIEW_MODES = ["list", "cards"] as const;
export type ViewMode = (typeof VIEW_MODES)[number];

export const DEFAULT_VIEW: ViewMode = "list";
export const VIEW_STORAGE_KEY = "broadside.seed-browser.view";

export function parseViewMode(value: string | null | undefined): ViewMode | null {
  if (value === "list" || value === "cards") return value;
  return null;
}

export function readStoredView(storage: Pick<Storage, "getItem"> | null): ViewMode {
  if (storage === null) return DEFAULT_VIEW;
  try {
    return parseViewMode(storage.getItem(VIEW_STORAGE_KEY)) ?? DEFAULT_VIEW;
  } catch {
    return DEFAULT_VIEW;
  }
}

export function writeStoredView(storage: Pick<Storage, "setItem"> | null, view: ViewMode): void {
  if (storage === null) return;
  try {
    storage.setItem(VIEW_STORAGE_KEY, view);
  } catch {
    // private mode / blocked storage
  }
}

export function browserStorage(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}
