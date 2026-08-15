---
title: "Structure of Arrays and Data Layout for SIMD"
authors:
  - "Intel ISPC / industry"
year: 2012
venue: "ISPC docs"
arxiv: null
doi: null
source: "https://ispc.github.io/ispc.html"
topics:
  - soa
  - simd
seed_rank: 345
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
cites:
  - title: "ispc: A SPMD Compiler for High-Performance CPU Programming"
    url: "https://ispc.github.io/papers/ispc_inpar_2012.pdf"
    year: 2012
    arxiv: null
    doi: null
  - title: "Scans as Primitive Parallel Operations"
    url: "https://doi.org/10.1109/12.42122"
    year: 1989
    arxiv: null
    doi: "10.1109/12.42122"
see:
  - "341-ispc-a-spmd-compiler-for-high-performance-cpu-programming"
  - "307-scans-as-primitive-parallel-operations"
---

# Structure of Arrays and Data Layout for SIMD

## One-sentence takeaway

SoA stores each field in its own packed array so a SIMD/SPMD kernel loads eight `x`s with one instruction, instead of gathering `x` out of an array-of-structs stride.

## Why it matters here

Anoptic ECS columns *are* SoA. This card is the layout note that sits under ispc, Unity chunks, and any particle/transform system that wants vector loads rather than scalar structs.

## Key ideas

- AoS (`struct {x,y,z,w} p[N]`) matches objects; SoA (`x[N], y[N], z[N], w[N]`) matches lanes. Hybrid AoSoA (tiles of 8–16 structs) is the cache-friendly compromise.
- ispc’s model assumes you can take a varying pointer into a SoA field; the user’s guide is the clearest industry write-up of that contract.
- Systems that touch one field (cull on `x/z`, integrate `vy`) waste bandwidth in AoS; systems that touch all fields can lose spatial locality in pure SoA — hence chunks/archetypes.
- Alignment to 16/32/64 bytes and avoiding false sharing across threads are part of the layout, not afterthoughts.
- No single paper owns this; the ispc user’s guide plus the InPar 2012 paper are the pinned artifacts.

## Caveats

## Links

- ispc user’s guide: https://ispc.github.io/ispc.html
- ispc paper: https://ispc.github.io/papers/ispc_inpar_2012.pdf
