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

const zero = querySeeds(corpus, { query: "zzzz-no-such-token" });
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

const empty = querySeeds(corpus, {});
assert.match(empty, /^No matching seed cards for query=""\./u);
assert.ok(empty.includes("NEXT: call query_seeds with"));
assert.ok(empty.includes(EXAMPLE_QUERY_RADIANCE));

const one = querySeeds(corpus, { query: "paging" });
assert.match(one, /^Retrieved full seed card id="001-alpha"\./u);
assert.ok(one.includes(`To search again: ${EXAMPLE_QUERY_RADIANCE}.`));
assert.ok(one.includes("Alpha Paper"));
assert.ok(one.includes("Alpha takeaway about paging."));
assert.ok(one.includes("## One-sentence takeaway"));
assert.ok(one.includes("## Caveats"));
assert.ok(one.includes("UNIQUE_CAVEAT_DUMP"));

const byId = querySeeds(corpus, { query: "", id: "001-alpha" });
assert.match(byId, /^Retrieved full seed card id="001-alpha"\./u);
assert.ok(byId.includes("Alpha takeaway about paging."));

const byRank = querySeeds(corpus, { query: "#2" });
assert.match(byRank, /^Retrieved full seed card id="001-alpha"\./u);
const byRankBare = querySeeds(corpus, { query: "2" });
assert.match(byRankBare, /^Retrieved full seed card id="001-alpha"\./u);

const many = querySeeds(corpus, { topic: "memory" });
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

const truncated = querySeeds(corpus, { year_min: 1999, year_max: 2024, limit: 2 });
assert.ok(truncated.includes("Showing 2 of 3."));
assert.match(
  truncated,
  /NEXT: call query_seeds again with a tighter query, or get_seed \{"id":"[^"]+"\} for one of the ids below\./u,
);
assert.ok(truncated.includes("NEXT: call get_seed with {\"id\":"));
assert.equal(truncated.includes("UNIQUE_CAVEAT_DUMP"), false);

const got = getSeed(corpus, "001-alpha");
assert.match(got, /^Retrieved full seed card id="001-alpha"\./u);
assert.ok(got.includes("Alpha Paper"));
assert.ok(got.includes("Alpha takeaway about paging."));
assert.equal(got.includes("card:"), false);
assert.equal(got.includes("see:"), false);

const withSee = getSeed(
  buildCorpus([
    card({
      cites: [
        {
          title: "Attention Is All You Need",
          url: "https://arxiv.org/abs/1706.03762",
          year: 2017,
          arxiv: "1706.03762",
        },
      ],
      see: ["014-attention-is-all-you-need"],
    }),
  ]),
  "001-alpha",
);
assert.ok(withSee.includes('see: ["014-attention-is-all-you-need"]'));
assert.ok(withSee.includes("title: Attention Is All You Need"));
assert.ok(withSee.includes("arxiv: 1706.03762"));
assert.equal(withSee.includes("card:"), false);

const gotMd = getSeed(corpus, "001-alpha.md");
assert.match(gotMd, /^Retrieved full seed card id="001-alpha"\./u);

const missing = getSeed(corpus, "no-such-card");
assert.match(missing, /^No matching seed cards for id="no-such-card"\./u);
assert.ok(missing.includes("NEXT: call query_seeds with"));
assert.ok(missing.includes(EXAMPLE_GET_SEED));
assert.ok(missing.includes(EXAMPLE_QUERY_RADIANCE));

assert.ok(formatZeroHits('query="xyz"').includes(`query_seeds {"query":"radiance cascades"}`));

assert.ok(QUERY_SEEDS_DESCRIPTION.includes("0 hits"));
assert.ok(QUERY_SEEDS_DESCRIPTION.includes("1 hit"));
assert.ok(QUERY_SEEDS_DESCRIPTION.includes("2+ hits"));
assert.ok(QUERY_SEEDS_DESCRIPTION.includes('get_seed {"id":'));
assert.ok(QUERY_SEEDS_DESCRIPTION.includes('query_seeds {"query":'));
assert.ok(GET_SEED_DESCRIPTION.includes('get_seed {"id":"<card-id>"}'));

console.log("respond.test.ts ok");
