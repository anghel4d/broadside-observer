---
title: "Local Memory Allocators in Large-Scale C++ (Lakos allocator model)"
authors:
  - "John Lakos"
year: 2013
venue: "CppCon / Bloomberg Large-Scale C++"
arxiv: null
doi: null
source: "https://www.youtube.com/watch?v=nZNd5FjSquk"
topics:
  - memory-allocation
  - lakos
  - multipool
seed_rank: 252
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 10
lineage: memory-allocators
cites:
  - title: "Reconsidering Custom Memory Allocation"
    url: "https://doi.org/10.1145/582419.582421"
    year: 2002
    arxiv: null
    doi: "10.1145/582419.582421"
    card: "584-reconsidering-custom-memory-allocation"
  - title: "The Slab Allocator: An Object-Caching Kernel Memory Allocator"
    url: "https://www.usenix.org/legacy/publications/library/proceedings/bos94/full_papers/bonwick.ps"
    year: 1994
    arxiv: null
    doi: null
    card: "259-the-slab-allocator-an-object-caching-kernel-memory-allocator"
  - title: "Magazines and Vmem: Extending the Slab Allocator to Many CPUs and Arbitrary Resources"
    url: "https://www.usenix.org/conference/2001-usenix-annual-technical-conference/magazines-and-vmem-extending-slab-allocator-many"
    year: 2001
    arxiv: null
    doi: null
    card: "256-magazines-and-vmem-extending-the-slab-allocator-to-many-cpus"
  - title: "Allocator-Aware (AA) Software (Lakos et al.)"
    url: "https://www.youtube.com/watch?v=0mdcWlkBb_4"
    year: 2021
    arxiv: null
    doi: null
    card: "314-allocator-aware-aa-software-lakos-et-al"
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
    card: "012-mimalloc-free-list-sharding-in-action"
---

# Local Memory Allocators in Large-Scale C++ (Lakos allocator model)

## One-sentence takeaway

Lakos argues for local (scoped) allocators and multipool strategies so allocation policy is a first-class combinatorial property of C++ components.

## Why it matters here

Polymorphic local allocators, multipool, and allocator-aware interfaces — the Lakos discipline for engine subsystems.

## Key ideas

- Lakos argues for local (scoped) allocators and multipool strategies so allocation policy is a first-class combinatorial property of C++ components.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Primary PDF/DOI not yet pinned; verify the canonical artifact before citation.

## Links

- URL: https://www.youtube.com/watch?v=nZNd5FjSquk
