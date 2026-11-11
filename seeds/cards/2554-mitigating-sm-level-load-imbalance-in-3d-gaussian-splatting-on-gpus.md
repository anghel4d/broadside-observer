---
title: "Mitigating SM-Level Load Imbalance in 3D Gaussian Splatting on GPUs"
authors:
  - "Junha Ryu"
  - "Hoi-Jun Yoo"
year: 2026
venue: "arXiv preprint (cs.DC)"
arxiv: "2611.12319"
doi: null
source: "https://arxiv.org/abs/2611.12319"
topics:
  - "gpu-scheduling"
  - "persistent-kernels"
  - "tile-based-rendering"
  - "gaussian-splatting"
  - "load-balancing"
seed_rank: 2554
seed_batch: "craft-2026-11-11"
reviewed: "2026-11-11"
pool: "graphics"
relevance_score: 8
lineage: gpu-driven-rendering
cites:
  - title: "3D Gaussian Splatting for Real-Time Radiance Field Rendering"
    url: "https://arxiv.org/abs/2308.04079"
    year: 2023
    arxiv: "2308.04079"
    doi: null
see:
  - "2501-abacusgs-gaussian-splatting-without-per-splat-sorting"
  - "200-scheduling-multithreaded-computations-by-work-stealing"
---

# Mitigating SM-Level Load Imbalance in 3D Gaussian Splatting on GPUs

## One-sentence takeaway

Tile-based splat compositing is bottlenecked by a few heavy tiles that keep a handful of SMs busy while the rest sit idle; a persistent kernel that dispatches tiles heaviest-first, plus depth-chunking of the worst outliers across several CTAs with an `atomicMin` "already saturated" flag, speeds up alpha blending by up to 2.93x per scene and 5.6x on the worst frames without changing the blend math.

## Why it matters here

Any tiled pass in Anoptic (splats, particle compositing, per-tile radiance-cascade merges, UI vector fill) has the same long-tail shape: work per tile is wildly uneven and the hardware block scheduler is oblivious. This is a cheap, drop-in recipe: the per-tile cost estimate is a count you already have from binning, the sort is a radix sort of tile indices only, and the cross-chunk early-out is one global flag per heavy tile. It is the GPU version of longest-processing-time-first scheduling, and it needs no new representation.

## Key ideas

- **LPT dispatch.** Use each tile's projected primitive count as its cost, radix-sort tile indices descending (data is not moved), and have a persistent kernel pull tiles in that order so the heaviest start first.
- **Depth-wise chunking.** LPT alone fails when one tile is bigger than a fair share; split those tiles along the sorted depth list into chunks, one CTA each, then reduce the partial composites.
- **Saturation signaling.** Each chunk starts at full transmittance and would waste work behind opaque content; a per-tile global flag records the earliest saturated chunk via `atomicMin`, and later chunks check it once per 256-primitive batch and stop. This is safe because transmittance only falls in depth order.
- **Co-execution.** Chunked heavy tiles and the LPT persistent kernel run on separate streams and share SMs; a per-frame cost model picks how many tiles to chunk and into how many pieces, and rarely chunks on balanced frames.
- **Tested widely.** 3DGS, 2DGS, 3DGUT, hierarchical and city-scale variants and driving reconstructions, on an NVIDIA GB10 (48 SMs) and an RTX A6000 (84 SMs).

## Caveats

Only the alpha-blending stage is accelerated, and gains scale with imbalance; balanced scenes (some driving sequences) see little benefit. The cost-model constants are fixed across GPUs rather than calibrated. CUDA-specific (streams, events, CTA scheduling); porting to Vulkan means hand-rolling the persistent queue. I read the abstract, method and limitations sections, not every evaluation table.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.12319
- PDF: https://arxiv.org/pdf/2611.12319
- HTML: https://arxiv.org/html/2611.12319
