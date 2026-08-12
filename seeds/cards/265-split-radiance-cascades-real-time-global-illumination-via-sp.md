---
title: "Split Radiance Cascades: Real-Time Global Illumination via Sparse Radiance Probes"
authors:
  - "Rouli Freeman"
  - "Alexander Sannikov"
year: 2026
venue: "arXiv:cs.GR"
arxiv: "2607.20384"
doi: null
source: "https://arxiv.org/abs/2607.20384"
topics:
  - gi
seed_rank: 265
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
---

# Split Radiance Cascades: Real-Time Global Illumination via Sparse Radiance Probes

## One-sentence takeaway

Radiance probe methods are a popular and well-tested approach for approximating diffuse global illumination for real-time graphics, but they commonly suffer from a lack of detail due to the large spacing between probes.

## Why it matters here

Real-time graphics technique relevant to Anoptic Vulkan/meshlet/GI path (Split Radiance Cascades: Real-Time Global Illumination via Sparse Radiance Probe).

## Key ideas

- Radiance probe methods are a popular and well-tested approach for approximating diffuse global illumination for real-time graphics, but they commonly suffer from a lack of detail due to the large spacing between probes.
- Radiance Cascade (RC) fixes this by increasing spatial resolution and reducing angular resolution for light and occlusion from closer objects, which allows it to provide details at all scales without noise or aliasing.
- However, leading implementations of RC either run in 2D or screenspace, due to the prohibitive costs of storing high-detail volumetric radiance information.
- In this work, we adapt Radiance Cascades for accurate real-time 3D diffuse global illumination using a sparse hashmap to store world-space probes.
- We introduce ray splitting, a method for calculating radiance intervals used in RC by tracing rays from visible surfaces and calculating their contribution to cascades based on their hit distance.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2607.20384](https://arxiv.org/abs/2607.20384)
- URL: https://arxiv.org/abs/2607.20384
