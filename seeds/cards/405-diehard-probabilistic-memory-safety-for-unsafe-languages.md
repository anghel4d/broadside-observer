---
title: "DieHard: Probabilistic Memory Safety for Unsafe Languages"
authors:
  - "Emery D. Berger"
  - "Benjamin G. Zorn"
year: 2006
venue: "PLDI"
arxiv: null
doi: "10.1145/1133981.1134000"
source: "https://doi.org/10.1145/1133981.1134000"
topics:
  - memory-allocation
  - reliability
seed_rank: 405
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 7
lineage: memory-allocators
cites:
  - title: "Hoard: A Scalable Memory Allocator for Multithreaded Applications"
    url: "https://doi.org/10.1145/378993.379232"
    year: 2000
    arxiv: null
    doi: "10.1145/378993.379232"
  - title: "Composing High-Performance Memory Allocators"
    url: "https://doi.org/10.1145/378795.378821"
    year: 2001
    arxiv: null
    doi: "10.1145/378795.378821"
  - title: "Mesh: Compacting Memory Management for C/C++ Applications"
    url: "https://arxiv.org/abs/1902.04738"
    year: 2019
    arxiv: "1902.04738"
    doi: null
  - title: "A Memory Allocator (dlmalloc)"
    url: "https://gee.cs.oswego.edu/dl/html/malloc.html"
    year: 2000
    arxiv: null
    doi: null
see:
  - "301-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
  - "438-composing-high-performance-memory-allocators"
  - "320-mesh-compacting-memory-management-for-c-c-applications"
  - "437-a-memory-allocator-dlmalloc"
---

# DieHard: Probabilistic Memory Safety for Unsafe Languages

## One-sentence takeaway

DieHard approximates an infinite heap: objects are placed uniformly at random in a heap at least twice as large as needed, so overflows and use-after-free hit empty slots with high probability.

## Why it matters here

This is the allocator-as-fault-isolation foil for Anoptic’s deterministic game heaps. Randomized placement and optional replica voting buy crash survival; a frame-budget engine usually wants the opposite — dense, predictable arenas — but DieHard names the reliability trade those arenas refuse.

## Key ideas

- Stand-alone mode replaces `malloc` with power-of-two size-class bitmaps; allocation probes random slots and never stores metadata next to objects.
- Overflows that would smash a boundary tag land in padding; double/`free` of junk pointers are ignored after a bitmap check.
- Replicated mode runs several copies with different seeds and compares output, catching uninitialized reads that a single randomized heap cannot.
- Analytic M-approximation: expected minimum object separation grows with the overprovisioning factor; SPECint2000 overhead averaged about 8% in the paper.

## Caveats

## Links

- DOI: [10.1145/1133981.1134000](https://doi.org/10.1145/1133981.1134000)
- Author PDF: https://people.cs.umass.edu/~emery/pubs/fp014-berger.pdf
