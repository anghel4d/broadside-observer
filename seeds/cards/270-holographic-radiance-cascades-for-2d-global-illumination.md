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
seed_rank: 270
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
  - title: "Split Radiance Cascades: Real-Time Global Illumination via Sparse Radiance Probes"
    url: "https://arxiv.org/abs/2607.20384"
    year: 2026
    arxiv: "2607.20384"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "664-radiance-cascades-a-novel-high-resolution-formal-solution-fo"
  - "265-split-radiance-cascades-real-time-global-illumination-via-sp"
  - "397-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
---

# Holographic Radiance Cascades for 2D Global Illumination

## One-sentence takeaway

Holographic Radiance Cascades keep high spatial resolution perpendicular to sample directions, yielding 2D GI visually matching reference at real-time rates.

## Why it matters here

Seeded RC variant on the Anoptic spine: shows how to fix small-penumbra / hard-shadow weaknesses of naive RC while staying single-shot and scene-agnostic in 2D.

## Key ideas

- Multi-level radiance probes with ray intervals composed instead of full conventional ray traces.
- Holographic probe layout preserves resolution perpendicular to the march, improving hard shadows and volumetrics.
- Builds on Sannikov RC and cites bilinear-style fixes from Osborne & Sannikov.
- Memory scaling O(N×X²) is the stated barrier to naive 3D HRC.

## Caveats

- Best understood as a 2D/fluence method; 3D remains open (see Split RC and community Surfel/UV-space variants).

## Links

- arXiv: [2505.02041](https://arxiv.org/abs/2505.02041)
- URL: https://arxiv.org/abs/2505.02041
