---
title: "A Syntactic Theory of Sequential Control"
authors:
  - "Matthias Felleisen"
  - "Daniel P. Friedman"
  - "Eugene Kohlbecker"
  - "Bruce Duba"
year: 1987
venue: "Theoretical Computer Science"
arxiv: null
doi: "10.1016/0304-3975(87)90109-5"
source: "https://doi.org/10.1016/0304-3975(87)90109-5"
topics:
  - control-operators
  - continuations
  - felleisen
  - reduction-semantics
seed_rank: 664
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Call-by-Name, Call-by-Value and the λ-Calculus"
    url: "https://doi.org/10.1016/0304-3975(75)90017-1"
    year: 1975
    arxiv: null
    doi: "10.1016/0304-3975(75)90017-1"
  - title: "Control Operators, the SECD Machine, and the λ-Calculus"
    url: "https://scholarworks.iu.edu/dspace/items/d85303cb-faee-4396-bf56-b03b35758a47"
    year: 1987
    arxiv: null
    doi: null
  - title: "The Mechanical Evaluation of Expressions"
    url: "https://doi.org/10.1093/comjnl/6.4.308"
    year: 1964
    arxiv: null
    doi: "10.1093/comjnl/6.4.308"
see:
  - "627-call-by-name-call-by-value-and-the-lambda-calculus"
  - "665-control-operators-the-secd-machine-and-the-calculus"
  - "617-the-mechanical-evaluation-of-expressions"
---

# A Syntactic Theory of Sequential Control

## One-sentence takeaway

Felleisen, Friedman, Kohlbecker, and Duba give the λ-calculus an equational theory of `call/cc`-style control: an abort operator 𝒜 and a capture operator 𝒞 with a Church–Rosser subcalculus.

## Why it matters here

This is the paper the filename gestured at — sequential control as reduction, not as an SECD side condition. The old card DOI (`10.1145/41625.41627`) is Herlihy–Wing linearizability; keep the four-author 1987 TCS result.

## Key ideas

- Start from an idealized Scheme with `call/cc`; replace it by 𝒞 (gives the argument the current continuation *without* implicitly invoking it) and 𝒜 (aborts to the argument).
- A C-rewriting machine evaluates by unique decomposition into an applicative context and a control redex; continuations are reified as tagged contexts.
- From the machine they derive local notions of reduction plus top-level *computation* rules, prove the diamond property, and obtain a standardization theorem relating calculus and machine.
- *Theoretical Computer Science* 52 (1987), 205–237, DOI 10.1016/0304-3975(87)90109-5. Assignments are a different 1987 paper (POPL, Felleisen–Friedman only).

## Caveats

## Links

- DOI: [10.1016/0304-3975(87)90109-5](https://doi.org/10.1016/0304-3975(87)90109-5)
- Author PDF: https://www.cs.tufts.edu/comp/150FP/archive/matthias-felleisen/sequential-control.pdf
