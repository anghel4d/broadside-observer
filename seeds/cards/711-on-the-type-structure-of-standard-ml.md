---
title: "On the Type Structure of Standard ML"
authors:
  - "Robert Harper"
  - "John C. Mitchell"
year: 1993
venue: "ACM TOPLAS"
arxiv: null
doi: "10.1145/169701.169696"
source: "https://doi.org/10.1145/169701.169696"
topics:
  - sml
  - modules
  - type-structure
  - harper
  - mitchell
seed_rank: 711
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Abstract Types Have Existential Type"
    url: "https://doi.org/10.1145/44501.44504"
    year: 1988
    arxiv: null
    doi: "10.1145/44501.44504"
  - title: "A Theory of Type Polymorphism in Programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
see:
  - "670-abstract-types-have-existential-type"
  - "629-a-theory-of-type-polymorphism-in-programming"
---

# On the Type Structure of Standard ML

## One-sentence takeaway

Standard ML’s core and module type structure is reconstructed as a typed calculus of transparent and opaque type sharing, so sealing really hides representation.

## Why it matters here

If Anoptic ever grows ML-style modules around engine subsystems (renderer, nav, agent memory), this paper — not the Definition alone — is how you decide what `:>` is allowed to forget and what type sharing must still propagate.

## Key ideas

- Core ML polymorphism and the module language are one type structure, not two bolted-together checkers.
- Transparent vs opaque ascription (sealing) is the abstraction boundary; existential type is the semantic reading of opaque types.
- Sharing constraints and type definitions are analyzed so that the Definition’s statics can be compared with a typed λ-calculus account.
- Mitchell–Plotkin existentials and Milner polymorphism are the cited ingredients.
- TOPLAS 15(2), 1993; the 1997 revised Definition is the later official statics this analysis illuminates.

## Caveats

## Links

- DOI: [10.1145/169701.169696](https://doi.org/10.1145/169701.169696)
- ACM: https://dl.acm.org/doi/10.1145/169701.169696
