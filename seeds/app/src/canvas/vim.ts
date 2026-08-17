import { assertNever } from "../domain/never.ts";
import type { GridDir } from "../shell/gridNav.ts";

export type VimMode = "normal" | "insert";

export type VimCaret = {
  readonly mode: VimMode;
  readonly offset: number;
  readonly wantCol: number;
};

export type VimDoc = {
  readonly source: string;
  readonly caret: VimCaret;
};

export type VimInsertKey = "i" | "a" | "I" | "A" | "o" | "O";

export type RawNavEvent =
  | { readonly _tag: "Motion"; readonly dir: GridDir }
  | { readonly _tag: "InsertKey"; readonly key: VimInsertKey }
  | { readonly _tag: "Escape" }
  | { readonly _tag: "ClickEditor"; readonly offset: number }
  | { readonly _tag: "ClickOutside" };

type LineSpan = { readonly start: number; readonly end: number };

export function vimInsertKey(key: string): VimInsertKey | null {
  switch (key) {
    case "i":
    case "a":
    case "I":
    case "A":
    case "o":
    case "O":
      return key;
    default:
      return null;
  }
}

/** Raw textarea is a typing target only in insert. Normal mode must see hjkl motions. */
export function rawIsTypingTarget(mode: VimMode): boolean {
  return mode === "insert";
}

export function initVimCaret(mode: VimMode = "normal"): VimCaret {
  return { mode, offset: 0, wantCol: 0 };
}

function lineSpans(source: string): LineSpan[] {
  const spans: LineSpan[] = [];
  let start = 0;
  for (let i = 0; i < source.length; i++) {
    if (source[i] === "\n") {
      spans.push({ start, end: i });
      start = i + 1;
    }
  }
  spans.push({ start, end: source.length });
  return spans;
}

function codePointStarts(line: string): number[] {
  const starts: number[] = [];
  for (let i = 0; i < line.length; ) {
    starts.push(i);
    const cp = line.codePointAt(i);
    i += cp !== undefined && cp > 0xffff ? 2 : 1;
  }
  return starts;
}

function maxNormalCol(line: string): number {
  const n = codePointStarts(line).length;
  return n === 0 ? 0 : n - 1;
}

function colAtUtf16(line: string, utf16: number): number {
  const starts = codePointStarts(line);
  if (starts.length === 0) return 0;
  if (utf16 >= line.length) return starts.length;
  let col = 0;
  for (let i = 0; i < starts.length; i++) {
    const start = starts[i];
    if (start === undefined || start > utf16) break;
    col = i;
  }
  return col;
}

function utf16AtCol(line: string, col: number, allowEnd: boolean): number {
  const starts = codePointStarts(line);
  if (starts.length === 0) return 0;
  if (allowEnd && col >= starts.length) return line.length;
  const max = starts.length - 1;
  const c = col < 0 ? 0 : col > max ? max : col;
  return starts[c] ?? 0;
}

function posAt(source: string, offset: number): {
  readonly line: number;
  readonly col: number;
  readonly span: LineSpan;
  readonly lineText: string;
} {
  const spans = lineSpans(source);
  const clamped = Math.max(0, Math.min(offset, source.length));
  let line = 0;
  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    if (span === undefined) continue;
    line = i;
    if (clamped <= span.end) break;
  }
  const span = spans[line] ?? { start: 0, end: 0 };
  const lineText = source.slice(span.start, span.end);
  return { line, col: colAtUtf16(lineText, clamped - span.start), span, lineText };
}

function caretAt(source: string, mode: VimMode, offset: number, wantCol: number): VimCaret {
  const clamped = Math.max(0, Math.min(offset, source.length));
  return { mode, offset: clamped, wantCol };
}

function normalOnLine(source: string, line: number, col: number, wantCol: number, mode: VimMode): VimCaret {
  const spans = lineSpans(source);
  const span = spans[line] ?? { start: 0, end: 0 };
  const lineText = source.slice(span.start, span.end);
  const offset = span.start + utf16AtCol(lineText, col, false);
  return caretAt(source, mode, offset, wantCol);
}

