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
seed_rank: 199
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 10
lineage: memory-allocators
cites:
  - title: "The Slab Allocator: An Object-Caching Kernel Memory Allocator"
    url: "https://www.usenix.org/legacy/publications/library/proceedings/bos94/full_papers/bonwick.ps"
    year: 1994
    arxiv: null
    doi: null
  - title: "Hoard: A Scalable Memory Allocator for Multithreaded Applications"
    url: "https://doi.org/10.1145/378993.379232"
    year: 2000
    arxiv: null
    doi: "10.1145/378993.379232"
see:
  - "202-the-slab-allocator-an-object-caching-kernel-memory-allocator"
  - "301-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
---

# Magazines and Vmem: Extending the Slab Allocator to Many CPUs and Arbitrary Resources

## One-sentence takeaway

Bonwick and Adams add per-CPU magazine caches for linear allocator scaling and a general vmem resource allocator that can back slabs — and satisfy variable-size allocations in constant time.

## Why it matters here

Game multipools and resource arenas keep rediscovering this stack: a magazine (or thread cache) on the fast path, a slab or size-class layer, and a vmem-like arena for the backing resource, not one global malloc.

## Key ideas

- Classical slab locking does not scale; the magazine layer is a per-processor cache of objects that makes the fast path lock-free enough to scale linearly with CPU count.
- vmem is a universal backing store for slabs and a general resource allocator (address space, IDs, …), not only kernel heap pages.
- The authors present vmem as the first resource allocator that can satisfy arbitrary-size allocations in constant time.
- System benchmarks (LADDIS, SPECweb99) show >50% gains; a userspace port, libumem, beats then-current user allocators and can manage non-memory resources.
- Magazines plus vmem are the two extensions that take slab from “object cache” to “multiprocessor resource system.”

## Caveats

## Links

- USENIX page: https://www.usenix.org/conference/2001-usenix-annual-technical-conference/magazines-and-vmem-extending-slab-allocator-many
- PDF: http://usenix.org/publications/library/proceedings/usenix01/full_papers/bonwick/bonwick.pdf
