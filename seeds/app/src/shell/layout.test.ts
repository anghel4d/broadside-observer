import assert from "node:assert/strict";
import {
  DETAIL_FOCUS_STORAGE_KEY,
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
