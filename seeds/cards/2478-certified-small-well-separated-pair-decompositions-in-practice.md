---
title: "Certified Small Well-Separated Pair Decompositions in Practice"
authors:
  - "Guilherme D. da Fonseca"
year: 2026
venue: "arXiv preprint (cs.CG)"
arxiv: "2610.39521"
doi: null
source: "https://arxiv.org/abs/2610.39521"
topics:
  - "well-separated-pair-decomposition"
  - "fast-multipole"
  - "computational-geometry"
seed_rank: 2478
seed_batch: "craft-2026-10-31"
reviewed: "2026-10-31"
pool: "engines"
lineage: fast-multipole
relevance_score: 8
cites:
  - title: "Certified Small Well-Separated Pair Decompositions in Practice"
    url: "https://arxiv.org/abs/2610.39521"
    year: 2026
    arxiv: "2610.39521"
    doi: null
see: ["1168-a-fast-adaptive-multipole-algorithm-for-particle-simulations", "1170-a-fast-adaptive-multipole-algorithm-in-three-dimensions", "1243-parallel-algorithms-for-constructing-data-structures-for-fast-multipole-methods"]
---

# Certified Small Well-Separated Pair Decompositions in Practice

## One-sentence takeaway

A sweep algorithm builds cover WSPDs with a certified factor-40 bound in the plane and doubles as a lower-bound tool, and with a greedy variant plus local search the decompositions land within 0.02% of optimal at n = 500 and about 1.1× the lower bound at n = 10,000, far smaller than the textbook Callahan–Kosaraju construction.

## Why it matters here

A WSPD is the far-field interaction list of an FMM written as a set: every pair of points is covered by one "dumbbell" of two clusters that can treat each other as single nodes. For the M2L-on-radiance-cascades idea, the number of dumbbells is the M2L work, so a construction that is 1.55× smaller than quadtree/fair-split defaults (and comes with a certificate of how close to optimal it is) is a direct handle on cost. The certified lower bound also tells us when further list-pruning is pointless.

## Key ideas

- **Sweep approximation.** O(n² log n) cover-WSPD sweep with factor 40 for ε ≤ 1/16 in the plane, 2^O(d) in d dimensions; its step count is a lower bound on any WSPD's size.
- **Partition WSPDs.** Quadtree and fair split tree give constant factors in the plane for ε ≤ 1/5, best 252 for a randomly shifted and scaled quadtree.
- **Practice.** With ε = 1/20, greedy sweep plus a new local search hits optimum within 0.02% at n = 500; cover-to-partition conversion gives 1.13× the lower bound versus 1.55× for Callahan–Kosaraju.

## Caveats

Quadratic build time, so this is an offline or bake-time tool, not a per-frame rebuild. Experiments are planar point sets; visibility (the part that makes light differ from gravity) is not modelled. Abstract-level read.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.39521
- PDF: https://arxiv.org/pdf/2610.39521
