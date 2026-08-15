---
title: "Reflective Shadow Maps"
authors:
  - "Carsten Dachsbacher"
  - "Marc Stamminger"
year: 2005
venue: "I3D 2005"
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

Treat the shadow map as a sampling of directly lit surfaces that become virtual point lights, giving dynamic one-bounce indirect light from the same pass that already computed shadows.

## Why it matters here

Classical RTGI staple on the Radiance Cascades spine: RSM is the many-light precursor that LPV, imperfect shadow maps, and later cascade methods historically answer. Anoptic GI experiments should know this is where "secondary lights from the light's view" starts.

## Key ideas

- A reflective shadow map stores, per texel, world position, normal, and reflected flux of the surface seen from the light — not just depth.
- Each texel is a VPL (Keller Instant Radiosity). Gathering or splatting those VPLs approximates one-bounce diffuse GI with no precomputed radiosity mesh.
- Fully dynamic: lights and geometry can move because the RSM is rebuilt every frame from the same shadow pass.
- Direct ancestor of splatting-indirect (Dachsbacher 2006) and imperfect-shadow-map many-light pipelines.
- I3D 2005, DOI 10.1145/1053427.1053460. One-bounce / VPL sampling noise and fill-rate are the production limits.

## Caveats

## Links

- DOI: [10.1145/1053427.1053460](https://doi.org/10.1145/1053427.1053460)
