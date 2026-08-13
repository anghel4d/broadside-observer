---
title: Space-Efficient Lock-Free Linear-Probing Hash Table
authors:
- Hagit Attiya
- Rotem Oshman
- Noa Schiller
year: 2026
venue: arXiv:cs.DC
arxiv: '2606.17315'
doi: null
source: https://arxiv.org/abs/2606.17315
topics:
- lockfree
seed_rank: 207
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: systems
relevance_score: 9
lineage: open-addressing
cites:
- title: Hopscotch Hashing
  url: https://people.csail.mit.edu/shanir/publications/disc2008_submission_56.pdf
  year: 2008
  arxiv: null
  doi: null
- title: Abseil Swiss Tables
  url: https://abseil.io/about/design/swisstables
  year: 2017
  arxiv: null
  doi: null
- title: An Efficient Wait-free Resizable Hash Table
  url: https://doi.org/10.1145/3490146
  year: 2022
  arxiv: null
  doi: null
see:
- "400-hopscotch-hashing"
- "387-abseil-swiss-tables"
- "238-an-efficient-wait-free-resizable-hash-table"
---

# Space-Efficient Lock-Free Linear-Probing Hash Table

## One-sentence takeaway

Linear probing is one of the simplest and most space-efficient approaches to hash table design, and is widely used in sequential settings due to its compact memory layout.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Space-Efficient Lock-Free Linear-Probing Hash Table).

## Key ideas

- Linear probing is one of the simplest and most space-efficient approaches to hash table design, and is widely used in sequential settings due to its compact memory layout.
- However, designing a concurrent linear-probing hash table with strong liveness guarantees has proved difficult, and only a handful of such algorithms have been proposed, all of which either restrict concurrency or rely on large per-entry metadata, thereby compromising space efficiency.
- We present a lock-free linear-probing hash table with wait-free lookups that retains the core advantages of sequential linear probing while handling contention gracefully.
- Our design uses only a small amount of metadata per table entry: a constant number of additional bits when using LL/SC, or a logarithmic number of bits when using CAS.
- The algorithm is linearizable and lock-free, supports insert, delete, and wait-free lookup operations, and is able to safely reclaim space used by deleted elements without rebuilding the table.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2606.17315](https://arxiv.org/abs/2606.17315)
- URL: https://arxiv.org/abs/2606.17315
