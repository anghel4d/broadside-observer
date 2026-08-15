---
title: 'Linearizability: A Correctness Condition for Concurrent Objects'
authors:
- Maurice P. Herlihy
- Jeannette M. Wing
year: 1990
venue: TOPLAS
arxiv: null
doi: 10.1145/78969.78972
source: https://doi.org/10.1145/78969.78972
topics:
- lockfree
- concurrency
seed_rank: 203
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: systems
relevance_score: 10
cites:
- title: Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms
  url: https://doi.org/10.1145/248052.248106
  year: 1996
  arxiv: null
  doi: 10.1145/248052.248106
- title: Wait-Free Synchronization
  url: https://doi.org/10.1145/114005.102808
  year: 1991
  arxiv: null
  doi: 10.1145/114005.102808
- title: The Baskets Queue
  url: https://people.csail.mit.edu/shanir/publications/Baskets%20Queue.pdf
  year: 2007
  arxiv: null
  doi: 10.1007/978-3-540-77000-8_30
- title: Fast Concurrent Queues for x86 Processors
  url: https://doi.org/10.1145/2442516.2442527
  year: 2013
  arxiv: null
  doi: 10.1145/2442516.2442527
- title: A Wait-Free Queue as Fast as Fetch-and-Add
  url: https://doi.org/10.1145/2851141.2851168
  year: 2016
  arxiv: null
  doi: 10.1145/2851141.2851168
- title: How to Make a Multiprocessor Computer That Correctly Executes Multiprocess
    Programs
  url: https://doi.org/10.1109/TC.1979.1675439
  year: 1979
  arxiv: null
  doi: 10.1109/TC.1979.1675439
- title: The Art of Multiprocessor Programming
  url: https://www.elsevier.com/books/the-art-of-multiprocessor-programming/herlihy/978-0-12-397337-5
  year: 2008
  arxiv: null
  doi: null
- title: 'A Better x86 Memory Model: x86-TSO'
  url: https://doi.org/10.1145/1785326.1785333
  year: 2010
  arxiv: null
  doi: 10.1145/1785326.1785333
see:
- "031-michael-scott-lock-free-queue"
- "036-wait-free-synchronization"
- "420-hoffman-shalev-shavit-baskets-queue"
- "423-morrison-afek-lcrq-fast-concurrent-queues-x86"
- "426-yang-mellor-crummey-wait-free-queue-fetch-and-add"
- "472-how-to-make-a-multiprocessor-computer-that-correctly-execute"
- "124-the-art-of-multiprocessor-programming"
- "485-a-better-x86-memory-model-x86-tso"
lineage: concurrent-data-structures
---

# Linearizability: A Correctness Condition for Concurrent Objects

## One-sentence takeaway

A concurrent object is linearizable if every operation appears to take effect instantaneously at a single point between its invocation and response, matching some sequential history of the object's spec.

## Why it matters here

Every Anoptic lock-free queue, pool, and job deque is judged against this local sequential-spec test; it is stronger than sequential consistency and composes across objects.

## Key ideas

- Histories are sequences of invocations and responses; linearizability requires a linearization point inside each operation's interval.
- The condition is local: a system is linearizable iff each object is, so correctness proofs do not need a global schedule.
- It is non-blocking as a specification: a pending invocation can always be completed without waiting for other processes.
- Compared with sequential consistency, linearizability preserves real-time order across processes, which sequential consistency may rearrange.
- Sequential specifications stay ordinary pre/post conditions; concurrency is confined to the linearization argument.

## Caveats

## Links

- DOI: [10.1145/78969.78972](https://doi.org/10.1145/78969.78972)
- ACM Digital Library: https://dl.acm.org/doi/10.1145/78969.78972
