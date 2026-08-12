import assert from "node:assert/strict";
import {
  DEFAULT_VIEW,
  VIEW_STORAGE_KEY,
  parseViewFromSearch,
  parseViewMode,
  printViewSearch,
  readStoredView,
  resolveView,
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

assert.equal(parseViewFromSearch("?view=cards"), "cards");
assert.equal(parseViewFromSearch("view=list"), "list");
assert.equal(parseViewFromSearch("?view=grid"), null);
assert.equal(parseViewFromSearch(""), null);
assert.equal(parseViewFromSearch("?q=foo"), null);
assert.equal(printViewSearch("", "cards"), "?view=cards");
assert.equal(printViewSearch("?view=cards", "list"), "");
assert.equal(printViewSearch("?view=cards", "cards"), "?view=cards");
assert.equal(printViewSearch("?foo=1", "cards"), "?foo=1&view=cards");
assert.equal(printViewSearch("?view=cards&foo=1", "list"), "?foo=1");

const memory = new Map<string, string>([[VIEW_STORAGE_KEY, "list"]]);
const memoryStorage = {
  getItem: (key: string) => memory.get(key) ?? null,
  setItem: (key: string, value: string) => {
    memory.set(key, value);
  },
};
assert.equal(resolveView("?view=cards", memoryStorage), "cards");
assert.equal(memory.get(VIEW_STORAGE_KEY), "cards");
assert.equal(resolveView("", memoryStorage), "cards");
assert.equal(resolveView("", null), DEFAULT_VIEW);

console.log("view.test.ts ok");
