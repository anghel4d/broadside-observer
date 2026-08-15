import assert from "node:assert/strict";
import { mkdir, mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { gzipSync } from "node:zlib";
import { SeedCardSchema, type Catalog } from "../domain/schema.ts";
import { loadCatalog, localCatalogPaths } from "./load.ts";

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

function catalog(title: string): Catalog {
  return {
    generatedAt: "2026-08-14T00:00:00.000Z",
    count: 1,
    cards: [{ ...card, title }],
    lineageDocs: [],
  };
}

function jsonPayload(title: string): string {
  return `${JSON.stringify(catalog(title))}\n`;
}

function gzipPayload(title: string): string {
  return `${gzipSync(jsonPayload(title)).toString("base64")}\n`;
}

assert.deepEqual(
  localCatalogPaths("/app"),
  [
    "/app/src/generated/cards.json.gz.b64",
    "/app/public/cards.json",
    "/app/src/generated/cards.json",
    "/app/dist/cards.json",
  ],
);

const root = await mkdtemp(join(tmpdir(), "broadside-mcp-"));
await mkdir(join(root, "src/generated"), { recursive: true });
await mkdir(join(root, "public"), { recursive: true });
await writeFile(join(root, "public/cards.json"), jsonPayload("plain public"), "utf8");
await writeFile(join(root, "src/generated/cards.json.gz.b64"), gzipPayload("gzip local"), "utf8");

const compressed = await loadCatalog(root, {});
assert.equal(compressed.source, join(root, "src/generated/cards.json.gz.b64"));
assert.equal(compressed.catalog.cards[0]?.title, "gzip local");

const overridePath = join(root, "override.json");
await writeFile(overridePath, jsonPayload("override json"), "utf8");
const override = await loadCatalog(join(root, "missing"), { SEEDS_CARDS_JSON: overridePath });
assert.equal(override.source, overridePath);
assert.equal(override.catalog.cards[0]?.title, "override json");

const gzipOverridePath = join(root, "override.json.gz.b64");
await writeFile(gzipOverridePath, gzipPayload("override gzip"), "utf8");
const gzipOverride = await loadCatalog(join(root, "missing"), { SEEDS_CARDS_JSON: gzipOverridePath });
assert.equal(gzipOverride.source, gzipOverridePath);
assert.equal(gzipOverride.catalog.cards[0]?.title, "override gzip");

console.log("load.test.ts ok");
