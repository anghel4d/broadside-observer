const VIEW_MODES = ["list", "cards"] as const;
export type ViewMode = (typeof VIEW_MODES)[number];

export const DEFAULT_VIEW: ViewMode = "list";
export const VIEW_STORAGE_KEY = "broadside.seed-browser.view";
const VIEW_QUERY_KEY = "view";

export function parseViewMode(value: string | null | undefined): ViewMode | null {
  if (value === "list" || value === "cards") return value;
  return null;
}

export function parseViewFromSearch(search: string): ViewMode | null {
  const raw = search.startsWith("?") ? search.slice(1) : search;
  return parseViewMode(new URLSearchParams(raw).get(VIEW_QUERY_KEY));
}

/** Keep other query params; omit `view` when it is the default (list). */
export function printViewSearch(search: string, view: ViewMode): string {
  const raw = search.startsWith("?") ? search.slice(1) : search;
  const params = new URLSearchParams(raw);
  if (view === DEFAULT_VIEW) params.delete(VIEW_QUERY_KEY);
  else params.set(VIEW_QUERY_KEY, view);
  const qs = params.toString();
  return qs === "" ? "" : `?${qs}`;
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

/** URL `?view=` wins over localStorage; a URL hit is written back to storage. */
export function resolveView(
  search: string,
  storage: Pick<Storage, "getItem" | "setItem"> | null,
): ViewMode {
  const fromUrl = parseViewFromSearch(search);
  if (fromUrl !== null) {
    writeStoredView(storage, fromUrl);
    return fromUrl;
  }
  return readStoredView(storage);
}

export function browserStorage(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}
