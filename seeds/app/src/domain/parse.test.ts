import assert from "node:assert/strict";
import { parseCard } from "./parse.ts";
import { ArxivIdSchema, DoiSchema, SeedCardSchema } from "./schema.ts";

const sample = `---
title: "Attention Is All You Need"
authors:
  - "Ashish Vaswani"
year: 2017
venue: "NeurIPS"
arxiv: "1706.03762"
doi: null
source: "https://arxiv.org/abs/1706.03762"
topics:
  - transformer
seed_rank: 14
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 10
---

# Attention Is All You Need

## One-sentence takeaway

Transformers dispense with recurrence.

## Why it matters here

Foundational substrate.

## Key ideas

- Attention only.
- Parallelizable training.

## Caveats

- Seed card.

## Links

- arXiv: [1706.03762](https://arxiv.org/abs/1706.03762)
`;

const parsed = parseCard({ file: "013-attention-is-all-you-need.md", markdown: sample });
assert.equal(parsed._tag, "Ok");
if (parsed._tag !== "Ok") throw new Error("expected Ok");
assert.equal(parsed.value.title, "Attention Is All You Need");
assert.equal(parsed.value.arxiv, "1706.03762");
assert.equal(parsed.value.doi, null);
assert.equal(parsed.value.sections.takeaway, "Transformers dispense with recurrence.");
assert.equal(parsed.value.lineage, null);
assert.deepEqual(parsed.value.cites, []);
assert.equal(SeedCardSchema.safeParse(parsed.value).success, true);

const missing = parseCard({
  file: "000-missing.md",
  markdown: `---
title: "X"
authors: ["A"]
year: 2020
venue: ""
arxiv: null
doi: null
source: "https://example.com"
topics: ["t"]
seed_rank: 1
seed_batch: "b"
reviewed: "2026-01-01"
---

## One-sentence takeaway

Hi.
`,
});
assert.equal(missing._tag, "Err");
if (missing._tag !== "Err") throw new Error("expected Err");
assert.equal(missing.error._tag, "MissingSections");

const emptyVenue = parseCard({
  file: "005-radiance.md",
  markdown: sample.replace('venue: "NeurIPS"', 'venue: ""').replace("013-attention-is-all-you-need.md", "005-radiance.md"),
});
assert.equal(emptyVenue._tag, "Ok");

const withLineage = parseCard({
  file: "025-hazard-pointers.md",
  markdown: `---
title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
authors:
  - "Maged M. Michael"
year: 2004
venue: "TPDS"
arxiv: null
doi: "10.1109/TPDS.2004.8"
source: "https://doi.org/10.1109/TPDS.2004.8"
topics:
  - lockfree
seed_rank: 25
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engine"
relevance_score: 10
lineage: lock-free-queues
cites:
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
    card: "031-michael-scott-lock-free-queue"
  - title: "Wait-Free Synchronization"
    year: 1991
    card: "036-wait-free-synchronization.md"
see:
  - "031-michael-scott-lock-free-queue"
  - "036-wait-free-synchronization.md"
---

## One-sentence takeaway

Safe reclamation for lock-free structures without GC.

## Why it matters here

Event-bus / logger lineage.

## Key ideas

- Retire lists.

## Caveats

- Seed card.

## Links

- DOI
`,
});
assert.equal(withLineage._tag, "Ok");
if (withLineage._tag !== "Ok") throw new Error("expected Ok");
assert.equal(withLineage.value.lineage, "lock-free-queues");
assert.equal(withLineage.value.cites.length, 2);
assert.equal(
  withLineage.value.cites[0]?.title,
  "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms",
);
assert.equal(withLineage.value.cites[0]?.url, "https://doi.org/10.1145/248052.248106");
assert.equal(withLineage.value.cites[0]?.year, 1996);
assert.equal(withLineage.value.cites[0]?.doi, "10.1145/248052.248106");
assert.equal("card" in (withLineage.value.cites[0] ?? {}), false);
assert.equal("card" in (withLineage.value.cites[1] ?? {}), false);
assert.equal(withLineage.value.cites[1]?.url, null);
assert.deepEqual(withLineage.value.see, [
  "031-michael-scott-lock-free-queue",
  "036-wait-free-synchronization",
]);
assert.equal(SeedCardSchema.safeParse(withLineage.value).success, true);

assert.equal(ArxivIdSchema.parse(1411.2684), "1411.2684");
assert.equal(DoiSchema.parse(10.1145), "10.1145");

const numericArxiv = parseCard({
  file: "876-rustbelt-securing-the-foundations-of-the-rust-programming-la.md",
  markdown: sample.replace('arxiv: "1706.03762"', "arxiv: 1710.08840"),
});
assert.equal(numericArxiv._tag, "Ok");
if (numericArxiv._tag !== "Ok") throw new Error("expected Ok");
assert.equal(numericArxiv.value.arxiv, "1710.08840");
assert.equal(SeedCardSchema.safeParse(numericArxiv.value).success, true);

const numericCiteArxiv = parseCard({
  file: "025-hazard-pointers.md",
  markdown: `---
title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
authors:
  - "Maged M. Michael"
year: 2004
venue: "TPDS"
arxiv: null
doi: "10.1109/TPDS.2004.8"
source: "https://doi.org/10.1109/TPDS.2004.8"
topics:
  - lockfree
seed_rank: 25
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engine"
relevance_score: 10
cites:
  - title: "Oxide: The Essence of Rust"
    year: 2019
    arxiv: 1903.00982
---

## One-sentence takeaway

Safe reclamation for lock-free structures without GC.

## Why it matters here

Event-bus / logger lineage.

## Key ideas

- Retire lists.

## Caveats

- Seed card.

## Links

- DOI
`,
});
assert.equal(numericCiteArxiv._tag, "Ok");
if (numericCiteArxiv._tag !== "Ok") throw new Error("expected Ok");
assert.equal(numericCiteArxiv.value.cites[0]?.arxiv, "1903.00982");
assert.deepEqual(numericCiteArxiv.value.see, []);

const leftoverCardKey = parseCard({
  file: "025-hazard-pointers.md",
  markdown: `---
title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
authors:
  - "Maged M. Michael"
year: 2004
venue: "TPDS"
arxiv: null
doi: "10.1109/TPDS.2004.8"
source: "https://doi.org/10.1109/TPDS.2004.8"
topics:
  - lockfree
seed_rank: 25
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engine"
relevance_score: 10
cites:
  - title: "Wait-Free Synchronization"
    year: 1991
    card: "036-wait-free-synchronization.md"
see: "036-wait-free-synchronization.md"
---

## One-sentence takeaway

Safe reclamation for lock-free structures without GC.

## Why it matters here

Event-bus / logger lineage.

## Key ideas

- Retire lists.

## Caveats

- Seed card.

## Links

- DOI
`,
});
assert.equal(leftoverCardKey._tag, "Ok");
if (leftoverCardKey._tag !== "Ok") throw new Error("expected Ok");
assert.equal("card" in (leftoverCardKey.value.cites[0] ?? {}), false);
assert.deepEqual(leftoverCardKey.value.see, ["036-wait-free-synchronization"]);

console.log("parse.test.ts ok");
