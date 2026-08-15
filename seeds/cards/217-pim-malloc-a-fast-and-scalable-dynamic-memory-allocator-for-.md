---
title: "PIM-malloc: A Fast and Scalable Dynamic Memory Allocator for Processing-In-Memory (PIM) Architectures"
authors:
  - "Dongjae Lee"
  - "Bongjoon Hyun"
  - "Youngjin Kwon"
  - "Minsoo Rhu"
year: 2025
venue: "HPCA 2026"
arxiv: "2505.13002"
doi: null
source: "https://arxiv.org/abs/2505.13002"
topics:
  - memory-allocation
seed_rank: 217
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
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
see:
  - "202-the-slab-allocator-an-object-caching-kernel-memory-allocator"
  - "199-magazines-and-vmem-extending-the-slab-allocator-to-many-cpus"
---

# PIM-malloc: A Fast and Scalable Dynamic Memory Allocator for Processing-In-Memory (PIM) Architectures

## One-sentence takeaway

PIM-malloc is a dynamic allocator that actually runs on real general-purpose PIM hardware, 66× faster than the vendor baseline, plus another 31% from a per-PIM-core hardware cache.

## Why it matters here

Anoptic's near-memory / accelerator path cannot assume a host malloc; metadata placement and per-core caches are the same design axes as CPU magazines, just on the PIM side of the memory bus.

## Key ideas

- Current general-purpose PIM devices do not expose a usable malloc, so irregular PIM codes fall back to static buffers.
- A design-space sweep varies where allocator metadata lives and how free lists are managed across PIM cores.
- The software allocator alone delivers a 66× allocation-speedup on real PIM hardware.
- A lightweight per-PIM-core hardware cache specialized for allocation metadata adds a further 31%.
- Several representative PIM workloads are rewritten against the API to show the programmability win. Accepted to HPCA-32 (2026).

## Caveats

## Links

- arXiv: [2505.13002](https://arxiv.org/abs/2505.13002)
- PDF: https://arxiv.org/pdf/2505.13002
