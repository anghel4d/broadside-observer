---
title: "Progressive Photon Beams"
authors: ["Wojciech Jarosz", "Derek Nowrouzezahrai", "Iman Sadeghi", "Henrik Wann Jensen"]
year: 2011
venue: "SIGGRAPH Asia / TOG"
arxiv: null
doi: "10.1145/2024156.2024215"
source: "https://doi.org/10.1145/2024156.2024215"
topics: [subsurface-scattering]
seed_rank: 1331
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 7
lineage: subsurface-scattering
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "Global Illumination using Photon Maps"
    url: "https://graphics.stanford.edu/~henrik/papers/ewr7/ewr7.html"
    year: 1996
    arxiv: null
    doi: null
  - title: "The Beam Radiance Estimate for Volumetric Photon Mapping"
    url: "https://doi.org/10.1111/j.1467-8659.2008.01153.x"
    year: 2008
    arxiv: null
    doi: "10.1111/j.1467-8659.2008.01153.x"
see:
  - "152-the-rendering-equation"
  - "374-global-illumination-using-photon-maps"
  - "1318-the-beam-radiance-estimate-for-volumetric-photon-mapping"
---

# Progressive Photon Beams

## One-sentence takeaway

Progressive photon beams.

## Problem

Predecessor chain Jarosz08 → PPB11. This paper's job: Progressive photon beams.

## Design

Progressive photon beams. Lineage: Jarosz08 → PPB11.

## Evidence

SIGGRAPH Asia / TOG 2011. DOI `10.1145/2024156.2024215`. Progressive photon beams.

## Limitations

Read the cited predecessors before treating this as a drop-in Anoptic shader. Do not claim the library already implements it.

## Implications for Broadside

FMM+RC is Anoptic's far-field 3D GI bet. Participating-media / SSS is the missing local transport operator inside skin, marble, wax, and interiors. Do not claim they already have SSS.

## Bottom line

Mint this 2011 SIGGRAPH Asia / TOG paper. Progressive photon beams.

## Links

- DOI: [10.1145/2024156.2024215](https://doi.org/10.1145/2024156.2024215)
