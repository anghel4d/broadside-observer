---
title: "Simple Types for Polymorphic Functions"
authors:
  - "Barry Jay"
  - "Johannes Bader"
year: 2026
venue: "arXiv:cs.LO"
arxiv: "2604.12194"
doi: null
source: "https://arxiv.org/abs/2604.12194"
topics:
  - typed-programming-systems
  - category-theory-plt
seed_rank: 3
seed_batch: "curiosity-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: programming-language-foundations
cites:
  - title: "The Principal Type-Scheme of an Object in Combinatory Logic"
    url: "https://doi.org/10.1090/S0002-9947-1969-0237244-X"
    year: 1969
    arxiv: null
    doi: null
    card: "879-the-principal-type-scheme-of-an-object-in-combinatory-logic"
  - title: "Principal Type-Schemes for Functional Programs"
    url: "https://doi.org/10.1145/582153.582176"
    year: 1982
    arxiv: null
    doi: null
    card: "891-principal-type-schemes-for-functional-programs"
  - title: "Functionality in Combinatory Logic"
    url: "https://doi.org/10.1073/pnas.20.11.584"
    year: 1934
    arxiv: null
    doi: null
    card: "749-functionality-in-combinatory-logic"
  - title: "Types and Programming Languages"
    url: "https://doi.org/10.7551/mitpress/14022.001.0001"
    year: 2002
    arxiv: null
    doi: null
    card: "027-types-and-programming-languages"
---

# Simple Types for Polymorphic Functions

## One-sentence takeaway

A combinatory type system where each combinator has at most one type, polymorphism appears only under application, and you get more polymorphism than Hindley–Milner *without* quantifiers.

## Why it matters here

Why you might love this: Barry Jay typing combinators so the type *is* the value's shape — lists and functions as hiding structure, not as ∀-soup. For ano, whose surface wants to look like notation rather than System F, this is a live alternative to HM: one type per combinator, inference that is supposed to be easy, extra static analyses riding the same skeleton. Pattern-calculus / combinatory lineage, not another gradual-typing paper.

## Key ideas

- Combinators carry at most one type; polymorphism is revealed by application, not by prenex ∀.
- Combinatory types describe value structure; abstract types (list, function) can hide that structure.
- Claimed polymorphism strictly beyond Hindley–Milner, with an effective inference algorithm and *no* quantified types.
- Simplicity is the point: other static analyses should become easier, not harder.
- Directly a type system for combinatory logic, not a retrofit of λ.

## Caveats

- 2026 preprint; "beyond Hindley–Milner" is a strong claim — verify examples before repeating it.
- "Simple" here is technical (no quantifiers), not "easy for newcomers."
- Unclear how this treats rank-2 / higher-rank programs ano might eventually want.

## Links

- arXiv: [2604.12194](https://arxiv.org/abs/2604.12194)
- PDF: https://arxiv.org/pdf/2604.12194
