---
title: "Linear Types Can Change the World!"
authors:
  - "Philip Wadler"
year: 1990
venue: "IFIP TC2 Working Conference on Programming Concepts and Methods"
arxiv: null
doi: null
source: "https://homepages.inf.ed.ac.uk/wadler/papers/linear/linear.ps"
topics:
  - linear-types
  - linear-logic
  - resources
  - plt
seed_rank: 148
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "Linear logic"
    url: "https://doi.org/10.1016/0304-3975(87)90045-4"
    year: 1987
    arxiv: null
    doi: "10.1016/0304-3975(87)90045-4"
see:
  - "040-linear-logic"
---

# Linear Types Can Change the World!

## One-sentence takeaway

A linear type must be used exactly once — neither duplicated nor discarded — so the value needs no reference counting or GC and may be updated in place, including destructive array update.

## Why it matters here

This is the slogan-level justification for ano/engine uniqueness and arena reuse: if the type says there is one outstanding handle, mutation is just a change to the world, not a copy.

## Key ideas

- Girard's linear logic suggests a type system for functional languages that "supports operations that change the world." Linear values are like the world: you cannot copy them and you cannot throw them away.
- Because there is a unique outstanding use, the implementation can overwrite the unique object. Array update becomes a proven in-place write rather than a dataflow analysis hope (Hudak and Bloss) or a purely syntactic single-thread check (Schmidt).
- Sharing is not banned outright: the "of course" (`!`) types allow it, but shared values are either recomputed or held behind a pointer to a closure — neither is as cheap as the unique case. Sequencing (`before`/`in`) is required so that all reads of a structure finish before it is overwritten.
- Positioned as a practical complement to Lafont's and Holmström's more elegant linear languages: less ambitious, closer to an implementable functional language with update.
- Schmidt's single-threading captures "no duplication" of the store but says nothing about "no discarding"; linear types enforce both.

## Caveats

## Links

- Author topic page: https://homepages.inf.ed.ac.uk/wadler/topics/linear-logic.html
- Author PostScript: https://homepages.inf.ed.ac.uk/wadler/papers/linear/linear.ps
