---
title: "Michael & Scott Lock-Free Queue"
authors:
  - "Maged M. Michael"
  - "Michael L. Scott"
year: 1996
venue: "PODC"
arxiv: null
doi: "10.1145/248052.248106"
source: "https://doi.org/10.1145/248052.248106"
topics:
  - lockfree
  - engine
seed_rank: 31
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 10
lineage: concurrent-data-structures
cites:
  - title: "Linearizability: A Correctness Condition for Concurrent Objects"
    url: "https://doi.org/10.1145/78969.78972"
    year: 1990
    arxiv: null
    doi: "10.1145/78969.78972"
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/TPDS.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/TPDS.2004.8"
  - title: "Safe Memory Reclamation for Dynamic Lock-Free Objects Using Atomic Reads and Writes"
    url: "https://doi.org/10.1145/571825.571829"
    year: 2002
    arxiv: null
    doi: "10.1145/571825.571829"
  - title: "A Simple, Fast and Scalable Non-Blocking Concurrent FIFO Queue for Shared Memory Multiprocessor Systems"
    url: "https://doi.org/10.1145/378580.378611"
    year: 2001
    arxiv: null
    doi: "10.1145/378580.378611"
  - title: "An Optimistic Approach to Lock-Free FIFO Queues"
    url: "https://doi.org/10.1007/978-3-540-30186-8_9"
    year: 2004
    arxiv: null
    doi: "10.1007/978-3-540-30186-8_9"
  - title: "The Baskets Queue"
    url: "https://people.csail.mit.edu/shanir/publications/Baskets%20Queue.pdf"
    year: 2007
    arxiv: null
    doi: "10.1007/978-3-540-77000-8_30"
  - title: "Wait-Free Queues with Multiple Enqueuers and Dequeuers"
    url: "https://doi.org/10.1145/1941553.1941585"
    year: 2011
    arxiv: null
    doi: "10.1145/1941553.1941585"
  - title: "Fast Concurrent Queues for x86 Processors"
    url: "https://doi.org/10.1145/2442516.2442527"
    year: 2013
    arxiv: null
    doi: "10.1145/2442516.2442527"
  - title: "Bounded MPMC Queue (1024cores)"
    url: "https://www.1024cores.net/home/lock-free-algorithms/queues/bounded-mpmc-queue"
    year: 2010
    arxiv: null
    doi: null
  - title: "LMAX Disruptor"
    url: "https://lmax-exchange.github.io/disruptor/"
    year: 2011
    arxiv: null
    doi: null
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
  - title: "wCQ: A Fast Wait-Free Queue with Bounded Memory Usage"
    url: "https://arxiv.org/abs/2201.02179"
    year: 2022
    arxiv: "2201.02179"
    doi: "10.1145/3490148.3538572"
  - title: "Jiffy: A Fast, Memory Efficient, Wait-Free Multi-Producers Single-Consumer Queue"
    url: "https://arxiv.org/abs/2010.14189"
    year: 2020
    arxiv: "2010.14189"
    doi: null
  - title: "A Wait-free Queue with Polylogarithmic Step Complexity"
    url: "https://arxiv.org/abs/2305.07229"
    year: 2023
    arxiv: "2305.07229"
    doi: null
  - title: "The State-of-the-Art LCRQ Concurrent Queue Algorithm Does NOT Require CAS2"
    url: "https://doi.org/10.1145/3572848.3577485"
    year: 2023
    arxiv: null
    doi: "10.1145/3572848.3577485"
  - title: "cameron314 concurrentqueue (MPMC)"
    url: "https://github.com/cameron314/concurrentqueue"
    year: 2014
    arxiv: null
    doi: null
see:
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
  - "036-wait-free-synchronization"
  - "024-hazard-pointers-safe-memory-reclamation-for-lock-free-object"
  - "297-safe-memory-reclamation-for-dynamic-lock-free-objects-using-"
  - "417-tsigas-zhang-non-blocking-concurrent-fifo-queue"
  - "418-ladan-mozes-shavit-optimistic-lock-free-fifo-queue"
  - "420-hoffman-shalev-shavit-baskets-queue"
  - "421-kogan-petrank-wait-free-queues-multiple-enqueuers-dequeuers"
  - "423-morrison-afek-lcrq-fast-concurrent-queues-x86"
  - "424-vyukov-bounded-mpmc-queue"
  - "347-lmax-disruptor"
  - "426-yang-mellor-crummey-wait-free-queue-fetch-and-add"
  - "428-nikolaev-scq-scalable-portable-lock-free-fifo"
  - "243-wcq-a-fast-wait-free-queue-with-bounded-memory-usage"
  - "253-jiffy-a-fast-memory-efficient-wait-free-multi-producers-sing"
  - "227-a-wait-free-queue-with-polylogarithmic-step-complexity"
  - "429-romanov-koval-lprq-portable-lcrq"
  - "334-cameron314-concurrentqueue-mpmc"
---

# Michael & Scott Lock-Free Queue

## One-sentence takeaway

Canonical two-CAS lock-free MPMC linked queue (MS-queue) that still anchors academic and industrial FIFO designs.

## Why it matters here

Root of the Anoptic / Broadside `concurrent-data-structures` lineage: every later wait-free helper scheme, Vyukov ring, LCRQ/SCQ/wCQ design, and Disruptor-style bus is measured against or descends from this PODC’96 algorithm.

## Key ideas

- Lock-free linearizable queue with separate head and tail pointers and a dummy sentinel node.
- Enqueue swings tail via CAS; dequeue swings head via CAS — allowing concurrent producers and consumers.
- Blocking two-lock variant also presented; the lock-free algorithm became the Java concurrency package classic.
- Correctness framed under linearizability; progress is lock-free, not wait-free.

## Caveats

- Unbounded node allocation + ABA/reclamation require hazard pointers, RCU, epochs, or a GC.
- Head/tail CAS hot spots limit scalability; baskets, elimination, FAA rings, and Disruptor address this.
- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/248052.248106](https://doi.org/10.1145/248052.248106)
- URL: https://doi.org/10.1145/248052.248106
