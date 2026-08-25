---
title: "Importance Sampling Techniques for Path Tracing in Participating Media"
authors: ["Christopher D. Kulla", "Marcos Fajardo"]
year: 2012
venue: "EGSR / CGF"
arxiv: null
doi: "10.1111/j.1467-8659.2012.03148.x"
source: "https://doi.org/10.1111/j.1467-8659.2012.03148.x"
topics: [subsurface-scattering]
seed_rank: 1305
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: subsurface-scattering
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
see:
  - "152-the-rendering-equation"
---

# Importance Sampling Techniques for Path Tracing in Participating Media

## One-sentence takeaway

Equiangular/distance sampling for media; random-walk SSS backbone.

## Problem

Predecessor chain VPT sampling → Kulla12 → Chiang16. This paper's job: Equiangular/distance sampling for media; random-walk SSS backbone.

## Design

Equiangular/distance sampling for media; random-walk SSS backbone. Lineage: VPT sampling → Kulla12 → Chiang16.

## Evidence

EGSR / CGF 2012. DOI `10.1111/j.1467-8659.2012.03148.x`. Equiangular/distance sampling for media; random-walk SSS backbone.

## Limitations

Read the cited predecessors before treating this as a drop-in Anoptic shader. Do not claim the library already implements it.

## Implications for Broadside

FMM+RC is Anoptic's far-field 3D GI bet. Participating-media / SSS is the missing local transport operator inside skin, marble, wax, and interiors. Do not claim they already have SSS.

## Bottom line

Mint this 2012 EGSR / CGF paper. Equiangular/distance sampling for media; random-walk SSS backbone.

## Links

- DOI: [10.1111/j.1467-8659.2012.03148.x](https://doi.org/10.1111/j.1467-8659.2012.03148.x)
