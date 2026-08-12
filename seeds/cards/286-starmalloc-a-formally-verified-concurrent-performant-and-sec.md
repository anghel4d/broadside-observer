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
