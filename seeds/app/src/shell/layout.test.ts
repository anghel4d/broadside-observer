import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  COMPACT_MAX_PX,
  COMPACT_MEDIA,
  DETAIL_FOCUS_STORAGE_KEY,
  isCardsSheetLayout,
  isCardsSheetVisible,
  parseDetailFocus,
  readStoredDetailFocus,
  writeStoredDetailFocus,
} from "./layout.ts";

assert.equal(parseDetailFocus("1"), true);
assert.equal(parseDetailFocus("true"), true);
assert.equal(parseDetailFocus("0"), false);
assert.equal(parseDetailFocus("false"), false);
assert.equal(parseDetailFocus(""), false);
assert.equal(parseDetailFocus(null), false);
assert.equal(parseDetailFocus(undefined), false);

assert.equal(readStoredDetailFocus(null), false);
assert.equal(readStoredDetailFocus({ getItem: () => null }), false);
assert.equal(readStoredDetailFocus({ getItem: () => "1" }), true);
assert.equal(readStoredDetailFocus({ getItem: () => "true" }), true);
assert.equal(readStoredDetailFocus({ getItem: () => "nope" }), false);
assert.equal(
  readStoredDetailFocus({
    getItem: () => {
      throw new Error("blocked");
    },
  }),
  false,
);

const store = new Map<string, string>();
writeStoredDetailFocus(
  {
    setItem: (key, value) => {
      store.set(key, value);
    },
  },
  true,
);
assert.equal(store.get(DETAIL_FOCUS_STORAGE_KEY), "1");
writeStoredDetailFocus(
  {
    setItem: (key, value) => {
      store.set(key, value);
    },
  },
  false,
);
assert.equal(store.get(DETAIL_FOCUS_STORAGE_KEY), "0");

assert.equal(COMPACT_MAX_PX, 980);
assert.equal(COMPACT_MEDIA, "(max-width: 980px)");

assert.equal(isCardsSheetLayout("cards", true), true);
assert.equal(isCardsSheetLayout("cards", false), false);
assert.equal(isCardsSheetLayout("list", true), false);
assert.equal(isCardsSheetLayout("list", false), false);

assert.equal(
  isCardsSheetVisible({ view: "cards", compact: true, sheetOpen: true, hasSelection: true }),
  true,
);
assert.equal(
  isCardsSheetVisible({ view: "cards", compact: false, sheetOpen: true, hasSelection: true }),
  false,
);
assert.equal(
  isCardsSheetVisible({ view: "list", compact: true, sheetOpen: true, hasSelection: true }),
  false,
);
assert.equal(
  isCardsSheetVisible({ view: "cards", compact: true, sheetOpen: false, hasSelection: true }),
  false,
);
assert.equal(
  isCardsSheetVisible({ view: "cards", compact: true, sheetOpen: true, hasSelection: false }),
  false,
);

{
  const css = readFileSync(new URL("../style.css", import.meta.url), "utf8");
  assert.ok(
    css.includes(`@media (max-width: ${COMPACT_MAX_PX}px)`),
    "style.css compact breakpoint must match COMPACT_MAX_PX",
  );
}

writeStoredDetailFocus(null, true);
writeStoredDetailFocus(
  {
    setItem: () => {
      throw new Error("blocked");
    },
  },
  true,
);

console.log("layout.test.ts ok");
