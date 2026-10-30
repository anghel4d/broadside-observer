---
title: "Four-Coloring Planar Graphs in Linear Time"
authors:
  - "Yuta Inoue"
  - "Ken-ichi Kawarabayashi"
  - "Atsuyuki Miyashita"
  - "Bojan Mohar"
  - "Carsten Thomassen"
  - "Mikkel Thorup"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2610.39753"
doi: null
source: "https://arxiv.org/abs/2610.39753"
topics:
  - "graph-algorithms"
  - "planar-graphs"
  - "graph-coloring"
  - "data-structures"
seed_rank: 2471
seed_batch: "curiosity-2026-10-31"
reviewed: "2026-10-31"
pool: "systems"
relevance_score: 8
cites:
  - title: "Four-Coloring Planar Graphs in Linear Time"
    url: "https://arxiv.org/abs/2610.39753"
    year: 2026
    arxiv: "2610.39753"
    doi: null
see: ["2437-combinatorial-minimum-cost-flow-in-almost-linear-time-on-dense-graphs", "2020-the-hararyhill-and-zarankiewicz-crossing-number-formulas"]
---

# Four-Coloring Planar Graphs in Linear Time

## One-sentence takeaway

Inoue, Kawarabayashi, Miyashita, Mohar, Thomassen and Thorup 4-color any planar graph in O(n) time on a word RAM. That is optimal, and it improves their own O(n log n) FOCS'26 algorithm and the 1997 quadratic algorithm of Robertson–Sanders–Seymour–Thomas.

## Why it's lovely

The Four Color Theorem took 124 years to prove and 50 more to make fast. Finding the four colors was quadratic from 1997 until this year. The last step to linear time is a data-structures result, not a new graph theory result: Thorup's style of amortized bookkeeping lets the O(log n) Kempe changes, each of which can touch a constant fraction of the graph, be found and applied in O(n/log n) amortized time each. It is a classic theorem turned into an optimal algorithm a person could implement, and it fits GRID COMMAND's map and region-coloring needs.

## Key ideas

- **Graph theory (previous paper).** Every planar triangulation has linearly many reducible configurations or obstructing cycles (cycles of length ≤4, or 5 with two vertices on each side), so recursion shrinks the graph by a constant fraction.
- **Bottleneck.** Extending the recursive coloring to the reducible configurations needs O(log n) Kempe changes (swapping two colors along a two-colored component), each possibly linear-size.
- **New data structure.** After O(n) preprocessing, each good Kempe change is identified and simulated in O(n/log n) amortized time, so all of them take O(n) together.
- **Model.** Practical RAM with Θ(log n)-bit words: addressing, addition, bitwise operations and shifts only.

## Caveats

Six authors, very strong group, but a fresh preprint not yet refereed. It inherits the computer-checked reducible configurations behind every 4CT proof, and the word-RAM tricks may make the constants large. I read the abstract and the first five pages.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.39753
- PDF: https://arxiv.org/pdf/2610.39753
