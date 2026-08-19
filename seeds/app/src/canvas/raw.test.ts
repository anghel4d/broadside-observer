import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  canvasEdgeAction,
  canvasJumpHtml,
  caretAtBufferEdge,
  caretDocumentY,
  jumpCanvasScroller,
  lockEditorScroll,
  paintRawHighlight,
  rawEditorHtml,
  scrollByLineHeight,
  scrollerAtEdge,
  scrollerTopForCaret,
} from "./raw.ts";
import { highlightCanvasSource } from "./highlight.ts";

{
  const src = "f : A → Result(B, E)\ng : B → Result(C, E)";
  const node = { innerHTML: "" };
  paintRawHighlight(node, src);
  const html = node.innerHTML;
  assert.ok(html.includes("<span"), "RAW must emit Haskell token spans");
  assert.ok(/style="color:/i.test(html), "RAW Haskell tokens must carry colors");
  assert.equal(html.includes("<pre"), false, "inline structure must not wrap a pre");
  assert.equal(/background(-color)?:/i.test(html), false, "Shiki must not paint editor background");
  assert.equal(html.includes("<br"), false, "overlay highlight must use newlines, not br");
  assert.ok(html.includes("\n"), "multiline RAW source must keep newlines for overlay alignment");
  assert.equal(html, highlightCanvasSource(src, "haskell").replace(/<br\s*\/?>/gi, "\n"));
}

{
  const node = { innerHTML: "" };
  const src = "module Main where\nmain :: IO ()\nmain = pure ()";
  paintRawHighlight(node, src);
  assert.ok(node.innerHTML.includes("<span"));
  assert.equal(node.innerHTML, highlightCanvasSource(src, "haskell").replace(/<br\s*\/?>/gi, "\n"));
  assert.equal(/background(-color)?:/i.test(node.innerHTML), false);
}

{
  const scroller = { scrollTop: 40, scrollHeight: 900 };
  jumpCanvasScroller(scroller, "top");
  assert.equal(scroller.scrollTop, 0);
  jumpCanvasScroller(scroller, "bottom");
  assert.equal(scroller.scrollTop, 900);
}

{
  const scroller = { scrollTop: 0, scrollHeight: 900, clientHeight: 200 };
  assert.equal(scrollerAtEdge(scroller, "top"), true);
  assert.equal(scrollerAtEdge(scroller, "bottom"), false);
  scroller.scrollTop = 1;
  assert.equal(scrollerAtEdge(scroller, "top"), true);
  scroller.scrollTop = 3;
  assert.equal(scrollerAtEdge(scroller, "top"), false);
  scroller.scrollTop = 698;
  assert.equal(scrollerAtEdge(scroller, "bottom"), true);
  scroller.scrollTop = 700;
  assert.equal(scrollerAtEdge(scroller, "bottom"), true);
  scroller.scrollTop = 696;
  assert.equal(scrollerAtEdge(scroller, "bottom"), false);
  const short = { scrollTop: 0, scrollHeight: 100, clientHeight: 200 };
  assert.equal(scrollerAtEdge(short, "top"), true);
  assert.equal(scrollerAtEdge(short, "bottom"), true);
}

{
  assert.equal(caretAtBufferEdge(0, 0, 10, "k"), true);
  assert.equal(caretAtBufferEdge(10, 10, 10, "j"), true);
  assert.equal(caretAtBufferEdge(4, 4, 10, "j"), false);
  assert.equal(caretAtBufferEdge(4, 4, 10, "k"), false);
  assert.equal(caretAtBufferEdge(0, 10, 10, "j"), false);
  assert.equal(caretAtBufferEdge(0, 0, 0, "j"), true);
  assert.equal(caretAtBufferEdge(0, 0, 0, "k"), true);
}

{
  assert.deepEqual(canvasEdgeAction(false, "j"), { _tag: "Jump", to: "bottom" });
  assert.deepEqual(canvasEdgeAction(true, "j"), { _tag: "Switch", delta: 1, land: "top" });
  assert.deepEqual(canvasEdgeAction(false, "k"), { _tag: "Jump", to: "top" });
  assert.deepEqual(canvasEdgeAction(true, "k"), { _tag: "Switch", delta: -1, land: "bottom" });
}

{
  const scroller = { scrollTop: 40, scrollHeight: 900, clientHeight: 200 };
  scrollByLineHeight(scroller, 20, 1);
  assert.equal(scroller.scrollTop, 60);
  scrollByLineHeight(scroller, 20, -1);
  assert.equal(scroller.scrollTop, 40);
  scroller.scrollTop = 0;
  scrollByLineHeight(scroller, 20, -1);
  assert.equal(scroller.scrollTop, 0);
  scroller.scrollTop = 695;
  scrollByLineHeight(scroller, 20, 1);
  assert.equal(scroller.scrollTop, 700);
  const before = scroller.scrollTop;
  scrollByLineHeight(scroller, Number.NaN, 1);
  scrollByLineHeight(scroller, 0, -1);
  assert.equal(scroller.scrollTop, before);
}

{
  const el = { scrollTop: 12, scrollLeft: 8 };
  lockEditorScroll(el);
  assert.equal(el.scrollTop, 0);
  assert.equal(el.scrollLeft, 0);
}

assert.equal(caretDocumentY("a\nb\nc", 0, 20, 12), 12);
assert.equal(caretDocumentY("a\nb\nc", 2, 20, 12), 32);
assert.equal(caretDocumentY("a\nb\nc", 99, 20, 12), 52);

assert.equal(scrollerTopForCaret(10, 20, 0, 200), null);
assert.equal(scrollerTopForCaret(0, 20, 40, 200), 0);
assert.equal(scrollerTopForCaret(300, 20, 0, 200), 120);

{
  const html = canvasJumpHtml();
  assert.ok(html.includes('data-canvas-jump="top"'));
  assert.ok(html.includes('data-canvas-jump="bottom"'));
  assert.ok(html.includes("class=\"seg canvas-jump\""));
  assert.equal(html.includes("<textarea"), false);
}

{
  const html = rawEditorHtml("f : A -&gt; B");
  assert.ok(html.includes('id="canvas-source"'));
  assert.ok(html.includes("canvas-source-highlight"));
  assert.ok(html.includes('wrap="off"'));
  assert.ok(html.includes("<textarea"));
  assert.equal(html.includes("readonly"), false, "RAW must stay editable");
  assert.ok(html.includes("f : A -&gt; B"));
}

{
  const css = readFileSync(new URL("../style.css", import.meta.url), "utf8");
  assert.ok(css.includes("display: grid"), "RAW overlay must stack highlight + input");
  assert.ok(css.includes(".canvas-source-highlight"));
  assert.ok(css.includes(".canvas-source-input"));
  assert.ok(css.includes("resize: none"));
  const sourceBlock = css.slice(css.indexOf(".canvas-source {"), css.indexOf(".canvas-host {"));
  assert.equal(sourceBlock.includes("overflow: auto"), false, "RAW must not use inner overflow:auto");
  assert.equal(sourceBlock.includes("height: 100%"), false, "RAW must not fill the pane height");
  assert.equal(sourceBlock.includes("resize: vertical"), false, "RAW must not be a resizable textarea box");
  const phone = css.slice(css.indexOf("@media (width <= 560px)"));
  assert.equal(phone.includes("textarea.canvas-source"), false);
  assert.equal(/\.canvas-source \{\s*\n\s*height:\s*100%/.test(phone), false);
  assert.ok(css.includes(".canvas-jump"));
  assert.ok(/\.canvas-source \{[^}]*background:\s*transparent/.test(css), "RAW must share the pane, not a second card");
  const overlayPad = css.slice(
    css.indexOf(".canvas-source-highlight,"),
    css.indexOf(".canvas-source-highlight {"),
  );
  assert.ok(/padding:\s*0/.test(overlayPad), "overlay layers must not add a second inset");
}

console.log("raw.test.ts ok");
