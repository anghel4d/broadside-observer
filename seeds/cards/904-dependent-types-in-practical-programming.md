---
title: Dependent Types in Practical Programming
authors:
- Hongwei Xi
- Frank Pfenning
year: 1999
venue: POPL
arxiv: null
doi: 10.1145/292540.292560
source: "https://doi.org/10.1145/292540.292560"
topics:
- dependent-ml
- dependent-types
- type-safety
seed_rank: 904
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Refinement Types for ML"
    url: "https://doi.org/10.1145/113445.113468"
    year: 1991
    doi: "10.1145/113445.113468"
see:
  - "903-refinement-types-for-ml"
---

# Dependent Types in Practical Programming

## One-sentence takeaway

Dependent ML indexes datatypes by a separate constraint domain C (prototype: linear integer inequalities), so `append` has type `{m,n:nat} 'a list(m) * 'a list(n) -> 'a list(m+n)` and checking reduces to constraint solving.

## Why it matters here

This is the pragmatic dependent-type design Anoptic can actually steal: indices are pure and drawn from a solver, values meet indices via singleton types (`int(n)`), and the rest of ML (effects, exceptions, refs) stays intact. Ancestor of ATS and of every “array length in the type” story.

## Key ideas

- DML(C) is a language schema parameterized by constraint domain C; index objects never evaluate and never select matches.
- Datatype constructors carry Π-quantified index types (`cons : {n:nat} 'a * 'a list(n) -> 'a list(n+1)`); elaboration from lightly annotated ML to an explicit internal language generates constraints.
- Existential dependent types are the FFI to unindexed ML and to unknown lengths; they are essential in almost every realistic example.
- Conservative over ML: well-typed ML stays well-typed if you ignore the indices; pattern matches succeed or fail independently of index values.
- Implemented for integer linear inequalities (Fourier elimination): array-bound elimination, red/black trees, KMP, type preservation for a CBV λ-evaluator.

## Caveats

## Links

- DOI: [10.1145/292540.292560](https://doi.org/10.1145/292540.292560)
- PDF: https://www.cs.cmu.edu/~fp/papers/popl99.pdf
