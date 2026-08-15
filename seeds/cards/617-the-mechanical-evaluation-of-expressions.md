---
title: "The Mechanical Evaluation of Expressions"
authors:
  - "Peter J. Landin"
year: 1964
venue: "Computer Journal"
arxiv: null
doi: "10.1093/comjnl/6.4.308"
source: "https://doi.org/10.1093/comjnl/6.4.308"
topics:
  - secd
  - landin
  - lambda
  - interpreters
seed_rank: 617
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
  - title: "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I"
    url: "https://doi.org/10.1145/367177.367199"
    year: 1960
    arxiv: null
    doi: "10.1145/367177.367199"
see:
  - "511-the-calculi-of-lambda-conversion"
  - "575-recursive-functions-of-symbolic-expressions-and-their-comput"
---

# The Mechanical Evaluation of Expressions

## One-sentence takeaway

Landin's SECD machine — Stack, Environment, Control, Dump — is an explicit abstract machine that evaluates λ-expressions by pushing closures rather than substituting.

## Why it matters here

Ancestor of CEK/CAM and every bytecode-for-λ story. If ano or a GRID COMMAND expression language ever grows first-class functions, this is the first machine that already knows how to represent a closure.

## Key ideas

- Four registers: S (results), E (environment), C (control / code), D (dump of saved (S,E,C) triples for calls).
- A closure is a pair (code, environment); application pushes a dump frame instead of performing β-substitution.
- Applicative expressions (AEs) are the source language; the paper is the implementation half of Landin's Algol-as-λ program.
- *Computer Journal* 6(4), 1964, pp. 308–320.

## Caveats

## Links

- DOI: [10.1093/comjnl/6.4.308](https://doi.org/10.1093/comjnl/6.4.308)
