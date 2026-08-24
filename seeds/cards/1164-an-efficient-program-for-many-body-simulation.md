---
title: "An Efficient Program for Many-Body Simulation"
authors:
  - "Andrew W. Appel"
year: 1985
venue: "SIAM Journal on Scientific and Statistical Computing"
arxiv: null
doi: "10.1137/0906008"
source: "https://doi.org/10.1137/0906008"
topics:
  - "treecode"
  - "n-body"
  - "appel"
  - "hierarchical-gravity"
seed_rank: 1164
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: fast-multipole
cites:
  - title: "A Hierarchical O(N log N) Force-Calculation Algorithm"
    url: "https://doi.org/10.1038/324446a0"
    year: 1986
    arxiv: null
    doi: "10.1038/324446a0"
  - title: "A Fast Algorithm for Particle Simulations"
    url: "https://doi.org/10.1016/0021-9991(87)90140-9"
    year: 1987
    arxiv: null
    doi: "10.1016/0021-9991(87)90140-9"
  - title: "Computer Simulation Using Particles"
    url: "https://doi.org/10.1201/9781439822050"
    year: 1988
    arxiv: null
    doi: "10.1201/9781439822050"
see:
  - "1165-a-hierarchical-o-n-log-n-force-calculation-algorithm"
  - "1166-a-fast-algorithm-for-particle-simulations"
  - "1181-a-short-course-on-fast-multipole-methods"
---

# An Efficient Program for Many-Body Simulation

## One-sentence takeaway

Appel's 1985 Princeton treecode is the other O(N log N) gravity prior art: a recursive spatial tree that replaces distant clumps by a monopole, one year before Barnes–Hut and two before FMM.

## Problem

Direct N-body is O(N²). Particle-mesh (Hockney–Eastwood) is fast on a grid but smooths close encounters and needs a mesh. Astrophysical and molecular simulations wanted a gridless hierarchical approximation with a simple error story.

## Design

Build a binary spatial tree over the particles. A distant node is accepted as a single point mass at its center of mass when the opening criterion is met; otherwise recurse. Force on each body is then a walk of O(log N) nodes. No multipole above monopole, no local expansion, no cluster–cluster interaction — that is FMM.

## Evidence

SIAM J. Sci. Stat. Comput. 6(1):85–103, 1985, DOI 10.1137/0906008. Beatson–Greengard and the Keyframe Codes talks treat Appel and Barnes–Hut as the tree-code siblings FMM improves on.

## Limitations

Monopole-only; error is heuristic (opening angle), not an exponentially decaying series remainder. Barnes–Hut 1986 is the octree form everyone implemented. Hockney–Eastwood remains the mesh alternative, not a remint.

## Implications for Broadside

If Anoptic ever wants cheap RTS gravity / debris, Appel/Barnes–Hut is the weekend implementation. FMM is the accuracy-bounded upgrade. Do not dump SPH or every later treecode.

## Bottom line

Mint Appel 1985 as the first published tree-code. Cite Hockney–Eastwood; do not mint the book.

## Links

- DOI: [10.1137/0906008](https://doi.org/10.1137/0906008)
