---
title: "Notions of Computation Determine Monads"
authors:
  - "Gordon Plotkin"
  - "John Power"
year: 2002
venue: "FoSSaCS 2002, LNCS 2303"
arxiv: null
doi: "10.1007/3-540-45931-6_24"
source: "https://doi.org/10.1007/3-540-45931-6_24"
topics:
  - algebraic-effects
  - monads
  - semantics
seed_rank: 132
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "Computational lambda-calculus and monads"
    url: "https://doi.org/10.1109/LICS.1989.39155"
    year: 1989
    arxiv: null
    doi: "10.1109/LICS.1989.39155"
  - title: "Notions of computation and monads"
    url: "https://doi.org/10.1016/0890-5401(91)90052-4"
    year: 1991
    arxiv: null
    doi: "10.1016/0890-5401(91)90052-4"
  - title: "Call-by-Push-Value: A Subsuming Paradigm"
    url: "https://doi.org/10.1007/3-540-48959-2_17"
    year: 1999
    arxiv: null
    doi: "10.1007/3-540-48959-2_17"
  - title: "Adequacy for Algebraic Effects"
    url: "https://doi.org/10.1007/3-540-45315-6_1"
    year: 2001
    arxiv: null
    doi: "10.1007/3-540-45315-6_1"
  - title: "Adjunctions whose counits are coequalizers, and presentations of finitary enriched monads"
    url: "https://doi.org/10.1016/0022-4049(93)90092-8"
    year: 1993
    arxiv: null
    doi: "10.1016/0022-4049(93)90092-8"
  - title: "A Powerdomain Construction"
    url: "https://doi.org/10.1137/0205035"
    year: 1976
    arxiv: null
    doi: "10.1137/0205035"
  - title: "A probabilistic powerdomain of evaluations"
    url: "https://doi.org/10.1109/LICS.1989.39173"
    year: 1989
    arxiv: null
    doi: "10.1109/LICS.1989.39173"
see:
  - "037-computational-lambda-calculus-and-monads"
  - "035-notions-of-computation-and-monads"
---

# Notions of Computation Determine Monads

## One-sentence takeaway

An effect is a signature of operations plus equations; the induced monad is what Moggi would have written down by hand — except that continuations have no such presentation.

## Why it matters here

This is the design rule for ano DSLs and engine effect stacks: pick the ops (`lookup`/`update`, `raise`, `choose`) and the equations they obey, then the monad follows. Continuations stay outside that algebra, which is why they do not compose like state or exceptions.

## Key ideas

- Rank: every monad of bounded rank comes from operations and equations; `R^{R(−)}` has no rank, matching the non-local character of `call/cc`.
- Exceptions, I/O, nondeterminism and probabilistic choice are the easy cases (`raise`, `read`/`write`, semilattice, `+_r`).
- Global state is the hard case they solve: lookup `l : A^V → A^L` and update `u : A → A^{L×V}` plus seven interaction/commutation axioms recover the side-effect monad `(S ⊗ −)^S`.
- Local state extends that theory: arities become presheaves on finite sets and injections, and `block` is linear (symmetric monoidal closed, not cartesian).
- Generic effects (`!ℓ`, `ℓ := v`, `read`, `write`) are what actually show up in a CBV language; the infinitary operations are the algebraist’s view of the same maps.

## Caveats

## Links

- DOI: [10.1007/3-540-45931-6_24](https://doi.org/10.1007/3-540-45931-6_24)
- Author PDF: [cs.tufts.edu …/comp-eff-monads.pdf](https://www.cs.tufts.edu/comp/150FP/archive/gordon-plotkin/comp-eff-monads.pdf)
