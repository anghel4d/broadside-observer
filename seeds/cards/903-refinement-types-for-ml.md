---
title: Refinement Types for ML
authors:
- Tim Freeman
- Frank Pfenning
year: 1991
venue: PLDI
arxiv: null
doi: 10.1145/113445.113468
source: "https://doi.org/10.1145/113445.113468"
topics:
- refinement-types
- ml
- type-safety
seed_rank: 903
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  []
---

# Refinement Types for ML

## One-sentence takeaway

Programmer-declared recursive subtypes of ML datatypes form finite lattices; inference is abstract interpretation over those lattices, so `lastcons nil` is a compile-time error and exhaustive-match warnings go away.

## Why it matters here

This is the ancestor of Liquid Types, Dependent ML, and every “finer than ML, still inferable” checker. If ano ever wants named distinctions (nonempty columns, standard-form bitstrings, head-normal terms) without full Π-types, the move is still: declare a regular-tree subtype, infer over the lattice.

## Key ideas

- `rectype` declarations name recursively defined subtypes of an existing `datatype` (e.g. `α singleton = cons(α, nil)`); they do not extend the term language.
- Only programs already well-typed in ML get refinements; constructors acquire intersection types that record how they act on each lattice point.
- Intersection is allowed only among refinements of one ML type, which keeps inference decidable and plays with let-polymorphism.
- Unions arise from `case`/`if`; the induced lattices are regular tree sets, so membership and constructor behavior are computable.
- Examples: singleton lists, binary naturals in standard form (no leading zeros), head-normal λ-terms — invariants that used to live in comments.

## Caveats

## Links

- DOI: [10.1145/113445.113468](https://doi.org/10.1145/113445.113468)
- PDF: https://www.cs.cmu.edu/~fp/papers/pldi91.pdf
