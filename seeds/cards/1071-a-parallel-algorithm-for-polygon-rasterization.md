---
title: "A Parallel Algorithm for Polygon Rasterization"
authors:
  - "Juan Pineda"
year: 1988
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/378456.378457"
source: "https://doi.org/10.1145/378456.378457"
topics:
  - "edge-functions"
  - "triangle-rasterization"
  - "gpu-hardware"
  - "subpixel"
seed_rank: 1071
seed_batch: "archive-2026-08-18"
reviewed: "2026-08-18"
pool: "engines"
relevance_score: 9
lineage: edge-function-rasterizer
cites:
  - title: "The Reyes Image Rendering Architecture"
    url: "https://doi.org/10.1145/37401.37414"
    year: 1987
    arxiv: null
    doi: "10.1145/37401.37414"
  - title: "The A-buffer, an Antialiased Hidden Surface Method"
    url: "https://doi.org/10.1145/800031.808585"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808585"
  - title: "Hierarchical-Z Buffer Visibility"
    url: "https://doi.org/10.1145/237170.237224"
    year: 1996
    arxiv: null
    doi: "10.1145/237170.237224"
see:
  - "1010-the-reyes-image-rendering-architecture"
  - "1038-the-a-buffer-an-antialiased-hidden-surface-method"
  - "144-hierarchical-z-buffer-visibility"
  - "1030-warnock-gpu-geometry-amplification-for-vector-graphics"
---

# A Parallel Algorithm for Polygon Rasterization

## One-sentence takeaway

An edge is a linear function whose sign says inside/outside; evaluate it with the same interpolators you already have for color and Z, and adjacent pixels are free parallelism.

## Why it matters here

Anoptic's meshlet/Vulkan path bottoms out in a hardware triangle rasterizer that is still Pineda's edge functions. The library had Reyes (1010), A-buffer (1038), GPU Warnock (1030), and Hi-Z (144), but not the 1988 paper every GPU rasterizer tutorial still reprints. Sub-pixel vertex precision is kept in the edge-function coefficients rather than snapped away — the reason conservative raster, MSAA coverage, and barycentrics are the same interpolators.

## Key ideas

- Edge function E(x,y) > 0 on one side, < 0 on the other; a pixel is inside the polygon iff all edges agree.
- E interpolates with the same adders as color/Z, so the rasterizer is "just another interpolator."
- Adjacent-pixel E values are a cheap increment — scanline *and* 2-D block parallel.
- Coefficients computed from floating-point endpoints so sub-pixel vertex precision survives.

## Caveats

- Scan-conversion of a *single* polygon; tiling, binning, and Hi-Z (144) are later GPU systems.
- No antialiasing story here (A-buffer / coverage masks / MSAA sit on top).
- Half-edge rasterization rules (top-left convention) are a later D3D/GL specification detail.

## Links

- DOI: [10.1145/378456.378457](https://doi.org/10.1145/378456.378457)
- SIGGRAPH History: https://history.siggraph.org/learning/a-parallel-algorithm-for-polygon-rasterization-by-pineda/
