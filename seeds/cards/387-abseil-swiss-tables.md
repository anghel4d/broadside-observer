---
title: "Abseil Swiss Tables"
authors:
  - "Google"
year: 2017
venue: "Abseil"
arxiv: null
doi: null
source: "https://abseil.io/about/design/swisstables"
topics:
  - hashtable
  - performance
seed_rank: 387
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: open-addressing
cites:
  - title: "Hopscotch Hashing"
    url: "https://doi.org/10.1007/978-3-540-87779-0_24"
    year: 2008
    arxiv: null
    doi: "10.1007/978-3-540-87779-0_24"
  - title: "F14: A Hash Table Library for C++"
    url: "https://engineering.fb.com/2019/04/25/developer-tools/f14/"
    year: 2019
    arxiv: null
    doi: null
see:
  - "400-hopscotch-hashing"
  - "467-f14-a-hash-table-library-for-c"
---

# Abseil Swiss Tables

## One-sentence takeaway

Swiss tables are SIMD-accelerated open-addressing hash maps: a group of 16 control bytes is scanned with one SSE compare so lookups stay in a couple of cache lines.

## Why it matters here

Anoptic entity maps, interned strings, and GRID COMMAND spatial hashes should not be `std::unordered_map`. Swiss tables (and the F14 / rustc-hash cousins) are the default high-load, low-overhead design: no per-node alloc, SIMD probe, tombstones handled in the control bytes.

## Key ideas

- Each slot has a 1-byte control: empty / deleted / 7-bit hash fingerprint. A `movdqa` + `cmpeq` finds candidate matches in a 16-wide group.
- Quadratic probing over groups, not individual slots; load factor ~0.875 before resize.
- `absl::flat_hash_map` stores values inline; `node_hash_map` keeps pointer stability when you need it.
- Iteration is denser than chained maps; erase uses a deleted marker so probes still terminate.

## Caveats

## Links

- Design note: https://abseil.io/about/design/swisstables
- Implementation: https://github.com/abseil/abseil-cpp/blob/master/absl/container/internal/raw_hash_set.h
