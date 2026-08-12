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
seed_rank: 272
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
---

# Lock-free Asynchronously Distributed Linked Lists

## One-sentence takeaway

Modern databases use dynamic search structures that store an enormous amount of data, and often serve them using multi-threaded algorithms to support the ever-increasing throughput needs.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Lock-free Asynchronously Distributed Linked Lists).

## Key ideas

- Modern databases use dynamic search structures that store an enormous amount of data, and often serve them using multi-threaded algorithms to support the ever-increasing throughput needs.
- When this throughput need exceeds the capacity of the machine hosting the structure, one either needs to replace the underlying hardware (an option that is typically not viable and introduces a long down time) or make the data structure distributed.
- Static partitioning of the data structure for distribution is not desirable, as it is prone to uneven load distribution over time, and having to change the partitioning scheme later will require downtime.
- The goal of this paper is to extend a concurrent data structure to distributed data structures that provide dynamic load balancing while preserving important properties such as lock freedom.
- With this intuition, first, we introduce the notion of conditional lock-freedom which extends the notion of lock-free computation with reasonable assumptions about communication between processes.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2510.06387](https://arxiv.org/abs/2510.06387)
- URL: https://arxiv.org/abs/2510.06387
