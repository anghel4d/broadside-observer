---
title: "Understanding the role of phase function in translucent appearance"
authors: ["Ioannis Gkioulekas", "Bei Xiao", "Shuang Zhao", "Edward H. Adelson", "Todd Zickler", "Kavita Bala"]
year: 2013
venue: "ACM Transactions on Graphics"
arxiv: null
doi: "10.1145/2516971.2516972"
source: "https://doi.org/10.1145/2516971.2516972"
topics: [translucent-materials]
seed_rank: 1264
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: translucent-materials
cites:
  - title: "Diffuse Radiation in the Galaxy"
    url: "https://doi.org/10.1086/144246"
    year: 1941
    arxiv: null
    doi: "10.1086/144246"
  - title: "Radiative Transfer"
    url: "https://archive.org/details/radiativetransfe0000chan"
    year: 1950
    arxiv: null
    doi: null
  - title: "Real-Time Approximations to Subsurface Scattering"
    url: "https://developer.nvidia.com/gpugems/gpugems/part-iii-materials/chapter-16-real-time-approximations-subsurface-scattering"
    year: 2004
    arxiv: null
    doi: null
see:
  - "1295-diffuse-radiation-in-the-galaxy"
  - "1252-radiative-transfer"
  - "1282-real-time-approximations-to-subsurface-scattering"
---

# Understanding the role of phase function in translucent appearance

## One-sentence takeaway

Phase function is a first-class translucent appearance parameter — HG is not enough, and people can see it.

## Problem

Inverse rendering and SSS models treat g as a minor knob. Gkioulekas shows phase-function shape changes perceived translucency.

## Design

Psychophysics + rendering: vary phase while holding other RTE params; show that HG cannot span the appearance. Lineage: Henyey–Greenstein, Gkioulekas inverse, perception of translucency.

## Evidence

TOG 2013, DOI 10.1145/2516971.2516972. Companion to inverse volume rendering (same lead author, same year).

## Limitations

Perception + acquisition, not a new integrator. Dictionary inversion is the other 2013 paper.

## Implications for Broadside

Capture papers say which parameters to store (σs, σa, g, layered weights), not how Anoptic evaluates them. The renderer still lacks an SSS operator. Do not claim they already have SSS.

## Bottom line

Mint the phase-function TOG. Cite HG 1941 and the inverse-volume paper.

## Links

- DOI: [10.1145/2516971.2516972](https://doi.org/10.1145/2516971.2516972)
