---
title: "Real-Time Rendering Methods With Adaptive Levels of Detail for Fast Rendering of Parametric Objects on Modern GPUs"
authors: ["Johannes Unterguggenberger", "Lukas Lipp", "Michael Wimmer", "Markus Steinberger", "Bernhard Kerbl", "Markus Schütz"]
year: 2026
venue: "IEEE TVCG 32(7)"
arxiv: null
doi: "10.1109/TVCG.2025.3638697"
source: "https://www.cg.tuwien.ac.at/research/publications/2026/UNTERGUGGENBERGER-2026-ALOD/"
topics: [vulkan-realtime-rendering, mesh-shaders-gpu-driven]
seed_rank: 1560
seed_batch: "craft-2026-09-03"
reviewed: "2026-09-03"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "CuRast: Cuda-Based Software Rasterization for Billions of Triangles"
    url: "https://arxiv.org/abs/2604.21749"
    year: 2026
    arxiv: "2604.21749"
    doi: "10.1111/cgf.70538"
  - title: "Real-Time Meshlet Extraction from Scalar Volumes"
    url: "https://doi.org/10.2312/egpgv.20261001"
    year: 2026
    arxiv: null
    doi: "10.2312/egpgv.20261001"
  - title: "Mesh Shaders in the Vulkan Ecosystem"
    url: "https://www.khronos.org/blog/mesh-shading-for-vulkan"
    year: 2018
    arxiv: null
    doi: null
see:
  - "1488-curast-cuda-based-software-rasterization-for-billions-of-triangles"
  - "1032-real-time-meshlet-extraction-from-scalar-volumes"
  - "097-mesh-shaders-in-the-vulkan-ecosystem"
  - "1058-real-time-procedural-resurfacing-using-gpu-mesh-shader"
---

# Real-Time Rendering Methods With Adaptive Levels of Detail for Fast Rendering of Parametric Objects on Modern GPUs

## One-sentence takeaway

Per-frame adaptive LOD stage feeds either hardware tessellation or point-based software raster so parametric objects (code-defined geometry) render at hundreds of FPS with no preprocess/cache — a Nanite-class detail dial without storing meshes.

## Why it matters here

Anoptic 4X/RTS needs compact procedural/parametric props (glyphs, cables, markers, analytic terrain doodads) without Nanite-style cluster streaming storage. TU Wien pipeline: LOD analysis → tessellation **or** point soft-raster (same lab as CuRast 1488). Example mid-range RTX 3070 rates from paper Fig. 1: ~**248–349 FPS** on several parametric shapes (one scene ~**98 FPS**). Code: https://github.com/cg-tuwien/FastRenderingOfParametricObjects

## Key ideas

- **Parametric fp(u,v).** Code-defined geometry evaluated at sample density the LOD stage chooses; no authored triangle cache.
- **Dedicated LOD stage each frame.** Outputs patches of similar geometric detail. Fast enough to rerun every frame, so animated parametric objects are in scope. No preprocess, no caching.
- **Two backends.** Hardware tessellation, or point-based software raster (Schütz-lab cousin of CuRast 1488). Geometric precision from a few pixels down to sub-pixel.
- **Flexibility vs discrete LOD / SH glyphs.** Beats classical discrete-LOD popping and specialized spherical-harmonics glyph methods on the range of shapes it can take, not by claiming a universal mesh-shader win.
- **Venue.** IEEE TVCG **32**(7):4931–4944, July 2026; DOI `10.1109/TVCG.2025.3638697`.

## Caveats

Parametric closed-form shapes ≠ general authored meshes (Nanite still owns filmic unique meshes). Point backend is related to the Schütz soft-raster lineage — cite CuRast 1488, do not remint SoftRaster-2B-points. Mesh-shader tessellation replacement is **not** claimed as a universal win (the authors’ separate notes caution mesh shaders vs hardware tessellation).

## Links

- TU Wien: https://www.cg.tuwien.ac.at/research/publications/2026/UNTERGUGGENBERGER-2026-ALOD/
- PDF: https://www.cg.tuwien.ac.at/research/publications/2026/UNTERGUGGENBERGER-2026-ALOD/UNTERGUGGENBERGER-2026-ALOD-paper.pdf
- DOI: https://doi.org/10.1109/TVCG.2025.3638697
- Code: https://github.com/cg-tuwien/FastRenderingOfParametricObjects
