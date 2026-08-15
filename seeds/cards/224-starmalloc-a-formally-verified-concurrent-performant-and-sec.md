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
seed_rank: 224
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: memory-allocators
cites:
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
  - title: "snmalloc: A Message Passing Allocator"
    url: "https://doi.org/10.1145/3315573.3329980"
    year: 2019
    arxiv: null
    doi: "10.1145/3315573.3329980"
  - title: "DieHard: Probabilistic Memory Safety for Unsafe Languages"
    url: "https://doi.org/10.1145/1133981.1134000"
    year: 2006
    arxiv: null
    doi: "10.1145/1133981.1134000"
  - title: "A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)"
    url: "http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf"
    year: 2006
    arxiv: null
    doi: null
see:
  - "011-mimalloc-free-list-sharding-in-action"
  - "322-snmalloc-a-message-passing-allocator"
  - "405-diehard-probabilistic-memory-safety-for-unsafe-languages"
  - "288-a-scalable-concurrent-malloc-3-implementation-for-freebsd-je"
---

# StarMalloc: A Formally Verified, Concurrent, Performant, and Security-Oriented Memory Allocator

## One-sentence takeaway

StarMalloc is a Steel-verified, security-oriented concurrent allocator that drops into real programs — including Firefox — and stays competitive with ten production mallocs.

## Why it matters here

Anoptic wants a hardened default heap that is not just "fast like mimalloc" but actually proven; StarMalloc is the existence proof that verification, security hardening, and drop-in performance can coexist.

## Key ideas

- Specified and verified in the Steel concurrent separation-logic framework using dependent types and modular abstractions.
- Ships reusable verified datastructures and proof libraries for later systems work.
- Security-oriented: the design targets the usual malloc attack surface rather than being a pure speed hack.
- Evaluated as a drop-in against 10 state-of-the-art allocators and used with Firefox.
- Concurrent, so it is not a single-threaded verified toy heap.

## Caveats

## Links

- arXiv: [2403.09435](https://arxiv.org/abs/2403.09435)
- PDF: https://arxiv.org/pdf/2403.09435
