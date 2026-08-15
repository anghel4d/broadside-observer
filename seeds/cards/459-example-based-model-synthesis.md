---
title: "Example-Based Model Synthesis"
authors:
  - "Paul Merrell"
year: 2007
venue: "i3D"
arxiv: null
doi: "10.1145/1230100.1230119"
source: "https://doi.org/10.1145/1230100.1230119"
topics:
  - pcg
  - model-synthesis
seed_rank: 459
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
lineage: procedural-generation
cites:
  - title: "Texture Synthesis by Non-parametric Sampling"
    url: "https://doi.org/10.1109/ICCV.1999.790383"
    year: 1999
    doi: "10.1109/ICCV.1999.790383"
---

# Example-Based Model Synthesis

## One-sentence takeaway

Merrell grows large 3D models whose every local neighborhood already occurs in a small example, using a global conflict search and divide-and-conquer so the output stays consistent with the exemplar's adjacency constraints.

## Why it matters here

Wave Function Collapse is a widely adopted later variant; Anoptic PCG should cite this 2007 constraint-synthesis paper as the algorithmic parent, not only Gumin 2016.

## Key ideas

- Treats model synthesis as matching local neighborhoods of an example mesh or voxel model rather than sampling textures independently.
- Detects global conflicts before committing a region, then splits the remaining volume into subproblems.
- Produces larger, structurally valid buildings and interiors from a tiny handmade example.
- Direct precursor of later adjacency-constraint generators (WFC, MarkovJunior rewrite stages).

## Caveats

## Links

- DOI: [10.1145/1230100.1230119](https://doi.org/10.1145/1230100.1230119)
- Author page: https://paulmerrell.org/model-synthesis/
