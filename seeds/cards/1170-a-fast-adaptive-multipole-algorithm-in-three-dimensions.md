---
title: "A Fast Adaptive Multipole Algorithm in Three Dimensions"
authors:
  - "Hongwei Cheng"
  - "Leslie Greengard"
  - "Vladimir Rokhlin"
year: 1999
venue: "Journal of Computational Physics"
arxiv: null
doi: "10.1006/jcph.1999.6355"
source: "https://doi.org/10.1006/jcph.1999.6355"
topics:
  - "fmm"
  - "3d-fmm"
  - "adaptive-fmm"
  - "spherical-harmonics"
seed_rank: 1170
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: fast-multipole
cites:
  - title: "A Fast Adaptive Multipole Algorithm for Particle Simulations"
    url: "https://doi.org/10.1137/0909044"
    year: 1988
    arxiv: null
    doi: "10.1137/0909044"
  - title: "A New Version of the Fast Multipole Method for the Laplace Equation in Three Dimensions"
    url: "https://doi.org/10.1017/s0962492900002725"
    year: 1997
    arxiv: null
    doi: "10.1017/s0962492900002725"
  - title: "A Fast Algorithm for Particle Simulations"
    url: "https://doi.org/10.1016/0021-9991(87)90140-9"
    year: 1987
    arxiv: null
    doi: "10.1016/0021-9991(87)90140-9"
see:
  - "1168-a-fast-adaptive-multipole-algorithm-for-particle-simulations"
  - "1169-a-new-version-of-the-fast-multipole-method-for-the-laplace-equa"
  - "1166-a-fast-algorithm-for-particle-simulations"
  - "1183-a-hierarchical-o-n-force-calculation-algorithm"
---

# A Fast Adaptive Multipole Algorithm in Three Dimensions

## One-sentence takeaway

The 3D adaptive FMM: octree + spherical harmonics + the new-version translations. This is the paper talk 2 says it linked below for 3D inverse-square gravity.

## Problem

1987/1988 are 2D (log kernel, complex analysis). 1997 new-version is the 3D Laplace operators. Nobody had yet written the adaptive 3D algorithm with interaction lists, error bounds, and numbers.

## Design

Adaptive octree, spherical-harmonic multipoles of order p, new-version (diagonal) M2L, 3D analogues of lists U/V/W/X. Inverse-square gravity and Coulomb are the same 1/r kernel. Error exponentially small in p; observed O(N) on clustered distributions.

## Evidence

J. Comput. Phys. 155(2):468–498, 1999, DOI 10.1006/jcph.1999.6355. Talk 2: If you want to learn how the 3D version works, then get ready for some spherical harmonics. I've linked the paper down below.

## Limitations

Laplace/Coulomb/gravity, not Helmholtz. Implementation cost is the spherical-harmonic machinery and rotation theorems. Dehnen 2002 is the astrophysics Cartesian simplification.

## Implications for Broadside

This is the 3D gravity FMM. Keyframe Codes stayed in 2D log-gravity for pedagogy; a Broadside 3D n-body ports this, not the 1987 complex-log notes.

## Bottom line

Mint Cheng–Greengard–Rokhlin 1999. Talk-cited (video 2, 3D paper).

## Links

- DOI: [10.1006/jcph.1999.6355](https://doi.org/10.1006/jcph.1999.6355)
