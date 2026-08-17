import { assertNever } from "../domain/never.ts";
import { clamp } from "../shell/virtualize.ts";
import type { GridDir } from "../shell/gridNav.ts";
import { scrollerTopForCaret } from "./raw.ts";

/** One painted line box from Range.getClientRects (not CSS line-height). */
export type LineBox = {
  readonly top: number;
  readonly left: number;
  readonly height: number;
  readonly width: number;
};

export const RENDER_LINE_CARET_CLASS = "canvas-line-caret";

/** Cluster client rects that share a visual row. */
export function mergeLineBoxes(rects: ReadonlyArray<LineBox>, epsilon = 1): LineBox[] {
  const sorted = rects
    .filter((rect) => rect.width > 0 && rect.height > 0)
    .slice()
    .sort((a, b) => a.top - b.top || a.left - b.left);
  const lines: LineBox[] = [];
  for (const rect of sorted) {
    const last = lines[lines.length - 1];
    if (last !== undefined && Math.abs(rect.top - last.top) <= epsilon) {
      const left = Math.min(last.left, rect.left);
      const top = Math.min(last.top, rect.top);
      const right = Math.max(last.left + last.width, rect.left + rect.width);
      const bottom = Math.max(last.top + last.height, rect.top + rect.height);
      lines[lines.length - 1] = { top, left, width: right - left, height: bottom - top };
    } else {
      lines.push(rect);
    }
  }
  return lines;
}

export function stepRenderLineIndex(index: number, count: number, dir: GridDir): number {
  if (count <= 0) return 0;
  const i = clamp(index, 0, count - 1);
  switch (dir) {
    case "h":
    case "l":
      return i;
    case "j":
      return Math.min(count - 1, i + 1);
    case "k":
      return Math.max(0, i - 1);
    default:
      return assertNever(dir);
  }
}

/**
 * j/k step one visual line. h/l are no-ops. The selected canvas id is never
 * part of this geometry — file switching stays click / list UI.
 */
export function applyCanvasRenderGrid(
  state: {
    readonly canvasId: string | null;
    readonly lineIndex: number;
    readonly lineCount: number;
  },
  dir: GridDir,
): { readonly canvasId: string | null; readonly lineIndex: number } {
  return {
    canvasId: state.canvasId,
    lineIndex: stepRenderLineIndex(state.lineIndex, state.lineCount, dir),
  };
}

export function collectTextLineBoxes(host: HTMLElement): LineBox[] {
  const rects: LineBox[] = [];
  const walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  let node = walker.nextNode();
  while (node !== null) {
    const text = node.nodeValue;
    if (text !== null && text.trim() !== "") {
      range.selectNodeContents(node);
      for (const rect of range.getClientRects()) {
        rects.push({ top: rect.top, left: rect.left, height: rect.height, width: rect.width });
      }
    }
    node = walker.nextNode();
  }
  return mergeLineBoxes(rects);
}

export function placeRenderLineCaret(
  host: HTMLElement,
  scroller: HTMLElement,
  index: number,
): number {
  const lines = collectTextLineBoxes(host);
  const nextIndex = stepRenderLineIndex(index, lines.length, "h");
  const existing = host.querySelector(`.${RENDER_LINE_CARET_CLASS}`);
  let caret: HTMLElement;
  if (existing instanceof HTMLElement) {
    caret = existing;
  } else {
    caret = document.createElement("span");
    caret.className = RENDER_LINE_CARET_CLASS;
    caret.setAttribute("aria-hidden", "true");
    host.appendChild(caret);
  }
  if (lines.length === 0) {
    caret.hidden = true;
    return 0;
  }
  const line = lines[nextIndex];
  if (line === undefined) {
    caret.hidden = true;
    return 0;
  }
  const hostBox = host.getBoundingClientRect();
  caret.hidden = false;
  caret.style.top = `${line.top - hostBox.top}px`;
  caret.style.left = `${line.left - hostBox.left}px`;
  caret.style.height = `${line.height}px`;
  const pane = scroller.getBoundingClientRect();
  const caretDocY = scroller.scrollTop + (line.top - pane.top);
  const scrollTo = scrollerTopForCaret(caretDocY, line.height, scroller.scrollTop, scroller.clientHeight);
  if (scrollTo !== null) scroller.scrollTop = scrollTo;
  return nextIndex;
}
