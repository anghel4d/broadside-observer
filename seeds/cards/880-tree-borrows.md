---
title: Tree Borrows
authors:
- Neven Villani
- Johannes Hostert
- Derek Dreyer
- Ralf Jung
year: 2023
venue: draft / Rust formal methods
arxiv: null
doi: null
source: "https://perso.crans.org/vanille/treebor/"
topics:
- tree-borrows
- rust
- aliasing
- type-safety
seed_rank: 880
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  []
---

# Tree Borrows

## One-sentence takeaway

Successor aliasing model to Stacked Borrows with tree-structured permissions.

## Why it matters here

Current direction for Rust's unsafe aliasing semantics and Miri.

## Key ideas

- Tree of borrows rather than stack.
- Fixing Stacked Borrows pain points.
- Still operational UB model.

## Caveats

- Living design; track Rust unsafe-code-guidelines.
- Not yet a POPL-final singular citation everywhere.

## Links

- URL: https://perso.crans.org/vanille/treebor/
