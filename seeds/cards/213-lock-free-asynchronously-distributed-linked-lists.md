---
title: "Lock-free Asynchronously Distributed Linked Lists"
authors:
  - "Raaghav Ravishankar"
  - "Sandeep Kulkarni"
  - "Sathya Peri"
  - "Gokarna Sharma"
year: 2025
venue: "arXiv:cs.DC"
arxiv: "2510.06387"
doi: null
source: "https://arxiv.org/abs/2510.06387"
topics:
  - lockfree
seed_rank: 213
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "A Pragmatic Implementation of Non-Blocking Linked-Lists"
    url: "https://doi.org/10.1007/3-540-45414-4_21"
    year: 2001
    arxiv: null
    doi: "10.1007/3-540-45414-4_21"
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
  - "298-a-pragmatic-implementation-of-non-blocking-linked-lists"
  - "036-wait-free-synchronization"
  - "203-linearizability-a-correctness-condition-for-concurrent-objec"
---

# Lock-free Asynchronously Distributed Linked Lists

## One-sentence takeaway

DiLi is a conditionally lock-free, linearizable linked list that can be asynchronously split into sublists and load-balanced across machines without downtime.

## Why it matters here

Anoptic world state and GRID COMMAND spatial indexes eventually outgrow one NUMA node; a list that partitions itself while staying lock-free is the distributed analog of a Harris list.

## Key ideas

- Conditional lock-freedom extends lock-freedom with modest assumptions about inter-process communication.
- Client operations remain find, insert, and remove of a key; partitioning and migration are extra primitives that preserve those progress guarantees.
- Static key-range sharding is rejected because load drifts and a later re-shard would take the structure offline.
- Concurrent performance is comparable to skip lists and better on write-heavy workloads; the distributed mode then scales horizontally.
- Sublists move between machines asynchronously, so a hot range can be split without stopping readers.

## Caveats

## Links

- arXiv: [2510.06387](https://arxiv.org/abs/2510.06387)
- PDF: https://arxiv.org/pdf/2510.06387
