---
title: Monad Transformers and Modular Interpreters
authors:
- Sheng Liang
- Paul Hudak
- Mark Jones
year: 1995
venue: POPL 1995
arxiv: null
doi: 10.1145/199448.199528
source: https://doi.org/10.1145/199448.199528
topics:
- monads
- monad-transformers
- interpreters
- effects
seed_rank: 139
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: maths-foundations
relevance_score: 9
lineage: algebraic-effects
cites:
- title: Notions of Computation and Monads
  url: https://doi.org/10.1016/0890-5401(91)90052-4
  year: 1991
  arxiv: null
  doi: 10.1016/0890-5401(91)90052-4
- title: Comprehending monads
  url: https://doi.org/10.1145/91556.91592
  year: 1990
  arxiv: null
  doi: 10.1145/91556.91592
- title: The essence of functional programming
  url: https://doi.org/10.1145/143165.143169
  year: 1992
  arxiv: null
  doi: 10.1145/143165.143169
see:
- "035-notions-of-computation-and-monads"
---

# Monad Transformers and Modular Interpreters

## One-sentence takeaway

A language feature is a monad transformer plus a lifting of its operations through every other transformer; stacking `StateT`/`EnvT`/`ContT`/`ErrorT`/`List` in different orders is how you change the semantics without rewriting `interp`.

## Why it matters here

This is the recipe for stacking ano DSL interpreters and engine effect layers: isolate store, environment, errors and continuations as transformers, then decide the order (does `callcc` see the store?) by the stack, not by a rewrite of every clause.

## Key ideas

- `interp :: Term → InterpM Value` is fixed; `Term` and `Value` grow as extensible unions (`OR`), `InterpM` grows by applying transformers (`StateT Store`, `EnvT Env`, `ContT Answer`, `ErrorT`, `List`).
- New liftings for hard operations, especially `callcc`, that Moggi, Steele and Espinosa did not get through every transformer; liftings are where feature interactions live.
- Reordering transformers changes meaning: state-over-error vs error-over-state, continuations above or below the store, and so on.
- Constructor classes (Gofer) type the transformers and the `SubType` injection/projection pair that makes the extensible unions work; Haskell 94 type classes were not enough.
- Building blocks cover arithmetic, CBN/CBV/lazy functions, references, nondeterminism, first-class continuations and tracing — more than Steele’s pseudomonads or Wadler’s monolithic interpreter monad.

## Caveats

## Links

- DOI: [10.1145/199448.199528](https://doi.org/10.1145/199448.199528)
- Author page: [web.cecs.pdx.edu/~mpj/pubs/modinterp.html](https://web.cecs.pdx.edu/~mpj/pubs/modinterp.html)
