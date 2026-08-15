---
title: "Computational lambda-calculus and monads"
authors:
  - "Eugenio Moggi"
year: 1989
venue: "LICS"
arxiv: null
doi: "10.1109/LICS.1989.39155"
source: "https://doi.org/10.1109/LICS.1989.39155"
topics:
  - monads
  - effects
  - lambda-calculus
  - category-theory
  - semantics
seed_rank: 37
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
cites:
  - title: "Call-by-name, call-by-value and the λ-calculus"
    url: "https://doi.org/10.1016/0304-3975(75)90017-1"
    year: 1975
    arxiv: null
    doi: "10.1016/0304-3975(75)90017-1"
  - title: "Categories for the Working Mathematician"
    url: "https://doi.org/10.1007/978-1-4612-9839-7"
    year: 1971
    arxiv: null
    doi: "10.1007/978-1-4612-9839-7"
see:
  - "627-call-by-name-call-by-value-and-the-lambda-calculus"
  - "029-categories-for-the-working-mathematician-2nd-ed"
---

# Computational lambda-calculus and monads

## One-sentence takeaway

Moggi’s LICS 1989 announcement: model a notion of computation by a strong monad and interpret a computational λ-calculus in its Kleisli category, making evaluation order a semantic choice rather than a side condition.

## Why it matters here

This is the talk that licensed effectful functional languages. ano’s command types are Kleisli arrows; picking CBV versus a different strategy is picking the monad’s strength and bind.

## Key ideas

- Plotkin’s CBV λ-calculus is recovered as the special case T = identity; other T give partiality, exceptions, state, continuations.
- Values inhabit A; computations inhabit T A. The let rule is the only place effects happen, so the metalanguage can discuss effects without baking in a particular one.
- Strength (a map A × T B → T(A × B)) is what lets an environment be carried across a computation — the technical reason “strong monad” keeps appearing.
- Short LICS version; full definitions and proofs are in the 1991 *Information and Computation* paper.
- Directly cites Plotkin CBV and Mac Lane; the linear-logic / sequent citations in some bibliographies are background, not the contribution.

## Caveats

## Links

- DOI: [10.1109/LICS.1989.39155](https://doi.org/10.1109/LICS.1989.39155)
