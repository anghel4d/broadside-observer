---
title: "Experience with Safe Manual Memory-Management in Cyclone"
authors: ["Michael Hicks", "Greg Morrisett", "Dan Grossman", "Trevor Jim"]
year: 2004
venue: "ISMM 2004"
arxiv: null
doi: "10.1145/1029873.1029883"
source: "https://doi.org/10.1145/1029873.1029883"
topics: [regions, unique-pointers, ownership]
seed_rank: 1810
seed_batch: "craft-2026-09-13"
reviewed: "2026-09-13"
pool: "systems"
relevance_score: 10
lineage: region-memory
cites:
  - title: "Region-Based Memory Management in Cyclone"
    url: "https://doi.org/10.1145/512529.512563"
    year: 2002
    arxiv: null
    doi: "10.1145/512529.512563"
  - title: "Cyclone: A Safe Dialect of C"
    url: "https://www.usenix.org/conference/usenix-annual-technical-conference-2002/cyclone-safe-dialect-c"
    year: 2002
    arxiv: null
    doi: null
  - title: "Reference Capabilities for Flexible Memory Management"
    url: "https://arxiv.org/abs/2309.02983"
    year: 2023
    arxiv: "2309.02983"
    doi: "10.1145/3622846"
see:
  - "133-region-based-memory-management-in-cyclone"
  - "1011-cyclone-a-safe-dialect-of-c"
  - "1657-reference-capabilities-for-flexible-memory-management"
  - "028-typed-memory-management-in-a-calculus-of-capabilities"
  - "011-mimalloc-free-list-sharding"
  - "439-reconsidering-custom-memory-allocation"
---

# Experience with Safe Manual Memory-Management in Cyclone

## One-sentence takeaway

Hicks–Morrisett–Grossman–Jim report what actually worked when Cyclone combined LIFO regions with unique pointers: dynamic arenas, reference-counted regions, and better footprint than BDW GC alone — plus the traps (exceptions, aliasing, event loops) that LIFO alone cannot cover.

## Why it matters here

Anoptic’s allocator/region story this week already has mimalloc 011, Berger 439, Cyclone regions 133, Cyclone dialect 1011, and Verona capabilities 1657. The leftover is the *practice* paper: how unique pointers + regions compose into the abstractions engine code actually wants (dynamic-lifetime arenas, refcounted objects) and where LIFO arenas fail (servers, event loops — also game frame loops with escapes). Read this before inventing another arena API for ano/Anoptic.

## Key ideas

- **Regions + uniqueness together.** Neither alone was enough; combining them builds dynamic arenas and refcounted regions on top of the type system.
- **LIFO arena limits.** Callers-know-lifetime / callees-know-size works; event/server loops do not — the same trap as naïve frame arenas that escape.
- **Unique pointers + flow analysis.** Affine-style sole reference enables explicit free without dangling use; interacts poorly with exceptions/GC unless designed carefully.
- **Measured practice.** Ported C and resource-constrained apps: footprint wins, occasional throughput wins vs conservative GC.

## Caveats

ISMM 2004, DOI `10.1145/1029873.1029883`; author PDF at Washington. Pre-Rust ownership experience — map carefully onto Verona 1657 / modern Rust rather than cloning Cyclone syntax. Do not remint regions 133, Cyclone 1011, Verona 1657, capabilities 028, mimalloc 011, or Berger 439.

## Links

- DOI: https://doi.org/10.1145/1029873.1029883
- Author PDF: https://homes.cs.washington.edu/~djg/papers/cyc_mm_experience.pdf
- UMD page: https://www.cs.umd.edu/~mwh/papers/hicks04experience.html
