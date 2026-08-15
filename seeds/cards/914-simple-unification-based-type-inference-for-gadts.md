---
title: Simple Unification-Based Type Inference for GADTs
authors:
- Simon Peyton Jones
- Dimitrios Vytiniotis
- Stephanie Weirich
- Geoffrey Washburn
year: 2006
venue: ICFP
arxiv: null
doi: 10.1145/1159803.1159811
source: "https://doi.org/10.1145/1159803.1159811"
topics:
- gadts
- type-inference
- type-safety
seed_rank: 914
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Guarded Recursive Datatype Constructors"
    url: "https://doi.org/10.1145/604131.604150"
    year: 2003
    doi: "10.1145/604131.604150"
see:
  - "915-guarded-recursive-datatype-constructors"
---

# Simple Unification-Based Type Inference for GADTs

## One-sentence takeaway

Wobbly types mark every type the inference algorithm would have to guess; GADT pattern matches refine only rigid (user-specified) types, so unification stays order-insensitive and ships in GHC.

## Why it matters here

This is the paper that made GADTs a conservative Haskell extension instead of a research dialect. If ano indexes entities by a phantom parameter (unit kind, objective sort), the rule to steal is: refine only what the programmer wrote, otherwise stay Hindley–Milner.

## Key ideas

- A rigid type is completely determined by a programmer annotation; everything else is wobbly. There are no partly-rigid types.
- `case` refines the environment only when the scrutinee is rigid; only rigid bindings and rigid result types are rewritten by the unifier of the constructor’s result type with the scrutinee.
- Polymorphic recursion, required by almost every interesting GADT program (`eval :: Term a -> a`), is unlocked by a complete type signature on the binding.
- Programs without a principal type (two incomparable System F types) are rejected; the programmer disambiguates with a signature.
- Sound, conservative over Hindley–Milner, and implemented in GHC alongside existing type-class and rank-n machinery.

## Caveats

## Links

- DOI: [10.1145/1159803.1159811](https://doi.org/10.1145/1159803.1159811)
- PDF: https://www.seas.upenn.edu/~sweirich/papers/gadt.pdf
- MSR page: https://www.microsoft.com/en-us/research/publication/simple-unification-based-type-inference-for-gadts/
