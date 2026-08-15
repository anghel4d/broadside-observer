---
title: "Toward a Mathematical Semantics for Computer Languages"
authors:
  - "Dana Scott"
  - "Christopher Strachey"
year: 1971
venue: "Oxford PRG Technical Monograph 6 / Proc. Symposium on Computers and Automata"
arxiv: null
doi: null
source: "https://www.cs.ox.ac.uk/files/3228/PRG06.pdf"
topics:
  - denotational-semantics
  - domain-theory
  - scott
  - strachey
seed_rank: 612
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "Outline of a Mathematical Theory of Computation"
    url: "https://www.cs.ox.ac.uk/files/3229/PRG02.pdf"
    year: 1970
    arxiv: null
    doi: null
  - title: "Fundamental Concepts in Programming Languages"
    url: "https://doi.org/10.1023/A:1010000313106"
    year: 1967
    arxiv: null
    doi: "10.1023/A:1010000313106"
  - title: "The Next 700 Programming Languages"
    url: "https://doi.org/10.1145/365230.365257"
    year: 1966
    arxiv: null
    doi: "10.1145/365230.365257"
  - title: "The Mechanical Evaluation of Expressions"
    url: "https://doi.org/10.1093/comjnl/6.4.308"
    year: 1964
    arxiv: null
    doi: "10.1093/comjnl/6.4.308"
see:
  - "613-outline-of-a-mathematical-theory-of-computation"
  - "615-fundamental-concepts-in-programming-languages"
  - "616-the-next-700-programming-languages"
  - "617-the-mechanical-evaluation-of-expressions"
---

# Toward a Mathematical Semantics for Computer Languages

## One-sentence takeaway

Scott and Strachey give each phrase of a language a compositional mathematical meaning — a continuous function on domains — rather than an operational trace.

## Why it matters here

This is the denotational charter under Moggi monads and under any claim that ano has a meaning independent of a particular evaluator. Environments, stores, and command-as-state-transformer start here.

## Key ideas

- A semantic function ⟦−⟧ maps syntax to values in a domain, compositionally in the abstract syntax.
- Recursive definitions (loops, recursively defined procedures, recursive types) are least fixed points of continuous maps on complete lattices / cpos.
- Commands denote store-to-store functions; expressions denote environment-and-store-to-value functions.
- Oxford PRG-6 (1971) is the readable manifesto that pairs Scott's 1970 domain outline with Strachey's language vocabulary.

## Caveats

## Links

- Oxford PRG-6 PDF: https://www.cs.ox.ac.uk/files/3228/PRG06.pdf
