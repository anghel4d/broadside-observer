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
seed_rank: 311
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
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
