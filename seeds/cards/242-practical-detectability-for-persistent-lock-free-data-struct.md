---
title: "Practical Detectability for Persistent Lock-Free Data Structures"
authors:
  - "Kyeongmin Cho"
  - "Seungmin Jeon"
  - "Jeehoon Kang"
year: 2022
venue: "arXiv:cs.PL"
arxiv: "2203.07621"
doi: null
source: "https://arxiv.org/abs/2203.07621"
topics:
  - lockfree
seed_rank: 242
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Linearizability of Persistent Memory Objects under a Full-System-Crash Failure Model"
    url: "https://doi.org/10.1007/978-3-662-53426-7_23"
    year: 2016
    arxiv: null
    doi: "10.1007/978-3-662-53426-7_23"
  - title: "Wait-Free Synchronization"
    url: "https://doi.org/10.1145/114005.102808"
    year: 1991
    arxiv: null
    doi: "10.1145/114005.102808"
see:
  - "036-wait-free-synchronization"
---

# Practical Detectability for Persistent Lock-Free Data Structures

## One-sentence takeaway

Durable linearizability is not enough for exactly-once PM structures; memento objects are per-thread PM checkpoints that make CAS, insert, and delete detectable across both full-system and thread crashes.

## Why it matters here

Anoptic editor transactions and Broadside replay logs want "did this command land?" after a crash, not merely a linearizable heap; detectability is that extra bit.

## Key ideas

- Izraelevitz durable linearizability does not tell a recovering client whether its in-flight operation completed.
- The framework supplies detectable primitives (space-efficient CAS, insert, delete) and a systematic DRAM-to-PM transform.
- Mementos are lightweight, precise, per-thread checkpoints in persistent memory.
- A DRAM scratchpad keeps detectable structures close in speed to non-detectable ones.
- Case study: lock-free and combining queues plus hash tables that beat prior detectable designs and match non-detectable ones. Recovers from both machine and thread crashes.

## Caveats

## Links

- arXiv: [2203.07621](https://arxiv.org/abs/2203.07621)
- PDF: https://arxiv.org/pdf/2203.07621
