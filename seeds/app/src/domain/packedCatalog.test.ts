import assert from "node:assert/strict";
import { gzipSync } from "node:zlib";
import { inflateGzipBase64, parsePackedCatalog } from "./packedCatalog.ts";
import { SeedCardSchema, type Catalog } from "./schema.ts";

const card = SeedCardSchema.parse({
  id: "013-attention-is-all-you-need",
  file: "013-attention-is-all-you-need.md",
  title: "Attention Is All You Need",
  authors: ["Ashish Vaswani"],
  year: 2017,
  venue: "NeurIPS",
  arxiv: "1706.03762",
  doi: null,
  source: "https://arxiv.org/abs/1706.03762",
  topics: ["transformer"],
  seed_rank: 14,
  seed_batch: "prefill-2026-08-13",
  reviewed: "2026-08-13",
  pool: "agents",
  relevance_score: 10,
  sections: {
    takeaway: "Transformers dispense with recurrence.",
    why: "Foundational substrate.",
    ideas: "- Attention only.",
    caveats: "Seed card.",
    links: "https://arxiv.org/abs/1706.03762",
  },
});

const catalog: Catalog = {
  generatedAt: "2026-08-14T00:00:00.000Z",
  count: 1,
  cards: [card],
  lineageDocs: [],
};

const payload = `${JSON.stringify(catalog)}\n`;
const b64 = gzipSync(payload).toString("base64");
const inflated = await inflateGzipBase64(b64);
assert.equal(inflated, payload);

const decoded = parsePackedCatalog(inflated);
assert.equal(decoded.count, 1);
assert.equal(decoded.cards[0]?.id, card.id);
assert.equal(decoded.cards[0]?.title, card.title);
assert.deepEqual(decoded.lineageDocs, []);

assert.throws(() => parsePackedCatalog("{"), /JSON|Unexpected/u);
assert.throws(
  () => parsePackedCatalog(JSON.stringify({ generatedAt: "x", count: 1, cards: [] })),
  /schema decode/u,
);

console.log("packedCatalog.test.ts ok");
