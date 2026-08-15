---
title: "Wait-free Trees with Asymptotically-Efficient Range Queries"
authors:
  - "Ilya Kokorin"
  - "Dan Alistarh"
  - "Vitaly Aksenov"
year: 2023
venue: "arXiv:cs.DB"
arxiv: "2310.05293"
doi: null
source: "https://arxiv.org/abs/2310.05293"
topics:
  - lockfree
seed_rank: 236
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

# Wait-free Trees with Asymptotically-Efficient Range Queries

## One-sentence takeaway

Hand-over-hand helping maintains subtree metadata so a wait-free balanced BST can answer aggregate range queries (e.g. count) in logarithmic time instead of listing every key.

## Why it matters here

Anoptic spatial and inventory queries are aggregates ("how many in this range"), not dumps; a wait-free count that does not walk the range is the concurrent analog of an augmented sequential tree.

## Key ideas

- Existing concurrent range queries can list keys but have no log-time aggregate: counting a range means materializing it.
- Sequential trees fix this with subtree counters; the concurrent obstacle is keeping those counters wait-free under rotation and update.
- Hand-over-hand helping is a wait-free stand-in for hand-over-hand locking of node metadata.
- Implemented operations: wait-free insert, delete, contains, and count-in-range on a balanced BST.
- Benchmarks show the expected speedup versus list-the-range baselines.

## Caveats

## Links

- arXiv: [2310.05293](https://arxiv.org/abs/2310.05293)
- PDF: https://arxiv.org/pdf/2310.05293
