---
title: "Memory Ordering in Modern Microprocessors"
authors:
  - "Paul E. McKenney"
year: 2005
venue: "Linux Journal"
arxiv: null
doi: null
source: "https://www.linuxjournal.com/article/8211"
topics:
  - memory-model
seed_rank: 406
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 7
lineage: concurrent-data-structures
cites:
  - title: "A Better x86 Memory Model: x86-TSO"
    url: "https://doi.org/10.1145/1785326.1785333"
    year: 2010
    arxiv: null
    doi: "10.1145/1785326.1785333"
  - title: "Memory Consistency and Event Ordering in Scalable Shared-Memory Multiprocessors"
    url: "https://doi.org/10.1145/325164.325102"
    year: 1990
    arxiv: null
    doi: "10.1145/325164.325102"
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
see:
  - "485-a-better-x86-memory-model-x86-tso"
  - "414-release-consistency-versus-sequential-consistency"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
---

# Memory Ordering in Modern Microprocessors

## One-sentence takeaway

McKenney’s Linux Journal pair is the practitioner map of program order vs execution order vs perceived order, plus the `smp_mb` / `smp_rmb` / `smp_wmb` / `smp_read_barrier_depends` toolkit Linux actually ships.

## Why it matters here

Anoptic lock-free rings and GRID COMMAND atomics live on x86-TSO and ARM. This is the article you hand someone before they sprinkle `seq_cst` or forget that Alpha (and some ARM) can reorder dependent loads. Kernel primitives already contain the barriers; raw atomics do not.

## Key ideas

- Caches-as-hardware-hash-tables and banked caches explain why two stores from one CPU can become visible out of program order.
- A given CPU always sees its own accesses in program order; reordering shows up only when watching someone else.
- Table of architectures: which ones reorder load/load, store/store, load/store, atomics, and dependent reads (Alpha’s infamous pointer-then-data inversion).
- Linux locking (spinlocks, RCU, semaphores) already emits the needed barriers; `atomic_inc` does not.

## Caveats

## Links

- Part I: https://www.linuxjournal.com/article/8211
- Part II: https://www.linuxjournal.com/article/8212
- Author PDF (updated 2007): https://www.rdrop.com/~paulmck/scalability/paper/ordering.2007.09.19a.pdf
