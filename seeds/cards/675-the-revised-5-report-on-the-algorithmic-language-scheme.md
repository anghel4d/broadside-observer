---
title: "Revised^5 Report on the Algorithmic Language Scheme"
authors:
  - "Richard Kelsey"
  - "William Clinger"
  - "Jonathan Rees"
year: 1998
venue: "Higher-Order and Symbolic Computation"
arxiv: null
doi: "10.1023/A:1010051815785"
source: "https://doi.org/10.1023/A:1010051815785"
topics:
  - scheme
  - r5rs
  - language-report
  - standards
seed_rank: 675
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Scheme: An Interpreter for Extended Lambda Calculus"
    url: "https://dspace.mit.edu/handle/1721.1/5794"
    year: 1975
    arxiv: null
    doi: null
  - title: "RABBIT: A Compiler for Scheme"
    url: "https://dspace.mit.edu/handle/1721.1/6913"
    year: 1978
    arxiv: null
    doi: null
see:
  - "673-scheme-an-interpreter-for-extended-lambda-calculus"
  - "674-rabbit-a-compiler-for-scheme"
---

# Revised^5 Report on the Algorithmic Language Scheme

## One-sentence takeaway

R5RS is the compact Scheme standard that requires proper tail calls, first-class continuations, and `syntax-rules` hygienic macros in a report you can read in an afternoon.

## Why it matters here

When Broadside cites "Scheme" as a language design, this is the report — smaller than R6RS/R7RS-large, precise enough to compare implementations and to steal macros from.

## Key ideas

- The language is defined by a denotational semantics in the report plus a prose specification of libraries; editors Kelsey, Clinger, Rees, dated 20 February 1998.
- Proper tail recursion and `call-with-current-continuation` are required, not optional quality-of-implementation notes.
- `syntax-rules` is the hygienic macro system that shipped in the standard (versus earlier `defmacro`-style systems).
- *Higher-Order and Symbolic Computation* 11(1):7–105, 1998, DOI 10.1023/A:1010051815785. Corrected HTML: standards.scheme.org.

## Caveats

## Links

- DOI: [10.1023/A:1010051815785](https://doi.org/10.1023/A:1010051815785)
- Corrected HTML: https://standards.scheme.org/corrected-r5rs/r5rs.html
