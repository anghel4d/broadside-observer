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
seed_rank: 269
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/tpds.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/tpds.2004.8"
    card: "025-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - title: "Michael & Scott Lock-Free Queue"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
    card: "032-michael-scott-lock-free-queue"
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
    card: "037-wait-free-synchronization"
---

# Fair Kernel-Lock-Free Claim/Release Protocol for Shared Object Access in Cooperatively Scheduled Runtimes

## One-sentence takeaway

We present the first spin-free, kernel-lock-free mutex that cooperates with user-mode schedulers and is formally proven FIFO-fair and linearizable using CSP/FDR.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Fair Kernel-Lock-Free Claim/Release Protocol for Shared Object Access in Coopera).

## Key ideas

- We present the first spin-free, kernel-lock-free mutex that cooperates with user-mode schedulers and is formally proven FIFO-fair and linearizable using CSP/FDR.
- Our fairness oracle and stability-based proof method are reusable across coroutine runtime designs.
- We designed the claim/release protocol for a process-oriented language -- ProcessJ -- to manage the race for claiming shared inter-process communication channels.
- Internally, we use a lock-free queue to park waiting processes for gaining access to a shared object, such as exclusive access to a shared channel to read from or write to.
- The queue ensures control and fairness for processes wishing to access a shared resource, as the protocol handles claim requests in the order they are inserted into the queue.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2510.10818](https://arxiv.org/abs/2510.10818)
- URL: https://arxiv.org/abs/2510.10818
