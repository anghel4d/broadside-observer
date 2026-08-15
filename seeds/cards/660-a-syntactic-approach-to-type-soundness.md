---
title: "A Syntactic Approach to Type Soundness"
authors:
  - "Andrew K. Wright"
  - "Matthias Felleisen"
year: 1994
venue: "Information and Computation"
arxiv: null
doi: "10.1006/inco.1994.1093"
source: "https://doi.org/10.1006/inco.1994.1093"
topics:
  - type-soundness
  - progress-preservation
  - felleisen
  - wright
seed_rank: 660
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "A Structural Approach to Operational Semantics"
    url: "https://doi.org/10.1016/j.jlap.2004.05.001"
    year: 1981
    arxiv: null
    doi: "10.1016/j.jlap.2004.05.001"
  - title: "On the Expressive Power of Programming Languages"
    url: "https://doi.org/10.1016/0167-6423(91)90036-W"
    year: 1991
    arxiv: null
    doi: "10.1016/0167-6423(91)90036-W"
  - title: "The Definition of Standard ML (Revised)"
    url: "https://mitpress.mit.edu/9780262631815/the-definition-of-standard-ml/"
    year: 1997
    arxiv: null
    doi: null
see:
  - "658-a-structural-approach-to-operational-semantics"
  - "663-on-the-expressive-power-of-programming-languages"
  - "137-the-definition-of-standard-ml-revised"
---

# A Syntactic Approach to Type Soundness

## One-sentence takeaway

Wright and Felleisen prove type soundness entirely on the term syntax: subject reduction plus the untypability of faulty expressions, the method TAPL later calls progress and preservation.

## Why it matters here

This is the proof recipe Anoptic would use for an ano type checker or a GRID COMMAND DSL — reduction semantics, no domain model required, and it already scales to refs, exceptions, and `let`-polymorphism.

## Key ideas

- Subject reduction: if `Γ ⊢ e : τ` and `e → e′` then `Γ ⊢ e′ : τ`. Alone this is not safety; a typed term could still get stuck on a type error.
- Faulty expressions (the stuck type-error forms) are shown untypable; together the two facts imply a closed well-typed program never reaches an unmodeled runtime type error.
- The development is for an ML fragment with Hindley–Milner `let`, references, and control; substitution and replacement lemmas carry the preservation cases.
- *Information and Computation* 115(1):38–94, 1994, DOI 10.1006/inco.1994.1093.

## Caveats

## Links

- DOI: [10.1006/inco.1994.1093](https://doi.org/10.1006/inco.1994.1093)
