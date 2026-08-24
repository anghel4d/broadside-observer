---
title: "The Fast Multipole Method: Numerical Implementation"
authors:
  - "Eric Darve"
year: 2000
venue: "Journal of Computational Physics"
arxiv: null
doi: "10.1006/jcph.2000.6451"
source: "https://doi.org/10.1006/jcph.2000.6451"
topics:
  - "fmm"
  - "helmholtz"
  - "darve"
  - "high-frequency"
  - "translation-operator"
seed_rank: 1175
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 9
lineage: fast-multipole
cites:
  - title: "Diagonal Forms of Translation Operators for the Helmholtz Equation in Three Dimensions"
    url: "https://doi.org/10.1006/acha.1993.1006"
    year: 1993
    arxiv: null
    doi: "10.1006/acha.1993.1006"
  - title: "Multilevel Fast-Multipole Algorithm for Solving Combined Field Integral Equations of Electromagnetic Scattering"
    url: "https://doi.org/10.1002/mop.4650100107"
    year: 1995
    arxiv: null
    doi: "10.1002/mop.4650100107"
  - title: "The Fast Multipole Method I: Error Analysis and Asymptotic Complexity"
    url: "https://doi.org/10.1137/S0036142999330379"
    year: 2000
    arxiv: null
    doi: "10.1137/S0036142999330379"
  - title: "The Black-Box Fast Multipole Method"
    url: "https://doi.org/10.1016/j.jcp.2009.08.031"
    year: 2009
    arxiv: null
    doi: "10.1016/j.jcp.2009.08.031"
see:
  - "1172-diagonal-forms-of-translation-operators-for-the-helmholtz-equat"
  - "1174-multilevel-fast-multipole-algorithm-for-solving-combined-field"
  - "1177-the-black-box-fast-multipole-method"
---

# The Fast Multipole Method: Numerical Implementation

## One-sentence takeaway

Darve's 2000 JCP paper is the high-frequency Helmholtz FMM implementation founding: stable translators, interpolation, and the numerical facts a code needs after Rokhlin's analysis.

## Problem

Diagonal Helmholtz M2L is analytically beautiful and numerically brittle (high-frequency truncation, interpolation grids, evanescent spectrum). A CEM/math group needed an implementable scheme with measured errors, not just operators.

## Design

Full numerical treatment of 3D Helmholtz FMM: interpolation/anterpolation between levels, choice of quadrature on the sphere, translation-operator truncation, and complexity. Companion SINUM 2000 paper (10.1137/S0036142999330379) is the error-analysis twin — cite, do not remint.

## Evidence

J. Comput. Phys. 160(1):195–240, 2000, DOI 10.1006/jcph.2000.6451. Later Darve line includes black-box FMM (1177).

## Limitations

Helmholtz implementation paper, not a new kernel-independent method. GPU/distributed Helmholtz FMM is later.

## Implications for Broadside

When someone says high-frequency FMM (Darve), they mean this paper plus the SINUM analysis. Black-box FMM is the 2009 kernel-independent follow-on.

## Bottom line

Mint Darve 2000 JCP as high-frequency implementation founding.

## Links

- DOI: [10.1006/jcph.2000.6451](https://doi.org/10.1006/jcph.2000.6451)
