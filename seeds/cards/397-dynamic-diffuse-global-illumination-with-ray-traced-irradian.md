---
title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
authors:
  - "Zander Majercik et al."
year: 2019
venue: "JCGT"
arxiv: null
doi: null
source: "https://jcgt.org/published/0008/02/01/"
topics:
  - gi
  - ddgi
seed_rank: 397
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: radiance-cascades
cites:
  - title: "Real-Time Global Illumination using Precomputed Light Field Probes"
    url: "https://research.nvidia.com/publication/real-time-global-illumination-using-precomputed-light-field-probes"
    year: 2017
  - title: "Scaling Probe-Based Real-Time Dynamic Global Illumination for Production"
    url: "https://arxiv.org/abs/2009.10796"
    year: 2020
    arxiv: "2009.10796"
  - title: "Dynamic Diffuse Global Illumination Resampling"
    url: "https://arxiv.org/abs/2108.05263"
    year: 2021
    arxiv: "2108.05263"
  - title: "The Irradiance Volume"
    url: "https://doi.org/10.1109/38.656788"
    year: 1998
    doi: "10.1109/38.656788"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
  - title: "GI-1.0: A Fast and Scalable Two-level Radiance Caching Scheme for Real-time Global Illumination"
    url: "https://arxiv.org/abs/2310.19855"
    year: 2023
    arxiv: "2310.19855"
see:
  - "406-real-time-global-illumination-using-precomputed-light-field-"
  - "330-scaling-probe-based-real-time-dynamic-global-illumination-fo"
  - "316-dynamic-diffuse-global-illumination-resampling"
  - "662-the-irradiance-volume"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "294-gi-1-0-a-fast-and-scalable-two-level-radiance-caching-scheme"
---

# Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields

## One-sentence takeaway

DDGI: world-space irradiance probes updated with hardware ray tracing for dynamic diffuse GI in production engines.

## Why it matters here

Primary industrial probe foil for Radiance Cascades — what shipped SDKs/engines actually run while RC variants chase noiseless cascades and sparse 3D probes.

## Key ideas

- Maintain a grid of irradiance probes with visibility octohedra, updated by tracing rays from probe positions.
- Supports dynamic lighting and geometry without full path-traced indirect at every pixel.
- Became NVIDIA RTXGI / engine-default language for probe GI.

## Caveats

- Probe spacing limits detail; light leaks need bias heuristics (see Scaling Probe-Based…).
- Diffuse-focused; glossy indirect needs other pathways.

## Links

- URL: https://jcgt.org/published/0008/02/01/
