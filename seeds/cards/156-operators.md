---
title: "Operators"
authors:
  - "Kenneth E. Iverson"
year: 1979
venue: "ACM TOPLAS"
arxiv: null
doi: "10.1145/357062.357064"
source: "https://dl.acm.org/doi/10.1145/357062.357064"
topics:
  - array-programming-apl-bqn-q
seed_rank: 156
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "The Design and Analysis of Computer Algorithms"
    url: "https://openalex.org/W1655990431"
    year: 1974
    arxiv: null
    doi: null
  - title: "Automatic data structure selection in SETL"
    url: "https://doi.org/10.1145/567752.567771"
    year: 1979
    arxiv: null
    doi: "10.1145/567752.567771"
  - title: "Automatic data structure choice in a language of very high level"
    url: "https://doi.org/10.1145/361227.361235"
    year: 1975
    arxiv: null
    doi: "10.1145/361227.361235"
  - title: "Optimization of very high level languages—I"
    url: "https://doi.org/10.1016/0096-0551(75)90015-6"
    year: 1975
    arxiv: null
    doi: "10.1016/0096-0551(75)90015-6"
  - title: "Automatic Coding: Choice of Data Structures"
    url: "https://doi.org/10.1007/978-3-0348-5504-4"
    year: 1976
    arxiv: null
    doi: "10.1007/978-3-0348-5504-4"
  - title: "Review of On programming"
    url: "https://doi.org/10.1145/953220.953221"
    year: 1974
    arxiv: null
    doi: "10.1145/953220.953221"
  - title: "An introduction to the set theoretical language SETL"
    url: "https://doi.org/10.1016/0898-1221(75)90011-5"
    year: 1975
    arxiv: null
    doi: "10.1016/0898-1221(75)90011-5"
  - title: "Optimization of very high level languages—II. Deducing relationships of inclusion and membership"
    url: "https://doi.org/10.1016/0096-0551(75)90031-4"
    year: 1975
    arxiv: null
    doi: "10.1016/0096-0551(75)90031-4"
  - title: "Interprocedural Data Flow Analysis."
    url: "https://dblp.uni-trier.de/db/conf/ifip/ifip74.html#Allen74"
    year: 1974
    arxiv: null
    doi: null
  - title: "A Basis for Program Optimization."
    url: "https://dblp.uni-trier.de/db/conf/ifip/ifip71-1.html#Allen71"
    year: 1971
    arxiv: null
    doi: null
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

- DOI: [10.1145/357062.357064](https://doi.org/10.1145/357062.357064)
- ACM: https://dl.acm.org/doi/10.1145/357062.357064
