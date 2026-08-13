---
title: "Allocator-Aware (AA) Software (Lakos et al.)"
authors:
  - "John Lakos"
  - "Vittorio Romeo"
  - "Rohan McGovern"
  - "Alisdair Meredith"
year: 2021
venue: "CppCon"
arxiv: null
doi: null
source: "https://www.youtube.com/watch?v=0mdcWlkBb_4"
topics:
  - memory-allocation
  - lakos
seed_rank: 244
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
lineage: memory-allocators
cites:
  - title: "Local Memory Allocators in Large-Scale C++ (Lakos allocator model)"
    url: "https://www.youtube.com/watch?v=nZNd5FjSquk"
    year: 2013
    arxiv: null
    doi: null
  - title: "Reconsidering Custom Memory Allocation"
    url: "https://doi.org/10.1145/582419.582421"
    year: 2002
    arxiv: null
    doi: "10.1145/582419.582421"
  - title: "Composing High-Performance Memory Allocators"
    url: "https://doi.org/10.1145/378795.378821"
    year: 2001
    arxiv: null
    doi: "10.1145/378795.378821"
  - title: "mimalloc: Free List Sharding in Action"
    url: "https://arxiv.org/abs/1908.05006"
    year: 2019
    arxiv: "1908.05006"
    doi: null
see:
  - "195-local-memory-allocators-in-large-scale-c-lakos-allocator-mod"
  - "439-reconsidering-custom-memory-allocation"
  - "438-composing-high-performance-memory-allocators"
  - "011-mimalloc-free-list-sharding-in-action"
---

# Allocator-Aware (AA) Software (Lakos et al.)

## One-sentence takeaway

Presents allocator-aware software design: propagating memory suppliers through vocabulary types without hidden global new.

## Why it matters here

Modern Lakos AA vocabulary for propagating allocators through types — maps to arena/region wiring in Anoptic.

## Key ideas

- Presents allocator-aware software design: propagating memory suppliers through vocabulary types without hidden global new.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Primary PDF/DOI not yet pinned; verify the canonical artifact before citation.

## Links

- URL: https://www.youtube.com/watch?v=0mdcWlkBb_4
