import assert from "node:assert/strict";
import { labelForLineage, labelForPool, prettifySlug } from "./lineageLabels.ts";

assert.equal(labelForLineage("concurrent-data-structures"), "Concurrent data structures");
assert.equal(labelForLineage("radiance-cascades"), "Radiance Cascades & real-time GI");
assert.equal(labelForLineage("game-ai-planning"), "Behavior trees & GOAP");
assert.equal(labelForLineage("pathfinding"), "Pathfinding");

assert.equal(labelForLineage("brand-new-thread"), "Brand new thread");
assert.equal(labelForLineage("lock-free-queues"), "Lock free queues");
assert.equal(labelForLineage("already titled"), "Already titled");

assert.equal(labelForPool("systems"), "Systems");
assert.equal(labelForPool("game-ai"), "Game AI");
assert.equal(labelForPool("maths-foundations"), "Maths foundations");
assert.equal(labelForPool("realtime"), "Real-time");
assert.equal(labelForPool("hand_topup"), "Hand topup");

assert.equal(prettifySlug("open-addressing"), "Open addressing");
assert.equal(prettifySlug(""), "");

console.log("lineageLabels.test.ts ok");
