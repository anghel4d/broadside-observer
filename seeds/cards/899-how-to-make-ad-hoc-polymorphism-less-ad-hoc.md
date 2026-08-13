---
title: "How to Make Ad-Hoc Polymorphism Less Ad Hoc"
authors:
  - "Philip Wadler"
  - "Stephen Blott"
year: 1989
venue: "POPL"
arxiv: null
doi: "10.1145/75277.75283"
source: "https://doi.org/10.1145/75277.75283"
topics:
  - type-classes
  - ad-hoc-polymorphism
  - haskell
  - wadler
seed_rank: 899
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "A Theory of Type Polymorphism in Programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
    card: "892-a-theory-of-type-polymorphism-in-programming"
  - title: "Principal Type-Schemes for Functional Programs"
    url: "https://doi.org/10.1145/582153.582176"
    year: 1982
    arxiv: null
    doi: "10.1145/582153.582176"
    card: "893-principal-type-schemes-for-functional-programs"
  - title: "Theorems for Free!"
    url: "https://doi.org/10.1145/99370.99404"
    year: 1989
    arxiv: null
    doi: "10.1145/99370.99404"
    card: "039-theorems-for-free"
  - title: "Report on the Programming Language Haskell: A Non-strict, Purely Functional Language"
    url: "https://doi.org/10.1145/130697.130699"
    year: 1992
    arxiv: null
    doi: "10.1145/130697.130699"
    card: "967-report-on-the-programming-language-haskell-a-non-strict-pure"
---

# How to Make Ad-Hoc Polymorphism Less Ad Hoc

## One-sentence takeaway

Introduces type classes as a disciplined alternative to ad-hoc overloading in Hindley–Milner languages.

## Why it matters here

The type-class paper — how Haskell-style overloading stays compatible with principal types.

## Key ideas

- Type classes separate overloading from parametric polymorphism.
- Dictionary-passing as an implementation reading.
- Extends HM without destroying principal types.
- Foundation for Haskell's Num/Eq/Monad class hierarchy.

## Caveats

- Seed card from the wisdom-of-the-perfects PL haul; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI pagination against your preferred edition before formal citation.

## Links

- DOI: [10.1145/75277.75283](https://doi.org/10.1145/75277.75283)
- URL: https://doi.org/10.1145/75277.75283
