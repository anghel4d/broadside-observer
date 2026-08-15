---
title: "When Lifetimes Liberate: A Type System for Arenas with Higher-Order Reachability Tracking"
authors:
  - "Siyuan He"
  - "Songlin Jia"
  - "Yuyan Bao"
  - "Tiark Rompf"
year: 2026
venue: "PACMPL OOPSLA"
arxiv: "2509.04253"
doi: "10.1145/3798254"
source: "https://arxiv.org/abs/2509.04253"
topics:
  - region-memory-capabilities
  - typed-programming-systems
seed_rank: 921
seed_batch: "craft-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: type-safety
cites:
  - title: "Region-Based Memory Management"
    url: "https://doi.org/10.1006/inco.1996.2613"
    year: 1997
    arxiv: null
    doi: "10.1006/inco.1996.2613"
  - title: "Region-Based Memory Management in Cyclone"
    url: "https://doi.org/10.1145/512529.512563"
    year: 2002
    arxiv: null
    doi: "10.1145/512529.512563"
  - title: "Typed Memory Management in a Calculus of Capabilities"
    url: "https://doi.org/10.1145/292540.292564"
    year: 1999
    arxiv: null
    doi: "10.1145/292540.292564"
  - title: "Oxide: The Essence of Rust"
    url: "https://arxiv.org/abs/1903.00982"
    year: 2019
    arxiv: "1903.00982"
    doi: null
see:
  - "030-region-based-memory-management"
  - "133-region-based-memory-management-in-cyclone"
  - "028-typed-memory-management-in-a-calculus-of-capabilities"
  - "878-oxide-the-essence-of-rust"
---

# When Lifetimes Liberate: A Type System for Arenas with Higher-Order Reachability Tracking

## One-sentence takeaway

Reachability types for arenas: one type system covering fresh first-class values, lexically bounded seconds, and shadow-arena coallocation — Rocq-mechanized, without forcing Rust-style uniqueness.

## Why it matters here

Anoptic *is* an arena engine (frame arenas, job arenas, meshlet scratch). Tofte–Talpin regions are too lexical; Rust lifetimes are too uniqueness-shaped for GPU-shared and ECS-shared buffers. This paper is the missing middle: bulk deallocation *and* higher-order sharing, which is exactly how ano wants to talk about “this column lives in the sim arena, that scratch dies at the barrier.”

## Key ideas

- Three allocation modes, one type representation: (1) first-class non-lexical, (2) second-class lexically bounded, (3) coallocation into shadow arenas for bulk free.
- Built on reachability types (Bao/Wei/Rompf): tracks aliasing and separation in higher-order code without linear uniqueness as the only hammer.
- Cyclic store structures are in scope; stack discipline is *optional*, not the whole language.
- Mechanized in Rocq (`A^q_{<:}` and a stacked variant).
- OOPSLA 2026 archival; artifact on Zenodo.

## Caveats


## Links

- arXiv: [2509.04253](https://arxiv.org/abs/2509.04253)
- PDF: https://arxiv.org/pdf/2509.04253
- DOI: [10.1145/3798254](https://doi.org/10.1145/3798254)
