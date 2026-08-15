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
doi: 10.1145/3371109
source: "https://doi.org/10.1145/3371109"
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
  - title: "RustBelt: Securing the Foundations of the Rust Programming Language"
    url: "https://doi.org/10.1145/3158154"
    year: 2018
    arxiv: null
    doi: "10.1145/3158154"
see:
  - "876-rustbelt-securing-the-foundations-of-the-rust-programming-la"
---

# Stacked Borrows: An Aliasing Model for Rust

## One-sentence takeaway

Stacked Borrows is an operational per-location borrow stack that defines when raw-pointer and `unsafe` Rust has undefined behavior, implemented in Miri and mechanized in Coq.

## Why it matters here

Engine `unsafe` (GPU buffers, ECS sparse sets, custom allocators) needs a checkable aliasing discipline. Stacked Borrows is the first such model that actually ran against libstd; Tree Borrows later relaxes it.

## Key ideas

- Each location holds a stack of tagged permissions. Creating a borrow pushes; using a pointer is legal only if its tag has the right item; some accesses pop above that item.
- Retagging on reference passing is what lets the compiler assume `&mut` exclusivity (e.g. `*x = 42; *y = 13; *x` must still be 42).
- No shared-memory writes for the model's own bookkeeping in compiled code — it is a spec + interpreter, not a runtime.
- PACMPL 4(POPL) Article 41. The card previously carried DOI `10.1145/3375642`, which is a different paper; correct DOI is 10.1145/3371109.
- Not the final Rust aliasing spec. Tree Borrows (PLDI 2025) is the successor that rejects fewer real crates.

## Caveats

## Links

- DOI: [10.1145/3371109](https://doi.org/10.1145/3371109)
- Project: https://plv.mpi-sws.org/rustbelt/stacked-borrows/
- PDF: https://plv.mpi-sws.org/rustbelt/stacked-borrows/paper.pdf
