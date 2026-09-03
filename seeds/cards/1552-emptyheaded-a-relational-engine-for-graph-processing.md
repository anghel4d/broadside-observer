---
title: "EmptyHeaded: A Relational Engine for Graph Processing"
authors:
  - "Christopher R. Aberger"
  - "Andrew Lamb"
  - "Susan Tu"
  - "Andres Nötzli"
  - "Kunle Olukotun"
  - "Christopher Ré"
year: 2017
venue: "SIGMOD 2016 / ACM TODS"
arxiv: "1503.02368"
doi: "10.1145/3129246"
source: "https://arxiv.org/abs/1503.02368"
topics:
  - "worst-case-optimal-joins"
  - "graph-processing"
  - "simd-set-intersection"
seed_rank: 1552
seed_batch: "user-agm-wcoj-2026-09-03"
reviewed: "2026-09-03"
pool: "engines"
relevance_score: 10
lineage: worst-case-optimal-joins
cites:
  - title: "Size Bounds and Query Plans for Relational Joins"
    url: "https://arxiv.org/abs/1711.03860"
    year: 2013
    arxiv: "1711.03860"
    doi: "10.1137/110859440"
  - title: "Leapfrog Triejoin: A Simple, Worst-Case Optimal Join Algorithm"
    url: "https://arxiv.org/abs/1210.0481"
    year: 2014
    arxiv: "1210.0481"
    doi: "10.5441/002/icdt.2014.13"
  - title: "Skew Strikes Back: New Developments in the Theory of Join Algorithms"
    url: "https://arxiv.org/abs/1310.3314"
    year: 2013
    arxiv: "1310.3314"
    doi: "10.1145/2590989.2590991"
  - title: "Algorithms for Acyclic Database Schemes"
    url: "https://dl.acm.org/doi/10.5555/1286831.1286840"
    year: 1981
    arxiv: null
    doi: null
see:
  - "1550-size-bounds-and-query-plans-for-relational-joins"
  - "039-what-you-always-wanted-to-know-about-datalog-and-never-dared"
---

# EmptyHeaded: A Relational Engine for Graph Processing

## One-sentence takeaway

A high-level datalog engine whose logical plans are generalized hypertree decompositions and whose physical engine is SIMD-tuned WCOJ set intersection, matching low-level graph systems on triangles and staying within 3× of Galois on SSSP.

## Why it matters here

Anoptic already stores archetypes as columnar tries-of-columns; EmptyHeaded is the query engine that shape wants. Graph-shaped ECS queries (squad membership, rooms⋈doors, Flecs relationships) are the triangle / barbell / 4-clique patterns pairwise SQL loses on. GHDs give you early aggregation so a COUNT of triangles is O(N^{3/2}) not O(N^3). The SIMD uint-vs-bitset layout fight is the same density-skew fight Bevy/Unity chunks already have.

## Key ideas

- **GHDs, not relational algebra.** Each GHD node is a multiway join plus a projection; width is AGM of the bag. Run Generic Join inside bags, then Yannakakis up the tree: O(N^w + out) with w = fractional hypertree width. Single-node GHDs (LogicBlox-style) miss early aggregation — barbell COUNT is quadratic-vs-cubic.
- **Generic Join inside.** Attribute-at-a-time intersections with the min-property (runtime bounded by the smaller set) so any join meets the AGM bound. Tries hold 32-bit dictionary IDs; both edge orders stored.
- **Skew-aware SIMD layouts.** Per-set choice of uint vs bitset (AVX 256-bit blocks); hybrid gallop/shuffle intersections when cardinality ratio > 32:1. Set-level layout was within 1.6× of an oracle; relation-level and block-level lost.
- **Language.** Datalog-style conjunctive queries, Green-semiring annotations (SUM/COUNT/MIN, matrix-vector), and Kleene-star recursion enough for PageRank and SSSP in 1–3 lines vs 150+ in Galois.
- **Numbers (TODS 2017).** Triangles: 2–60× vs PowerGraph/Snap-R, ~20–80× vs LogicBlox; PageRank 2–4× vs PowerGraph, within a small factor of Galois; SSSP at most ~3× slower than Galois, orders of magnitude faster than LogicBlox. Layout+algorithm ablations move 4-clique / barbell by 10²–10³×.
- Conference: SIGMOD 2016 (Best of); journal: ACM TODS 42(4) 2017 doi 10.1145/3129246, adding Lamb and Nötzli. arXiv:1503.02368. Engine: https://github.com/HazyResearch/EmptyHeaded.

## Caveats

- User-facing memory of 'SIGMOD 2017 / VLDBJ' is off: the conference is SIGMOD 2016, the journal is TODS 2017, not VLDBJ. Cite TODS + arXiv.
- In-memory, 32-bit keys, both trie orders assumed present. Selections that break symmetry-breaking (degree-ordered undirected pruning) lose a 2–5× trick used on triangles.
- SSSP is a generated MIN-semiring recursion, not the direction-optimizing BFS Galois ships — hence the 3× gap. Not a remint of AGM (1550), of Umbra 821, or of GPU Datalog 170.

## Links

- arXiv abs: https://arxiv.org/abs/1503.02368
- PDF: https://arxiv.org/pdf/1503.02368
- TODS DOI: https://doi.org/10.1145/3129246
- SIGMOD 2016 DOI: https://doi.org/10.1145/2882903.2915213
- Code: https://github.com/HazyResearch/EmptyHeaded
