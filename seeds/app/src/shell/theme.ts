export const THEMES = ["light", "dark"] as const;
export type ThemeMode = (typeof THEMES)[number];

export const THEME_STORAGE_KEY = "broadside.seed-browser.theme";
export const THEME_MEDIA = "(prefers-color-scheme: dark)";

export function parseTheme(value: string | null | undefined): ThemeMode | null {
  if (value === "light" || value === "dark") return value;
  return null;
}

/** Stored light/dark wins. Missing or invalid stored values follow the OS. */
export function resolveTheme(
  stored: string | null | undefined,
  prefersDark: boolean,
): ThemeMode {
  return parseTheme(stored) ?? (prefersDark ? "dark" : "light");
}

export function readStoredTheme(storage: Pick<Storage, "getItem"> | null): string | null {
  if (storage === null) return null;
  try {
    return storage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function writeStoredTheme(storage: Pick<Storage, "setItem"> | null, theme: ThemeMode): void {
  if (storage === null) return;
  try {
    storage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // private mode / blocked storage
  }
}

export function applyTheme(theme: ThemeMode, doc: Document = document): void {
  doc.documentElement.dataset.theme = theme;
  const meta = doc.querySelector('meta[name="color-scheme"]');
  if (meta instanceof HTMLMetaElement) meta.content = theme;
}

export function syncThemeToggle(root: HTMLElement, theme: ThemeMode): void {
  for (const node of root.querySelectorAll("#theme-toggle [data-theme]")) {
    if (!(node instanceof HTMLElement)) continue;
    node.setAttribute("aria-checked", node.dataset.theme === theme ? "true" : "false");
  }
}

/** Apply `data-theme` without a catalog re-render. Stored value always wins; OS is followed only when unset. */
export function bindThemeControls(
  root: HTMLElement,
  storage: Pick<Storage, "getItem" | "setItem"> | null,
): void {
  const scheme = window.matchMedia(THEME_MEDIA);

  const paint = (theme: ThemeMode): void => {
    applyTheme(theme);
    syncThemeToggle(root, theme);
  };

  paint(resolveTheme(readStoredTheme(storage), scheme.matches));

  const toggle = root.querySelector("#theme-toggle");
  toggle?.addEventListener("click", (event) => {
    const button = (event.target instanceof Element ? event.target : null)?.closest(
      "button[data-theme]",
    );
    if (!(button instanceof HTMLButtonElement) || button.dataset.theme === undefined) return;
    const next = parseTheme(button.dataset.theme);
    if (next === null) return;
    writeStoredTheme(storage, next);
    paint(next);
  });

  const onSchemeChange = (): void => {
    if (parseTheme(readStoredTheme(storage)) !== null) return;
    paint(resolveTheme(null, scheme.matches));
  };
  if (typeof scheme.addEventListener === "function") {
    scheme.addEventListener("change", onSchemeChange);
  } else {
    scheme.addListener(onSchemeChange);
  }
}
