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
