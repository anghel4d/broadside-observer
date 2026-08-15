---
title: "Real-Time Global Illumination using Precomputed Light Field Probes"
authors:
  - "Morgan McGuire"
  - "Mike Mara"
  - "Derek Nowrouzezahrai"
  - "David Luebke"
year: 2017
venue: "I3D"
arxiv: null
doi: "10.1145/3105762.3105774"
source: "https://research.nvidia.com/publication/2017-02_real-time-global-illumination-using-precomputed-light-field-probes"
topics:
  - gi
  - probes
seed_rank: 327
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
  - "451-the-irradiance-volume"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "256-scaling-probe-based-real-time-dynamic-global-illumination-fo"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Real-Time Global Illumination using Precomputed Light Field Probes

## One-sentence takeaway

Light-field probes store incoming radiance and geometric visibility at world-space locations so a real-time shader can reconstruct glossy and diffuse GI for a moving camera from precomputed (or rarely updated) probe content.

## Why it matters here

This I3D 2017 paper is the probe representation DDGI later dynamizes with ray tracing and that Radiance Cascades sparsifies; it is the industrial ancestor on Anoptic’s GI spine.

## Key ideas

- Each probe encodes a light field — not just irradiance — plus a visibility representation so lookups can reject probes occluded from the shaded point.
- Viewers are fully dynamic; probe contents are precomputed or updated infrequently, which is the limitation DDGI removes.
- Interpolation of nearby probes with visibility tests is what stops light leaks through thin walls, the same problem later “scaling probe GI” papers keep fighting.
- Glossy and diffuse both come from the same stored field; later DDGI drops the glossy path and keeps the irradiance + visibility octahedra.
- NVIDIA research page is the canonical landing; DOI 10.1145/3105762.3105774.

## Caveats

## Links

- NVIDIA: https://research.nvidia.com/publication/2017-02_real-time-global-illumination-using-precomputed-light-field-probes
- DOI: [10.1145/3105762.3105774](https://doi.org/10.1145/3105762.3105774)
