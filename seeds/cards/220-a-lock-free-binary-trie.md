---
title: "A Lock-free Binary Trie"
authors:
  - "Jeremy Ko"
year: 2024
venue: "arXiv:cs.DS"
arxiv: "2405.06208"
doi: null
source: "https://arxiv.org/abs/2405.06208"
topics:
  - lockfree
seed_rank: 220
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/tpds.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/tpds.2004.8"
  - title: "Michael & Scott Lock-Free Queue"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
see:
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "031-michael-scott-lock-free-queue"
  - "036-wait-free-synchronization"
---

# A Lock-free Binary Trie

## One-sentence takeaway

A binary trie is a sequential data structure for a dynamic set on the universe $\{0,\dots,u-1\}$ supporting Search with $O(1)$ worst-case step complexity, and Insert, Delete, and Predecessor operations with $O(\log u)$ worst-case step complexity.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (A Lock-free Binary Trie).

## Key ideas

- A binary trie is a sequential data structure for a dynamic set on the universe $\{0,\dots,u-1\}$ supporting Search with $O(1)$ worst-case step complexity, and Insert, Delete, and Predecessor operations with $O(\log u)$ worst-case step complexity.
- We give a wait-free implementation of a relaxed binary trie, using read, write, CAS, and ($\log u$)-bit AND operations.
- It supports all operations with the same worst-case step complexity as the sequential binary trie.
- However, Predecessor operations may not return a key when there are concurrent update operations.
- We use this as a component of a lock-free, linearizable implementation of a binary trie.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2405.06208](https://arxiv.org/abs/2405.06208)
- URL: https://arxiv.org/abs/2405.06208
