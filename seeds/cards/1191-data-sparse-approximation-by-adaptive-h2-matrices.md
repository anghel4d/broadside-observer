---
title: "Data-sparse Approximation by Adaptive H2-Matrices"
authors:
  - "Wolfgang Hackbusch"
  - "Steffen Börm"
year: 2002
venue: "Computing"
arxiv: null
doi: "10.1007/s00607-002-1450-4"
source: "https://doi.org/10.1007/s00607-002-1450-4"
topics:
  - "h-matrices"
  - "h2-matrices"
  - "nested-bases"
  - "hackbusch"
  - "boerm"
seed_rank: 1191
seed_batch: "fmm-leftovers-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: h-matrices
cites:
  - title: "A Sparse Matrix Arithmetic Based on H-Matrices. Part I: Introduction to H-Matrices"
    url: "https://doi.org/10.1007/s006070050015"
    year: 1999
    arxiv: null
    doi: "10.1007/s006070050015"
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
  - title: "Introduction to Hierarchical Matrices with Applications"
    url: "https://doi.org/10.1016/s0955-7997(02)00152-2"
    year: 2003
    arxiv: null
    doi: "10.1016/s0955-7997(02)00152-2"
see:
  - "1190-a-sparse-matrix-arithmetic-based-on-h-matrices-part-i-introduct"
  - "1189-on-the-fast-matrix-multiplication-in-the-boundary-element-metho"
  - "1166-a-fast-algorithm-for-particle-simulations"
  - "1192-introduction-to-hierarchical-matrices-with-applications"
---

# Data-sparse Approximation by Adaptive H2-Matrices

## One-sentence takeaway

H2-matrices are the nested-basis refinement of H-matrices — FMM's algebraic twin — with linear (not N log N) storage and matvec, plus an adaptive algorithm that builds the format from a general matrix.

## Problem

H-matrices (1190) store each admissible block's basis independently, so storage and matvec are O(N k log N). FMM already reuses child bases via M2M / L2L. The algebraic format that does the same, and a way to compute it adaptively without a closed-form kernel expansion, was the missing piece.

## Design

H2 uses nested cluster bases: a parent's basis is assembled from its children's (the M2M/L2L analogue). Admissible blocks become coupling matrices between those bases, not fresh Rk factors. Complexity drops to O(N k). The paper gives an adaptive procedure that takes a general matrix (or matvec) and produces an H2 approximation — the algebraic cousin of kernel-independent FMM. MPI MIS preprint 86/2001 is the tech-report twin.

## Evidence

Computing 69(1):1–35, September 2002, DOI 10.1007/s00607-002-1450-4. First named in Hackbusch–Khoromskij–Sauter, 'On H2-matrices' (Lectures on Applied Mathematics, 2000) — cited, not reminted. BGH 2003 reviews both formats.

## Limitations

Nested bases are more bookkeeping than plain H. Adaptive construction is algebraic, not a graphics algorithm. Do not dump H2 FEM / control-theory applications. HSS / HODLR / HBS are weak-admissibility cousins, not this paper.

## Implications for Broadside

If you already think in FMM translations, H2 is the format you actually want for a factorable kernel matrix. H (1190) is the simpler arithmetic; H2 is the linear-complexity one. kiFMM / bbFMM (1176, 1177) are the analytic-kernel-independent twins.

## Bottom line

Mint Hackbusch–Börm 2002 as the H2 founding journal paper. The 2000 lecture-note naming stays a cite.

## Links

- DOI: [10.1007/s00607-002-1450-4](https://doi.org/10.1007/s00607-002-1450-4)
- MPI preprint 86/2001: https://www.mis.mpg.de/publications/preprint-repository/article/2001/issue-86
