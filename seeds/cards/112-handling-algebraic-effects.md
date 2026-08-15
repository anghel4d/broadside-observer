---
title: Handling Algebraic Effects
authors:
- Gordon D. Plotkin
- Matija Pretnar
year: 2013
venue: Logical Methods in Computer Science
arxiv: '1312.1399'
doi: 10.2168/LMCS-9(4:23)2013
source: https://arxiv.org/abs/1312.1399
topics:
- typed-programming-systems
seed_rank: 112
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: languages
relevance_score: 9
lineage: algebraic-effects
cites:
- title: Handlers of Algebraic Effects
  url: https://doi.org/10.1007/978-3-642-00590-9_7
  year: 2009
  arxiv: null
  doi: 10.1007/978-3-642-00590-9_7
- title: Programming with Algebraic Effects and Handlers
  url: https://arxiv.org/abs/1203.1539
  year: 2012
  arxiv: '1203.1539'
  doi: null
see:
- "021-handlers-of-algebraic-effects"
- "107-programming-with-algebraic-effects-and-handlers"
---

# Handling Algebraic Effects

## One-sentence takeaway

A handler is a (not necessarily free) model of an effect theory, and handling is the unique homomorphism out of the free algebra — the same story that interprets exceptions also interprets CCS relabel/restrict, timeout, rollback, and stream redirection.

## Why it matters here

ano commands are algebraic operations; Sky/engine (simulate, log, commit) is a handler homomorphism. This journal paper is the denotational account of why those swaps are well-typed and why a handler that breaks the equations has no meaning.

## Key ideas

- Algebraic operations (`raise`, `get`/`set`, `choose`, `read`/`write`) construct effects and commute with evaluation contexts; `handle` does not, so it cannot itself be an algebraic op of any ranked monad.
- Each handler supplies the carrier and the operation maps of a model; Benton–Kennedy-style `handled with H to x. N` is exactly applying the induced homomorphism that extends the user continuation `N`.
- The calculus is Levy call-by-push-value plus operation application and a handling construct; operations are dual to handlers (constructors vs deconstructors).
- Worked handlers recover CCS relabelling and restriction, character-count timeouts, exception rollback (including a parameter-passing variant that commits state only on success), and Unix-style stdin/stdout redirection.
- Not every syntactic handler is correct: the maps must satisfy the effect equations, and correctness is in general undecidable, so the language permits all definitions and leaves proof obligation to the programmer.

## Caveats

## Links

- arXiv: [1312.1399](https://arxiv.org/abs/1312.1399)
- DOI: [10.2168/LMCS-9(4:23)2013](https://doi.org/10.2168/LMCS-9(4:23)2013)
- PDF: https://arxiv.org/pdf/1312.1399
