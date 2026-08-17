import assert from "node:assert/strict";
import {
  CANVAS_BUFFER_KEY,
  DEFAULT_VIEW,
  VIEW_STORAGE_KEY,
  parseCanvasBuffer,
  parseCanvasSurface,
  parseViewFromSearch,
  parseViewMode,
  printViewSearch,
  readStoredCanvasBuffer,
  readStoredView,
  resolveView,
  writeStoredCanvasBuffer,
  writeStoredView,
} from "./view.ts";

assert.equal(parseViewMode("list"), "list");
assert.equal(parseViewMode("cards"), "cards");
assert.equal(parseViewMode("canvas"), "canvas");
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
assert.equal(parseViewFromSearch("?view=canvas"), "canvas");
assert.equal(parseViewFromSearch("view=list"), "list");
assert.equal(parseViewFromSearch("?view=grid"), null);
assert.equal(parseViewFromSearch(""), null);
assert.equal(parseViewFromSearch("?q=foo"), null);
assert.equal(printViewSearch("", "cards"), "?view=cards");
assert.equal(printViewSearch("", "canvas"), "?view=canvas");
assert.equal(printViewSearch("?view=cards", "list"), "");
assert.equal(printViewSearch("?view=canvas", "list"), "");
assert.equal(printViewSearch("?view=cards", "cards"), "?view=cards");
assert.equal(printViewSearch("?foo=1", "cards"), "?foo=1&view=cards");
assert.equal(printViewSearch("?foo=1", "canvas"), "?foo=1&view=canvas");
assert.equal(printViewSearch("?view=cards&foo=1", "list"), "?foo=1");

assert.equal(parseCanvasSurface("raw"), "raw");
assert.equal(parseCanvasSurface("render"), "render");
assert.equal(parseCanvasSurface("compile"), null);
assert.deepEqual(parseCanvasBuffer(null), null);
assert.deepEqual(parseCanvasBuffer('{"source":"x","id":"a","surface":"raw"}'), {
  source: "x",
  id: "a",
  surface: "raw",
});
assert.deepEqual(parseCanvasBuffer('{"source":""}'), { source: "", id: null, surface: "render" });
assert.equal(parseCanvasBuffer("nope"), null);

{
  const memory = new Map<string, string>();
  const storage = {
    getItem: (key: string) => memory.get(key) ?? null,
    setItem: (key: string, value: string) => {
      memory.set(key, value);
    },
  };
  writeStoredCanvasBuffer(storage, { source: "tsx", id: "result-compose-surface", surface: "raw" });
  assert.equal(memory.get(CANVAS_BUFFER_KEY)?.includes("result-compose-surface"), true);
  assert.deepEqual(readStoredCanvasBuffer(storage), {
    source: "tsx",
    id: "result-compose-surface",
    surface: "raw",
  });
  writeStoredCanvasBuffer(null, { source: "", id: null, surface: "render" });
}

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
