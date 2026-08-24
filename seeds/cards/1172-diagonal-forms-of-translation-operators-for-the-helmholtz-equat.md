---
title: "Diagonal Forms of Translation Operators for the Helmholtz Equation in Three Dimensions"
authors:
  - "Vladimir Rokhlin"
year: 1993
venue: "Applied and Computational Harmonic Analysis"
arxiv: null
doi: "10.1006/acha.1993.1006"
source: "https://doi.org/10.1006/acha.1993.1006"
topics:
  - "fmm"
  - "helmholtz"
  - "diagonal-translation"
  - "mlfmm"
seed_rank: 1172
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: fast-multipole
cites:
  - title: "Rapid Solution of Integral Equations of Scattering Theory in Two Dimensions"
    url: "https://doi.org/10.1016/0021-9991(90)90107-c"
    year: 1990
    arxiv: null
    doi: "10.1016/0021-9991(90)90107-c"
  - title: "The Fast Multipole Method for the Wave Equation: A Pedestrian Prescription"
    url: "https://doi.org/10.1109/74.250128"
    year: 1993
    arxiv: null
    doi: "10.1109/74.250128"
  - title: "Multilevel Fast-Multipole Algorithm for Solving Combined Field Integral Equations of Electromagnetic Scattering"
    url: "https://doi.org/10.1002/mop.4650100107"
    year: 1995
    arxiv: null
    doi: "10.1002/mop.4650100107"
see:
  - "1171-rapid-solution-of-integral-equations-of-scattering-theory-in-tw"
  - "1169-a-new-version-of-the-fast-multipole-method-for-the-laplace-equa"
  - "1173-the-fast-multipole-method-for-the-wave-equation-a-pedestrian-pr"
  - "1175-the-fast-multipole-method-numerical-implementation"
---

# Diagonal Forms of Translation Operators for the Helmholtz Equation in Three Dimensions

## One-sentence takeaway

The 3D Helmholtz M2L can be diagonalized in a plane-wave basis — the analytic fact that makes multilevel FMM (MLFMM/MLFMA) O(N log N) rather than O(N^{3/2}) at high frequency.

## Problem

3D Helmholtz translations in spherical harmonics are dense and expensive (p ~ kR). Without a diagonal form, high-frequency scattering FMM does not beat a good iterative BIE.

## Design

Re-expand outgoing spherical waves as a far-field signature (propagating plane waves), multiply by a diagonal translator, and re-expand into incoming waves. This is the operator Chew's MLFMA and Darve's implementation sit on. 1992 Yale/ADA tech report is the preprint — do not remint.

## Evidence

Appl. Comput. Harmon. Anal. 1(1):82–93, December 1993, DOI 10.1006/acha.1993.1006.

## Limitations

Propagating-wave diagonalization has a well-known high-frequency instability / truncation story; later work (wideband FMM, Darve) repairs the evanescent part. Not a complete solver — operators only.

## Implications for Broadside

Any Broadside wave BEM that wants FMM acceleration cites this for the M2L, then Song–Chew or Darve for the algorithm. Not a gravity paper.

## Bottom line

Mint Rokhlin 1993 diagonal Helmholtz translators.

## Links

- DOI: [10.1006/acha.1993.1006](https://doi.org/10.1006/acha.1993.1006)
