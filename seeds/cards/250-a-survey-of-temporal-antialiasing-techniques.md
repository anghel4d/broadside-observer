---
title: "A Survey of Temporal Antialiasing Techniques"
authors:
  - "Lei Yang"
  - "Shiqiu Liu"
  - "Marco Salvi"
year: 2020
venue: "Computer Graphics Forum (EG 2020 STAR)"
arxiv: null
doi: "10.1111/cgf.14018"
source: "https://doi.org/10.1111/cgf.14018"
topics:
  - taa
  - temporal
seed_rank: 250
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
cites:
  - title: "Amortized Supersampling"
    url: "https://doi.org/10.1145/1661412.1618480"
    year: 2009
    arxiv: null
    doi: "10.1145/1661412.1618480"
  - title: "High-Quality Temporal Supersampling"
    url: "https://advances.realtimerendering.com/s2014/index.html"
    year: 2014
    arxiv: null
    doi: null
see:
  - "350-amortized-supersampling"
---

# A Survey of Temporal Antialiasing Techniques

## One-sentence takeaway

Yang, Liu, and Salvi define TAA as temporally amortized supersampling and split every implementation into sample accumulation plus history validation, then extend the same split to temporal upsampling.

## Why it matters here

Anoptic's temporal path (TAA, DLSS-class upsampling, stochastic GI denoise) is the same two-block pipeline; this STAR is the map of jitter, reprojection, neighborhood clamp, and the ghosting/blur/flicker tradeoffs.

## Key ideas

- TAA won because MSAA fights deferred shading, and spatial post-AA flickers; amortizing subpixel samples across frames is cheap and temporally stabler.
- Accumulation: per-frame subpixel jitter (Halton/Sobol), reverse-reprojection via motion vectors, then exponential or count-weighted blend into a history color.
- Validation: reject or rectify stale history using geometry (depth/normal/ID/velocity) or color-neighborhood clamp/clip (Lottes/Karis), or the output ghosts.
- The same machinery with <1 sample per pixel is temporal upsampling, now the default path to 4K in engines.
- Open problems catalogued: ghosting, overblur, flicker, disocclusion holes, foliage/transparency/specular, and the sharpness-versus-stability knob. No arXiv; canonical PDF is the author-hosted EG 2020 STAR.

## Caveats

## Links

- DOI: [10.1111/cgf.14018](https://doi.org/10.1111/cgf.14018)
- Author PDF: https://leiy.cc/publications/TAA/TemporalAA.pdf
- EG talk slides: https://leiy.cc/publications/TAA/TAA_EG2020_Talk.pdf
