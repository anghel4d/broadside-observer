---
title: "Computational Interpretations of Linear Logic"
authors:
  - "Samson Abramsky"
year: 1993
venue: "Theoretical Computer Science"
arxiv: null
doi: "10.1016/0304-3975(93)90181-R"
source: "https://doi.org/10.1016/0304-3975(93)90181-R"
topics:
  - linear-logic
  - concurrency
  - session-types
  - abramsky
  - semantics
seed_rank: 143
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "Linear logic"
    url: "https://doi.org/10.1016/0304-3975(87)90045-4"
    year: 1987
    arxiv: null
    doi: "10.1016/0304-3975(87)90045-4"
  - title: "Linear Types can Change the World!"
    url: "https://homepages.inf.ed.ac.uk/wadler/papers/linear/linear.ps"
    year: 1990
    arxiv: null
    doi: null
  - title: "Communicating Sequential Processes"
    url: null
    year: 1985
    arxiv: null
    doi: null
  - title: "Communication and Concurrency"
    url: null
    year: 1989
    arxiv: null
    doi: null
  - title: "The Lambda Calculus: Its Syntax and Semantics"
    url: "https://doi.org/10.1016/c2009-0-14341-6"
    year: 1984
    arxiv: null
    doi: "10.1016/c2009-0-14341-6"
  - title: "Call-by-name, call-by-value and the λ-calculus"
    url: "https://doi.org/10.1016/0304-3975(75)90017-1"
    year: 1975
    arxiv: null
    doi: "10.1016/0304-3975(75)90017-1"
see:
  - "040-linear-logic"
  - "046-communicating-sequential-processes"
  - "148-linear-types-can-change-the-world"
---

# Computational Interpretations of Linear Logic

## One-sentence takeaway

Curry–Howard for Girard's linear logic: intuitionistic LL is a resource-sensitive refinement of the λ-calculus that controls evaluation order and storage, while classical LL is a concurrent process calculus with Chemical Abstract Machine dynamics.

## Why it matters here

Proofs-as-processes is the bridge from linear types to session-shaped interaction; Broadside/ano concurrent agents inherit the idea that a typing is already a protocol.

## Key ideas

- The paper takes Girard's "logic well-suited to be the interface between logic and computer science" and supplies the missing attractive computational reading: propositions as types, proofs as programs, cut-elimination as computation.
- Intuitionistic linear logic yields a refined λ-calculus. Linearity gives finer control of evaluation order and storage allocation than intuitionistic logic, while keeping the "programs are proofs" invariant.
- Classical linear logic yields a concurrent-process interpretation whose operational semantics is in the style of Berry and Boudol's Chemical Abstract Machine (molecules floating in a solution, reactions when complementary agents meet).
- Two advertised payoffs: a new route to parallel implementation of functional languages, and concurrent programming whose correctness is guaranteed by the typing rather than by an extra model-check.
- The classical reading is the ancestor of later "propositions as sessions" work; Honda (1993) already cites the 1990 Imperial College technical report this journal paper expands.

## Caveats

## Links

- DOI: [10.1016/0304-3975(93)90181-R](https://doi.org/10.1016/0304-3975(93)90181-R)
- Oxford record / PostScript: https://www.cs.ox.ac.uk/publications/publication1872-abstract.html
- Author PS.GZ: https://www.cs.ox.ac.uk/files/296/cill.ps.gz
