---
title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
authors:
  - "Zander Majercik"
  - "Jean-Philippe Guertin"
  - "Derek Nowrouzezahrai"
  - "Morgan McGuire"
year: 2019
venue: "JCGT"
arxiv: null
doi: null
source: "https://jcgt.org/published/0008/02/01/"
topics:
  - gi
  - ddgi
seed_rank: 318
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: radiance-cascades
cites:
  - title: "Real-Time Global Illumination using Precomputed Light Field Probes"
    url: "https://research.nvidia.com/publication/real-time-global-illumination-using-precomputed-light-field-probes"
    year: 2017
  - title: "Scaling Probe-Based Real-Time Dynamic Global Illumination for Production"
    url: "https://arxiv.org/abs/2009.10796"
    year: 2020
    arxiv: "2009.10796"
  - title: "Dynamic Diffuse Global Illumination Resampling"
    url: "https://arxiv.org/abs/2108.05263"
    year: 2021
    arxiv: "2108.05263"
  - title: "The Irradiance Volume"
    url: "https://doi.org/10.1109/38.656788"
    year: 1998
    doi: "10.1109/38.656788"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
  - title: "GI-1.0: A Fast and Scalable Two-level Radiance Caching Scheme for Real-time Global Illumination"
    url: "https://arxiv.org/abs/2310.19855"
    year: 2023
    arxiv: "2310.19855"
see:
  - "327-real-time-global-illumination-using-precomputed-light-field-"
  - "256-scaling-probe-based-real-time-dynamic-global-illumination-fo"
  - "246-dynamic-diffuse-global-illumination-resampling"
  - "451-the-irradiance-volume"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "231-gi-1-0-a-fast-and-scalable-two-level-radiance-caching-scheme"
---

# Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields

## One-sentence takeaway

DDGI stores a world-space irradiance field in a grid of probes, updates those probes with hardware ray tracing, and reconstructs leak-resistant irradiance with a visibility-aware moment interpolant.

## Why it matters here

This is the industrial probe GI that Radiance Cascades is measured against: Anoptic can ship DDGI-style probes while RC variants chase noiseless cascades.

## Key ideas

- Classic irradiance volumes become a compact encoding of the full irradiance field, updated every frame from rays traced at probe positions rather than from precomputed lightmaps.
- Each probe stores irradiance plus a small visibility/depth representation (octahedral maps) so interpolation can reject probes that are on the other side of a wall.
- The filtered query uses a moment-based, visibility-aware interpolant instead of trilinear blending of huge spherical textures.
- Lighting and geometry can move; only the probe field is refreshed, not a full per-pixel path trace.
- Shipped as NVIDIA RTXGI and became the default language for probe GI in engines. JCGT 8(2), 2019.

## Caveats

## Links

- JCGT: https://jcgt.org/published/0008/02/01/
- PDF: https://jcgt.org/published/0008/02/01/paper.pdf
