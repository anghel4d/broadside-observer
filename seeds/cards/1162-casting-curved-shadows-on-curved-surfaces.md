---
title: "Casting Curved Shadows on Curved Surfaces"
authors:
  - "Lance Williams"
year: 1978
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/965139.807402"
source: "https://doi.org/10.1145/965139.807402"
topics:
  - graphics
  - shadow-maps
  - williams
seed_rank: 1162
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "Shadow Algorithms for Computer Graphics"
    url: "https://doi.org/10.1145/563858.563901"
    year: 1977
    arxiv: null
    doi: "10.1145/563858.563901"
    card: "1163-shadow-algorithms-for-computer-graphics"
  - title: "Cascaded Shadow Maps"
    url: "https://developer.download.nvidia.com/assets/gamedev/docs/CascadedShadowMaps.pdf"
    year: 2006
    arxiv: null
    doi: null
    card: "436-cascaded-shadow-maps"
  - title: "Variance Shadow Maps"
    url: "https://doi.org/10.1145/1111411.1111440"
    year: 2006
    arxiv: null
    doi: "10.1145/1111411.1111440"
    card: "439-variance-shadow-maps"
---

# Casting Curved Shadows on Curved Surfaces

## One-sentence takeaway

Williams invents shadow mapping: render depth from the light, then test visibility when shading.

## Why it matters here

Root card for CSM/VSM/ISM already in the corpus (436/439/485).

## Key ideas

- Depth image from light's viewpoint.
- Projective test at shade time.
- Works for curved receivers/casters in image space.
- Bias and resolution issues that define later research.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/965139.807402](https://doi.org/10.1145/965139.807402)
- URL: https://doi.org/10.1145/965139.807402
