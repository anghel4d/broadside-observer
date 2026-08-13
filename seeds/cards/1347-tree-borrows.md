---
title: "Tree Borrows"
authors:
  - "Neven Villani"
  - "Johannes Hostert"
  - "Derek Dreyer"
  - "Ralf Jung"
year: 2023
venue: "arXiv"
arxiv: "2503.07803"
doi: null
source: "https://arxiv.org/abs/2503.07803"
topics:
  - tree-borrows
  - rust
  - type-safety
seed_rank: 1347
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

# Tree Borrows

## One-sentence takeaway

Tree Borrows revises Stacked Borrows with tree provenance, fixing practical gaps.

## Why it matters here

Successor aliasing model for Rust unsafe—what Miri and the unsafe guidelines are moving toward.

## Key ideas

- Tree-structured provenance.
- Fixes Stacked Borrows pain points.
- Retains dynamic checking path.

## Caveats

- Seed card from type-safety shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI before citation; some industrial docs lack stable DOIs.

## Links

- arXiv: [2503.07803](https://arxiv.org/abs/2503.07803)
- URL: https://arxiv.org/abs/2503.07803
