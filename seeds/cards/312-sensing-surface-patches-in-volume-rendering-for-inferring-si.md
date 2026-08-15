---
title: "Sensing Surface Patches in Volume Rendering for Inferring Signed Distance Functions"
authors:
  - "Sijia Jiang"
  - "Tong Wu"
  - "Jing Hua"
  - "Zhizhong Han"
year: 2024
venue: "arXiv:cs.CV"
arxiv: "2412.16467"
doi: null
source: "https://arxiv.org/abs/2412.16467"
topics:
  - engine
seed_rank: 312
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites: []
see: []
---

# Sensing Surface Patches in Volume Rendering for Inferring Signed Distance Functions

## One-sentence takeaway

The method pulls nearby samples onto a small patch at each ray–SDF intersection so volume rendering can apply explicit surface constraints (photo-consistency, depth, normals) instead of only a silhouette rendering loss.

## Why it matters here

Anoptic reconstruction and any GRID COMMAND mesh-from-views path that fits an SDF through NeRF-style volume rendering needs a way to talk about the actual surface, not just accumulated density along the ray.

## Key ideas

- Neural SDFs trained only by volume-rendering RGB error struggle to add geometric detail because the renderer never isolates a surface.
- At the estimated zero-crossing, gradients and signed distances pull randomly sampled nearby points onto a local patch.
- That patch is the place to attach multi-view photo-consistency and optional depth/normal priors while the same ray is still being volume-rendered.
- Evaluated on scene benchmarks against recent NeuS-style baselines; they report sharper geometry without changing the overall volume-rendering pipeline.
- Appeared at AAAI 2025 (arXiv:2412.16467).

## Caveats

## Links

- arXiv: [2412.16467](https://arxiv.org/abs/2412.16467)
- URL: https://arxiv.org/abs/2412.16467
