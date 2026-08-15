---
title: "Comprehending Monads"
authors:
  - "Philip Wadler"
year: 1990
venue: "ACM Conference on LISP and Functional Programming; journal version MSCS 1992"
arxiv: null
doi: "10.1145/91556.91592"
source: "https://doi.org/10.1145/91556.91592"
topics:
  - monads
  - list-comprehensions
  - wadler
  - effects
seed_rank: 644
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
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

# Comprehending Monads

## One-sentence takeaway

Wadler shows that list comprehensions are the syntax of a monad, and that the same notation uniformly writes programs in any monad — parsers, I/O, state, failure.

## Why it matters here

The comprehension reading that stuck in Haskell (`do` / monad comprehensions) and the missing Wadler monad card beside Moggi. Effectful ano combinators that look like array comprehensions are this idea.

## Key ideas

- Monad laws make the usual comprehension translations (map, concat, filter) well-defined for any `return` / `>>=`.
- One notation covers lists, parsers, I/O-style effects, and other computational monads.
- Companion to Moggi’s semantic monads (LICS 1989 / I&C 1991) and to Wadler’s later “Essence of FP” / “Monads for FP” tutorials.
- LFP ’90 original (DOI 10.1145/91556.91592); journal version *MSCS* 2 (1992), DOI 10.1017/S0960129500001408.

## Caveats

## Links

- LFP ’90 DOI: [10.1145/91556.91592](https://doi.org/10.1145/91556.91592)
- MSCS 1992 DOI: [10.1017/S0960129500001408](https://doi.org/10.1017/S0960129500001408)
