---
title: 'A Better x86 Memory Model: x86-TSO'
authors:
- Peter Sewell
- Susmit Sarkar
- Scott Owens
- Francesco Zappa Nardelli
- Magnus O. Myreen
year: 2010
venue: TPHOLs
arxiv: null
doi: 10.1145/1785326.1785333
source: https://doi.org/10.1145/1785326.1785333
topics:
- memory-model
- concurrency
seed_rank: 736
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: systems
relevance_score: 9
lineage: concurrent-data-structures
cites:
- title: 'Linearizability: A Correctness Condition for Concurrent Objects'
  url: https://doi.org/10.1145/78969.78972
  year: 1990
  arxiv: null
  doi: 10.1145/78969.78972
- title: Memory Ordering in Modern Microprocessors
  url: https://www.kernel.org/doc/ols/2005/ols2005v2-pages-107-118.pdf
  year: 2005
  arxiv: null
  doi: null
- title: Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms
  url: https://doi.org/10.1145/248052.248106
  year: 1996
  arxiv: null
  doi: 10.1145/248052.248106
see:
- "260-linearizability-a-correctness-condition-for-concurrent-objec"
- "489-memory-ordering-in-modern-microprocessors"
- "032-michael-scott-lock-free-queue"
---

# A Better x86 Memory Model: x86-TSO

## One-sentence takeaway

x86-TSO became the usable programmer-facing model for x86 atomics beneath linearizable algorithms.

## Why it matters here

Bridge from Herlihy/Wing linearizability to what Anoptic C++ atomics actually guarantee on x86.

## Key ideas

- Total Store Order with store buffer as executable model.
- Matches observed x86 behaviors better than sequential consistency.
- Enables rigorous reasoning for lock-free code.
- Pairs with Art of Multiprocessor Programming practice.

## Caveats

- ARM/POWER are weaker.
- Linearizability is a data-structure spec; TSO is a machine model.

## Links

- DOI: [10.1145/1785326.1785333](https://doi.org/10.1145/1785326.1785333)
- URL: https://doi.org/10.1145/1785326.1785333
