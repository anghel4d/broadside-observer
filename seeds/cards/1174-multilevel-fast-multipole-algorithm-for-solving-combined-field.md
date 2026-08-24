---
title: "Multilevel Fast-Multipole Algorithm for Solving Combined Field Integral Equations of Electromagnetic Scattering"
authors:
  - "Jiming M. Song"
  - "Weng Cho Chew"
year: 1995
venue: "Microwave and Optical Technology Letters"
arxiv: null
doi: "10.1002/mop.4650100107"
source: "https://doi.org/10.1002/mop.4650100107"
topics:
  - "mlfma"
  - "mlfmm"
  - "helmholtz"
  - "chew"
  - "scattering"
seed_rank: 1174
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: fast-multipole
cites:
  - title: "The Fast Multipole Method for the Wave Equation: A Pedestrian Prescription"
    url: "https://doi.org/10.1109/74.250128"
    year: 1993
    arxiv: null
    doi: "10.1109/74.250128"
  - title: "Diagonal Forms of Translation Operators for the Helmholtz Equation in Three Dimensions"
    url: "https://doi.org/10.1006/acha.1993.1006"
    year: 1993
    arxiv: null
    doi: "10.1006/acha.1993.1006"
  - title: "Multilevel Fast Multipole Algorithm for Electromagnetic Scattering by Large Complex Objects"
    url: "https://doi.org/10.1109/8.633855"
    year: 1997
    arxiv: null
    doi: "10.1109/8.633855"
see:
  - "1173-the-fast-multipole-method-for-the-wave-equation-a-pedestrian-pr"
  - "1172-diagonal-forms-of-translation-operators-for-the-helmholtz-equat"
  - "1175-the-fast-multipole-method-numerical-implementation"
---

# Multilevel Fast-Multipole Algorithm for Solving Combined Field Integral Equations of Electromagnetic Scattering

## One-sentence takeaway

Song–Chew 1995 is the founding MLFMA: multilevel Helmholtz FMM applied to the combined-field integral equation, the CEM algorithm (not the thousand later antenna papers).

## Problem

Single-level Helmholtz FMM is O(N^{3/2}). Production scattering needed a multilevel scheme with Rokhlin's diagonal M2L and a CFIE that is well-conditioned at internal resonances.

## Design

Octree over the surface mesh. Upward aggregation of outgoing patterns, diagonal translation to well-separated boxes, downward disaggregation into incoming patterns, near-field MoM stored densely. Combined-field (EFIE+MFIE) unknown. The 1997 IEEE TAP large-complex-objects paper (Song–Lu–Chew, 10.1109/8.633855) is the journal write-up of the same algorithm — cite, do not remint.

## Evidence

Microwave Opt. Technol. Lett. 10(1):14–19, September 1995, DOI 10.1002/mop.4650100107. This is the first MLFMA publication.

## Limitations

CEM / surface scattering, not volume gravity. High-frequency breakdown and preconditioning are later literature. Application papers that only run MLFMA on a new geometry are rejects.

## Implications for Broadside

If Broadside ever does wave BEM (acoustics, radar-in-a-game, radio), MLFMA is the name of the solver. Not a lighting paper.

## Bottom line

Mint Song–Chew 1995 as MLFMA founding. Cite 1997 TAP; do not remint it.

## Links

- DOI: [10.1002/mop.4650100107](https://doi.org/10.1002/mop.4650100107)
