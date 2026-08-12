import assert from "node:assert/strict";
import {
  DEFAULT_VIEW,
  VIEW_STORAGE_KEY,
  parseViewMode,
  readStoredView,
  writeStoredView,
} from "./view.ts";

assert.equal(parseViewMode("list"), "list");
assert.equal(parseViewMode("cards"), "cards");
assert.equal(parseViewMode("grid"), null);
assert.equal(parseViewMode(""), null);
assert.equal(parseViewMode(null), null);
assert.equal(parseViewMode(undefined), null);

assert.equal(readStoredView(null), DEFAULT_VIEW);
assert.equal(readStoredView({ getItem: () => null }), DEFAULT_VIEW);
assert.equal(readStoredView({ getItem: () => "cards" }), "cards");
assert.equal(readStoredView({ getItem: () => "nope" }), DEFAULT_VIEW);
assert.equal(
  readStoredView({
    getItem: () => {
      throw new Error("blocked");
    },
  }),
  DEFAULT_VIEW,
);

const store = new Map<string, string>();
writeStoredView(
  {
    setItem: (key, value) => {
      store.set(key, value);
    },
  },
  "cards",
);
assert.equal(store.get(VIEW_STORAGE_KEY), "cards");

writeStoredView(null, "list");
writeStoredView(
  {
    setItem: () => {
      throw new Error("blocked");
    },
  },
  "list",
);

console.log("view.test.ts ok");
