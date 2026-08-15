---
title: Liquid Types
authors:
- Patrick M. Rondon
- Ming Kawaguchi
- Ranjit Jhala
year: 2008
venue: PLDI
arxiv: null
doi: 10.1145/1375581.1375602
source: "https://doi.org/10.1145/1375581.1375602"
topics:
- liquid-types
- refinement-types
- type-safety
seed_rank: 905
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Dependent Types in Practical Programming"
    url: "https://doi.org/10.1145/292540.292560"
    year: 1999
    doi: "10.1145/292540.292560"
  - title: "Refinement Types for ML"
    url: "https://doi.org/10.1145/113445.113468"
    year: 1991
    doi: "10.1145/113445.113468"
see:
  - "904-dependent-types-in-practical-programming"
  - "903-refinement-types-for-ml"
---

# Liquid Types

## One-sentence takeaway

Liquid Types combine Hindley–Milner inference with predicate abstraction over a qualifier set Q, so dependent refinements like `{ν:int | 0 ≤ ν ∧ ν < len a}` are inferred instead of written.

## Why it matters here

This is the automation layer on top of DML: Anoptic does not want 31% of a file to be index annotations. If ano ever checks array/column bounds or standing-rule preconditions, the recipe is HM templates plus SMT-backed qualifier fixpoint — not a full proof assistant.

## Key ideas

- A liquid type is a dependent type whose refinements are conjunctions of logical qualifiers from a programmer- or library-supplied set Q (plus a `⋆` placeholder instantiated to locals).
- Three-step inference: HM shapes → templates with unknown κ refinements → syntax-directed subtype constraints solved by predicate-abstraction fixpoint.
- Subtyping of dependent types reduces to implication checks over base refinements, discharged in a decidable logic (QF arithmetic).
- Path sensitivity comes from putting branch guards in the environment; recursion and higher-order functions work because templates are shared and function subtyping is contravariant on domains.
- DSOLVE on the DML array-safety suite cuts manual annotation from 31% of program text (17% of lines) to under 1%.

## Caveats

## Links

- DOI: [10.1145/1375581.1375602](https://doi.org/10.1145/1375581.1375602)
- PDF: https://goto.ucsd.edu/~rjhala/liquid/liquid_types.pdf
