import assert from "node:assert/strict";
import { LineageSchema, TopicSchema } from "../domain/schema.ts";
import { displayTopics } from "./tags.ts";

const topic = (value: string) => TopicSchema.parse(value);
const lineage = (value: string) => LineageSchema.parse(value);

assert.deepEqual(
  displayTopics({
    topics: [topic("radiance-cascades"), topic("gi"), topic("rtgi")],
    lineage: lineage("radiance-cascades"),
  }),
  [topic("gi"), topic("rtgi")],
);

assert.deepEqual(
  displayTopics({
    topics: [topic("gi"), topic("gi"), topic("ecs")],
    lineage: null,
  }),
  [topic("gi"), topic("ecs")],
);

assert.deepEqual(
  displayTopics({
    topics: [topic("memory")],
    lineage: lineage("lock-free-queues"),
  }),
  [topic("memory")],
);

assert.deepEqual(
  displayTopics({
    topics: [topic("radiance-cascades")],
    lineage: lineage("radiance-cascades"),
  }),
  [],
);

console.log("tags.test.ts ok");
