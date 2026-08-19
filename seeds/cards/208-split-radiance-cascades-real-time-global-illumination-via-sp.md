---
title: "Split Radiance Cascades: Real-Time Global Illumination via Sparse Radiance Probes"
authors:
  - "Rouli Freeman"
  - "Alexander Sannikov"
year: 2026
venue: "arXiv:cs.GR"
arxiv: "2607.20384"
doi: null
source: "https://arxiv.org/abs/2607.20384"
topics:
  - gi
  - radiance-cascades
  - split-rc
seed_rank: 208
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
  - title: "Holographic Radiance Cascades for 2D Global Illumination"
    url: "https://arxiv.org/abs/2505.02041"
    year: 2025
    arxiv: "2505.02041"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
  - title: "Real-Time Global Illumination using Precomputed Light Field Probes"
    url: "https://research.nvidia.com/publication/real-time-global-illumination-using-precomputed-light-field-probes"
    year: 2017
  - title: "GI-1.0: A Fast and Scalable Two-level Radiance Caching Scheme for Real-time Global Illumination"
    url: "https://arxiv.org/abs/2310.19855"
    year: 2023
    arxiv: "2310.19855"
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "211-holographic-radiance-cascades-for-2d-global-illumination"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "327-real-time-global-illumination-using-precomputed-light-field-"
  - "231-gi-1-0-a-fast-and-scalable-two-level-radiance-caching-scheme"
  - "1107-a-simple-ray-acceleration-structure-for-non-lte-radiative-t"
---

# Split Radiance Cascades: Real-Time Global Illumination via Sparse Radiance Probes

## One-sentence takeaway

Split Radiance Cascades stores world-space RC probes in a sparse hashmap and assigns traced hit intervals to cascade levels by ray-split distance, enabling real-time 3D diffuse GI.

## Why it matters here

This is the living 3D RC successor for Anoptic: it attacks the volumetric storage wall that kept prior RC demos in 2D or screenspace.

## Key ideas

- Dense 3D cascade grids are prohibitive; a sparse hashmap keeps only world-space probes that matter.
- Ray splitting traces from visible surfaces and bins each hit interval into the cascade whose spatial/angular budget matches that distance.
- Near-field light keeps high spatial resolution and low angular resolution; far-field does the reverse, the usual RC trade.
- Evaluated in both single-frame and temporally accumulated modes on several scenes.
- Positions itself against noisy path-probe sampling and against 2D/screenspace RC implementations.

## Caveats

## Links

- arXiv: [2607.20384](https://arxiv.org/abs/2607.20384)
- PDF: https://arxiv.org/pdf/2607.20384
