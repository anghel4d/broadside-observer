---
title: Abstracting Gradual Typing
authors:
- Ronald Garcia
- Alison M. Clark
- Éric Tanter
year: 2016
venue: POPL
arxiv: null
doi: 10.1145/2837614.2837670
source: "https://doi.org/10.1145/2837614.2837670"
topics:
- gradual-typing
- abstract-interpretation
- type-safety
seed_rank: 891
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Refined Criteria for Gradual Typing"
    url: "https://doi.org/10.4230/LIPIcs.SNAPL.2015.274"
    year: 2015
    arxiv: null
    doi: "10.4230/LIPIcs.SNAPL.2015.274"
  - title: "Gradual Typing for Functional Languages"
    url: "https://scheme2006.cs.uchicago.edu/13-siek.pdf"
    year: 2006
    arxiv: null
    doi: null
see:
  - "890-refined-criteria-for-gradual-typing"
  - "886-gradual-typing-for-functional-languages"
---

# Abstracting Gradual Typing

## One-sentence takeaway

AGT derives a gradual type system from a static one by abstract interpretation: Galois connections between static and gradual type spaces induce consistency, evidence, and the cast calculus.

## Why it matters here

Recipe for gradualizing ownership, effects, or refinements systematically — the way you would gradualize an Anoptic capability/units type system instead of inventing casts by hand.

## Key ideas

- Start from a static type system; lift types through a Galois connection so `?` is the abstraction of "I don't know."
- Consistency and precision fall out of the abstraction; you do not separately design a consistency relation.
- Evidence (proof-like runtime witnesses) is generated from the same abstraction, giving a cast calculus that satisfies the gradual guarantee.
- Reusable beyond STLC: later papers apply AGT to effects, security labels, and ownership.
- POPL 2016, DOI 10.1145/2837614.2837670.

## Caveats

## Links

- DOI: [10.1145/2837614.2837670](https://doi.org/10.1145/2837614.2837670)
