---
title: "Combining Analytic Direct Illumination and Stochastic Shadows"
authors: ["Eric Heitz", "Stephen Hill", "Morgan McGuire"]
year: 2018
venue: "I3D / JCGT"
arxiv: null
doi: "10.1145/3190834.3190852"
source: "https://jcgt.org/published/0007/02/01/"
topics: [LTC, stochastic-shadows, ratio-estimator, RTXDI-adjacent]
seed_rank: 1501
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 10
lineage: area-lights
cites:
  - title: "Real-Time Polygonal-Light Shading with Linearly Transformed Cosines"
    url: "https://eheitzresearch.wordpress.com/415-2/"
    year: 2016
    arxiv: null
    doi: "10.1145/2897824.2925895"
  - title: "Spatiotemporal Reservoir Resampling for Real-Time Ray Tracing with Dynamic Direct Lighting"
    url: "https://benedikt-bitterli.me/restir/"
    year: 2020
    arxiv: null
    doi: "10.1145/3386569.3392481"
  - title: "Percentage-Closer Soft Shadows"
    url: "https://developer.download.nvidia.com/shaderlibrary/docs/shadow_PCSS.pdf"
    year: 2005
    arxiv: null
    doi: null
see:
  - "1374-spatiotemporal-reservoir-resampling-for-real-time-ray-tracing-wi"
---

# Combining Analytic Direct Illumination and Stochastic Shadows

## One-sentence takeaway

Shade with the unshadowed analytic LTC integral and multiply by an illumination-weighted stochastic visibility estimate — the production recipe for area lights plus ray-traced (or sampled) shadows.

## Why it matters here

Once Anoptic has LTC shading and any visibility ray budget, this is what games actually ship: do not Monte-Carlo the BRDF×vis product from scratch. Ratio estimator keeps the analytic highlight intact while PCSS-class or ReSTIR (1374) vis rides along. Distinct from RTXDI (this batch) which productizes many-light *sampling*; this paper is the analytic×stochastic split for a handful of area lights.

## Key ideas

- **Ratio estimator.** Unshadowed LTC (or other analytic) shading × (shadowed analytic-like samples) / (unshadowed samples). Illumination-weighted vis, not a binary shadow multiply after the fact.
- **One ray can be enough.** With the analytic term carrying the BRDF, a small vis sample count (even one) denoises as a ratio rather than as a product of two noisy integrals.
- **Drop-in over PCSS.** Contact-hardening raster shadows stay valid as the vis estimator; ray queries replace the blocker search when HW RT is present.
- **Evidence.** I3D 2018 / JCGT 7(2), doi `10.1145/3190834.3190852`. Archival: https://jcgt.org/published/0007/02/01/ .

## Caveats

- Does not replace ReSTIR/RTXDI for *millions* of lights — those sample which light, this shades a known area light. Ratio bias/variance still wants a denoiser at one spp. Not a remint of 1374.

## Links

- JCGT: https://jcgt.org/published/0007/02/01/
- DOI: https://doi.org/10.1145/3190834.3190852
