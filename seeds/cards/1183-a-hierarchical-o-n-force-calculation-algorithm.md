---
title: "A Hierarchical O(N) Force Calculation Algorithm"
authors:
  - "Walter Dehnen"
year: 2002
venue: "Journal of Computational Physics"
arxiv: "astro-ph/0202512"
doi: "10.1006/jcph.2002.7026"
source: "https://arxiv.org/abs/astro-ph/0202512"
topics:
  - "fmm"
  - "dehnen"
  - "astrophysics"
  - "cartesian-multipoles"
  - "n-body"
seed_rank: 1183
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 10
lineage: fast-multipole
cites:
  - title: "A Fast Adaptive Multipole Algorithm in Three Dimensions"
    url: "https://doi.org/10.1006/jcph.1999.6355"
    year: 1999
    arxiv: null
    doi: "10.1006/jcph.1999.6355"
  - title: "A Hierarchical O(N log N) Force-Calculation Algorithm"
    url: "https://doi.org/10.1038/324446a0"
    year: 1986
    arxiv: null
    doi: "10.1038/324446a0"
  - title: "A Very Fast and Momentum-conserving Tree Code"
    url: "https://doi.org/10.1086/312776"
    year: 2000
    arxiv: null
    doi: "10.1086/312776"
see:
  - "1170-a-fast-adaptive-multipole-algorithm-in-three-dimensions"
  - "1165-a-hierarchical-o-n-log-n-force-calculation-algorithm"
  - "1166-a-fast-algorithm-for-particle-simulations"
---

# A Hierarchical O(N) Force Calculation Algorithm

## One-sentence takeaway

The astrophysics FMM that gravity codes actually run: Cartesian multipoles, a dual-tree / mutual-interaction walk, and O(N) at the loose accuracies collisionless dynamics wants — after naive ports of Greengard–Rokhlin lost to Barnes–Hut.

## Problem

Capuzzo-Dolcetta & Miocchi 1998 tried textbook FMM in stellar dynamics and lost to a quadrupole tree. Collisionless N-body wants ~1% force error, not p=20 engineering FMM. Need an FMM whose opening criterion and Cartesian moments match that regime.

## Design

Cartesian Taylor/multipole moments (no spherical harmonics), a flexible opening angle, and cell–cell interactions (the FMM step Barnes–Hut lacks). Hierarchical tree as in the tree code. Measured O(N) at astrophysical accuracy. 2000 ApJ letter is the short version — cite, do not remint.

## Evidence

J. Comput. Phys. 179(1):27–42, 2002, DOI 10.1006/jcph.2002.7026. arXiv:astro-ph/0202512.

## Limitations

Gravity-specific Cartesian FMM, not kernel-independent. Not the Keyframe Codes 2D complex-log tutorial. falcON is the code name.

## Implications for Broadside

If Broadside ships 3D game gravity at looks-right accuracy, Dehnen is closer than Cheng 1999. Talks stay with Greengard–Rokhlin; production astro stayed with this.

## Bottom line

Mint Dehnen 2002 as the n-body FMM that won in astrophysics.

## Links

- DOI: [10.1006/jcph.2002.7026](https://doi.org/10.1006/jcph.2002.7026)
- arXiv: [astro-ph/0202512](https://arxiv.org/abs/astro-ph/0202512)
