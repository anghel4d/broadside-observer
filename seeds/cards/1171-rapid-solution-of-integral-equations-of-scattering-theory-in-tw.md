---
title: "Rapid Solution of Integral Equations of Scattering Theory in Two Dimensions"
authors:
  - "Vladimir Rokhlin"
year: 1990
venue: "Journal of Computational Physics"
arxiv: null
doi: "10.1016/0021-9991(90)90107-c"
source: "https://doi.org/10.1016/0021-9991(90)90107-c"
topics:
  - "fmm"
  - "helmholtz"
  - "scattering"
  - "oscillatory"
seed_rank: 1171
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: fast-multipole
cites:
  - title: "Rapid Solution of Integral Equations of Classical Potential Theory"
    url: "https://doi.org/10.1016/0021-9991(85)90002-6"
    year: 1985
    arxiv: null
    doi: "10.1016/0021-9991(85)90002-6"
  - title: "Diagonal Forms of Translation Operators for the Helmholtz Equation in Three Dimensions"
    url: "https://doi.org/10.1006/acha.1993.1006"
    year: 1993
    arxiv: null
    doi: "10.1006/acha.1993.1006"
  - title: "The Fast Multipole Method for the Wave Equation: A Pedestrian Prescription"
    url: "https://doi.org/10.1109/74.250128"
    year: 1993
    arxiv: null
    doi: "10.1109/74.250128"
see:
  - "1163-rapid-solution-of-integral-equations-of-classical-potential-the"
  - "1172-diagonal-forms-of-translation-operators-for-the-helmholtz-equat"
  - "1173-the-fast-multipole-method-for-the-wave-equation-a-pedestrian-pr"
  - "1174-multilevel-fast-multipole-algorithm-for-solving-combined-field"
---

# Rapid Solution of Integral Equations of Scattering Theory in Two Dimensions

## One-sentence takeaway

Rokhlin extends the 1985 potential-theory scheme to the 2D Helmholtz (wave) equation: FMM for oscillatory kernels, the start of high-frequency / MLFMM CEM.

## Problem

Laplace kernels decay. Helmholtz kernels oscillate; naive multipoles need p ~ kR terms and lose the O(N) constant at high frequency. Scattering BIE is the industrial target.

## Design

2D outgoing/incoming wave expansions and translation operators for the Hankel kernel. Hierarchical grouping still applies; the expansion order now tracks wavenumber times box radius. JCP 86 (1990); a 1989 printing exists — same paper, do not remint.

## Evidence

J. Comput. Phys. 86(2):414–439, 1990, DOI 10.1016/0021-9991(90)90107-C. The 1989 DOI 10.1016/0021-9991(89)90191-5 is the same article's earlier appearance.

## Limitations

2D. 3D diagonal Helmholtz translations are Rokhlin 1993. MLFMA (Song–Chew 1995) is the multilevel CEM productization. Do not mint we-ran-MLFMM-on-a-new-antenna papers.

## Implications for Broadside

Broadside audio / wave GI is Helmholtz, not Laplace. If you ever BEM a wave, this is the 2D origin. Skip the IEEE AP-S application sludge.

## Bottom line

Mint Rokhlin 1990 as Helmholtz-FMM founding (2D).

## Links

- DOI: [10.1016/0021-9991(90)90107-C](https://doi.org/10.1016/0021-9991(90)90107-c)
