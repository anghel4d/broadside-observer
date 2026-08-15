---
title: "Allocator-Aware (AA) Software (Lakos et al.)"
authors:
  - "John Lakos"
  - "Pablo Halpern"
year: 2020
venue: "WG21 P2035R0 / BDE white paper"
arxiv: null
doi: null
source: "https://bloomberg.github.io/bde/white_papers/allocator-aware-software.html"
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

Halpern and Lakos argue that a fully allocator-aware infrastructure (C++11, BDE, or C++17 PMR) pays for itself via local-allocator speed plus collateral testing and instrumentation, and they recommend the BDE/PMR model today.

## Why it matters here

Anoptic arenas and GRID COMMAND frame pools only work if every vocabulary type actually *takes* an allocator; this is the design brief for propagating those suppliers without a hidden `new`.

## Key ideas

- Local allocators have large, well-known performance wins; the real debate is integration cost (training, contracts, misuse).
- Three shipping AA models — C++11 scoped allocators, Bloomberg BDE, and C++17 `std::pmr` — deliver the same essential benefits at very different maintenance cost.
- Collateral benefits: object-based instrumentation and the ability to test allocation itself, not only payload correctness.
- Many objections to AA are classified as hearsay; the paper separates those from the genuine upfront cost.
- They still advocate adopting AA now for any library with performance-sensitive clients, while researching a language-level scoped-allocator feature that would cut the boilerplate. Canonical artifact is WG21 P2035R0 (2020-01-12).

## Caveats

## Links

- White paper: https://bloomberg.github.io/bde/white_papers/allocator-aware-software.html
- PDF (P2035R0): https://bloomberg.github.io/bde-resources/pdfs/P2035R0.pdf
- Related talk: [Value Proposition: Allocator-Aware (AA) Software — Lakos, CppCon 2019](https://www.youtube.com/watch?v=ebn1C-mTFVk)
