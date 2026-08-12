---
title: An Efficient Wait-free Resizable Hash Table
authors:
- Panagiota Fatourou
- Nikolaos D. Kallimanis
- Thomas Ropars
year: 2022
venue: arXiv:cs.DC
arxiv: '2204.09624'
doi: 10.1145/3210377.3210408
source: https://arxiv.org/abs/2204.09624
topics:
- lockfree
seed_rank: 304
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: hpc
relevance_score: 9
lineage: open-addressing
cites:
- title: Space-Efficient Lock-Free Linear-Probing Hash Table
  url: https://arxiv.org/abs/2601.00000
  year: 2026
  arxiv: null
  doi: null
  card: 264-space-efficient-lock-free-linear-probing-hash-table
- title: 'Linearizability: A Correctness Condition for Concurrent Objects'
  url: https://doi.org/10.1145/78969.78972
  year: 1990
  arxiv: null
  doi: 10.1145/78969.78972
  card: 260-linearizability-a-correctness-condition-for-concurrent-objec
---

# An Efficient Wait-free Resizable Hash Table

## One-sentence takeaway

This paper presents an efficient wait-free resizable hash table.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (An Efficient Wait-free Resizable Hash Table).

## Key ideas

- This paper presents an efficient wait-free resizable hash table.
- To achieve high throughput at large core counts, our algorithm is specifically designed to retain the natural parallelism of concurrent hashing, while providing wait-free resizing.
- An extensive evaluation of our hash table shows that in the common case where resizing actions are rare, our implementation outperforms all existing lock-free hash table implementations while providing a stronger progress guarantee.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2204.09624](https://arxiv.org/abs/2204.09624)
- DOI: [10.1145/3210377.3210408](https://doi.org/10.1145/3210377.3210408)
- URL: https://arxiv.org/abs/2204.09624
