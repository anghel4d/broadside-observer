---
title: "Marching Cubes: A High Resolution 3D Surface Construction Algorithm"
authors:
  - "William E. Lorensen"
  - "Harvey E. Cline"
year: 1987
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/37402.37422"
source: "https://doi.org/10.1145/37402.37422"
topics:
  - graphics
  - isosurface
  - marching-cubes
seed_rank: 1161
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 10
lineage: gpu-driven-rendering
cites:
  - title: "Display of Surfaces from Volume Data"
    url: "https://doi.org/10.1109/38.511"
    year: 1988
    arxiv: null
    doi: "10.1109/38.511"
    card: "1160-display-of-surfaces-from-volume-data"
  - title: "Dual Contouring of Hermite Data"
    url: "https://doi.org/10.1145/566570.566586"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566586"
    card: "491-dual-contouring-of-hermite-data"
---

# Marching Cubes: A High Resolution 3D Surface Construction Algorithm

## One-sentence takeaway

Marching cubes extracts triangles from scalar fields via a 256-case cube lookup—the default isosurface algorithm.

## Why it matters here

Voxel/sim visualization staple; pairs with dual contouring (491) already in corpus.

## Key ideas

- Cube-case table for ambiguous isosurfaces.
- Local triangulation from grid samples.
- High-resolution medical surface reconstruction use case.
- Ambiguity issues later repaired by successors.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/37402.37422](https://doi.org/10.1145/37402.37422)
- URL: https://doi.org/10.1145/37402.37422
