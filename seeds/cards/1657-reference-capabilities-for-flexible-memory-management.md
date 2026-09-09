---
title: "Reference Capabilities for Flexible Memory Management"
authors: ["Ellen Arvidsson", "Elias Castegren", "Sylvan Clebsch", "Sophia Drossopoulou", "James Noble", "Matthew J. Parkinson", "Tobias Wrigstad"]
year: 2023
venue: "PACMPL (OOPSLA 2023)"
arxiv: "2309.02983"
doi: "10.1145/3622846"
source: "https://arxiv.org/abs/2309.02983"
topics: [region-memory-capabilities, typed-programming-systems]
seed_rank: 1657
seed_batch: "craft-2026-09-09"
reviewed: "2026-09-09"
pool: "languages"
relevance_score: 10
lineage: region-memory
cites:
  - title: "Region-Based Memory Management"
    url: "https://doi.org/10.1006/inco.1996.2613"
    year: 1997
    arxiv: null
    doi: "10.1006/inco.1996.2613"
  - title: "Yarrow: Reconciling Effect Handlers and Region-Based Memory Management"
    url: "https://arxiv.org/abs/2607.15876"
    year: 2026
    arxiv: "2607.15876"
    doi: null
  - title: "Ownership Types for Flexible Alias Protection"
    url: "https://doi.org/10.1145/286942.286947"
    year: 1998
    arxiv: null
    doi: "10.1145/286942.286947"
  - title: "Language Support for Regions"
    url: "https://doi.org/10.1145/378795.378845"
    year: 2001
    arxiv: null
    doi: "10.1145/378795.378845"
see:
  - "1621-yarrow-reconciling-effect-handlers-and-region-based-memory-management"
  - "030-region-based-memory-management"
  - "133-region-based-memory-management-in-cyclone"
  - "1008-linear-regions-are-all-you-need"
  - "1138-language-support-for-regions"
  - "1048-ownership-types-for-flexible-alias-protection"
  - "921-when-lifetimes-liberate-a-type-system-for-arenas"
---

# Reference Capabilities for Flexible Memory Management

## One-sentence takeaway

Verona organises the heap into a forest of isolated regions with *reference capabilities* that say how a pointer may cross or mutate regions, so each region picks its own GC/arena strategy under a static alias discipline.

## Why it matters here

Yarrow 1621 reconciled effect handlers with region stacks; Verona is the leftover *capability* design for multi-region heaps — the ano/Anoptic shape where frame arenas, long-lived simulation state, and script heaps coexist without one GC policy. Steal the capability vocabulary (iso / mut / imm / region boundaries), not the Verona runtime.

## Key ideas

- **Forest of regions.** Objects live in isolated regions; a thread mutates only inside regions it owns; cross-region references are capability-typed.
- **Per-region memory strategy.** Arena bump, GC, or manual — chosen locally — so Anoptic-style per-frame regions and persistent ECS stores can share a type story.
- **Reference capabilities.** Static permissions on references replace ad-hoc lifetime comments; flexible aliasing without full Rust borrow chains.
- **OOPSLA 2023 / PACMPL.** Extended arXiv version includes proofs and examples beyond the conference cut.

## Caveats

PACMPL OOPSLA 2023 / DOI `10.1145/3622846` / arXiv `2309.02983` (extended). Verona is Microsoft Research concurrent OOP — not C arenas. Do not remint Yarrow 1621, Tofte–Talpin 030, Cyclone 133, linear regions 1008, Gay–Aiken 1138, ownership types 1048, or arena lifetimes 921.

## Links

- arXiv abs: https://arxiv.org/abs/2309.02983
- PDF: https://arxiv.org/pdf/2309.02983
- DOI: https://doi.org/10.1145/3622846
