---
title: "RustBelt: Securing the Foundations of the Rust Programming Language"
authors:
  - "Ralf Jung"
  - "Jacques-Henri Jourdan"
  - "Robbert Krebbers"
  - "Derek Dreyer"
year: 2018
venue: "POPL"
arxiv: "1707.04222"
doi: "10.1145/3158154"
source: "https://doi.org/10.1145/3158154"
topics:
  - rustbelt
  - rust
  - type-safety
seed_rank: 1344
seed_batch: "to1000-types-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: type-safety
cites:
  - title: "Oxide: The Essence of Memory Safety in Rust"
    url: "https://arxiv.org/abs/1903.00982"
    year: 2019
    arxiv: "1903.00982"
    doi: null
    card: "1345-oxide-the-essence-of-memory-safety-in-rust"
  - title: "Stacked Borrows: An Aliasing Model for Rust"
    url: "https://doi.org/10.1145/3371109"
    year: 2020
    arxiv: null
    doi: "10.1145/3371109"
    card: "1346-stacked-borrows-an-aliasing-model-for-rust"
  - title: "Tree Borrows"
    url: "https://arxiv.org/abs/2503.07803"
    year: 2023
    arxiv: "2503.07803"
    doi: null
    card: "1347-tree-borrows"
---

# RustBelt: Securing the Foundations of the Rust Programming Language

## One-sentence takeaway

RustBelt proves safety for a realistic Rust type system using Iris separation logic.

## Why it matters here

Landmark formalization: unsafe libraries can be verified without breaking Rust's safety claims.

## Key ideas

- λRust semantic model.
- Lifetime for unsafe abstractions.
- Semantic type soundness via Iris.

## Caveats

- Seed card from type-safety shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI before citation; some industrial docs lack stable DOIs.

## Links

- arXiv: [1707.04222](https://arxiv.org/abs/1707.04222)
- DOI: [10.1145/3158154](https://doi.org/10.1145/3158154)
- URL: https://doi.org/10.1145/3158154
