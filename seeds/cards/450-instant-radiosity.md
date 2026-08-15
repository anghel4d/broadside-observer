---
title: "Instant Radiosity"
authors:
  - "Alexander Keller"
year: 1997
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/258734.258769"
source: "https://doi.org/10.1145/258734.258769"
topics:
  - gi
  - instant-radiosity
  - vpl
seed_rank: 450
seed_batch: "lineage-radiance-cascades-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 10
lineage: radiance-cascades
cites:
  - title: "Reflective Shadow Maps"
    url: "https://doi.org/10.1145/1053427.1053460"
    year: 2005
    doi: "10.1145/1053427.1053460"
  - title: "Imperfect Shadow Maps for Efficient Computation of Indirect Illumination"
    url: "https://doi.org/10.1145/1409060.1409082"
    year: 2008
    doi: "10.1145/1409060.1409082"
  - title: "Cascaded Light Propagation Volumes for Real-Time Indirect Illumination"
    url: "https://doi.org/10.1145/1730804.1730821"
    year: 2010
    doi: "10.1145/1730804.1730821"
see:
  - "292-reflective-shadow-maps"
  - "402-imperfect-shadow-maps-for-efficient-computation-of-indirect-"
  - "277-light-propagation-volumes-in-cryengine-3"
---

# Instant Radiosity

## One-sentence takeaway

Founding many-light / VPL method that turns indirect illumination into a set of virtual point lights evaluable with graphics hardware.

## Why it matters here

Classical real-time GI precursor for the Radiance Cascades spine: Instant Radiosity is the conceptual root of RSM/ISM/LPV many-light pipelines that RC later reframes with hierarchical radiance intervals.

## Key ideas

- Solves the radiance equation by a quasi-random walk that deposits virtual point lights (VPLs) on surfaces.
- Indirect light is approximated by summing contributions of those VPLs, exploiting rasterization hardware rather than a finite-element radiosity mesh.
- Establishes the many-light view of GI that later real-time methods (RSM, ISM, LPV) specialize for GPUs.
- Still the right foil when asking whether a new RTGI scheme is many-light, probe, voxel, or cascade-interval based.

## Caveats

## Links

- DOI: [10.1145/258734.258769](https://doi.org/10.1145/258734.258769)
- URL: https://doi.org/10.1145/258734.258769
- PDF: https://www.cg.tuwien.ac.at/courses/Rendering/InstantRadiosity.pdf
