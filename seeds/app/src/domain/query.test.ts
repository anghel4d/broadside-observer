import assert from "node:assert/strict";
import { buildCorpus } from "./corpus.ts";
import {
  activeFilters,
  applyQuery,
  clearFilter,
  findCardByRank,
  searchScore,
  selectionState,
  tokenize,
} from "./query.ts";
import {
  LineageSchema,
  PoolSchema,
  SeedCardSchema,
  SeedRankSchema,
  defaultQuery,
  type Query,
  type SeedCard,
} from "./schema.ts";

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
    venue: "UniqueVenueXYZ",
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
  card({
    id: "025-hazard-pointers",
    file: "025-hazard-pointers.md",
    title: "Hazard Pointers",
    authors: ["Maged M. Michael"],
    year: 2004,
    topics: ["lockfree"],
    seed_rank: 25,
    pool: "engine",
    relevance_score: 10,
    lineage: "lock-free-queues",
    cites: [
      {
        title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms",
        url: "https://doi.org/10.1145/248052.248106",
        year: 1996,
        arxiv: null,
        doi: "10.1145/248052.248106",
      },
    ],
    see: ["031-michael-scott-lock-free-queue"],
    sections: {
      takeaway: "Safe reclamation.",
      why: "why",
      ideas: "- idea",
      caveats: "caveat",
      links: "https://example.com/d",
    },
  }),
];

const corpus = buildCorpus(cards);

const byRank = applyQuery(corpus, defaultQuery);
assert.deepEqual(
  byRank.map((item) => item.id),
  ["002-beta", "001-alpha", "003-gamma", "025-hazard-pointers"],
);
assert.deepEqual(
  applyQuery(corpus, { ...defaultQuery, sortReversed: true }).map((item) => item.id),
  [...byRank].reverse().map((item) => item.id),
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

assert.deepEqual(
  applyQuery(corpus, { ...defaultQuery, search: "uniquevenuexyz" }).map((item) => item.id),
  ["003-gamma"],
);


assert.deepEqual(tokenize("  Foo   BAR "), ["foo", "bar"]);
assert.ok(searchScore(cards[0]!, "alpha paper\nada\nmemory\nalpha takeaway about paging.", ["alpha"]) > 0);

const year: Query = {
  ...defaultQuery,
  year: { min: cards[1]!.year, max: cards[1]!.year },
};
assert.equal(applyQuery(corpus, year)[0]?.id, "002-beta");

const lineage: Query = {
  ...defaultQuery,
  lineage: { _tag: "One", lineage: cards[3]!.lineage! },
};
assert.deepEqual(
  applyQuery(corpus, lineage).map((item) => item.id),
  ["025-hazard-pointers"],
);

const noLineage: Query = { ...defaultQuery, lineage: { _tag: "None" } };
assert.deepEqual(
  applyQuery(corpus, noLineage).map((item) => item.id),
  ["002-beta", "001-alpha", "003-gamma"],
);

const lineageVisible = applyQuery(corpus, lineage);
const inFilter = selectionState(corpus, lineageVisible, cards[3]!.id);
assert.equal(inFilter._tag, "Visible");
assert.equal(inFilter._tag === "Visible" ? inFilter.card.id : "", "025-hazard-pointers");

const offFilter = selectionState(corpus, lineageVisible, cards[0]!.id);
assert.equal(offFilter._tag, "OffFilter");
assert.equal(offFilter._tag === "OffFilter" ? offFilter.card.id : "", "001-alpha");

assert.equal(selectionState(corpus, [], null)._tag, "None");

assert.deepEqual(activeFilters(defaultQuery), []);
assert.deepEqual(
  activeFilters({
    ...defaultQuery,
    search: "  paging ",
    topic: { _tag: "One", topic: cards[0]!.topics[0]! },
    pool: { _tag: "None" },
    year: { min: cards[1]!.year, max: cards[1]!.year },
  }).map((filter) => filter.key),
  ["search", "topic", "pool", "year"],
);
assert.equal(
  activeFilters({
    ...defaultQuery,
    year: { min: cards[1]!.year, max: cards[1]!.year },
  })[0]?.label,
  "1999–1999",
);
assert.equal(
  activeFilters({
    ...defaultQuery,
    lineage: { _tag: "One", lineage: LineageSchema.parse("concurrent-data-structures") },
  })[0]?.label,
  "Concurrent data structures",
);
assert.equal(
  activeFilters({
    ...defaultQuery,
    lineage: { _tag: "One", lineage: cards[3]!.lineage! },
  })[0]?.label,
  "Lock free queues",
);
assert.equal(
  activeFilters({
    ...defaultQuery,
    pool: { _tag: "One", pool: PoolSchema.parse("game-ai") },
  })[0]?.label,
  "Game AI",
);

const narrowed: Query = {
  ...defaultQuery,
  search: "paging",
  topic: { _tag: "One", topic: cards[0]!.topics[0]! },
};
assert.equal(clearFilter(narrowed, "search").search, "");
assert.equal(clearFilter(narrowed, "topic").topic._tag, "All");
assert.equal(clearFilter({ ...defaultQuery, year: { min: cards[1]!.year, max: null } }, "year").year.min, null);
assert.equal(activeFilters(narrowed).length > 0, true);

const rankTwo = findCardByRank(byRank, corpus.cards, SeedRankSchema.parse(2));
assert.equal(rankTwo?.id, "001-alpha");
const missing = findCardByRank(byRank, corpus.cards, SeedRankSchema.parse(9999));
assert.equal(missing, null);
const offList = applyQuery(corpus, lineage);
const stillFound = findCardByRank(offList, corpus.cards, SeedRankSchema.parse(2));
assert.equal(stillFound?.id, "001-alpha");

const autoFirst = selectionState(corpus, byRank, null);
assert.equal(autoFirst._tag, "Visible");
assert.equal(autoFirst._tag === "Visible" ? autoFirst.card.id : "", "002-beta");

console.log("query.test.ts ok");
