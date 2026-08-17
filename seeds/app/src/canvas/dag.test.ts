import assert from "node:assert/strict";
import { computeDAGLayout } from "./dag.ts";

const line = computeDAGLayout({
  nodes: [{ id: "a" }, { id: "b" }, { id: "c" }],
  edges: [
    { from: "a", to: "b" },
    { from: "b", to: "c" },
  ],
});
assert.equal(line.nodes.length, 3);
assert.equal(line.edges.length, 2);
assert.equal(line.direction, "vertical");
const ranks = new Map(line.nodes.map((node) => [node.id, node.rank]));
assert.equal(ranks.get("a"), 0);
assert.equal(ranks.get("b"), 1);
assert.equal(ranks.get("c"), 2);
assert.ok(line.height > line.width);

const wide = computeDAGLayout({
  nodes: [{ id: "a" }, { id: "b" }],
  edges: [{ from: "a", to: "b" }],
  direction: "horizontal",
  nodeWidth: 100,
  nodeHeight: 20,
});
assert.equal(wide.direction, "horizontal");
assert.ok(wide.width > wide.height);
const ab = wide.edges[0];
assert.ok(ab !== undefined);
assert.ok(ab.targetX > ab.sourceX);

const cycle = computeDAGLayout({
  nodes: [{ id: "a" }, { id: "b" }],
  edges: [
    { from: "a", to: "b" },
    { from: "b", to: "a" },
  ],
});
assert.equal(cycle.edges.filter((edge) => edge.isBackEdge).length, 1);

const empty = computeDAGLayout({ nodes: [], edges: [] });
assert.deepEqual(empty.nodes, []);
assert.equal(empty.width, 48);
assert.equal(empty.height, 48);

console.log("dag.test.ts ok");
