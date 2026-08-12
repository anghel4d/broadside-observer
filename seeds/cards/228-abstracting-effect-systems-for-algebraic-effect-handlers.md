---
title: Abstracting Effect Systems for Algebraic Effect Handlers
authors:
- Takuma Yoshioka
- Taro Sekiyama
- Atsushi Igarashi
year: 2024
venue: arXiv
arxiv: '2404.16381'
doi: null
source: https://arxiv.org/abs/2404.16381
topics:
- typed-programming-systems
seed_rank: 228
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: languages
relevance_score: 8
cites:
- title: Handlers of Algebraic Effects
  url: https://doi.org/10.1007/978-3-642-00590-9_7
  year: 2009
  arxiv: null
  doi: null
  card: 022-handlers-of-algebraic-effects
- title: Programming with Algebraic Effects and Handlers
  url: https://arxiv.org/abs/1203.1539
  year: 2015
  arxiv: '1203.1539'
  doi: null
  card: 123-programming-with-algebraic-effects-and-handlers
- title: 'Koka: Programming with Row Polymorphic Effect Types'
  url: https://www.microsoft.com/en-us/research/publication/koka-programming-with-row-polymorphic-effect-types/
  year: 2014
  arxiv: null
  doi: null
  card: 711-koka-programming-with-row-polymorphic-effect-types
lineage: algebraic-effects
---

# Abstracting Effect Systems for Algebraic Effect Handlers

## One-sentence takeaway

Many effect systems for algebraic effect handlers are designed to guarantee that all invoked effects are handled adequately.

## Why it matters here

Effect systems/handlers inform ano masked command effects and handlers.

## Key ideas

- Many effect systems for algebraic effect handlers are designed to guarantee that all invoked effects are handled adequately.
- However, respective researchers have developed their own effect systems that differ in how to represent the collections of effects that may happen.
- This situation results in blurring what is required for the representation and manipulation of effect collections in a safe effect system.
- In this work, we present a language ${λ_{\mathrm{EA}}}$ equipped with an effect system that abstracts the existing effect systems for algebraic effect handlers.
- The effect system of ${λ_{\mathrm{EA}}}$ is parameterized over effect algebras, which abstract the representation and manipulation of effect collections in safe effect systems.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2404.16381](https://arxiv.org/abs/2404.16381)
- URL: https://arxiv.org/abs/2404.16381
