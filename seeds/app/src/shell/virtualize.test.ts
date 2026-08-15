import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { SEED_CARD_HEIGHT_REM, SEED_CARD_WIDTH_REM } from "./cardMetrics.ts";
import {
  fillSizes,
  GRID_COLUMN_COVER_FRACTION,
  gridColumns,
  gridColumnsStrict,
  gridItemBounds,
  gridRowCount,
  gridSlice,
  gridTotalHeight,
  indexAtOffset,
  listItemBounds,
  listSlice,
  maxScrollTop,
  prefixSums,
  scrollToShow,
  shouldRevealOnSet,
} from "./virtualize.ts";

const uniform = (count: number, h: number) => prefixSums(fillSizes(count, h));

{
  const prefix = prefixSums([10, 20, 30]);
  assert.equal(prefix.length, 4);
  assert.equal(prefix[0], 0);
  assert.equal(prefix[1], 10);
  assert.equal(prefix[2], 30);
  assert.equal(prefix[3], 60);
}

{
  const sizes = fillSizes(4, 10, new Map([[1, 25], [3, 8]]));
  assert.deepEqual([...sizes], [10, 25, 10, 8]);
}

{
  const prefix = uniform(10, 20);
  assert.equal(indexAtOffset(prefix, 0), 0);
  assert.equal(indexAtOffset(prefix, 19), 0);
  assert.equal(indexAtOffset(prefix, 20), 1);
  assert.equal(indexAtOffset(prefix, 199), 9);
  assert.equal(indexAtOffset(prefix, 200), 9);
  assert.equal(indexAtOffset(prefix, -5), 0);
  assert.equal(indexAtOffset(new Float64Array([0]), 0), 0);
}

{
  const prefix = uniform(100, 50);
  const top = listSlice(prefix, 0, 200, 2, 4, 4);
  assert.equal(top.start, 0);
  assert.equal(top.end, 4 + 2); // 200/50 = 4 visible + overscan
  assert.equal(top.padTop, 4);
  assert.equal(top.total, 4 + 100 * 50 + 4);

  const mid = listSlice(prefix, 2500, 200, 2, 4, 4);
  // y0 = 2496 → index 49; start = 47. y1 = 2696 → index 53; end = 56
  assert.equal(mid.start, 47);
  assert.equal(mid.end, 56);
  assert.equal(mid.padTop, 4 + 47 * 50);
  const content = (prefix[mid.end] ?? 0) - (prefix[mid.start] ?? 0);
  assert.equal(mid.padTop + content + mid.padBottom, mid.total);

  const bottom = listSlice(prefix, 10_000, 200, 2, 4, 4);
  assert.equal(bottom.end, 100);
  assert.ok(bottom.start >= 90);

  const empty = listSlice(new Float64Array([0]), 0, 200, 2, 4, 4);
  assert.deepEqual(empty, { start: 0, end: 0, padTop: 4, padBottom: 4, total: 8 });

  const unknownViewport = listSlice(prefix, 0, 0, 3, 0, 0);
  assert.equal(unknownViewport.start, 0);
  assert.equal(unknownViewport.end, 6);

  const listTotal = 4 + 100 * 50 + 4;
  const listMax = maxScrollTop(listTotal, 200);
  const listLast = listSlice(prefix, listMax, 200, 2, 4, 4);
  assert.equal(listLast.end, 100);
  assert.equal(listLast.total, listTotal);
  const listLastContent = (prefix[listLast.end] ?? 0) - (prefix[listLast.start] ?? 0);
  assert.equal(listLast.padTop + listLastContent + listLast.padBottom, listLast.total);
  const listLastBounds = listItemBounds(prefix, 99, 4);
  assert.ok(listLastBounds !== null && listLastBounds.bottom <= listMax + 200);
}

