---
title: "Direct-Operable SIMD Bit-Slicing: A Framework for Memory-Efficient Predicate Evaluation"
authors: ["Arunkumar Mathiyazhagan"]
year: 2026
venue: "arXiv (cs.PF)"
arxiv: "2608.26368"
doi: null
source: "https://arxiv.org/abs/2608.26368"
topics: [relational-ecs-queries, array-programming-apl-bqn-q]
seed_rank: 1627
seed_batch: "craft-2026-09-07"
reviewed: "2026-09-07"
pool: "systems"
relevance_score: 8
lineage: columnar-predicates
cites:
  - title: "C-Store: A Column-oriented DBMS"
    url: "https://www.vldb.org/archives/website/2005/program/paper/thu/p553-stonebraker.pdf"
    year: 2005
    arxiv: null
    doi: "10.5555/1083592.1083658"
see:
  - "127-c-store-a-column-oriented-dbms"
---

# Direct-Operable SIMD Bit-Slicing: A Framework for Memory-Efficient Predicate Evaluation

## One-sentence takeaway

Keep columns in bit-sliced form and evaluate equality/range/IN/BETWEEN as Panama SIMD bitwise ops on bit-planes — no decompress-then-scan — with up to 8× less memory and 2.4–10.8× faster filter scans than scalar Java on 50M-row TPC-DS-shaped data.

## Why it matters here

Ano columnar ECS query masks want exactly this: a predicate becomes a bitvector over a packed column, not a branchy row walk. Steal the bit-plane algebra and the “never materialize the ints” rule; rewrite it in C/SIMD or SPIR-V later. C-Store 127 is the columnar ancestor; this is the SIMD-predicate leftover.

## Key ideas

- **Zero-decompression.** A column of *N* *b*-bit values is *b* bitmaps of length *N* (O’Neil–Quass bit-sliced indexes, promoted from index to primary representation). Predicates are AND/OR/NOT across planes; each plane is a SIMD register load.
- **Predicate algebra.** Equality, GT/LT, range, BETWEEN, IN-list as compositions of those bitwise ops, with MSB-first short-circuit on ranges. Adaptive bit-width stores only as many planes as `max(value)` needs.
- **Types beyond ints.** Longs/timestamps via per-block bias; doubles via an IEEE 754 order-preserving transform so comparisons remain bit-plane walks; strings via dictionary codes. Panama Vector API (JEP 508), measured on JDK 21 SPECIES_128/256/512.
- **Numbers given.** Memory footprint down up to 8× vs boxed Java collections while matching or beating uncompressed throughput. TPC-DS-modeled 50M-row end-to-end: 2.4–10.8× over scalar scans on five filter-heavy patterns; extended type benches 1.5–43× on timestamps/decimals/dictionary strings.

## Caveats

**Java-first** (Spark/Flink/Trino costume, Panama incubator). Not a C ECS query engine and not Arrow/Photon/Velox. TPC-DS-*modeled*, author-independent work (Amazon disclaimer). Do not remint C-Store 127.

## Links

- arXiv abs: https://arxiv.org/abs/2608.26368
- PDF: https://arxiv.org/pdf/2608.26368
