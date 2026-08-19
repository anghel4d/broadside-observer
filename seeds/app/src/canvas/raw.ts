import { highlightCanvasSource } from "./highlight.ts";
import { applyCanvasChrome, useHostTheme, type CanvasHostTheme } from "./theme.ts";

/** Shiki `structure: "inline"` emits `<br>`; overlay alignment needs real newlines. */
export function paintRawHighlight(el: { innerHTML: string }, source: string): void {
  el.innerHTML = highlightCanvasSource(source, "haskell").replace(/<br\s*\/?>/gi, "\n");
}

export function jumpCanvasScroller(
  scroller: { scrollTop: number; scrollHeight: number },
  to: "top" | "bottom",
): void {
  scroller.scrollTop = to === "top" ? 0 : scroller.scrollHeight;
}

const SCROLL_EDGE_PX = 2;

type PaneScroller = {
  scrollTop: number;
  readonly scrollHeight: number;
  readonly clientHeight: number;
};

function paneMaxScroll(scroller: Pick<PaneScroller, "scrollHeight" | "clientHeight">): number {
  return Math.max(0, scroller.scrollHeight - scroller.clientHeight);
}

/** Abstract Down is the bottom of the document; Up is the top. */
export function scrollEdge(dir: "j" | "k"): "top" | "bottom" {
  return dir === "j" ? "bottom" : "top";
}

export function scrollerAtEdge(
  scroller: Pick<PaneScroller, "scrollTop" | "scrollHeight" | "clientHeight">,
  edge: "top" | "bottom",
  epsilonPx = SCROLL_EDGE_PX,
): boolean {
  if (edge === "top") return scroller.scrollTop <= epsilonPx;
  return scroller.scrollTop >= paneMaxScroll(scroller) - epsilonPx;
}

export type CanvasEdgeAction =
  | { readonly _tag: "Jump"; readonly to: "top" | "bottom" }
  | { readonly _tag: "Switch"; readonly delta: -1 | 1; readonly land: "top" | "bottom" };

/** Jump to the document edge, or page to the next/prev canvas if already there. */
export function canvasEdgeAction(atEdge: boolean, dir: "j" | "k"): CanvasEdgeAction {
  const to = scrollEdge(dir);
  if (!atEdge) return { _tag: "Jump", to };
  return { _tag: "Switch", delta: dir === "j" ? 1 : -1, land: scrollEdge(dir === "j" ? "k" : "j") };
}

/** One CSS line-height step. Clamp to [0, max scroll]. No-op if lineHeight is not a positive px. */
export function scrollByLineHeight(scroller: PaneScroller, lineHeight: number, delta: -1 | 1): void {
  if (!(lineHeight > 0)) return;
  const max = paneMaxScroll(scroller);
  scroller.scrollTop = Math.min(max, Math.max(0, scroller.scrollTop + delta * lineHeight));
}

export function lockEditorScroll(el: { scrollTop: number; scrollLeft: number }): void {
  el.scrollTop = 0;
  el.scrollLeft = 0;
}

export function caretDocumentY(source: string, caret: number, lineHeight: number, paddingTop: number): number {
  const clamped = Math.max(0, Math.min(caret, source.length));
  const line = source.slice(0, clamped).split("\n").length - 1;
  return paddingTop + line * lineHeight;
}

/** New scrollTop so the caret line stays inside the pane, or null if already visible. */
export function scrollerTopForCaret(
  caretDocY: number,
  lineHeight: number,
  scrollTop: number,
  clientHeight: number,
): number | null {
  if (clientHeight <= 0) return null;
  if (caretDocY < scrollTop) return Math.max(0, caretDocY);
  const bottom = caretDocY + lineHeight;
  if (bottom > scrollTop + clientHeight) return Math.max(0, bottom - clientHeight);
  return null;
}

export function canvasJumpHtml(): string {
  return `<div class="seg canvas-jump" role="group" aria-label="Jump in canvas">
                <button type="button" data-canvas-jump="top">Top</button>
                <button type="button" data-canvas-jump="bottom">Bottom</button>
              </div>`;
}

export function rawEditorHtml(escapedSource: string): string {
  return `<div class="canvas-source">
            <pre class="canvas-source-highlight" id="canvas-source-highlight" aria-hidden="true"></pre>
            <textarea id="canvas-source" class="canvas-source-input" spellcheck="false" autocomplete="off" autocapitalize="off" wrap="off" aria-label="Canvas source">${escapedSource}</textarea>
          </div>`;
}

export function mountRawEditor(root: ParentNode, theme: CanvasHostTheme = useHostTheme()): void {
  const wrap = root.querySelector(".canvas-source");
  const highlight = root.querySelector(".canvas-source-highlight");
  const input = root.querySelector("#canvas-source");
  if (!(wrap instanceof HTMLElement) || !(highlight instanceof HTMLElement)) return;
  applyCanvasChrome(wrap, theme);
  const source = input instanceof HTMLTextAreaElement ? input.value : "";
  paintRawHighlight(highlight, source);
}

export function followCaretInScroller(scroller: HTMLElement, textarea: HTMLTextAreaElement): void {
  const styles = getComputedStyle(textarea);
  const lineHeight = Number.parseFloat(styles.lineHeight);
  const paddingTop = Number.parseFloat(styles.paddingTop);
  if (!Number.isFinite(lineHeight) || lineHeight <= 0) return;
  const caretY = caretDocumentY(
    textarea.value,
    textarea.selectionStart,
    lineHeight,
    Number.isFinite(paddingTop) ? paddingTop : 0,
  );
  const pane = scroller.getBoundingClientRect();
  const field = textarea.getBoundingClientRect();
  const caretDocY = scroller.scrollTop + (field.top - pane.top) + caretY;
  const next = scrollerTopForCaret(caretDocY, lineHeight, scroller.scrollTop, scroller.clientHeight);
  if (next !== null) scroller.scrollTop = next;
}
