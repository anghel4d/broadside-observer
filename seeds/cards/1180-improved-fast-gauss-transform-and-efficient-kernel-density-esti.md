---
title: "Improved Fast Gauss Transform and Efficient Kernel Density Estimation"
authors:
  - "Changjiang Yang"
  - "Ramani Duraiswami"
  - "Nail A. Gumerov"
  - "Larry S. Davis"
year: 2003
venue: "ICCV"
arxiv: null
doi: "10.1109/iccv.2003.1238383"
source: "https://doi.org/10.1109/iccv.2003.1238383"
topics:
  - "ifgt"
  - "fast-gauss"
  - "kernel-density"
  - "gumerov-duraiswami"
seed_rank: 1180
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 9
lineage: fast-multipole
cites:
  - title: "The Fast Gauss Transform"
    url: "https://doi.org/10.1137/0912004"
    year: 1991
    arxiv: null
    doi: "10.1137/0912004"
  - title: "Recursions for the Computation of Multipole Translation and Rotation Coefficients for the 3-D Helmholtz Equation"
    url: "https://doi.org/10.1137/s1064827501399705"
    year: 2004
    arxiv: null
    doi: "10.1137/s1064827501399705"
see:
  - "1179-the-fast-gauss-transform"
  - "1178-recursions-for-the-computation-of-multipole-translation-and-rot"
---

# Improved Fast Gauss Transform and Efficient Kernel Density Estimation

## One-sentence takeaway

IFGT: the FGT successor that actually gets used — farthest-point clustering, a truncated Hermite expansion with a tighter error bound, and KDE as the killer app.

## Problem

Original FGT constants are painful in 3D+ and at the bandwidths vision/KDE want. A computer-vision group needed a drop-in Gaussian KDE that beat naive and naive-tree.

## Design

Farthest-point clustering of sources (not a uniform box tree), plus a reorganized Hermite expansion with a practical truncation. Demonstrated on kernel density estimation. Later Raykar–Duraiswami 2007 chapter is a follow-on — cite, do not remint.

## Evidence

Proc. Ninth IEEE ICCV, 2003, pp. 464–471, DOI 10.1109/ICCV.2003.1238383.

## Limitations

Still Gaussian. High dimension eventually loses to Monte Carlo / random features. Not a Laplace FMM.

## Implications for Broadside

If Broadside does Gaussian KDE, influence maps, or heat-kernel GI, start with IFGT, not 1991 FGT. Same Gumerov–Duraiswami line as the Helmholtz/GPU cards.

## Bottom line

Mint Yang–Duraiswami–Gumerov–Davis 2003 as the FGT successor.

## Links

- DOI: [10.1109/ICCV.2003.1238383](https://doi.org/10.1109/iccv.2003.1238383)
