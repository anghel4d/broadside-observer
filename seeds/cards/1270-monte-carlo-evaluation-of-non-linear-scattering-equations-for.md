---
title: "Monte Carlo Evaluation of Non-Linear Scattering Equations for Subsurface Reflection"
authors: ["Matt Pharr", "Pat Hanrahan"]
year: 2000
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/344779.344824"
source: "https://doi.org/10.1145/344779.344824"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1270
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: translucent-materials
cites:
  - title: "Ray Tracing Volume Densities"
    url: "https://doi.org/10.1145/800031.808594"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808594"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "Reflection from Layered Surfaces due to Subsurface Scattering"
    url: "https://doi.org/10.1145/166117.166139"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166139"
see:
  - "152-the-rendering-equation"
  - "1290-ray-tracing-volume-densities"
  - "1247-reflection-from-layered-surfaces-due-to-subsurface-scattering"
---

# Monte Carlo Evaluation of Non-Linear Scattering Equations for Subsurface Reflection

## One-sentence takeaway

Pharr–Hanrahan 2000: Monte Carlo of non-linear subsurface integral equations — MC SSS the year before the dipole.

## Problem

Hanrahan–Krueger is deterministic layered RTE. Need an MC estimator for non-linear subsurface reflection before anyone writes Rd(r).

## Design

Write subsurface reflection as integral equations and evaluate with Monte Carlo. Lineage: HK93 + Kajiya → Pharr00 → dipole era.

## Evidence

SIGGRAPH 2000, DOI 10.1145/344779.344824. Immediate pre-dipole MC paper.

## Limitations

Expensive, not a closed BSSRDF. JMLH01 replaced it in production; path-traced SSS later revived the MC view.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint Pharr 2000. Cite Hanrahan–Krueger and Kajiya RE 152.

## Links

- DOI: [10.1145/344779.344824](https://doi.org/10.1145/344779.344824)
