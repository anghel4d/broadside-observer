import assert from "node:assert/strict";
import { gridDirFromKey, type GridDir } from "../shell/gridNav.ts";
import {
  applyRawNav,
  initVimCaret,
  moveVimCaret,
  rawIsTypingTarget,
  vimInsertKey,
  type VimDoc,
} from "./vim.ts";

const fixture = "hello world\nhi\nhello world";

function dir(key: string): GridDir {
  const mapped = gridDirFromKey(key);
  if (mapped === null) throw new Error(`expected grid dir for ${key}`);
  return mapped;
}

function docAt(source: string, offset: number, wantCol?: number): VimDoc {
  const col = wantCol ?? offset;
  return { source, caret: { mode: "normal", offset, wantCol: col } };
}

{
  assert.equal(gridDirFromKey("h"), "h");
  assert.equal(gridDirFromKey("j"), "j");
  assert.equal(gridDirFromKey("k"), "k");
  assert.equal(gridDirFromKey("l"), "l");
  assert.equal(gridDirFromKey("ArrowLeft"), "h");
  assert.equal(gridDirFromKey("ArrowDown"), "j");
  assert.equal(gridDirFromKey("ArrowUp"), "k");
  assert.equal(gridDirFromKey("ArrowRight"), "l");
}

{
  // h/l: one character, no wrap onto the next/prev line.
  const src = "ab\ncd";
  assert.equal(moveVimCaret(src, initVimCaret(), "h").offset, 0);
  assert.equal(moveVimCaret(src, { mode: "normal", offset: 0, wantCol: 0 }, "l").offset, 1);
  assert.equal(moveVimCaret(src, { mode: "normal", offset: 1, wantCol: 1 }, "l").offset, 1);
  assert.equal(moveVimCaret(src, { mode: "normal", offset: 3, wantCol: 0 }, "h").offset, 3);
  assert.equal(moveVimCaret(src, { mode: "normal", offset: 1, wantCol: 1 }, dir("ArrowRight")).offset, 1);
  assert.equal(moveVimCaret(src, { mode: "normal", offset: 0, wantCol: 0 }, dir("ArrowLeft")).offset, 0);
}

{
  // j/k: vim column (logical lines), keep preferred column.
  const start = docAt(fixture, 6, 6); // 'w' of first "world"
  const down = moveVimCaret(fixture, start.caret, dir("j"));
  assert.equal(fixture.charAt(down.offset), "i");
  assert.equal(down.wantCol, 6);
  const down2 = moveVimCaret(fixture, down, dir("ArrowDown"));
  assert.equal(fixture.charAt(down2.offset), "w");
  assert.equal(down2.wantCol, 6);
  const up = moveVimCaret(fixture, down2, dir("k"));
  assert.equal(fixture.charAt(up.offset), "i");
  const up2 = moveVimCaret(fixture, up, dir("ArrowUp"));
  assert.equal(up2.offset, 6);
  assert.equal(moveVimCaret(fixture, start.caret, "k").offset, 6);
}

{
  const empty = "a\n\nb";
  const fromA = moveVimCaret(empty, { mode: "normal", offset: 0, wantCol: 0 }, "j");
  assert.equal(fromA.offset, 2);
  const toB = moveVimCaret(empty, fromA, "j");
  assert.equal(empty.charAt(toB.offset), "b");
}

{
  assert.equal(rawIsTypingTarget("normal"), false);
  assert.equal(rawIsTypingTarget("insert"), true);
  assert.equal(vimInsertKey("i"), "i");
  assert.equal(vimInsertKey("j"), null);
}

{
  let nav = docAt("ab\ncd", 0, 0);
  nav = applyRawNav(nav, { _tag: "InsertKey", key: "i" });
  assert.equal(nav.caret.mode, "insert");
  assert.equal(nav.caret.offset, 0);
  assert.equal(nav.source, "ab\ncd");
  const typed = applyRawNav(nav, { _tag: "Motion", dir: "j" });
  assert.equal(typed.caret.offset, 0, "insert-mode hjkl must not move");
  assert.equal(typed.caret.mode, "insert");
  nav = applyRawNav(nav, { _tag: "Escape" });
  assert.equal(nav.caret.mode, "normal");
  assert.equal(nav.caret.offset, 0);
}

{
  let nav = docAt("hello", 1, 1);
  nav = applyRawNav(nav, { _tag: "InsertKey", key: "i" });
  nav = applyRawNav(nav, { _tag: "Escape" });
  assert.equal(nav.caret.mode, "normal");
  assert.equal(nav.caret.offset, 0, "Esc from insert moves left like vim");
}

{
  let nav = docAt("ab\ncd", 1, 1);
  nav = applyRawNav(nav, { _tag: "ClickEditor", offset: 3 });
  assert.equal(nav.caret.mode, "insert");
  assert.equal(nav.caret.offset, 3);
  nav = applyRawNav(nav, { _tag: "ClickOutside" });
  assert.equal(nav.caret.mode, "normal");
  assert.equal(nav.caret.offset, 3, "click-outside keeps the caret, snapped to normal");
}

{
  let nav = docAt("ab", 0, 0);
  nav = applyRawNav(nav, { _tag: "InsertKey", key: "a" });
  assert.equal(nav.caret.mode, "insert");
  assert.equal(nav.caret.offset, 1);
  nav = applyRawNav(docAt("  x", 0, 0), { _tag: "InsertKey", key: "I" });
  assert.equal(nav.caret.offset, 2);
  nav = applyRawNav(docAt("ab", 0, 0), { _tag: "InsertKey", key: "A" });
  assert.equal(nav.caret.offset, 2);
  nav = applyRawNav(docAt("ab\ncd", 0, 0), { _tag: "InsertKey", key: "o" });
  assert.equal(nav.source, "ab\n\ncd");
  assert.equal(nav.caret.mode, "insert");
  assert.equal(nav.caret.offset, 3);
  nav = applyRawNav(docAt("ab\ncd", 0, 0), { _tag: "InsertKey", key: "O" });
  assert.equal(nav.source, "\nab\ncd");
  assert.equal(nav.caret.offset, 0);
}

console.log("vim.test.ts ok");
