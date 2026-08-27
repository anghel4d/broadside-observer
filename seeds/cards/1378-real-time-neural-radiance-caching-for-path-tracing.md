---
title: "Real-time Neural Radiance Caching for Path Tracing"
authors:
  - "Thomas Müller"
  - "Fabrice Rousselle"
  - "Jan Novák"
  - "Alexander Keller"
year: 2021
venue: "SIGGRAPH / TOG"
arxiv: "2106.12372"
doi: "10.1145/3450626.3459812"
source: "https://arxiv.org/abs/2106.12372"
topics:
  - "neural-GI"
  - "NRC"
  - "path-tracing"
seed_rank: 1378
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: realtime-gi
cites:
  - title: "On-line Learning of Parametric Mixture Models for Light Transport Simulation"
    url: "https://cgg.mff.cuni.cz/~jaroslav/papers/2014-onlinelearn/"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601203"
  - title: "Practical Path Guiding for Efficient Light-Transport Simulation"
    url: "https://tom94.net/data/publications/mueller17practical/mueller17practical.pdf"
    year: 2017
    arxiv: null
    doi: "10.1111/cgf.13227"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
    arxiv: null
    doi: null
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
---

# Real-time Neural Radiance Caching for Path Tracing

## One-sentence takeaway

An online-trained tiny MLP caches indirect radiance during path tracing, so later bounces are a network lookup instead of more rays.

## Why it's lovely

Why you might love this: The neural GI that almost shipped. A 64-neuron MLP, trained while you fly the camera, not a 4-hour bake.

## Problem

Path-traced GI at real-time spp cannot afford deep bounces. Probe caches leak and ignore glossy transport. Offline neural caches (NeRF-class) are too heavy and too static for a game camera.

## Design

- Fully-fused tiny MLP (Instant-NGP lineage) queried with position + direction + roughness-like features.
- Online training from the path tracer's own samples every frame; no precompute.
- After a few bounces, terminate into the cache. Direct lighting stays classical.
- Adapted for dynamic scenes: the cache forgets and refits as lighting moves.

## Evidence

SIGGRAPH 2021 / TOG; arXiv 2106.12372. NVIDIA RT demos used it; the fused-MLP trick later ate the field (Instant-NGP). Images: 1-spp with NRC vs many-spp reference, interactive.

## Limitations

Glossy caustics and thin features still leak. Training cost is a real frame-time line item. Not a replacement for ReSTIR's first-bounce reuse.

## Implications for Broadside

Broadside's neural GI experiments should start from this MLP, not a NeRF. Pair with path guiding (Vorba/Müller) as the offline cousin and with RC (005) as the non-neural cache.

## Bottom line

Mint NRC. Tiny MLP, trained live, game-adjacent.

## Links

- arXiv: [2106.12372](https://arxiv.org/abs/2106.12372)
- DOI: [10.1145/3450626.3459812](https://doi.org/10.1145/3450626.3459812)
- URL: https://research.nvidia.com/publication/2021-06_real-time-neural-radiance-caching-path-tracing
