---
title: "kifmm-rs: A Kernel-Independent Fast Multipole Framework in Rust"
authors:
  - "Srinath Kailasa"
year: 2025
venue: "Journal of Open Source Software"
arxiv: null
doi: "10.21105/joss.07124"
source: "https://doi.org/10.21105/joss.07124"
topics:
  - "kifmm-rs"
  - "kifmm"
  - "software"
  - "rust"
  - "wip"
seed_rank: 1188
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 8
lineage: fast-multipole
cites:
  - title: "A Kernel-Independent Adaptive Fast Multipole Algorithm in Two and Three Dimensions"
    url: "https://doi.org/10.1016/j.jcp.2003.11.021"
    year: 2004
    arxiv: null
    doi: "10.1016/j.jcp.2003.11.021"
  - title: "PVFMM: A Parallel Kernel Independent FMM for Particle and Volume Potentials"
    url: "https://doi.org/10.4208/cicp.020215.150515sw"
    year: 2015
    arxiv: null
    doi: "10.4208/cicp.020215.150515sw"
  - title: "M2L Translation Operators for Kernel-Independent Fast Multipole Methods on Modern Architectures"
    url: "https://doi.org/10.1145/3820372"
    year: 2026
    arxiv: null
    doi: "10.1145/3820372"
see:
  - "1176-a-kernel-independent-adaptive-fast-multipole-algorithm-in-two-a"
  - "1185-pvfmm-a-parallel-kernel-independent-fmm-for-particle-and-volume"
  - "1187-tbfmm-a-c-generic-and-parallel-fast-multipole-method-library"
---

# kifmm-rs: A Kernel-Independent Fast Multipole Framework in Rust

## One-sentence takeaway

kifmm-rs is the 2024-submitted / 2025-published JOSS Rust kiFMM (Bempp): modular tree, BLAS- and FFT-based M2L, Laplace and Helmholtz kernels in 3D.

## Problem

PVFMM is C++/MPI. A Rust engine (ano) wants a kiFMM that is a crate, not a foreign HPC library. User named kifmm-rs JOSS 2024 — submitted 13 Aug 2024, published 24 June 2025.

## Design

Framework split as tree (shared + distributed), field translations (BLAS + randomized SVD, or FFT), and kernel eval (green-kernels). Implements Ying–Biros–Zorin kiFMM for Laplace and Helmholtz. Builder-pattern API. The 2026 M2L paper (10.1145/3820372) is a follow-on on translation operators — cite, do not remint this cycle.

## Evidence

JOSS 10(110):7124, 24 June 2025, DOI 10.21105/joss.07124. Code: https://github.com/bempp/kifmm

## Limitations

Software paper. kiFMM, not a new analytic expansion. Helmholtz support is kernel-eval, not a full wideband theory.

## Implications for Broadside

The FMM crate Broadside would actually depend on. Tag software / wip.

## Bottom line

Mint Kailasa 2025 kifmm-rs (JOSS). User said 2024; venue year is 2025.

## Links

- DOI: [10.21105/joss.07124](https://doi.org/10.21105/joss.07124)
- JOSS: https://joss.theoj.org/papers/10.21105/joss.07124
- Code: https://github.com/bempp/kifmm
