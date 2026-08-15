---
title: "The Next 700 Programming Languages"
authors:
  - "Peter J. Landin"
year: 1966
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/365230.365257"
source: "https://doi.org/10.1145/365230.365257"
topics:
  - iswim
  - landin
  - functional-programming
  - language-design
seed_rank: 616
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "The Mechanical Evaluation of Expressions"
    url: "https://doi.org/10.1093/comjnl/6.4.308"
    year: 1964
    arxiv: null
    doi: "10.1093/comjnl/6.4.308"
  - title: "A Correspondence Between ALGOL 60 and Church's Lambda-Notation"
    url: "https://doi.org/10.1145/363744.363749"
    year: 1965
    arxiv: null
    doi: "10.1145/363744.363749"
  - title: "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I"
    url: "https://doi.org/10.1145/367177.367199"
    year: 1960
    arxiv: null
    doi: "10.1145/367177.367199"
  - title: "The Calculi of Lambda-Conversion"
    url: "https://press.princeton.edu/books/paperback/9780691083940/the-calculi-of-lambda-conversion"
    year: 1941
    arxiv: null
    doi: null
see:
  - "617-the-mechanical-evaluation-of-expressions"
  - "618-a-correspondence-between-algol-60-and-church-s-lambda-notati"
  - "575-recursive-functions-of-symbolic-expressions-and-their-comput"
  - "511-the-calculi-of-lambda-conversion"
---

# The Next 700 Programming Languages

## One-sentence takeaway

Landin argues that the next 700 languages should share one semantic core — ISWIM, i.e. applied λ-calculus with a thin syntactic skin — rather than each inventing a new evaluator.

## Why it matters here

Prophecy of language families sharing semantics. Ano as an array/ECS skin over a small core is exactly this program; off-side layout and `where` clauses are ISWIM fossils still in Haskell/Python.

## Key ideas

- ISWIM ("If You See What I Mean"): λ plus assignment and a few imperative conveniences, not a new calculus.
- The off-side rule: layout (indentation) as grouping, instead of begin/end noise.
- `where` / auxiliary definitions as the user-facing form of let-binding.
- Families of languages should differ in sugar and libraries, not in the underlying abstract machine.

## Caveats

## Links

- DOI: [10.1145/365230.365257](https://doi.org/10.1145/365230.365257)
