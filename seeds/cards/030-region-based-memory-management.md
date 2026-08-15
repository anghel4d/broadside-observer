---
title: "Region-Based Memory Management"
authors:
  - "Mads Tofte"
  - "Jean-Pierre Talpin"
year: 1997
venue: "Information and Computation"
arxiv: null
doi: "10.1006/inco.1996.2613"
source: "https://doi.org/10.1006/inco.1996.2613"
topics:
  - region-memory-capabilities
seed_rank: 30
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
cites:
  - title: "Implementation of the Typed Call-by-Value λ-Calculus using a Stack of Regions"
    url: "https://doi.org/10.1145/174675.177855"
    year: 1994
    arxiv: null
    doi: "10.1145/174675.177855"
  - title: "Typed Memory Management in a Calculus of Capabilities"
    url: "https://doi.org/10.1145/292540.292564"
    year: 1999
    arxiv: null
    doi: "10.1145/292540.292564"
see:
  - "032-implementation-of-the-typed-call-by-value-calculus-using-a-s"
  - "028-typed-memory-management-in-a-calculus-of-capabilities"
---

# Region-Based Memory Management

## One-sentence takeaway

The journal paper proves soundness of Tofte–Talpin region inference: every value lives in a region, regions form a stack, and a region is freed only when the type-and-effect system says nothing live still points into it.

## Why it matters here

This is the theorem behind ano bump arenas and Anoptic frame reset: allocate into a region, free the whole slab, never scan. Sky purity is the effect part of the same judgment.

## Key ideas

- The 1994 POPL paper showed the translation; this 1997 I&C article gives the formal region calculus, the inference algorithm, and the type-soundness / no-dangling-pointer theorems.
- Every type is annotated with a region; every term has an effect (the set of regions it may allocate in or read). Unification of those annotations is region inference.
- Lifetime follows lexical (stack) structure: `letregion ρ in e` allocates ρ, evaluates e, then reclaims the whole region in one shot.
- The ML Kit implemented this for Standard ML and showed that many programs need no GC at all; others need a few late-held regions that leak until the authors add resetting.
- Later capability calculi (Crary–Walker–Morrisett) and Cyclone make the same regions explicit rather than inferred.

## Caveats

## Links

- DOI: [10.1006/inco.1996.2613](https://doi.org/10.1006/inco.1996.2613)
