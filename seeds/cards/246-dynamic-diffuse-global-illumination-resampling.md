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
seed_rank: 246
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
  - title: "GI-1.0: A Fast and Scalable Two-level Radiance Caching Scheme for Real-time Global Illumination"
    url: "https://arxiv.org/abs/2310.19855"
    year: 2023
    arxiv: "2310.19855"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
see:
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "231-gi-1-0-a-fast-and-scalable-two-level-radiance-caching-scheme"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Dynamic Diffuse Global Illumination Resampling

## One-sentence takeaway

Screen-space reservoir resampling plus sparse world-space probes raises sample efficiency for multi-bounce paths that terminate on diffuse events, beating pure path tracing and pure probes at equal time and equal quality.

## Why it matters here

This is the DDGI-family foil beside Radiance Cascades: it shows the noise/detail bargain probe+ReSTIR methods accept and that RC tries to dodge with interval merging.

## Key ideas

- Specular transport has low directional variance per bounce; multi-bounce rough/diffuse paths do not, so a few unidirectional samples stay noisy.
- Reservoirs in screen space feed world-space probes specifically for those diffuse-terminating contributions.
- Equal-time and equal-quality experiments beat both a pure path tracer and a pure probe baseline.
- Combined with commodity denoisers, the hybrid reaches interactive GI in complex scenes.
- Still stochastic: temporal stability depends on the denoiser and reservoir reuse, unlike noiseless RC merges.

## Caveats

## Links

- arXiv: [2108.05263](https://arxiv.org/abs/2108.05263)
- PDF: https://arxiv.org/pdf/2108.05263
