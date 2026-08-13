---
title: "The Implementation of Functional Programming Languages"
authors:
  - "Simon L. Peyton Jones"
year: 1987
venue: "Prentice-Hall"
arxiv: null
doi: null
source: "https://www.microsoft.com/en-us/research/publication/the-implementation-of-functional-programming-languages/"
topics:
  - functional-compilers
  - g-machine
  - peyton-jones
  - haskell-precursor
seed_rank: 955
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Report on the Programming Language Haskell: A Non-strict, Purely Functional Language"
    url: "https://doi.org/10.1145/130697.130699"
    year: 1992
    arxiv: null
    doi: "10.1145/130697.130699"
  - title: "The Lazy Lambda Calculus"
    url: "https://www.cs.ox.ac.uk/people/samson.abramsky/lazy.pdf"
    year: 1990
    arxiv: null
    doi: null
  - title: "Call-by-Name, Call-by-Value and the λ-Calculus"
    url: "https://doi.org/10.1016/0304-3975(75)90017-1"
    year: 1975
    arxiv: null
    doi: "10.1016/0304-3975(75)90017-1"
  - title: "The Mechanical Evaluation of Expressions"
    url: "https://doi.org/10.1093/comjnl/6.4.308"
    year: 1964
    arxiv: null
    doi: "10.1093/comjnl/6.4.308"
see:
  - "954-report-on-the-programming-language-haskell-a-non-strict-pure"
  - "943-the-lazy-lambda-calculus"
  - "878-call-by-name-call-by-value-and-the-lambda-calculus"
  - "868-the-mechanical-evaluation-of-expressions"
---

# The Implementation of Functional Programming Languages

## One-sentence takeaway

Classic monograph on implementing lazy functional languages (G-machine, graph reduction, etc.).

## Why it matters here

The SPJ implementation book — how non-strict functional languages became real compilers.

## Key ideas

- Graph reduction and the G-machine.
- Compilation techniques for laziness.
- Bridge from lambda calculus to runnable code.
- Direct ancestor of GHC implementation culture.

## Caveats

- Seed card from the wisdom-of-the-perfects PL haul; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI pagination against your preferred edition before formal citation.

## Links

- URL: https://www.microsoft.com/en-us/research/publication/the-implementation-of-functional-programming-languages/
