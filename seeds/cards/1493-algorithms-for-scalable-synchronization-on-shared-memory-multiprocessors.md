---
title: "Algorithms for Scalable Synchronization on Shared-Memory Multiprocessors"
authors: ["John M. Mellor-Crummey", "Michael L. Scott"]
year: 1991
venue: "ACM Transactions on Computer Systems"
arxiv: null
doi: "10.1145/103727.103729"
source: "https://www.cs.rochester.edu/~scott/papers/1991_TOCS_synch.pdf"
topics: [lockfree, engine]
seed_rank: 1493
seed_batch: "archive-2026-09-02"
reviewed: "2026-09-02"
pool: "engines"
relevance_score: 10
lineage: concurrent-data-structures
cites:
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "The Performance of Spin Lock Alternatives for Shared-Memory Multiprocessors"
    url: "https://doi.org/10.1109/71.80120"
    year: 1990
    arxiv: null
    doi: "10.1109/71.80120"
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
see:
  - "031-michael-scott-lock-free-queue"
  - "036-wait-free-synchronization"
  - "426-yang-mellor-crummey-wait-free-queue-fetch-and-add"
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
---

# Algorithms for Scalable Synchronization on Shared-Memory Multiprocessors

## One-sentence takeaway

MCS queued locks give each waiter a private `qnode` to spin on, so mutual exclusion stays FIFO and cache-local instead of bouncing a single `locked` flag around the interconnect — the scalable locking twin of the later Michael–Scott queue.

## Why it matters here

Anoptic worker threads still need a fair local-spin lock when a CAS loop is the wrong tool: allocator bins, job-queue hand-off, Vulkan-wait fallbacks, GRID COMMAND order serialisation. Test-and-set and ticket locks (Anderson 1990) flood the bus; Herlihy wait-freedom (036) and the MS-queue (031) do not replace a mutex. Mellor-Crummey–Scott 1991 is that mutex. Yang–Mellor-Crummey WFQueue (426) is the later wait-free queue from the same Rochester line, not this paper.

## Key ideas

- **Local spinning.** Each thread enqueues its own `qnode` (`next`, `locked`) with a swap/CAS on the tail; it spins only on `qnode.locked`. Unlock stores `false` into the successor's node — one cache line, no remote spinning.
- **FIFO fairness.** The implicit queue is the lock. Starvation of a waiter requires the holder to never unlock, not a lucky looper winning the flag.
- **Compare-and-swap vs fetch-and-store.** The paper gives both an MCS lock that needs CAS to swing tail on empty-queue unlock, and variants that make do with atomic swap plus a more careful empty-queue protocol.
- **More than locks.** The same local-spin / combining-tree vocabulary covers barriers and fetch-and-φ reduction; the lock is the cell we actually ship.
- **Evidence.** TOCS 9(1), February 1991, doi `10.1145/103727.103729`. Author PDF at Rochester. Became the Linux `qspinlock` ancestor and the standard citation for "stop spinning on a shared flag."

## Caveats

MCS is *blocking* mutual exclusion, not lock-free: a preempted holder stalls the queue. On a sleeping OS you want a two-phase park (Linux qspinlock / MCS+futex), not a pure spin. Node lifetime is per-acquire (stack allocation is the usual C trick); do not pretend this paper solves reclamation — that is hazard pointers (024) for the lock-free side. Not a remint of MS-queue 031, Herlihy 036, or YMC 426.

## Links

- PDF: https://www.cs.rochester.edu/~scott/papers/1991_TOCS_synch.pdf
- DOI: https://doi.org/10.1145/103727.103729
