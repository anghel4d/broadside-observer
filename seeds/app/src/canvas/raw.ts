import { highlightCanvasSource } from "./highlight.ts";
import { useHostTheme, type CanvasHostTheme } from "./theme.ts";

/** RAW overlay always highlights as Haskell. Token colors only; chrome is canvas palettes. */
export const RAW_HIGHLIGHT_LANG = "haskell";

export type RawChrome = {
  readonly background: string;
  readonly color: string;
  readonly border: string;
};

export function rawChromeStyle(theme: CanvasHostTheme): RawChrome {
  return {
    background: theme.bg.editor,
    color: theme.text.primary,
    border: `1px solid ${theme.stroke.tertiary}`,
  };
}

export function applyRawChrome(
  el: { style: { background: string; color: string; border: string } },
  theme: CanvasHostTheme = useHostTheme(),
): void {
  const chrome = rawChromeStyle(theme);
  el.style.background = chrome.background;
  el.style.color = chrome.color;
  el.style.border = chrome.border;
}

/** Shiki `structure: "inline"` emits `<br>`; overlay alignment needs real newlines. */
export function rawHighlightHtml(source: string): string {
  const html = highlightCanvasSource(source, RAW_HIGHLIGHT_LANG);
  return html.replace(/<br\s*\/?>/gi, "\n");
}

export function paintRawHighlight(el: { innerHTML: string }, source: string): void {
  el.innerHTML = rawHighlightHtml(source);
}

export function jumpCanvasScroller(
  scroller: { scrollTop: number; scrollHeight: number },
  to: "top" | "bottom",
): void {
  scroller.scrollTop = to === "top" ? 0 : scroller.scrollHeight;
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
  return `<div class="seg canvas-jump" id="canvas-jump" role="group" aria-label="Jump in canvas">
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
  applyRawChrome(wrap, theme);
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
