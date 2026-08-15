---
title: "Surface Simplification Using Quadric Error Metrics"
authors:
  - "Michael Garland"
  - "Paul S. Heckbert"
year: 1997
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/258734.258849"
source: "https://doi.org/10.1145/258734.258849"
topics:
  - lod
  - simplification
seed_rank: 373
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
cites:
  - title: "Progressive meshes"
    url: "https://doi.org/10.1145/237170.237216"
    year: 1996
    arxiv: null
    doi: "10.1145/237170.237216"
  - title: "Mesh optimization"
    url: "https://doi.org/10.1145/166117.166119"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166119"
  - title: "Decimation of triangle meshes"
    url: "https://doi.org/10.1145/133994.134010"
    year: 1992
    arxiv: null
    doi: "10.1145/133994.134010"
see:
  - "375-progressive-meshes"
---

# Surface Simplification Using Quadric Error Metrics

## One-sentence takeaway

Collapse edges in the order of a 4×4 quadric that measures squared distance to the planes of neighboring triangles, and you get a fast, high-quality decimation sequence.

## Why it matters here

Anoptic meshlet / Nanite-style pipelines still score collapses. QEM is the error metric: one symmetric matrix per vertex, addable under a collapse, cheap enough to run on import and good enough that most game LOD chains still use a descendant.

## Key ideas

- Each triangle defines a plane; a vertex’s quadric is the sum of outer products of those plane coefficients, so `vᵀQv` is the sum of squared distances.
- Candidate collapse `(v1, v2) → v̄` costs `(v̄)ᵀ(Q1+Q2)v̄`; pick `v̄` by solving a linear system or falling back to the endpoints / midpoint.
- A heap of collapse costs plus a few topology checks (mesh inversion, boundary) is the whole algorithm.
- Attribute / boundary quadrics extend the same idea to UVs and sharp edges.

## Caveats

## Links

- DOI: https://doi.org/10.1145/258734.258849
- Author PDF: https://www.cs.cmu.edu/~./garland/Papers/quadrics.pdf
