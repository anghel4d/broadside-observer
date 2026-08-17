import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import c from "highlight.js/lib/languages/c";
import cpp from "highlight.js/lib/languages/cpp";
import diff from "highlight.js/lib/languages/diff";
import haskell from "highlight.js/lib/languages/haskell";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import markdown from "highlight.js/lib/languages/markdown";
import plaintext from "highlight.js/lib/languages/plaintext";
import python from "highlight.js/lib/languages/python";
import rust from "highlight.js/lib/languages/rust";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";

/** Languages this catalog actually ships. Keep in sync with registerLanguage calls. */
export const CANVAS_HLJS_LANGUAGES = [
  "c",
  "cpp",
  "typescript",
  "javascript",
  "haskell",
  "rust",
  "python",
  "bash",
  "json",
  "xml",
  "markdown",
  "diff",
  "plaintext",
] as const;

hljs.registerLanguage("xml", xml);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("c", c);
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("haskell", haskell);
hljs.registerLanguage("rust", rust);
hljs.registerLanguage("python", python);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("json", json);
hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("diff", diff);
hljs.registerLanguage("plaintext", plaintext);

const LANGUAGE_CLASS = /(?:^|\s)(?:language|lang)-([a-z0-9+#._-]+)/i;

export type HighlightTarget = {
  className: string;
  classList: { contains(name: string): boolean; add(name: string): void };
  textContent: string | null;
  innerHTML: string;
  parentElement: { className: string } | null;
};

function languageFromClass(className: string): string | undefined {
  const match = LANGUAGE_CLASS.exec(className);
  const name = match?.[1];
  if (name === undefined) return undefined;
  return hljs.getLanguage(name) === undefined ? undefined : name;
}

function languageFor(el: HighlightTarget): string | undefined {
  return languageFromClass(el.className) ?? languageFromClass(el.parentElement?.className ?? "");
}

/** Highlight source to HTML. Used by the DOM walker and tests. */
export function highlightCanvasSource(code: string, language?: string): string {
  if (language !== undefined && hljs.getLanguage(language) !== undefined) {
    return hljs.highlight(code, { language, ignoreIllegals: true }).value;
  }
  return hljs.highlightAuto(code, [...CANVAS_HLJS_LANGUAGES]).value;
}

/** Paint one `pre`/`code` node. Skips empty or already highlighted blocks. */
export function highlightCanvasElement(el: HighlightTarget): void {
  if (el.classList.contains("hljs")) return;
  const text = el.textContent ?? "";
  if (text.trim() === "") return;
  try {
    el.innerHTML = highlightCanvasSource(text, languageFor(el));
    el.classList.add("hljs");
  } catch {
    // leave the original text; a bad grammar must not blank the canvas
  }
}

/** RENDER-only. Walk painted `pre`/`code` after mount. RAW textarea is not in the host. */
export function highlightCanvasCode(root: ParentNode): void {
  for (const pre of root.querySelectorAll("pre")) {
    const code = pre.querySelector(":scope > code");
    highlightCanvasElement(code ?? pre);
  }
  for (const code of root.querySelectorAll("code")) {
    if (code.parentElement?.tagName === "PRE") continue;
    highlightCanvasElement(code);
  }
}
