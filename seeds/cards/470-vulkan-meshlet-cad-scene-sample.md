---
title: "Vulkan Meshlet CAD Scene Sample"
authors:
  - "Christoph Kubisch"
year: 2018
venue: "NVIDIA nvpro-samples"
arxiv: null
doi: null
source: "https://github.com/nvpro-samples/gl_vk_meshlet_cadscene"
topics:
  - meshlets
  - vulkan
seed_rank: 470
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
lineage: gpu-driven-rendering
cites:
  - title: "Introduction to Turing Mesh Shaders"
    url: "https://developer.nvidia.com/blog/introduction-turing-mesh-shaders/"
    year: 2018
see:
  - "097-mesh-shaders-in-the-vulkan-ecosystem"
  - "261-introduction-to-turing-mesh-shaders"
---

# Vulkan Meshlet CAD Scene Sample

## One-sentence takeaway

NVIDIA's `gl_vk_meshlet_cadscene` sample feeds CAD meshes as meshlets through Vulkan task/mesh shaders, using the task stage to cull clusters before the mesh shader emits triangles.

## Why it matters here

Concrete buffer layout and amplification loop to pair with meshoptimizer builders when Anoptic stands up a mesh-shader path.

## Key ideas

- Meshlets pack a small vertex/index subset plus bounding cone/sphere so a task shader can reject whole clusters.
- Same content path is demonstrated for both OpenGL NV mesh shaders and Vulkan `VK_NV_mesh_shader` / EXT mesh shaders.
- CAD scenes (high instance counts, hard edges) stress cluster culling more honestly than game hero meshes.
- Intended as the public companion to Kubisch's Turing mesh-shader introductions, not as a Nanite-class LOD DAG.

## Caveats

## Links

- Repository: https://github.com/nvpro-samples/gl_vk_meshlet_cadscene
