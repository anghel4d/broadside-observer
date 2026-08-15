---
title: "Optimizing the Graphics Pipeline with Compute — GPU-Driven Rendering Techniques"
authors:
  - "Graham Wihlidal"
year: 2016
venue: "GDC / Frostbite"
arxiv: null
doi: null
source: "https://www.gdcvault.com/play/1023275/Optimizing-the-Graphics-Pipeline-with"
topics:
  - gpu-driven
  - occlusion
  - meshlets
seed_rank: 462
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: gpu-driven-rendering
cites:
  - title: "GPU-Driven Rendering Pipelines"
    url: "https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf"
    year: 2015
see:
  - "015-gpu-driven-rendering-pipelines"
---

# Optimizing the Graphics Pipeline with Compute — GPU-Driven Rendering Techniques

## One-sentence takeaway

Wihlidal moves Frostbite's cull, LOD, and draw compaction into compute so the GPU builds compacted indirect argument buffers just-in-time instead of waiting on a CPU-built command list.

## Why it matters here

Anoptic's GPU-driven path is this talk plus Haar/Aaltonen: resident scene, Hi-Z occlusion, compacted executes — the industrial pattern Nanite later specialized into clustered LOD.

## Key ideas

- Compute shaders perform per-instance and per-cluster frustum, occlusion, and LOD tests against a hierarchical depth pyramid.
- Surviving draws are compacted into indirect execute buffers so the graphics pipe never walks rejected geometry.
- Aimed at AMD GCN / DirectX 12 triangle throughput: preprocess geometry "just in time" rather than on the CPU command recorder.
- Pairs with the 2015 SIGGRAPH Advances GPU-driven pipelines talk as the Frostbite-era public recipe.

## Caveats

## Links

- GDC Vault: https://www.gdcvault.com/play/1023275/Optimizing-the-Graphics-Pipeline-with
- Slides: https://ubm-twvideo01.s3.amazonaws.com/o1/vault/gdc2016/Presentations/Wihlidal_Graham_OptimizingTheGraphics.pdf
