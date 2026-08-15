---
title: "Real-Time Global Illumination Using OpenGL And Voxel Cone Tracing"
authors:
  - "Benjamin Kahl"
year: 2021
venue: "arXiv:cs.GR"
arxiv: "2104.00618"
doi: null
source: "https://arxiv.org/abs/2104.00618"
topics:
  - gi
seed_rank: 248
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
cites:
  - title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
    url: "https://doi.org/10.1111/j.1467-8659.2011.02063.x"
    year: 2011
    arxiv: null
    doi: "10.1111/j.1467-8659.2011.02063.x"
  - title: "Octree-Based Sparse Voxelization Using the GPU Hardware Rasterizer"
    url: "https://doi.org/10.1201/b12288-26"
    year: 2012
    arxiv: null
    doi: "10.1201/b12288-26"
see:
  - "272-interactive-indirect-illumination-using-voxel-cone-tracing"
  - "120-voxel-cone-tracing-for-real-time-global-illumination"
---

# Real-Time Global Illumination Using OpenGL And Voxel Cone Tracing

## One-sentence takeaway

A thesis-length OpenGL reimplementation of Crassin 2011 voxel cone tracing traces diffuse, specular, and occlusion cones through a mipmapped voxelized direct-light 3D texture in linear time, then judges the result against radiosity and ray tracing.

## Why it matters here

Anoptic's GI menu still includes VCT as the pre-RC, pre-DDGI baseline; this is a complete, inspectable OpenGL variant rather than the original NVIDIA demo.

## Key ideas

- Scene direct lighting is voxelized into a mipmapped 3D texture; cones then integrate that volume instead of tracing geometric rays.
- Diffuse, specular, and occlusion each get their own cone family, all O(steps along the cone).
- The thesis derives the method from the rendering equation, not only from the 2011 implementation paper.
- Evaluation asks whether the quality/cost point competes with classical radiosity and ray tracing, not only with other real-time hacks.
- Practical artifact is a self-contained OpenGL implementation, useful as a reference port.

## Caveats

## Links

- arXiv: [2104.00618](https://arxiv.org/abs/2104.00618)
- PDF: https://arxiv.org/pdf/2104.00618
