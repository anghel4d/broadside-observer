---
title: "PVFMM: A Parallel Kernel Independent FMM for Particle and Volume Potentials"
authors:
  - "Dhairya Malhotra"
  - "George Biros"
year: 2015
venue: "Communications in Computational Physics"
arxiv: null
doi: "10.4208/cicp.020215.150515sw"
source: "https://doi.org/10.4208/cicp.020215.150515sw"
topics:
  - "pvfmm"
  - "kifmm"
  - "software"
  - "distributed-fmm"
seed_rank: 1185
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 9
lineage: fast-multipole
cites:
  - title: "A Kernel-Independent Adaptive Fast Multipole Algorithm in Two and Three Dimensions"
    url: "https://doi.org/10.1016/j.jcp.2003.11.021"
    year: 2004
    arxiv: null
    doi: "10.1016/j.jcp.2003.11.021"
  - title: "An FMM Based on Dual Tree Traversal for Many-Core Architectures"
    url: "https://arxiv.org/abs/1209.3516"
    year: 2013
    arxiv: "1209.3516"
    doi: "10.1260/1748-3018.7.3.301"
see:
  - "1176-a-kernel-independent-adaptive-fast-multipole-algorithm-in-two-a"
  - "1186-an-fmm-based-on-dual-tree-traversal-for-many-core-architectures"
  - "1188-kifmm-rs-a-kernel-independent-fast-multipole-framework-in-rust"
---

# PVFMM: A Parallel Kernel Independent FMM for Particle and Volume Potentials

## One-sentence takeaway

PVFMM is the distributed kiFMM paper: particle and volume potentials, parallel adaptive octree, the library the kiFMM line actually ships.

## Problem

Ying–Biros–Zorin 2004 is the algorithm. A scalable code for volume (grid) potentials plus particles, on distributed memory, needed its own paper — not a GitHub README.

## Design

Kernel-independent FMM (equivalent densities / BLAS-heavy M2L) on a parallel adaptive octree. Supports particle–particle, particle–volume, and volume–volume potentials for non-oscillatory kernels. Designed for the Biros group Stokes/electrostatics stack.

## Evidence

Commun. Comput. Phys. 18(3):808–830, 2015, DOI 10.4208/cicp.020215.150515sw. Software: https://github.com/dmalhotra/pvfmm

## Limitations

Implementation paper of kiFMM, not a new expansion theory. Helmholtz not the target. Requires the usual HPC stack.

## Implications for Broadside

If Broadside/ano ever vendors an FMM instead of rewriting Keyframe Codes, PVFMM is the kiFMM reference implementation. Tag software.

## Bottom line

Mint Malhotra–Biros 2015 as the PVFMM paper.

## Links

- DOI: [10.4208/cicp.020215.150515sw](https://doi.org/10.4208/cicp.020215.150515sw)
- Code: https://github.com/dmalhotra/pvfmm
