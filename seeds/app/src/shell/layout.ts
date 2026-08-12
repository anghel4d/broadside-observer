export const DETAIL_FOCUS_STORAGE_KEY = "broadside.seed-browser.detailFocus";

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
