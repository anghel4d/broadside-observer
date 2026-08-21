---
title: "Language Support for Regions"
authors:
  - "David Gay"
  - "Alex Aiken"
year: 2001
venue: "PLDI"
arxiv: null
doi: "10.1145/378795.378815"
source: "https://doi.org/10.1145/378795.378815"
topics:
  - "region-memory"
  - "reference-counting"
  - "c-dialects"
  - "typed-programming-systems"
seed_rank: 1138
seed_batch: "archive-2026-08-22"
reviewed: "2026-08-22"
pool: "languages"
relevance_score: 10
lineage: rc-regions
cites:
  - title: "Region-Based Memory Management"
    url: "https://doi.org/10.1016/S0890-5401(97)00054-5"
    year: 1997
    arxiv: null
    doi: "10.1016/S0890-5401(97)00054-5"
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
  - title: "Implementation of the Typed Call-by-Value λ-Calculus using a Stack of Regions"
    url: "https://doi.org/10.1145/178243.178262"
    year: 1994
    arxiv: null
    doi: "10.1145/178243.178262"
see:
  - "030-region-based-memory-management"
  - "133-region-based-memory-management-in-cyclone"
  - "032-implementation-of-the-typed-call-by-value-calculus-using-a-s"
  - "028-typed-memory-management-in-a-calculus-of-capabilities"
  - "1011-cyclone-a-safe-dialect-of-c"
---

# Language Support for Regions

## One-sentence takeaway

Regions as a *C dialect*: `newregion` / `ralloc` / `deleteregion`, a dynamic reference count that forbids deleting a live region, and three annotations (`sameregion`, `parentptr`, `traditional`) that make the count cheap.

## Why it matters here

Tofte–Talpin (030) infers regions for ML; Cyclone (133 / 1011) is a safe C with region *types*; the stack-of-regions paper (032) is the SML/NJ backend. Gay–Aiken 2001 is the missing *engine* paper: explicit regions in C, safety by a count of *external* pointers, compiles to ordinary C. Anoptic frame arenas, level heaps, and scratch regions are this API, not MLKit inference. The annotations match how games already write allocators — "this next-pointer lives in the same region as the node" — and they drop RC overhead from 27% to 11% on real programs. Existential abstract regions cover the "I have a pointer, I do not know which arena" case without falling back to malloc.

## Key ideas

- A region dies only when no pointer *from outside* it remains. Intra-region pointers do not keep it alive. `deleteregion` fails (or is a checked no-op) if the count is nonzero.
- `sameregion` / `parentptr` / default: static structure so most pointer writes need no count update. The type system generalises this with existentially quantified abstract regions.
- RC compiles to C. Same-region allocation is a bump pointer; deletion is a free of the whole chunk list. Locality is a programmer-specified colocation, not a GC hope.
- Benchmarks vs malloc/free and Boehm–Weiser: from 7% slower to 58% faster, RC overhead ≤ 11%.

## Caveats

- Annotations are still programmer work. The 1998 C@ predecessor without them paid 27%. Inferring them is Cyclone's job, not RC's.
- No individual `free`. The unit of reclamation is the region — same contract as a frame arena.
- Dynamic count is not a proof. Cyclone / capabilities (028) are the static siblings; this is the one you can drop into a C engine tomorrow.

## Links

- DOI: [10.1145/378795.378815](https://doi.org/10.1145/378795.378815)
- Author PDF: [http://theory.stanford.edu/~aiken/publications/papers/pldi01.pdf](http://theory.stanford.edu/~aiken/publications/papers/pldi01.pdf)
