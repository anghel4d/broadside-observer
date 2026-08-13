import assert from "node:assert/strict";
import { buildCorpus, inLibraryIds } from "./corpus.ts";
import { SeedCardSchema, type SeedCard } from "./schema.ts";

function card(overrides: Record<string, unknown>): SeedCard {
  return SeedCardSchema.parse({
    id: "001-alpha",
    file: "001-alpha.md",
    title: "Alpha Paper",
    authors: ["Ada"],
    year: 2020,
    venue: "arXiv",
    arxiv: "0000.00000",
    doi: null,
    source: "https://example.com/a",
    topics: ["memory"],
    seed_rank: 2,
    seed_batch: "prefill",
    reviewed: "2026-08-13",
    pool: "agents",
    relevance_score: 8,
    sections: {
      takeaway: "Alpha takeaway about paging.",
      why: "why",
      ideas: "- idea",
      caveats: "caveat",
      links: "https://example.com/a",
    },
    ...overrides,
  });
}

const alpha = card({});
const transformer = card({
  id: "013-attention-is-all-you-need",
  file: "013-attention-is-all-you-need.md",
  title: "Attention Is All You Need",
  arxiv: "1706.03762",
  year: 2017,
  seed_rank: 14,
});
const citing = card({
  id: "104-chain-of-thought",
  file: "104-chain-of-thought.md",
  title: "Chain-of-Thought Prompting",
  arxiv: "2201.11903",
  year: 2022,
  seed_rank: 104,
  see: ["013-attention-is-all-you-need", "999-missing-stem", "104-chain-of-thought"],
  cites: [
    {
      title: "Attention Is All You Need",
      url: "https://arxiv.org/abs/1706.03762",
      year: 2017,
      arxiv: "1706.03762",
    },
  ],
});
const arxivOnly = card({
  id: "200-arxiv-join",
  file: "200-arxiv-join.md",
  title: "Paper with arxiv cite and no see",
  arxiv: "2401.14183",
  year: 2024,
  seed_rank: 200,
  see: [],
  cites: [
    {
      title: "Attention Is All You Need",
      year: 2017,
      arxiv: "1706.03762",
    },
  ],
});

const corpus = buildCorpus([alpha, transformer, citing, arxivOnly]);

assert.equal(corpus.byArxiv.get(transformer.arxiv!), transformer.id);
assert.equal(corpus.byArxiv.get(citing.arxiv!), citing.id);

assert.deepEqual(inLibraryIds(citing, corpus), ["013-attention-is-all-you-need"]);
assert.deepEqual(inLibraryIds(arxivOnly, corpus), ["013-attention-is-all-you-need"]);
assert.deepEqual(inLibraryIds(transformer, corpus), []);
assert.deepEqual(inLibraryIds(alpha, corpus), []);

const deadOnly = card({
  id: "201-dead-see",
  file: "201-dead-see.md",
  title: "Dead see only",
  arxiv: null,
  year: 2021,
  seed_rank: 201,
  see: ["999-missing-stem"],
});
assert.deepEqual(inLibraryIds(deadOnly, buildCorpus([deadOnly, transformer])), []);

console.log("corpus.test.ts ok");
