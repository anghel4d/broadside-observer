---
title: "The Design of APL"
authors:
  - "A. D. Falkoff"
  - "K. E. Iverson"
year: 1973
venue: "IBM Journal of Research and Development"
arxiv: null
doi: "10.1147/rd.174.0324"
source: "https://www.jsoftware.com/papers/APLDesign.htm"
topics:
  - array-programming-apl-bqn-q
seed_rank: 159
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "A programming language"
    url: "https://doi.org/10.1145/1460833.1460872"
    year: 1962
    arxiv: null
    doi: "10.1145/1460833.1460872"
  - title: "Axioms and Theorems for a Theory of Arrays"
    url: "https://doi.org/10.1147/rd.172.0135"
    year: 1973
    arxiv: null
    doi: "10.1147/rd.172.0135"
  - title: "General Arrays, Operators and Functions"
    url: "https://doi.org/10.1147/rd.174.0335"
    year: 1973
    arxiv: null
    doi: "10.1147/rd.174.0335"
  - title: "System Formulation and APL Shared Variables"
    url: "https://doi.org/10.1147/rd.174.0353"
    year: 1973
    arxiv: null
    doi: "10.1147/rd.174.0353"
  - title: "Elementary Functions: An Algorithmic Treatment."
    url: "https://doi.org/10.2307/2318146"
    year: 1970
    arxiv: null
    doi: "10.2307/2318146"
  - title: "A formal description of SYSTEM/360"
    url: "https://doi.org/10.1147/sj.32.0198"
    year: 1964
    arxiv: null
    doi: "10.1147/sj.32.0198"
  - title: "The APL\\360 Terminal System"
    url: "https://doi.org/10.1016/b978-0-12-395608-8.50007-4"
    year: 1968
    arxiv: null
    doi: "10.1016/b978-0-12-395608-8.50007-4"
  - title: "Formalism in programming languages"
    url: "https://doi.org/10.1145/363921.363933"
    year: 1964
    arxiv: null
    doi: "10.1145/363921.363933"
  - title: "Algorithms for Parallel-Search Memories"
    url: "https://doi.org/10.1145/321138.321147"
    year: 1962
    arxiv: null
    doi: "10.1145/321138.321147"
  - title: "Experimental personalized array translator system"
    url: "https://doi.org/10.1145/364520.364573"
    year: 1964
    arxiv: null
    doi: "10.1145/364520.364573"
  - title: "Algebra an Algorithmic Treatment"
    url: "https://openalex.org/W1507669282"
    year: 1977
    arxiv: null
    doi: null
see:
  - "049-a-programming-language"
---

# The Design of APL

## One-sentence takeaway

Falkoff and Iverson recount how APL grew from executable mathematical notation into an interactive language, and they state the design principles — uniformity, residual notation, arrays as the only data — that kept the primitive set small.

## Why it matters here

Ano's fold/scan/mask layer inherits these choices: one array datatype, operators that act uniformly on any rank, and notation that stays executable rather than becoming a separate comment language.

## Key ideas

- APL begins as Iverson's 1962 notation and becomes a language once it is implemented as APL\360 with an interactive terminal loop.
- Design aims include residual notation (a program remains a readable expression), a single array datatype, and a small set of primitives closed under operators.
- Identity elements, fill, and empty-array behaviour are treated as part of the design, not as later edge cases.
- Shared variables and the workspace model are how APL talks to the outside world without abandoning the array algebra.
- The paper is a design history: every primitive is justified as notation first, implementation second.

## Caveats

## Links

- Reprint: https://www.jsoftware.com/papers/APLDesign.htm
- DOI: [10.1147/rd.174.0324](https://doi.org/10.1147/rd.174.0324)
