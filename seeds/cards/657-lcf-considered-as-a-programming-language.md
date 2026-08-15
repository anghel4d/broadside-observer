---
title: "LCF Considered as a Programming Language"
authors:
  - "Gordon D. Plotkin"
year: 1977
venue: "Theoretical Computer Science"
arxiv: null
doi: "10.1016/0304-3975(77)90044-5"
source: "https://doi.org/10.1016/0304-3975(77)90044-5"
topics:
  - pcf
  - plotkin
  - denotational-semantics
  - full-abstraction
seed_rank: 657
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
  - title: "Domains for Denotational Semantics"
    url: "https://doi.org/10.1007/BFb0012801"
    year: 1982
    arxiv: null
    doi: "10.1007/BFb0012801"
  - title: "Toward a Mathematical Semantics for Computer Languages"
    url: "https://www.cs.ox.ac.uk/files/3228/PRG06.pdf"
    year: 1971
    arxiv: null
    doi: null
see:
  - "627-call-by-name-call-by-value-and-the-lambda-calculus"
  - "656-domains-for-denotational-semantics"
  - "612-toward-a-mathematical-semantics-for-computer-languages"
---

# LCF Considered as a Programming Language

## One-sentence takeaway

Plotkin isolates PCF — typed λ-calculus plus ground types, conditionals, and recursion — and shows Scott's domain model is adequate but not fully abstract.

## Why it matters here

PCF is the typed calculus every later Anoptic/ano semantics case study is quietly using; this 1977 TCS paper is where full abstraction becomes a problem rather than a slogan.

## Key ideas

- PCF is the programming-language reading of Edinburgh LCF's logic: simply typed combinators with `fix`, booleans/naturals, and a call-by-name operational semantics.
- Computational adequacy: a term converges operationally iff its domain denotation is non-bottom.
- Full abstraction fails: there are continuous functionals (parallel-or is the famous one) that no PCF term denotes, so observational equivalence is finer than domain equality.
- TCS 5 (1977), DOI 10.1016/0304-3975(77)90044-5. Hyland–Ong and AJM games (2000) are the later solutions, not this paper.

## Caveats

## Links

- DOI: [10.1016/0304-3975(77)90044-5](https://doi.org/10.1016/0304-3975(77)90044-5)
