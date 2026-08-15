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

# A Lock-free Binary Trie

## One-sentence takeaway

A wait-free relaxed binary trie (O(1) Search, O(log u) updates) is composed into a lock-free linearizable trie whose updates cost O(c² + log u) amortized, where c measures contention.

## Why it matters here

Anoptic entity-id and GRID COMMAND occupancy maps are universe-bounded integer sets; a trie with O(1) Search and a real Predecessor is a better primitive than a generic lock-free BST.

## Key ideas

- Sequential binary tries give O(1) Search and O(log u) Insert/Delete/Predecessor on {0,…,u−1}.
- The relaxed wait-free trie uses read, write, CAS, and (log u)-bit AND, matching those bounds, but Predecessor may return empty under concurrent updates.
- The lock-free linearizable wrapper restores a correct Predecessor; Search stays O(1) worst-case.
- Insert and Delete must touch a non-constant number of nodes so Predecessor stays correct — that is why a lock-free trie is harder than a lock-free list.
- Amortized update cost picks up a c² term that vanishes when contention is low.

## Caveats

## Links

- arXiv: [2405.06208](https://arxiv.org/abs/2405.06208)
- PDF: https://arxiv.org/pdf/2405.06208
