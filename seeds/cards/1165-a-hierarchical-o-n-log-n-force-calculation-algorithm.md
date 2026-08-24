---
title: "A Hierarchical O(N log N) Force-Calculation Algorithm"
authors:
  - "Josh Barnes"
  - "Piet Hut"
year: 1986
venue: "Nature"
arxiv: null
doi: "10.1038/324446a0"
source: "https://doi.org/10.1038/324446a0"
topics:
  - "barnes-hut"
  - "treecode"
  - "n-body"
  - "octree"
seed_rank: 1165
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: fast-multipole
cites:
  - title: "An Efficient Program for Many-Body Simulation"
    url: "https://doi.org/10.1137/0906008"
    year: 1985
    arxiv: null
    doi: "10.1137/0906008"
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
  - "1164-an-efficient-program-for-many-body-simulation"
  - "1166-a-fast-algorithm-for-particle-simulations"
  - "1168-a-fast-adaptive-multipole-algorithm-for-particle-simulations"
  - "1042-lightcuts-a-scalable-approach-to-illumination"
---

# A Hierarchical O(N log N) Force-Calculation Algorithm

## One-sentence takeaway

Barnes–Hut is the tree-code the Keyframe Codes talks treat as prior art: octree (quadtree in 2D), center-of-mass monopole, θ = size/distance opening angle, O(N log N).

## Problem

Direct gravity is O(N²). Appel 1985 had a binary tree; production astrophysics wanted a regular octree, a one-line acceptance criterion, and a Nature-length algorithm that a grad student could ship.

## Design

Insert bodies into an octree. For each target, walk from the root: if a cell's opening angle D/r < θ, take the cell as a point mass at its COM; else open the children. Near neighbors fall through to particle–particle. Quadrupole moments are an optional accuracy bump, still not a local expansion and still particle–cell, not cell–cell.

## Evidence

Nature 324:446–449, 4 December 1986, DOI 10.1038/324446a0. Named in both Keyframe Codes videos (FhMftauQZqU, uOahsDhVZaE) as the algorithm YouTube n-body explainers actually implement, and as the accuracy/complexity foil FMM beats.

## Limitations

Error is not exponentially bounded in a truncation order p; θ is a knob. Highly clustered distributions still work but the constant suffers. Warren–Salmon hashed octrees (1993) are the parallel implementation, not a second origin — cite, do not mint.

## Implications for Broadside

Gamedev gravity, debris, and space dust almost always ship Barnes–Hut. FMM is what you reach for when the commenter asks for a bound. Lightcuts (1042) is the graphics tree-cut cousin (perceptual cut, not gravity).

## Bottom line

Mint the 1986 Nature paper. Talk-cited. Do not remint hashed-octree follow-ons.

## Links

- DOI: [10.1038/324446a0](https://doi.org/10.1038/324446a0)
