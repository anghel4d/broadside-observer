---
title: "A New Version of the Fast Multipole Method for the Laplace Equation in Three Dimensions"
authors:
  - "Leslie Greengard"
  - "Vladimir Rokhlin"
year: 1997
venue: "Acta Numerica"
arxiv: null
doi: "10.1017/s0962492900002725"
source: "https://doi.org/10.1017/s0962492900002725"
topics:
  - "fmm"
  - "3d-fmm"
  - "laplace"
  - "diagonal-translation"
seed_rank: 1169
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: fast-multipole
cites:
  - title: "A Fast Algorithm for Particle Simulations"
    url: "https://doi.org/10.1016/0021-9991(87)90140-9"
    year: 1987
    arxiv: null
    doi: "10.1016/0021-9991(87)90140-9"
  - title: "A Fast Adaptive Multipole Algorithm in Three Dimensions"
    url: "https://doi.org/10.1006/jcph.1999.6355"
    year: 1999
    arxiv: null
    doi: "10.1006/jcph.1999.6355"
  - title: "Diagonal Forms of Translation Operators for the Helmholtz Equation in Three Dimensions"
    url: "https://doi.org/10.1006/acha.1993.1006"
    year: 1993
    arxiv: null
    doi: "10.1006/acha.1993.1006"
see:
  - "1166-a-fast-algorithm-for-particle-simulations"
  - "1170-a-fast-adaptive-multipole-algorithm-in-three-dimensions"
  - "1172-diagonal-forms-of-translation-operators-for-the-helmholtz-equat"
---

# A New Version of the Fast Multipole Method for the Laplace Equation in Three Dimensions

## One-sentence takeaway

The new-version 3D Laplace FMM: exponential (diagonal) translation operators that drop M2L from O(p⁴) to O(p²) in 3D, making high-accuracy 3D FMM practical.

## Problem

Naive 3D spherical-harmonic M2L is O(p⁴) per translation. High p (engineering accuracy) made 3D FMM slower than Barnes–Hut in the 1990s. Rokhlin's Helmholtz diagonalization (1172) had to come back to Laplace.

## Design

Re-expand 3D Laplace translations in a plane-wave / exponential basis so M2L is a diagonal multiply, then rotate back. Combined with a 3D octree this is the modern high-order Laplace FMM. Acta Numerica survey-length: analysis, operators, and complexity.

## Evidence

Acta Numerica 6:229–269, 1997, DOI 10.1017/S0962492900002725. Cheng–Greengard–Rokhlin 1999 is the adaptive 3D algorithm paper that implements this version.

## Limitations

Laplace, not Helmholtz (oscillatory M2L is a different diagonalization). The 1996 Yale tech report (ADA316161) is the same paper — do not remint.

## Implications for Broadside

If Broadside ever does 3D gravity / electrostatics at engineering accuracy, this is why FMM beats a quadrupole Barnes–Hut. Talk 2's get ready for spherical harmonics points at 1997+1999, not 1987.

## Bottom line

Mint the 1997 Acta Numerica new-version paper.

## Links

- DOI: [10.1017/S0962492900002725](https://doi.org/10.1017/s0962492900002725)
