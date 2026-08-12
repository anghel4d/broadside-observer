import assert from "node:assert/strict";
import { parseCard } from "./parse.ts";
import { SeedCardSchema } from "./schema.ts";

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

const parsed = parseCard({ file: "014-attention-is-all-you-need.md", markdown: sample });
assert.equal(parsed._tag, "Ok");
if (parsed._tag !== "Ok") throw new Error("expected Ok");
assert.equal(parsed.value.title, "Attention Is All You Need");
assert.equal(parsed.value.arxiv, "1706.03762");
assert.equal(parsed.value.doi, null);
assert.equal(parsed.value.sections.takeaway, "Transformers dispense with recurrence.");
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
  markdown: sample.replace('venue: "NeurIPS"', 'venue: ""').replace("014-attention-is-all-you-need.md", "005-radiance.md"),
});
assert.equal(emptyVenue._tag, "Ok");

console.log("parse.test.ts ok");
