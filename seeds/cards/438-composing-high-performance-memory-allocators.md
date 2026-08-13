---
title: "Composing High-Performance Memory Allocators"
authors:
  - "Emery D. Berger"
  - "Benjamin G. Zorn"
  - "Kathryn S. McKinley"
year: 2001
venue: "PLDI"
arxiv: null
doi: "10.1145/378795.378821"
source: "https://doi.org/10.1145/378795.378821"
topics:
  - memory-allocation
  - heap-layers
  - multipool
seed_rank: 438
seed_batch: "lineage-memory-allocators-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: memory-allocators
cites:
  - title: "Hoard: A Scalable Memory Allocator for Multithreaded Applications"
    url: "https://doi.org/10.1145/378993.379232"
    year: 2000
    arxiv: null
    doi: "10.1145/378993.379232"
  - title: "A Memory Allocator (dlmalloc)"
    url: "https://gee.cs.oswego.edu/dl/html/malloc.html"
    year: 2000
    arxiv: null
    doi: null
  - title: "DieHard: Probabilistic Memory Safety for Unsafe Languages"
    url: "https://doi.org/10.1145/1133981.1134000"
    year: 2006
    arxiv: null
    doi: "10.1145/1133981.1134000"
  - title: "Local Memory Allocators in Large-Scale C++ (Lakos allocator model)"
    url: "https://www.youtube.com/watch?v=nZNd5FjSquk"
    year: 2013
    arxiv: null
    doi: null
see:
  - "301-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
  - "437-a-memory-allocator-dlmalloc"
  - "405-diehard-probabilistic-memory-safety-for-unsafe-languages"
  - "195-local-memory-allocators-in-large-scale-c-lakos-allocator-mod"
---

# Composing High-Performance Memory Allocators

## One-sentence takeaway

Heap Layers shows allocator policy can be assembled from zero-overhead C++ mixin layers — the research substrate behind Hoard/DieHard-style experiments.

## Why it matters here

Allocator-as-composable-policy matches Anoptic/Lakos instincts: swap size-class, thread-cache, or security layers without rewriting the heap.

## Key ideas

- Mixin/template heap layers compose without abstraction penalty.
- Infrastructure for rapidly building custom and general-purpose heaps.
- Enables controlled experiments that led to Hoard, DieHard, and related designs.
- Separates mechanism (pages, freelists) from policy (size classes, locking, randomness).

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/378795.378821](https://doi.org/10.1145/378795.378821)
- PDF: https://people.cs.umass.edu/~emery/pubs/berger-pldi2001.pdf
- URL: https://doi.org/10.1145/378795.378821
