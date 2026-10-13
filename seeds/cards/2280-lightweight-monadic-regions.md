---
title: "Lightweight Monadic Regions"
authors:
  - "Oleg Kiselyov"
  - "Chung-chieh Shan"
year: 2008
venue: "Haskell Symposium 2008, 1–12"
arxiv: null
doi: "10.1145/1411286.1411288"
source: "https://okmij.org/ftp/Computation/resource-aware-prog/region-io.pdf"
topics:
  - region-memory-capabilities
  - resource-management
  - type-systems
  - haskell
seed_rank: 2280
seed_batch: "archive-2026-10-14"
reviewed: "2026-10-14"
pool: "languages"
relevance_score: 8
lineage: region-memory
see:
  - 030-region-based-memory-management
  - 133-region-based-memory-management-in-cyclone
  - 1008-linear-regions-are-all-you-need
cites:
  - title: "Lightweight Monadic Regions"
    url: "https://doi.org/10.1145/1411286.1411288"
    year: 2008
    arxiv: null
    doi: "10.1145/1411286.1411288"
  - title: "Monadic Regions"
    url: "https://doi.org/10.1145/1016848.1016867"
    year: 2004
    arxiv: null
    doi: "10.1145/1016848.1016867"
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
  - title: "Linear Regions Are All You Need"
    url: "https://doi.org/10.1007/11693024_2"
    year: 2006
    arxiv: null
    doi: "10.1007/11693024_2"
---

# Lightweight Monadic Regions

## One-sentence takeaway

Kiselyov and Shan encode nested regions for scarce resources (file handles, connections, graphics contexts) as a stack of ST-style monad transformers in plain Haskell, so the type checker statically forbids using a resource after its region closes, with region polymorphism and subtyping inferred and no witness terms to pass around.

## Why it matters here

The library has the region calculus (030), Cyclone's regions (133), linear regions (1008) and newer region/effect work (1621, 922), but not the "regions as a library" design: getting Tofte–Talpin-style lexical lifetimes out of an ordinary type system with rank-2 types instead of a new language. That is the cheap route for ano or an engine API to guarantee that GPU buffers, arena handles, file handles or per-frame scratch allocations cannot escape their scope, using phantom region tags rather than a borrow checker.

## Key ideas

- **SIO as a safe ST for handles.** A computation `SIO s` runs under `runSIO :: (forall s. SIO s v) -> IO v`; handles are tagged with the region's phantom type, so the rank-2 type prevents them (or computations using them) from escaping, and the runtime closes them on exit.
- **Nested regions as monad transformers.** Each new region is another transformer layer over its parent; a child can use the parent's handles through implicit region subtyping decided at the type level by a type-class constraint that checks ancestry (it only compares types for equality), without explicit coercions or witness terms.
- **Non-LIFO lifetimes.** Resources may be disposed in any order, and a handle can be promoted to a longer-lived ancestor region when the longest-living resource is only known dynamically.
- **Works with real Haskell.** Higher-order functions, mutable state, recursion and run-time exceptions are supported, and region annotations are part of the inferred type.
- **Contrast: manual management.** A second library tracks each handle's open/closed type-state with phantom types and a parameterized monad, a form of linear typing with no run-time cost, at the price of a statically known number of open handles and awkward error recovery.

## Caveats

The paper manages scarce resources, not heap memory (GHC's garbage collector still owns memory). Implicit region subtyping rests on multi-parameter type-class machinery (the `MonadRaise` constraint), and type errors from such encodings can be hard to read; the authors note that the previous encoding of implicit subtyping needed incoherent instances, which this one avoids. Coarse lexical regions can keep resources alive longer than necessary unless a program uses the promotion trick.

## Links

- Paper (author PDF): https://okmij.org/ftp/Computation/resource-aware-prog/region-io.pdf
- Author page with code: https://okmij.org/ftp/Haskell/regions.html
- Paper (DOI): https://doi.org/10.1145/1411286.1411288
