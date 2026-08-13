---
title: "Scaling Probe-Based Real-Time Dynamic Global Illumination for Production"
authors:
  - "Zander Majercik"
  - "Adam Marrs"
  - "Josef Spjut"
  - "Morgan McGuire"
year: 2020
venue: "arXiv:cs.GR"
arxiv: "2009.10796"
doi: null
source: "https://arxiv.org/abs/2009.10796"
topics:
  - gi
seed_rank: 330
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
  - "397-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "406-real-time-global-illumination-using-precomputed-light-field-"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Scaling Probe-Based Real-Time Dynamic Global Illumination for Production

## One-sentence takeaway

Production hardening of DDGI: bias, state machines, cascaded volumes, and engine-integration lessons from RTXGI/Unity/UE4.

## Why it matters here

Shows what industrial probe GI needed to ship — useful checklist when comparing Anoptic RC experiments to DDGI reality.

## Key ideas

- Single self-shadow bias parameter and probe state machine to prune useless work.
- Cascaded probe volumes for large worlds; reuse irradiance as prefiltered radiance for glossy recursion.
- Documents adoption path into NVIDIA RTXGI SDK and major engines.

## Caveats

- Engineering paper on DDGI extensions; not a new GI paradigm.

## Links

- arXiv: [2009.10796](https://arxiv.org/abs/2009.10796)
- URL: https://arxiv.org/abs/2009.10796
