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
cites:
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
  - title: "Michael & Scott Lock-Free Queue"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "FrameGraph: Extensible Rendering Architecture in Frostbite"
    url: "https://www.gdcvault.com/play/1024612/FrameGraph-Extensible-Rendering-Architecture-in"
    year: 2017
    arxiv: null
    doi: null
see:
  - "011-mimalloc-free-list-sharding-in-action"
  - "031-michael-scott-lock-free-queue"
  - "100-framegraph-extensible-rendering-architecture-in-frostbite"
---

# Sensing Surface Patches in Volume Rendering for Inferring Signed Distance Functions

## One-sentence takeaway

It is vital to recover 3D geometry from multi-view RGB images in many 3D computer vision tasks.

## Why it matters here

Engine architecture / simulation structure useful for Anoptic ECS craft (Sensing Surface Patches in Volume Rendering for Inferring Signed Distance Functi).

## Key ideas

- It is vital to recover 3D geometry from multi-view RGB images in many 3D computer vision tasks.
- The latest methods infer the geometry represented as a signed distance field by minimizing the rendering error on the field through volume rendering.
- However, it is still challenging to explicitly impose constraints on surfaces for inferring more geometry details due to the limited ability of sensing surfaces in volume rendering.
- To resolve this problem, we introduce a method to infer signed distance functions (SDFs) with a better sense of surfaces through volume rendering.
- Using the gradients and signed distances, we establish a small surface patch centered at the estimated intersection along a ray by pulling points randomly sampled nearby.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2412.16467](https://arxiv.org/abs/2412.16467)
- URL: https://arxiv.org/abs/2412.16467
