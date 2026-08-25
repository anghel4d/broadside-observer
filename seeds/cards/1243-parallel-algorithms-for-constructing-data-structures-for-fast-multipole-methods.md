---
title: "Parallel Algorithms for Constructing Data Structures for Fast Multipole Methods"
authors: ["Qi Hu", "Nail A. Gumerov", "Ramani Duraiswami"]
year: 2013
venue: "arXiv cs.MS"
arxiv: "1301.1704"
doi: null
source: "https://arxiv.org/abs/1301.1704"
topics: [fast-multipole]
seed_rank: 1243
seed_batch: "craft-2026-08-25"
reviewed: "2026-08-25"
pool: "engines"
relevance_score: 9
lineage: fast-multipole
cites:
  - title: "Fast Multipole Methods on Graphics Processors"
    url: "https://doi.org/10.1016/j.jcp.2008.05.023"
    year: 2008
    arxiv: null
    doi: "10.1016/j.jcp.2008.05.023"
  - title: "An FMM Based on Dual Tree Traversal for Many-Core Architectures"
    url: "https://arxiv.org/abs/1209.3516"
    year: 2013
    arxiv: "1209.3516"
    doi: null
  - title: "A Fast Algorithm for Particle Simulations"
    url: "https://doi.org/10.1016/0021-9991(87)90140-9"
    year: 1987
    arxiv: null
    doi: "10.1016/0021-9991(87)90140-9"
  - title: "Scans as Primitive Parallel Operations"
    url: "https://doi.org/10.1109/12.42122"
    year: 1989
    arxiv: null
    doi: "10.1109/12.42122"
see:
  - "1184-fast-multipole-methods-on-graphics-processors"
  - "1186-an-fmm-based-on-dual-tree-traversal-for-many-core-architectures"
  - "1166-a-fast-algorithm-for-particle-simulations"
  - "1240-maximizing-parallelism-in-the-construction-of-bvhs-octrees-and-k-d-trees"
---

# Parallel Algorithms for Constructing Data Structures for Fast Multipole Methods

## One-sentence takeaway

Build FMM octree occupancy, neighbor lists, and M2L interaction lists on the GPU with histograms + scans — O(N) construction so dynamic particles do not revive Amdahl.

## Problem

GPU FMM 1184 and dual-tree 1186 evaluate kernels. They assume the interaction lists already exist. Dynamic FMM+RC (probes move every frame) re-builds E2 (near-field neighbors) and E4 (parent-neighborhood minus self-neighborhood — the M2L stencil) every step. Sequential O(N log N) CPU list build dominates once the kernels are fast.

## Design

Fixed-grid pseudo-sort by Morton index using atomic histograms (order inside a box does not matter). Parallel prefix-sum of occupancy → bookmarks for non-empty boxes, skipping empties. E2 neighbor list: each non-empty receiver box enumerates ≤27 neighbors, compresses via another scan. E4 (interaction list) is the same idea one level up: parent neighborhood minus self neighborhood. Multi-node extension tags boxes domestic / import / export / root so only partition-boundary M-data moves. Histogram cost is 8^{l_max} temporary — fine through level 8 on 4 GB. Not 1184 (P2P/M2L *evaluation*), not 1186 (dual-tree walk that avoids explicit lists), not ScalFMM 1193 (task DAG). Cite Blelloch scans; 1154 is the GPU scan leftover already minted.

## Evidence

arXiv `1301.1704` (8 Jan 2013), cs.MS. **No journal DOI** — honest preprint. GTX 480 vs CPU: 20–100× on the data-structure step; construction drops to a small fraction of kernel time. Weak/strong scaling on a 32-node Chimera cluster with Tesla C1060s. Recovers the same Gumerov–Duraiswami FMM as 1184, different paper.

## Limitations

Histogram memory explodes past l_max ≈ 8; adaptive deep octrees need Karras radix (1240) instead of a dense 8^l bin array. Preprint, not a journal. E4 list is the classical well-separated stencil, not dual-tree 1186. Laplace kernel experiments; Helmholtz leftover is 1172–1174 already minted.

## Implications for Broadside

User asked for a *new* GPU-tree / adaptive-octree / interaction-list implementation not in 1163–1196. This is the interaction-list construction paper. Pair with Karras 1240 (tree) and SVO 1241 (walk) and Smits 1242 (why clusters/lists exist in the GI cousin). Do not remint GPU FMM 1184.

## Bottom line

Mint the list builder. Cite 1184/1186; do not remint them.

## Links

- arXiv: [1301.1704](https://arxiv.org/abs/1301.1704)
- PDF: https://arxiv.org/pdf/1301.1704
