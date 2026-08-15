---
title: Abstract Refinement Types
authors:
- Niki Vazou
- Patrick M. Rondon
- Ranjit Jhala
year: 2013
venue: ESOP
arxiv: null
doi: 10.1007/978-3-642-37036-6_13
source: "https://doi.org/10.1007/978-3-642-37036-6_13"
topics:
- liquid-types
- refinement-types
- type-safety
seed_rank: 907
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Liquid Types"
    url: "https://doi.org/10.1145/1375581.1375602"
    year: 2008
    doi: "10.1145/1375581.1375602"
see:
  - "905-liquid-types"
---

# Abstract Refinement Types

## One-sentence takeaway

Quantify over refinements themselves, encode the parameters as uninterpreted propositions in the SMT logic, and keep checking decidable — reusable specs for type classes, maps, recursive data, and higher-order traversals.

## Why it matters here

Liquid Types give you concrete predicates; libraries need *predicate polymorphism*. If ano standing-rule schemas or GRID COMMAND objective predicates are going to be written once and instantiated per column, this is the refinement-level ∀.

## Key ideas

- Abstract refinements are binders over predicates on data and function types; instantiation is ordinary application at the refinement level.
- Encoding the bound predicate as an uninterpreted proposition lets the existing SMT backend decide subtyping without a new solver.
- Four patterns: parametric refinements (type-class laws), index-dependent refinements (key–value maps), recursive refinements (inductive data), inductive refinements (folds/traversals).
- Implemented in a Haskell refinement checker (LiquidHaskell line) and evaluated on correctness invariants, not just array bounds.
- ESOP 2013, LNCS 7792; the Springer chapter DOI is `10.1007/978-3-642-37036-6_13` (not `_12`, which is a different ESOP paper).

## Caveats

## Links

- DOI: [10.1007/978-3-642-37036-6_13](https://doi.org/10.1007/978-3-642-37036-6_13)
- PDF: https://goto.ucsd.edu/~rjhala/papers/abstract_refinement_types.pdf
- Authors' page: https://goto.ucsd.edu/~rjhala/papers/abstract_refinement_types.html
