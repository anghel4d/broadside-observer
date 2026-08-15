---
title: "Typed Memory Management in a Calculus of Capabilities"
authors:
  - "Karl Crary"
  - "David Walker"
  - "Greg Morrisett"
year: 1999
venue: "POPL"
arxiv: null
doi: "10.1145/292540.292564"
source: "https://doi.org/10.1145/292540.292564"
topics:
  - region-memory-capabilities
  - typed-programming-systems
seed_rank: 28
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
cites:
  - title: "Region-Based Memory Management"
    url: "https://doi.org/10.1006/inco.1996.2613"
    year: 1997
    arxiv: null
    doi: "10.1006/inco.1996.2613"
  - title: "Implementation of the Typed Call-by-Value λ-Calculus using a Stack of Regions"
    url: "https://doi.org/10.1145/174675.177855"
    year: 1994
    arxiv: null
    doi: "10.1145/174675.177855"
see:
  - "030-region-based-memory-management"
  - "032-implementation-of-the-typed-call-by-value-calculus-using-a-s"
---

# Typed Memory Management in a Calculus of Capabilities

## One-sentence takeaway

Capability calculus tracks which regions a term may touch as linear capabilities, so Tofte–Talpin-style region allocation can be made explicit and still type-safe after the compiler has left.

## Why it matters here

ano’s arena story is this paper: a region is a capability you must hold to read or free it, and dropping the capability is the type-level analog of bump-reset. Closest formal ancestor of Sky purity boundaries.

## Key ideas

- Tofte–Talpin infer a stack of regions and free them wholesale; this calculus *exposes* those operations and proves they cannot dangle.
- A capability is a linear token naming a set of regions; aliasing is controlled because the token cannot be duplicated.
- The type of a pointer mentions the region it lives in; a well-typed term that holds no capability for that region cannot dereference or deallocate it.
- Unlike pure region inference, the programmer (or a later compiler pass) can open, copy, and revoke capabilities, which is how Cyclone and later Rust-adjacent work talk.
- Soundness is proved for a calculus that includes allocation, deallocation, and packing of existential region packages — the seed of typed assembly / TAL memory.

## Caveats

## Links

- DOI: [10.1145/292540.292564](https://doi.org/10.1145/292540.292564)
- ACM: https://dl.acm.org/doi/10.1145/292540.292564
