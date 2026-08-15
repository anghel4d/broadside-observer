---
title: "A Call-by-Name Lambda-Calculus Machine"
authors:
  - "Jean-Louis Krivine"
year: 2007
venue: "Higher-Order and Symbolic Computation (notes circulate from 1980s)"
arxiv: null
doi: "10.1007/s10990-007-9018-9"
source: "https://doi.org/10.1007/s10990-007-9018-9"
topics:
  - krivine-machine
  - abstract-machines
  - cbn
  - lambda-calculus
seed_rank: 705
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "The Mechanical Evaluation of Expressions"
    url: "https://doi.org/10.1093/comjnl/6.4.308"
    year: 1964
    arxiv: null
    doi: "10.1093/comjnl/6.4.308"
  - title: "Call-by-Name, Call-by-Value and the λ-Calculus"
    url: "https://doi.org/10.1016/0304-3975(75)90017-1"
    year: 1975
    arxiv: null
    doi: "10.1016/0304-3975(75)90017-1"
  - title: "Control Operators, the SECD Machine, and the λ-Calculus"
    url: "https://www2.ccs.neu.edu/racket/pubs/fdpc3-ff.pdf"
    year: 1986
    arxiv: null
    doi: null
  - title: "Definitional Interpreters for Higher-Order Programming Languages"
    url: "https://doi.org/10.1145/800194.805852"
    year: 1972
    arxiv: null
    doi: "10.1145/800194.805852"
see:
  - "617-the-mechanical-evaluation-of-expressions"
  - "627-call-by-name-call-by-value-and-the-lambda-calculus"
  - "665-control-operators-the-secd-machine-and-the-calculus"
  - "630-definitional-interpreters-for-higher-order-programming-langu"
---

# A Call-by-Name Lambda-Calculus Machine

## One-sentence takeaway

The Krivine machine evaluates untyped lambda terms to weak-head normal form with three instructions — push an argument, pop into an environment, and grab a closure — implementing call-by-name exactly.

## Why it matters here

Anoptic interpreters and proof-carrying agent scripts need an abstract machine small enough to audit. KAM is the CBN twin of SECD/CEK: a handful of transitions you can implement, instrument, or realize as a classical-realizability backend.

## Key ideas

- State is a triple (term, environment, stack); β-reduction is delayed by building closures instead of substituting.
- Weak-head reduction is the observational theory: under a lambda the machine stops, matching Plotkin’s CBN calculus.
- The transition system is tiny enough to be the execution engine in later classical realizability (control as a stack capture).
- Landin’s SECD, Felleisen’s control operators, and Reynolds-style definitional interpreters are the comparison class, not competitors to replace.
- The 2007 HOSC paper writes down notes that had circulated since the mid-1980s.

## Caveats

## Links

- DOI: [10.1007/s10990-007-9018-9](https://doi.org/10.1007/s10990-007-9018-9)
- Springer: https://link.springer.com/article/10.1007/s10990-007-9018-9
