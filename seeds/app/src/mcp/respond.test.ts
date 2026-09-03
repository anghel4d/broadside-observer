import assert from "node:assert/strict";
import { buildCorpus } from "../domain/corpus.ts";
import { SeedCardSchema, type SeedCard } from "../domain/schema.ts";
import {
  EXAMPLE_GET_SEED,
  EXAMPLE_QUERY_LOCKFREE,
  EXAMPLE_QUERY_RADIANCE,
  formatZeroHits,
  getSeed,
  querySeeds,
  type ReadCardMarkdown,
} from "./respond.ts";
import { GET_SEED_DESCRIPTION, QUERY_SEEDS_DESCRIPTION } from "./server.ts";

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
      why: "why it matters for alpha",
      ideas: "- idea",
      caveats: "UNIQUE_CAVEAT_DUMP",
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
    authors: ["Bob", "Cara"],
    year: 1999,
    topics: ["ecs"],
    seed_rank: 1,
    pool: "engine",
    relevance_score: 10,
    sections: {
      takeaway: "Entity systems.",
      why: "why beta",
      ideas: "- idea",
      caveats: "UNIQUE_CAVEAT_DUMP",
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
    lineage: "concurrent-data-structures",
    sections: {
      takeaway: "Unpooled note.",
      why: "why gamma",
      ideas: "- idea",
      caveats: "UNIQUE_CAVEAT_DUMP",
      links: "https://example.com/c",
    },
  }),
];

const corpus = buildCorpus(cards);

const alphaMarkdown = `---
title: "Alpha Paper"
reviewed: "2026-08-13"
relevance_score: 8
---

# Alpha Paper

## Problem

Original problem structure.

## Limitations

Original limitation.
`;
const markdownById: Record<string, string> = {
  "001-alpha": alphaMarkdown,
  "002-beta": "# Beta Systems\n",
  "003-gamma": "# Gamma\n",
};
const readCard: ReadCardMarkdown = async (id) => {
  const markdown = markdownById[id];
  if (markdown === undefined) throw new Error(`Missing test Markdown for ${id}`);
  return markdown;
};

const zero = await querySeeds(corpus, { query: "zzzz-no-such-token" }, readCard);
assert.match(zero, /^No matching seed cards for query="zzzz-no-such-token"\./u);
assert.match(
  zero,
  /NEXT: call query_seeds with \{"query":"<tokens>"\} or get_seed with \{"id":"<card-id>"\}\./u,
);
assert.ok(zero.includes(EXAMPLE_QUERY_RADIANCE));
assert.ok(zero.includes(EXAMPLE_QUERY_LOCKFREE));
assert.ok(zero.includes(EXAMPLE_GET_SEED));
assert.ok(zero.includes("title, authors, topics, takeaway, lineage"));
assert.ok(zero.includes("AND tokens"));
assert.ok(zero.includes("query (string, required unless id is set)"));
assert.equal(zero.includes("UNIQUE_CAVEAT_DUMP"), false);
assert.equal(zero.includes("## Caveats"), false);

const empty = await querySeeds(corpus, {}, readCard);
assert.match(empty, /^No matching seed cards for query=""\./u);
assert.ok(empty.includes("NEXT: call query_seeds with"));
assert.ok(empty.includes(EXAMPLE_QUERY_RADIANCE));

const one = await querySeeds(corpus, { query: "paging" }, readCard);
assert.equal(one, alphaMarkdown);
assert.ok(one.includes('reviewed: "2026-08-13"'));
assert.ok(one.includes("relevance_score: 8"));
assert.ok(one.includes("## Problem"));
assert.equal(one.includes("## Key ideas"), false);

const byId = await querySeeds(corpus, { query: "", id: "001-alpha" }, readCard);
assert.equal(byId, alphaMarkdown);

const byRank = await querySeeds(corpus, { query: "#2" }, readCard);
assert.equal(byRank, alphaMarkdown);
const byRankBare = await querySeeds(corpus, { query: "2" }, readCard);
assert.equal(byRankBare, alphaMarkdown);

const many = await querySeeds(corpus, { topic: "memory" }, readCard);
assert.match(
  many,
  /^NEXT: call get_seed with \{"id": "001-alpha"\} to retrieve the full seed card for any one hit\./u,
);
assert.ok(many.includes(`Example: get_seed {"id":"001-alpha"}`));
assert.ok(many.includes("id: 001-alpha"));
assert.ok(many.includes("id: 003-gamma"));
assert.ok(many.includes("Alpha Paper (2020) — Ada"));
assert.ok(many.includes("Alpha takeaway about paging."));
assert.equal(many.includes("UNIQUE_CAVEAT_DUMP"), false);
assert.equal(many.includes("## Caveats"), false);
assert.equal(many.includes("## Why it matters here"), false);

const truncated = await querySeeds(
  corpus,
  { year_min: 1999, year_max: 2024, limit: 2 },
  readCard,
);
assert.ok(truncated.includes("Showing 2 of 3."));
assert.match(
  truncated,
  /NEXT: call query_seeds again with a tighter query, or get_seed \{"id":"[^"]+"\} for one of the ids below\./u,
);
assert.ok(truncated.includes("NEXT: call get_seed with {\"id\":"));
assert.equal(truncated.includes("UNIQUE_CAVEAT_DUMP"), false);

const got = await getSeed(corpus, "001-alpha", readCard);
assert.equal(got, alphaMarkdown);

const gotMd = await getSeed(corpus, "001-alpha.md", readCard);
assert.equal(gotMd, alphaMarkdown);

const missing = await getSeed(corpus, "no-such-card", readCard);
assert.match(missing, /^No matching seed cards for id="no-such-card"\./u);
assert.ok(missing.includes("NEXT: call query_seeds with"));
assert.ok(missing.includes(EXAMPLE_GET_SEED));
assert.ok(missing.includes(EXAMPLE_QUERY_RADIANCE));

assert.ok(formatZeroHits('query="xyz"').includes(`query_seeds {"query":"radiance cascades"}`));

assert.ok(QUERY_SEEDS_DESCRIPTION.includes("0 hits"));
assert.ok(QUERY_SEEDS_DESCRIPTION.includes("1 hit"));
assert.ok(QUERY_SEEDS_DESCRIPTION.includes("2+ hits"));
assert.ok(QUERY_SEEDS_DESCRIPTION.includes("returned verbatim"));
assert.ok(QUERY_SEEDS_DESCRIPTION.includes('get_seed {"id":'));
assert.ok(QUERY_SEEDS_DESCRIPTION.includes('query_seeds {"query":'));
assert.ok(GET_SEED_DESCRIPTION.includes('get_seed {"id":"<card-id>"}'));
assert.ok(GET_SEED_DESCRIPTION.includes("exact stored Markdown"));

console.log("respond.test.ts ok");
