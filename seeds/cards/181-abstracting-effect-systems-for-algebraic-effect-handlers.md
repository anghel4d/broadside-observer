---
title: Abstracting Effect Systems for Algebraic Effect Handlers
authors:
- Takuma Yoshioka
- Taro Sekiyama
- Atsushi Igarashi
year: 2024
venue: arXiv:cs.PL
arxiv: '2404.16381'
doi: null
source: https://arxiv.org/abs/2404.16381
topics:
- typed-programming-systems
seed_rank: 181
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: languages
relevance_score: 8
cites:
- title: Handlers of Algebraic Effects
  url: https://doi.org/10.1007/978-3-642-00590-9_7
  year: 2009
  arxiv: null
  doi: 10.1007/978-3-642-00590-9_7
- title: Programming with Algebraic Effects and Handlers
  url: https://arxiv.org/abs/1203.1539
  year: 2015
  arxiv: '1203.1539'
  doi: 10.1016/j.jlamp.2014.02.001
- title: 'Koka: Programming with Row Polymorphic Effect Types'
  url: https://www.microsoft.com/en-us/research/publication/koka-programming-with-row-polymorphic-effect-types/
  year: 2014
  arxiv: null
  doi: null
see:
- "021-handlers-of-algebraic-effects"
- "107-programming-with-algebraic-effects-and-handlers"
- "463-koka-programming-with-row-polymorphic-effect-types"
lineage: algebraic-effects
---

# Abstracting Effect Systems for Algebraic Effect Handlers

## One-sentence takeaway

λ_EA is an effect system parameterized by an effect algebra: prove the algebra's safety conditions and you inherit type-and-effect safety, then compare existing handler effect systems as different algebras.

## Why it matters here

Ano masked commands need an effect collection story — sets, rows, lattices — without rewriting the type system each time. Effect algebras are the interface; safety conditions are the proof obligation.

## Key ideas

- Existing handler effect systems all want “every invoked effect is handled” but disagree on how to represent the collection of possible effects.
- λ_EA is parameterized by an effect algebra that abstracts that representation and its operations.
- Type-and-effect safety is proved once, assuming stated safety conditions on the algebra; a concrete system is safe if its algebra satisfies them.
- Several published effect systems embed as such algebras; the framework also distinguishes which collections remain safe under lift coercions and type-erasure semantics.
- New algebras, including ones not previously studied as effect systems, are compared on those extensions.

## Caveats

## Links

- arXiv: [2404.16381](https://arxiv.org/abs/2404.16381)
