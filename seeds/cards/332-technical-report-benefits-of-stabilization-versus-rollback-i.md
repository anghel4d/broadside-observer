---
title: "Technical Report: Benefits of Stabilization versus Rollback in Self-Stabilizing Graph-Based Applications on Eventually Consistent Key-Value Stores"
authors:
  - "Duong Nguyen"
  - "Sandeep S. Kulkarni"
year: 2020
venue: "arXiv:cs.DC"
arxiv: "2007.14218"
doi: null
source: "https://arxiv.org/abs/2007.14218"
topics:
  - netcode
seed_rank: 332
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
---

# Technical Report: Benefits of Stabilization versus Rollback in Self-Stabilizing Graph-Based Applications on Eventually Consistent Key-Value Stores

## One-sentence takeaway

In this paper, we evaluate and compare the performance of two approaches, namely self-stabilization and rollback, to handling consistency violating faults (\cvf) that occur when a self-stabilizing distributed graph-based program is executed on an eventually consistent key-value store.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Technical Report: Benefits of Stabilization versus Rollback in Self-Stabilizing ).

## Key ideas

- In this paper, we evaluate and compare the performance of two approaches, namely self-stabilization and rollback, to handling consistency violating faults (\cvf) that occur when a self-stabilizing distributed graph-based program is executed on an eventually consistent key-value store.
- Consistency violating faults are caused by reading wrong values due to weaker level of consistency provided by the key-value store.
- One way to deal with these faults is to utilize rollback whereas another way is to rely on the property of self-stabilization that is expected to provide recovery from arbitrary states.
- We evaluate both these approaches in different case studies --planar graph coloring, arbitrary graph coloring, and maximal matching-- as well as for different problem dimensions such as input data characteristics, workload partition, and network latency.
- We also consider the effect of executing non-stabilizing algorithm with rollback with a similar stabilizing algorithm that does not utilize rollback.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2007.14218](https://arxiv.org/abs/2007.14218)
- URL: https://arxiv.org/abs/2007.14218
