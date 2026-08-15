---
title: "Hoard: A Scalable Memory Allocator for Multithreaded Applications"
authors:
  - "Emery D. Berger"
  - "Kathryn S. McKinley"
  - "Robert D. Blumofe"
  - "Paul R. Wilson"
year: 2000
venue: "ASPLOS"
arxiv: null
doi: "10.1145/378993.379232"
source: "https://doi.org/10.1145/378993.379232"
topics:
  - memory-allocation
  - multipool
seed_rank: 301
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: memory-allocators
cites:
  - title: "Dynamic Storage Allocation: A Survey and Critical Review"
    url: "https://doi.org/10.1007/3-540-60368-9_19"
    year: 1995
    arxiv: null
    doi: "10.1007/3-540-60368-9_19"
  - title: "Cilk: An Efficient Multithreaded Runtime System"
    url: "https://doi.org/10.1145/209936.209958"
    year: 1995
    arxiv: null
    doi: "10.1145/209936.209958"
  - title: "A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)"
    url: "http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf"
    year: 2006
    arxiv: null
    doi: null
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
see:
  - "306-dynamic-storage-allocation-a-survey-and-critical-review"
---

# Hoard: A Scalable Memory Allocator for Multithreaded Applications

## One-sentence takeaway

Hoard pairs per-processor heaps with a global heap and transfers nearly-empty superblocks so multithreaded malloc stays scalable without unbounded producer-consumer blowup.

## Why it matters here

Anoptic already sits on mimalloc; Hoard is the paper that named allocator-induced false sharing and heap blowup, the two failure modes that still decide whether a game-thread heap stays in cache or pages.

## Key ideas

- A single locked heap serializes malloc/free; naive per-thread heaps either false-share cache lines or never return freed memory to the allocating thread.
- Superblocks are page-multiple arrays of one size class. Each is owned by exactly one heap at a time, so concurrent mallocs cannot split one cache line across processors.
- When a per-processor heap is more than fraction `f` empty and holds more than `K` superblocks of slack, Hoard moves one mostly-empty superblock to the global heap, bounding blowup by a constant rather than by `P` or worse.
- The emptiness invariant is `(u_i ≥ a_i − K·S) ∨ (u_i ≥ (1−f)a_i)`; summed over heaps this gives `A(t) = O(U(t) + P)`.
- On 14 processors Hoard was up to 60× faster than Solaris malloc and 18× faster than the next concurrent allocator they measured, with low average fragmentation.

## Caveats

## Links

- DOI: [10.1145/378993.379232](https://doi.org/10.1145/378993.379232)
- Author PDF: https://www.cs.umass.edu/~emery/pubs/berger-asplos2000.pdf
