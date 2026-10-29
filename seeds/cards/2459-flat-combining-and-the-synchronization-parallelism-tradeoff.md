---
title: "Flat Combining and the Synchronization-Parallelism Tradeoff"
authors:
  - "Danny Hendler"
  - "Itai Incze"
  - "Nir Shavit"
  - "Moran Tzafrir"
year: 2010
venue: "SPAA 2010 (22nd ACM Symposium on Parallelism in Algorithms and Architectures)"
arxiv: null
doi: "10.1145/1810479.1810540"
source: "https://www.cs.bgu.ac.il/~hendlerd/papers/flat-combining.pdf"
topics:
  - flat-combining
  - concurrent-data-structures
  - synchronization
  - delegation
  - lock-free-queues
seed_rank: 2459
seed_batch: "archive-2026-10-30"
reviewed: "2026-10-30"
pool: "systems"
relevance_score: 9
lineage: concurrent-data-structures
see:
  - 031-michael-scott-lock-free-queue
  - 036-wait-free-synchronization
  - 1598-queue-locks-on-cache-coherent-multiprocessors
  - 1491-nblfq-a-lock-free-mpmc-queue-optimized-for-low-contention
cites:
  - title: "Flat Combining and the Synchronization-Parallelism Tradeoff"
    url: "https://doi.org/10.1145/1810479.1810540"
    year: 2010
    doi: "10.1145/1810479.1810540"
---

# Flat Combining and the Synchronization-Parallelism Tradeoff

## One-sentence takeaway

Hendler, Incze, Shavit and Tzafrir show that a single global lock plus a list of per-thread request records, where whichever thread grabs the lock applies everyone's pending operations in one pass, beats the best lock-free queues and stacks by several times under contention, because a sequential pass over many requests is cheaper than many threads fighting over the same cache lines.

## Why it matters here

Anoptic's wait-free buses and ano's command buffers are exactly the hot shared structures where this trade-off bites. Flat combining is the baseline any bespoke MPMC queue or command sink should be measured against, and its key idea, that batching k operations can cost less than k independent ones (k removeMin on a skiplist in Θ(k + log n)), is the same argument ano makes for applying masked array effects in bulk rather than per entity.

## Key ideas

- **Publication list plus one lock.** Each thread owns a record in a shared list and writes its request there. A thread that wins a CAS on the global lock becomes the combiner, walks the list, applies every pending request to a plain sequential structure, and writes results back; the others spin on their own record. Posting a request needs no store-load memory barrier.
- **Aging and cleanup.** Records carry the combining-pass count of their last use; the combiner occasionally unlinks records that have gone stale, and a thread whose record was removed simply re-inserts it on its next access.
- **When it pays.** The paper frames the condition as k combined operations costing less than kδ, the cost of k separate synchronized ones. Queues (with fat nodes), stacks, and priority queues qualify, since the combiner can eliminate push/pop pairs or batch removeMin.
- **Correctness.** The resulting objects are linearizable, and the scheme is starvation-free.
- **Results.** On a 128-way Sun T5140 Niagara the FC queue is 4–7× faster than the Michael–Scott queue from about 4 threads and stays more than 4× faster at high concurrency; FC is 2–4× faster than combining trees, and the FC stack beats the Treiber stack by 9× and the elimination-backoff stack by more than 2×.

## Caveats

Search trees and other structures with little contention on one point gain nothing, since the combiner serializes work that could run in parallel. It isn't robust to preemption: a descheduled combiner stalls everyone, and on the Intel Nehalem runs the advantage disappears once software threads outnumber hardware threads. At very high mutation rates fine-grained designs eventually win back.

## Links

- Paper (PDF, author copy): https://www.cs.bgu.ac.il/~hendlerd/papers/flat-combining.pdf
- Paper (DOI, SPAA 2010): https://doi.org/10.1145/1810479.1810540
