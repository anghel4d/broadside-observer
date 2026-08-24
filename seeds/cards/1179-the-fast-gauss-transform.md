---
title: "The Fast Gauss Transform"
authors:
  - "Leslie Greengard"
  - "John Strain"
year: 1991
venue: "SIAM Journal on Scientific and Statistical Computing"
arxiv: null
doi: "10.1137/0912004"
source: "https://doi.org/10.1137/0912004"
topics:
  - "fast-gauss"
  - "fgt"
  - "greengard-strain"
  - "rbf"
seed_rank: 1179
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: fast-multipole
cites:
  - title: "A Fast Algorithm for Particle Simulations"
    url: "https://doi.org/10.1016/0021-9991(87)90140-9"
    year: 1987
    arxiv: null
    doi: "10.1016/0021-9991(87)90140-9"
  - title: "Improved Fast Gauss Transform and Efficient Kernel Density Estimation"
    url: "https://doi.org/10.1109/iccv.2003.1238383"
    year: 2003
    arxiv: null
    doi: "10.1109/iccv.2003.1238383"
see:
  - "1166-a-fast-algorithm-for-particle-simulations"
  - "1180-improved-fast-gauss-transform-and-efficient-kernel-density-esti"
  - "1181-a-short-course-on-fast-multipole-methods"
---

# The Fast Gauss Transform

## One-sentence takeaway

Fast Gauss Transform: FMM-family far-field expansion for the Gaussian kernel — heat kernels, vortex blobs, and RBF sums in O(N) instead of O(N²).

## Problem

Summing N Gaussians at N targets is the heat-equation / vortex-method / KDE inner loop. The Gaussian is entire, not harmonic; Laplace multipoles do not apply, but a Hermite / Taylor factorization does.

## Design

Single-level (and multilevel) expansion of exp(-||x-y||²/δ) about box centers using Hermite polynomials (source) and Taylor (target). Well-separated boxes interact via the expansion; near field is direct. Error exponential in the number of terms for a given bandwidth. 1989 ADA tech report is the preprint — do not remint.

## Evidence

SIAM J. Sci. Stat. Comput. 12(1):79–94, 1991, DOI 10.1137/0912004. Beatson–Greengard short course treats FGT as the same family.

## Limitations

Fixed bandwidth; very small δ (narrow Gaussians) forces tiny boxes and the constant dies. Improved FGT (1180) and Greengard–Sun 1998 are the successors. Do not remint Greengard–Sun as a second origin.

## Implications for Broadside

Any Broadside heat blur, vortex blob, or RBF GI that looks like a Gaussian sum is this, not Laplace FMM. KDE people will quote IFGT (1180).

## Bottom line

Mint Greengard–Strain 1991 as FGT founding.

## Links

- DOI: [10.1137/0912004](https://doi.org/10.1137/0912004)
