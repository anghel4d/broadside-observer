---
title: "Composable Memory Transactions"
authors:
  - "Tim Harris"
  - "Simon Marlow"
  - "Simon Peyton Jones"
  - "Maurice Herlihy"
year: 2005
venue: "PPoPP"
arxiv: null
doi: "10.1145/1065944.1065952"
source: "https://doi.org/10.1145/1065944.1065952"
topics:
  - "stm"
  - "lockfree-game-parallelism"
  - "embedded-scripting-dsls"
  - "composability"
seed_rank: 1105
seed_batch: "archive-2026-08-20"
reviewed: "2026-08-20"
pool: "engines"
relevance_score: 10
lineage: composable-stm
cites:
  - title: "Transactional Memory: Architectural Support for Lock-Free Data Structures"
    url: "https://doi.org/10.1145/165123.165164"
    year: 1993
    arxiv: null
    doi: "10.1145/165123.165164"
  - title: "Software Transactional Memory"
    url: "https://doi.org/10.1145/224964.224987"
    year: 1995
    arxiv: null
    doi: "10.1145/224964.224987"
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
see:
  - "377-transactional-memory-architectural-support-for-lock-free-dat"
  - "031-michael-scott-lock-free-queue"
  - "036-wait-free-synchronization"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
  - "293-epoch-based-reclamation-practical-lock-freedom"
---

# Composable Memory Transactions

## One-sentence takeaway

`atomically`, `retry`, and `orElse` — STM you can *glue*, with blocking and choice that respect abstraction, implemented as the first STM with genuine nested transactions (GHC).

## Why it matters here

The library had Herlihy–Moss HTM (377), Shavit STM, Michael–Scott (031), and epoch reclamation (293). What it did not have is the *language* paper that made STM usable: Harris–Marlow–Peyton Jones–Herlihy 2005. Locks don't compose (you cannot take lock A then lock B without knowing internals). Transactions compose in sequence, but previous STMs had no modular *blocking*. `retry` means "this transaction cannot finish, block until something it read changes, then re-run" — the programmer never names a condition variable. `orElse` is composable select. Anoptic's lock-free buses stay explicit; ano *scripts* that coordinate several ECS queries want this vocabulary (atomic block, retry, alternative) rather than exposing hazard pointers to designers.

## Key ideas

- `STM a` is a separate monad from `IO`. The type system stops you from doing I/O inside a transaction (the "bypass" problem of earlier STM).
- `retry`: abort, block on the read set, wake on change. No programmer-supplied wait condition.
- `orElse`: run the left transaction; if it retries, run the right. Needs *nested* transactions so the left's writes can be discarded.
- Formal operational semantics (exceptions mid-transaction, nested commit). Implemented in GHC; changes were localised.

## Caveats

- Optimistic STM under high contention on a hot ECS component will thrash; Anoptic's frame loop should stay lock-free/epoch, not `atomically` around the world tick.
- I/O, GPU submits, and irreversible effects cannot live in `STM`. The Awkward Squad remains awkward.
- Progress is obstruction-freedom / livelock-possible, not wait-free (036).

## Links

- DOI: [10.1145/1065944.1065952](https://doi.org/10.1145/1065944.1065952)
- Author PDF: [https://simonmar.github.io/bib/papers/stm.pdf](https://simonmar.github.io/bib/papers/stm.pdf)
- MSR: [https://www.microsoft.com/en-us/research/publication/composable-memory-transactions/](https://www.microsoft.com/en-us/research/publication/composable-memory-transactions/)
