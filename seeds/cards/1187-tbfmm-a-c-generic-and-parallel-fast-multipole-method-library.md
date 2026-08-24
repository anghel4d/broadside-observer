---
title: "TBFMM: A C++ Generic and Parallel Fast Multipole Method Library"
authors:
  - "Berenger Bramas"
year: 2020
venue: "Journal of Open Source Software"
arxiv: null
doi: "10.21105/joss.02444"
source: "https://doi.org/10.21105/joss.02444"
topics:
  - "tbfmm"
  - "software"
  - "task-based"
  - "fmm"
  - "wip"
seed_rank: 1187
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 8
lineage: fast-multipole
cites:
  - title: "An FMM Based on Dual Tree Traversal for Many-Core Architectures"
    url: "https://arxiv.org/abs/1209.3516"
    year: 2013
    arxiv: "1209.3516"
    doi: "10.1260/1748-3018.7.3.301"
  - title: "PVFMM: A Parallel Kernel Independent FMM for Particle and Volume Potentials"
    url: "https://doi.org/10.4208/cicp.020215.150515sw"
    year: 2015
    arxiv: null
    doi: "10.4208/cicp.020215.150515sw"
see:
  - "1186-an-fmm-based-on-dual-tree-traversal-for-many-core-architectures"
  - "1185-pvfmm-a-parallel-kernel-independent-fmm-for-particle-and-volume"
  - "1188-kifmm-rs-a-kernel-independent-fast-multipole-framework-in-rust"
---

# TBFMM: A C++ Generic and Parallel Fast Multipole Method Library

## One-sentence takeaway

TBFMM is the JOSS-quality task-based C++17 FMM library (OpenMP / StarPU, group-tree / block-tree) — ScalFMM's citable descendant when ScalFMM itself has no venue paper.

## Problem

INRIA ScalFMM is a well-known generic FMM library without a clean journal/JOSS article this cycle (rejected as unsourced). TBFMM is the task-based rewrite that does have a paper.

## Design

Header-only C++17 FMM with template kernels, group/block tree for task parallelism, OpenMP and StarPU (CUDA multi-GPU). Users supply P2P/M2L kernels; the library owns the tree and the schedule. JOSS 5(56):2444.

## Evidence

JOSS 5(56):2444, 3 December 2020, DOI 10.21105/joss.02444. Code: https://github.com/berenger-eu/tbfmm

## Limitations

Software paper. Not a new expansion. Single-node-oriented (StarPU can do more).

## Implications for Broadside

If ano wants a modern C++ FMM to vendor, TBFMM is the citable one. ScalFMM stays a DIGEST pointer, not a ghost card.

## Bottom line

Mint Bramas 2020 TBFMM. ScalFMM has no sourced paper — do not mint.

## Links

- DOI: [10.21105/joss.02444](https://doi.org/10.21105/joss.02444)
- JOSS: https://joss.theoj.org/papers/10.21105/joss.02444
- Code: https://github.com/berenger-eu/tbfmm
