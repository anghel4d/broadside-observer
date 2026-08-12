---
title: "Active Exploration for Neural Global Illumination of Variable Scenes"
authors:
  - "Stavros Diolatzis"
  - "Julien Philip"
  - "George Drettakis"
year: 2022
venue: "arXiv:cs.GR"
arxiv: "2203.08272"
doi: null
source: "https://arxiv.org/abs/2203.08272"
topics:
  - gi
seed_rank: 303
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
---

# Active Exploration for Neural Global Illumination of Variable Scenes

## One-sentence takeaway

Neural rendering algorithms introduce a fundamentally new approach for photorealistic rendering, typically by learning a neural representation of illumination on large numbers of ground truth images.

## Why it matters here

Real-time graphics technique relevant to Anoptic Vulkan/meshlet/GI path (Active Exploration for Neural Global Illumination of Variable Scenes).

## Key ideas

- Neural rendering algorithms introduce a fundamentally new approach for photorealistic rendering, typically by learning a neural representation of illumination on large numbers of ground truth images.
- When training for a given variable scene, i.e., changing objects, materials, lights and viewpoint, the space D of possible training data instances quickly becomes unmanageable as the dimensions of variable parameters increase.
- We introduce a novel Active Exploration method using Markov Chain Monte Carlo, which explores D, generating samples (i.e., ground truth renderings) that best help training and interleaves training and on-the-fly sample data generation.
- We introduce a self-tuning sample reuse strategy to minimize the expensive step of rendering training samples.
- We apply our approach on a neural generator that learns to render novel scene instances given an explicit parameterization of the scene configuration.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2203.08272](https://arxiv.org/abs/2203.08272)
- URL: https://arxiv.org/abs/2203.08272
