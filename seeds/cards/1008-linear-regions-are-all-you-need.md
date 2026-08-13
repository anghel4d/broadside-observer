---
title: "Linear Regions Are All You Need"
authors: ["Matthew Fluet", "Greg Morrisett", "Amal Ahmed"]
year: 2006
venue: "ESOP"
arxiv: null
doi: "10.1007/11693024_2"
source: "https://doi.org/10.1007/11693024_2"
topics: [region-memory-capabilities, linear-types, substructural-types]
seed_rank: 1008
seed_batch: "archive-2026-08-14"
reviewed: "2026-08-14"
pool: "languages"
relevance_score: 9
lineage: region-memory
cites:
  - title: "Region-Based Memory Management"
    url: "https://doi.org/10.1006/inco.1996.2613"
    year: 1997
    arxiv: null
    doi: "10.1006/inco.1996.2613"
  - title: "Typed Memory Management in a Calculus of Capabilities"
    url: "https://doi.org/10.1145/292540.292564"
    year: 1999
    arxiv: null
    doi: "10.1145/292540.292564"
  - title: "Region-Based Memory Management in Cyclone"
    url: "https://doi.org/10.1145/512529.512563"
    year: 2002
    arxiv: null
    doi: "10.1145/512529.512563"
  - title: "Linear Types Can Change the World!"
    url: "https://doi.org/10.1016/B978-0-444-88756-8.50011-7"
    year: 1990
    arxiv: null
    doi: null
see:
  - "030-region-based-memory-management"
  - "028-typed-memory-management-in-a-calculus-of-capabilities"
  - "133-region-based-memory-management-in-cyclone"
  - "148-linear-types-can-change-the-world"
  - "922-spegion-implicit-and-non-lexical-regions-with-sized-allocatio"
---

# Linear Regions Are All You Need

## One-sentence takeaway

Tofte–Talpin regions without the LIFO stack: a tiny substructural calculus (λrgnUL) where a linear capability is produced by `newrgn` and consumed by `freergn`, encoding both TT regions and Cyclone's first-class dynamic regions.

## Why it matters here

ano's bump arenas and Sky purity boundaries are regions; 030/032 still assume stack discipline, 133 is Cyclone's LIFO-plus-GC design, and 922 is the 2025 sized-region follow-on. This 2006 ESOP paper is the missing calculus that says linear capabilities are enough — no effect rows required — which is the right mental model for a C engine that allocates per-frame and frees out of order.

## Key ideas

- Tofte–Talpin reclaims without GC but forces last-in-first-out region lifetimes tied to lexical blocks.
- λrgnUL splits region creation and destruction: `newrgn` yields a linear capability; every alloc/read/write is mediated by that capability; `freergn` consumes it.
- Unrestricted vs linear qualifiers on types and variables are the whole substructural story; the type system is intentionally smaller than TT's type-and-effects.
- Both TT-style stack regions and Cyclone's first-class dynamic regions / unique pointers encode into this core.
- Type safety is mechanized in Twelf in the accompanying development.

## Caveats

- This is a core calculus, not a source language; inference of capabilities and the C FFI are out of scope.
- Alias Types / L3 (locations + linear capabilities at TAL level) are the assembly-side cousins; cite, don't remint.
- Spegion (922) and Yarrow (173) are modern region/effect recombinations; this card is the 2006 reduction, not those.

## Links

- DOI: [10.1007/11693024_2](https://doi.org/10.1007/11693024_2)
- Author PDF: http://www.ccs.neu.edu/home/amal/papers/linrgn.pdf
- Supporting Twelf: https://www.cs.cornell.edu/people/fluet/research/substruct-regions/
