---
title: "Implementation of the Typed Call-by-Value λ-Calculus using a Stack of Regions"
authors:
  - "Mads Tofte"
  - "Jean-Pierre Talpin"
year: 1994
venue: "POPL"
arxiv: null
doi: "10.1145/174675.177855"
source: "https://doi.org/10.1145/174675.177855"
topics:
  - region-memory-capabilities
seed_rank: 32
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
cites:
  - title: "Polymorphic effect systems"
    url: "https://doi.org/10.1145/73560.73564"
    year: 1988
    arxiv: null
    doi: "10.1145/73560.73564"
  - title: "A theory of type polymorphism in programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
see:
  - "150-polymorphic-effect-systems"
---

# Implementation of the Typed Call-by-Value λ-Calculus using a Stack of Regions

## One-sentence takeaway

Tofte and Talpin translate typed CBV λ-calculus into a target that allocates into a stack of regions whose lifetimes are inferred from a type-and-effect analysis — the original region-inference paper.

## Why it matters here

This is the compilation shape ano already uses: infer (or declare) an arena, bump-allocate, pop the arena. The 1997 journal paper proves it; this POPL paper is the algorithm that shipped in the ML Kit.

## Key ideas

- Region and effect inference is a constraint problem on top of ordinary HM-style types: each type constructor carries a region variable, each term an effect set.
- The target language has `new r`, `e at r`, and `release r`. Regions are LIFO, so release is pointer reset, not a scan.
- Call-by-value is essential: under CBN a delayed computation could outlive the region it was typed in.
- The paper shows how polymorphic let, recursion, and references interact with region lifetimes — references are the hard case and motivate later resetting.
- Related work it sits on: Lucassen–Gifford polymorphic effects, Milner polymorphism, Appel-style continuation compilation.

## Caveats

## Links

- DOI: [10.1145/174675.177855](https://doi.org/10.1145/174675.177855)
