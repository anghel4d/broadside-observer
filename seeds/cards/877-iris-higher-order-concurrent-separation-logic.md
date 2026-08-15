---
title: "Iris: Higher-Order Concurrent Separation Logic"
authors:
- Ralf Jung
- Robbert Krebbers
- Jacques-Henri Jourdan
- Aleš Bizjak
- Lars Birkedal
- Derek Dreyer
year: 2018
venue: Journal of Functional Programming
arxiv: null
doi: 10.1017/S0956796818000151
source: "https://doi.org/10.1017/S0956796818000151"
topics:
- iris
- separation-logic
- concurrency
- type-safety
seed_rank: 877
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites: []
---

# Iris: Higher-Order Concurrent Separation Logic

## One-sentence takeaway

Iris is a Coq framework for higher-order concurrent separation logic: ghost state, invariants, and fancy updates are user-defined, so one logic hosts RustBelt, weak-memory proofs, and language soundness theorems.

## Why it matters here

This is the proof engine behind modern "this unsafe block / this lock-free queue / this type system is actually safe" results. If Anoptic ever machine-checks an engine invariant, Iris is the default metalogic.

## Key ideas

- Higher-order ghost state (cameras / resource algebras) lets a proof invent the ghost resources a library needs, rather than baking them into the logic.
- Invariants and fancy updates (`|=▷=`) model impredicative shared-state reasoning and later-modality step-indexing.
- The 2018 JFP paper ("Iris from the Ground Up") is the archival tutorial/foundation; earlier POPL/ICFP papers introduced pieces of the stack.
- Not a programming-language type system — a logic in which you *define* type systems and library specs.
- The card's previous ACM DOI `10.1145/3211960` is unrelated (WearSys '18). Correct DOI is 10.1017/S0956796818000151.

## Caveats

## Links

- DOI: [10.1017/S0956796818000151](https://doi.org/10.1017/S0956796818000151)
- Project: https://iris-project.org
