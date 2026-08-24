---
title: "A Fast Adaptive Multipole Algorithm for Particle Simulations"
authors:
  - "J. Carrier"
  - "Leslie Greengard"
  - "Vladimir Rokhlin"
year: 1988
venue: "SIAM Journal on Scientific and Statistical Computing"
arxiv: null
doi: "10.1137/0909044"
source: "https://doi.org/10.1137/0909044"
topics:
  - "fmm"
  - "adaptive-fmm"
  - "interaction-lists"
  - "n-body"
seed_rank: 1168
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
see:
  - "1166-a-fast-algorithm-for-particle-simulations"
  - "1170-a-fast-adaptive-multipole-algorithm-in-three-dimensions"
  - "1165-a-hierarchical-o-n-log-n-force-calculation-algorithm"
---

# A Fast Adaptive Multipole Algorithm for Particle Simulations

## One-sentence takeaway

Adaptive FMM: a distribution-aware quadtree plus the five interaction lists (U/V/W/X/Y) that keep O(N) when particles clump. This is the algorithm Keyframe Codes implements in C++.

## Problem

Uniform-tree FMM (1166) is O(N) only when the tree is balanced. A globular cluster next to empty space makes finest-level P2P explode. Greengard–Rokhlin teamed up with Carrier the next year (talk 1) to fix that.

## Design

Refine until each leaf has at most s particles. Upward pass is unchanged (P2M on leaves, M2M up). Downward pass uses five lists for target box B: U = adjacent leaves (direct P2P); V = well-separated colleagues (M2L); W = smaller non-adjacent descendants of colleagues (evaluate source multipoles at each target particle); X = dual of W (P2L from source particles into B's local); Y = already-accounted far field. Each list is O(1), so the walk stays linear.

## Evidence

SIAM J. Sci. Stat. Comput. 9(4):669–686, July 1988, DOI 10.1137/0909044. Named in talk 1 as the adaptive follow-up; talk 2 implements exactly these lists and the s-parameter analysis from the original paper.

## Limitations

2D. 3D adaptive + spherical harmonics is Cheng–Greengard–Rokhlin 1999. List construction is the hard part of an implementation (talk 2 says so).

## Implications for Broadside

This is the FMM you actually write. Uniform-grid FMM is a tutorial; adaptive lists are the product. s ≈ 60 was Keyframe Codes' measured optimum — a constant, not a paper.

## Bottom line

Mint the 1988 adaptive paper. Talk-cited.

## Links

- DOI: [10.1137/0909044](https://doi.org/10.1137/0909044)