{
  // 14.5rem / 0.5rem at 16px root. Grow and first paint are strict auto-fill.
  const track = 232;
  const gap = 8;
  const pitch = track + gap;
  const coverSlack = GRID_COLUMN_COVER_FRACTION * track;
  const uncovered = (1 - GRID_COLUMN_COVER_FRACTION) * track;
  const minKeep = (n: number): number => (n - 1) * pitch + uncovered;
  const nFull = (n: number): number => n * track + Math.max(0, n - 1) * gap;

  assert.equal(GRID_COLUMN_COVER_FRACTION, 0.95);
  assert.equal(nFull(3), 712);
  assert.equal(gridColumnsStrict(712, track, gap), 3);
  assert.equal(gridColumnsStrict(711, track, gap), 2);
  assert.equal(gridColumns(738, track, gap), 3);
  assert.equal(gridColumns(500, track, gap), 2);
  assert.equal(gridColumns(200, track, gap), 1);
  assert.equal(gridColumns(100, track, gap), 1);
  assert.equal(gridColumns(976, track, gap), 4);
  assert.equal(gridColumns(0, track, gap), 1);
  assert.equal(gridColumns(-10, track, gap), 1);
  assert.equal(gridColumns(738, 0, gap), 1);

  // Live Pages clip: 562 inner / 232 track / 8 gap claimed 3 with symmetric slack.
  assert.equal(gridColumns(562, track, gap), 2);
  assert.equal(gridColumnsStrict(562, track, gap), 2);
  assert.equal(gridColumns(562, track, gap, 2), 2);
  assert.ok(nFull(3) > 562);

  // Shrink hysteresis: keep 3 until ~95% of that card is covered, then drop to 2.
  assert.equal(minKeep(3), nFull(3) - coverSlack);
  assert.equal(gridColumns(minKeep(3), track, gap, 3), 3);
  assert.equal(gridColumns(minKeep(3) - 1, track, gap, 3), 2);
  assert.equal(gridColumns(562, track, gap, 3), 3);
  assert.equal(gridColumns(nFull(3), track, gap, 3), 3);

  // Grow must not add a column until a full track + gap fits (no 5% sliver).
  assert.equal(gridColumns(minKeep(4), track, gap), 3);
  assert.equal(gridColumns(minKeep(4), track, gap, 3), 3);
  assert.equal(gridColumns(nFull(4) - 1, track, gap, 3), 3);
  assert.equal(gridColumns(nFull(4), track, gap, 3), 4);
  assert.equal(gridColumns(nFull(3) + 1, track, gap), 3);

  // One column remains even when the single tile is more than 95% covered.
  assert.equal(gridColumns(minKeep(2), track, gap, 2), 2);
  assert.equal(gridColumns(minKeep(2) - 1, track, gap, 2), 1);
  assert.equal(gridColumns(1, track, gap), 1);
  assert.equal(gridColumns(uncovered, track, gap), 1);

  for (const inner of [1, 50, 200, 251, 252, 491, 492, 562, 711, 712, 738, 951, 952, 1200]) {
    const fresh = gridColumns(inner, track, gap);
    assert.equal(fresh, gridColumnsStrict(inner, track, gap));
    assert.ok(fresh >= 1);
    if (fresh >= 2) {
      assert.ok(inner + 1e-9 >= nFull(fresh), `inner=${inner} fresh=${fresh} must fully fit`);
    }
    assert.ok(inner < nFull(fresh + 1), `inner=${inner} must not claim ${fresh + 1}`);
  }

  assert.equal(gridRowCount(571, 3), 191);
  assert.equal(gridRowCount(0, 3), 0);
  assert.equal(gridTotalHeight(3, 100, 8, 8, 8), 8 + 8 + 300 + 16);
}

{
  const slice = gridSlice(571, 3, 160, 8, 0, 500, 2, 8, 8);
  assert.equal(slice.start, 0);
  assert.ok(slice.end % 3 === 0 || slice.end === 571);
  assert.equal(slice.start, 0);
  // visible rows ≈ ceil(500/168) = 3, +2 overscan → 5 rows → 15 items
  assert.equal(slice.end, 15);
  assert.equal(slice.padTop, 8);

  const mid = gridSlice(571, 3, 160, 8, 1680, 500, 2, 8, 8);
  // pitch 168; y=1680 → rel 1672 → row 9; startRow 7; endRow rowAt(2180)=12 +1 +2 = 15
  assert.equal(mid.start % 3, 0);
  assert.equal(mid.start, 7 * 3);
  assert.equal(mid.end, 15 * 3);

  const last = gridSlice(10, 3, 160, 8, 10_000, 200, 1, 8, 8);
  assert.equal(last.end, 10);
  assert.ok(last.start <= 10);

  const empty = gridSlice(0, 3, 160, 8, 0, 200, 2, 8, 8);
  assert.equal(empty.end, 0);
  assert.equal(empty.total, 16);
}

{
  assert.equal(scrollToShow(0, 80, 0, 400, 6), null);
  assert.equal(scrollToShow(10, 90, 0, 400, 6), null);
  assert.equal(scrollToShow(0, 80, 50, 400, 6), 0);
  const down = scrollToShow(500, 580, 0, 400, 6);
  assert.equal(down, 580 - 400 + 6);
  assert.equal(scrollToShow(100, 180, 0, 0, 6), 94);
}

