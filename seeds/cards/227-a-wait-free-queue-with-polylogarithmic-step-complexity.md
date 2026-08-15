---
title: "A Wait-free Queue with Polylogarithmic Step Complexity"
authors:
  - "Hossein Naderibeni"
  - "Eric Ruppert"
year: 2023
venue: "PODC 2023 / arXiv:cs.DC"
arxiv: "2305.07229"
doi: null
source: "https://arxiv.org/abs/2305.07229"
topics:
  - lockfree
seed_rank: 227
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: concurrent-data-structures
cites:
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
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
  - title: "Wait-Free Queues with Multiple Enqueuers and Dequeuers"
    url: "https://doi.org/10.1145/1941553.1941585"
    year: 2011
    arxiv: null
    doi: "10.1145/1941553.1941585"
  - title: "A Wait-Free Queue as Fast as Fetch-and-Add"
    url: "https://doi.org/10.1145/2851141.2851168"
    year: 2016
    arxiv: null
    doi: "10.1145/2851141.2851168"
  - title: "wCQ: A Fast Wait-Free Queue with Bounded Memory Usage"
    url: "https://arxiv.org/abs/2201.02179"
    year: 2022
    arxiv: "2201.02179"
    doi: "10.1145/3490148.3538572"
see:
  - "031-michael-scott-lock-free-queue"
  - "036-wait-free-synchronization"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
  - "421-kogan-petrank-wait-free-queues-multiple-enqueuers-dequeuers"
  - "426-yang-mellor-crummey-wait-free-queue-fetch-and-add"
  - "243-wcq-a-fast-wait-free-queue-with-bounded-memory-usage"
---

# A Wait-free Queue with Polylogarithmic Step Complexity

## One-sentence takeaway

A linearizable wait-free MPMC queue built from single-word CAS does enqueue in O(log p) steps and dequeue in O(log² p + log q), breaking the Ω(p) amortized barrier of prior CAS queues.

## Why it matters here

Anoptic job queues cannot accept a hidden linear scan of every worker on the worst-case path; this is the first CAS queue whose worst-case steps are polylog in the thread count.

## Key ideas

- Every previous lock-free CAS queue has Ω(p) amortized steps per op in some execution, p = number of processes.
- The new wait-free design uses only single-word CAS.
- Enqueue is O(log p); dequeue is O(log² p + log q) where q is the current queue length.
- A bounded-space variant is O(log p · log(p+q)) amortized per operation.
- Appeared at PODC 2023.

## Caveats

## Links

- arXiv: [2305.07229](https://arxiv.org/abs/2305.07229)
- PDF: https://arxiv.org/pdf/2305.07229
