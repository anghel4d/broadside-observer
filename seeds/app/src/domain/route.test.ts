import assert from "node:assert/strict";
import { parseRoute, printRoute, routeId, canvasRouteId, isCanvasHash } from "./route.ts";
import { CanvasIdSchema, CardIdSchema } from "./schema.ts";

const card = CardIdSchema.parse("031-michael-scott-lock-free-queue");
const gi = CanvasIdSchema.parse("gi-radiance-cascades-2026-08-20");
const algebra = CanvasIdSchema.parse("anoptic-api-algebra-2026-08-17");

assert.deepEqual(parseRoute(""), { _tag: "Catalog" });
assert.deepEqual(parseRoute("#"), { _tag: "Catalog" });
assert.deepEqual(parseRoute("#nope"), { _tag: "Catalog" });
assert.equal(printRoute({ _tag: "Catalog" }), "");
assert.equal(routeId({ _tag: "Catalog" }), null);
assert.equal(canvasRouteId({ _tag: "Catalog" }), null);

assert.deepEqual(parseRoute(`#card/${card}`), { _tag: "Card", id: card });
assert.deepEqual(parseRoute(printRoute({ _tag: "Card", id: card })), { _tag: "Card", id: card });
assert.equal(printRoute({ _tag: "Card", id: card }), `#card/${card}`);
assert.equal(routeId({ _tag: "Card", id: card }), card);
assert.equal(canvasRouteId({ _tag: "Card", id: card }), null);
assert.equal(isCanvasHash(`#card/${card}`), false);

assert.deepEqual(parseRoute(`#canvas/${gi}`), { _tag: "Canvas", id: gi });
assert.deepEqual(parseRoute(`#canvas/${algebra}`), { _tag: "Canvas", id: algebra });
assert.equal(printRoute({ _tag: "Canvas", id: gi }), `#canvas/${gi}`);
assert.equal(printRoute({ _tag: "Canvas", id: algebra }), `#canvas/${algebra}`);
assert.deepEqual(parseRoute(printRoute({ _tag: "Canvas", id: gi })), { _tag: "Canvas", id: gi });
assert.equal(routeId({ _tag: "Canvas", id: gi }), null);
assert.equal(canvasRouteId({ _tag: "Canvas", id: gi }), gi);
assert.equal(isCanvasHash(`#canvas/${gi}`), true);
assert.equal(isCanvasHash("#canvas/"), true);
assert.equal(isCanvasHash("#canvas"), false);

assert.deepEqual(parseRoute("#canvas/"), { _tag: "Catalog" }, "empty canvas slug is catalog");
assert.deepEqual(parseRoute("#canvas/%"), { _tag: "Catalog" }, "undecodable canvas slug is catalog, not a throw");
assert.equal(printRoute(parseRoute("#canvas/")), "");
assert.equal(printRoute(parseRoute("#canvas/%")), "");

const encoded = CanvasIdSchema.parse("a canvas");
assert.equal(printRoute({ _tag: "Canvas", id: encoded }), "#canvas/a%20canvas");
assert.deepEqual(parseRoute("#canvas/a%20canvas"), { _tag: "Canvas", id: encoded });

console.log("route.test.ts ok");
