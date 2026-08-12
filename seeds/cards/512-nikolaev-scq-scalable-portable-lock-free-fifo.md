---
title: "A Scalable, Portable, and Memory-Efficient Lock-Free FIFO Queue"
authors:
  - "Ruslan Nikolaev"
year: 2019
venue: "DISC"
arxiv: "1908.04511"
doi: "10.4230/LIPIcs.DISC.2019.28"
source: "https://arxiv.org/abs/1908.04511"
topics:
  - lockfree
  - queues
seed_rank: 512
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
    card: "032-michael-scott-lock-free-queue"
  - title: "Fast Concurrent Queues for x86 Processors"
    url: "https://doi.org/10.1145/2442516.2442527"
    year: 2013
    arxiv: null
    doi: "10.1145/2442516.2442527"
    card: "507-morrison-afek-lcrq-fast-concurrent-queues-x86"
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
    card: "260-linearizability-a-correctness-condition-for-concurrent-objec"
  - title: "wCQ: A Fast Wait-Free Queue with Bounded Memory Usage"
    url: "https://arxiv.org/abs/2201.02179"
    year: 2022
    arxiv: "2201.02179"
    doi: "10.1145/3490148.3538572"
    card: "313-wcq-a-fast-wait-free-queue-with-bounded-memory-usage"
---

# A Scalable, Portable, and Memory-Efficient Lock-Free FIFO Queue

## One-sentence takeaway

SCQ/LSCQ: ABA-safe FAA ring (and linked unbounded variant) that is lock-free, linearizable, single-width-CAS portable, and memory-thrifty.

## Why it matters here

Direct parent of wCQ; preferred academic lock-free ring when Anoptic wants LCRQ speed without CAS2 or huge memory.

## Key ideas

- SCQ bounded ring using FAA on hot spots with indirection to avoid CRQ livelocks.
- ABA-safe and standalone — no external allocator/SMR required for the bounded design.
- LSCQ chains SCQ rings for unbounded capacity more memory-efficiently than LCRQ.
- Portable to PowerPC and other single-width CAS ISAs; evaluated on x86-64 and PowerPC.

## Caveats

- Wait-freedom comes later (wCQ); SCQ itself is lock-free.
- API/implementation details differ across author releases — pin a commit when shipping.
- Seed card; promote before relying on fine-grained claims.

## Links

- arXiv: [1908.04511](https://arxiv.org/abs/1908.04511)
- DOI: [10.4230/LIPIcs.DISC.2019.28](https://doi.org/10.4230/LIPIcs.DISC.2019.28)
- PDF: https://rusnikola.github.io/files/ringpaper-disc.pdf
