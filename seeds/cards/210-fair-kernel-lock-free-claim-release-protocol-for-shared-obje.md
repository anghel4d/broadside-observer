---
title: "Fair Kernel-Lock-Free Claim/Release Protocol for Shared Object Access in Cooperatively Scheduled Runtimes"
authors:
  - "Kevin Chalmers"
  - "Jan Bækgaard Pedersen"
year: 2025
venue: "arXiv:cs.DC"
arxiv: "2510.10818"
doi: null
source: "https://arxiv.org/abs/2510.10818"
topics:
  - lockfree
seed_rank: 210
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
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
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "031-michael-scott-lock-free-queue"
  - "036-wait-free-synchronization"
---

# Fair Kernel-Lock-Free Claim/Release Protocol for Shared Object Access in Cooperatively Scheduled Runtimes

## One-sentence takeaway

A spin-free, kernel-lock-free mutex for cooperatively scheduled ProcessJ processes is proven FIFO-fair and linearizable in CSP/FDR.

## Why it matters here

Anoptic fibers and GRID COMMAND sim ticks are cooperative: a claim/release that parks waiters on a lock-free queue instead of spinning or taking a kernel mutex matches that runtime.

## Key ideas

- Designed so ProcessJ processes can claim exclusive access to shared IPC channels without a kernel lock or busy-wait.
- Waiters enqueue on a lock-free queue; release hands the object to the next queued process in FIFO order.
- CSP models of the protocol and of a mutex spec are checked with FDR to show mutex behavior plus fairness.
- A reusable fairness oracle and stability-based proof method is offered for other coroutine runtimes.
- The protocol is linearizable: claim/release appear to take effect in queue order.

## Caveats

## Links

- arXiv: [2510.10818](https://arxiv.org/abs/2510.10818)
- PDF: https://arxiv.org/pdf/2510.10818
