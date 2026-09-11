---
title: "Adaptive Dynamic Global Illumination"
authors: ["Sayantan Datta", "Negar Goli", "Jerry Zhang"]
year: 2023
venue: "arXiv (cs.GR)"
arxiv: "2301.05125"
doi: null
source: "https://arxiv.org/abs/2301.05125"
topics: [gi, ddgi]
seed_rank: 1784
seed_batch: "craft-2026-09-11"
reviewed: "2026-09-11"
pool: "realtime"
relevance_score: 10
lineage: radiance-cascades
cites:
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
    arxiv: null
    doi: null
  - title: "Scaling Probe-Based Real-Time Dynamic Global Illumination for Production"
    url: "https://arxiv.org/abs/2009.10796"
    year: 2020
    arxiv: "2009.10796"
    doi: null
  - title: "Split Radiance Cascades: Real-Time Global Illumination via Sparse Radiance Probes"
    url: "https://arxiv.org/abs/2607.20384"
    year: 2026
    arxiv: "2607.20384"
    doi: null
  - title: "Dynamic Diffuse Global Illumination Resampling"
    url: "https://arxiv.org/abs/2108.05263"
    year: 2021
    arxiv: "2108.05263"
    doi: null
  - title: "Lightcuts: A Scalable Approach to Illumination"
    url: "https://doi.org/10.1145/1073204.1073318"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073318"
see:
  - "208-split-radiance-cascades-real-time-global-illumination-via-sp"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "256-scaling-probe-based-real-time-dynamic-global-illumination-fo"
  - "246-dynamic-diffuse-global-illumination-resampling"
  - "257-signed-distance-fields-dynamic-diffuse-global-illumination"
  - "1042-lightcuts-a-scalable-approach-to-illumination"
---

# Adaptive Dynamic Global Illumination

## One-sentence takeaway

Datta–Goli–Zhang adapt DDGI so probes sample where radiosity actually changes (lighting or geometry), enabling roughly an order-of-magnitude more probes while a bandwidth-aware path keeps irradiance and visibility caches current without stalling the frame.

## Why it matters here

Anoptic's probe / radiance-cascade GI this week sits on Split RC 208, DDGI 318, and Scaling Probe 256 — uniform grids waste rays on static volumes. Adaptive Dynamic GI is the leftover *placement and update* craft: put samples where the field is moving, then update irradiance/visibility caches under a bandwidth budget so GRID COMMAND lighting can raise probe density without a full-grid refresh every frame. Orthogonal to neural irradiance volumes.

## Key ideas

- **Change-aware sampling.** Detect time-varying radiosity from lighting *or* geometry and concentrate new samples there instead of uniformly restirring the whole probe volume.
- **~10× probe count.** The adaptive schedule plus cache updates make an order-of-magnitude denser field practical on the same bandwidth envelope as stock DDGI.
- **Bandwidth-aware caches.** Irradiance and visibility caches are updated to the latest change without stalling the overall algorithm — the production constraint Scaling Probe 256 already named.
- **Orthogonal to later DDGI work.** Presented as an improvement over original DDGI that still composes with resampling / SDF / cascade splits rather than replacing them.

## Caveats

arXiv-only `2301.05125` (cs.GR, Jan 2023); no journal DOI at harvest. Still a probe-grid method — validate against Anoptic's Split RC / cascade schedule before treating adaptive density as a drop-in. Do not remint DDGI 318, Scaling Probe 256, resampling 246, SDF-DDGI 257, Split RC 208, or Lightcuts 1042.

## Links

- arXiv abs: https://arxiv.org/abs/2301.05125
- PDF: https://arxiv.org/pdf/2301.05125
