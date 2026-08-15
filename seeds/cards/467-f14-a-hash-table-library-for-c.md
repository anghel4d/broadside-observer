---
title: "F14 — A Hash Table Library for C++"
authors:
  - "Nathan Bronson"
  - "Xiao Shi"
year: 2019
venue: "Engineering at Meta"
arxiv: null
doi: null
source: "https://engineering.fb.com/2019/04/25/developer-tools/f14/"
topics:
  - hashtable
seed_rank: 467
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 7
lineage: open-addressing
cites:
  - title: "Ordered Hash Tables"
    url: "https://doi.org/10.1093/comjnl/17.2.135"
    year: 1974
    doi: "10.1093/comjnl/17.2.135"
---

# F14 — A Hash Table Library for C++

## One-sentence takeaway

F14 maps each key to a 14-slot chunk and SIMD-filters 7-bit tags so open addressing stays fast above 80% load, then offers Fast/Node/Vector layouts so one library covers both reference-stable and inline cases.

## Why it matters here

Industrial sibling to Abseil Swiss Tables for engine hashtables: Folly's default map is the thing to benchmark against before inventing another open-addressing table.

## Key ideas

- Lower hash bits pick a chunk; upper bits become a 7-bit tag searched with SSE2/NEON across 14 slots, so chunk overflow is far rarer than single-slot collision.
- Overflow counters (Amble–Knuth overflow bits with a reference count) retire tombstones when the last displaced key is erased, so mixed insert/erase does not accumulate dead probes.
- `F14FastMap/Set` splices inline `F14Value` storage for small `value_type` with `F14Vector` index-indirect storage for ≥24-byte values; `F14Node` keeps pointers stable.
- Empty tables allocate nothing (24–32 byte object); debug builds shuffle insert slots and ASAN can probabilistically catch iterator/reference stability bugs.

## Caveats

## Links

- Blog: https://engineering.fb.com/2019/04/25/developer-tools/f14/
- Folly docs: https://github.com/facebook/folly/blob/main/folly/container/F14.md
