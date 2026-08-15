---
title: "Yarrow: Reconciling Effects Handlers and Region-Based Memory Management"
authors:
  - "Anders Alnor Mathiasen"
  - "Amin Timany"
  - "Lars Birkedal"
year: 2026
venue: "arXiv:cs.PL"
arxiv: "2607.15876"
doi: null
source: "https://arxiv.org/abs/2607.15876"
topics:
  - typed-programming-systems
  - region-memory-capabilities
seed_rank: 173
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
  - "028-typed-memory-management-in-a-calculus-of-capabilities"
  - "142-the-type-and-effect-discipline"
  - "150-polymorphic-effect-systems"
---

# Yarrow: Reconciling Effects Handlers and Region-Based Memory Management

## One-sentence takeaway

Yarrow is an ML-like language with algebraic effects and regions; Yarrow Logic proves region safety for both one-shot and multi-shot handlers, including cases that break ordinary stack discipline.

## Why it matters here

Ano arenas plus masked command handlers are exactly this collision: a handler that aborts or multi-shoots cannot be allowed to use a region after the region has been exited. Yarrow Logic is the reasoning pattern.

## Key ideas

- Non-local handler control breaks the call/return stack that classical region management assumes; multi-shot handlers can exit a region more than once.
- Yarrow Logic is a program logic for modular reasoning about regions in the presence of both one-shot and multi-shot handlers.
- The operational semantics is OCaml-inspired but refined for regions; the logic is proved sound against it.
- Case studies (checkpointing, async, a LIFO structure) allocate only in regions and avoid the GC heap.
- Semantics, logic, and case studies are formalized in Iris on the Rocq Prover.

## Caveats

## Links

- arXiv: [2607.15876](https://arxiv.org/abs/2607.15876)
