---
title: "A Rapid Hierarchical Rendering Technique for Translucent Materials"
authors: ["Henrik Wann Jensen", "Juan Buhler"]
year: 2002
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/566570.566619"
source: "https://doi.org/10.1145/566570.566619"
topics: [subsurface-scattering]
seed_rank: 1256
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: subsurface-scattering
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "A Practical Model for Subsurface Light Transport"
    url: "https://doi.org/10.1145/383259.383319"
    year: 2001
    arxiv: null
    doi: "10.1145/383259.383319"
see:
  - "152-the-rendering-equation"
  - "1245-a-practical-model-for-subsurface-light-transport"
---

# A Rapid Hierarchical Rendering Technique for Translucent Materials

## One-sentence takeaway

Hierarchical irradiance evaluation of the dipole BSSRDF — the production acceleration of JMLH01.

## Problem

JMLH01's per-point gather over the surface is too slow for film. Need a hierarchical Rd(r) that Hery and every studio skin can ship.

## Design

Octree / hierarchy over surface irradiance, evaluate the dipole as a fast multipole-style gather. Lineage: JMLH01 → JB02 → Hery / production.

## Evidence

SIGGRAPH 2002, DOI 10.1145/566570.566619. Immediate parent of Hery's RenderMan skin course.

## Limitations

Still the classic dipole profile. Importance sampling of that profile is King 2013 / Chiang 2016, not this paper.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint Jensen–Buhler 2002. Cite JMLH01; see Hery 2003 in this batch.

## Links

- DOI: [10.1145/566570.566619](https://doi.org/10.1145/566570.566619)
