---
title: "The Baskets Queue"
authors:
  - "Moshe Hoffman"
  - "Ori Shalev"
  - "Nir Shavit"
year: 2007
venue: "OPODIS"
arxiv: null
doi: "10.1007/978-3-540-77000-8_30"
source: "https://people.csail.mit.edu/shanir/publications/Baskets%20Queue.pdf"
topics:
  - lockfree
  - queues
seed_rank: 504
seed_batch: "lineage-lock-free-queues-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
lineage: lock-free-queues
cites:
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
    card: "032-michael-scott-lock-free-queue"
  - title: "An Optimistic Approach to Lock-Free FIFO Queues"
    url: "https://doi.org/10.1007/978-3-540-30186-8_9"
    year: 2004
    arxiv: null
    doi: "10.1007/978-3-540-30186-8_9"
    card: "502-ladan-mozes-shavit-optimistic-lock-free-fifo-queue"
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
    card: "260-linearizability-a-correctness-condition-for-concurrent-objec"
---

# The Baskets Queue

## One-sentence takeaway

Lock-free MS descendant that groups concurrent enqueues into baskets so failed CAS peers insert in parallel yet remain linearizable FIFO.

## Why it matters here

Key theoretical/practical step after MS for Anoptic: reduce tail serialization without abandoning linearizability.

## Key ideas

- Queue is an ordered list of baskets (unordered/LIFO groups) rather than a totally ordered node list.
- Failed concurrent enqueue CAS implies peers can share a basket — new parallelism among enqueues.
- Dequeue still yields linearizable FIFO across baskets.
- Empirically outperforms MS-queue in several benchmarks of the paper.

## Caveats

- Basket semantics can surprise intuition about strict node order inside a concurrency window.
- Still CAS-based linked structure; later FAA/ring designs often win raw throughput.
- Confirm Springer LNCS 4878 chapter DOI if citing formally; PDF above is canonical author copy.

## Links

- PDF: https://people.csail.mit.edu/shanir/publications/Baskets%20Queue.pdf
- OPODIS 2007, LNCS 4878, pp. 401–414
