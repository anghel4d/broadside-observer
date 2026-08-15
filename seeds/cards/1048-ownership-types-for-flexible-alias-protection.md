---
title: "Ownership Types for Flexible Alias Protection"
authors: ["David G. Clarke", "John M. Potter", "James Noble"]
year: 1998
venue: "OOPSLA"
arxiv: null
doi: "10.1145/286936.286947"
source: "https://doi.org/10.1145/286936.286947"
topics: [ownership-types, alias-control, region-memory-capabilities]
seed_rank: 1048
seed_batch: "archive-2026-08-16"
reviewed: "2026-08-16"
pool: "languages"
relevance_score: 9
lineage: ownership-types
cites:
  - title: "Flexible Alias Protection"
    url: "https://doi.org/10.1007/BFb0054091"
    year: 1998
    arxiv: null
    doi: "10.1007/BFb0054091"
  - title: "Typed Memory Management in a Calculus of Capabilities"
    url: "https://doi.org/10.1145/292540.292564"
    year: 1999
    arxiv: null
    doi: "10.1145/292540.292564"
  - title: "Region-Based Memory Management"
    url: "https://doi.org/10.1016/S0890-5401(97)00054-5"
    year: 1997
    arxiv: null
    doi: "10.1016/S0890-5401(97)00054-5"
  - title: "Separation Logic: A Logic for Shared Mutable Data Structures"
    url: "https://doi.org/10.1109/LICS.2002.1029817"
    year: 2002
    arxiv: null
    doi: "10.1109/LICS.2002.1029817"
see:
  - "028-typed-memory-management-in-a-calculus-of-capabilities"
  - "030-region-based-memory-management"
  - "032-implementation-of-the-typed-call-by-value-calculus-using-a-s"
  - "134-separation-logic-a-logic-for-shared-mutable-data-structures"
  - "1011-cyclone-a-safe-dialect-of-c"
  - "1008-linear-regions-are-all-you-need"
---

# Ownership Types for Flexible Alias Protection

## One-sentence takeaway

A static type system that names *who owns* an object, so aliases cannot mutate a component behind the aggregate's back — the object-graph topology becomes an invariant.

## Why it matters here

Anoptic is C with arenas; ano wants array safety without a GC. The shelf has regions (030, 032, 1008), capabilities (028), Cyclone (1011/133), and separation logic (134), but not the 1998 ownership-types paper that Rust's borrow checker is popularly traced through. Owners are a *tree* over the heap, complementary to region stacks and linear capabilities.

## Key ideas

- Inter-object aliasing is required for linked structure and is poison for encapsulation: an aggregate's state can change via an alias to a component.
- Ownership types expose ownership in the type of a reference, restricting which paths can see an object.
- Soundness: well-typed programs preserve the stated aliasing invariants on the object graph.
- ECOOP 1998 *Flexible Alias Protection* (Noble, Vitek, Potter) is the companion design paper; OOPSLA 1998 is the type system.
- Later owners-as-dominators / owners-as-modifiers / Universe types are descendants — cites, not remints.

## Caveats

- Original system is for Java-like objects, not C arenas or GPU buffers. Mapping owners onto Anoptic's frame/scratch arenas is extra work.
- Last Archive already rejected Alias Types (ESOP 2000) as a TAL satellite; this is a different, OO-native line.
- Rust, Cyclone regions, and linear regions already cover *some* of this design space; ownership types are the missing named origin.

## Links

- DOI: [10.1145/286936.286947](https://doi.org/10.1145/286936.286947)
- ACM: https://dl.acm.org/doi/10.1145/286936.286947
