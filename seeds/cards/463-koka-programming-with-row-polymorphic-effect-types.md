---
title: "Koka: Programming with Row Polymorphic Effect Types"
authors:
  - "Daan Leijen"
year: 2014
venue: "MSFP / EPTCS"
arxiv: "1406.2061"
doi: "10.4204/EPTCS.153.8"
source: "https://arxiv.org/abs/1406.2061"
topics:
  - effects
  - handlers
seed_rank: 463
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
lineage: algebraic-effects
cites:
  - title: "Handlers of Algebraic Effects"
    url: "https://doi.org/10.1007/978-3-642-00590-9_7"
    year: 2009
    doi: "10.1007/978-3-642-00590-9_7"
  - title: "Notions of Computation and Monads"
    url: "https://doi.org/10.1016/0890-5401(91)90052-4"
    year: 1991
    doi: "10.1016/0890-5401(91)90052-4"
see:
  - "021-handlers-of-algebraic-effects"
  - "035-notions-of-computation-and-monads"
---

# Koka: Programming with Row Polymorphic Effect Types

## One-sentence takeaway

Koka infers Hindley–Milner types whose row-polymorphic effect annotations make a function's possible side effects part of its signature, using duplicate labels so effects compose without monadic plumbing.

## Why it matters here

Living language successor of Plotkin/Pretnar handlers: Anoptic PL experiments can read effect rows off inferred types instead of encoding every effect as a monad transformer.

## Key ideas

- A type such as `int -> <exn,console> string` states that the function may throw and do console I/O; absence of `exn` is a semantic guarantee, not a comment.
- Row polymorphism with duplicate labels lets callers abstract over extra unknown effects while inference stays HM-style.
- Stateful computations can be encapsulated like Haskell `runST`, and the state effect combines with let-polymorphism without imperative type variables or a syntactic value restriction.
- Implemented in the Koka compiler and exercised on a Markdown processor and a tier-split chat app (MSFP 2014 / EPTCS 153).

## Caveats

## Links

- arXiv: [1406.2061](https://arxiv.org/abs/1406.2061)
- DOI: [10.4204/EPTCS.153.8](https://doi.org/10.4204/EPTCS.153.8)