export function moveVimCaret(source: string, caret: VimCaret, dir: GridDir): VimCaret {
  const pos = posAt(source, caret.offset);
  switch (dir) {
    case "h": {
      if (pos.col <= 0) return caretAt(source, caret.mode, pos.span.start, 0);
      const nextCol = pos.col - 1;
      return normalOnLine(source, pos.line, nextCol, nextCol, caret.mode);
    }
    case "l": {
      const max = maxNormalCol(pos.lineText);
      if (pos.col >= max) {
        return normalOnLine(source, pos.line, max, max, caret.mode);
      }
      const nextCol = pos.col + 1;
      return normalOnLine(source, pos.line, nextCol, nextCol, caret.mode);
    }
    case "j": {
      const spans = lineSpans(source);
      if (pos.line >= spans.length - 1) return caret;
      const next = spans[pos.line + 1];
      if (next === undefined) return caret;
      const text = source.slice(next.start, next.end);
      return normalOnLine(source, pos.line + 1, Math.min(caret.wantCol, maxNormalCol(text)), caret.wantCol, caret.mode);
    }
    case "k": {
      if (pos.line <= 0) return caret;
      const spans = lineSpans(source);
      const prev = spans[pos.line - 1];
      if (prev === undefined) return caret;
      const text = source.slice(prev.start, prev.end);
      return normalOnLine(source, pos.line - 1, Math.min(caret.wantCol, maxNormalCol(text)), caret.wantCol, caret.mode);
    }
    default:
      return assertNever(dir);
  }
}

function firstNonBlankUtf16(line: string): number {
  const match = /^\s*/u.exec(line);
  return match === null ? 0 : match[0].length;
}

function enterInsert(doc: VimDoc, key: VimInsertKey): VimDoc {
  const { source, caret } = doc;
  const pos = posAt(source, caret.offset);
  switch (key) {
    case "i":
      return { source, caret: caretAt(source, "insert", caret.offset, pos.col) };
    case "a": {
      const atEnd = pos.col >= maxNormalCol(pos.lineText) && pos.lineText.length > 0;
      const offset = atEnd
        ? pos.span.end
        : pos.lineText.length === 0
          ? pos.span.start
          : pos.span.start + utf16AtCol(pos.lineText, pos.col + 1, true);
      return { source, caret: caretAt(source, "insert", offset, colAtUtf16(pos.lineText, offset - pos.span.start)) };
    }
    case "I": {
      const offset = pos.span.start + firstNonBlankUtf16(pos.lineText);
      return { source, caret: caretAt(source, "insert", offset, colAtUtf16(pos.lineText, offset - pos.span.start)) };
    }
    case "A":
      return { source, caret: caretAt(source, "insert", pos.span.end, codePointStarts(pos.lineText).length) };
    case "o": {
      const next = `${source.slice(0, pos.span.end)}\n${source.slice(pos.span.end)}`;
      return { source: next, caret: caretAt(next, "insert", pos.span.end + 1, 0) };
    }
    case "O": {
      const next = `${source.slice(0, pos.span.start)}\n${source.slice(pos.span.start)}`;
      return { source: next, caret: caretAt(next, "insert", pos.span.start, 0) };
    }
    default:
      return assertNever(key);
  }
}

function snapNormal(source: string, offset: number): VimCaret {
  const pos = posAt(source, offset);
  const col = Math.min(pos.col, maxNormalCol(pos.lineText));
  return normalOnLine(source, pos.line, col, col, "normal");
}

function leaveInsert(source: string, caret: VimCaret, kind: "escape" | "click"): VimCaret {
  if (kind === "click") return snapNormal(source, caret.offset);
  const pos = posAt(source, caret.offset);
  if (pos.col <= 0 && caret.offset <= pos.span.start) {
    return caretAt(source, "normal", pos.span.start, 0);
  }
  const left = moveVimCaret(source, caretAt(source, "normal", caret.offset, pos.col), "h");
  return snapNormal(source, left.offset);
}

function clickEditor(source: string, offset: number): VimCaret {
  const clamped = Math.max(0, Math.min(offset, source.length));
  const pos = posAt(source, clamped);
  return caretAt(source, "insert", clamped, pos.col);
}

export function applyRawNav(doc: VimDoc, event: RawNavEvent): VimDoc {
  switch (event._tag) {
    case "Motion":
      if (doc.caret.mode === "insert") return doc;
      return { source: doc.source, caret: moveVimCaret(doc.source, doc.caret, event.dir) };
    case "InsertKey":
      if (doc.caret.mode === "insert") return doc;
      return enterInsert(doc, event.key);
    case "Escape":
      if (doc.caret.mode === "normal") return doc;
      return { source: doc.source, caret: leaveInsert(doc.source, doc.caret, "escape") };
    case "ClickEditor":
      return { source: doc.source, caret: clickEditor(doc.source, event.offset) };
    case "ClickOutside":
      if (doc.caret.mode === "normal") return doc;
      return { source: doc.source, caret: leaveInsert(doc.source, doc.caret, "click") };
    default:
      return assertNever(event);
  }
}
