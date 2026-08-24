---
title: "A Sparse Matrix Arithmetic Based on H-Matrices. Part I: Introduction to H-Matrices"
authors:
  - "Wolfgang Hackbusch"
year: 1999
venue: "Computing"
arxiv: null
doi: "10.1007/s006070050015"
source: "https://doi.org/10.1007/s006070050015"
topics:
  - "h-matrices"
  - "hackbusch"
  - "data-sparse"
  - "hierarchical-matrices"
seed_rank: 1190
seed_batch: "fmm-leftovers-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: h-matrices
cites:
  - title: "On the Fast Matrix Multiplication in the Boundary Element Method by Panel Clustering"
    url: "https://doi.org/10.1007/bf01396324"
    year: 1989
    arxiv: null
    doi: "10.1007/bf01396324"
  - title: "A Fast Algorithm for Particle Simulations"
    url: "https://doi.org/10.1016/0021-9991(87)90140-9"
    year: 1987
    arxiv: null
    doi: "10.1016/0021-9991(87)90140-9"
  - title: "Data-sparse Approximation by Adaptive H2-Matrices"
    url: "https://doi.org/10.1007/s00607-002-1450-4"
    year: 2002
    arxiv: null
    doi: "10.1007/s00607-002-1450-4"
  - title: "Introduction to Hierarchical Matrices with Applications"
    url: "https://doi.org/10.1016/s0955-7997(02)00152-2"
    year: 2003
    arxiv: null
    doi: "10.1016/s0955-7997(02)00152-2"
see:
  - "1189-on-the-fast-matrix-multiplication-in-the-boundary-element-metho"
  - "1166-a-fast-algorithm-for-particle-simulations"
  - "1191-data-sparse-approximation-by-adaptive-h2-matrices"
  - "1192-introduction-to-hierarchical-matrices-with-applications"
---

# A Sparse Matrix Arithmetic Based on H-Matrices. Part I: Introduction to H-Matrices

## One-sentence takeaway

THE founding H-matrix paper: a data-sparse format for nonlocal operators whose matvec, truncated sum/product, and inverse are almost linear — the algebraic counterpart of FMM and panel clustering.

## Problem

FMM and panel clustering give you a fast matvec for a specific kernel. They do not give you a matrix you can add, multiply, and invert while staying cheap. Dense BEM/FEM-inverse blocks are N² to store. A format that is sparse in representation and closed (after truncation) under arithmetic did not exist.

## Design

An H-matrix is a block tree: admissible (well-separated) blocks are rank-k factorizations R = ABᵀ; inadmissible leaves are dense. Two concrete formats: a minimal one that exactly inverts tridiagonals, and one that approximates discrete integral operators. Matvec is almost linear. Sums and products leave the set, but truncation back to the H-format is again almost linear; same for the inverse. Admissibility is geometric (cluster trees + η).

## Evidence

Computing 62(2):89–108, April 1999, DOI 10.1007/s006070050015. Part II (Hackbusch–Khoromskij, Computing 64:21–47, 2000) does multi-d; do not remint it. Every later H / H2 / HSS / HODLR paper cites this as the introduction.

## Limitations

O(N k log N) storage, not O(N k) — nested bases and H2 (1191) drop the log. Construction from a kernel still wants analytic or ACA interpolation; this paper is the format, not a black-box compressor. Not a graphics paper.

## Implications for Broadside

This is the sibling family the FMM ingest refused. If Anoptic ever wants a factorable, invertible hierarchical kernel matrix (not just a matvec), this is the paper, not Greengard–Rokhlin. See FMM 1166; do not remint every H-matrix FEM preconditioner.

## Bottom line

Mint Hackbusch 1999 as the H-matrix origin. Part II and the preconditioner applications stay DIGEST.

## Links

- DOI: [10.1007/s006070050015](https://doi.org/10.1007/s006070050015)
