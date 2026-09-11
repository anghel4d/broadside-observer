---
title: "Software Rasterization of 2 Billion Points in Real Time"
authors: ["Markus Schütz", "Bernhard Kerbl", "Michael Wimmer"]
year: 2022
venue: "PACM CGIT / HPG 2022"
arxiv: "2204.01287"
doi: "10.1145/3543863"
source: "https://arxiv.org/abs/2204.01287"
topics: [visibility-buffer, gpu-driven]
seed_rank: 1786
seed_batch: "craft-2026-09-11"
reviewed: "2026-09-11"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "The Visibility Buffer: A Cache-Friendly Approach to Deferred Shading"
    url: "https://jcgt.org/published/0002/02/04/"
    year: 2013
    arxiv: null
    doi: null
  - title: "GPU-Driven Rendering Pipelines"
    url: "https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf"
    year: 2015
    arxiv: null
    doi: null
  - title: "Towards Practical Meshlet Compression"
    url: "https://arxiv.org/abs/2404.06359"
    year: 2024
    arxiv: "2404.06359"
    doi: null
  - title: "End-to-End Compressed Meshlet Rendering"
    url: "https://doi.org/10.1111/cgf.15002"
    year: 2024
    arxiv: null
    doi: "10.1111/cgf.15002"
  - title: "High-Performance Software Rasterization on GPUs"
    url: "https://doi.org/10.1145/2018323.2018337"
    year: 2011
    arxiv: null
    doi: "10.1145/2018323.2018337"
see:
  - "271-the-visibility-buffer-a-cache-friendly-approach-to-deferred-"
  - "015-gpu-driven-rendering-pipelines"
  - "090-nanite-a-deep-dive"
  - "226-towards-practical-meshlet-compression"
  - "1130-end-to-end-compressed-meshlet-rendering"
  - "1129-performance-comparison-of-meshlet-generation-strategies"
---

# Software Rasterization of 2 Billion Points in Real Time

## One-sentence takeaway

Schütz–Kerbl–Wimmer software-rasterize up to two billion points at 60 fps by batching frustum/LOD/precision in a compute workgroup and writing a visibility buffer so most points load only ~4 bytes.

## Why it matters here

Meshlets 226/1130 and Visibility Buffer 271 already cover triangle Nanite-style paths. The leftover for Anoptic Vulkan mesh/compute pipelines is *batch-level GPU-driven culling and compact visbuffer raster* — the same discipline (cull a batch, pick precision, write IDs, shade later) applied where you would otherwise stream fat vertex records. Actionable for point/voxel/proxy passes and for shrinking meshlet payload, not a neural 3DGS paper.

## Key ideas

- **Batch before raster.** Points are grouped so frustum culling, LOD, and coordinate precision are decided per batch inside a compute workgroup, then the surviving points rasterize in the same pass.
- **Adaptive precision + visibility buffer.** Tight integer encodings plus a visbuffer drop loaded bytes to ~4 for the majority of points, beating bandwidth-limited software raster baselines.
- **LOD for arbitrarily large clouds / VR.** Hierarchical batches keep the working set bounded; the same path is meant to hit VR frame times, not just a 1080p demo.
- **Engine transfer.** Steal the batch/cull/precision/visbuffer split for Anoptic meshlet and compute raster paths (Haar–Aaltonen GPU-driven 015, Nanite 090), not the point-cloud file format.

## Caveats

PACM CGIT 5(3) Article 24 (HPG 2022) / DOI `10.1145/3543863` / arXiv `2204.01287`. Point primitives, not triangles — meshlet compression 226/1130 remain the triangle payload papers. Do not remint Visibility Buffer 271, GPU-driven 015, Nanite 090, or meshlet 226/1129/1130. Skip 3DGS / neural point radiance (dirt).

## Links

- arXiv abs: https://arxiv.org/abs/2204.01287
- PDF: https://arxiv.org/pdf/2204.01287
- DOI: https://doi.org/10.1145/3543863
