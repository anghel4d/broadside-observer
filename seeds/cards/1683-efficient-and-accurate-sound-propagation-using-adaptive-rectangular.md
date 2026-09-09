---
title: "Efficient and Accurate Sound Propagation Using Adaptive Rectangular Decomposition"
authors: ["N. Raghuvanshi", "Rahul Narain", "Ming C Lin"]
year: 2009
venue: "IEEE Transactions on Visualization and Computer Graphics"
arxiv: null
doi: "10.1109/tvcg.2009.28"
source: "https://doi.org/10.1109/tvcg.2009.28"
topics: [interactive-acoustics, wave-based, ard, auralization, wave]
seed_rank: 1683
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "systems"
relevance_score: 10
lineage: wave-based-acoustics
see:
  - "1163-rapid-solution-of-integral-equations-of-classical-potential-the"
  - "1171-rapid-solution-of-integral-equations-of-scattering-theory-in-tw"
---

# Efficient and Accurate Sound Propagation Using Adaptive Rectangular Decomposition

## One-sentence takeaway

Adaptive Rectangular Decomposition (ARD): partition air into rectangular cells, solve the wave equation cheaply per brick, couple faces — the 2009 wave bake engine under Triton.

## Why it matters here

Naive FDTD on a km-scale map is impossible. ARD is the domain decomposition that made precomputed game wave acoustics feasible. Anoptic bake farm should think 'rect bricks + interface coupling,' not a uniform Yee grid.

## Key ideas

- **Rectangular eigen-solves.** Fast per-cell modes / DCT-like marching inside axis-aligned bricks.
- **Adaptive partition.** Fit large empty volumes with big bricks; refine near geometry.
- **Interface coupling.** Continuity across brick faces; geometry voxelized to brick boundaries.
- **IEEE TVCG 2009.** Raghuvanshi, Narain, Lin; harvest 114 cites.

## Caveats

Staircased / brick-fitted geometry; not Bilbao unstructured FVTD (1727). Offline-friendly; not a per-frame solver on console. Do not remint FMM Helmholtz 1171.

## Links

- DOI: https://doi.org/10.1109/tvcg.2009.28
- HTML: https://www.semanticscholar.org/paper/48bffa4a4fe17e752847e80db71fe7b5d553a2af
