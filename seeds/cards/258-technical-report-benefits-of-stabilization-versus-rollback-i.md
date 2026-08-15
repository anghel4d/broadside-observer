---
title: "Technical Report: Benefits of Stabilization versus Rollback in Self-Stabilizing Graph-Based Applications on Eventually Consistent Key-Value Stores"
authors:
  - "Duong Nguyen"
  - "Sandeep S. Kulkarni"
year: 2020
venue: "arXiv cs.DC"
arxiv: "2007.14218"
doi: null
source: "https://arxiv.org/abs/2007.14218"
topics:
  - netcode
seed_rank: 258
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Self-stabilizing systems in spite of distributed control"
    url: "https://doi.org/10.1145/361179.361202"
    year: 1974
    arxiv: null
    doi: "10.1145/361179.361202"
  - title: "Eventually consistent"
    url: "https://doi.org/10.1145/1435417.1435432"
    year: 2008
    arxiv: null
    doi: "10.1145/1435417.1435432"
  - title: "Dynamo"
    url: "https://doi.org/10.1145/1294261.1294281"
    year: 2007
    arxiv: null
    doi: "10.1145/1294261.1294281"
  - title: "Cassandra"
    url: "https://doi.org/10.1145/1773912.1773922"
    year: 2010
    arxiv: null
    doi: "10.1145/1773912.1773922"
see:
  - "472-how-to-make-a-multiprocessor-computer-that-correctly-execute"
---

# Technical Report: Benefits of Stabilization versus Rollback in Self-Stabilizing Graph-Based Applications on Eventually Consistent Key-Value Stores

## One-sentence takeaway

On an eventually consistent KV store, graph programs can either roll back after a consistency-violating read or just keep running and let self-stabilization repair the state — and which wins depends on the graph problem, partition, and latency.

## Why it matters here

GRID COMMAND and Broadside both live with stale replicas. This report is the rare head-to-head of "rewind the sim" versus "design the update so any garbage state heals," which is the same fork as rollback netcode versus stabilizing world state.

## Key ideas

- A consistency-violating fault (CVF) is simply reading a stale or reordered value from a weak KV store.
- Two recoveries: explicit rollback to a consistent cut, or Dijkstra-style self-stabilization that converges from an arbitrary configuration.
- Case studies: planar coloring, general coloring, and maximal matching, swept over data shape, partition, and network latency.
- Also compares a non-stabilizing algorithm-plus-rollback against a stabilizing algorithm that never rolls back.
- Companion overlap with arXiv:1910.08248; this is the longer technical report.

## Caveats

## Links

- arXiv: [2007.14218](https://arxiv.org/abs/2007.14218)
- PDF: https://arxiv.org/pdf/2007.14218
