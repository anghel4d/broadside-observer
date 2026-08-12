---
title: "Scaling Probe-Based Real-Time Dynamic Global Illumination for Production"
authors:
  - "Zander Majercik"
  - "Adam Marrs"
  - "Josef Spjut"
  - "Morgan McGuire"
year: 2020
venue: "arXiv:cs.GR"
arxiv: "2009.10796"
doi: null
source: "https://arxiv.org/abs/2009.10796"
topics:
  - gi
seed_rank: 330
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
---

# Scaling Probe-Based Real-Time Dynamic Global Illumination for Production

## One-sentence takeaway

We contribute several practical extensions to the probe based irradiance-field-with-visibility representation to improve image quality, constant and asymptotic performance, memory efficiency, and artist control.

## Why it matters here

Real-time graphics technique relevant to Anoptic Vulkan/meshlet/GI path (Scaling Probe-Based Real-Time Dynamic Global Illumination for Production).

## Key ideas

- We contribute several practical extensions to the probe based irradiance-field-with-visibility representation to improve image quality, constant and asymptotic performance, memory efficiency, and artist control.
- We developed these extensions in the process of incorporating the previous work into the global illumination solutions of the NVIDIA RTXGI SDK, the Unity and Unreal Engine 4 game engines, and proprietary engines for several commercial games.
- These extensions include: a single, intuitive tuning parameter (the "self-shadow" bias); heuristics to speed transitions in the global illumination; reuse of irradiance data as prefiltered radiance for recursive glossy reflection; a probe state machine to prune work that will not affect the final image; and multiresolution cascaded volumes for large worlds.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2009.10796](https://arxiv.org/abs/2009.10796)
- URL: https://arxiv.org/abs/2009.10796
