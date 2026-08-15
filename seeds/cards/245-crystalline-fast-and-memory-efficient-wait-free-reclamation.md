---
title: 'Crystalline: Fast and Memory Efficient Wait-Free Reclamation'
authors:
- Ruslan Nikolaev
- Binoy Ravindran
year: 2021
venue: arXiv:cs.DC
arxiv: '2108.02763'
doi: null
source: https://arxiv.org/abs/2108.02763
topics:
- memory-allocation
- lockfree
seed_rank: 245
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: systems
relevance_score: 9
lineage: memory-reclamation
cites:
- title: Universal Wait-Free Memory Reclamation
  url: https://arxiv.org/abs/2006.07688
  year: 2020
  arxiv: '2006.07688'
  doi: null
- title: 'Hyaline: Fast and Transparent Lock-Free Memory Reclamation'
  url: https://arxiv.org/abs/1905.07903
  year: 2019
  arxiv: '1905.07903'
  doi: null
- title: Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms
  url: https://doi.org/10.1145/248052.248106
  year: 1996
  arxiv: null
  doi: 10.1145/248052.248106
- title: 'Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects'
  url: https://doi.org/10.1109/TPDS.2004.8
  year: 2004
  arxiv: null
  doi: 10.1109/TPDS.2004.8
see:
- "259-universal-wait-free-memory-reclamation"
- "456-hyaline-fast-and-transparent-lock-free-memory-reclamati"
- "031-michael-scott-lock-free-queue"
- "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
---

# Crystalline: Fast and Memory Efficient Wait-Free Reclamation

## One-sentence takeaway

Crystalline is wait-free even with dynamically recycled threads, lets any thread reclaim any other thread's retirees, and balances that work so it is both faster and leaner than EBR as thread counts grow.

## Why it matters here

Anoptic job workers come and go; a reclaimer that stays wait-free across thread reuse and does not pin retired nodes to the retiring core is the one that fits a fiber/job pool.

## Key ideas

- EBR is fast but blocking (unbounded memory); hazard pointers are bounded but slow and only lock-free in general.
- WFE is wait-free but memory-heavy and weak when oversubscribed; Hyaline is fast and lean but not wait-free.
- Crystalline wants all three: wait-freedom, high throughput, high memory efficiency.
- Asynchronous reclamation (any thread can free any retiree) plus an almost-balanced reclaim workload are what deliver the last two.
- Uses widely available x86-64 / ARM64 instructions; throughput beats typical EBR as the thread count grows.

## Caveats

## Links

- arXiv: [2108.02763](https://arxiv.org/abs/2108.02763)
- PDF: https://arxiv.org/pdf/2108.02763
