---
title: "Call-by-Push-Value"
authors:
  - "Paul Blain Levy"
year: 2003
venue: "Semantic Structures in Computation, Springer"
arxiv: null
doi: "10.1007/978-94-010-0259-2"
source: "https://pblevy.github.io/papers/thesisqmwphd.pdf"
topics:
  - call-by-push-value
  - effects
  - lambda-calculus
  - semantics
seed_rank: 131
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "Notions of Computation and Monads"
    url: "https://doi.org/10.1016/0890-5401(91)90052-4"
    year: 1991
    arxiv: null
    doi: "10.1016/0890-5401(91)90052-4"
  - title: "Computational lambda-calculus and monads"
    url: "https://doi.org/10.1109/LICS.1989.39155"
    year: 1989
    arxiv: null
    doi: "10.1109/LICS.1989.39155"
see:
  - "035-notions-of-computation-and-monads"
  - "037-computational-lambda-calculus-and-monads"
---

# Call-by-Push-Value

## One-sentence takeaway

CBPV splits types into values (“a value is”) and computations (“a computation does”), and the F ⊣ U adjunction between them is the common substrate of call-by-value and call-by-name once effects are present.

## Why it matters here

Ano’s effectful evaluators and GRID COMMAND’s agent/runtime split both need a finer grain than “everything is a CBV or CBN lambda.” CBPV is the calculus that names that split: thunks are values, forcing is a computation, and CBV/CBN become two embeddings rather than two languages.

## Key ideas

- Value types vs computation types: only computations perform effects; `F A` produces an `A`, `U B` is a thunk of a `B`. CBV is the Kleisli (producer) embedding, CBN the co-Kleisli (thunk) embedding.
- CK-machine reading: application pushes an argument, forcing pops a thunk — CBPV as explicit push/pop of a value stack, not as another evaluation-order slogan.
- Concrete models for printing, divergence, global store, errors, erratic choice and control, plus a possible-world model for cell generation and Jump-With-Argument as a continuation implementation.
- Categorical story: same equational theory interpreted as a strong monad (Moggi), a value/producer structure (Power–Robinson), or a strong adjunction; every concrete model in the thesis is an adjunction model.
- Pointer-game reading (Hyland–Ong style): opponent question = force a computation, answer = produce a value.

## Caveats

## Links

- Thesis PDF: [pblevy.github.io/papers/thesisqmwphd.pdf](https://pblevy.github.io/papers/thesisqmwphd.pdf)
- Springer book: [10.1007/978-94-010-0259-2](https://doi.org/10.1007/978-94-010-0259-2)
