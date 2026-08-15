---
title: "Report on the Programming Language Haskell: A Non-strict, Purely Functional Language"
authors:
  - "Paul Hudak"
  - "Simon Peyton Jones"
  - "Philip Wadler"
  - "et al."
year: 1992
venue: "ACM SIGPLAN Notices"
arxiv: null
doi: "10.1145/130697.130699"
source: "https://doi.org/10.1145/130697.130699"
topics:
  - haskell
  - functional-programming
  - lazy-evaluation
  - language-report
seed_rank: 703
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "How to Make Ad-Hoc Polymorphism Less Ad Hoc"
    url: "https://doi.org/10.1145/75277.75283"
    year: 1989
    arxiv: null
    doi: "10.1145/75277.75283"
  - title: "Miranda: A Non-strict Functional Language with Polymorphic Types"
    url: "https://doi.org/10.1007/3-540-15975-4_26"
    year: 1985
    arxiv: null
    doi: "10.1007/3-540-15975-4_26"
  - title: "A Theory of Type Polymorphism in Programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
  - title: "The Implementation of Functional Programming Languages"
    url: "https://www.microsoft.com/en-us/research/publication/the-implementation-of-functional-programming-languages-2/"
    year: 1987
    arxiv: null
    doi: null
see:
  - "645-how-to-make-ad-hoc-polymorphism-less-ad-hoc"
  - "716-miranda-a-non-strict-functional-language-with-polymorphic-ty"
  - "629-a-theory-of-type-polymorphism-in-programming"
  - "704-the-implementation-of-functional-programming-languages"
---

# Report on the Programming Language Haskell: A Non-strict, Purely Functional Language

## One-sentence takeaway

Haskell 1.2 is specified as a non-strict, purely functional language whose type classes give a coherent account of ad-hoc polymorphism on top of Hindley–Milner.

## Why it matters here

Ano’s array/combinator grain and Broadside’s typed notes both inherit the Haskell bet: default laziness, no implicit effects, and type-class-style overload instead of a zoo of special forms. This is the community report that froze that bet.

## Key ideas

- Evaluation is non-strict by default; purity is the language invariant, not a lint.
- Type classes (Wadler–Blott) structure overloading so `Eq`, `Num`, and I/O dictionaries are ordinary typed values.
- The report is a committee language, not a single-lab dialect: syntax, modules, and the prelude are written to be implementable by competing compilers.
- Algebraic data types, pattern matching, and list comprehensions are the surface; the statics are Damas–Milner plus classes.
- Version 1.2 (SIGPLAN Notices 27(5), May 1992, pp. R1–R164) is the first widely cited Haskell report, not Haskell 98.

## Caveats

## Links

- DOI: [10.1145/130697.130699](https://doi.org/10.1145/130697.130699)
- ACM: https://dl.acm.org/doi/10.1145/130697.130699
