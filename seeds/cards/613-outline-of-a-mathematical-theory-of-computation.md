---
title: "Outline of a Mathematical Theory of Computation"
authors:
  - "Dana S. Scott"
year: 1970
venue: "Oxford PRG Technical Monograph 2"
arxiv: null
doi: null
source: "https://www.cs.ox.ac.uk/files/3229/PRG02.pdf"
topics:
  - domain-theory
  - scott
  - semantics
  - lattices
seed_rank: 613
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "The Calculi of Lambda-Conversion"
    url: "https://press.princeton.edu/books/paperback/9780691083940/the-calculi-of-lambda-conversion"
    year: 1941
    arxiv: null
    doi: null
  - title: "The Mechanical Evaluation of Expressions"
    url: "https://doi.org/10.1093/comjnl/6.4.308"
    year: 1964
    arxiv: null
    doi: "10.1093/comjnl/6.4.308"
see:
  - "511-the-calculi-of-lambda-conversion"
  - "617-the-mechanical-evaluation-of-expressions"
---

# Outline of a Mathematical Theory of Computation

## One-sentence takeaway

Scott introduces complete lattices and continuous functions so that recursive programs have a canonical meaning: the least fixed point of a continuous operator.

## Why it matters here

Domain theory charter. Every later story about recursive types, untyped λ-models, and "what does a looping ano combinator denote?" sits on this fixed-point theorem.

## Key ideas

- Data and partial information are ordered; complete lattices (or later, cpos) close under directed suprema.
- Computable operations are the Scott-continuous maps — they preserve directed sups, i.e. they only need finite information to produce finite information.
- Kleene/Tarski least-fixed-point: a continuous f : D → D has a least fixed point ⊔_n f^n(⊥), which is the meaning of recursion / while.
- The outline already points at data types as domains and at a model of the untyped λ-calculus.

## Caveats

## Links

- Oxford PRG-2 PDF: https://www.cs.ox.ac.uk/files/3229/PRG02.pdf
