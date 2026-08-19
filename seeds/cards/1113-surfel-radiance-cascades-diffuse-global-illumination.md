---
title: "Surfel Radiance Cascades Diffuse Global Illumination"
authors:
  - "Max Coppen"
year: 2025
venue: "WIP"
arxiv: null
doi: null
source: "https://github.com/mxcop/src-dgi"
topics:
  - radiance-cascades
  - gi
  - surfels
seed_rank: 1113
seed_batch: "radiance-cascades-wip-2026-08-20"
reviewed: "2026-08-20"
pool: "graphics"
relevance_score: 8
lineage: radiance-cascades
cites:
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    arxiv: null
    doi: null
  - title: "Global Illumination Based on Surfels"
    url: "https://www.ea.com/seed/news/siggraph21-global-illumination-surfels"
    year: 2021
    arxiv: null
    doi: null
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "208-split-radiance-cascades-real-time-global-illumination-via-sp"
  - "1110-radiance-cascades-3d-uv-space-shadertoy"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
---

# Surfel Radiance Cascades Diffuse Global Illumination

## One-sentence takeaway

Max Coppen's SRC-DGI (open-sourced 2025-03) puts Radiance Cascades on spawned surfel probes instead of a dense 3D grid: surfels only exist on surfaces, cascades merge top-to-bottom, cascade 0 is integrated per pixel.

## Why it matters here

This is the community 3D RC that papers still have not written. Surfels dodge the O(n³) cascade-0 voxel wall the way Split RC dodges it with a hashmap — different sparsity prior (surface disks vs world-space probes). The companion article *Surfel Maintenance for Global Illumination* (2025-01-22) is the actual spawn/recycle/hash-grid writeup (GIBS-inspired multi-level hash, 16×16 tile coverage, stack allocator). Six surfel cascades, 262k at cascade 0, 1/4× count each level. For Anoptic this is a Vulkan-plausible surface cache, not a toy.

## Key ideas

- Two interleaved pipelines: **surfel maintenance** (spawn from GBuffer, recycle, optional transform attach) and **radiance gathering** (trace probe rays → merge cascades → composite cascade 0).
- Multi-level hash grid (XYZ9 + L5) with count / prefix-sum / insert; hash collisions are expected.
- Cascade hierarchy on the surfel set itself (not a voxel brick).
- Maintenance timings published on 890M iGPU and RTX 4070 Mobile; author does not call it production-ready.
- Written at Breda University of Applied Sciences (BUAS); MIT.

## Caveats

- Research-stage GitHub + blog, not a refereed paper. No published GI quality vs path tracing / DDGI / Split RC.
- Transform-attach (surfels following moving meshes) was skipped. Coverage gaps, temporal stability, and distribution remain open — radiance.wiki marks 3D RC as unsolved.
- README originally linked `/blog/surfel-maintenance/`; the live article is `/articles/surfel-maintenance/`.

## Links

- Repo: https://github.com/mxcop/src-dgi
- Surfel maintenance: https://m4xc.dev/articles/surfel-maintenance/
- Fundamentals of RC: https://m4xc.dev/articles/fundamental-rc/
- Wiki: https://radiance.wiki/variants/surfel-rc
- GIBS (SEED 2021): https://www.ea.com/seed/news/siggraph21-global-illumination-surfels
