import assert from "node:assert/strict";
import { buildCorpus } from "./corpus.ts";
import { applyQuery, searchScore, tokenize } from "./query.ts";
import { SeedCardSchema, defaultQuery, type Query, type SeedCard } from "./schema.ts";

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

const cards: ReadonlyArray<SeedCard> = [
  card({}),
  card({
    id: "002-beta",
    file: "002-beta.md",
    title: "Beta Systems",
    authors: ["Bob"],
    year: 1999,
    topics: ["ecs"],
    seed_rank: 1,
    pool: "engine",
    relevance_score: 10,
    sections: {
      takeaway: "Entity systems.",
      why: "why",
      ideas: "- idea",
      caveats: "caveat",
      links: "https://example.com/b",
    },
  }),
  card({
    id: "003-gamma",
    file: "003-gamma.md",
    title: "Gamma",
    authors: ["Cara"],
    year: 2024,
    topics: ["memory"],
    seed_rank: 3,
    pool: null,
    relevance_score: null,
    sections: {
      takeaway: "Unpooled note.",
      why: "why",
      ideas: "- idea",
      caveats: "caveat",
      links: "https://example.com/c",
    },
  }),
];

const corpus = buildCorpus(cards);

const byRank = applyQuery(corpus, defaultQuery);
assert.deepEqual(
  byRank.map((item) => item.id),
  ["002-beta", "001-alpha", "003-gamma"],
);

const memory: Query = {
  ...defaultQuery,
  topic: { _tag: "One", topic: cards[0]!.topics[0]! },
};
assert.equal(applyQuery(corpus, memory).length, 2);

const none: Query = { ...defaultQuery, pool: { _tag: "None" } };
assert.equal(applyQuery(corpus, none)[0]?.id, "003-gamma");

const search: Query = { ...defaultQuery, search: "paging" };
assert.deepEqual(
  applyQuery(corpus, search).map((item) => item.id),
  ["001-alpha"],
);

assert.deepEqual(tokenize("  Foo   BAR "), ["foo", "bar"]);
assert.ok(searchScore(cards[0]!, "alpha paper\nada\nmemory\nalpha takeaway about paging.", ["alpha"]) > 0);

const year: Query = {
  ...defaultQuery,
  year: { min: cards[1]!.year, max: cards[1]!.year },
};
assert.equal(applyQuery(corpus, year)[0]?.id, "002-beta");

console.log("query.test.ts ok");
