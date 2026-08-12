---
title: "Dynamic Diffuse Global Illumination Resampling"
authors:
  - "Zander Majercik"
  - "Thomas Müller"
  - "Alexander Keller"
  - "Derek Nowrouzezahrai"
  - "Morgan McGuire"
year: 2021
venue: "arXiv:cs.GR"
arxiv: "2108.05263"
doi: null
source: "https://arxiv.org/abs/2108.05263"
topics:
  - gi
seed_rank: 316
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
---

# Dynamic Diffuse Global Illumination Resampling

## One-sentence takeaway

Interactive global illumination remains a challenge in radiometrically- and geometrically-complex scenes.

## Why it matters here

Real-time graphics technique relevant to Anoptic Vulkan/meshlet/GI path (Dynamic Diffuse Global Illumination Resampling).

## Key ideas

- Interactive global illumination remains a challenge in radiometrically- and geometrically-complex scenes.
- Specialized sampling strategies are effective for specular and near-specular transport because the scattering has relatively low directional variance per scattering event.
- In contrast, the high variance from transport paths comprising multiple rough glossy or diffuse scattering events remains notoriously difficult to resolve with a small number of samples.
- We extend unidirectional path tracing to address this by combining screen-space reservoir resampling and sparse world-space probes, significantly improving sample efficiency for transport contributions that terminate on diffuse scattering events.
- Our experiments demonstrate a clear improvement -- at equal time and equal quality -- over purely path traced and purely probe-based baselines.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2108.05263](https://arxiv.org/abs/2108.05263)
- URL: https://arxiv.org/abs/2108.05263
