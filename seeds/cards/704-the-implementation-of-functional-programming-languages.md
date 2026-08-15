---
title: "The Implementation of Functional Programming Languages"
authors:
  - "Simon L. Peyton Jones"
year: 1987
venue: "Prentice-Hall"
arxiv: null
doi: null
source: "https://www.microsoft.com/en-us/research/publication/the-implementation-of-functional-programming-languages-2/"
topics:
  - functional-compilers
  - g-machine
  - peyton-jones
  - haskell-precursor
seed_rank: 704
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
  - title: "The Mechanical Evaluation of Expressions"
    url: "https://doi.org/10.1093/comjnl/6.4.308"
    year: 1964
    arxiv: null
    doi: "10.1093/comjnl/6.4.308"
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
see:
  - "627-call-by-name-call-by-value-and-the-lambda-calculus"
  - "617-the-mechanical-evaluation-of-expressions"
  - "716-miranda-a-non-strict-functional-language-with-polymorphic-ty"
  - "629-a-theory-of-type-polymorphism-in-programming"
---

# The Implementation of Functional Programming Languages

## One-sentence takeaway

Lazy functional languages become real compilers by translating to lambda calculus, reducing shared graphs, and finally emitting G-machine code that updates nodes in place.

## Why it matters here

If ano or an Anoptic DSL ever compiles bulk array combinators or a lazy query over GRID COMMAND state, this is the implementation spine — pattern-match compilation, type checking, graph reduction, then a specialized abstract machine — not a Naïve Scheme interpreter.

## Key ideas

- Part I compiles a Miranda-class source to lambda calculus, with full chapters on pattern matching (Wadler) and Hindley–Milner type checking (Hancock).
- Part II starts from a toy graph reducer and adds sharing, updating, and alternative reduction strategies so call-by-need is an operational fact.
- Part III is the G-machine: a compiled graph reducer whose instruction set is the performance jump over interpretive reduction.
- Turner’s combinator and Miranda work, Landin’s SECD, and Plotkin’s CBN/CBV distinction are the cited ancestry.
- The 1987 Prentice-Hall text is the document GHC’s culture still points at; chapters also by Wadler, Hancock, and Turner.

## Caveats

## Links

- Publication: https://www.microsoft.com/en-us/research/publication/the-implementation-of-functional-programming-languages-2/
- PDF: https://www.microsoft.com/en-us/research/wp-content/uploads/1987/01/slpj-book-1987-small.pdf
