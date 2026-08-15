---
title: "Scaling Probe-Based Real-Time Dynamic Global Illumination for Production"
authors:
  - "Zander Majercik"
  - "Adam Marrs"
  - "Josef Spjut"
  - "Morgan McGuire"
year: 2020
venue: "JCGT / arXiv cs.GR"
arxiv: "2009.10796"
doi: null
source: "https://arxiv.org/abs/2009.10796"
topics:
  - gi
seed_rank: 256
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
  - title: "Real-Time Global Illumination using Precomputed Light Field Probes"
    url: "https://research.nvidia.com/publication/real-time-global-illumination-using-precomputed-light-field-probes"
    year: 2017
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
see:
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "327-real-time-global-illumination-using-precomputed-light-field-"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Scaling Probe-Based Real-Time Dynamic Global Illumination for Production

## One-sentence takeaway

Production DDGI adds a single self-shadow bias, a probe state machine, cascaded volumes, and irradiance-as-prefiltered-radiance so RTXGI, Unity, and UE4 can ship irradiance-field GI.

## Why it matters here

This is the industrial checklist when Anoptic compares Radiance Cascades experiments to what actually shipped: bias knobs, work pruning, cascade layout, and glossy reuse — not a new GI theory.

## Key ideas

- One artist-facing "self-shadow" bias replaces a pile of per-probe hacks.
- A probe state machine skips updates that cannot change the final image; extra heuristics shorten lighting transitions.
- Multiresolution cascaded probe volumes cover large worlds without a uniform dense grid.
- Stored irradiance is reused as prefiltered radiance for recursive glossy reflection.
- Lessons come from folding DDGI into the NVIDIA RTXGI SDK and into Unity / UE4 / proprietary titles.

## Caveats

## Links

- arXiv: [2009.10796](https://arxiv.org/abs/2009.10796)
- JCGT: http://www.jcgt.org/published/0010/02/01/
- PDF: https://arxiv.org/pdf/2009.10796
