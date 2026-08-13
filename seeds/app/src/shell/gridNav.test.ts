import assert from "node:assert/strict";
import {
  countGridTemplateColumns,
  gridDirFromKey,
  measureGridColumns,
  moveGridIndex,
  type GridDir,
} from "./gridNav.ts";
import { GRID_COLUMN_COVER_FRACTION, gridColumns } from "./virtualize.ts";

const dirs: ReadonlyArray<GridDir> = ["h", "j", "k", "l"];

function step(index: number, cols: number, count: number, dir: GridDir): number {
  return moveGridIndex(index, cols, count, dir);
}

{
  // 2-col, 6 items:
  // 0 1
  // 2 3
  // 4 5
  const cols = 2;
  const n = 6;
  assert.equal(step(0, cols, n, "l"), 1);
  assert.equal(step(0, cols, n, "j"), 2);
  assert.equal(step(0, cols, n, "h"), 0);
  assert.equal(step(0, cols, n, "k"), 0);
  assert.equal(step(1, cols, n, "h"), 0);
  assert.equal(step(1, cols, n, "l"), 1);
  assert.equal(step(1, cols, n, "j"), 3);
  assert.equal(step(3, cols, n, "k"), 1);
  assert.equal(step(4, cols, n, "l"), 5);
  assert.equal(step(5, cols, n, "h"), 4);
  assert.equal(step(5, cols, n, "j"), 5);
  assert.equal(step(5, cols, n, "l"), 5);
}

{
  // 3-col, 8 items (partial last row):
  // 0 1 2
  // 3 4 5
  // 6 7
  const cols = 3;
  const n = 8;
  assert.equal(step(0, cols, n, "l"), 1);
  assert.equal(step(1, cols, n, "l"), 2);
  assert.equal(step(2, cols, n, "l"), 2);
  assert.equal(step(2, cols, n, "j"), 5);
  assert.equal(step(2, cols, n, "h"), 1);
  assert.equal(step(5, cols, n, "j"), 5); // nothing under col 2
  assert.equal(step(4, cols, n, "j"), 7);
  assert.equal(step(3, cols, n, "j"), 6);
  assert.equal(step(6, cols, n, "h"), 6);
  assert.equal(step(6, cols, n, "l"), 7);
  assert.equal(step(7, cols, n, "l"), 7);
  assert.equal(step(7, cols, n, "j"), 7);
  assert.equal(step(7, cols, n, "k"), 4);
  assert.equal(step(6, cols, n, "k"), 3);
}

{
  // 12-col, 20 items — last row has 8 cells (indices 12–19).
  const cols = 12;
  const n = 20;
  assert.equal(step(0, cols, n, "l"), 1);
  assert.equal(step(0, cols, n, "j"), 12);
  assert.equal(step(11, cols, n, "l"), 11);
  assert.equal(step(11, cols, n, "j"), 11); // no cell under col 11
  assert.equal(step(7, cols, n, "j"), 19);
  assert.equal(step(8, cols, n, "j"), 8);
  assert.equal(step(19, cols, n, "h"), 18);
  assert.equal(step(12, cols, n, "k"), 0);
  assert.equal(step(12, cols, n, "h"), 12);
}

{
  // Edge clamps: first/last, empty, bad cols, out-of-range index.
  assert.equal(step(0, 3, 1, "h"), 0);
  assert.equal(step(0, 3, 1, "j"), 0);
  assert.equal(step(0, 3, 1, "k"), 0);
  assert.equal(step(0, 3, 1, "l"), 0);
  assert.equal(moveGridIndex(0, 3, 0, "j"), 0);
  assert.equal(step(4, 0, 10, "j"), 5); // cols < 1 → 1 column (list-like)
  assert.equal(step(4, 0, 10, "k"), 3);
  assert.equal(step(-3, 3, 9, "l"), 1); // clamp index into range first
  assert.equal(step(99, 3, 9, "h"), 7);
}

{
  // Column count changed, then move — same corpus index, new spatial step.
  const n = 24;
  const at = 5;
  assert.equal(step(at, 2, n, "j"), 7); // 2-col: row 2 col 1 → row 3
  assert.equal(step(at, 3, n, "j"), 8);
  assert.equal(step(at, 12, n, "j"), 17); // 12-col: row 0 col 5 → row 1
  assert.equal(step(at, 2, n, "l"), 5); // 2-col: already rightmost in row
  assert.equal(step(at, 12, n, "l"), 6);
  assert.equal(step(at, 2, n, "k"), 3);
  assert.equal(step(at, 12, n, "k"), 5); // already on first row

  // Sequence: move on 2-col, relayout to 12-col, move again.
  const afterDown = step(at, 2, n, "j");
  assert.equal(afterDown, 7);
  assert.equal(step(afterDown, 12, n, "l"), 8);
  assert.equal(step(afterDown, 12, n, "j"), 19);
}

