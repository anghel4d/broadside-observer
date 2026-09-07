---
title: "Yarrow: Reconciling Effect Handlers and Region-Based Memory Management"
authors: ["Anders Alnor Mathiasen", "Amin Timany", "Lars Birkedal"]
year: 2026
venue: "arXiv (cs.PL)"
arxiv: "2607.15876"
doi: null
source: "https://arxiv.org/abs/2607.15876"
topics: [region-memory-capabilities, typed-programming-systems]
seed_rank: 1621
seed_batch: "craft-2026-09-07"
reviewed: "2026-09-07"
pool: "languages"
relevance_score: 10
lineage: region-memory
cites:
  - title: "Region-Based Memory Management"
    url: "https://doi.org/10.1006/inco.1996.2613"
    year: 1997
    arxiv: null
    doi: "10.1006/inco.1996.2613"
  - title: "Implementation of the Typed Call-by-Value λ-Calculus using a Stack of Regions"
    url: "https://doi.org/10.1145/174675.177855"
    year: 1994
    arxiv: null
    doi: "10.1145/174675.177855"
  - title: "Handlers of Algebraic Effects"
    url: "https://doi.org/10.1007/978-3-642-00590-9_7"
    year: 2009
    arxiv: null
    doi: "10.1007/978-3-642-00590-9_7"
  - title: "Retrofitting Effect Handlers onto OCaml"
    url: "https://arxiv.org/abs/2104.00250"
    year: 2021
    arxiv: "2104.00250"
    doi: "10.1145/3453483.3454039"
see:
  - "030-region-based-memory-management"
  - "133-region-based-memory-management-in-cyclone"
  - "1008-linear-regions-are-all-you-need"
  - "1138-language-support-for-regions"
---

# Yarrow: Reconciling Effect Handlers and Region-Based Memory Management

## One-sentence takeaway

Yarrow is an ML-like language whose Iris/Rocq program logic (YL) makes region allocation sound under one-shot *and* multi-shot effect handlers, whose delimited continuations otherwise smash Tofte–Talpin’s stack-of-regions discipline.

## Why it matters here

Anoptic arenas want region lifetimes; ano effects want handlers. Those two invariants fight: a `do` captures a continuation that can jump across nested regions, and a multi-shot resume exits a region more than once. Yarrow is the reconciliation — steal the one-shot-captures-region / multi-shot-revokes-region contract for engine arenas plus ano effects, not the Rocq mechanization.

## Key ideas

- **The clash.** Region memory assumes well-bracketed call/return and “exit at most once.” Algebraic effects replace that with fiber-delimited continuations (OCaml-style stack segments). A one-shot handler may restore the captured region on resume; a multi-shot handler frees it on the first resume, so later resumes dangle.
- **Operational model.** Yarrow’s semantics is OCaml-fiber-inspired, refined so regions sit on fibers rather than a single call stack. Local `ref`s go in the current region; global `ref`s stay on the GC heap. OxCaml-style locality is the informal ancestor; OxCaml does not support multi-shot, and had no published handler+region formalization.
- **Yarrow Logic.** Iris separation logic split in two: (1) a high-level fiber/region configuration that tracks revocation, and (2) per-location stack-points-to for modular reasoning. Effect protocols (after de Vilhena–Pottier) now carry that configuration, so the handler/performer contract includes which regions the continuation captures.
- **Case studies, all region-allocated.** Checkpointing, asynchronous computation, and a LIFO structure are proved in YL with *no* GC heap refs — the point of the combination. Mechanized in Iris on Rocq, including the operational semantics.

## Caveats

A verified ML-like calculus, not a C arena API and not a drop-in for Anoptic’s bump/stack. Multi-shot is the hard case and is still expensive (continuation copy), same as OCaml. Do not remint Tofte–Talpin 030/032, Cyclone 133, linear regions 1008, Gay–Aiken 1138, or Plotkin–Pretnar / OCaml handlers 021/478.

## Links

- arXiv abs: https://arxiv.org/abs/2607.15876
- PDF: https://arxiv.org/pdf/2607.15876
