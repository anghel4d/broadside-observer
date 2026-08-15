---
title: "Miranda: A Non-strict Functional Language with Polymorphic Types"
authors:
  - "D. A. Turner"
year: 1985
venue: "FPCA / LNCS"
arxiv: null
doi: "10.1007/3-540-15975-4_26"
source: "https://doi.org/10.1007/3-540-15975-4_26"
topics:
  - miranda
  - turner
  - lazy-evaluation
  - functional-programming
seed_rank: 716
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "A Theory of Type Polymorphism in Programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
see:
  - "629-a-theory-of-type-polymorphism-in-programming"
---

# Miranda: A Non-strict Functional Language with Polymorphic Types

## One-sentence takeaway

Miranda is a commercially shipped lazy language with Hindley–Milner types, algebraic data, and offside-rule syntax — the immediate predecessor whose look Haskell inherited.

## Why it matters here

Haskell’s surface and the SPJ implementation book both assume Miranda-class source. If ano ever wants a small lazy teaching/scripting face, this is the language that already combined non-strict evaluation with polymorphic types in the field.

## Key ideas

- Non-strict (lazy) evaluation is the default; there is no implicit mutation.
- Polymorphic types are Milner-style; algebraic types and pattern matching are the data model.
- Layout/offside syntax and a small prelude made the language teachable and shippable (Research Software Ltd).
- SASL and KRC are Turner’s earlier steps; Haskell’s committee report is the later community successor.
- FPCA 1985 / LNCS 201; Peyton Jones’s 1987 book treats Miranda as the source language being compiled.

## Caveats

## Links

- DOI: [10.1007/3-540-15975-4_26](https://doi.org/10.1007/3-540-15975-4_26)
- Springer: https://link.springer.com/chapter/10.1007/3-540-15975-4_26
