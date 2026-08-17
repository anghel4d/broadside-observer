import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { gridDirFromKey, type GridDir } from "../shell/gridNav.ts";
import {
  applyCanvasRenderGrid,
  mergeLineBoxes,
  RENDER_LINE_CARET_CLASS,
  stepRenderLineIndex,
} from "./renderLine.ts";

function dir(key: string): GridDir {
  const mapped = gridDirFromKey(key);
  if (mapped === null) throw new Error(`expected grid dir for ${key}`);
  return mapped;
}

{
  assert.equal(gridDirFromKey("j"), "j");
  assert.equal(gridDirFromKey("ArrowDown"), "j");
  assert.equal(gridDirFromKey("k"), "k");
  assert.equal(gridDirFromKey("ArrowUp"), "k");
  assert.equal(gridDirFromKey("h"), "h");
  assert.equal(gridDirFromKey("ArrowLeft"), "h");
  assert.equal(gridDirFromKey("l"), "l");
  assert.equal(gridDirFromKey("ArrowRight"), "l");
}

{
  const boxes = mergeLineBoxes([
    { top: 10, left: 0, height: 16, width: 40 },
    { top: 10.4, left: 40, height: 16, width: 20 },
    { top: 28, left: 0, height: 18, width: 80 },
    { top: 50, left: 0, height: 16, width: 10 },
  ]);
  assert.equal(boxes.length, 3);
  assert.equal(boxes[0]?.left, 0);
  assert.equal(boxes[0]?.width, 60);
  assert.equal(boxes[1]?.top, 28);
  assert.equal(boxes[2]?.top, 50);
}

{
  assert.equal(stepRenderLineIndex(0, 4, dir("j")), 1);
  assert.equal(stepRenderLineIndex(1, 4, dir("ArrowDown")), 2);
  assert.equal(stepRenderLineIndex(2, 4, dir("k")), 1);
  assert.equal(stepRenderLineIndex(1, 4, dir("ArrowUp")), 0);
  assert.equal(stepRenderLineIndex(2, 4, dir("h")), 2);
  assert.equal(stepRenderLineIndex(2, 4, dir("l")), 2);
  assert.equal(stepRenderLineIndex(2, 4, dir("ArrowLeft")), 2);
  assert.equal(stepRenderLineIndex(2, 4, dir("ArrowRight")), 2);
  assert.equal(stepRenderLineIndex(0, 1, "k"), 0);
  assert.equal(stepRenderLineIndex(0, 1, "j"), 0);
  assert.equal(stepRenderLineIndex(9, 3, "j"), 2);
}

{
  const canvasId = "anoptic-api-algebra";
  const down = applyCanvasRenderGrid({ canvasId, lineIndex: 2, lineCount: 8 }, "j");
  assert.equal(down.canvasId, canvasId);
  assert.equal(down.lineIndex, 3);
  const up = applyCanvasRenderGrid({ canvasId, lineIndex: 2, lineCount: 8 }, "k");
  assert.equal(up.canvasId, canvasId);
  assert.equal(up.lineIndex, 1);
  const left = applyCanvasRenderGrid({ canvasId, lineIndex: 2, lineCount: 8 }, "h");
  assert.equal(left.canvasId, canvasId);
  assert.equal(left.lineIndex, 2);
  const right = applyCanvasRenderGrid({ canvasId, lineIndex: 2, lineCount: 8 }, "l");
  assert.equal(right.canvasId, canvasId);
  assert.equal(right.lineIndex, 2);
}

{
  const css = readFileSync(new URL("../style.css", import.meta.url), "utf8");
  assert.ok(css.includes(`.${RENDER_LINE_CARET_CLASS}`));
  assert.ok(css.includes("pointer-events: none"));
  const caret = css.slice(css.indexOf(`.${RENDER_LINE_CARET_CLASS} {`), css.indexOf(".off-filter {"));
  assert.ok(caret.includes("position: absolute"));
  assert.equal(caret.includes("var(--ink)"), false);
  const host = css.slice(css.indexOf(".canvas-host {"), css.indexOf(".canvas-host div:has(> svg)"));
  assert.ok(host.includes("position: relative"));
}

console.log("renderLine.test.ts ok");
