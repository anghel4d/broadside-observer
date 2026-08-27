---
title: "Visibility Culling using Hierarchical Occlusion Maps"
authors: ["Hansong Zhang", "Dinesh Manocha", "Tom Hudson", "Kenneth E. Hoff III"]
year: 1997
venue: "SIGGRAPH 1997"
arxiv: null
doi: "10.1145/258734.258781"
source: "https://doi.org/10.1145/258734.258781"
topics: [vulkan-realtime-rendering, mesh-shaders-gpu-driven]
seed_rank: 1432
seed_batch: "craft-2026-08-27"
reviewed: "2026-08-27"
pool: "engines"
relevance_score: 9
lineage: occlusion-culling
cites:
  - title: "Hierarchical Z-Buffer Visibility"
    url: "https://doi.org/10.1145/166117.166147"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166147"
  - title: "Masked Software Occlusion Culling"
    url: "https://software.intel.com/content/www/us/en/develop/articles/software-occlusion-culling.html"
    year: 2016
    arxiv: null
    doi: null
see:
  - "144-hierarchical-z-buffer-visibility"
  - "479-masked-software-occlusion-culling"
  - "015-gpu-driven-rendering-pipelines"
  - "1430-aokana-a-gpu-driven-voxel-rendering-framework-for-open-world"
---

# Visibility Culling using Hierarchical Occlusion Maps

## One-sentence takeaway

Render a few fat occluders, mip the coverage pyramid, overlap-test the rest — Hi-Z's *coverage* leftover of Greene 144, which is what Aokana's tile Hi-Z and GPU-driven two-phase actually do.

## Why it matters here

Greene 144 is the z-pyramid. Intel 479 is SSE software raster of occluders. GPU-driven 015 is the GDC two-phase. None of those is the 1997 algorithm that split visibility into (1) 2D overlap against an occlusion *map* pyramid and (2) a conservative depth estimate. Aokana 1430's tile Hi-Z and Anoptic's GPU-driven instance cull for RTS unit counts are HOM plus a hardware z-pyramid. Evergreen practice, not Archive pantheon redo: this week we are wiring occlusion for FMM+RC probes and GPU-driven draws.

## Key ideas

- **Occluder set, not the whole model.** Pick a small set, rasterize them to a coverage map, recursively average 2×2 blocks into a pyramid (hardware bilinear).
- **Two tests.** Overlap: project the occludee AABB onto the pyramid, start coarse. Depth: a depth-estimation buffer, not a full per-pixel z-test.
- **Approximate culling.** Small holes among occluders can be ignored — the same conservatism GPU-driven pipelines use so they don't leak.
- **Evidence.** SIGGRAPH 1997, DOI `10.1145/258734.258781`. Walkthroughs of 100k-poly models on then-current GL. Princeton PDF.

## Caveats

Pre-Hi-Z hardware. Modern GPUs *are* Greene's z-pyramid; HOM's extra coverage map is the part you still write when you software-raster occluders (479) or build a visbuffer Hi-Z (Aokana). Occluder selection is the unsolved half — a bad set and you cull nothing. Not CHC++ / coherent hierarchical culling (Bittner 2004) — cite, don't mint. Not Umbra 821.

## Links

- DOI: [10.1145/258734.258781](https://doi.org/10.1145/258734.258781)
- PDF: http://www.cs.princeton.edu/courses/archive/spr01/cs598b/papers/zhang97.pdf
- ACM: https://dl.acm.org/doi/10.1145/258734.258781
