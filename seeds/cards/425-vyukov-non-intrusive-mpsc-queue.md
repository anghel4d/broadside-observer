---
title: "Non-Intrusive MPSC Node-Based Queue (1024cores)"
authors:
  - "Dmitry Vyukov"
year: 2010
venue: "1024cores"
arxiv: null
doi: null
source: "https://www.1024cores.net/home/lock-free-algorithms/queues/non-intrusive-mpsc-node-based-queue"
topics:
  - lockfree
  - queues
seed_rank: 425
seed_batch: "lineage-concurrent-data-structures-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: concurrent-data-structures
cites:
  - title: "Simple, Fast, and Practical Non-Blocking and Blocking Concurrent Queue Algorithms"
    url: "https://doi.org/10.1145/248052.248106"
    year: 1996
    arxiv: null
    doi: "10.1145/248052.248106"
  - title: "Bounded MPMC Queue (1024cores)"
    url: "https://www.1024cores.net/home/lock-free-algorithms/queues/bounded-mpmc-queue"
    year: 2010
    arxiv: null
    doi: null
  - title: "Jiffy: A Fast, Memory Efficient, Wait-Free Multi-Producers Single-Consumer Queue"
    url: "https://arxiv.org/abs/2010.14189"
    year: 2020
    arxiv: "2010.14189"
    doi: null
see:
  - "031-michael-scott-lock-free-queue"
  - "424-vyukov-bounded-mpmc-queue"
  - "253-jiffy-a-fast-memory-efficient-wait-free-multi-producers-sing"
---

# Non-Intrusive MPSC Node-Based Queue (1024cores)

## One-sentence takeaway

Wait-free-producer MPSC linked queue: one XCHG for push, nearly atomic-free pop — industrial MPSC workhorse (Netty/Akka/JCTools ports).

## Why it matters here

Prefer this shape for Anoptic many-to-one shard inboxes before paying for full MPMC.

## Key ideas

- Intrusive and non-intrusive variants; node-based unbounded list.
- Producer push is a single atomic exchange (wait-free producers in the author’s framing).
- Consumer fast path mostly atomic-free; ABA-free and no PDR/hazard registration required for the basic algorithm.
- Widely ported; pairs with Jiffy-style academic MPSC wait-free work.

## Caveats

- Not linearizable in the strong academic sense (author notes); push can briefly block the consumer in a tiny window.
- MPSC only — wrong tool for multi-consumer.
- Year convention 2010 for 1024cores publication era.

## Links

- URL: https://www.1024cores.net/home/lock-free-algorithms/queues/non-intrusive-mpsc-node-based-queue
