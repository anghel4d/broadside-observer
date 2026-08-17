import { createHighlighterCoreSync } from "shiki/core";
import { createJavaScriptRegexEngine } from "shiki/engine/javascript";
import bash from "@shikijs/langs/bash";
import c from "@shikijs/langs/c";
import cpp from "@shikijs/langs/cpp";
import diff from "@shikijs/langs/diff";
import haskell from "@shikijs/langs/haskell";
import javascript from "@shikijs/langs/javascript";
import json from "@shikijs/langs/json";
import markdown from "@shikijs/langs/markdown";
import python from "@shikijs/langs/python";
import rust from "@shikijs/langs/rust";
import typescript from "@shikijs/langs/typescript";
import xml from "@shikijs/langs/xml";
import githubDark from "@shikijs/themes/github-dark";
import githubLight from "@shikijs/themes/github-light";

/**
 * Fine-grained Shiki core + JS regex engine.
 * `createHighlighter` from `shiki` pulls the kitchen-sink language map (and wasm);
 * explicit grammars keep unused TextMate packs out of the Vite single-file Pages build.
 * tsx is not loaded: the grammar is ~typescript-sized; `language-tsx` aliases to typescript.
 */
const highlighter = createHighlighterCoreSync({
  engine: createJavaScriptRegexEngine({ forgiving: true }),
  langs: [cpp, c, haskell, typescript, javascript, python, rust, bash, json, xml, markdown, diff],
  themes: [githubDark, githubLight],
});

const PLAIN = new Set(["plaintext", "text", "txt", "plain"]);

const ALIAS: Record<string, string> = {
  "c++": "cpp",
  cxx: "cpp",
  hpp: "cpp",
  tsx: "typescript",
  jsx: "javascript",
  ts: "typescript",
  js: "javascript",
  py: "python",
  sh: "bash",
  shell: "bash",
  zsh: "bash",
  md: "markdown",
  hs: "haskell",
  rs: "rust",
};

const LOADED = new Set([...highlighter.getLoadedLanguages(), ...PLAIN]);

const LANGUAGE_CLASS = /(?:^|\s)(?:language|lang)-([a-z0-9+#._-]+)/i;

/** Token colors only; `structure: "inline"` skips Shiki's editor background. */
export const CANVAS_SHIKI_THEMES = {
  light: "github-light",
  dark: "github-dark",
} as const;

export type HighlightTarget = {
  className: string;
  classList: { contains(name: string): boolean; add(name: string): void };
  textContent: string | null;
  innerHTML: string;
  parentElement: { className: string } | null;
  tagName?: string;
  style?: { whiteSpace?: string };
};

function resolveNamedLanguage(name: string): string | undefined {
  const aliased = ALIAS[name] ?? name;
  return LOADED.has(aliased) ? aliased : undefined;
}

function languageFromClass(className: string): string | undefined {
  const match = LANGUAGE_CLASS.exec(className);
  const name = match?.[1]?.toLowerCase();
  if (name === undefined) return undefined;
  return resolveNamedLanguage(name);
}

function looksLikeAlgebra(code: string): boolean {
  return /-->/.test(code) || /[→×π★]/.test(code) || /Result\s*\([^)]*\)\s*=/.test(code);
}

function looksLikeHaskell(code: string): boolean {
  return /\bmodule\s+\w+/.test(code) || /::\s*IO\b/.test(code);
}

/** Eq-style type blocks: a `div` with `white-space: pre`, not `pre`/`code`. */
export function isEqLikeBlock(el: HighlightTarget): boolean {
  const tag = el.tagName?.toUpperCase();
  if (tag === "PRE" || tag === "CODE") return false;
  if (tag !== undefined && tag !== "DIV") return false;
  return el.style?.whiteSpace === "pre";
}

export function resolveCanvasLanguage(code: string, className = ""): string {
  const named = languageFromClass(className);
  if (named !== undefined) return named;
  if (looksLikeAlgebra(code)) return "plaintext";
  if (looksLikeHaskell(code)) return "haskell";
  return "cpp";
}

function canvasShikiTheme(): "github-light" | "github-dark" {
  return typeof document !== "undefined" && document.documentElement.dataset.theme === "light"
    ? CANVAS_SHIKI_THEMES.light
    : CANVAS_SHIKI_THEMES.dark;
}

function isPlain(language: string): boolean {
  return PLAIN.has(language);
}

const SHIKI_HTML = { structure: "inline" as const, mergeSameStyleTokens: true };

/** Highlight source to inner HTML (no wrapping pre). Plaintext stays uncolored. */
export function highlightCanvasSource(code: string, language?: string, theme = canvasShikiTheme()): string {
  const lang = language ?? resolveCanvasLanguage(code);
  if (isPlain(lang)) return code;
  return highlighter.codeToHtml(code, { lang, theme, ...SHIKI_HTML });
}

/** Paint one `pre`/`code` node, or an Eq-like `div` as Haskell. */
export function highlightCanvasElement(el: HighlightTarget, theme = canvasShikiTheme()): void {
  if (el.classList.contains("shiki")) return;
  const text = el.textContent ?? "";
  if (text.trim() === "") return;
  const language = isEqLikeBlock(el)
    ? "haskell"
    : resolveCanvasLanguage(text, `${el.className} ${el.parentElement?.className ?? ""}`);
  el.classList.add("shiki");
  if (isPlain(language)) return;
  try {
    el.innerHTML = highlighter.codeToHtml(text, { lang: language, theme, ...SHIKI_HTML });
  } catch {
    // leave the original text
  }
}

/** RENDER-only. Walk painted `pre`/`code` and Eq-like `div`s after mount. RAW textarea is not in the host. */
export function highlightCanvasCode(root: ParentNode): void {
  const theme = canvasShikiTheme();
  for (const pre of root.querySelectorAll("pre")) {
    const code = pre.querySelector(":scope > code");
    highlightCanvasElement(code ?? pre, theme);
  }
  for (const code of root.querySelectorAll("code")) {
    if (code.parentElement?.tagName === "PRE") continue;
    highlightCanvasElement(code, theme);
  }
  for (const div of root.querySelectorAll("div")) {
    if (!isEqLikeBlock(div)) continue;
    highlightCanvasElement(div, theme);
  }
}
