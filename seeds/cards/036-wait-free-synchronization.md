---
title: "Wait-Free Synchronization"
authors:
  - "Maurice Herlihy"
year: 1991
venue: "ACM TOPLAS"
arxiv: null
doi: "10.1145/114005.102808"
source: "https://doi.org/10.1145/114005.102808"
topics:
  - lockfree
seed_rank: 36
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 10
lineage: concurrent-data-structures
cites:
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
see:
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
  - "031-michael-scott-lock-free-queue"
---

# Wait-Free Synchronization

## One-sentence takeaway

Herlihy defines wait-freedom (every thread finishes in a finite number of its own steps) and proves the consensus hierarchy: a wait-free object of consensus number n cannot implement one of number n+1.

## Why it matters here

Anoptic’s concurrency pillar starts here. “Lock-free” and “wait-free” are not synonyms; MS-queue is lock-free, and the hierarchy tells you when CAS, FAA, or a consensus object is the right primitive.

## Key ideas

- Wait-free: a stalled or slow peer cannot prevent another thread from completing. Lock-free only guarantees *some* thread makes progress. Obstruction-free is weaker still.
- Consensus number of an object is the largest n such that n threads can wait-free solve consensus using that object plus registers.
- Atomic registers have consensus number 1; FIFO queues and test-and-set have 2; compare-and-swap, load-linked/store-conditional, and memory-to-memory move are universal (∞).
- Universality: any sequential object has a wait-free linearizable implementation from a consensus object of sufficient number — the theoretical license for “just use CAS.”
- The paper is the 1991 TOPLAS journal version of the PODC results that rewired concurrent-object theory after Herlihy–Wing linearizability (1990).

## Caveats

## Links

- DOI: [10.1145/114005.102808](https://doi.org/10.1145/114005.102808)
