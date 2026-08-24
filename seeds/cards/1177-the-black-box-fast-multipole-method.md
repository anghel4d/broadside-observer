---
title: "The Black-Box Fast Multipole Method"
authors:
  - "William Fong"
  - "Eric Darve"
year: 2009
venue: "Journal of Computational Physics"
arxiv: null
doi: "10.1016/j.jcp.2009.08.031"
source: "https://doi.org/10.1016/j.jcp.2009.08.031"
topics:
  - "bbfmm"
  - "black-box-fmm"
  - "chebyshev"
  - "kernel-independent"
seed_rank: 1177
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: fast-multipole
cites:
  - title: "A Kernel-Independent Adaptive Fast Multipole Algorithm in Two and Three Dimensions"
    url: "https://doi.org/10.1016/j.jcp.2003.11.021"
    year: 2004
    arxiv: null
    doi: "10.1016/j.jcp.2003.11.021"
  - title: "The Fast Multipole Method: Numerical Implementation"
    url: "https://doi.org/10.1006/jcph.2000.6451"
    year: 2000
    arxiv: null
    doi: "10.1006/jcph.2000.6451"
see:
  - "1176-a-kernel-independent-adaptive-fast-multipole-algorithm-in-two-a"
  - "1175-the-fast-multipole-method-numerical-implementation"
  - "1185-pvfmm-a-parallel-kernel-independent-fmm-for-particle-and-volume"
---

# The Black-Box Fast Multipole Method

## One-sentence takeaway

Black-box FMM: interpolate the kernel with Chebyshev polynomials on boxes so M2L is a precomputed operator. No equivalent-density solve, no analytic expansion — just K(x,y).

## Problem

kiFMM (1176) still solves a small integral equation per box. A give-me-K library wanted interpolation, not densities, and a trivial extension to new kernels (including some mildly oscillatory ones).

## Design

Chebyshev interpolation of sources and targets in each box. M2L becomes a (compressed) tensor applying the interpolated kernel between well-separated boxes. Same adaptive tree. Periodic / GPU follow-ons (PBBFMM, 2012 CUDA bbFMM) are implementations — no clean PBBFMM founding paper found this cycle; do not mint a ghost.

## Evidence

J. Comput. Phys. 228(23):8712–8725, 2009, DOI 10.1016/j.jcp.2009.08.031.

## Limitations

Interpolation order vs kiFMM rank: different constants. Highly oscillatory kernels still want analytic / wideband FMM. Not a gravity-specialized code.

## Implications for Broadside

bbFMM is the other kernel-independent door. Prefer kiFMM if you already have Ying/Biros code (PVFMM); prefer bbFMM if you want Chebyshev + GEMM and no surface densities.

## Bottom line

Mint Fong–Darve 2009. PBBFMM left unresolved (no sourced founding paper).

## Links

- DOI: [10.1016/j.jcp.2009.08.031](https://doi.org/10.1016/j.jcp.2009.08.031)
