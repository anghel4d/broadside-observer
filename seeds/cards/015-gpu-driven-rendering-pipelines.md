---
title: "GPU-Driven Rendering Pipelines"
authors:
  - "Ulrich Haar"
  - "Sebastian Aaltonen"
year: 2015
venue: "SIGGRAPH Advances in Real-Time Rendering"
arxiv: null
doi: null
source: "https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf"
topics:
  - gpu-driven
  - graphics
seed_rank: 15
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 10
lineage: gpu-driven-rendering
cites:
  - title: "Hierarchical Z-Buffer Visibility"
    url: "https://doi.org/10.1145/166117.166147"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166147"
  - title: "The Visibility Buffer: A Cache-Friendly Approach to Deferred Shading"
    url: "https://jcgt.org/published/0002/02/04/"
    year: 2013
    arxiv: null
    doi: null
  - title: "Optimizing the Graphics Pipeline with Compute"
    url: "https://www.gdcvault.com/play/1023275/Optimizing-the-Graphics-Pipeline-with"
    year: 2016
    arxiv: null
    doi: null
see:
  - "144-hierarchical-z-buffer-visibility"
  - "271-the-visibility-buffer-a-cache-friendly-approach-to-deferred-"
  - "462-optimizing-the-graphics-pipeline-with-compute-gpu-drive"
---

# GPU-Driven Rendering Pipelines

## One-sentence takeaway

Assassin’s Creed Unity and Trials Frontier move instance and cluster culling onto the GPU: one “draw scene” command, Hi-Z occlusion, 64-triangle clusters, and MultiDrawIndirect with no CPU/GPU visibility round-trip.

## Why it matters here

This is the Anoptic render path in slide form — CPU only coarse-culled the quadtree; the GPU expanded instances into clusters, culled them, compacted an index buffer, and issued the draws. Mesh shaders and Nanite are the sequel, not a different idea.

## Key ideas

- Motivation is scale: ACU has ~10× the instances of prior AC games, modular interiors, crowds, and many shadow-map draws, while console CPU is the scarce resource.
- Meshes are split into fixed-topology clusters (64-vertex strips at RedLynx; 64-triangle clusters + MultiDrawIndexedInstancedIndirect at ACU) so one draw can cover many meshes.
- Pipeline: CPU coarse frustum → GPU instance cull (frustum + occlusion) → cluster-chunk expansion → per-cluster frustum/occlusion/backface cull → index-buffer compaction → multi-draw.
- Persistent GPU instance data (transform, LOD, bounds) lives in a ring buffer; draw-call hashes merge compatible instances so the CPU never enumerates visible objects.
- Occlusion uses a hierarchical depth buffer in the Greene / Shopf / Hill line, generated on GPU so the next frame’s cull does not wait on the CPU.

## Caveats

## Links

- PDF: https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf
- Course: https://advances.realtimerendering.com/s2015/index.html
