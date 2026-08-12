---
title: "rpmalloc: Lock-Free Thread-Caching Size-Class Allocator"
authors:
  - "Mattias Jansson"
year: 2017
venue: "Software / GitHub (public domain)"
arxiv: null
doi: null
source: "https://github.com/mjansson/rpmalloc"
topics:
  - memory-allocation
  - size-class
  - engine
seed_rank: 590
seed_batch: "lineage-slab-allocators-2026-08-13"
reviewed: "2026-08-13"
pool: "engine"
relevance_score: 8
lineage: slab-allocators
cites:
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
    card: "012-mimalloc-free-list-sharding-in-action"
  - title: "TCMalloc: Thread-Caching Malloc"
    url: "https://gperftools.github.io/gperftools/tcmalloc.html"
    year: 2007
    arxiv: null
    doi: null
    card: "587-tcmalloc-thread-caching-malloc"
  - title: "A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)"
    url: "http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf"
    year: 2006
    arxiv: null
    doi: null
    card: "364-a-scalable-concurrent-malloc-3-implementation-for-freebsd-je"
  - title: "snmalloc: A Message Passing Allocator"
    url: "https://doi.org/10.1145/3315573.3329980"
    year: 2019
    arxiv: null
    doi: "10.1145/3315573.3329980"
    card: "401-snmalloc-a-message-passing-allocator"
---

# rpmalloc: Lock-Free Thread-Caching Size-Class Allocator

## One-sentence takeaway

rpmalloc is a practical lock-free, thread-caching, fixed size-class allocator widely used in games and embedded C/C++.

## Why it matters here

Engine-facing cousin of mimalloc/jemalloc: span/page/block size classes with cheap free via address masking — close to Anoptic multipool practice.

## Key ideas

- Per-thread heaps with preconfigured size classes.
- Span → page → block hierarchy; free finds metadata by address masking.
- Cross-thread frees deferred to owning heap.
- Small, embeddable, public-domain / Unlicense-or-MIT artifact.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- GitHub: https://github.com/mjansson/rpmalloc
- URL: https://github.com/mjansson/rpmalloc
