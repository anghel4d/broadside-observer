---
title: "RustBelt: Securing the Foundations of the Rust Programming Language"
authors:
- Ralf Jung
- Jacques-Henri Jourdan
- Robbert Krebbers
- Derek Dreyer
year: 2018
venue: POPL
arxiv: null
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
  - title: "Iris from the Ground Up: A Modular Foundation for Higher-Order Concurrent Separation Logic"
    url: "https://doi.org/10.1017/S0956796818000151"
    year: 2018
    arxiv: null
    doi: "10.1017/S0956796818000151"
see:
  - "877-iris-higher-order-concurrent-separation-logic"
---

# RustBelt: Securing the Foundations of the Rust Programming Language

## One-sentence takeaway

RustBelt is a Coq/Iris proof that a realistic λRust core — ownership, borrowing, lifetimes, and several `unsafe` standard-library abstractions — is memory-safe, using semantic type soundness rather than a purely syntactic theorem.

## Why it matters here

Ano and engine-side Rust (or C that wants Rust's contract) rest on "safe Rust is safe, and these unsafe libs restore the invariant." RustBelt is the machine-checked statement of that contract, and it found a real stdlib soundness bug.

## Key ideas

- λRust is a continuation-passing MIR-like IR. Types denote Iris predicates; a library is safe if its public API preserves those predicates even when the body uses `unsafe`.
- Verified abstractions include `&mut`, `Rc`/`Arc`, interior mutability (`Cell`, `RefCell`), locks, and pieces of the standard library.
- Semantic soundness is what lets `unsafe` exist at all: the proof obligation is on the library author, not on every caller.
- No official arXiv id — the commonly pasted `1710.08840` is a different paper. Cite PACMPL 2(POPL) Article 66, DOI 10.1145/3158154.
- Covers a core, not rustc. Later Stacked/Tree Borrows handle the operational aliasing model this logic assumes.

## Caveats

## Links

- DOI: [10.1145/3158154](https://doi.org/10.1145/3158154)
- Author PDF: https://people.mpi-sws.org/~dreyer/papers/rustbelt/paper.pdf
