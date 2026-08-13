---
title: "Reflective Shadow Maps"
authors:
  - "Carsten Dachsbacher"
  - "Marc Stamminger"
year: 2005
venue: "I3D"
arxiv: null
doi: "10.1145/1053427.1053460"
source: "https://doi.org/10.1145/1053427.1053460"
topics:
  - gi
  - rsm
  - radiance-cascades-precursor
seed_rank: 292
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Instant Radiosity"
    url: "https://doi.org/10.1145/258734.258769"
    year: 1997
    doi: "10.1145/258734.258769"
  - title: "Splatting Indirect Illumination"
    url: "https://doi.org/10.1145/1111411.1111428"
    year: 2006
    doi: "10.1145/1111411.1111428"
  - title: "Imperfect Shadow Maps for Efficient Computation of Indirect Illumination"
    url: "https://doi.org/10.1145/1409060.1409082"
    year: 2008
    doi: "10.1145/1409060.1409082"
  - title: "Cascaded Light Propagation Volumes for Real-Time Indirect Illumination"
    url: "https://doi.org/10.1145/1730804.1730821"
    year: 2010
    doi: "10.1145/1730804.1730821"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
see:
  - "450-instant-radiosity"
  - "452-splatting-indirect-illumination"
  - "402-imperfect-shadow-maps-for-efficient-computation-of-indirect-"
  - "277-light-propagation-volumes-in-cryengine-3"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
---

# Reflective Shadow Maps

## One-sentence takeaway

Capture secondary lights in a shadow-map-like buffer from the light’s view — the GPU-native Instant Radiosity specialization.

## Why it matters here

Classical RTGI staple on the Radiance Cascades spine: RSM is the many-light precursor that LPV and later cascade methods historically answer.

## Key ideas

- Treat the shadow map as a sampling of directly lit surfaces that act as VPLs for one-bounce indirect light.
- Enables dynamic single-bounce GI without precomputed radiosity meshes.
- Direct ancestor of splatting-indirect and imperfect-shadow-map many-light pipelines.

## Caveats

- One-bounce / VPL sampling noise and fill-rate limits; not a full multi-bounce cascade solution.

## Links

- DOI: [10.1145/1053427.1053460](https://doi.org/10.1145/1053427.1053460)
- URL: https://doi.org/10.1145/1053427.1053460
