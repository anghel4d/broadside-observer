---
title: "A Kernel-Independent Adaptive Fast Multipole Algorithm in Two and Three Dimensions"
authors:
  - "Lexing Ying"
  - "George Biros"
  - "Denis Zorin"
year: 2004
venue: "Journal of Computational Physics"
arxiv: null
doi: "10.1016/j.jcp.2003.11.021"
source: "https://doi.org/10.1016/j.jcp.2003.11.021"
topics:
  - "kifmm"
  - "kernel-independent"
  - "fmm"
  - "equivalent-densities"
seed_rank: 1176
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: fast-multipole
cites:
  - title: "A Fast Adaptive Multipole Algorithm for Particle Simulations"
    url: "https://doi.org/10.1137/0909044"
    year: 1988
    arxiv: null
    doi: "10.1137/0909044"
  - title: "The Black-Box Fast Multipole Method"
    url: "https://doi.org/10.1016/j.jcp.2009.08.031"
    year: 2009
    arxiv: null
    doi: "10.1016/j.jcp.2009.08.031"
  - title: "PVFMM: A Parallel Kernel Independent FMM for Particle and Volume Potentials"
    url: "https://doi.org/10.4208/cicp.020215.150515sw"
    year: 2015
    arxiv: null
    doi: "10.4208/cicp.020215.150515sw"
see:
  - "1168-a-fast-adaptive-multipole-algorithm-for-particle-simulations"
  - "1177-the-black-box-fast-multipole-method"
  - "1185-pvfmm-a-parallel-kernel-independent-fmm-for-particle-and-volume"
  - "1188-kifmm-rs-a-kernel-independent-fast-multipole-framework-in-rust"
---

# A Kernel-Independent Adaptive Fast Multipole Algorithm in Two and Three Dimensions

## One-sentence takeaway

kiFMM: replace analytic multipoles by equivalent densities on a box surface, solved from kernel evaluations. One adaptive FMM for any non-oscillatory kernel you can evaluate.

## Problem

Classical FMM needs a new expansion per kernel (Laplace, Stokes, elasticity, Yukawa). A graphics/simulation code that swaps kernels cannot afford a new spherical-harmonic theory each time.

## Design

For each box, solve a small equivalent-density problem on a surrounding check/equivalent surface so the far field matches. M2M/M2L/L2L become dense BLAS on those samples (later compressed). Adaptive tree as in Carrier/Cheng. Works in 2D and 3D for non-oscillatory kernels given only K(x,y). Supercomputing 2003 parallel kiFMM is the same project — cite, do not remint.

## Evidence

J. Comput. Phys. 196(2):591–626, 20 May 2004, DOI 10.1016/j.jcp.2003.11.021. PVFMM and kifmm-rs implement this method.

## Limitations

Not for highly oscillatory Helmholtz (needs wideband / analytic expansions). Equivalent-surface setup cost is real. Black-box FMM (2009) interpolates the kernel instead of solving densities.

## Implications for Broadside

If Anoptic wants one FMM for gravity and a weird gameplay kernel, this is the algorithm. Rust port is kifmm-rs (1188).

## Bottom line

Mint Ying–Biros–Zorin 2004 as kiFMM founding.

## Links

- DOI: [10.1016/j.jcp.2003.11.021](https://doi.org/10.1016/j.jcp.2003.11.021)
