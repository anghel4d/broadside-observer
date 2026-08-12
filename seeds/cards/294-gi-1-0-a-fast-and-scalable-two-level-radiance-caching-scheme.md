---
title: "GI-1.0: A Fast and Scalable Two-level Radiance Caching Scheme for Real-time Global Illumination"
authors:
  - "Guillaume Boissé"
  - "Sylvain Meunier"
  - "Heloise de Dinechin"
  - "Pieterjan Bartels"
  - "Alexander Veselov"
  - "Kenta Eto"
  - "Takahiro Harada"
year: 2023
venue: "arXiv:cs.GR"
arxiv: "2310.19855"
doi: null
source: "https://arxiv.org/abs/2310.19855"
topics:
  - gi
seed_rank: 294
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
    card: "397-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - title: "Dynamic Diffuse Global Illumination Resampling"
    url: "https://arxiv.org/abs/2108.05263"
    year: 2021
    arxiv: "2108.05263"
    card: "316-dynamic-diffuse-global-illumination-resampling"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    card: "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# GI-1.0: A Fast and Scalable Two-level Radiance Caching Scheme for Real-time Global Illumination

## One-sentence takeaway

Two-level radiance cache that aims between noisy reservoir GI and blurry probes for console-class real-time budgets.

## Why it matters here

2023 industrial radiance-caching foil next to Radiance Cascades — another answer to “probes lack detail / path tracing is too noisy.”

## Key ideas

- Hardware ray queries plus a hierarchical radiance cache to keep rays-per-pixel tiny at high resolutions.
- Targets content-preprocess-free integration into existing real-time pipelines.
- Explicitly positioned against probe blur and reservoir noise.

## Caveats

- AMD/research cache design — compare carefully to RC’s cascade-interval storage; not an RC variant.

## Links

- arXiv: [2310.19855](https://arxiv.org/abs/2310.19855)
- URL: https://arxiv.org/abs/2310.19855
