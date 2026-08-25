---
title: "Subdivision Next-Event Estimation for Path-Traced Subsurface Scattering"
authors: ["David Koerner", "Jan Novák", "Peter Kutz", "Ralf Habel", "Wojciech Jarosz"]
year: 2016
venue: "EGSR (Experimental Ideas)"
arxiv: null
doi: null
source: "https://cs.dartmouth.edu/~wjarosz/publications/koerner16subdivision.html"
topics: [subsurface-scattering]
seed_rank: 1307
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
  - title: "Residual Ratio Tracking for Estimating Attenuation in Participating Media"
    url: "https://cs.dartmouth.edu/~wjarosz/publications/novak14residual.html"
    year: 2014
    arxiv: null
    doi: "10.1111/cgf.12429"
  - title: "Practical and Controllable Subsurface Scattering for Production Path Tracing"
    url: "https://doi.org/10.1145/2897839.2927433"
    year: 2016
    arxiv: null
    doi: "10.1145/2897839.2927433"
see:
  - "152-the-rendering-equation"
  - "1339-residual-ratio-tracking-for-estimating-attenuation-in-participating"
  - "1258-practical-and-controllable-subsurface-scattering-for-production-path"
---

# Subdivision Next-Event Estimation for Path-Traced Subsurface Scattering

## One-sentence takeaway

Unbiased NEE through refractive SSS interfaces.

## Problem

Predecessor chain Path-traced SSS noise → SNEE. This paper's job: Unbiased NEE through refractive SSS interfaces.

## Design

Unbiased NEE through refractive SSS interfaces. Lineage: Path-traced SSS noise → SNEE.

## Evidence

EGSR (Experimental Ideas) 2016. no DOI — use the source URL. Unbiased NEE through refractive SSS interfaces.

## Limitations

Read the cited predecessors before treating this as a drop-in Anoptic shader. Do not claim the library already implements it.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Skin is the first character-appearance hole: translucent dermis, not another BRDF lobe. Do not claim Anoptic already has SSS.

## Bottom line

Mint this 2016 EGSR (Experimental Ideas) paper. Unbiased NEE through refractive SSS interfaces.

## Links

- Source: https://cs.dartmouth.edu/~wjarosz/publications/koerner16subdivision.html
