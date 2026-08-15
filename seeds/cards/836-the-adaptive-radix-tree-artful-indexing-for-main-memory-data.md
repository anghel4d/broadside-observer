---
title: "The Adaptive Radix Tree: ARTful Indexing for Main-Memory Databases"
authors:
- Viktor Leis
- Alfons Kemper
- Thomas Neumann
year: 2013
venue: ICDE
arxiv: null
doi: 10.1109/ICDE.2013.6544812
source: "https://doi.org/10.1109/ICDE.2013.6544812"
topics:
- databases
- contemporary-db
seed_rank: 836
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# The Adaptive Radix Tree: ARTful Indexing for Main-Memory Databases

## One-sentence takeaway

ART is a radix tree whose inner nodes adaptively pick one of four layouts (Node4 / 16 / 48 / 256) so the structure stays compact and cache-friendly while remaining O(k) in key length, outperforming comparison-based trees on in-memory OLTP point lookups.

## Why it matters here

Anoptic entity ids, string intern tables, and GRID COMMAND path keys are radix-shaped. ART is the default in-memory ordered map when keys have shared prefixes — use it instead of a generic `std::map` or an untyped hash if you need both prefix compression and ordered scan.

## Key ideas

- Node type grows with fanout: a 4-entry sorted array, a 16-entry SIMD-searchable array, a 48-entry index+child pair, or a 256-entry direct array.
- Path compression and lazy expansion skip single-child spans so sparse keys do not inflate height.
- Because height depends on key length, not n, lookup is effectively constant for machine-word keys and still supports range scan (unlike a hash table).
- HyPer adopted ART as its primary in-memory index; later work adds optimistic lock coupling for concurrency.

## Caveats

## Links

- DOI: [10.1109/ICDE.2013.6544812](https://doi.org/10.1109/ICDE.2013.6544812)
- URL: https://doi.org/10.1109/ICDE.2013.6544812
