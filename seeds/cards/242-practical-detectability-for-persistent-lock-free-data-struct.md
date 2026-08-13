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
  - title: "Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects"
    url: "https://doi.org/10.1109/tpds.2004.8"
    year: 2004
    arxiv: null
    doi: "10.1109/tpds.2004.8"
  - title: "Michael & Scott Lock-Free Queue"
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

# Practical Detectability for Persistent Lock-Free Data Structures

## One-sentence takeaway

Persistent memory (PM) is an emerging class of storage technology that combines the benefits of DRAM and SSD.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Practical Detectability for Persistent Lock-Free Data Structures).

## Key ideas

- Persistent memory (PM) is an emerging class of storage technology that combines the benefits of DRAM and SSD.
- This characteristic inspires research on persistent objects in PM with fine-grained concurrency control.
- Among such objects, persistent lock-free data structures (DSs) are particularly interesting thanks to their efficiency and scalability.
- One of the most widely used correctness criteria for persistent lock-free DSs is durable linearizability (Izraelevitz et.
- However, durable linearizability is insufficient to use persistent DSs for fault-tolerant systems requiring exactly-once semantics for storage systems, because we may not be able to detect whether an operation is performed when a crash occurs.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2203.07621](https://arxiv.org/abs/2203.07621)
- URL: https://arxiv.org/abs/2203.07621
