---
title: "An Abstract View of Programming Languages"
authors:
  - "Eugenio Moggi"
year: 1990
venue: "University of Edinburgh LFCS Report ECS-LFCS-90-113"
arxiv: null
doi: null
source: "https://www.lfcs.inf.ed.ac.uk/reports/90/ECS-LFCS-90-113/"
topics:
  - monads
  - effects
  - semantics
seed_rank: 146
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "Computational lambda-calculus and monads"
    url: "https://doi.org/10.1109/lics.1989.39155"
    year: 1989
    arxiv: null
    doi: "10.1109/lics.1989.39155"
see:
  - "037-computational-lambda-calculus-and-monads"
---

# An Abstract View of Programming Languages

## One-sentence takeaway

Course notes that treat "notions of computation as monads": Kleisli triples model effectful computation, and the computational λ-calculus is the friendly syntax in front of that semantics.

## Why it matters here

This is the readable primary source for why ano/engine effects are monads rather than ad-hoc interpreter state: one interface (unit, bind / Kleisli composition) covers exceptions, store, continuations, allocation, and communication.

## Key ideas

- Written at Stanford as CS 359 (Spring 1990) and issued as LFCS ECS-LFCS-90-113. The brief is a unified denotational account of programming languages, with category-theoretic notions introduced only as they earn their keep.
- A Kleisli triple `(T, η, −*)` over a base category is the working definition of a notion of computation: `T A` is computations of type `A`, `η` is "already a value", and extension `−*` sequences a computation into a continuation.
- Worked monads: exceptions, side-effects (store), continuations, variable sets / dynamic allocation, and communication with interleaving. Each is a different `T` with the same programming interface.
- Category theory is sold as a syntax-independent view of languages (objects hide internal structure; morphisms are how they interrelate). Datatype constructors are adjoint functors; formal systems should describe entailment relations so languages can be extended.
- The computational λ-calculus is the "more friendly interface" to those technical notions — the same move as using λ-calculus itself as an interface to cartesian closed categories.

## Caveats

## Links

- LFCS report page: https://www.lfcs.inf.ed.ac.uk/reports/90/ECS-LFCS-90-113/
- Official PostScript: https://www.lfcs.inf.ed.ac.uk/reports/90/ECS-LFCS-90-113/ECS-LFCS-90-113.ps
- Author PDF: https://person.dibris.unige.it/moggi-eugenio/ftp/abs-view.pdf
