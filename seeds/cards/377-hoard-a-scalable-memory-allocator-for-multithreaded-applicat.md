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
seed_rank: 377
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 9
lineage: slab-allocators
cites:
  - title: "Dynamic Storage Allocation: A Survey and Critical Review"
    url: "https://doi.org/10.1007/3-540-60368-9_19"
    year: 1995
    arxiv: null
    doi: "10.1007/3-540-60368-9_19"
    card: "382-dynamic-storage-allocation-a-survey-and-critical-review"
  - title: "Composing High-Performance Memory Allocators"
    url: "https://doi.org/10.1145/378795.378821"
    year: 2001
    arxiv: null
    doi: "10.1145/378795.378821"
    card: "583-composing-high-performance-memory-allocators"
  - title: "Scalable Lock-Free Dynamic Memory Allocation"
    url: "https://doi.org/10.1145/996893.996848"
    year: 2004
    arxiv: null
    doi: "10.1145/996893.996848"
    card: "585-scalable-lock-free-dynamic-memory-allocation"
  - title: "A Scalable Concurrent malloc(3) Implementation for FreeBSD (jemalloc)"
    url: "http://people.freebsd.org/~jasone/jemalloc/bsdcan2006/jemalloc.pdf"
    year: 2006
    arxiv: null
    doi: null
    card: "364-a-scalable-concurrent-malloc-3-implementation-for-freebsd-je"
  - title: "DieHard: Probabilistic Memory Safety for Unsafe Languages"
    url: "https://doi.org/10.1145/1133981.1134000"
    year: 2006
    arxiv: null
    doi: "10.1145/1133981.1134000"
    card: "488-diehard-probabilistic-memory-safety-for-unsafe-languages"
---

# Hoard: A Scalable Memory Allocator for Multithreaded Applications

## One-sentence takeaway

Hoard provides scalable concurrent allocation with per-processor heaps while bounding allocator-induced fragmentation.

## Why it matters here

Avoids heap blowup under threads; cautionary + design notes for Anoptic's mimalloc world.

## Key ideas

- Hoard provides scalable concurrent allocation with per-processor heaps while bounding allocator-induced fragmentation.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/378993.379232](https://doi.org/10.1145/378993.379232)
- URL: https://doi.org/10.1145/378993.379232
