---
title: "A Well-Separated Pair Decomposition of Linear Size for Unit-Disk Graphs"
authors:
  - "Mark de Berg"
  - "Joachim Gudmundsson"
  - "Sampson Wong"
year: 2026
venue: "arXiv preprint (cs.CG, math.CO)"
arxiv: "2611.24295"
doi: null
source: "https://arxiv.org/abs/2611.24295"
version_reviewed: "v1"
topics:
  - "well-separated-pair-decomposition"
  - "computational-geometry"
  - "graph-metrics"
  - "fast-multipole"
  - "spatial-hierarchies"
seed_rank: 2643
seed_batch: "craft-2026-11-19"
reviewed: "2026-11-19"
pool: "maths-foundations"
relevance_score: 8
see:
  - "1181-a-short-course-on-fast-multipole-methods"
  - "1176-a-kernel-independent-adaptive-fast-multipole-algorithm-in-two-a"
cites:
  - title: "A Well-Separated Pair Decomposition of Linear Size for Unit-Disk Graphs"
    url: "https://arxiv.org/abs/2611.24295"
    year: 2026
    arxiv: "2611.24295"
    doi: null
  - title: "A Linear-Size Well-Separated Pair Decomposition for Unit Disk Graphs"
    url: "https://arxiv.org/abs/2611.22049"
    year: 2026
    arxiv: "2611.22049"
    doi: null
---

# A Well-Separated Pair Decomposition of Linear Size for Unit-Disk Graphs

## One-sentence takeaway

Every connected Euclidean-weighted unit-disk graph has a (1/ε)-well-separated pair decomposition of size O(n ε^-2 log(1/ε)), which is tight; this settles a 2003 open problem of Gao and Zhang, and Jie Gao independently posted a linear-size construction the day before (arXiv 2611.22049).

## Why it matters here

A WSPD is the combinatorial core of Barnes–Hut and FMM interaction lists: pairs of clusters far apart relative to their size can be treated as one interaction. Our FMM-for-radiance-cascades idea needs interaction lists where distance is not plain Euclidean, because occlusion and walkable space change it. These two results show that, at least for unit-disk graph (shortest-path) metrics, the pair list can still be linear in n, as it is in free space. That makes linear-size far-field lists over a connectivity graph (pathfinding, influence maps in GRID COMMAND, or visibility-limited light transport) plausible rather than log-factor worse.

## Key ideas

- **Setting.** Points in the plane, edges between points at distance ≤ 1, weighted by Euclidean length; the metric is the shortest-path distance in the graph.
- **Previous bound.** O(n log n) pairs (Gao and Zhang, 2003); whether O(n) is possible was open.
- **This paper.** O(n ε^-2 log(1/ε)) pairs for every connected unit-disk graph, with a matching lower-bound family.
- **Concurrent note.** Jie Gao, A Linear-Size Well-Separated Pair Decomposition for Unit Disk Graphs (arXiv 2611.22049, 17 Nov 2026), gives an algorithm for a linear-size WSPD.

## Caveats

Abstract-level read of both v1 preprints (17–18 Nov 2026); construction time, constants and implementability are not stated in the abstracts. Unit-disk graphs are a specific model; carrying this to occlusion-aware light transport or navmesh metrics is our extrapolation, not the authors' claim.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.24295
- PDF: https://arxiv.org/pdf/2611.24295
- Concurrent result (Gao): https://arxiv.org/abs/2611.22049
