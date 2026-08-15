---
title: "Categorical Logic and Type Theory"
authors:
  - "Bart Jacobs"
year: 1999
venue: "Studies in Logic and the Foundations of Mathematics 141, Elsevier"
arxiv: null
doi: null
source: "https://shop.elsevier.com/books/categorical-logic-and-type-theory/jacobs/978-0-444-50170-7"
topics:
  - category-theory
  - type-theory
  - fibrations
  - logic
seed_rank: 135
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "Notions of computation and monads"
    url: "https://doi.org/10.1016/0890-5401(91)90052-4"
    year: 1991
    arxiv: null
    doi: "10.1016/0890-5401(91)90052-4"
  - title: "Introduction to Higher Order Categorical Logic"
    url: "https://doi.org/10.2307/2274784"
    year: 1988
    arxiv: null
    doi: "10.2307/2274784"
  - title: "Linear logic"
    url: "https://doi.org/10.1016/0304-3975(87)90045-4"
    year: 1987
    arxiv: null
    doi: "10.1016/0304-3975(87)90045-4"
  - title: "Category Theory for Computing Science"
    url: "https://www.math.mcgill.ca/barr/papers/ctcs.pdf"
    year: 1995
    arxiv: null
    doi: null
  - title: "Adjointness in Foundations"
    url: "https://doi.org/10.1111/j.1746-8361.1969.tb01194.x"
    year: 1969
    arxiv: null
    doi: "10.1111/j.1746-8361.1969.tb01194.x"
  - title: "Locally cartesian closed categories and type theory"
    url: "https://doi.org/10.1017/s0305004100061284"
    year: 1984
    arxiv: null
    doi: "10.1017/s0305004100061284"
see:
  - "035-notions-of-computation-and-monads"
  - "041-introduction-to-higher-order-categorical-logic"
  - "040-linear-logic"
  - "138-category-theory-for-computing-science"
  - "160-adjointness-in-foundations"
  - "154-locally-cartesian-closed-categories-and-type-theory"
---

# Categorical Logic and Type Theory

## One-sentence takeaway

A fibration `p : E → B` is the single setting in which simple type theory, predicate logic, polymorphism and dependent types are all interpreted, with comprehension reconstructing context extension from the fibration.

## Why it matters here

When ano grows past simple types — indexed component families, dependently typed schemas, proofs about GRID COMMAND state — this is the reference for “a type in a context is a fibre.” Read the fibration/comprehension chapters before inventing a custom indexed semantics.

## Key ideas

- Fibred category theory first: cloven/split fibrations, change-of-base, fibrewise products and adjunctions, then indexed categories as the equivalent presentation.
- Simple type theory is functorial semantics in a cartesian closed fibre; untyped λ-calculus drops out as the one-object case.
- Predicate logic lives in the fibration of predicates/subobjects: quantifiers are adjoints to weakening, equality is a fibred left adjoint, regular/coherent categories and toposes appear as the well-behaved fibres.
- Polymorphism is a fibration with a generic object; the effective topos is built from a higher-order fibration and hosts PERs and ω-sets as the standard realizability model.
- Dependent types are comprehension categories / display-map categories; closed comprehension categories model Σ/Π, and the last chapter lifts this to full higher-order dependent type theory.

## Caveats

## Links

- Elsevier: [978-0-444-50170-7](https://shop.elsevier.com/books/categorical-logic-and-type-theory/jacobs/978-0-444-50170-7)
- Author page: [cs.ru.nl/B.Jacobs/CLT/bookinfo.html](https://www.cs.ru.nl/B.Jacobs/CLT/bookinfo.html)
