---
title: "Types for Safe Locking: Static Race Detection for Java"
authors:
- Cormac Flanagan
- Stephen N. Freund
year: 2000
venue: TOPLAS / PLDI lineage
arxiv: null
doi: 10.1145/349299.349328
source: "https://doi.org/10.1145/349299.349328"
topics:
- race-detection
- type-systems
- java
- type-safety
seed_rank: 1135
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  []
---

# Types for Safe Locking: Static Race Detection for Java

## One-sentence takeaway

Type-based static race detection via lock types / guarded_by disciplines.

## Why it matters here

Ancestor of Checker Framework locking checkers and modern concurrency types.

## Key ideas

- Lock types protecting shared state.
- Static race freedom.
- Annotation-driven checking.

## Caveats

- Annotation burden.
- Unsound unsoundnesses if reflection/jni ignored.

## Links

- DOI: [10.1145/349299.349328](https://doi.org/10.1145/349299.349328)
- URL: https://doi.org/10.1145/349299.349328
