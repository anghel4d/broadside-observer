---
title: "Fast Concurrent Queues for x86 Processors"
authors:
  - "Adam Morrison"
  - "Yehuda Afek"
year: 2013
venue: "PPoPP"
arxiv: null
doi: "10.1145/2442516.2442527"
source: "https://doi.org/10.1145/2442516.2442527"
topics:
  - lockfree
  - queues
seed_rank: 507
seed_batch: "lineage-concurrent-data-structures-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: concurrent-data-structures
cites:
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
  - title: "A Wait-Free Queue as Fast as Fetch-and-Add"
    url: "https://doi.org/10.1145/2851141.2851168"
    year: 2016
    arxiv: null
    doi: "10.1145/2851141.2851168"
  - title: "A Scalable, Portable, and Memory-Efficient Lock-Free FIFO Queue"
    url: "https://arxiv.org/abs/1908.04511"
    year: 2019
    arxiv: "1908.04511"
    doi: "10.4230/LIPIcs.DISC.2019.28"
see:
  - "032-michael-scott-lock-free-queue"
  - "260-linearizability-a-correctness-condition-for-concurrent-objec"
  - "510-yang-mellor-crummey-wait-free-queue-fetch-and-add"
  - "512-nikolaev-scq-scalable-portable-lock-free-fifo"
---

# Fast Concurrent Queues for x86 Processors

## One-sentence takeaway

LCRQ: Michael–Scott list of concurrent ring queues coordinated primarily with fetch-and-add for huge x86 throughput.

## Why it matters here

Industrial-grade scalability leap after MS — baseline Anoptic should beat or match for high-rate MPMC event/job queues.

## Key ideas

- LCRQ = linked list of CRQ ring buffers; closed rings spawn new rings (MS spine + ring interiors).
- Head/tail indices advanced with F&A to spread threads across slots; CAS mostly uncontended on slots.
- Nonblocking and strong under oversubscription vs combining/lock queues.
- Classic caveat: original design leans on double-width CAS (CAS2) on x86.

## Caveats

- CAS2 / portability issues motivated LPRQ, SCQ, FAAArrayQueue.
- Memory growth of rings under imbalance needs attention.
- Seed card; promote before relying on fine-grained claims.

## Links

- DOI: [10.1145/2442516.2442527](https://doi.org/10.1145/2442516.2442527)
- PDF: https://www.cs.tau.ac.il/~mad/publications/ppopp2013-x86queues.pdf
