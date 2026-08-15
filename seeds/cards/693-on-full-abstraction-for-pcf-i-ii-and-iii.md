---
title: "On Full Abstraction for PCF: I, II, and III"
authors:
  - "J. M. E. Hyland"
  - "C.-H. L. Ong"
year: 2000
venue: "Information and Computation"
arxiv: null
doi: "10.1006/inco.2000.2917"
source: "https://doi.org/10.1006/inco.2000.2917"
topics:
  - game-semantics
  - full-abstraction
  - pcf
  - hyland-ong
seed_rank: 693
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "LCF Considered as a Programming Language"
    url: "https://doi.org/10.1016/0304-3975(77)90044-5"
    year: 1977
    arxiv: null
    doi: "10.1016/0304-3975(77)90044-5"
  - title: "The Lazy Lambda Calculus"
    url: "https://www.cs.ox.ac.uk/people/samson.abramsky/lazy.pdf"
    year: 1990
    arxiv: null
    doi: null
  - title: "Domains for Denotational Semantics"
    url: "https://doi.org/10.1007/BFb0012801"
    year: 1982
    arxiv: null
    doi: "10.1007/BFb0012801"
see:
  - "657-lcf-considered-as-a-programming-language"
  - "692-the-lazy-lambda-calculus"
  - "656-domains-for-denotational-semantics"
---

# On Full Abstraction for PCF: I, II, and III

## One-sentence takeaway

Hyland and Ong give PCF a fully abstract model: a term denotes an *innocent* strategy in a dialogue game, and observational equivalence is equality of those strategies.

## Why it matters here

This is one of the two 2000 solutions to the full-abstraction problem Plotkin opened in 1977 — the reason a later Anoptic/ano denotational story can be intensional (plays, not continuous functions).

## Key ideas

- A type is a game (Opponent/Player moves); a term is a strategy; *innocence* restricts a strategy to depend only on the relevant view of the history, matching sequential functional computation.
- Composition is interaction plus hiding; the model is adequate and fully abstract for PCF without adding parallel-or or other non-definable functionals.
- The paper is three parts in one article: the games, the interpretation, and the definability/full-abstraction argument.
- *Information and Computation* 163, 2000, DOI 10.1006/inco.2000.2917. AJM is the independent contemporary solution.

## Caveats

## Links

- DOI: [10.1006/inco.2000.2917](https://doi.org/10.1006/inco.2000.2917)
