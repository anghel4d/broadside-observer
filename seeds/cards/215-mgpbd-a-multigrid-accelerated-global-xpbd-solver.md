---
title: "MGPBD: A Multigrid Accelerated Global XPBD Solver"
authors:
  - "Chunlei Li"
  - "Peng Yu"
  - "Tiantian Liu"
  - "Siyuan Yu"
  - "Yuting Xiao"
  - "Shuai Li"
  - "Aimin Hao"
  - "Yang Gao"
  - "Qinping Zhao"
year: 2025
venue: "SIGGRAPH 2025"
arxiv: "2505.13390"
doi: "10.1145/3721238.3730720"
source: "https://arxiv.org/abs/2505.13390"
topics:
  - physics
seed_rank: 215
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
cites:
  - title: "Position based dynamics"
    url: "https://doi.org/10.1016/j.jvcir.2007.01.005"
    year: 2007
    arxiv: null
    doi: "10.1016/j.jvcir.2007.01.005"
  - title: "XPBD: Position-Based Simulation of Compliant Constrained Dynamics"
    url: "https://doi.org/10.1145/2994258.2994272"
    year: 2016
    arxiv: null
    doi: "10.1145/2994258.2994272"
  - title: "Projective Dynamics: Fusing Constraint Projections for Fast Simulation"
    url: "https://doi.org/10.1145/2601097.2601116"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601116"
  - title: "Vertex Block Descent"
    url: "https://doi.org/10.1145/3658179"
    year: 2024
    arxiv: null
    doi: "10.1145/3658179"
  - title: "A Multi-layer Solver for XPBD"
    url: "https://doi.org/10.1111/cgf.15186"
    year: 2024
    arxiv: null
    doi: "10.1111/cgf.15186"
see:
  - "287-position-based-dynamics"
  - "264-xpbd-position-based-simulation-of-compliant-constrained-dyna"
---

# MGPBD: A Multigrid Accelerated Global XPBD Solver

## One-sentence takeaway

Unsmoothed-aggregation AMG plus PCG replaces XPBD's nonlinear Gauss–Seidel so high-resolution, high-stiffness cloth and soft bodies stop stalling on low-frequency error.

## Why it matters here

Anoptic's XPBD/PBD path for destructibles and characters needs a global solve that still fits a frame; lazy prolongators are the practical trick that keeps AMG from eating the budget.

## Key ideas

- XPBD's GS iteration damps high-frequency error but leaves global stretching modes, which blow up at high stiffness or mesh density.
- A lazy AMG setup reuses prolongators across iterations when the matrix graph is unchanged, avoiding the typical two-thirds-of-runtime setup tax.
- Near-kernel components are built with a few sweeps on the homogeneous equation instead of a full adaptive smoothed-aggregation pass.
- Combined with PCG, the method reports better convergence and numerical stability on high-resolution deformables.
- Published at SIGGRAPH 2025 (doi 10.1145/3721238.3730720).

## Caveats

## Links

- arXiv: [2505.13390](https://arxiv.org/abs/2505.13390)
- DOI: [10.1145/3721238.3730720](https://doi.org/10.1145/3721238.3730720)
- PDF: https://arxiv.org/pdf/2505.13390
