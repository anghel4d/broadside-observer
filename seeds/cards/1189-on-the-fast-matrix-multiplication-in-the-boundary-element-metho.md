---
title: "On the Fast Matrix Multiplication in the Boundary Element Method by Panel Clustering"
authors:
  - "Wolfgang Hackbusch"
  - "Zenon P. Nowak"
year: 1989
venue: "Numerische Mathematik"
arxiv: null
doi: "10.1007/bf01396324"
source: "https://doi.org/10.1007/bf01396324"
topics:
  - "h-matrices"
  - "panel-clustering"
  - "bem"
  - "hackbusch"
seed_rank: 1189
seed_batch: "fmm-leftovers-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 9
lineage: h-matrices
cites:
  - title: "Rapid Solution of Integral Equations of Classical Potential Theory"
    url: "https://doi.org/10.1016/0021-9991(85)90002-6"
    year: 1985
    arxiv: null
    doi: "10.1016/0021-9991(85)90002-6"
  - title: "A Fast Algorithm for Particle Simulations"
    url: "https://doi.org/10.1016/0021-9991(87)90140-9"
    year: 1987
    arxiv: null
    doi: "10.1016/0021-9991(87)90140-9"
  - title: "A Sparse Matrix Arithmetic Based on H-Matrices. Part I: Introduction to H-Matrices"
    url: "https://doi.org/10.1007/s006070050015"
    year: 1999
    arxiv: null
    doi: "10.1007/s006070050015"
see:
  - "1163-rapid-solution-of-integral-equations-of-classical-potential-the"
  - "1166-a-fast-algorithm-for-particle-simulations"
  - "1190-a-sparse-matrix-arithmetic-based-on-h-matrices-part-i-introduct"
  - "1191-data-sparse-approximation-by-adaptive-h2-matrices"
---

# On the Fast Matrix Multiplication in the Boundary Element Method by Panel Clustering

## One-sentence takeaway

Panel clustering is the 1989 geometric ancestor of H-matrices: cluster BEM panels, replace far blocks by degenerate kernel expansions, and turn a dense BEM matvec into a cheap hierarchical one.

## Problem

BEM discretizations of integral operators are dense N×N. Forming, storing, and multiplying by the matrix is O(N²). FEM is sparse; BEM was not. Rokhlin 1985 (1163) had analytic expansions for 2D potential theory; nobody had packaged cluster-of-panels as a general BEM matrix arithmetic.

## Design

Partition the boundary into a hierarchy of panels. A pair of clusters that are well-separated is replaced by a low-rank (degenerate) expansion of the kernel — the same far-field idea as multipoles, written as a matrix block. Near-field blocks stay dense. The approximate matvec and the storage both drop far below N². This is the geometric clustering H-matrices later algebraize (admissibility + Rk blocks).

## Evidence

Numer. Math. 54(4):463–491, July 1989, DOI 10.1007/bf01396324. Every H-matrix survey (Hackbusch 1999, BGH 2003) names this as the BEM precursor. MPI/ETH lecture notes treat panel clustering and H-matrices as one thread.

## Limitations

Analytic kernel expansions, not an algebraic matrix format. No formatted addition / multiplication / inversion — that is Hackbusch 1999. 1989 BEM, not a graphics paper. Do not dump every later panel-clustering implementation.

## Implications for Broadside

If Anoptic wants a BEM / diffusion-curve / Laplace solver with a stealable clustering story, start here for the geometry, then read Hackbusch 1999 for the algebra you can invert and factor. FMM (1166) is the analytic twin; this is the BEM twin.

## Bottom line

Mint panel clustering as the H-matrix ancestor. The 1999 paper is the founding format.

## Links

- DOI: [10.1007/bf01396324](https://doi.org/10.1007/bf01396324)
