---
title: "CuRast: Cuda-Based Software Rasterization for Billions of Triangles"
authors: ["Markus Schütz", "Lukas Lipp", "Elias Kristmann", "Michael Wimmer"]
year: 2026
venue: "Computer Graphics Forum"
arxiv: "2604.21749"
doi: "10.1111/cgf.70538"
source: "https://arxiv.org/abs/2604.21749"
topics: [mesh-shaders-gpu-driven, vulkan-realtime-rendering]
seed_rank: 1488
seed_batch: "craft-2026-09-01"
reviewed: "2026-09-01"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "Nanite: A Deep Dive"
    url: "https://advances.realtimerendering.com/s2021/Karis_Nanite_SIGGRAPH_Advances_2021_final.pdf"
    year: 2021
    arxiv: null
    doi: null
  - title: "FreePipe: A Programmable Parallel Rendering Architecture for Efficient Multi-Fragment Effects"
    url: "https://doi.org/10.1145/1730804.1730817"
    year: 2010
    arxiv: null
    doi: "10.1145/1730804.1730817"
  - title: "The Visibility Buffer: A Cache-Friendly Approach to Deferred Shading"
    url: "https://jcgt.org/published/0002/02/04/"
    year: 2013
    arxiv: null
    doi: null
see:
  - "090-nanite-a-deep-dive"
  - "015-gpu-driven-rendering-pipelines"
  - "1457-real-time-procedural-generation-with-gpu-work-graphs"
---

# CuRast: Cuda-Based Software Rasterization for Billions of Triangles

## One-sentence takeaway

A 3-stage CUDA compute raster that brute-forces unstructured opaque meshes with 64-bit atomicMin visibility buffers — 2–5× Vulkan on huge unique meshes, up to ~12× on instanced ones — complementary to meshlets, not a Nanite clone.

## Why it matters here

Last Craft's GPU *command* leftovers (work graphs / mesh-node trees / Whippletree) still assume clustered LODs. Photogrammetry-scale GRID COMMAND terrain and editable high-poly props do not: no meshlets yet, no Nanite DAG to rebuild after a CSG cut. CuRast is the visbuffer leftover of that pile — one thread per small triangle, warp then workgroup for leftovers, global triangle IDs via prefix-sum + binary search instead of fixed mesh/cluster bitfields. Steal the 3-stage split and the 28+36-bit visbuffer packing; keep meshlets (1032 / 1129 / 1130) for the cooked path. Do not remint 1030 / 1032 / 1129 / 1130 / 1457–1460.

## Key ideas

- **Unstructured on purpose.** No BVH, no clustered LOD. Host frustum-culls meshes, builds an exclusive prefix sum of triangle counts, then three CUDA stages rasterize. Small = screen-space bbox < 128 pixels (one thread, bbox walk + barycentrics); medium < 4096 pixels (32-thread warp, 1D loop, Sutherland–Hodgman only to size the visible bbox); large = 64×64 tiles with 64 threads doing world-space ray–triangle hits so near-plane clipping is unnecessary.
- **atomicMin visbuffer.** 64-bit fragment = 28-bit positive linear depth in the high bits + 36-bit global triangle ID. Closest depth wins. Resolve is a full-screen kernel: decode ID, binary-search the prefix-sum array for the owning mesh, shade in world space (mip level from four camera rays through the triangle plane — required when large triangles clip the near plane).
- **Dense/opaque only, and it shows.** Abstract: hundreds of millions of unique triangles up to 2–5× a Vulkan indexed/pulling path, instanced up to 12×; Vulkan stays an order of magnitude faster on low-poly. Table 2 (RTX 5090, 60-frame mean): Sponza closeup 0.251 ms vs VK-ID 0.022 ms; Venice 399.9 M meshopt+half-res 5.252 vs 17.106 ms; Lantern 3.1 B instances 9.951 vs 125.677 ms; Zorah closeup 13.6 B compressed 53.395 vs VK-PIP 631.095 ms. Figure 1: 18.9 B triangles, 13.5 B after frustum, 3840×2160 with SSAO+EDL in 67.3 ms after 6.6 s SSD→21.7 GB compressed GPU load.
- **Instancing and light compression.** Stage 1 can load a triangle once and loop instances (compile a separate kernel — instancing raises register pressure). Indices pack to `⌈log2(span)⌉` bits; positions to 16-bit fixed-point in the mesh AABB (Zorah 38.8 GB → 21.7 GB, fits a 4090).

## Caveats

Opaque and dense only: no blending, no transparency stage, and "glaring potential for improvement" on large triangles. Tens of thousands of low-poly nodes are explicitly out of scope — not games yet; the paper's own future work is clustered LODs (Meshoptimizer) plus a separate transparent pass. Complementary to Nanite 90, not a remint.

## Links

- arXiv: [2604.21749](https://arxiv.org/abs/2604.21749)
- DOI: [10.1111/cgf.70538](https://doi.org/10.1111/cgf.70538)
- PDF: https://arxiv.org/pdf/2604.21749
- Code: https://github.com/m-schuetz/CuRast
