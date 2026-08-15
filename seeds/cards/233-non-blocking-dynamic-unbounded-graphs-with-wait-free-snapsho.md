---
title: "Non-blocking Dynamic Unbounded Graphs with Wait-Free Snapshot"
authors:
  - "Gaurav Bhardwaj"
  - "Sathya Peri"
  - "Pratik Shetty"
year: 2023
venue: "arXiv:cs.DC"
arxiv: "2310.02380"
doi: null
source: "https://arxiv.org/abs/2310.02380"
topics:
  - lockfree
seed_rank: 233
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
see:
  - "036-wait-free-synchronization"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
---

# Non-blocking Dynamic Unbounded Graphs with Wait-Free Snapshot

## One-sentence takeaway

A lock-free, linearizable unbounded graph supports concurrent vertex/edge add, delete, and lookup, plus what the authors claim is the first wait-free snapshot of a concurrent graph.

## Why it matters here

GRID COMMAND influence maps and Anoptic nav/visibility graphs mutate every tick; a wait-free snapshot is how analytics (diameter, betweenness) can run without freezing the mutators.

## Key ideas

- Vertex and edge add/delete/lookup are lock-free and linearizable on a dynamically growing graph.
- The snapshot is wait-free and is used to compute diameter and betweenness centrality.
- The snapshot method is presented as generic, reusable for other graph analytics, not only those two metrics.
- Experiments outperform prior concurrent-graph baselines by a clear margin.
- Unbounded: the structure is not a fixed-capacity adjacency matrix.

## Caveats

## Links

- arXiv: [2310.02380](https://arxiv.org/abs/2310.02380)
- PDF: https://arxiv.org/pdf/2310.02380
