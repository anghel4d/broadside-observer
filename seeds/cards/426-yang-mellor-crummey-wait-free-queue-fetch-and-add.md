---
title: "A Wait-Free Queue as Fast as Fetch-and-Add"
authors:
  - "Chaoran Yang"
  - "John Mellor-Crummey"
year: 2016
venue: "PPoPP"
arxiv: null
doi: "10.1145/2851141.2851168"
source: "https://doi.org/10.1145/2851141.2851168"
topics:
  - lockfree
  - queues
seed_rank: 426
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
  - title: "Fast Concurrent Queues for x86 Processors"
    url: "https://doi.org/10.1145/2442516.2442527"
    year: 2013
    arxiv: null
    doi: "10.1145/2442516.2442527"
  - title: "Wait-Free Queues with Multiple Enqueuers and Dequeuers"
    url: "https://doi.org/10.1145/1941553.1941585"
    year: 2011
    arxiv: null
    doi: "10.1145/1941553.1941585"
  - title: "A Methodology for Creating Fast Wait-Free Data Structures"
    url: "https://doi.org/10.1145/2145816.2145835"
    year: 2012
    arxiv: null
    doi: "10.1145/2145816.2145835"
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
  - "031-michael-scott-lock-free-queue"
  - "423-morrison-afek-lcrq-fast-concurrent-queues-x86"
  - "421-kogan-petrank-wait-free-queues-multiple-enqueuers-dequeuers"
  - "422-kogan-petrank-fast-path-slow-path-wait-free"
  - "036-wait-free-synchronization"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
---

# A Wait-Free Queue as Fast as Fetch-and-Add

## One-sentence takeaway

YMC/WFQueue: first wait-free FIFO built around fetch-and-add, matching FAA microbenchmark throughput under extreme contention.

## Why it matters here

Shows Anoptic can demand wait-freedom without surrendering LCRQ-class speed when FAA is available.

## Key ideas

- Wait-free FIFO using FAA rather than CAS loops on the hot path.
- Custom epoch-based reclamation; on x86 typical path avoids extra fences.
- Empirically outperforms prior non-wait-free designs at high contention on four architectures.
- Open artifact lineage (chaoran/fast-wait-free-queue) still used as benchmark baseline.

## Caveats

- Requires FAA (and careful epoch SMR); not a pure CAS portability story.
- Implementation complexity is substantial versus Vyukov rings.
- Seed card; promote before relying on fine-grained claims.

## Links

- DOI: [10.1145/2851141.2851168](https://doi.org/10.1145/2851141.2851168)
- Code: https://github.com/chaoran/fast-wait-free-queue
