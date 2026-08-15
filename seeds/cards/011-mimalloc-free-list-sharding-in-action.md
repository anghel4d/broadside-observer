---
title: "mimalloc: Free List Sharding in Action"
authors:
  - "Daan Leijen"
  - "Ben Zorn"
  - "Leonardo de Moura"
year: 2019
venue: "APLAS"
arxiv: null
doi: "10.1007/978-3-030-34175-6_13"
source: "https://www.microsoft.com/en-us/research/publication/mimalloc-free-list-sharding-in-action/"
topics:
  - allocators
  - engine
seed_rank: 11
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 10
lineage: memory-allocators
cites:
  - title: "A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)"
    url: "http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf"
    year: 2006
    arxiv: null
    doi: null
  - title: "TCMalloc: Thread-Caching Malloc"
    url: "https://gperftools.github.io/gperftools/tcmalloc.html"
    year: 2007
    arxiv: null
    doi: null
  - title: "snmalloc: A Message Passing Allocator"
    url: "https://doi.org/10.1145/3315573.3329980"
    year: 2019
    arxiv: null
    doi: "10.1145/3315573.3329980"
  - title: "Hoard: A Scalable Memory Allocator for Multithreaded Applications"
    url: "https://doi.org/10.1145/378993.379232"
    year: 2000
    arxiv: null
    doi: "10.1145/378993.379232"
  - title: "rpmalloc: Lock-Free Thread-Caching Size-Class Allocator"
    url: "https://github.com/mjansson/rpmalloc"
    year: 2017
    arxiv: null
    doi: null
see:
  - "288-a-scalable-concurrent-malloc-3-implementation-for-freebsd-je"
  - "442-tcmalloc-thread-caching-malloc"
  - "322-snmalloc-a-message-passing-allocator"
  - "301-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
  - "445-rpmalloc-lock-free-thread-caching-size-class-allocator"
---

# mimalloc: Free List Sharding in Action

## One-sentence takeaway

mimalloc shards three free lists per ~64 KiB page — allocation, local-free, and atomic thread-free — so the malloc fast path stays lock-free and a slow generic path runs on a predictable cadence for deferred RC and remote frees.

## Why it matters here

Anoptic’s global allocator is this paper: page-local lists, no bump pointer, bounded worst-case free of large RC graphs. ano/Koka/Lean-style short-lived objects and engine frame churn want the same locality story.

## Key ideas

- One free list per size class scatters a newly built structure across the heap; a free list per page keeps sequential mallocs inside one 64 KiB slab. Replacing Lean 3’s single list with sharding alone bought >25% on some 1 GiB-heap benchmarks.
- Thread-free lists are also per-page, so remote frees do not contend globally and can be batch-swapped onto the owner’s list.
- The local-free list guarantees the generic path runs after a fixed number of allocations (temporal cadence), which is when deferred reference-count decrements and heartbeat work run — no extra fast-path branch.
- No bump pointer: a second conditional and predictable sequential addresses both hurt; a randomized initial free list is also a security win.
- Core is ~3500 LOC versus ~20–25k for tcmalloc/jemalloc; Redis numbers in the TR are +7% vs tcmalloc and +14% vs jemalloc, with similar peak RSS.

## Caveats

## Links

- MSR: https://www.microsoft.com/en-us/research/publication/mimalloc-free-list-sharding-in-action/
- PDF: https://www.microsoft.com/en-us/research/wp-content/uploads/2019/06/mimalloc-tr-v1.pdf
- DOI: [10.1007/978-3-030-34175-6_13](https://doi.org/10.1007/978-3-030-34175-6_13)
- Code: https://github.com/microsoft/mimalloc
