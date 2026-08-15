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
seed_rank: 195
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
  - title: "The Slab Allocator: An Object-Caching Kernel Memory Allocator"
    url: "https://www.usenix.org/legacy/publications/library/proceedings/bos94/full_papers/bonwick.ps"
    year: 1994
    arxiv: null
    doi: null
  - title: "Magazines and Vmem: Extending the Slab Allocator to Many CPUs and Arbitrary Resources"
    url: "https://www.usenix.org/conference/2001-usenix-annual-technical-conference/magazines-and-vmem-extending-slab-allocator-many"
    year: 2001
    arxiv: null
    doi: null
  - title: "Allocator-Aware (AA) Software (Lakos et al.)"
    url: "https://www.youtube.com/watch?v=0mdcWlkBb_4"
    year: 2021
    arxiv: null
    doi: null
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
see:
  - "439-reconsidering-custom-memory-allocation"
  - "202-the-slab-allocator-an-object-caching-kernel-memory-allocator"
  - "199-magazines-and-vmem-extending-the-slab-allocator-to-many-cpus"
  - "244-allocator-aware-aa-software-lakos-et-al"
  - "011-mimalloc-free-list-sharding-in-action"
---

# Local Memory Allocators in Large-Scale C++ (Lakos allocator model)

## One-sentence takeaway

Lakos argues that allocation policy belongs in the type and the object graph: scoped local allocators and multipools should propagate through allocator-aware components instead of every subsystem calling global `new`.

## Why it matters here

Engine subsystems — frame arenas, component pools, network scratch — are Lakos local allocators. The discipline is combinatorial: a component that does not take an allocator will silently heap-allocate and break the frame budget.

## Key ideas

- Global malloc is the wrong default in large C++ systems; allocation strategy is part of a component's contract.
- Local/scoped allocators (monotonic, multipool, polymorphic) let a subsystem decide where its memory comes from.
- Allocator-aware types carry and propagate that policy so containers and messages do not bounce back to the heap.
- Multipool and size-class strategies sit under the same interface, so policy can change without rewriting clients.
- The talk is the Bloomberg/Lakos model later expanded as allocator-aware (AA) software.

## Caveats

## Links

- Talk: https://www.youtube.com/watch?v=nZNd5FjSquk
