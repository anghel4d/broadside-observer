---
title: "Lock-Free Augmented Trees"
authors:
  - "Panagiota Fatourou"
  - "Eric Ruppert"
year: 2024
venue: "arXiv:cs.DS"
arxiv: "2405.10506"
doi: null
source: "https://arxiv.org/abs/2405.10506"
topics:
  - lockfree
seed_rank: 222
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

# Lock-Free Augmented Trees

## One-sentence takeaway

Any field computable from a node and its children can be added to a lock-free tree, yielding linearizable order-statistic tries/BSTs and multi-point queries at sequential cost.

## Why it matters here

GRID COMMAND spatial queries and Anoptic ECS range counts want "how many units in this AABB" in log time, not a full scan; this is the concurrent version of an order-statistic tree.

## Key ideas

- Sequential augmentation (subtree sizes, interval spans) is how order-statistic, interval, tango, and link/cut trees are built.
- The concurrent recipe: store extra fields that depend only on the node and its children, and refresh them without locking the whole path.
- A wait-free trie over {1,…,N} supports linearizable k-th-smallest in O(log N) steps for both updates and queries.
- The same idea on a lock-free BST gives O(h) order-statistic queries without changing the asymptotic cost of updates.
- An alternative augmentation drops searches and order-statistics to O(log |S|) at a small extra update cost; arbitrary multi-point / range queries inherit the sequential complexity.

## Caveats

## Links

- arXiv: [2405.10506](https://arxiv.org/abs/2405.10506)
- PDF: https://arxiv.org/pdf/2405.10506
