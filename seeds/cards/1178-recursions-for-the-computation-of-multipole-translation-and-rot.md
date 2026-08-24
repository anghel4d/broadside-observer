---
title: "Recursions for the Computation of Multipole Translation and Rotation Coefficients for the 3-D Helmholtz Equation"
authors:
  - "Nail A. Gumerov"
  - "Ramani Duraiswami"
year: 2004
venue: "SIAM Journal on Scientific Computing"
arxiv: null
doi: "10.1137/s1064827501399705"
source: "https://doi.org/10.1137/s1064827501399705"
topics:
  - "helmholtz"
  - "gumerov-duraiswami"
  - "translation-operator"
  - "fmm"
seed_rank: 1178
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 9
lineage: fast-multipole
cites:
  - title: "Diagonal Forms of Translation Operators for the Helmholtz Equation in Three Dimensions"
    url: "https://doi.org/10.1006/acha.1993.1006"
    year: 1993
    arxiv: null
    doi: "10.1006/acha.1993.1006"
  - title: "Fast Multipole Methods for the Helmholtz Equation in Three Dimensions"
    url: "https://doi.org/10.1016/B978-0-08-044371-3.X5000-5"
    year: 2004
    arxiv: null
    doi: "10.1016/B978-0-08-044371-3.X5000-5"
  - title: "Fast Multipole Methods on Graphics Processors"
    url: "https://doi.org/10.1016/j.jcp.2008.05.023"
    year: 2008
    arxiv: null
    doi: "10.1016/j.jcp.2008.05.023"
see:
  - "1172-diagonal-forms-of-translation-operators-for-the-helmholtz-equat"
  - "1171-rapid-solution-of-integral-equations-of-scattering-theory-in-tw"
  - "1184-fast-multipole-methods-on-graphics-processors"
---

# Recursions for the Computation of Multipole Translation and Rotation Coefficients for the 3-D Helmholtz Equation

## One-sentence takeaway

Gumerov–Duraiswami's usable Helmholtz translation/rotation recursions — the algorithm paper behind their 2004/05 Helmholtz FMM book, not a CEM application.

## Problem

Rokhlin 1993 gives existence of diagonal translators. A 3D Helmholtz code still needs stable recurrences for rotation and coaxial translation coefficients at practical p. The Elsevier book is the treatise; this SIAM paper is the citable algorithm.

## Design

Recurrences for 3D Helmholtz multipole translation and rotation coefficients with stability discussion. Enables a spherical-basis Helmholtz FMM without re-deriving Clebsch–Gordan machinery. Book chapters reuse this; do not remint the book as a second paper.

## Evidence

SIAM J. Sci. Comput. 25(4):1344–1381, 2004, DOI 10.1137/S1064827501399705.

## Limitations

Operators, not a full solver. GPU Laplace FMM is their 2008 JCP (1184). Acoustic/EM application papers that only use these recurrences are rejects.

## Implications for Broadside

Cite with Rokhlin 1993 when implementing 3D Helmholtz translations. The book is the narrative; this is the paper.

## Bottom line

Mint Gumerov–Duraiswami 2004 SIAM recursions as the Helmholtz algorithm paper.

## Links

- DOI: [10.1137/S1064827501399705](https://doi.org/10.1137/s1064827501399705)
