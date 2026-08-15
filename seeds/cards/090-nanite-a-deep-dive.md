---
title: "Nanite: A Deep Dive"
authors:
  - "Brian Karis"
  - "Rune Stubbe"
  - "Graham Wihlidal"
year: 2021
venue: "SIGGRAPH Advances in Real-Time Rendering"
arxiv: null
doi: null
source: "https://advances.realtimerendering.com/s2021/Karis_Nanite_SIGGRAPH_Advances_2021_final.pdf"
topics:
  - meshlets
  - gpu-driven
seed_rank: 90
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "GPU-Driven Rendering Pipelines"
    url: "https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf"
    year: 2015
    arxiv: null
    doi: null
  - title: "The Visibility Buffer: A Cache-Friendly Approach to Deferred Shading"
    url: "https://jcgt.org/published/0002/02/04/"
    year: 2013
    arxiv: null
    doi: null
  - title: "Introduction to Turing Mesh Shaders"
    url: "https://developer.nvidia.com/blog/introduction-turing-mesh-shaders/"
    year: 2018
    arxiv: null
    doi: null
  - title: "Hierarchical Z-Buffer Visibility"
    url: "https://doi.org/10.1145/166117.166147"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166147"
  - title: "meshoptimizer"
    url: "https://github.com/zeux/meshoptimizer"
    year: 2016
    arxiv: null
    doi: null
see:
  - "015-gpu-driven-rendering-pipelines"
  - "271-the-visibility-buffer-a-cache-friendly-approach-to-deferred-"
  - "261-introduction-to-turing-mesh-shaders"
  - "144-hierarchical-z-buffer-visibility"
  - "482-meshoptimizer"
---

# Nanite: A Deep Dive

## One-sentence takeaway

Nanite virtualizes triangle geometry the way virtual texturing virtualized images: stream clustered LODs, cull on the GPU, and software-rasterize pixel-sized triangles so artists ship film-quality source meshes.

## Why it matters here

Anoptic's meshlet/GPU-driven path is the same bet — disconnect authoring polycount from frame cost — and Nanite is the production extreme of that design.

## Key ideas

- Voxels, subdivision, displacement, and points were rejected for film-quality imported meshes that still have UVs and ordinary materials.
- Clusters are built at import, stored in a DAG of LODs, streamed in pages, and decompressed on the GPU.
- Hierarchical and screen-space culling run before a mix of software rasterization (tiny triangles) and hardware rasterization (larger ones).
- The goal is no remaining budgets for polycount, draw calls, or geometry memory, without resampling the artist's surface.
- Talk: SIGGRAPH 2021 Advances in Real-Time Rendering; slides at the source URL above.

## Caveats

## Links

- Slides: https://advances.realtimerendering.com/s2021/Karis_Nanite_SIGGRAPH_Advances_2021_final.pdf
- Course page: https://advances.realtimerendering.com/s2021/index.html
