---
title: "Stacked Borrows: An Aliasing Model for Rust"
authors:
  - "Ralf Jung"
  - "Hoang-Hai Dang"
  - "Jeehoon Kang"
  - "Derek Dreyer"
year: 2020
venue: "POPL"
arxiv: null
doi: "10.1145/3371109"
source: "https://doi.org/10.1145/3371109"
topics:
  - stacked-borrows
  - rust
  - type-safety
seed_rank: 1346
seed_batch: "to1000-types-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: type-safety
cites:
  - title: "RustBelt: Securing the Foundations of the Rust Programming Language"
    url: "https://doi.org/10.1145/3158154"
    year: 2018
    arxiv: "1707.04222"
    doi: "10.1145/3158154"
    card: "1344-rustbelt-securing-the-foundations-of-the-rust-programming-la"
  - title: "Oxide: The Essence of Memory Safety in Rust"
    url: "https://arxiv.org/abs/1903.00982"
    year: 2019
    arxiv: "1903.00982"
    doi: null
    card: "1345-oxide-the-essence-of-memory-safety-in-rust"
  - title: "Tree Borrows"
    url: "https://arxiv.org/abs/2503.07803"
    year: 2023
    arxiv: "2503.07803"
    doi: null
    card: "1347-tree-borrows"
---

# Stacked Borrows: An Aliasing Model for Rust

## One-sentence takeaway

Stacked Borrows defines a precise aliasing/provenance model for Rust unsafe code.

## Why it matters here

Operational rules Miri uses to catch undefined aliasing—critical for unsafe Rust.

## Key ideas

- Borrow stacks as provenance.
- UB for aliasing violations.
- Tooling via Miri.

## Caveats

- Seed card from type-safety shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI before citation; some industrial docs lack stable DOIs.

## Links

- DOI: [10.1145/3371109](https://doi.org/10.1145/3371109)
- URL: https://doi.org/10.1145/3371109
