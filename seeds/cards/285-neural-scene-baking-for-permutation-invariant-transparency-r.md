---
title: "Neural Scene Baking for Permutation Invariant Transparency Rendering with Real-time Global Illumination"
authors:
  - "Ziyang Zhang"
  - "Edgar Simo-Serra"
year: 2024
venue: "arXiv:cs.GR"
arxiv: "2405.19056"
doi: null
source: "https://arxiv.org/abs/2405.19056"
topics:
  - gi
seed_rank: 285
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
cites:
  - title: "Voxel Cone Tracing for Real-Time Global Illumination"
    url: "https://doi.org/10.1145/1944745.1944787"
    year: 2011
    arxiv: null
    doi: "10.1145/1944745.1944787"
    card: "137-voxel-cone-tracing-for-real-time-global-illumination"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    arxiv: null
    doi: null
    card: "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
    card: "169-the-rendering-equation"
---

# Neural Scene Baking for Permutation Invariant Transparency Rendering with Real-time Global Illumination

## One-sentence takeaway

Neural rendering provides a fundamentally new way to render photorealistic images.

## Why it matters here

Real-time graphics technique relevant to Anoptic Vulkan/meshlet/GI path (Neural Scene Baking for Permutation Invariant Transparency Rendering with Real-t).

## Key ideas

- Neural rendering provides a fundamentally new way to render photorealistic images.
- Similar to traditional light-baking methods, neural rendering utilizes neural networks to bake representations of scenes, materials, and lights into latent vectors learned from path-tracing ground truths.
- However, existing neural rendering algorithms typically use G-buffers to provide position, normal, and texture information of scenes, which are prone to occlusion by transparent surfaces, leading to distortions and loss of detail in the rendered images.
- To address this limitation, we propose a novel neural rendering pipeline that accurately renders the scene behind transparent surfaces with global illumination and variable scenes.
- Our method separates the G-buffers of opaque and transparent objects, retaining G-buffer information behind transparent objects.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2405.19056](https://arxiv.org/abs/2405.19056)
- URL: https://arxiv.org/abs/2405.19056
