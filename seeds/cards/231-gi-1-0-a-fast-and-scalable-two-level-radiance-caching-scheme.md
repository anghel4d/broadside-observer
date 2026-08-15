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
seed_rank: 231
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
  - title: "Dynamic Diffuse Global Illumination Resampling"
    url: "https://arxiv.org/abs/2108.05263"
    year: 2021
    arxiv: "2108.05263"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
see:
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "246-dynamic-diffuse-global-illumination-resampling"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# GI-1.0: A Fast and Scalable Two-level Radiance Caching Scheme for Real-time Global Illumination

## One-sentence takeaway

GI-1.0 is a preprocess-free two-level radiance cache that sits between blurry irradiance probes and noisy reservoir GI for console-class ray budgets.

## Why it matters here

Anoptic's GI fork is choosing among probes, reservoirs, and Radiance Cascades; this AMD/research cache is the industrial foil that keeps rays-per-pixel tiny without a content bake.

## Key ideas

- Hardware ray queries plus a hierarchical radiance cache so high resolutions still fire only a handful of rays per pixel.
- Probe-style methods are cheap but lack detail and react slowly to lighting changes; reservoir resampling is detailed but too noisy and too slow for current consoles.
- The two-level cache is the proposed middle path: more fidelity than probes, less noise and cost than ReSTIR-class methods.
- No content preprocessing, so it drops into an existing real-time pipeline.
- Explicitly not an RC variant — compare its cache hierarchy to cascade-interval storage rather than treating them as the same algorithm.

## Caveats

## Links

- arXiv: [2310.19855](https://arxiv.org/abs/2310.19855)
- PDF: https://arxiv.org/pdf/2310.19855
