---
title: "Spegion: Implicit and Non-Lexical Regions with Sized Allocations"
authors:
  - "Jack Hughes"
  - "Michael Vollmer"
  - "Mark Batty"
year: 2025
venue: "ECOOP"
arxiv: "2506.02182"
doi: "10.4230/LIPIcs.ECOOP.2025.15"
source: "https://arxiv.org/abs/2506.02182"
topics:
  - region-memory-capabilities
  - typed-programming-systems
seed_rank: 4
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
    card: "031-region-based-memory-management"
  - title: "Region-Based Memory Management in Cyclone"
    url: "https://doi.org/10.1145/512529.512563"
    year: 2002
    arxiv: null
    doi: "10.1145/512529.512563"
    card: "150-region-based-memory-management-in-cyclone"
  - title: "Yarrow: Reconciling Effects Handlers and Region-Based Memory Management"
    url: "https://arxiv.org/abs/2607.15876"
    year: 2026
    arxiv: "2607.15876"
    doi: null
    card: "202-yarrow-reconciling-effects-handlers-and-region-based-memory-"
  - title: "Typed Memory Management in a Calculus of Capabilities"
    url: "https://doi.org/10.1145/292540.292564"
    year: 1999
    arxiv: null
    doi: "10.1145/292540.292564"
    card: "029-typed-memory-management-in-a-calculus-of-capabilities"
---

# Spegion: Implicit and Non-Lexical Regions with Sized Allocations

## One-sentence takeaway

Splittable implicit regions with *sized* allocations, enforced by an effect system instead of substructural types — so you can bound how much goes into an arena without annotating every let.

## Why it matters here

Sized allocations are the type-level version of “this frame arena is 16 MiB and we will know at compile time if a system blows it.” Anoptic already sizes arenas by feel; Spegion shows how ano’s effect/mask story could *check* that. Non-lexical + implicit is the usability bar: programmers should not write Tofte–Talpin region annotations on every ECS system.

## Key ideas

- Implicit, non-lexical regions without a linear/substructural type system; an *effect* system constrains alloc/free.
- Splittable regions (the name: **Sp**littable r**Egion**s): carve a region into sub-regions for finer lifetime/size control.
- Every value carries a size; the type system refuses over-allocation into a region.
- Type safety proved against a small-step semantics (ECOOP 2025; 71-page arXiv extended version).
- Aimed at programs that are *not* stack-shaped — the common case for engines.

## Caveats

- Research language, not a C/Vulkan allocator. Steal the sized-region *invariants*, not the syntax.
- Effect-based region tracking still needs a story for FFI into GPU buffers and lock-free buses.
- Pair with card 1185 (reachability arenas) — they attack the same hole from types vs effects.

## Links

- arXiv: [2506.02182](https://arxiv.org/abs/2506.02182)
- PDF: https://arxiv.org/pdf/2506.02182
- DOI: [10.4230/LIPIcs.ECOOP.2025.15](https://doi.org/10.4230/LIPIcs.ECOOP.2025.15)
