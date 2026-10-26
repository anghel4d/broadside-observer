---
title: "Combinatorial Minimum Cost Flow in Almost-Linear Time on Dense Graphs"
authors:
  - "Bernhard Haeupler"
  - "Yonggang Jiang"
  - "Thatchaphol Saranurak"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2610.32556"
doi: null
source: "https://arxiv.org/abs/2610.32556"
topics:
  - "graph-algorithms"
  - "network-flow"
  - "algorithms-and-complexity"
seed_rank: 2437
seed_batch: "curiosity-2026-10-27"
reviewed: "2026-10-27"
pool: "systems"
lineage: algorithms-and-complexity
relevance_score: 7
cites:
  - title: "Combinatorial Minimum Cost Flow in Almost-Linear Time on Dense Graphs"
    url: "https://arxiv.org/abs/2610.32556"
    year: 2026
    arxiv: "2610.32556"
    doi: null
see: ["747-a-new-approach-to-the-maximum-flow-problem", "746-algorithm-for-solution-of-a-problem-of-maximum-flow-in-a-net"]
---

# Combinatorial Minimum Cost Flow in Almost-Linear Time on Dense Graphs

## One-sentence takeaway

Exact minimum-cost flow can be computed in n^(2+o(1)) time with purely combinatorial steps (augmenting paths and push-relabel, no interior-point linear algebra). It is the first combinatorial improvement since Goldberg–Tarjan in 1987, and it rests on a reduction from general graphs to DAGs.

## Why it's lovely

Since 2022, the fastest flow algorithms have been continuous: interior-point methods that feel nothing like the path-pushing algorithms in textbooks. This paper brings the textbook style back. Its key move is a "flow-cost-preserving DAG projection" that turns any directed graph into a DAG that approximately keeps both congestion and cost. Exact min-cost flow then reduces, with only n^(o(1)) loss, to approximate min-cost flow on DAGs, where a simple weighted push-relabel works. It continues the max-flow lineage this library already holds (Dinitz, Goldberg–Tarjan), and it is the kind of algorithm a person could eventually implement, unlike the interior-point line.

## Key ideas

- **Exact to approximate.** A black-box boost turns an approximate min-cost flow into an exact one with n^(o(1)) overhead.
- **DAG projection.** A projection map sends flows (and moving cuts) between the graph and a DAG, approximately preserving congestion and cost.
- **Construction.** Built from a length-constrained expander hierarchy using round-trip-distance low-diameter decompositions (FatLDD) and a cut-matching game.
- **DAG solver.** Weighted push-relabel on the DAG gives the approximation, and with the rest this yields n^(2+o(1)) total, almost optimal for dense graphs.
- **Research agenda.** Future combinatorial min-cost flow work only needs to handle DAGs.

## Caveats

Almost-linear only on dense graphs (m ≈ n²). For sparse graphs it does not beat Chen et al.'s m^(1+o(1)) interior-point result. The n^(o(1)) factors and the 101-page expander machinery make it theoretical for now. I read the abstract, the contents and the introduction.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.32556
- PDF: https://arxiv.org/pdf/2610.32556
