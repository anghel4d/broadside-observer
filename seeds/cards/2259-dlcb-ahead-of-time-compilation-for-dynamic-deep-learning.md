---
title: "DLCB: Ahead-of-Time Compilation for Dynamic Deep Learning"
authors:
  - "Alexander Collins"
  - "Bin Fan"
  - "Evghenii Gaburov"
  - "William Brandon"
  - "Sean Lee"
  - "Hanfeng Chen"
  - "Vinod Grover"
year: 2026
venue: "arXiv"
arxiv: "2610.10547"
doi: null
source: "https://arxiv.org/abs/2610.10547"
topics:
  - "compilers"
  - "ml-infra"
seed_rank: 2259
seed_batch: "frontier-2026-10-10"
reviewed: "2026-10-10"
pool: "languages"
relevance_score: 7
cites:
  - title: "DLCB: Ahead-of-Time Compilation for Dynamic Deep Learning"
    url: "https://arxiv.org/abs/2610.10547"
    year: 2026
    arxiv: "2610.10547"
    doi: null
see: []
---

# DLCB: Ahead-of-Time Compilation for Dynamic Deep Learning

## One-sentence takeaway

A PyTorch-embedded compiler that emits static CUDA kernels for fixed shapes, AOT kernels parameterised by solver-reduced shape constraints for known-rank dynamic shapes, and falls back to JIT only for unknown rank.

## Why it matters here

Shape-constraint solving to split constants from launch-time parameters is the same staging problem ano faces with array ranks and extents; a clean tiered design worth borrowing for inference serving too.

## Key ideas

- **Tier 1.** Fully static shapes give static CUDA C++ kernels ahead of time.
- **Tier 2.** Known rank, dynamic sizes: build shape constraints, solve them into hard-coded constants or kernel parameters, with interpreted host code that checks constraints and computes launch values.
- **Tier 3.** Unknown rank falls back to runtime JIT.
- **Generalisation pass.** Automatically widens shapes so supported PyTorch subsets compile once and run across a range.

## Caveats

Covers supported subsets of PyTorch only; performance claims need the full paper. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.10547
- PDF: https://arxiv.org/pdf/2610.10547
