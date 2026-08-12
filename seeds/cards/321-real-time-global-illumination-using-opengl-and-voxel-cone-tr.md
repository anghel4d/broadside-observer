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
seed_rank: 321
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
---

# Real-Time Global Illumination Using OpenGL And Voxel Cone Tracing

## One-sentence takeaway

Building systems capable of replicating global illumination models with interactive frame-rates has long been one of the toughest conundrums facing computer graphics researchers.

## Why it matters here

Real-time graphics technique relevant to Anoptic Vulkan/meshlet/GI path (Real-Time Global Illumination Using OpenGL And Voxel Cone Tracing).

## Key ideas

- Building systems capable of replicating global illumination models with interactive frame-rates has long been one of the toughest conundrums facing computer graphics researchers.
- Voxel Cone Tracing, as proposed by Cyril Crassin et al.
- in 2011, makes use of mipmapped 3D textures containing a voxelized representation of an environments direct light component to trace diffuse, specular and occlusion cones in linear time to extrapolate a surface fragments indirect light emitted towards a given photo-receptor.
- Seemingly providing a well-disposed balance between performance and physical fidelity, this thesis examines the algorithms theoretical side on the basis of the rendering equation as well as its practical side in the context of a self-implemented, OpenGL-based variant.
- Whether if it can compete with long standing alternatives such as radiosity and raytracing will be determined in the subsequent evaluation.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2104.00618](https://arxiv.org/abs/2104.00618)
- URL: https://arxiv.org/abs/2104.00618
