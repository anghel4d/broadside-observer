---
title: "Dependent Types and Multi-Monadic Effects in F*"
authors:
- Nikhil Swamy
- Cătălin Hriţcu
- Chantal Keller
- Aseem Rastogi
- Antoine Delignat-Lavaud
- Simon Forest
- Karthikeyan Bhargavan
- Cédric Fournet
- Pierre-Yves Strub
- Markulf Kohlweiss
- Jean-Karim Zinzindohoue
- Santiago Zanella-Béguelin
year: 2016
venue: POPL
arxiv: null
doi: 10.1145/2837614.2837655
source: "https://doi.org/10.1145/2837614.2837655"
topics:
- fstar
- dependent-types
- effects
- type-safety
seed_rank: 909
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

# Dependent Types and Multi-Monadic Effects in F*

## One-sentence takeaway

F* is a dependently typed, effectful CBV language whose effects live in a user-extensible lattice of Dijkstra monads, so PURE stays a consistent logic while STATE/EXN/DIV get their own weakest-precondition transformers.

## Why it matters here

This is how you verify *and* extract real stacks (TLS, then Everest) without dumping every effect into one mega-monad. Ano’s standing rules / command interpreters want the same split: a total core for specs, named effects for IO and mutation, SMT plus proof terms when the solver times out.

## Key ideas

- Computation types `M t wp` index an effect M by a predicate transformer; morphisms lift WPs along a join semilattice (PURE ⊑ DIV, STATE, EXN ⊑ ALL).
- A single Dijkstra monad for everything explodes VCs and mentions unused effects; the lattice prunes infeasible paths syntactically.
- PURE is kept consistent by a semantic termination check on a well-founded order; DIV is an explicit partial-correctness effect.
- Hyper-heaps let programmers define their own region-style memory model on top of the primitive heap.
- Evaluated on >55k lines: F* bootstraps itself to OCaml/F#, re-verifies key TLS 1.2 modules with fewer annotations than the prior effort, and mechanizes λ-calculi up through a fragment µF* of itself.

## Caveats

## Links

- DOI: [10.1145/2837614.2837655](https://doi.org/10.1145/2837614.2837655)
- PDF: https://fstar-lang.org/papers/mumon/paper.pdf
- Project page: https://fstar-lang.org/papers/mumon/
