---
title: "Fundamental Concepts in Programming Languages"
authors:
  - "Christopher Strachey"
year: 1967
venue: "Lecture notes (Copenhagen); Higher-Order and Symbolic Computation 13, 2000"
arxiv: null
doi: "10.1023/A:1010000313106"
source: "https://doi.org/10.1023/A:1010000313106"
topics:
  - strachey
  - semantics
  - l-value
  - r-value
  - cpl
seed_rank: 615
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "A Correspondence Between ALGOL 60 and Church's Lambda-Notation"
    url: "https://doi.org/10.1145/363744.363749"
    year: 1965
    arxiv: null
    doi: "10.1145/363744.363749"
  - title: "The Next 700 Programming Languages"
    url: "https://doi.org/10.1145/365230.365257"
    year: 1966
    arxiv: null
    doi: "10.1145/365230.365257"
  - title: "Report on the Algorithmic Language ALGOL 60"
    url: "https://doi.org/10.1145/367236.367262"
    year: 1960
    arxiv: null
    doi: "10.1145/367236.367262"
see:
  - "618-a-correspondence-between-algol-60-and-church-s-lambda-notati"
  - "616-the-next-700-programming-languages"
  - "623-report-on-the-algorithmic-language-algol-60"
---

# Fundamental Concepts in Programming Languages

## One-sentence takeaway

Strachey names the working parts of an imperative language — L-values vs R-values, environments, stores, and the distinction between binding and assignment.

## Why it matters here

Still the words compilers and semanticists use. Anoptic/ano assignment into SoA rows is an L-value story; GRID COMMAND bindings are an environment story. Pair with Landin and Scott–Strachey.

## Key ideas

- An L-value is a location (something assignable); an R-value is the contents of a location.
- Environments map identifiers to denotations; the store maps locations to values — two different "memories".
- First-class functions, parametric polymorphism, and CPL-era features are already discussed as semantic problems.
- 1967 Copenhagen lectures; the citable text is the HOSC 13 (2000) reprint, DOI 10.1023/A:1010000313106.

## Caveats

## Links

- HOSC reprint DOI: [10.1023/A:1010000313106](https://doi.org/10.1023/A:1010000313106)
