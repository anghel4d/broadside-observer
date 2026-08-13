---
title: "Stacked Borrows: An Aliasing Model for Rust"
authors:
- Ralf Jung
- Hoang-Hai Dang
- Jeehoon Kang
- Derek Dreyer
year: 2020
venue: POPL
arxiv: null
doi: 10.1145/3375642
source: "https://doi.org/10.1145/3375642"
topics:
- stacked-borrows
- rust
- aliasing
- miri
- type-safety
seed_rank: 879
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  []
---

# Stacked Borrows: An Aliasing Model for Rust

## One-sentence takeaway

Operational aliasing model defining when raw-pointer/unsafe Rust has undefined behavior.

## Why it matters here

Makes Rust's aliasing discipline checkable (Miri) — critical for unsafe correctness.

## Key ideas

- Borrow stacks per location.
- Retagging on references.
- UB definition for unsafe code.

## Caveats

- Superseded in parts by Tree Borrows.
- Not identical to LLVM noalias forever.

## Links

- DOI: [10.1145/3375642](https://doi.org/10.1145/3375642)
- URL: https://doi.org/10.1145/3375642
