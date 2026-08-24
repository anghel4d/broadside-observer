---
title: "Fast Algorithms for Classical Physics"
authors:
  - "Leslie Greengard"
year: 1994
venue: "Science"
arxiv: null
doi: "10.1126/science.265.5174.909"
source: "https://doi.org/10.1126/science.265.5174.909"
topics:
  - "fmm"
  - "review"
  - "classical-physics"
  - "greengard"
seed_rank: 1182
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 9
lineage: fast-multipole
cites:
  - title: "A Fast Algorithm for Particle Simulations"
    url: "https://doi.org/10.1016/0021-9991(87)90140-9"
    year: 1987
    arxiv: null
    doi: "10.1016/0021-9991(87)90140-9"
  - title: "A Short Course on Fast Multipole Methods"
    url: "https://math.nyu.edu/faculty/greengar/shortcourse_fmm.pdf"
    year: 1997
    arxiv: null
    doi: null
see:
  - "1166-a-fast-algorithm-for-particle-simulations"
  - "1181-a-short-course-on-fast-multipole-methods"
  - "1167-the-rapid-evaluation-of-potential-fields-in-particle-systems"
---

# Fast Algorithms for Classical Physics

## One-sentence takeaway

Greengard's 1994 Science review: the popular statement that hierarchical potential evaluation is a new algorithmic primitive for classical physics (gravity, electrostatics, fluids), not a one-off n-body hack.

## Problem

FMM was still a JCP/SIAM specialist result. Science needed a four-page argument that O(N) potential evaluation changes what simulations are possible, sitting next to the later top-10 algorithms folklore (Dongarra/Sullivan is a list — not minted).

## Design

Survey of fast summation for Coulomb/gravitation and related integral equations, contrasting particle-mesh, tree codes, and FMM. No new operators. Board's 1992 CPL MD paper is an application of parallel FMM — rejected; this Science piece is the Greengard review that is actually a paper.

## Evidence

Science 265(5174):909–914, 12 August 1994, DOI 10.1126/science.265.5174.909.

## Limitations

Popular review, 1994 snapshot. Does not replace Beatson–Greengard for teaching or Cheng 1999 for 3D.

## Implications for Broadside

Use this as the one-page why-FMM-is-a-primitive cite in a Broadside design note. Not an implementation.

## Bottom line

Mint Greengard 1994 Science as the canonical short review. Board 1992 MD is application sludge.

## Links

- DOI: [10.1126/science.265.5174.909](https://doi.org/10.1126/science.265.5174.909)
