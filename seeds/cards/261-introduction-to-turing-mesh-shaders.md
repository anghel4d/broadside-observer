---
title: "Introduction to Turing Mesh Shaders"
authors:
  - "Christoph Kubisch"
year: 2018
venue: "NVIDIA Technical Blog"
arxiv: null
doi: null
source: "https://developer.nvidia.com/blog/introduction-turing-mesh-shaders/"
topics:
  - meshlets
  - mesh-shaders
seed_rank: 261
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "GPU-Driven Rendering Pipelines"
    url: "https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf"
    year: 2015
    arxiv: null
    doi: null
  - title: "Mesh Shaders in the Vulkan Ecosystem"
    url: "https://www.khronos.org/blog/mesh-shading-for-vulkan"
    year: 2018
    arxiv: null
    doi: null
  - title: "Nanite: A Deep Dive"
    url: "https://advances.realtimerendering.com/"
    year: 2021
    arxiv: null
    doi: null
  - title: "meshoptimizer"
    url: "https://github.com/zeux/meshoptimizer"
    year: 2016
    arxiv: null
    doi: null
see:
  - "015-gpu-driven-rendering-pipelines"
  - "097-mesh-shaders-in-the-vulkan-ecosystem"
  - "090-nanite-a-deep-dive"
  - "482-meshoptimizer"
---

# Introduction to Turing Mesh Shaders

## One-sentence takeaway

Turing's task + mesh shader stages replace the fixed vertex/tess/geometry pipeline with compute-style workgroups that emit compact meshlets on-chip for the rasterizer.

## Why it matters here

This is the hardware contract Anoptic's Vulkan meshlet path actually talks to: cooperative threads, 64/126 meshlet sizing, task-shader cull, and why index-buffer scans and over-fetch go away.

## Key ideas

- Task shaders emit (or cull) mesh workgroups; mesh shaders write vertices and primitive indices into on-chip memory the rasterizer consumes.
- Recommended meshlet budget is 64 vertices / 126 triangles so primitive indices pack into 384-byte blocks (`3*126+4`).
- Pre-computed meshlets de-duplicate vertices once; task shaders can drop whole clusters before any attribute fetch.
- Traditional primitive-distributor index scans and geometry-shader expansion become optional; DX12 Ultimate, VK_NV_mesh_shader, and GL extensions expose the path.
- Published 17 September 2018 on the NVIDIA Technical Blog, distilled from Kubisch's SIGGRAPH 2018 talk.

## Caveats

## Links

- NVIDIA blog: https://developer.nvidia.com/blog/introduction-turing-mesh-shaders/
