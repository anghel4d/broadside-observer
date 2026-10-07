---
title: "Operators"
authors:
  - "Kenneth E. Iverson"
year: 1979
venue: "ACM TOPLAS"
arxiv: null
doi: "10.1145/357073.357074"
source: "https://dl.acm.org/doi/10.1145/357073.357074"
topics:
  - array-programming-apl-bqn-q
seed_rank: 156
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "A Programming Language"
    url: "https://www.jsoftware.com/papers/APL.htm"
    year: 1962
    arxiv: null
    doi: null
  - title: "The Design of APL"
    url: "https://doi.org/10.1147/rd.174.0324"
    year: 1973
    arxiv: null
    doi: "10.1147/rd.174.0324"
  - title: "The evolution of APL"
    url: "https://doi.org/10.1145/800025.1198423"
    year: 1978
    arxiv: null
    doi: "10.1145/800025.1198423"
  - title: "The role of operators in APL"
    url: "https://doi.org/10.1145/390009.804450"
    year: 1979
    arxiv: null
    doi: "10.1145/390009.804450"
  - title: "The derivative operator"
    url: "https://doi.org/10.1145/390009.804486"
    year: 1979
    arxiv: null
    doi: "10.1145/390009.804486"
---

# Operators

## One-sentence takeaway

Iverson treats APL operators as higher-order constructors that take functions (and sometimes arrays) and produce new functions — reduction, scan, inner/outer product, and axis are the canonical cases.

## Why it matters here

Ano's fold, scan, mask, and conjugation are this operator layer over columnar arrays: the primitive is a function, the combinator is an operator, and the language should not collapse the two.

## Key ideas

- Functions map arrays to arrays; operators map functions (and sometimes data) to functions, so `/`, `\`, `.`, and `∘.` are not just more primitives.
- Reduction and scan are the sequential and prefix operators on a binary function; inner and outer product are the two-dimensional relatives.
- Axis and related operators reorient which dimension a function acts on without rewriting the function.
- The paper develops both the algebraic identities these operators obey and the practical notation that keeps them first-class.
- Distinguishing operator from function is what lets a small vocabulary generate a large space of array programs.

## Caveats

## Links

- DOI: [10.1145/357073.357074](https://doi.org/10.1145/357073.357074)
- ACM: https://dl.acm.org/doi/10.1145/357073.357074
