---
title: "StarMalloc: A Formally Verified, Concurrent, Performant, and Security-Oriented Memory Allocator"
authors:
  - "Antonin Reitz"
  - "Aymeric Fromherz"
  - "Jonathan Protzenko"
year: 2024
venue: "arXiv:cs.PL"
arxiv: "2403.09435"
doi: null
source: "https://arxiv.org/abs/2403.09435"
topics:
  - memory-allocation
seed_rank: 286
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
lineage: slab-allocators
cites:
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
    card: "012-mimalloc-free-list-sharding-in-action"
  - title: "snmalloc: A Message Passing Allocator"
    url: "https://doi.org/10.1145/3315573.3329980"
    year: 2019
    arxiv: null
    doi: "10.1145/3315573.3329980"
    card: "401-snmalloc-a-message-passing-allocator"
  - title: "DieHard: Probabilistic Memory Safety for Unsafe Languages"
    url: "https://doi.org/10.1145/1133981.1134000"
    year: 2006
    arxiv: null
    doi: "10.1145/1133981.1134000"
    card: "488-diehard-probabilistic-memory-safety-for-unsafe-languages"
  - title: "A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)"
    url: "http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf"
    year: 2006
    arxiv: null
    doi: null
    card: "364-a-scalable-concurrent-malloc-3-implementation-for-freebsd-je"
---

# StarMalloc: A Formally Verified, Concurrent, Performant, and Security-Oriented Memory Allocator

## One-sentence takeaway

In this work, we present StarMalloc, a verified, security-oriented, concurrent memory allocator that can be used as a drop-in replacement in real-world projects.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (StarMalloc: A Formally Verified, Concurrent, Performant, and Security-Oriented M).

## Key ideas

- In this work, we present StarMalloc, a verified, security-oriented, concurrent memory allocator that can be used as a drop-in replacement in real-world projects.
- Using the Steel separation logic framework, we show how to specify and verify StarMalloc, relying on dependent types and modular abstractions to enable efficient verification.
- As part of StarMalloc, we also develop several generic datastructures and proof libraries directly reusable in future systems verification projects.
- We finally show that StarMalloc can be used with real-world projects, including the Firefox browser, and evaluate it against 10 state-of-the-art memory allocators, demonstrating its competitiveness.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2403.09435](https://arxiv.org/abs/2403.09435)
- URL: https://arxiv.org/abs/2403.09435