{
  const prefix = uniform(5, 40);
  const bounds = listItemBounds(prefix, 2, 8);
  assert.deepEqual(bounds, { top: 8 + 80, bottom: 8 + 120 });
  assert.equal(listItemBounds(prefix, -1, 8), null);
  assert.deepEqual(gridItemBounds(7, 3, 100, 8, 8), { top: 8 + 2 * 108, bottom: 8 + 2 * 108 + 100 });
}

{
  assert.equal(maxScrollTop(1000, 200), 800);
  assert.equal(maxScrollTop(100, 200), 0);
  assert.equal(maxScrollTop(0, 0), 0);
}

{
  // Reveal only on selection change or List/Cards switch — never on filter/item churn.
  assert.equal(shouldRevealOnSet({ selectionChanged: true, viewChanged: false }), true);
  assert.equal(shouldRevealOnSet({ selectionChanged: false, viewChanged: true }), true);
  assert.equal(shouldRevealOnSet({ selectionChanged: false, viewChanged: false }), false);
}

{
  // Partial last row is a full row in the spacer; no phantom gap after it.
  const count = 10;
  const cols = 3;
  const rowH = 160;
  const gap = 8;
  const inset = 8;
  const rows = gridRowCount(count, cols);
  assert.equal(rows, 4);
  const total = gridTotalHeight(rows, rowH, gap, inset, inset);
  const phantomTrailingGap = inset + inset + rows * (rowH + gap);
  assert.equal(total, phantomTrailingGap - gap);

  const last = gridSlice(count, cols, rowH, gap, 10_000, 220, 1, inset, inset);
  assert.equal(last.end, count);
  assert.equal(last.total, total);
  const startRow = last.start / cols;
  const endRow = Math.ceil(last.end / cols);
  assert.equal(startRow, Math.floor(startRow));
  const vis = endRow - startRow;
  const content = vis <= 0 ? 0 : vis * rowH + Math.max(0, vis - 1) * gap;
  assert.equal(last.padTop + content + last.padBottom, last.total);

  const lastBounds = gridItemBounds(count - 1, cols, rowH, gap, inset);
  assert.ok(lastBounds !== null);
  const viewport = 220;
  const maxS = maxScrollTop(total, viewport);
  assert.ok(lastBounds.bottom <= maxS + viewport);
  assert.ok(lastBounds.bottom <= total);
}

{
  // Catalog-sized grid: last page includes the tail; height is stable at every scrollTop.
  const count = 571;
  const cols = 3;
  const rowH = SEED_CARD_HEIGHT_REM * 16; // canonical tile at 16px root
  const gap = 8;
  const inset = 8;
  const rows = gridRowCount(count, cols);
  const total = gridTotalHeight(rows, rowH, gap, inset, inset);
  const viewport = 754;
  const maxS = maxScrollTop(total, viewport);
  const last = gridSlice(count, cols, rowH, gap, maxS, viewport, 3, inset, inset);
  assert.equal(last.end, count);
  const lastBounds = gridItemBounds(count - 1, cols, rowH, gap, inset);
  assert.ok(lastBounds !== null && lastBounds.bottom <= maxS + viewport);

  for (const y of [0, 100, 1680, maxS, maxS + 50, total]) {
    const slice = gridSlice(count, cols, rowH, gap, y, viewport, 3, inset, inset);
    assert.equal(slice.total, total);
    const startRow = slice.start / cols;
    const endRow = Math.ceil(slice.end / cols);
    const vis = endRow - startRow;
    const content = vis <= 0 ? 0 : vis * rowH + Math.max(0, vis - 1) * gap;
    assert.equal(slice.padTop + content + slice.padBottom, slice.total);
  }
}

{
  const css = readFileSync(new URL("../style.css", import.meta.url), "utf8");
  assert.ok(
    css.includes("grid-auto-rows: var(--seed-card-height)"),
    "card grid row height must use the canonical --seed-card-height token",
  );
  assert.ok(
    css.includes("repeat(var(--seed-card-cols, 1), var(--seed-card-width))"),
    "card grid tracks must be JS-driven fixed columns, not 1fr",
  );
  assert.ok(
    /overflow-x:\s*hidden/.test(css),
    "browse pane / grid must clip a partially covered last column",
  );
  assert.equal(SEED_CARD_WIDTH_REM * 16, 232);
  assert.equal(SEED_CARD_HEIGHT_REM * 16, 172);
}

console.log("virtualize.test.ts ok");