{
  assert.equal(gridDirFromKey("h"), "h");
  assert.equal(gridDirFromKey("j"), "j");
  assert.equal(gridDirFromKey("k"), "k");
  assert.equal(gridDirFromKey("l"), "l");
  assert.equal(gridDirFromKey("ArrowLeft"), "h");
  assert.equal(gridDirFromKey("ArrowDown"), "j");
  assert.equal(gridDirFromKey("ArrowUp"), "k");
  assert.equal(gridDirFromKey("ArrowRight"), "l");
  assert.equal(gridDirFromKey("x"), null);
  assert.equal(gridDirFromKey("H"), null);
}

{
  assert.equal(countGridTemplateColumns(""), 0);
  assert.equal(countGridTemplateColumns("none"), 0);
  assert.equal(countGridTemplateColumns("232px 232px"), 2);
  assert.equal(countGridTemplateColumns("232px 232px 232px"), 3);
  assert.equal(
    countGridTemplateColumns("minmax(232px, 1fr) minmax(232px, 1fr) minmax(232px, 1fr)"),
    3,
  );
  const twelve = Array.from({ length: 12 }, () => "minmax(116px, 1fr)").join(" ");
  assert.equal(countGridTemplateColumns(twelve), 12);
  assert.equal(countGridTemplateColumns("repeat(12, minmax(0px, 1fr))"), 12);
  assert.equal(countGridTemplateColumns("minmax(min(100%, 14.5rem), 1fr)"), 1);
  assert.equal(
    countGridTemplateColumns("repeat(auto-fill, var(--seed-card-width))"),
    0,
  );
}

{
  // Live CSS tracks win over a stale width formula (2×N → 12×N).
  const twoCol = measureGridColumns({
    templateColumns: "232px 232px",
    width: 3000,
    track: 232,
    gap: 8,
  });
  assert.equal(twoCol, 2);

  const twelveCol = measureGridColumns({
    templateColumns: Array.from({ length: 12 }, () => "116px").join(" "),
    width: 500,
    track: 232,
    gap: 8,
  });
  assert.equal(twelveCol, 12);

  const fallback = measureGridColumns({
    templateColumns: "none",
    width: 738,
    track: 232,
    gap: 8,
  });
  assert.equal(fallback, 3);
  assert.equal(fallback, gridColumns(738, 232, 8));

  const autoFill = measureGridColumns({
    templateColumns: "repeat(auto-fill, var(--seed-card-width))",
    width: 738,
    track: 232,
    gap: 8,
  });
  assert.equal(autoFill, gridColumns(738, 232, 8));

  // Slack fallback: same keep-N threshold as the virtualizer (hjkl uses this).
  const track = 232;
  const gap = 8;
  const pitch = track + gap;
  const uncovered = (1 - GRID_COLUMN_COVER_FRACTION) * track;
  const threeFull = 3 * track + 2 * gap;
  const stillThree = measureGridColumns({
    templateColumns: "none",
    width: threeFull - GRID_COLUMN_COVER_FRACTION * track,
    track,
    gap,
  });
  assert.equal(stillThree, 3);
  const dropToTwo = measureGridColumns({
    templateColumns: "none",
    width: threeFull - GRID_COLUMN_COVER_FRACTION * track - 1,
    track,
    gap,
  });
  assert.equal(dropToTwo, 2);
  assert.equal(
    measureGridColumns({
      templateColumns: "none",
      width: pitch + uncovered - 1,
      track,
      gap,
    }),
    1,
  );

  // After a measured relayout, the next hjkl step uses the new cols.
  assert.equal(moveGridIndex(5, twoCol, 24, "j"), 7);
  assert.equal(moveGridIndex(5, twelveCol, 24, "j"), 17);
  assert.equal(moveGridIndex(5, stillThree, 24, "j"), 8);
}

{
  // Every dir stays in range for a few grids.
  for (const cols of [1, 2, 3, 12]) {
    for (const n of [1, 5, 8, 20, 24]) {
      for (let i = 0; i < n; i++) {
        for (const dir of dirs) {
          const next = step(i, cols, n, dir);
          assert.ok(next >= 0 && next < n, `${i} ${dir} cols=${cols} n=${n} → ${next}`);
        }
      }
    }
  }
}

console.log("gridNav.test.ts ok");
