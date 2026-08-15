---
title: "Splatting Indirect Illumination"
authors:
  - "Carsten Dachsbacher"
  - "Marc Stamminger"
year: 2006
venue: "I3D"
arxiv: null
doi: "10.1145/1111411.1111428"
source: "https://doi.org/10.1145/1111411.1111428"
topics:
  - gi
  - rsm
  - vpl
seed_rank: 452
seed_batch: "lineage-radiance-cascades-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: radiance-cascades
cites:
  - title: "Reflective Shadow Maps"
    url: "https://doi.org/10.1145/1053427.1053460"
    year: 2005
    doi: "10.1145/1053427.1053460"
  - title: "Instant Radiosity"
    url: "https://doi.org/10.1145/258734.258769"
    year: 1997
    doi: "10.1145/258734.258769"
see:
  - "292-reflective-shadow-maps"
  - "450-instant-radiosity"
---

# Splatting Indirect Illumination

## One-sentence takeaway

Dachsbacher and Stamminger turn reflective-shadow-map pixels into GPU-splatted secondary lights so one-bounce indirect lighting accumulates in a deferred pass whose cost tracks splat count, not scene polygon count.

## Why it matters here

This is the practical Instant-Radiosity/RSM bridge Anoptic GI history needs: many-light VPLs became real-time before volumetric propagation and radiance cascades.

## Key ideas

- An extended shadow map (RSM) stores position, normal, and flux for each directly lit texel and treats those texels as virtual point lights.
- Indirect contribution is rasterized by splatting each selected VPL into a deferred shading buffer, decoupling fill from geometric complexity.
- GPU importance sampling picks which RSM pixels become VPLs; splat kernels adapt for glossy lobes and simple caustics.
- Demonstrates interactive one-bounce GI on then-current GPUs as the industrial stepping stone after RSM (2005).

## Caveats

## Links

- DOI: [10.1145/1111411.1111428](https://doi.org/10.1145/1111411.1111428)
