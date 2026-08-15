---
title: "Monads for Functional Programming"
authors:
  - "Philip Wadler"
year: 1995
venue: "Advanced Functional Programming, LNCS 925"
arxiv: null
doi: "10.1007/3-540-59451-5_2"
source: "https://homepages.inf.ed.ac.uk/wadler/papers/marktoberdorf/baastad.pdf"
topics:
  - monads
  - effects
  - functional-programming
seed_rank: 140
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
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
  - title: "The essence of functional programming"
    url: "https://doi.org/10.1145/143165.143169"
    year: 1992
    arxiv: null
    doi: "10.1145/143165.143169"
  - title: "Comprehending monads"
    url: "https://doi.org/10.1145/91556.91592"
    year: 1990
    arxiv: null
    doi: "10.1145/91556.91592"
  - title: "Imperative functional programming"
    url: "https://doi.org/10.1145/158511.158524"
    year: 1993
    arxiv: null
    doi: "10.1145/158511.158524"
  - title: "Call-by-name, call-by-value and the λ-calculus"
    url: "https://doi.org/10.1016/0304-3975(75)90017-1"
    year: 1975
    arxiv: null
    doi: "10.1016/0304-3975(75)90017-1"
  - title: "Linear logic"
    url: "https://doi.org/10.1016/0304-3975(87)90045-4"
    year: 1987
    arxiv: null
    doi: "10.1016/0304-3975(87)90045-4"
see:
  - "040-linear-logic"
  - "037-computational-lambda-calculus-and-monads"
  - "033-the-essence-of-functional-programming"
---

# Monads for Functional Programming

## One-sentence takeaway

Write the evaluator once as `eval (Div t u) = eval t ⋆ λa. eval u ⋆ λb. unit (a ÷ b)`; swapping the monad (`Id`, exceptions, state, output) changes the effect without rewriting the recursive structure.

## Why it matters here

This is the short pedagogy for ano interpreters and engine effect plumbing: `unit` and `⋆` are the only combinators, left/right unit and associativity are the laws, and a new effect is a new `M` plus one local operation (`raise`, `tick`, `out`).

## Key ideas

- A monad is `(M, unit, ⋆)` with `unit : a → M a` and `(⋆) : M a → (a → M b) → M b`, satisfying left unit, right unit and associativity.
- Exceptions: `data M a = Raise Exception | Return a`; state: `M a = State → (a, State)`; output: `M a = (Output, a)`. Each variation is a local change around `unit (a ÷ b)`.
- Pure vs impure: reversing an execution trace is `x ++ y` vs `y ++ x` in `⋆`; the corresponding impure program has to be substantially rewritten because output already happened.
- Third case study: a monad of arrays that justifies in-place update, and a monadic encoding of recursive-descent parsers as the sequencing/alternation paradigm.
- No category theory is required to use the interface; Moggi’s denotational observation is cited as the source, not as a prerequisite.

## Caveats

## Links

- Author PDF: [baastad.pdf](https://homepages.inf.ed.ac.uk/wadler/papers/marktoberdorf/baastad.pdf)
- DOI: [10.1007/3-540-59451-5_2](https://doi.org/10.1007/3-540-59451-5_2)
