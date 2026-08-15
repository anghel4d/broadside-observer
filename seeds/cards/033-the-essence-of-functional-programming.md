---
title: "The Essence of Functional Programming"
authors:
  - "Philip Wadler"
year: 1992
venue: "POPL"
arxiv: null
doi: "10.1145/143165.143169"
source: "https://doi.org/10.1145/143165.143169"
topics:
  - monads
  - effects
  - functional-programming
  - plt
seed_rank: 33
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
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

# The Essence of Functional Programming

## One-sentence takeaway

Wadler shows that Moggi’s monads are a programming method: one type constructor and two operations (`return`, `>>=`) uniformly structure interpreters for errors, state, output, and nondeterminism.

## Why it matters here

This is how monads left category theory and entered language-design culture. ano’s command-then-handle style is the same “write the interpreter, pick the monad” move.

## Key ideas

- A pure interpreter is rewritten four ways — exceptions, mutable state, logging, ambiguity — and each rewrite is the same plumbing once a monad is chosen.
- The paper introduces the programmer-facing vocabulary (`unit`/`bind`, do-notation in later talks) that Haskell then standardized.
- Laws (left/right unit, associativity) are presented as the contract that lets you swap implementations without rewriting clients.
- Monad morphisms (later: transformers) appear as the way to combine effects rather than pick one.
- Explicitly popularizes Moggi 1989/1991 for the FP audience; it is not a new semantics paper, it is the transfer paper.

## Caveats

## Links

- DOI: [10.1145/143165.143169](https://doi.org/10.1145/143165.143169)
