import assert from "node:assert/strict";
import {
  fillSizes,
  gridColumns,
  gridItemBounds,
  gridRowCount,
  gridSlice,
  gridTotalHeight,
  indexAtOffset,
  listItemBounds,
  listSlice,
  prefixSums,
  scrollToShow,
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
}

{
  // 754px browse − 16px grid padding = 738 inner; 14.5rem/0.5rem at 16px root.
  assert.equal(gridColumns(738, 232, 8), 3);
  assert.equal(gridColumns(500, 232, 8), 2);
  assert.equal(gridColumns(200, 232, 8), 1);
  assert.equal(gridColumns(976, 232, 8), 4);
  assert.equal(gridColumns(0, 232, 8), 1);
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

console.log("virtualize.test.ts ok");
