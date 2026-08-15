---
title: "snmalloc: A Message Passing Allocator"
authors:
  - "Paul Liétar"
  - "Theodore Butler"
  - "Sylvan Clebsch"
  - "Sophia Drossopoulou"
  - "Juliana Franco"
  - "Matthew J. Parkinson"
  - "Alex Shamis"
  - "Christoph M. Wintersteiger"
  - "David Chisnall"
year: 2019
venue: "ISMM"
arxiv: null
doi: "10.1145/3315573.3329980"
source: "https://doi.org/10.1145/3315573.3329980"
topics:
  - memory-allocation
seed_rank: 322
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: memory-allocators
cites:
  - title: "Hoard: A Scalable Memory Allocator for Multithreaded Applications"
    url: "https://doi.org/10.1145/378993.379232"
    year: 2000
    arxiv: null
    doi: "10.1145/378993.379232"
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
  - title: "A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)"
    url: "http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf"
    year: 2006
    arxiv: null
    doi: null
see:
  - "301-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
  - "011-mimalloc-free-list-sharding-in-action"
  - "288-a-scalable-concurrent-malloc-3-implementation-for-freebsd-je"
---

# snmalloc: A Message Passing Allocator

## One-sentence takeaway

snmalloc returns remote frees to the allocating thread as lock-free batched messages, so producer/consumer pipelines never pile objects into the wrong thread cache.

## Why it matters here

Game and agent servers free on a different thread than they allocate (network in, sim out). Message-passing remote free is the design that stays fast there, next to mimalloc’s free-list sharding.

## Key ideas

- One allocator per thread. Small/medium objects stay owned by the allocating allocator; a remote `free` is a message, not a steal into a local cache.
- Outgoing frees are bucketed by low bits of the destination address (a temporal radix tree) so each allocator keeps a fixed 64-bucket array instead of one queue per peer.
- The MPSC queue (from the Pony runtime) enqueues a whole batch with one atomic exchange and dequeues with no atomics on the consumer.
- A bump-pointer/free-list hybrid stores only 64 bits of metadata per 64 KiB slab by terminating the free list with the slab high-water mark.
- Large objects (≥16 MiB) go to a central lock-free stack; everything else stays in superslabs / medium slabs found via a global pagemap.

## Caveats

## Links

- DOI: [10.1145/3315573.3329980](https://doi.org/10.1145/3315573.3329980)
- PDF: https://www.microsoft.com/en-us/research/uploads/prod/2020/04/snmalloc.pdf
- Repo: https://github.com/microsoft/snmalloc
