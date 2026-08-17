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

/** Cursor canvas dark palette (8-digit hex is #RRGGBBAA). */
export const canvasPaletteDark: CanvasPalette = {
  foreground: "#E4E4E4EB",
  foregroundSecondary: "#E4E4E48D",
  foregroundTertiary: "#E4E4E45E",
  foregroundQuaternary: "#E4E4E442",
  editor: "#181818",
  chrome: "#141414",
  sidebar: "#141414",
  elevated: "#181818",
  fillPrimary: "#E4E4E430",
  fillSecondary: "#E4E4E41E",
  fillTertiary: "#E4E4E411",
  fillQuaternary: "#E4E4E40A",
  strokePrimary: "#E4E4E433",
  strokeSecondary: "#E4E4E41F",
  strokeTertiary: "#E4E4E414",
  strokeFocused: "#599CE7",
  accent: "#599CE7",
  buttonBackground: "#599CE7",
  buttonForeground: "#191c22",
  buttonHoverBackground: "#6AABE9",
  link: "#87c3ff",
  diffInsertedLine: "#3FA26633",
  diffRemovedLine: "#B8004933",
  diffStripAdded: "#3FA2668F",
  diffStripRemoved: "#FC6B838F",
};

/** Cursor canvas light palette. */
export const canvasPaletteLight: CanvasPalette = {
  foreground: "#141414F0",
  foregroundSecondary: "#141414BD",
  foregroundTertiary: "#1414148A",
  foregroundQuaternary: "#1414145C",
  editor: "#FCFCFC",
  chrome: "#F8F8F8",
  sidebar: "#F3F3F3",
  elevated: "#FCFCFC",
  fillPrimary: "#14141433",
  fillSecondary: "#14141424",
  fillTertiary: "#14141414",
  fillQuaternary: "#1414140F",
  strokePrimary: "#14141433",
  strokeSecondary: "#1414141F",
  strokeTertiary: "#14141414",
  strokeFocused: "#3685BF",
  accent: "#3685BF",
  buttonBackground: "#3685BF",
  buttonForeground: "#FCFCFC",
  buttonHoverBackground: "#2E76AB",
  link: "#3685BF",
  diffInsertedLine: "#1F8A651F",
  diffRemovedLine: "#CF2D5614",
  diffStripAdded: "#1F8A65CC",
  diffStripRemoved: "#CF2D56CC",
};

/** Shared 7-hue category palette plus cyan/red for our token surface. */
export const colorPalette: CategoryPalette = {
  gray: "#8888A8E0",
  purple: "#7B64B8F0",
  green: "#1F8A65E8",
  yellow: "#E8C030E0",
  cyan: "#2A9A8AE0",
  pink: "#C85898E0",
  blue: "#2E79B5E0",
  orange: "#F0A040E0",
  red: "#CF2D56E0",
};

/**
 * Semantic tones used by Stat, Callout, and Table row highlighting.
 * Values are painted with these; labels stay tertiary.
 */
export const toneHex: Record<string, string> = {
  success: "#1F8A65",
  danger: "#CF2D56",
  warning: "#E8A33D",
  info: "#2E79B5",
  neutral: "#8888A8",
  added: "#1F8A65",
  deleted: "#CF2D56",
  renamed: "#5A6CC0",
};

export function buildTokens(palette: CanvasPalette): CanvasTokens {
  return {
    bg: {
      editor: palette.editor,
      chrome: palette.chrome,
      elevated: palette.elevated,
    },
    text: {
      primary: palette.foreground,
      secondary: palette.foregroundSecondary,
      tertiary: palette.foregroundTertiary,
      quaternary: palette.foregroundQuaternary,
      link: palette.link,
      onAccent: palette.buttonForeground,
    },
    stroke: {
      primary: palette.strokePrimary,
      secondary: palette.strokeSecondary,
      tertiary: palette.strokeTertiary,
      focused: palette.strokeFocused,
    },
    fill: {
      primary: palette.fillPrimary,
      secondary: palette.fillSecondary,
      tertiary: palette.fillTertiary,
      quaternary: palette.fillQuaternary,
    },
    accent: {
      primary: palette.accent,
      control: palette.buttonBackground,
      controlHover: palette.buttonHoverBackground,
    },
    diff: {
      insertedLine: palette.diffInsertedLine,
      removedLine: palette.diffRemovedLine,
      stripAdded: palette.diffStripAdded,
      stripRemoved: palette.diffStripRemoved,
    },
    category: colorPalette,
  };
}

export const canvasTokens = buildTokens(canvasPaletteDark);
export const canvasTokensLight = buildTokens(canvasPaletteLight);

export function buildHostTheme(kind: "light" | "dark"): CanvasHostTheme {
  const tokens = kind === "dark" ? canvasTokens : canvasTokensLight;
  const palette = kind === "dark" ? canvasPaletteDark : canvasPaletteLight;
  return { ...tokens, kind, tokens, palette };
}

/** Host theme from `html[data-theme]`, using canvas palettes rather than site tokens. */
export function useHostTheme(): CanvasHostTheme {
  const kind =
    typeof document !== "undefined" && document.documentElement.dataset.theme === "light"
      ? "light"
      : "dark";
  return buildHostTheme(kind);
}

export function mergeStyle(
  base: Record<string, string | number>,
  override?: Record<string, string | number>,
): Record<string, string | number> {
  return override === undefined ? base : { ...base, ...override };
}

/** Tint a `#RRGGBB` tone for fills. Warning uses a slightly stronger alpha. */
export function toneFill(tone: string, alpha = tone === "warning" ? 0.14 : 0.12): string {
  const hex = toneHex[tone] ?? toneHex.neutral ?? "#8888A8";
  const rgb = hex.startsWith("#") ? hex.slice(1) : hex;
  if (rgb.length !== 6) return hex;
  const r = Number.parseInt(rgb.slice(0, 2), 16);
  const g = Number.parseInt(rgb.slice(2, 4), 16);
  const b = Number.parseInt(rgb.slice(4, 6), 16);
  if (!Number.isFinite(r) || !Number.isFinite(g) || !Number.isFinite(b)) return hex;
  return `rgba(${r},${g},${b},${alpha})`;
}
