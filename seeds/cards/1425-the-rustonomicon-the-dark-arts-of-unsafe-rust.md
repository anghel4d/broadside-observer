---
title: "The Rustonomicon: The Dark Arts of Unsafe Rust"
authors:
  - "Steve Klabnik"
  - "Carol Nichols"
  - "Rust Community"
year: 2018
venue: "Rust documentation"
arxiv: null
doi: null
source: "https://doc.rust-lang.org/nomicon/"
topics:
  - rust
  - unsafe
  - type-safety
seed_rank: 1425
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
  - title: "Stacked Borrows: An Aliasing Model for Rust"
    url: "https://doi.org/10.1145/3371109"
    year: 2020
    arxiv: null
    doi: "10.1145/3371109"
    card: "1346-stacked-borrows-an-aliasing-model-for-rust"
---

# The Rustonomicon: The Dark Arts of Unsafe Rust

## One-sentence takeaway

The Nomicon teaches invariants unsafe Rust code must uphold to preserve type safety.

## Why it matters here

Practitioner manual pairing with RustBelt/Stacked Borrows theory.

## Key ideas

- Unsafe obligations.
- Ownership invariants.
- UB catalog for authors.

## Caveats

- Seed card from type-safety shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI before citation; some industrial docs lack stable DOIs.

## Links

- URL: https://doc.rust-lang.org/nomicon/
