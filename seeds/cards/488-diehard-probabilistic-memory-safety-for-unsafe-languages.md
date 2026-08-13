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
seed_rank: 488
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
  - "377-hoard-a-scalable-memory-allocator-for-multithreaded-applicat"
  - "583-composing-high-performance-memory-allocators"
  - "399-mesh-compacting-memory-management-for-c-c-applications"
  - "582-a-memory-allocator-dlmalloc"
---

# DieHard: Probabilistic Memory Safety for Unsafe Languages

## One-sentence takeaway

DieHard uses randomization and replication in the allocator to probabilistically tolerate memory errors.

## Why it matters here

Allocator as fault isolation; useful foil for deterministic game heaps.

## Key ideas

- DieHard uses randomization and replication in the allocator to probabilistically tolerate memory errors.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- DOI: [10.1145/1133981.1134000](https://doi.org/10.1145/1133981.1134000)
- URL: https://doi.org/10.1145/1133981.1134000
