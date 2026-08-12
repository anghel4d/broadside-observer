---
title: "Holographic Radiance Cascades for 2D Global Illumination"
authors:
  - "Rouli Freeman"
  - "Alexander Sannikov"
  - "Adrian Margel"
year: 2025
venue: "arXiv:cs.GR"
arxiv: "2505.02041"
doi: null
source: "https://arxiv.org/abs/2505.02041"
topics:
  - gi
seed_rank: 270
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
---

# Holographic Radiance Cascades for 2D Global Illumination

## One-sentence takeaway

Efficiently calculating global illumination has always been one of the greatest challenges in computer graphics.

## Why it matters here

Real-time graphics technique relevant to Anoptic Vulkan/meshlet/GI path (Holographic Radiance Cascades for 2D Global Illumination).

## Key ideas

- Efficiently calculating global illumination has always been one of the greatest challenges in computer graphics.
- Algorithms for approximating global illumination have always struggled to run in realtime for fully dynamic scenes, and have had to rely heavily on stochastic raytracing, spatialtemporal denoising, or undersampled representations, resulting in much lower quality of lighting compared to reference solutions.
- Even though the problem of calculating global illumination in 2D is significantly simpler than that of 3D, most contemporary approaches still struggle to accurately approximate 2D global illumination under realtime constraints.
- We present Holographic Radiance Cascades: a new single-shot scene-agnostic radiance transfer algorithm for global illumination, which is capable of achieving results visually indistinguishable from the 2D reference solution at realtime framerates.
- Our method uses a multi-level radiance probe system, and computes rays via combining short ray intervals as a replacement for conventional raytracing.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2505.02041](https://arxiv.org/abs/2505.02041)
- URL: https://arxiv.org/abs/2505.02041
