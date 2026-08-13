import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  SEED_CARD_GAP_REM,
  SEED_CARD_GAP_VAR,
  SEED_CARD_HEIGHT_REM,
  SEED_CARD_HEIGHT_VAR,
  SEED_CARD_INSET_REM,
  SEED_CARD_INSET_VAR,
  SEED_CARD_WIDTH_REM,
  SEED_CARD_WIDTH_VAR,
  cardGridMetricsFromCss,
  cardGridMetricsFromRem,
  parseCssLengthPx,
} from "./cardMetrics.ts";

{
  assert.equal(parseCssLengthPx("14.5rem", 16), 232);
  assert.equal(parseCssLengthPx("10.75rem", 16), 172);
  assert.equal(parseCssLengthPx("0.5rem", 16), 8);
  assert.equal(parseCssLengthPx("8px", 16), 8);
  assert.equal(parseCssLengthPx("", 16), null);
  assert.equal(parseCssLengthPx("0rem", 16), null);
  assert.equal(parseCssLengthPx("nope", 16), null);
}

{
  const m = cardGridMetricsFromRem(16);
  assert.equal(m.width, 232);
  assert.equal(m.height, 172);
  assert.equal(m.gap, 8);
  assert.equal(m.inset, 8);
}

{
  const style = {
    getPropertyValue: (name: string): string => {
      switch (name) {
        case SEED_CARD_WIDTH_VAR:
          return "14.5rem";
        case SEED_CARD_HEIGHT_VAR:
          return "10.75rem";
        case SEED_CARD_GAP_VAR:
          return "0.5rem";
        case SEED_CARD_INSET_VAR:
          return "0.5rem";
        default:
          return "";
      }
    },
  };
  assert.deepEqual(cardGridMetricsFromCss(style, 16), cardGridMetricsFromRem(16));
}

{
  const empty = { getPropertyValue: (): string => "" };
  assert.deepEqual(cardGridMetricsFromCss(empty, 16), cardGridMetricsFromRem(16));
}

{
  const css = readFileSync(new URL("../style.css", import.meta.url), "utf8");
  const rootStart = css.indexOf(":root");
  assert.ok(rootStart >= 0, "style.css must declare :root tokens");
  const rootBlock = css.slice(rootStart, css.indexOf("}", rootStart));
  const varValue = (name: string): string => {
    const match = new RegExp(`${name}:\\s*([^;]+);`, "u").exec(rootBlock);
    assert.ok(match !== null, `style.css :root must set ${name}`);
    return (match[1] ?? "").trim();
  };
  assert.equal(varValue(SEED_CARD_WIDTH_VAR), `${SEED_CARD_WIDTH_REM}rem`);
  assert.equal(varValue(SEED_CARD_HEIGHT_VAR), `${SEED_CARD_HEIGHT_REM}rem`);
  assert.equal(varValue(SEED_CARD_GAP_VAR), `${SEED_CARD_GAP_REM}rem`);
  assert.equal(varValue(SEED_CARD_INSET_VAR), `${SEED_CARD_INSET_REM}rem`);

  assert.match(
    css,
    /grid-template-columns:\s*repeat\(\s*auto-fill\s*,\s*var\(--seed-card-width\)\s*\)/,
    "Cards grid must use fixed auto-fill tracks, not 1fr growth",
  );
  assert.ok(
    !/repeat\(\s*auto-fill\s*,\s*minmax\([^)]*1fr/.test(css),
    "Cards grid must not stretch tiles with 1fr",
  );
  assert.match(css, /grid-auto-rows:\s*var\(--seed-card-height\)/);
  assert.match(css, /\.seed-card[\s\S]*?width:\s*var\(--seed-card-width\)/);
  assert.match(css, /\.seed-card[\s\S]*?height:\s*var\(--seed-card-height\)/);
}

console.log("cardMetrics.test.ts ok");
