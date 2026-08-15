---
title: "Oxide: The Essence of Rust"
authors:
- Aaron Weiss
- Olek Gierczak
- Daniel Patterson
- Amal Ahmed
year: 2019
venue: arXiv cs.PL
arxiv: "1903.00982"
doi: null
source: "https://arxiv.org/abs/1903.00982"
topics:
- oxide
- rust
- ownership
- type-systems
- type-safety
seed_rank: 878
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "RustBelt: Securing the Foundations of the Rust Programming Language"
    url: "https://doi.org/10.1145/3158154"
    year: 2018
    arxiv: null
    doi: "10.1145/3158154"
see:
  - "876-rustbelt-securing-the-foundations-of-the-rust-programming-la"
---

# Oxide: The Essence of Rust

## One-sentence takeaway

Oxide is a source-level calculus for Rust's borrow checker: lifetimes approximate reference provenance, borrowing is a substructural judgment, and type safety is a syntactic progress/preservation proof including non-lexical lifetimes.

## Why it matters here

RustBelt is semantic and unsafe-library-shaped; Oxide is the "what is the safe type system even saying" companion. Useful if Anoptic ever wants a readable ownership calculus rather than an Iris model.

## Key ideas

- Fully annotated, close-to-surface language. Ownership qualifiers `uniq` / `shrd` encode the unique-xor-shared rule.
- Lifetimes are not just lexical regions: they approximate the set of places a reference may have come from, computed by the typing judgment.
- First syntactic type-safety proof for borrow checking (progress + preservation); dynamic ownership instrumentation is shown erasable.
- Models NLL: a borrow can end when the reference is no longer used, not at the end of a block.
- Deliberately not rustc: no inference, no unsafe, no layout. Positioned as a research foundation next to Polonius and RustBelt.

## Caveats

## Links

- arXiv: [1903.00982](https://arxiv.org/abs/1903.00982)
- PDF: https://arxiv.org/pdf/1903.00982
