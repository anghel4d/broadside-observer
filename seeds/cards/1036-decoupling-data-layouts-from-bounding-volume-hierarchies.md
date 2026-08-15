---
title: "Decoupling Data Layouts from Bounding Volume Hierarchies"
authors: ["Christophe Gyurgyik", "Alexander J Root", "Fredrik Kjolstad"]
year: 2026
venue: "PLDI"
arxiv: "2511.15028"
doi: "10.1145/3808253"
source: "https://arxiv.org/abs/2511.15028"
topics: [bvh, data-oriented-design, compilers, ray-tracing]
seed_rank: 1036
seed_batch: "craft-2026-08-15"
reviewed: "2026-08-15"
pool: "engines"
relevance_score: 9
lineage: ecs-data-oriented-simulation
cites:
  - title: "Physically Based Rendering: From Theory to Implementation (4th ed.)"
    url: "https://pbr-book.org/"
    year: 2023
    arxiv: null
    doi: null
  - title: "Compressed-Leaf Bounding Volume Hierarchies"
    url: "https://doi.org/10.1145/3231578.3231581"
    year: 2018
    arxiv: null
    doi: "10.1145/3231578.3231581"
  - title: "A Relational Model of Data for Large Shared Data Banks"
    url: "https://doi.org/10.1145/362384.362685"
    year: 1970
    arxiv: null
    doi: "10.1145/362384.362685"
see:
  - "020-data-oriented-design-or-why-you-might-be-shooting-yourself-i"
  - "345-structure-of-arrays-and-data-layout-for-simd"
  - "1010-the-reyes-image-rendering-architecture"
  - "090-nanite-a-deep-dive"
  - "928-a-stack-free-traversal-algorithm-for-left-balanced-k-d-trees"
---

# Decoupling Data Layouts from Bounding Volume Hierarchies

## One-sentence takeaway

Scion is two DSLs — layout (physical↔logical destructor) and build (logical→physical constructor) — so a BVH traversal written against an ADT compiles onto PBRT-style implicit indices, quantized AABBs, SoA, or a novel 16-byte `pbrt-q16` that is Pareto-optimal in 35/42 contexts.

## Why it matters here

Anoptic's world queries (ray, closest-point, collision, GRID COMMAND spatial picks) are the same logical tree with *different* physical layouts per platform. Today those layouts are handwritten C unions. Scion is DOD as a compiler: SoA vs AoS, bit-stealing, quantized bounds, tree-carried slabs — without rewriting `closest_hit`.

## Key ideas

- Traversal is written against a logical ADT (`Interior | Leaf`). Layout language declares the reference type (u32 index, pointer, parent-carried bounds) and how to interpret bits: `group` (AoS/SoA/AoSoA), `split` (tagged unions), `from` (indirect arrays), `parent.x` (hierarchical encoding).
- Build language is a two-phase packer (canonical tree → physical), with `order=pre|post` and `this` for relative child offsets — the PBRT "left child is parent+1" trick is one line.
- Compiler specializes destructors (pattern-match → loads) and constructors. Immutability during traversal lets them CSE field paths (~1.2–1.4× vs naive stamping).
- Design-space result: no universal layout. They compose PBRT implicit indexing + Howard global-frame quantization + Benthin-style 16-bit bounds into `pbrt-q16` (16 B/node), Pareto-optimal on 35 of 42 (machine × scene × ray-distribution) cells. Pointer-chasing is death on GPU.

## Caveats

- Topology is in-scope-fixed; SAH/build quality is orthogonal (they say so). Scheduling (packets, wavefronts, vectorization) is also future work.
- Derived fields (quantization) are trusted, not round-trip proved. Fine for watertight-enclosing quantizers; not a Coq story.
- Pairs with Bonsai (1037): Bonsai generates the traversal; Scion lays it out.

## Links

- arXiv: [2511.15028](https://arxiv.org/abs/2511.15028)
- DOI: [10.1145/3808253](https://doi.org/10.1145/3808253)
- Author PDF: https://cgyurgyik.github.io/files/pubs/scion-pldi.pdf
