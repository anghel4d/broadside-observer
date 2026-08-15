---
title: The Art of Multiprocessor Programming
authors:
- Maurice Herlihy
- Nir Shavit
year: 2008
venue: Morgan Kaufmann
arxiv: null
doi: null
source: https://shop.elsevier.com/books/the-art-of-multiprocessor-programming/herlihy/978-0-12-370591-4
topics:
- lockfree
- concurrency
seed_rank: 124
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: engines
relevance_score: 9
lineage: concurrent-data-structures
cites:
- title: 'Linearizability: A Correctness Condition for Concurrent Objects'
  url: https://doi.org/10.1145/78969.78972
  year: 1990
  arxiv: null
  doi: 10.1145/78969.78972
- title: Wait-Free Synchronization
  url: https://doi.org/10.1145/114005.102808
  year: 1991
  arxiv: null
  doi: 10.1145/114005.102808
see:
- "203-linearizability-a-correctness-condition-for-concurrent-objec"
- "036-wait-free-synchronization"
---

# The Art of Multiprocessor Programming

## One-sentence takeaway

Herlihy and Shavit’s 2008 textbook is the working manual for linearizability: it takes you from mutual exclusion through lock-free stacks, queues, and hash tables, with Java implementations of every structure.

## Why it matters here

Broadside’s job system, command queues, and ECS column swaps are concurrent objects. Linearizability plus the lock-free stack/queue recipes are the contract those structures have to meet; the 2008 first edition is the one this card is pinned to, not the 2020 rewrite.

## Key ideas

- Linearizability (ch. 3) is the correctness condition: each method call appears to take effect at a single instant between its invocation and response, and that sequential history is legal for the object.
- Progress comes in grades — deadlock-freedom, lock-freedom, wait-freedom — and consensus number ranks primitives (CAS is universal; a wait-free concurrent object can be built from it).
- Practical locks first: test-and-set, ticket, MCS/CLH queues, then monitors. Then lock-based lists (coarse, fine, optimistic, lazy) as the template for every later structure.
- Lock-free stacks and queues (chs. 10–11) are the ABA problem in production form: a CAS on a recycled node succeeds against a stale pointer unless you version it or defer reclamation.
- Later chapters cover counting networks, concurrent hashing, skiplists, priority queues, work-stealing/futures, barriers, and a first-cut transactional-memory chapter — all with Java code, not pseudocode.

## Caveats

## Links

- Elsevier shop (1st ed., ISBN 978-0-12-370591-4): https://shop.elsevier.com/books/the-art-of-multiprocessor-programming/herlihy/978-0-12-370591-4
