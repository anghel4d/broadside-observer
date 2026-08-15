import { assertNever } from "../domain/never.ts";
import { clamp, gridColumns } from "./virtualize.ts";

export const GRID_DIRS = ["h", "j", "k", "l"] as const;
export type GridDir = (typeof GRID_DIRS)[number];

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

/**
 * Count column tracks in a computed `grid-template-columns` value.
 * Handles `minmax(...)` tokens and expanded `repeat(N, ...)`.
 */
export function countGridTemplateColumns(value: string): number {
  const trimmed = value.trim();
  if (trimmed === "" || trimmed === "none") return 0;
  // Specified `auto-fill`/`auto-fit` is not a track list; callers fall back to width.
  if (/repeat\(\s*auto-(?:fill|fit)\b/u.test(trimmed)) return 0;
  const tokens: string[] = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i <= trimmed.length; i++) {
    const ch = i < trimmed.length ? trimmed[i] : " ";
    if (ch === "(") depth += 1;
    else if (ch === ")") depth = Math.max(0, depth - 1);
    else if (depth === 0 && (ch === " " || ch === "\t" || i === trimmed.length)) {
      if (i > start) tokens.push(trimmed.slice(start, i));
      start = i + 1;
    }
  }
  let count = 0;
  for (const token of tokens) {
    const repeat = /^repeat\(\s*(\d+)\s*,/u.exec(token);
    if (repeat !== null) {
      const n = Number(repeat[1]);
      if (Number.isFinite(n) && n > 0) {
        count += n;
        continue;
      }
    }
    count += 1;
  }
  return count;
}

/**
 * Prefer the live CSS track list; fall back to the virtualizer's
 * `gridColumns` formula (strict grow, shrink hysteresis via `prevCols`).
 */
export function measureGridColumns(args: {
  readonly templateColumns: string | null | undefined;
  readonly width: number;
  readonly track: number;
  readonly gap: number;
  readonly prevCols?: number;
}): number {
  const fromStyle = countGridTemplateColumns(args.templateColumns ?? "");
  if (fromStyle >= 1) return fromStyle;
  return gridColumns(args.width, args.track, args.gap, args.prevCols);
}
