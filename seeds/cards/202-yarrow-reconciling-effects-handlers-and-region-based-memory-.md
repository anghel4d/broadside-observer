---
title: "Yarrow: Reconciling Effects Handlers and Region-Based Memory Management"
authors:
  - "Anders Alnor Mathiasen"
  - "Amin Timany"
  - "Lars Birkedal"
year: 2026
venue: "arXiv"
arxiv: "2607.15876"
doi: null
source: "https://arxiv.org/abs/2607.15876"
topics:
  - typed-programming-systems
  - region-memory-capabilities
seed_rank: 202
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
cites:
  - title: "Typed Memory Management in a Calculus of Capabilities"
    url: "https://doi.org/10.1145/292540.292564"
    year: 1999
    arxiv: null
    doi: "10.1145/292540.292564"
  - title: "The Type and Effect Discipline"
    url: "https://doi.org/10.1006/inco.1994.1037"
    year: 1994
    arxiv: null
    doi: "10.1006/inco.1994.1037"
  - title: "Polymorphic Effect Systems"
    url: "https://doi.org/10.1145/73560.73564"
    year: 1988
    arxiv: null
    doi: "10.1145/73560.73564"
see:
  - "029-typed-memory-management-in-a-calculus-of-capabilities"
  - "159-the-type-and-effect-discipline"
  - "167-polymorphic-effect-systems"
---

# Yarrow: Reconciling Effects Handlers and Region-Based Memory Management

## One-sentence takeaway

We present a new ML-like programming language Yarrow with algebraic effects and region-based memory management.

## Why it matters here

Effect systems/handlers inform ano masked command effects and handlers; Region/capability/ownership typing aligns with ano arenas and Sky purity.

## Key ideas

- We present a new ML-like programming language Yarrow with algebraic effects and region-based memory management.
- Reconciling these programming language features into one language is challenging: the non-local control flow of algebraic effects break the stack discipline of function calls and returns that region-based memory management relies on, and multi-shot effect handlers break the invariant that regions can be exited at most once.
- We present a program logic, called Yarrow Logic (YL), that supports safe and modular reasoning about regions in the presence of one-shot and multi-shot effect handlers.
- We prove the logic sound w.r.t.
- the operational semantics of Yarrow which is inspired by the runtime of OCaml but refined for regions.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2607.15876](https://arxiv.org/abs/2607.15876)
- URL: https://arxiv.org/abs/2607.15876
