---
title: "Threesomes, With and Without Blame"
authors:
- Jeremy G. Siek
- Philip Wadler
year: 2010
venue: POPL
arxiv: null
doi: 10.1145/1706299.1706325
source: "https://doi.org/10.1145/1706299.1706325"
topics:
- gradual-typing
- casts
- type-safety
seed_rank: 893
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Gradual Typing for Functional Languages"
    url: "https://scheme2006.cs.uchicago.edu/13-siek.pdf"
    year: 2006
    arxiv: null
    doi: null
see:
  - "886-gradual-typing-for-functional-languages"
---

# Threesomes, With and Without Blame

## One-sentence takeaway

A threesome is a space-efficient coercion `T₁ ⇒ T* ⇒ T₂` that normalizes a chain of gradual casts down to constant space while preserving blame labels.

## Why it matters here

Without this, every typed/untyped hop wraps another proxy and space grows with the number of crossings — fatal for a long-lived GRID COMMAND object that migrates across agent boundaries.

## Key ideas

- Naive cast composition stacks wrappers; threesomes factor every cast through a third "middle" type that is the greatest lower bound in the precision lattice.
- Coercion algebra: composition is a total operation on threesomes, so a value carries at most one wrapper.
- Blame-preserving normalization: when the compressed cast fails, the original guilty label is still reported.
- Optional "without blame" variant is even smaller if you only need safety, not diagnosis.
- POPL 2010. Companion to Blame for All (polymorphism) and later Henglein-style coercions in Typed Racket / Grift.

## Caveats

## Links

- DOI: [10.1145/1706299.1706325](https://doi.org/10.1145/1706299.1706325)
