---
title: "Notions of Computation and Monads"
authors:
  - "Eugenio Moggi"
year: 1991
venue: "Information and Computation"
arxiv: null
doi: "10.1016/0890-5401(91)90052-4"
source: "https://doi.org/10.1016/0890-5401(91)90052-4"
topics:
  - monads
  - effects
  - lambda-calculus
  - category-theory
seed_rank: 35
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: algebraic-effects
cites:
  - title: "Computational lambda-calculus and monads"
    url: "https://doi.org/10.1109/LICS.1989.39155"
    year: 1989
    arxiv: null
    doi: "10.1109/LICS.1989.39155"
  - title: "Categories for the Working Mathematician (2nd ed.)"
    url: "https://doi.org/10.1007/978-1-4757-4721-8"
    year: 1998
    arxiv: null
    doi: "10.1007/978-1-4757-4721-8"
see:
  - "037-computational-lambda-calculus-and-monads"
  - "029-categories-for-the-working-mathematician-2nd-ed"
---

# Notions of Computation and Monads

## One-sentence takeaway

Moggi’s 1991 journal paper is the complete account: a strong monad on a category models a notion of computation, and the computational metalanguage is the internal language of that Kleisli category.

## Why it matters here

This is the citable semantics for effectful ano commands — not “monads are burritos,” but “a computation of type A is a morphism into T A.” Handlers later *interpret* T; this paper *classifies* T.

## Key ideas

- Partiality, exceptions, state, I/O, continuations, and nondeterminism are all instances of one interface: a strong monad (T, η, μ, t) with the strength needed to thread an environment.
- The computational λ-calculus distinguishes values from computations; let-binding is Kleisli composition, so evaluation order is explicit.
- Soundness and completeness relative to the class of cartesian categories with a strong monad make the metalanguage a real logic, not a slogan.
- Different monads correspond to different notions; monad morphisms interpret one notion inside another (the seed of transformers and effect rows).
- Expands the 1989 LICS extended abstract with full proofs; cite this for theorems, LICS for the announcement.

## Caveats

## Links

- DOI: [10.1016/0890-5401(91)90052-4](https://doi.org/10.1016/0890-5401(91)90052-4)
