import { assertNever } from "../domain/never.ts";
import { clamp } from "./virtualize.ts";

const GRID_DIRS = ["h", "j", "k", "l"] as const;
export type GridDir = (typeof GRID_DIRS)[number];
export type EdgeDir = Extract<GridDir, "j" | "k">;

/** Map vim / arrow keys onto grid directions. Unknown keys are `null`. */
export function gridDirFromKey(key: string): GridDir | null {
  switch (key) {
    case "h":
    case "ArrowLeft":
      return "h";
    case "j":
    case "ArrowDown":
      return "j";
    case "k":
    case "ArrowUp":
      return "k";
    case "l":
    case "ArrowRight":
      return "l";
    default:
      return null;
  }
}

/** Shifted abstract Down / Up. `H`/`L` stay on the pane splitter. */
export function edgeDirFromKey(key: string, shiftKey: boolean): EdgeDir | null {
  if (!shiftKey) return null;
  const dir = gridDirFromKey(key.length === 1 ? key.toLowerCase() : key);
  return dir === "j" || dir === "k" ? dir : null;
}

export function verticalDelta(dir: GridDir | null): -1 | 1 | null {
  if (dir === "j") return 1;
  if (dir === "k") return -1;
  return null;
}

type RawCaret = {
  readonly start: number;
  readonly end: number;
  readonly length: number;
};

function caretAtBufferEdge(caret: RawCaret, dir: EdgeDir): boolean {
  if (caret.start !== caret.end) return false;
  if (dir === "j") return caret.start === caret.length;
  return caret.start === 0;
}

/**
 * When the canvas-edge command should fire. List/Cards never bind it.
 * RAW textarea: keep `Shift+J`/`K` as letters and Shift+arrows as selection
 * unless the caret is already collapsed at that buffer edge.
 */
export function canvasEdgeBinding(args: {
  readonly view: "canvas" | "list" | "cards";
  readonly key: string;
  readonly shiftKey: boolean;
  readonly typing: boolean;
  readonly rawCaret: RawCaret | null;
}): EdgeDir | null {
  if (args.view !== "canvas") return null;
  const dir = edgeDirFromKey(args.key, args.shiftKey);
  if (dir === null) return null;
  if (!args.typing) return dir;
  if (args.rawCaret === null) return null;
  if (args.key !== "ArrowDown" && args.key !== "ArrowUp") return null;
  if (!caretAtBufferEdge(args.rawCaret, dir)) return null;
  return dir;
}

/**
 * One step on a row-major grid. `h`/`l` stay on the current row; `k`/`j`
 * stay on the current column. Off-edge moves clamp (no wrap).
 *
 * `cols` is the live column count at this step — after a 2×N → 12×N
 * relayout, the next call uses the new `cols` so the same index moves
 * spatially on the new grid.
 */
export function moveGridIndex(index: number, cols: number, count: number, dir: GridDir): number {
  if (count <= 0) return 0;
  const columns = Math.max(1, Math.floor(cols));
  const i = clamp(index, 0, count - 1);
  const row = Math.floor(i / columns);
  const col = i % columns;
  let nextRow = row;
  let nextCol = col;
  switch (dir) {
    case "h":
      nextCol = col - 1;
      break;
    case "j":
      nextRow = row + 1;
      break;
    case "k":
      nextRow = row - 1;
      break;
    case "l":
      nextCol = col + 1;
      break;
    default:
      return assertNever(dir);
  }
  if (nextRow < 0 || nextCol < 0 || nextCol >= columns) return i;
  const next = nextRow * columns + nextCol;
  if (next < 0 || next >= count) return i;
  return next;
}
