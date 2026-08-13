---
title: meshoptimizer
authors:
- Arseny Kapoulkine
year: 2016
venue: GitHub
arxiv: null
doi: null
source: https://github.com/zeux/meshoptimizer
topics:
- meshlets
- gpu-driven
seed_rank: 733
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: engines
relevance_score: 9
lineage: gpu-driven-rendering
cites:
- title: Mesh Shaders in the Vulkan Ecosystem
  url: https://developer.nvidia.com/blog/introduction-turing-mesh-shaders/
  year: 2018
  arxiv: null
  doi: null
- title: GPU-Driven Rendering Pipelines
  url: https://advances.realtimerendering.com/s2015/aaltonenhaar_siggraph2015_combined_final_footer_220dpi.pdf
  year: 2015
  arxiv: null
  doi: null
- title: 'Nanite: A Deep Dive'
  url: https://www.youtube.com/watch?v=e_5kdRpGrpI
  year: 2021
  arxiv: null
  doi: null
- title: Optimizing the Graphics Pipeline with Compute
  url: https://advances.realtimerendering.com/
  year: 2016
  arxiv: null
  doi: null
see:
- "113-mesh-shaders-in-the-vulkan-ecosystem"
- "016-gpu-driven-rendering-pipelines"
- "106-nanite-a-deep-dive"
- "710-optimizing-the-graphics-pipeline-with-compute-gpu-drive"
---

# meshoptimizer

## One-sentence takeaway

Industrial meshlet builder/optimizer used to feed Vulkan/DX mesh shaders and Nanite-adjacent cluster pipelines.

## Why it matters here

Default craft path from authored meshes to meshlet buffers for Anoptic GPU-driven rendering.

## Key ideas

- meshopt_buildMeshlets balances reuse vs cluster cone/radius.
- Cluster culling bounds for task/mesh shader rejection.
- Index/vertex cache optimization companions.
- Living library — not a one-off paper.

## Caveats

- Library, not a rendering architecture paper.
- Cluster LOD DAG remains engine-specific.

## Links

- URL: https://github.com/zeux/meshoptimizer
