---
title: "Magazines and Vmem: Extending the Slab Allocator to Many CPUs and Arbitrary Resources"
authors:
  - "Jeff Bonwick"
  - "Jonathan Adams"
year: 2001
venue: "USENIX ATC"
arxiv: null
doi: null
source: "https://www.usenix.org/conference/2001-usenix-annual-technical-conference/magazines-and-vmem-extending-slab-allocator-many"
topics:
  - memory-allocation
  - slab
  - multipool
seed_rank: 256
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "hpc"
relevance_score: 10
lineage: slab-allocators
cites:
  - title: "The Slab Allocator: An Object-Caching Kernel Memory Allocator"
    url: "https://www.usenix.org/legacy/publications/library/proceedings/bos94/full_papers/bonwick.ps"
    year: 1994
    arxiv: null
    doi: null
    card: "259-the-slab-allocator-an-object-caching-kernel-memory-allocator"
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
  - title: "Hoard: A Scalable Memory Allocator for Multithreaded Applications"
    url: "https://doi.org/10.1145/378993.379232"
    year: 2000
    arxiv: null
    doi: "10.1145/378993.379232"
    card: "377-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
---

# Magazines and Vmem: Extending the Slab Allocator to Many CPUs and Arbitrary Resources

## One-sentence takeaway

Extends slabs with per-CPU magazines and a general virtual memory resource allocator (vmem) for scalable multiprocessor allocation.

## Why it matters here

Per-CPU magazines + vmem layer: the multipool / resource-arena pattern games rediscover constantly.

## Key ideas

- Extends slabs with per-CPU magazines and a general virtual memory resource allocator (vmem) for scalable multiprocessor allocation.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Primary PDF/DOI not yet pinned; verify the canonical artifact before citation.

## Links

- URL: https://www.usenix.org/conference/2001-usenix-annual-technical-conference/magazines-and-vmem-extending-slab-allocator-many
