---
title: "Real-Time Global Illumination using Precomputed Light Field Probes"
authors:
  - "Morgan McGuire et al."
year: 2017
venue: "I3D"
arxiv: null
doi: null
source: "https://research.nvidia.com/publication/real-time-global-illumination-using-precomputed-light-field-probes"
topics:
  - gi
  - probes
seed_rank: 406
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: radiance-cascades
cites:
  - title: "The Irradiance Volume"
    url: "https://doi.org/10.1109/38.656788"
    year: 1998
    doi: "10.1109/38.656788"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
  - title: "Scaling Probe-Based Real-Time Dynamic Global Illumination for Production"
    url: "https://arxiv.org/abs/2009.10796"
    year: 2020
    arxiv: "2009.10796"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
see:
  - "662-the-irradiance-volume"
  - "397-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "330-scaling-probe-based-real-time-dynamic-global-illumination-fo"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Real-Time Global Illumination using Precomputed Light Field Probes

## One-sentence takeaway

Precomputed light-field probes store radiance + visibility for real-time glossy/diffuse GI — the direct ancestor of DDGI.

## Why it matters here

Industrial probe foil on the Radiance Cascades spine: world-space radiance probes that DDGI dynamizes and that Split RC sparsifies against.

## Key ideas

- Place light-field probes in the scene that encode incoming radiance and geometric visibility.
- Supports dynamic viewers with precomputed or infrequently updated probe content.
- Sets up the irradiance-field-with-visibility representation refined by DDGI.

## Caveats

- Original formulation leans on precomputation; DDGI removes much of that for dynamic lights/geometry.

## Links

- URL: https://research.nvidia.com/publication/real-time-global-illumination-using-precomputed-light-field-probes
