---
title: "Concurrent Reference Counting and Resource Management in Wait-free Constant Time"
authors:
  - "Guy E. Blelloch"
  - "Yuanhao Wei"
year: 2020
venue: "arXiv:cs.DC"
arxiv: "2002.07053"
doi: null
source: "https://arxiv.org/abs/2002.07053"
topics:
  - memory-allocation
  - lockfree
seed_rank: 326
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
---

# Concurrent Reference Counting and Resource Management in Wait-free Constant Time

## One-sentence takeaway

A common problem when implementing concurrent programs is efficiently protecting against unsafe races between processes reading and then using a resource (e.g., memory blocks, file descriptors, or network connections) and other processes that are concurrently overwriting and then destructing the same resource.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (Concurrent Reference Counting and Resource Management in Wait-free Constant Time).

## Key ideas

- A common problem when implementing concurrent programs is efficiently protecting against unsafe races between processes reading and then using a resource (e.g., memory blocks, file descriptors, or network connections) and other processes that are concurrently overwriting and then destructing the same resource.
- Such read-destruct races can be protected with locks, or with lock-free solutions such as hazard-pointers or read-copy-update (RCU).
- In this paper we describe a method for protecting read-destruct races with expected constant time overhead, $O(P^2)$ space and $O(P^2)$ delayed destructs, and with just single word atomic memory operations (reads, writes, and CAS).
- It is based on an interface with four primitives, an acquire-release pair to protect accesses, and a retire-eject pair to delay the destruct until it is safe.
- We refer to this as the acquire-retire interface.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2002.07053](https://arxiv.org/abs/2002.07053)
- URL: https://arxiv.org/abs/2002.07053
