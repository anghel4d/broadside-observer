---
title: "RustBelt: Securing the Foundations of the Rust Programming Language"
authors:
- Ralf Jung
- Jacques-Henri Jourdan
- Robbert Krebbers
- Derek Dreyer
year: 2018
venue: POPL
arxiv: 1710.08840
doi: 10.1145/3158154
source: "https://doi.org/10.1145/3158154"
topics:
- rustbelt
- rust
- separation-logic
- iris
- type-safety
seed_rank: 876
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  []
---

# RustBelt: Securing the Foundations of the Rust Programming Language

## One-sentence takeaway

Iris-based semantic model proving type safety for Rust's ownership type system and some unsafe libs.

## Why it matters here

The landmark formal foundation for Rust's claim that safe Rust is memory-safe.

## Key ideas

- Semantic type soundness via Iris.
- Library proofs for unsafe interior.
- Lifetime types as a logic of resources.

## Caveats

- Covers a core of Rust, not the full evolving language.
- Unsafe code still needs per-library proof.

## Links

- DOI: [10.1145/3158154](https://doi.org/10.1145/3158154)
- arXiv: [1710.08840](https://arxiv.org/abs/1710.08840)
- URL: https://doi.org/10.1145/3158154
