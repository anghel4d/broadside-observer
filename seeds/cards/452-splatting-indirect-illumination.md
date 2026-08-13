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
  - title: "Cascaded Light Propagation Volumes for Real-Time Indirect Illumination"
    url: "https://doi.org/10.1145/1730804.1730821"
    year: 2010
    doi: "10.1145/1730804.1730821"
see:
  - "292-reflective-shadow-maps"
  - "450-instant-radiosity"
  - "277-light-propagation-volumes-in-cryengine-3"
---

# Splatting Indirect Illumination

## One-sentence takeaway

GPU deferred-splatting of secondary lights sampled from reflective shadow maps — the practical RSM→many-light bridge.

## Why it matters here

Tight Instant-Radiosity/RSM successor on the classical RTGI spine; shows how VPL contributions became real-time before volumetric propagation (LPV) and cascades.

## Key ideas

- Uses an extended shadow map (RSM) to place secondary lights on directly lit surfaces.
- Accumulates indirect contribution by splatting in a deferred shading pass, decoupling cost from scene polygon count.
- GPU importance sampling selects VPLs; splat shape adapts for glossy responses/caustics.
- Important stepping stone between RSM (2005) and later LPV / many-light industrial GI.

## Caveats

- Fill-rate and VPL sampling artifacts remain; later work reduces overdraw with multiresolution and other tricks.
- Still a many-light method — complementary foil to probe/cascade-interval schemes.

## Links

- DOI: [10.1145/1111411.1111428](https://doi.org/10.1145/1111411.1111428)
- URL: https://doi.org/10.1145/1111411.1111428
