---
title: Guarded Recursive Datatype Constructors
authors:
- Hongwei Xi
- Chiyan Chen
- Gang Chen
year: 2003
venue: POPL
arxiv: null
doi: 10.1145/604131.604150
source: "https://doi.org/10.1145/604131.604150"
topics:
- gadts
- type-safety
seed_rank: 915
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
see:
  - "904-dependent-types-in-practical-programming"
---

# Guarded Recursive Datatype Constructors

## One-sentence takeaway

A constructor’s result type may instantiate the datatype’s parameters to structured types (`Lit : Int -> Term Int`, `Pair : Term a -> Term b -> Term (a,b)`), giving GADTs their equality witnesses without a full Π-type language.

## Why it matters here

This is the foundational GADT paper the later Haskell inference work cites. Typed ASTs, typed HOAS, and staged computation — all things an ano IR might want — are the original applications, alongside run-time type representations.

## Key ideas

- Guarded recursive (g.r.) datatype constructors generalize ML/Haskell recursive datatypes: the result of a constructor is still an application of the type constructor, but the arguments are arbitrary types.
- Formalized with fixed points over higher-kinded type constructors; value constructors are defined from fold/unfold and injections.
- Internal language λ²,Gμ is explicitly typed and straightforward to check; external ML²,Gμ elaborates a lightly annotated ML fragment into it.
- Worked examples: a `TY` representation of types for `val2string`, and a `HOAS` type constructor whose `eval` is typed `∀α. α HOAS -> α`.
- Combined with DML-style index types, the same mechanism types objects, addressing gaps in then-current OO type systems.

## Caveats

## Links

- DOI: [10.1145/604131.604150](https://doi.org/10.1145/604131.604150)
- PDF: https://hwxi.github.io/PUBLICATION/MYDATA/GRDT-popl03.pdf
