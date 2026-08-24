---
title: "A Fast Algorithm for Particle Simulations"
authors:
  - "Leslie Greengard"
  - "Vladimir Rokhlin"
year: 1987
venue: "Journal of Computational Physics"
arxiv: null
doi: "10.1016/0021-9991(87)90140-9"
source: "https://doi.org/10.1016/0021-9991(87)90140-9"
topics:
  - "fmm"
  - "greengard-rokhlin"
  - "n-body"
  - "multipole-expansion"
seed_rank: 1166
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: fast-multipole
cites:
  - title: "Rapid Solution of Integral Equations of Classical Potential Theory"
    url: "https://doi.org/10.1016/0021-9991(85)90002-6"
    year: 1985
    arxiv: null
    doi: "10.1016/0021-9991(85)90002-6"
  - title: "A Hierarchical O(N log N) Force-Calculation Algorithm"
    url: "https://doi.org/10.1038/324446a0"
    year: 1986
    arxiv: null
    doi: "10.1038/324446a0"
  - title: "A Fast Adaptive Multipole Algorithm for Particle Simulations"
    url: "https://doi.org/10.1137/0909044"
    year: 1988
    arxiv: null
    doi: "10.1137/0909044"
see:
  - "1163-rapid-solution-of-integral-equations-of-classical-potential-the"
  - "1165-a-hierarchical-o-n-log-n-force-calculation-algorithm"
  - "1168-a-fast-adaptive-multipole-algorithm-for-particle-simulations"
  - "1167-the-rapid-evaluation-of-potential-fields-in-particle-systems"
  - "1181-a-short-course-on-fast-multipole-methods"
---

# A Fast Algorithm for Particle Simulations

## One-sentence takeaway

THE Fast Multipole Method: multipole + local expansions on a uniform quadtree, M2M / M2L / L2L translations, O(N) n-body with an exponential error bound in p. Named in both Keyframe Codes talks as the 1987 invention.

## Problem

Barnes–Hut (1165) and Appel (1164) walk particles against cells — O(N log N) and a heuristic θ. Rokhlin 1985 (1163) had the analytic expansions for BIE, not a particle code. Nobody had cluster–cluster interactions with a theorem.

## Design

2D Laplace/log kernel. P2M builds a p-term Laurent (multipole) expansion at each finest box. M2M shifts child multipoles to the parent (upward pass). Well-separated boxes convert source multipoles to target locals via M2L (the flip). L2L shifts locals down to children (downward pass). Remainder is direct P2P on the 8 neighbors. Error ~ (r/R)^p geometric. Interaction lists are regular on a uniform tree.

## Evidence

J. Comput. Phys. 73(2):325–348, December 1987, DOI 10.1016/0021-9991(87)90140-9. Keyframe Codes video 1 derives the expansions from this paper; video 2 implements the adaptive follow-up. Dongarra/Sullivan top-10 algorithms citation is a list, not a paper — do not mint it.

## Limitations

Uniform tree: clustered distributions blow the near-field. 2D log kernel, not 3D 1/r (that is 1997/1999). Adaptive lists U/V/W/X/Y are Carrier–Greengard–Rokhlin 1988.

## Implications for Broadside

This is the algorithm the user pointed at. Anoptic n-body, many-lights, or BEM starts here, not with a YouTube Barnes–Hut. 2D first (complex log + Cauchy–Riemann), then Cheng 1999 for 3D spherical harmonics.

## Bottom line

Mint the 1987 JCP paper as the FMM origin. Talk-cited.

## Links

- DOI: [10.1016/0021-9991(87)90140-9](https://doi.org/10.1016/0021-9991(87)90140-9)
