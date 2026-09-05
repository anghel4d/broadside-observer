---
title: "Big Atomics"
authors: ["Daniel Anderson", "Guy E. Blelloch", "Siddhartha Jayanti"]
year: 2025
venue: "arXiv (cs.DC)"
arxiv: "2501.07503"
doi: null
source: "https://arxiv.org/abs/2501.07503"
topics: [lockfree-game-parallelism, concurrent-data-structures]
seed_rank: 1589
seed_batch: "craft-2026-09-05"
reviewed: "2026-09-05"
pool: "engines"
relevance_score: 10
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
see:
  - "031-michael-scott-lock-free-queue"
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "1491-nblfq-a-lock-free-mpmc-queue-optimized-for-low-contention"
---

# Big Atomics

## One-sentence takeaway

Lock-free *k*-word linearizable registers (load / store / CAS) for arbitrary *k*, via a fast-path/slow-path design that stays close to hardware atomics and is used to build a concurrent hash table.

## Why it matters here

Anoptic lock-free ECS queues and sparse-set swaps keep hitting “swing two words at once” (ptr+version, key+generation, head+tag) without a portable double-CAS. NBLFQ 1491 already special-cases 128-bit DWCAS; MS 31 is one-word. Big Atomics is the leftover: a reusable *k*-word register instead of another ad-hoc double-CAS or a Harris-style MCAS helping storm (925/364). Ship this for version lists, tuples, and LL/SC emulation on the Anoptic buses this week.

## Key ideas

- **k-word linearizable register.** Load, store, and CAS over an arbitrary-width word. Hardware gives *k* = 1 and sometimes *k* = 2 (x86 DCAS); this paper implements any *k*.
- **Fast-path / slow-path lock-free.** Uncontended ops stay on a fast path close to a native atomic; contention falls into a helping slow path rather than a mutex. Same family of idea as Kogan–Petrank 422, applied to registers instead of queues.
- **Clients named in the paper.** Atomic tuples, version lists, and LL/SC built on top of the register. The existence proof is a concurrent hash table with arbitrary-length keys and values.
- **Numbers given.** Lock-free variants vs `std::atomic`, a lock, sequence locks, and an indirect design, across thread counts, load/store mix, contention, oversubscription, and number of atomics: close to the fastest everywhere, far ahead under oversubscription. Hash table vs Intel TBB, Folly, libcuckoo, and Boost: using big atomics in the table design is the claim, not “we beat every table forever.”

## Caveats

Software *k*-CAS is not a replacement for a well-placed single-word CAS (NBLFQ 1491, MS 31). Reclamation is still your problem — hazard pointers 24 (or epoch/RCU) sit underneath, not inside. Hash-table bakeoff is evidence of utility, not an Anoptic entity-map drop-in. Do not remint 31 / 24 / 1491 / 925 / 364 / 422 / 207.

## Links

- arXiv abs: https://arxiv.org/abs/2501.07503
- PDF: https://arxiv.org/pdf/2501.07503
