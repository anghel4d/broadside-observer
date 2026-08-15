---
title: "Warnock: Harnessing GPU Geometry Amplification for Vector Graphics"
authors: ["Mark J. Kilgard", "Brian Barran"]
year: 2026
venue: "HPG"
arxiv: null
doi: "10.1145/3820012"
source: "https://doi.org/10.1145/3820012"
topics: [mesh-shaders-gpu-driven, vector-graphics, path-rendering]
seed_rank: 1030
seed_batch: "craft-2026-08-15"
reviewed: "2026-08-15"
pool: "graphics"
relevance_score: 10
lineage: mesh-shaders-gpu-driven
cites:
  - title: "Polar stroking"
    url: "https://doi.org/10.1145/3386569.3392458"
    year: 2020
    arxiv: null
    doi: "10.1145/3386569.3392458"
  - title: "GPU-accelerated path rendering"
    url: "https://doi.org/10.1145/2366145.2366191"
    year: 2012
    arxiv: null
    doi: "10.1145/2366145.2366191"
  - title: "A device independent graphics imaging model for use with raster devices"
    url: "https://doi.org/10.1145/800064.801297"
    year: 1982
    arxiv: null
    doi: "10.1145/800064.801297"
see:
  - "261-introduction-to-turing-mesh-shaders"
  - "097-mesh-shaders-in-the-vulkan-ecosystem"
  - "015-gpu-driven-rendering-pipelines"
  - "226-towards-practical-meshlet-compression"
---

# Warnock: Harnessing GPU Geometry Amplification for Vector Graphics

## One-sentence takeaway

Kilgard's polar-stroking theory becomes a production mesh-shader path renderer: one compact GPU buffer fills *and* strokes a path under any transform, width, cap, or join, with tessellation-shader fallback and mesh shading as the fast path.

## Why it matters here

Anoptic still needs resolution-independent 2D — UI chrome, Japanese surface glyphs, GRID COMMAND overlays — on the same Vulkan mesh pipeline that already owns 3D meshlets. Warnock is the missing "use the mesh shader as a geometry amplifier for paths" recipe, not another CPU tessellator.

## Key ideas

- Polar stroking is refined with a *pixel-space* quality metric, then extended to polar *filling*, so fill and stroke share one tessellation theory.
- A path compiles to a single compact GPU buffer that is valid for every transform, stroke width, cap, and join; no CPU retessellation when the camera or style changes.
- DirectX 11 tessellation shaders are the compatibility path; mesh shaders are the performance path (geometry amplification without the old hull/domain tax).
- Completes the Kilgard path-rendering line: Stencil-then-Cover (2012) → polar stroking theory (2020) → mesh-amplified Warnock (2026).

## Caveats

- Named for Warnock's imaging model, not the Warnock hidden-surface algorithm; do not confuse the two.
- Paper is ACM HPG 2026 (DOI only, no arXiv). Mesh-shader path assumes hardware Anoptic already targets; tessellation fallback is for older GPUs.
- Text *shaping* (HarfBuzz / Unicode) is upstream of this; Warnock renders the resulting paths.

## Links

- DOI: [10.1145/3820012](https://doi.org/10.1145/3820012)
- EG DL: https://diglib.eg.org/items/862173bd-1149-4ec5-a5bb-d6a94a2a2522
- HPG 2026 talk: https://www.youtube.com/watch?v=PTD4yvGWgvA
