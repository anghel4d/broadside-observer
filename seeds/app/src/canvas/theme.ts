export type CategoryPalette = {
  readonly gray: string;
  readonly purple: string;
  readonly green: string;
  readonly yellow: string;
  readonly cyan: string;
  readonly pink: string;
  readonly blue: string;
  readonly orange: string;
  readonly red: string;
};

export type CanvasPalette = {
  readonly foreground: string;
  readonly foregroundSecondary: string;
  readonly foregroundTertiary: string;
  readonly foregroundQuaternary: string;
  readonly editor: string;
  readonly chrome: string;
  readonly sidebar: string;
  readonly elevated: string;
  readonly fillPrimary: string;
  readonly fillSecondary: string;
  readonly fillTertiary: string;
  readonly fillQuaternary: string;
  readonly strokePrimary: string;
  readonly strokeSecondary: string;
  readonly strokeTertiary: string;
  readonly strokeFocused: string;
  readonly accent: string;
  readonly buttonBackground: string;
  readonly buttonForeground: string;
  readonly buttonHoverBackground: string;
  readonly link: string;
  readonly diffInsertedLine: string;
  readonly diffRemovedLine: string;
  readonly diffStripAdded: string;
  readonly diffStripRemoved: string;
};

export type CanvasTokens = {
  readonly bg: { readonly editor: string; readonly chrome: string; readonly elevated: string };
  readonly text: {
    readonly primary: string;
    readonly secondary: string;
    readonly tertiary: string;
    readonly quaternary: string;
    readonly link: string;
    readonly onAccent: string;
  };
  readonly stroke: {
    readonly primary: string;
    readonly secondary: string;
    readonly tertiary: string;
    readonly focused: string;
  };
  readonly fill: {
    readonly primary: string;
    readonly secondary: string;
    readonly tertiary: string;
    readonly quaternary: string;
  };
  readonly accent: { readonly primary: string; readonly control: string; readonly controlHover: string };
  readonly diff: {
    readonly insertedLine: string;
    readonly removedLine: string;
    readonly stripAdded: string;
    readonly stripRemoved: string;
  };
  readonly category: CategoryPalette;
};

export type CanvasHostTheme = CanvasTokens & {
  readonly kind: string;
  readonly tokens: CanvasTokens;
  readonly palette: CanvasPalette;
};

function token(css: CSSStyleDeclaration, name: string, fallback: string): string {
  const value = css.getPropertyValue(name).trim();
  return value === "" ? fallback : value;
}

/** Host theme from the seed-browser light/dark tokens — no second palette. */
export function useHostTheme(): CanvasHostTheme {
  const kind =
    typeof document !== "undefined" && document.documentElement.dataset.theme === "light"
      ? "light"
      : "dark";
  const css = typeof document !== "undefined" ? getComputedStyle(document.documentElement) : null;
  const read = (name: string, fallback: string): string =>
    css === null ? fallback : token(css, name, fallback);
  const ink = read("--ink", "currentColor");
  const muted = read("--muted", ink);
  const faint = read("--faint", muted);
  const bg = read("--bg", "transparent");
  const panel = read("--panel", bg);
  const panel2 = read("--panel-2", panel);
  const browse = read("--browse", panel);
  const line = read("--line", muted);
  const accent = read("--accent", ink);
  const chip = read("--chip", panel2);
  const active = read("--active", chip);
  const hover = read("--hover", active);
  const focus = read("--focus-ring", accent);
  const offBg = read("--off-filter-bg", panel2);
  const offLine = read("--off-filter-line", line);
  const tokens: CanvasTokens = {
    bg: { editor: bg, chrome: panel, elevated: panel2 },
    text: { primary: ink, secondary: muted, tertiary: faint, quaternary: faint, link: accent, onAccent: bg },
    stroke: { primary: line, secondary: line, tertiary: line, focused: focus },
    fill: { primary: active, secondary: chip, tertiary: panel2, quaternary: browse },
    accent: { primary: accent, control: accent, controlHover: hover },
    diff: { insertedLine: offBg, removedLine: chip, stripAdded: offLine, stripRemoved: line },
    category: {
      gray: faint,
      purple: accent,
      green: offLine,
      yellow: muted,
      cyan: accent,
      pink: muted,
      blue: accent,
      orange: muted,
      red: ink,
    },
  };
  const palette: CanvasPalette = {
    foreground: ink,
    foregroundSecondary: muted,
    foregroundTertiary: faint,
    foregroundQuaternary: faint,
    editor: bg,
    chrome: panel,
    sidebar: browse,
    elevated: panel2,
    fillPrimary: active,
    fillSecondary: chip,
    fillTertiary: panel2,
    fillQuaternary: browse,
    strokePrimary: line,
    strokeSecondary: line,
    strokeTertiary: line,
    strokeFocused: focus,
    accent,
    buttonBackground: accent,
    buttonForeground: bg,
    buttonHoverBackground: hover,
    link: accent,
    diffInsertedLine: offBg,
    diffRemovedLine: chip,
    diffStripAdded: offLine,
    diffStripRemoved: line,
  };
  return { ...tokens, kind, tokens, palette };
}

export function mergeStyle(
  base: Record<string, string | number>,
  override?: Record<string, string | number>,
): Record<string, string | number> {
  return override === undefined ? base : { ...base, ...override };
}
