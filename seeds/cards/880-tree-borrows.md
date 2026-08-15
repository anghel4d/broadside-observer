---
title: Tree Borrows
authors:
- Neven Villani
- Johannes Hostert
- Derek Dreyer
- Ralf Jung
year: 2025
venue: PLDI
arxiv: null
doi: 10.1145/3735592
source: "https://doi.org/10.1145/3735592"
topics:
- tree-borrows
- rust
- aliasing
- type-safety
seed_rank: 880
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Stacked Borrows: An Aliasing Model for Rust"
    url: "https://doi.org/10.1145/3371109"
    year: 2020
    arxiv: null
    doi: "10.1145/3371109"
see:
  - "879-stacked-borrows-an-aliasing-model-for-rust"
---

# Tree Borrows

## One-sentence takeaway

Tree Borrows replaces Stacked Borrows' per-location stack with a tree of permissions, rejecting 54% fewer tests on ~30k crates while still justifying the aliasing-based optimizations rustc wants, including read–read reordering.

## Why it matters here

Current direction for Miri and for any Anoptic `unsafe` that Stacked Borrows falsely flagged (self-referential patterns, certain raw-pointer dances). Cite this, not the 2023 draft page, as the archival model.

## Key ideas

- Permissions form a tree so sibling borrows can coexist when a stack would have popped one of them; this matches more real `unsafe` than a total stack order.
- Evaluated on a large crate corpus: substantially more permissive, still catches the intended UB, Distinguished Paper at PLDI 2025.
- Still an operational UB model aimed at Miri, not a type system and not (yet) a formally blessed rustc spec.
- PACMPL 9(PLDI) Article 188, DOI 10.1145/3735592. No arXiv posting located.
- Living design continues on the Rust unsafe-code-guidelines track; pin the PLDI version when citing algorithms.

## Caveats

## Links

- DOI: [10.1145/3735592](https://doi.org/10.1145/3735592)
- Author PDF: https://jhostert.de/assets/pdf/papers/villani2024trees.pdf
- ETH page: https://plf.inf.ethz.ch/research/pldi25-tree-borrows.html
