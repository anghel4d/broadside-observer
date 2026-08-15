---
title: "The Lazy Lambda Calculus"
authors:
  - "Samson Abramsky"
year: 1990
venue: "Research Topics in Functional Programming (Turner, ed.)"
arxiv: null
doi: null
source: "https://www.cs.ox.ac.uk/people/samson.abramsky/lazy.pdf"
topics:
  - lazy-evaluation
  - abramsky
  - domain-theory
  - lambda-calculus
seed_rank: 692
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
  - title: "LCF Considered as a Programming Language"
    url: "https://doi.org/10.1016/0304-3975(77)90044-5"
    year: 1977
    arxiv: null
    doi: "10.1016/0304-3975(77)90044-5"
  - title: "Report on the Programming Language Haskell: A Non-strict, Purely Functional Language"
    url: "https://doi.org/10.1145/130697.130699"
    year: 1992
    arxiv: null
    doi: "10.1145/130697.130699"
see:
  - "627-call-by-name-call-by-value-and-the-lambda-calculus"
  - "657-lcf-considered-as-a-programming-language"
  - "703-report-on-the-programming-language-haskell-a-non-strict-pure"
---

# The Lazy Lambda Calculus

## One-sentence takeaway

Abramsky rebuilds λ-calculus observationally around *weak* head-normal form — what Miranda/LML/Haskell actually evaluate to — and gives it a canonical domain and a Plotkin-style operational theory.

## Why it matters here

Haskell-style non-strictness is not Plotkin CBN plus folklore: λx.Ω is a value here and Ω is not. Any lazy ano stream or non-strict kernel needs this distinction.

## Key ideas

- Real lazy implementations stop at weak head normal form (no reduction under λ); Barendregt's standard theory identifies all unsolvables, so λx.Ω = Ω, which is the wrong equation for those languages.
- Applicative bisimulation on closed terms (and its contextual equivalent) is the observational preorder; Ω is least, YK is greatest, β holds, η holds only conditionally on convergence.
- A domain equation for applicative transition systems yields a canonical model, a domain logic, and a short computational-adequacy proof (converges iff non-bottom).
- Chapter in Turner's *Research Topics in Functional Programming*, 1990; author PDF at Oxford. Abramsky notes a 2006 TeX date on that file — same paper.

## Caveats

## Links

- Author PDF: https://www.cs.ox.ac.uk/people/samson.abramsky/lazy.pdf
