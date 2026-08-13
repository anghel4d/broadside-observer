---
title: "The Reyes Image Rendering Architecture"
authors:
  - "Robert L. Cook"
  - "Loren Carpenter"
  - "Edwin Catmull"
year: 1987
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/37402.37414"
source: "https://doi.org/10.1145/37402.37414"
topics:
  - graphics
  - reyes
  - micropolygons
  - pixar
seed_rank: 1156
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "A Subdivision Algorithm for Computer Display of Curved Surfaces"
    url: "https://collections.lib.utah.edu/details?id=709785"
    year: 1974
    arxiv: null
    doi: null
    card: "1145-a-subdivision-algorithm-for-computer-display-of-curved-surfa"
  - title: "Distributed Ray Tracing"
    url: "https://doi.org/10.1145/800031.808590"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808590"
    card: "1155-distributed-ray-tracing"
  - title: "Nanite: A Deep Dive"
    url: "https://www.unrealengine.com/en-US/blog/nanite-a-deep-dive"
    year: 2021
    arxiv: null
    doi: null
    card: "106-nanite-a-deep-dive"
  - title: "meshoptimizer"
    url: "https://github.com/zeux/meshoptimizer"
    year: 2017
    arxiv: null
    doi: null
    card: "733-meshoptimizer"
---

# The Reyes Image Rendering Architecture

## One-sentence takeaway

Reyes: dice geometry to micropolygons, shade, then sample—the film renderer architecture behind RenderMan's look.

## Why it matters here

Micropolygon/split-dice thinking still informs tessellation and Nanite-era continuous LOD debates.

## Key ideas

- Bound/split/dice/shade/sample pipeline.
- Micropolygon grids as the shading domain.
- Hides geometric complexity before shading.
- Pixar production architecture landmark.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/37402.37414](https://doi.org/10.1145/37402.37414)
- URL: https://doi.org/10.1145/37402.37414
