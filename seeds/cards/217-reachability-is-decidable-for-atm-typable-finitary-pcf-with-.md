---
title: "Reachability is Decidable for ATM-Typable Finitary PCF with Effect Handlers"
authors:
  - "Ryunosuke Endo"
  - "Tachio Terauchi"
year: 2025
venue: "arXiv"
arxiv: "2508.12572"
doi: null
source: "https://arxiv.org/abs/2508.12572"
topics:
  - typed-programming-systems
seed_rank: 217
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
---

# Reachability is Decidable for ATM-Typable Finitary PCF with Effect Handlers

## One-sentence takeaway

It is well known that the reachability problem for simply-typed lambda calculus with recursive definitions and finite base-type values (finitary PCF) is decidable.

## Why it matters here

Effect systems/handlers inform ano masked command effects and handlers.

## Key ideas

- It is well known that the reachability problem for simply-typed lambda calculus with recursive definitions and finite base-type values (finitary PCF) is decidable.
- A recent paper by Dal Lago and Ghyselen has shown that the same problem becomes undecidable when the language is extended with algebraic effect and handlers (effect handlers).
- We show that, perhaps surprisingly, the problem becomes decidable even with effect handlers when the type system is extended with answer type modification (ATM).
- A natural intuition may find the result contradictory, because one would expect allowing ATM makes more programs typable.
- Indeed, this intuition is correct in that there are programs that are typable with ATM but not without it, as we shall show in the paper.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2508.12572](https://arxiv.org/abs/2508.12572)
- URL: https://arxiv.org/abs/2508.12572
