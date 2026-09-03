---
title: "LucidRaster: GPU Software Rasterizer for Exact Order-Independent Transparency"
authors: ["Krzysztof Jakubowski"]
year: 2024
venue: "arXiv:cs.GR"
arxiv: "2405.13364"
doi: null
source: "https://arxiv.org/abs/2405.13364"
topics: [vulkan-realtime-rendering, oit]
seed_rank: 1558
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
  - title: "Weighted Blended Order-Independent Transparency"
    url: "https://jcgt.org/published/0002/02/09/"
    year: 2013
    arxiv: null
    doi: null
  - title: "Order-Independent Transparency (Depth Peeling)"
    url: "https://developer.download.nvidia.com/assets/gamedev/docs/OrderIndependentTransparency.pdf"
    year: 2001
    arxiv: null
    doi: null
  - title: "The A-buffer, an Antialiased Hidden Surface Method"
    url: "https://doi.org/10.1145/800031.808585"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808585"
see:
  - "1488-curast-cuda-based-software-rasterization-for-billions-of-triangles"
  - "410-depth-peeling-order-independent-transparency"
  - "338-weighted-blended-order-independent-transparency"
  - "1038-the-a-buffer-an-antialiased-hidden-surface-method"
---

# LucidRaster: GPU Software Rasterizer for Exact Order-Independent Transparency

## One-sentence takeaway

Vulkan software rasterizer does exact OIT with two-stage sort-middle binning — on average faster than high-quality OIT approximations and only ~3× slower than hardware alpha blending, especially on dense/high-depth-complexity meshes.

## Why it matters here

Anoptic already harvested translucency/SSS and minted CuRast (1488) for opaque visbuffer brute-force. LucidRaster is the transparency leftover: exact sorted fragments without trusting WBOIT approximations (338) or multi-pass depth peeling (410), and without standing up a classic A-buffer (1038) on the hardware blender. Prototype unit translucency / glass / foliage layers on the soft-raster path this week.

## Key ideas

- **Sort-middle bins.** Two-stage sorting: depth-sorted blocks at **8×4 / 8×8**, then a per-pixel fixed sorter. Shared-memory atomics keep the bin local.
- **Front-to-back blend with early-out.** Blend as you walk; stop when alpha → 1 so dense occluders do not pay a full fragment list.
- **Vulkan + GLSL.** Software raster on compute, not a CUDA-only cousin of CuRast. Source: https://github.com/nadult/lucid
- **Quality leftovers.** Residual invalid pixels usually **<0.1%** (≤**1%** on hard scenes), fixable by geometry cleanup or a larger depth-filter (~**1.5%** slowdown). Average case: faster than high-quality OIT approximations, ~**3×** slower than hardware alpha blending, and strongest on dense / high-depth-complexity meshes.

## Caveats

Preprint (no journal DOI found). Software raster still loses to opaque hardware on easy scenes — this is the transparency pass, not a CuRast replacement. Foliage self-intersection is a stress case. Not a remint of CuRast 1488 / WBOIT 338 / depth peeling 410 / A-buffer 1038.

## Links

- arXiv abs: https://arxiv.org/abs/2405.13364
- PDF: https://arxiv.org/pdf/2405.13364
- Code: https://github.com/nadult/lucid
