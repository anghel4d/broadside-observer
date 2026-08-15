---
title: "Holographic Radiance Cascades for 2D Global Illumination"
authors:
  - "Rouli Freeman"
  - "Alexander Sannikov"
  - "Adrian Margel"
year: 2025
venue: "arXiv:cs.GR"
arxiv: "2505.02041"
doi: null
source: "https://arxiv.org/abs/2505.02041"
topics:
  - gi
  - radiance-cascades
  - holographic-rc
seed_rank: 211
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
  - title: "Radiance Cascades: A Novel High-Resolution Formal Solution for Multidimensional Non-LTE Radiative Transfer"
    url: "https://arxiv.org/abs/2408.14425"
    year: 2024
    arxiv: "2408.14425"
    doi: "10.1093/rasti/rzae062"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "453-radiance-cascades-a-novel-high-resolution-formal-solution-fo"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
---

# Holographic Radiance Cascades for 2D Global Illumination

## One-sentence takeaway

Holographic Radiance Cascades keep high spatial resolution perpendicular to sample directions, matching a 2D path-traced reference at 1.85 ms for 512² on a laptop RTX 3080.

## Why it matters here

Anoptic's 2D/fluence RC spine needs this holographic probe layout to fix small-penumbra and hard-shadow failures of naive interval merging without going stochastic.

## Key ideas

- Multi-level radiance probes compose short ray intervals instead of tracing full conventional rays.
- The holographic layout preserves resolution perpendicular to the march, which is what buys hard shadows and volumetrics.
- Cost is constant for a given scene size: 1.85 ms at 512×512 and 7.67 ms at 1024×1024 on an RTX 3080 Laptop.
- Single-shot and scene-agnostic: no temporal accumulation and no content preprocess.
- Memory scaling O(N×X²) is the stated barrier to a naive 3D holographic cascade.

## Caveats

## Links

- arXiv: [2505.02041](https://arxiv.org/abs/2505.02041)
- PDF: https://arxiv.org/pdf/2505.02041
