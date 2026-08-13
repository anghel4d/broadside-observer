---
title: "Aokana: A GPU-Driven Voxel Rendering Framework for Open World Games"
authors:
  - "Yingrong Fang"
  - "Qitong Wang"
  - "Wei Wang"
year: 2025
venue: "PACMCGIT / I3D"
arxiv: "2505.02017"
doi: "10.1145/3728299"
source: "https://arxiv.org/abs/2505.02017"
topics:
  - mesh-shaders-gpu-driven
  - vulkan-realtime-rendering
seed_rank: 1
seed_batch: "craft-2026-08-13"
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
    card: "016-gpu-driven-rendering-pipelines"
  - title: "Nanite: A Deep Dive"
    url: "https://advances.realtimerendering.com/"
    year: 2021
    arxiv: null
    doi: null
    card: "106-nanite-a-deep-dive"
  - title: "Gigavoxels: Ray-Guided Streaming for Efficient and Detailed Voxel Rendering"
    url: "https://doi.org/10.1145/1576246.1531330"
    year: 2009
    arxiv: null
    doi: "10.1145/1576246.1531330"
    card: "432-gigavoxels-ray-guided-streaming-for-efficient-and-detailed-v"
  - title: "Introduction to Turing Mesh Shaders"
    url: "https://developer.nvidia.com/blog/introduction-turing-mesh-shaders/"
    year: 2018
    arxiv: null
    doi: null
    card: "335-introduction-to-turing-mesh-shaders"
---

# Aokana: A GPU-Driven Voxel Rendering Framework for Open World Games

## One-sentence takeaway

GPU-driven SVDAG voxels with LOD and streaming: tens of billions of voxels, up to 9× less memory and 4.8× faster than prior voxel engines, drop-in beside mesh passes.

## Why it matters here

Anoptic already bets on Vulkan meshlets and GPU-driven visibility; Aokana is the voxel twin of that bet — sparse DAG + GPU culling/streaming instead of a CPU voxel mesher. GRID COMMAND / falling-sand / destructible terrain wants this grain: keep voxels as voxels, stream them like Nanite clusters, composite with the mesh pipeline rather than converting everything to triangles first.

## Key ideas

- Sparse Voxel Directed Acyclic Graph (SVDAG) as the open-world representation: pointer-sharing collapses identical subtrees so 32K³-class maps stay in memory.
- LOD + streaming designed for a moving player, not an offline bake: load/unload as the camera walks the map.
- GPU-driven pipeline with multiple *shallow* SVDAGs to cut indirect jumps (the voxel analogue of meshlet/task-shader culling).
- Engine-shaped: meant to sit next to an existing mesh renderer, not replace it.
- Reported: ~⅓–⅒ the memory of previous voxel methods at high resolution, 2–4.8× faster draw.

## Caveats

- Stylized/indie voxel games are the stated target; photoreal Nanite-class triangle content is out of scope.
- I3D 2025 / PACMCGIT; check the published PDF for the exact culling/streaming numbers before copying constants.
- SVDAG encoding and update cost under *destructive* edits (falling-sand, bombardment) is the hard part this paper does not fully solve.

## Links

- arXiv: [2505.02017](https://arxiv.org/abs/2505.02017)
- PDF: https://arxiv.org/pdf/2505.02017
- DOI: [10.1145/3728299](https://doi.org/10.1145/3728299)
