---
title: "A Forward Scattering Dipole Model from a Functional Integral Approximation"
authors: ["Roald Frederickx", "Philip Dutré"]
year: 2017
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/3072959.3073681"
source: "https://doi.org/10.1145/3072959.3073681"
topics: [subsurface-scattering]
seed_rank: 1274
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: subsurface-scattering
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "Directional Dipole Model for Subsurface Scattering"
    url: "https://doi.org/10.1145/2682629"
    year: 2014
    arxiv: null
    doi: "10.1145/2682629"
see:
  - "152-the-rendering-equation"
  - "1273-directional-dipole-model-for-subsurface-scattering"
---

# A Forward Scattering Dipole Model from a Functional Integral Approximation

## One-sentence takeaway

Frederickx 2017 forward-scattering dipole: functional-integral dipole that stays valid as g → 1.

## Problem

Directional dipole (Frisvad 2014) fails for strongly forward-scattering media — wax, juices, marble with large g.

## Design

Functional-integral / path-integral approximation that yields a forward-scattering dipole. Lineage: directional dipole fails for g→1 → Frederickx17.

## Evidence

SIGGRAPH / TOG 2017, DOI 10.1145/3072959.3073681.

## Limitations

Still an approximate BSSRDF. Path-traced SSS with a real phase function is the unbiased alternative.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint Frederickx 2017. Cite Frisvad 2014.

## Links

- DOI: [10.1145/3072959.3073681](https://doi.org/10.1145/3072959.3073681)
