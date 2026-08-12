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
seed_rank: 316
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
  - title: "GI-1.0: A Fast and Scalable Two-level Radiance Caching Scheme for Real-time Global Illumination"
    url: "https://arxiv.org/abs/2310.19855"
    year: 2023
    arxiv: "2310.19855"
    card: "294-gi-1-0-a-fast-and-scalable-two-level-radiance-caching-scheme"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    card: "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Dynamic Diffuse Global Illumination Resampling

## One-sentence takeaway

Combine screen-space reservoir resampling with sparse world-space probes to raise sample efficiency for multi-bounce diffuse paths.

## Why it matters here

Probe+resampling hybrid foil beside RC: illustrates the noise/detail trade DDGI-family methods accept and RC tries to dodge.

## Key ideas

- Reservoir resampling in screen space feeds world-space probes for difficult diffuse multi-bounce transport.
- Equal-time/quality gains over pure path tracing or pure probes on tested scenes.

## Caveats

- Still stochastic; needs temporal stability strategies unlike noiseless RC merges.

## Links

- arXiv: [2108.05263](https://arxiv.org/abs/2108.05263)
- URL: https://arxiv.org/abs/2108.05263
