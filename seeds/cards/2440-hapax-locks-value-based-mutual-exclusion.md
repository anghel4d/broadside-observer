---
title: "Hapax Locks: Value-Based Mutual Exclusion"
authors:
  - "Dave Dice"
  - "Alex Kogan"
year: 2025
venue: "arXiv preprint (cs.DC)"
arxiv: "2511.14608"
doi: null
source: "https://arxiv.org/abs/2511.14608"
topics:
  - "locks"
  - "concurrency"
  - "lockfree"
seed_rank: 2440
seed_batch: "craft-2026-10-27"
reviewed: "2026-10-27"
pool: "systems"
lineage: concurrent-data-structures
relevance_score: 8
cites:
  - title: "Hapax Locks: Value-Based Mutual Exclusion"
    url: "https://arxiv.org/abs/2511.14608"
    year: 2025
    arxiv: "2511.14608"
    doi: null
see: ["1598-queue-locks-on-cache-coherent-multiprocessors", "1653-wait-free-locks-should-not-fear-later-arrivals", "1630-concurrent-programming-without-locks"]
---

# Hapax Locks: Value-Based Mutual Exclusion

## One-sentence takeaway

Hapax Locks are a FIFO lock with constant-time arrival and unlock, small space and low coherence traffic under contention, built so that no pointers ever change hands or escape between threads, which makes them easy to retrofit under existing lock APIs.

## Why it matters here

Anoptic leans on wait-free buses, but job systems, asset loaders and allocators still need a few real locks, and the best queue locks (MCS, CLH from the Mellor-Crummey–Scott line we already hold) need per-thread queue nodes whose pointers are passed between threads. That ties them to node lifetime and allocator rules, which is why many engines fall back to ticket locks or spinlocks. A FIFO, low-traffic lock that works with values instead of shared nodes fits a C23 arena-style runtime better. Dice and Kogan (Oracle Labs) have a long record of locks that ship.

## Key ideas

- **Value-based admission.** Ownership passes through values rather than through queue nodes linked by pointers, so no pointer shifts or escapes ownership between threads.
- **Constant-time paths.** Both arrival and unlock are O(1).
- **FIFO admission** like ticket and queue locks, with local-ish spinning so contention generates little coherence traffic in the common case.
- **Few runtime dependencies.** No thread-local node management, so it drops in under existing lock interfaces.
- **Performance** is reported as comparable to state-of-the-art locks in latency and scalability.

## Caveats

I read only the abstract, so I can't state the mechanism or benchmarks in detail. "Relatively little coherence traffic in the common case" implies worse cases exist. Like all FIFO locks, it is likely sensitive to preemption and oversubscription. It was first posted in November 2025 and appeared in this window as an update.

## Links

- arXiv abstract: https://arxiv.org/abs/2511.14608
- PDF: https://arxiv.org/pdf/2511.14608
