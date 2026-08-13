/** Canonical Cards tile. `--seed-card-*` in `style.css` must match these rem values. */

export const SEED_CARD_WIDTH_REM = 14.5;
export const SEED_CARD_HEIGHT_REM = 10.75;
export const SEED_CARD_GAP_REM = 0.5;
export const SEED_CARD_INSET_REM = 0.5;

export const SEED_CARD_WIDTH_VAR = "--seed-card-width";
export const SEED_CARD_HEIGHT_VAR = "--seed-card-height";
export const SEED_CARD_GAP_VAR = "--seed-card-gap";
export const SEED_CARD_INSET_VAR = "--seed-card-inset";

export type CardGridMetrics = {
  readonly width: number;
  readonly height: number;
  readonly gap: number;
  readonly inset: number;
};

export function cardGridMetricsFromRem(rem: number): CardGridMetrics {
  return {
    width: SEED_CARD_WIDTH_REM * rem,
    height: SEED_CARD_HEIGHT_REM * rem,
    gap: SEED_CARD_GAP_REM * rem,
    inset: SEED_CARD_INSET_REM * rem,
  };
}

/** Parse a CSS length used as a design token (`14.5rem`, `8px`). */
export function parseCssLengthPx(raw: string, rem: number): number | null {
  const value = raw.trim();
  if (value === "") return null;
  const n = Number.parseFloat(value);
  if (!Number.isFinite(n) || n <= 0) return null;
  if (value.endsWith("rem")) return n * rem;
  if (value.endsWith("px")) return n;
  return null;
}

/**
 * Read canonical tile metrics from CSS variables on `:root`.
 * Falls back to the mirrored rem constants when a var is missing.
 */
export function cardGridMetricsFromCss(
  style: Pick<CSSStyleDeclaration, "getPropertyValue">,
  rem: number,
): CardGridMetrics {
  const fallback = cardGridMetricsFromRem(rem);
  const read = (name: string, fallbackPx: number): number =>
    parseCssLengthPx(style.getPropertyValue(name), rem) ?? fallbackPx;
  return {
    width: read(SEED_CARD_WIDTH_VAR, fallback.width),
    height: read(SEED_CARD_HEIGHT_VAR, fallback.height),
    gap: read(SEED_CARD_GAP_VAR, fallback.gap),
    inset: read(SEED_CARD_INSET_VAR, fallback.inset),
  };
}
