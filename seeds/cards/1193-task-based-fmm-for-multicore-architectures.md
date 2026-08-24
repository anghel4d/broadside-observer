---
title: "Task-Based FMM for Multicore Architectures"
authors:
  - "Emmanuel Agullo"
  - "Bérenger Bramas"
  - "Olivier Coulaud"
  - "Eric Darve"
  - "Matthias Messner"
  - "Toru Takahashi"
year: 2014
venue: "SIAM Journal on Scientific Computing"
arxiv: null
doi: "10.1137/130915662"
source: "https://doi.org/10.1137/130915662"
topics:
  - "scalfmm"
  - "fmm"
  - "task-based"
  - "starpu"
  - "software"
seed_rank: 1193
seed_batch: "fmm-leftovers-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 9
lineage: fast-multipole
cites:
  - title: "The Black-Box Fast Multipole Method"
    url: "https://doi.org/10.1016/j.jcp.2009.08.031"
    year: 2009
    arxiv: null
    doi: "10.1016/j.jcp.2009.08.031"
  - title: "An FMM Based on Dual Tree Traversal for Many-Core Architectures"
    url: "https://arxiv.org/abs/1209.3516"
    year: 2013
    arxiv: "1209.3516"
    doi: "10.1260/1748-3018.7.3.301"
  - title: "TBFMM: A C++ Generic and Parallel Fast Multipole Method Library"
    url: "https://doi.org/10.21105/joss.02444"
    year: 2020
    arxiv: null
    doi: "10.21105/joss.02444"
  - title: "PVFMM: A Parallel Kernel Independent FMM for Particle and Volume Potentials"
    url: "https://doi.org/10.4208/cicp.020215.150515sw"
    year: 2015
    arxiv: null
    doi: "10.4208/cicp.020215.150515sw"
see:
  - "1177-the-black-box-fast-multipole-method"
  - "1186-an-fmm-based-on-dual-tree-traversal-for-many-core-architectures"
  - "1187-tbfmm-a-c-generic-and-parallel-fast-multipole-method-library"
  - "1185-pvfmm-a-parallel-kernel-independent-fmm-for-particle-and-volume"
  - "1188-kifmm-rs-a-kernel-independent-fast-multipole-framework-in-rust"
---

# Task-Based FMM for Multicore Architectures

## One-sentence takeaway

The venue paper for INRIA ScalFMM: express FMM as a StarPU task flow (not fork-join OpenMP), schedule it on multicore, and compute 200M particles in 42.3s on a 160-core SGI Altix UV 100.

## Problem

The previous FMM ingest rejected ScalFMM as 'no venue paper'. The library is real (Coulaud / Blanchard / Bramas / Darve, INRIA HIEPACS): interpolation (Chebyshev / Lagrange) plus classical spherical-harmonics plus Darve black-box kernels, OpenMP+MPI+StarPU. TBFMM 1187 is the later JOSS rewrite and said so. The paper that actually exists is this SISC article — the task-based parallelization of that library — plus INRIA RR-8277 (March 2013, HAL-00807368).

## Design

FMM operators (P2M / M2M / M2L / L2L / L2P / P2P) become tasks. Compare simple fork-join, blocked fork-join, interleaved near/far, and a StarPU task-flow. The task-flow wins portability: the runtime owns the schedule. Chebyshev / black-box kernels (Fong–Darve 2009, 1177) sit under the octree. Code: gitlab.inria.fr/solverstack/ScalFMM (docs at solverstack.gitlabpages.inria.fr/scalfmm). Older gforge package is the same line.

## Evidence

SIAM J. Sci. Comput. 36(1):C66–C93, 2014 (online 25 Feb 2014), DOI 10.1137/130915662. Tech-report twin: Agullo–Bramas–Coulaud–Darve–Messner–Takahashi, INRIA RR-8277, March 2013, HAL-00807368 (48.7s on the same machine; journal tightened the number). TBFMM JOSS 2020 names ScalFMM as the previous 170k-LOC project and cites this paper. A named talk, 'ScalFMM: A Generic Parallel Fast Multipole Library' (SIAM CSE 2015), is a talk, not a second paper.

## Limitations

This is a parallelization / library paper, not a new expansion. Uniform octree, shared-memory multicore in the 2014 article; distributed MPI+task is the 2017 RR-8970 follow-up (cite, do not remint). HAL pages are Anubis-gated; DOI and GitLab are the durable pointers. Do not remint TBFMM 1187.

## Implications for Broadside

ScalFMM is the INRIA FMM you vendor if you want interpolation + StarPU + MPI. TBFMM 1187 is the slimmer C++17 descendant (any-D, header-only). kifmm-rs 1188 is the Rust kiFMM. The leftover is closed: there was a venue paper.

## Bottom line

Mint Agullo et al. 2014 SISC as the ScalFMM artifact. Cite RR-8277 and the GitLab repo. Do not remint TBFMM.

## Links

- DOI: [10.1137/130915662](https://doi.org/10.1137/130915662)
- HAL RR-8277: https://inria.hal.science/hal-00807368
- Code: https://gitlab.inria.fr/solverstack/ScalFMM
- Docs: https://solverstack.gitlabpages.inria.fr/scalfmm
