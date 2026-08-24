---
title: "Introduction to Hierarchical Matrices with Applications"
authors:
  - "Steffen Börm"
  - "Lars Grasedyck"
  - "Wolfgang Hackbusch"
year: 2003
venue: "Engineering Analysis with Boundary Elements"
arxiv: null
doi: "10.1016/s0955-7997(02)00152-2"
source: "https://doi.org/10.1016/s0955-7997(02)00152-2"
topics:
  - "h-matrices"
  - "h2-matrices"
  - "review"
  - "hackbusch"
  - "boerm"
seed_rank: 1192
seed_batch: "fmm-leftovers-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 9
lineage: h-matrices
cites:
  - title: "A Sparse Matrix Arithmetic Based on H-Matrices. Part I: Introduction to H-Matrices"
    url: "https://doi.org/10.1007/s006070050015"
    year: 1999
    arxiv: null
    doi: "10.1007/s006070050015"
  - title: "Data-sparse Approximation by Adaptive H2-Matrices"
    url: "https://doi.org/10.1007/s00607-002-1450-4"
    year: 2002
    arxiv: null
    doi: "10.1007/s00607-002-1450-4"
  - title: "On the Fast Matrix Multiplication in the Boundary Element Method by Panel Clustering"
    url: "https://doi.org/10.1007/bf01396324"
    year: 1989
    arxiv: null
    doi: "10.1007/bf01396324"
see:
  - "1190-a-sparse-matrix-arithmetic-based-on-h-matrices-part-i-introduct"
  - "1191-data-sparse-approximation-by-adaptive-h2-matrices"
  - "1189-on-the-fast-matrix-multiplication-in-the-boundary-element-metho"
  - "1166-a-fast-algorithm-for-particle-simulations"
---

# Introduction to Hierarchical Matrices with Applications

## One-sentence takeaway

The canonical short H / H2 review: cluster trees, admissibility, Rk arithmetic, formatted add/mul/invert, then nested-basis H2 — the paper a careful reader actually steals the construction from.

## Problem

Hackbusch 1999 introduces the format; 2002 introduces H2. Neither is a working recipe. Implementers needed one place that builds the cluster tree, states the admissibility condition, and writes the formatted arithmetic without a book.

## Design

Cluster tree by geometric bisection; block tree from an admissibility condition (bounding boxes, η). Admissible leaves are Rk; others dense. Formatted addition / multiplication / inversion with truncation. Then uniform H and H2 (nested bases) for cheaper integral-operator matvecs. Applications sketched for BEM, FEM inverses, and control — the sketches, not a dump of those fields. Author PDF: ETH HMAT seminar copy of EABE 27(5):405–422.

## Evidence

Eng. Anal. Bound. Elem. 27(5):405–422, May 2003, DOI 10.1016/S0955-7997(02)00152-2. The sibling construction paper is Grasedyck–Hackbusch, Computing 70:295–334, 2003 (cited, not reminted). The winter-school notes are Börm–Grasedyck–Hackbusch, MPI Lecture Note 21/2003 (HLib companion; cited, not reminted).

## Limitations

Review, not a new format. Applications section is FEM/BEM/control — do not follow those citations into preconditioner sludge. Lecture notes are longer if you are implementing HLib.

## Implications for Broadside

This is the H-matrix card Anoptic should open after 1190. Construction and complexity live here and in Grasedyck–Hackbusch Computing 2003; the lecture notes are the workbook. No graphics H-matrix founding paper turned up this cycle.

## Bottom line

Mint BGH 2003 EABE as the one review. Computing 2003 construction and MPI LN 21 stay cites.

## Links

- DOI: [10.1016/s0955-7997(02)00152-2](https://doi.org/10.1016/s0955-7997(02)00152-2)
- Author PDF: https://people.math.ethz.ch/~hiptmair/Seminars/HMAT/Papers/BGH03.pdf
- Computing 2003 construction: [10.1007/s00607-003-0019-1](https://doi.org/10.1007/s00607-003-0019-1)
- MPI LN 21/2003: https://www.mis.mpg.de/publications/preprint-repository/lecture_note/2003/issue-21
