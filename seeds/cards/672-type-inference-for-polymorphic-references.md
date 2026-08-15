---
title: "Type Inference for Polymorphic References"
authors:
  - "Mads Tofte"
year: 1990
venue: "Information and Computation"
arxiv: null
doi: "10.1016/0890-5401(90)90018-D"
source: "https://doi.org/10.1016/0890-5401(90)90018-D"
topics:
  - references
  - value-restriction
  - tofte
  - ml
  - type-inference
seed_rank: 672
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Principal Type-Schemes for Functional Programs"
    url: "https://doi.org/10.1145/582153.582176"
    year: 1982
    arxiv: null
    doi: "10.1145/582153.582176"
  - title: "A Theory of Type Polymorphism in Programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
  - title: "The Definition of Standard ML (Revised)"
    url: "https://mitpress.mit.edu/9780262631815/the-definition-of-standard-ml/"
    year: 1997
    arxiv: null
    doi: null
see:
  - "640-principal-type-schemes-for-functional-programs"
  - "629-a-theory-of-type-polymorphism-in-programming"
  - "137-the-definition-of-standard-ml-revised"
---

# Type Inference for Polymorphic References

## One-sentence takeaway

Tofte shows why naïve Hindley–Milner generalization over `ref`-creating expressions is unsound, then gives a decidable imperative type discipline that Standard ML actually used.

## Why it matters here

Any ano mutable cell, GPU buffer handle, or GRID COMMAND blackboard typed with let-polymorphism hits this theorem; the later SML'97 value restriction is the engineering simplification of this paper.

## Key ideas

- The classic counterexample: `let r = ref (fn x => x) in (r := (fn x => x+1); (!r) true)` typechecks if `r` is given type `∀α. (α→α) ref`.
- Free type variables captured in the store typing are the culprit; Tofte's inference tracks which variables may not be generalized.
- Soundness is proved against an operational semantics; principal types remain, via unification.
- The same discipline covers polymorphic exceptions. *Information and Computation* 89(1):1–34, 1990, DOI 10.1016/0890-5401(90)90018-D (the old card had `…18-C`, a 404).

## Caveats

## Links

- DOI: [10.1016/0890-5401(90)90018-D](https://doi.org/10.1016/0890-5401(90)90018-D)
