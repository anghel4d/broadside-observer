---
title: "Reconsidering Custom Memory Allocation"
authors:
  - "Emery D. Berger"
  - "Benjamin G. Zorn"
  - "Kathryn S. McKinley"
year: 2002
venue: "OOPSLA"
arxiv: null
doi: "10.1145/582419.582421"
source: "https://doi.org/10.1145/582419.582421"
topics:
  - memory-allocation
  - custom-allocators
  - regions
seed_rank: 439
seed_batch: "lineage-memory-allocators-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: memory-allocators
cites:
  - title: "A Memory Allocator (dlmalloc)"
    url: "https://gee.cs.oswego.edu/dl/html/malloc.html"
    year: 2000
    arxiv: null
    doi: null
  - title: "Composing High-Performance Memory Allocators"
    url: "https://doi.org/10.1145/378795.378821"
    year: 2001
    arxiv: null
    doi: "10.1145/378795.378821"
  - title: "Hoard: A Scalable Memory Allocator for Multithreaded Applications"
    url: "https://doi.org/10.1145/378993.379232"
    year: 2000
    arxiv: null
    doi: "10.1145/378993.379232"
  - title: "Local Memory Allocators in Large-Scale C++ (Lakos allocator model)"
    url: "https://www.youtube.com/watch?v=nZNd5FjSquk"
    year: 2013
    arxiv: null
    doi: null
see:
  - "437-a-memory-allocator-dlmalloc"
  - "438-composing-high-performance-memory-allocators"
  - "301-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
  - "195-local-memory-allocators-in-large-scale-c-lakos-allocator-mod"
---

# Reconsidering Custom Memory Allocation

## One-sentence takeaway

Most ad-hoc custom allocators lose to a good general size-class heap (Lea); regions win on speed but waste space — reaps hybridize region + heap.

## Why it matters here

Policy caution for engine multipools: prefer a strong general heap (mimalloc/jemalloc) plus scoped arenas/regions, not a zoo of half-tuned freelists.

## Key ideas

- Empirical study: Lea allocator matches or beats most custom pools.
- Regions/arenas are the main justified custom exception.
- Introduces reaps: region bump allocation with individual free.
- Motivates investing in general size-class heaps rather than per-subsystem mallocs.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/582419.582421](https://doi.org/10.1145/582419.582421)
- PDF: https://people.cs.umass.edu/~emery/pubs/berger-oopsla2002.pdf
- URL: https://doi.org/10.1145/582419.582421
