---
title: Vulkan Meshlet CAD Scene Sample
authors:
- NVIDIA Developer
year: 2018
venue: nvpro-samples
arxiv: null
doi: null
source: https://github.com/nvpro-samples/gl_vk_meshlet_cadscene
topics:
- meshlets
- vulkan
seed_rank: 720
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: engines
relevance_score: 8
lineage: gpu-driven-rendering
cites:
- title: Mesh Shaders in the Vulkan Ecosystem
  url: https://developer.nvidia.com/blog/introduction-turing-mesh-shaders/
  year: 2018
  arxiv: null
  doi: null
  card: 113-mesh-shaders-in-the-vulkan-ecosystem
- title: meshoptimizer
  url: https://github.com/zeux/meshoptimizer
  year: 2016
  arxiv: null
  doi: null
  card: 733-meshoptimizer
- title: 'Nanite: A Deep Dive'
  url: https://www.youtube.com/watch?v=e_5kdRpGrpI
  year: 2021
  arxiv: null
  doi: null
  card: 106-nanite-a-deep-dive
---

# Vulkan Meshlet CAD Scene Sample

## One-sentence takeaway

Public meshlet CAD sample crystallizes task/mesh shader cluster submission for Vulkan.

## Why it matters here

Concrete sample alongside Kubisch mesh-shader talks and meshoptimizer.

## Key ideas

- Meshlet CAD scene as reference layout.
- Task shaders for cluster culling amplification.
- Pairs with meshoptimizer builders.
- Bridge from Turing mesh shaders to engine integration.

## Caveats

- Sample code, not a peer-reviewed architecture paper.
- Nanite-class LOD DAG is a separate leap.

## Links

- URL: https://github.com/nvpro-samples/gl_vk_meshlet_cadscene
