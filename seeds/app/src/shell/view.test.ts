import assert from "node:assert/strict";
import {
  CANVAS_BUFFER_KEY,
  DEFAULT_VIEW,
  VIEW_STORAGE_KEY,
  openCanvas,
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
import { parseRoute, printRoute } from "../domain/route.ts";
import { CanvasIdSchema } from "../domain/schema.ts";

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

{
  const gi = CanvasIdSchema.parse("gi-radiance-cascades-2026-08-20");
  const algebra = CanvasIdSchema.parse("anoptic-api-algebra-2026-08-17");
  const canvases = [
    { id: gi, title: "GI Radiance Cascades", file: "gi-radiance-cascades-2026-08-20.tsx", source: "packed-gi" },
    { id: algebra, title: "API algebra", file: "anoptic-api-algebra-2026-08-17.tsx", source: "packed-algebra" },
  ];
  const leftover = { source: "LEFTOVER", id: algebra, surface: "raw" as const };

  const share = `${printViewSearch("", "canvas")}${printRoute({ _tag: "Canvas", id: gi })}`;
  assert.equal(share, "?view=canvas#canvas/gi-radiance-cascades-2026-08-20");

  const hash = share.slice(share.indexOf("#"));
  const search = share.slice(0, share.indexOf("#"));
  const opened = openCanvas({
    hash,
    view: parseViewFromSearch(search) ?? DEFAULT_VIEW,
    canvases,
    buffer: leftover,
  });
  assert.equal(opened.view, "canvas");
  assert.deepEqual(opened.route, { _tag: "Canvas", id: gi });
  assert.equal(opened.canvasId, gi);
  assert.equal(opened.canvasSource, "packed-gi", "hash must win over a leftover canvas buffer");
  assert.equal(opened.canvasSurface, "raw", "RAW|RENDER stays in localStorage");
  assert.equal(`${printViewSearch(search, opened.view)}${printRoute(opened.route)}`, share);

  const sameBuffer = openCanvas({
    hash: `#canvas/${gi}`,
    view: "list",
    canvases,
    buffer: { source: "edited-gi", id: gi, surface: "render" },
  });
  assert.equal(sameBuffer.canvasSource, "edited-gi", "same-canvas leftover source is the RAW buffer");
  assert.equal(sameBuffer.view, "canvas");

  const noHash = openCanvas({ hash: "", view: "canvas", canvases, buffer: leftover });
  assert.equal(noHash.view, "canvas");
  assert.deepEqual(noHash.route, { _tag: "Canvas", id: algebra });
  assert.equal(noHash.canvasSource, "LEFTOVER");

  const unknown = openCanvas({
    hash: "#canvas/not-a-packed-canvas",
    view: "list",
    canvases,
    buffer: leftover,
  });
  assert.equal(unknown.view, "canvas");
  assert.deepEqual(unknown.route, { _tag: "Catalog" });
  assert.equal(printRoute(unknown.route), "");
  assert.equal(unknown.canvasSource, "LEFTOVER");

  const cardHash = openCanvas({
    hash: "#card/031-michael-scott-lock-free-queue",
    view: "cards",
    canvases,
    buffer: leftover,
  });
  assert.equal(cardHash.view, "cards");
  assert.equal(cardHash.route._tag, "Card");
  assert.equal(parseRoute("#card/031-michael-scott-lock-free-queue")._tag, "Card");
}

console.log("view.test.ts ok");
