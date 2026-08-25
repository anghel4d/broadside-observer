---
title: "Spectral and Decomposition Tracking for Rendering Heterogeneous Volumes"
authors: ["Peter Kutz", "Ralf Habel", "Kenneth Vachev", "Jan Novák"]
year: 2017
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/3072959.3073665"
source: "https://doi.org/10.1145/3072959.3073665"
topics: [subsurface-scattering]
seed_rank: 1341
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
  - title: "Residual Ratio Tracking for Estimating Attenuation in Participating Media"
    url: "https://cs.dartmouth.edu/~wjarosz/publications/novak14residual.html"
    year: 2014
    arxiv: null
    doi: "10.1111/cgf.12429"
see:
  - "152-the-rendering-equation"
  - "1339-residual-ratio-tracking-for-estimating-attenuation-in-participating"
---

# Spectral and Decomposition Tracking for Rendering Heterogeneous Volumes

## One-sentence takeaway

Production spectral/decomposition tracking (Hyperion).

## Problem

Predecessor chain RRT → Kutz17. This paper's job: Production spectral/decomposition tracking (Hyperion).

## Design

Production spectral/decomposition tracking (Hyperion). Lineage: RRT → Kutz17.

## Evidence

SIGGRAPH / TOG 2017. DOI `10.1145/3072959.3073665`. Production spectral/decomposition tracking (Hyperion).

## Limitations

Read the cited predecessors before treating this as a drop-in Anoptic shader. Do not claim the library already implements it.

## Implications for Broadside

FMM+RC is Anoptic's far-field 3D GI bet. Participating-media / SSS is the missing local transport operator inside skin, marble, wax, and interiors. Do not claim they already have SSS.

## Bottom line

Mint this 2017 SIGGRAPH / TOG paper. Production spectral/decomposition tracking (Hyperion).

## Links

- DOI: [10.1145/3072959.3073665](https://doi.org/10.1145/3072959.3073665)
