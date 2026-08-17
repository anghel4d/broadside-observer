import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  applyRawChrome,
  canvasJumpHtml,
  caretDocumentY,
  jumpCanvasScroller,
  lockEditorScroll,
  paintRawHighlight,
  RAW_HIGHLIGHT_LANG,
  rawChromeStyle,
  rawEditorHtml,
  rawHighlightHtml,
  scrollerTopForCaret,
} from "./raw.ts";
import { highlightCanvasSource } from "./highlight.ts";
import { buildHostTheme, canvasPaletteDark, canvasPaletteLight } from "./theme.ts";

assert.equal(RAW_HIGHLIGHT_LANG, "haskell");

{
  const src = "f : A → Result(B, E)\ng : B → Result(C, E)";
  const html = rawHighlightHtml(src);
  assert.ok(html.includes("<span"), "RAW must emit Haskell token spans");
  assert.ok(/style="color:/i.test(html), "RAW Haskell tokens must carry colors");
  assert.equal(html.includes("<pre"), false, "inline structure must not wrap a pre");
  assert.equal(/background(-color)?:/i.test(html), false, "Shiki must not paint editor background");
  assert.equal(html.includes("<br"), false, "overlay highlight must use newlines, not br");
  assert.ok(html.includes("\n"), "multiline RAW source must keep newlines for overlay alignment");
  assert.equal(html, highlightCanvasSource(src, "haskell").replace(/<br\s*\/?>/gi, "\n"));
}

{
  const dark = rawChromeStyle(buildHostTheme("dark"));
  const light = rawChromeStyle(buildHostTheme("light"));
  assert.equal(dark.background, canvasPaletteDark.editor);
  assert.equal(light.background, canvasPaletteLight.editor);
  assert.notEqual(dark.background, light.background, "RAW chrome must differ in light and dark");
  assert.equal(dark.color, buildHostTheme("dark").text.primary);
  assert.equal(light.color, buildHostTheme("light").text.primary);
  assert.equal(dark.border, `1px solid ${buildHostTheme("dark").stroke.tertiary}`);
  assert.notEqual(dark.border, light.border);
  const el = { style: { background: "", color: "", border: "" } };
  applyRawChrome(el, buildHostTheme("light"));
  assert.equal(el.style.background, light.background);
  assert.equal(el.style.color, light.color);
  assert.equal(el.style.border, light.border);
}

{
  const node = { innerHTML: "" };
  const src = "module Main where\nmain :: IO ()\nmain = pure ()";
  paintRawHighlight(node, src);
  assert.ok(node.innerHTML.includes("<span"));
  assert.equal(node.innerHTML, rawHighlightHtml(src));
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
  assert.equal(/\.canvas-source,\s*\n\s*\.canvas-host \{[^}]*overflow:\s*auto/.test(phone), false);
  assert.equal(/\.canvas-source \{\s*\n\s*height:\s*100%/.test(phone), false);
  assert.equal(/\.detail:has\(\.canvas-host\) \.detail-body \{[^}]*overflow:\s*hidden/.test(phone), false);
  assert.ok(css.includes(".canvas-jump"));
  assert.ok(
    /#app\[data-view="canvas"\]\s*\.canvas-source\s*\{[^}]*padding-inline:\s*2rem/.test(css),
    "RAW surface must inset ≥2rem with the reading column",
  );
}

console.log("raw.test.ts ok");
