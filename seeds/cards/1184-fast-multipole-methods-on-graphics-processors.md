---
title: "Fast Multipole Methods on Graphics Processors"
authors:
  - "Nail A. Gumerov"
  - "Ramani Duraiswami"
year: 2008
venue: "Journal of Computational Physics"
arxiv: null
doi: "10.1016/j.jcp.2008.05.023"
source: "https://doi.org/10.1016/j.jcp.2008.05.023"
topics:
  - "fmm"
  - "gpu"
  - "gumerov-duraiswami"
  - "laplace"
seed_rank: 1184
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 9
lineage: fast-multipole
cites:
  - title: "A Fast Algorithm for Particle Simulations"
    url: "https://doi.org/10.1016/0021-9991(87)90140-9"
    year: 1987
    arxiv: null
    doi: "10.1016/0021-9991(87)90140-9"
  - title: "Recursions for the Computation of Multipole Translation and Rotation Coefficients for the 3-D Helmholtz Equation"
    url: "https://doi.org/10.1137/s1064827501399705"
    year: 2004
    arxiv: null
    doi: "10.1137/s1064827501399705"
  - title: "An FMM Based on Dual Tree Traversal for Many-Core Architectures"
    url: "https://arxiv.org/abs/1209.3516"
    year: 2013
    arxiv: "1209.3516"
    doi: "10.1260/1748-3018.7.3.301"
see:
  - "1178-recursions-for-the-computation-of-multipole-translation-and-rot"
  - "1186-an-fmm-based-on-dual-tree-traversal-for-many-core-architectures"
  - "1166-a-fast-algorithm-for-particle-simulations"
---

# Fast Multipole Methods on Graphics Processors

## One-sentence takeaway

Founding GPU FMM: map the Laplace FMM (real polynomial basis, modified stencils, factored translators) onto a 2008-era GPU and get 30–60× vs a serial CPU FMM.

## Problem

FMM's adaptive tree and irregular interaction lists are a hostile fit for data-parallel GPUs. A just-write-P2P-in-CUDA n-body demo is O(N²) and does not scale; a real FMM needed a parallelization strategy per operator.

## Design

Strategies for P2M/M2M/M2L/L2L/P2P on GeForce 8800 GTX. Real polynomial basis for Laplace (not complex spherical harmonics), modified interaction stencils, translator decompositions. Model for when GPU FMM wins. About 1 s for a million Laplace sources.

## Evidence

J. Comput. Phys. 227(18):8290–8313, 10 September 2008, DOI 10.1016/j.jcp.2008.05.023. Author PDF: https://www.cs.utexas.edu/~pingali/CS378/2008sp/papers/Gumerov.pdf

## Limitations

2008 CUDA, Laplace, single GPU. Later ExaFMM / PVFMM / TBFMM are the many-core and distributed descendants. Not a graphics-GI paper.

## Implications for Broadside

Anoptic is GPU-first. This is the paper that says FMM is a GPU algorithm, not a CPU tree walk. Yokota 2013 is the dual-tree many-core follow-through.

## Bottom line

Mint Gumerov–Duraiswami 2008 as GPU-FMM founding.

## Links

- DOI: [10.1016/j.jcp.2008.05.023](https://doi.org/10.1016/j.jcp.2008.05.023)
- Author PDF: https://www.cs.utexas.edu/~pingali/CS378/2008sp/papers/Gumerov.pdf
