---
title: "Region-Based Memory Management in Cyclone"
authors:
  - "Dan Grossman"
  - "Greg Morrisett"
  - "Trevor Jim"
  - "Michael Hicks"
  - "Yanling Wang"
  - "James Cheney"
year: 2002
venue: "PLDI"
arxiv: null
doi: "10.1145/512529.512563"
source: "https://www.cs.cornell.edu/Projects/cyclone/papers/cyclone-regions.pdf"
topics:
  - region-memory-capabilities
seed_rank: 133
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "Region-Based Memory Management"
    url: "https://doi.org/10.1006/inco.1996.2613"
    year: 1997
    arxiv: null
    doi: "10.1006/inco.1996.2613"
  - title: "Typed memory management in a calculus of capabilities"
    url: "https://doi.org/10.1145/292540.292564"
    year: 1999
    arxiv: null
    doi: "10.1145/292540.292564"
  - title: "Cyclone: A Safe Dialect of C"
    url: "https://www.usenix.org/legacy/event/usenix02/full_papers/jim/jim.pdf"
    year: 2002
    arxiv: null
    doi: null
  - title: "Language support for regions"
    url: "https://doi.org/10.1145/378795.378815"
    year: 2001
    arxiv: null
    doi: "10.1145/378795.378815"
  - title: "CCured: type-safe retrofitting of legacy code"
    url: "https://doi.org/10.1145/503272.503286"
    year: 2002
    arxiv: null
    doi: "10.1145/503272.503286"
  - title: "Enforcing high-level protocols in low-level software"
    url: "https://doi.org/10.1145/378795.378811"
    year: 2001
    arxiv: null
    doi: "10.1145/378795.378811"
  - title: "Dependent types in practical programming"
    url: "https://doi.org/10.1145/292540.292560"
    year: 1999
    arxiv: null
    doi: "10.1145/292540.292560"
see:
  - "030-region-based-memory-management"
  - "028-typed-memory-management-in-a-calculus-of-capabilities"
---

# Region-Based Memory Management in Cyclone

## One-sentence takeaway

Cyclone puts every object in a heap, stack, or lexically scoped growable region and rejects dangling dereferences at compile time, with no hidden per-pointer metadata.

## Why it matters here

This is the closest C-level blueprint for anoptic/Cano arenas: explicit region handles, LIFO lifetimes, and an effect on each function saying which regions it may touch — the same shape as engine frame arenas plus optional GC for the immortal heap.

## Key ideas

- Three region kinds: immortal heap (`malloc`/`new`, optional Boehm GC), C-like stack blocks, and `region r { s }` growable regions deallocated when `s` exits (including via `goto`/`return`/exception).
- Pointer types carry a region name `τ*ρ`; LIFO lifetimes induce an “outlives” subtype, so a pointer into a longer-lived region can be used where a shorter-lived one is expected.
- Region polymorphism plus local inference and defaults: omitted argument regions are generalized, omitted returns default to the heap, so most C ports need no annotations (they report ~8% of lines changed, and only 6% of those were region annotations).
- Effects without effect variables: a function’s default effect is the regions named in its prototype; `regions_of(α)` stands in for the hidden regions inside an abstract type, which is what makes existential packages not leak dangling pointers.
- All analyses are intraprocedural, so the system separately compiles; `free` is not in the trusted interface.

## Caveats

## Links

- Author PDF: [cyclone-regions.pdf](https://www.cs.cornell.edu/Projects/cyclone/papers/cyclone-regions.pdf)
- DOI: [10.1145/512529.512563](https://doi.org/10.1145/512529.512563)
- Companion USENIX paper: [Cyclone: A Safe Dialect of C](https://www.usenix.org/legacy/event/usenix02/full_papers/jim/jim.pdf)
