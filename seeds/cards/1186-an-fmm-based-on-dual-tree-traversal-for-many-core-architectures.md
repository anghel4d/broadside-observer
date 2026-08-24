---
title: "An FMM Based on Dual Tree Traversal for Many-Core Architectures"
authors:
  - "Rio Yokota"
year: 2013
venue: "Journal of Algorithms & Computational Technology"
arxiv: "1209.3516"
doi: "10.1260/1748-3018.7.3.301"
source: "https://arxiv.org/abs/1209.3516"
topics:
  - "exafmm"
  - "dual-tree"
  - "fmm"
  - "software"
  - "many-core"
seed_rank: 1186
seed_batch: "fmm-2026-08-24"
reviewed: "2026-08-24"
pool: "engines"
relevance_score: 9
lineage: fast-multipole
cites:
  - title: "Fast Multipole Methods on Graphics Processors"
    url: "https://doi.org/10.1016/j.jcp.2008.05.023"
    year: 2008
    arxiv: null
    doi: "10.1016/j.jcp.2008.05.023"
  - title: "A Hierarchical O(N) Force Calculation Algorithm"
    url: "https://arxiv.org/abs/astro-ph/0202512"
    year: 2002
    arxiv: "astro-ph/0202512"
    doi: "10.1006/jcph.2002.7026"
  - title: "A Tuned and Scalable Fast Multipole Method as a Preeminent Algorithm for Exascale Systems"
    url: "https://arxiv.org/abs/1106.2176"
    year: 2012
    arxiv: "1106.2176"
    doi: "10.1177/1094342011429952"
see:
  - "1184-fast-multipole-methods-on-graphics-processors"
  - "1183-a-hierarchical-o-n-force-calculation-algorithm"
  - "1185-pvfmm-a-parallel-kernel-independent-fmm-for-particle-and-volume"
  - "1187-tbfmm-a-c-generic-and-parallel-fast-multipole-method-library"
---

# An FMM Based on Dual Tree Traversal for Many-Core Architectures

## One-sentence takeaway

ExaFMM's algorithm paper: dual-tree traversal (walk source and target trees together) instead of explicit interaction lists, aimed at many-core / GPU. This is Yokota's FMM.

## Problem

Classical FMM builds per-box lists U/V/W/X, which are irregular and allocation-heavy on many-core. Barnes–Hut already walks one tree; Dehnen-style mutual interactions walk two. A portable ExaFMM needed that walk as the algorithm.

## Design

Dual-tree traversal: simultaneously descend source and target trees, opening nodes that are not well-separated, and executing M2L/P2P as tasks when they are. Better locality than list-FMM on Xeon Phi / GPU of the era. The 2012 IJHPCA tuned-and-scalable FMM for exascale (arXiv:1106.2176) is the companion ExaFMM systems paper — cite, do not remint.

## Evidence

J. Algorithms Comput. Technol. 7(3):301–324, 2013, DOI 10.1260/1748-3018.7.3.301. arXiv:1209.3516. Code: https://github.com/exafmm/exafmm

## Limitations

Software/architecture paper on top of existing FMM math. Dual-tree is Dehnen-adjacent, not a new expansion.

## Implications for Broadside

For a Broadside many-core port, dual-tree is simpler than five interaction lists. Pair with talk 2's adaptive lists as the pedagogical version.

## Bottom line

Mint Yokota 2013 as the ExaFMM paper. Cite 2012 IJHPCA; do not remint.

## Links

- DOI: [10.1260/1748-3018.7.3.301](https://doi.org/10.1260/1748-3018.7.3.301)
- arXiv: [1209.3516](https://arxiv.org/abs/1209.3516)
- Code: https://github.com/exafmm/exafmm
