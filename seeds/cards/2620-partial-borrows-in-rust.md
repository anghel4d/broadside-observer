---
title: "Partial Borrows in Rust"
authors:
  - "Sasha Pak"
  - "Richard Willie"
  - "Umang Mathur"
  - "Fabian Muehlboeck"
  - "Alex Potanin"
year: 2026
venue: "arXiv preprint (cs.PL)"
arxiv: "2611.20576"
doi: null
source: "https://arxiv.org/abs/2611.20576"
version_reviewed: "v1"
topics:
  - "rust"
  - "borrow-checking"
  - "view-types"
  - "ownership"
  - "mechanized-semantics"
seed_rank: 2620
seed_batch: "craft-2026-11-17"
reviewed: "2026-11-17"
pool: "languages"
relevance_score: 7
see:
  - "2535-nothing-is-shared-until-you-synchronise-reinterpreting-java-for-data-race-freedom"
cites:
  - title: "Partial Borrows in Rust"
    url: "https://arxiv.org/abs/2611.20576"
    year: 2026
    arxiv: "2611.20576"
    doi: null
---

# Partial Borrows in Rust

## One-sentence takeaway

View types refine Rust references with the set of fields they may touch, so a method can borrow only the fields it uses; the authors mechanize Aeneas in Rocq (fixing gaps in its original proofs), prove the extended borrow checker sound, and implement view types in rustc at no runtime cost.

## Why it matters here

Field-level exclusive access is the same problem an ECS scheduler solves with component read/write sets: two systems conflict only if their field sets overlap. View types put that rule in the type system. It is a precise reference for how ano could type system access to components, and for the borrow-splitting pain any Rust tooling around Anoptic will hit.

## Key ideas

- **Problem.** `&mut self` borrows the whole struct, so calling a method conflicts with a live borrow of a field it never touches.
- **View types.** A backward-compatible refinement of reference types naming the fields a reference may access.
- **Foundation.** The first fully mechanized foundation for Aeneas in Rocq; gaps in the original semantics and proofs are found and fixed.
- **Soundness and implementation.** Partial borrows are formalized and the extended borrow checking proved sound; implemented in rustc and the Aeneas interpreter; conflicts across method boundaries resolved at no runtime cost.

## Caveats

Abstract-level read of the v1 preprint (16 Nov 2026). This is a research prototype in rustc, not an accepted Rust RFC. The evaluation size is not given in the abstract.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.20576
- PDF: https://arxiv.org/pdf/2611.20576
