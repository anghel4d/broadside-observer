---
title: "A Discipline of Programming"
authors:
  - "Edsger W. Dijkstra"
year: 1976
venue: "Prentice-Hall"
arxiv: null
doi: null
source: "https://research.tue.nl/en/publications/a-discipline-of-programming/"
topics:
  - predicate-transformers
  - dijkstra
  - formal-methods
seed_rank: 590
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Guarded Commands, Nondeterminacy and Formal Derivation of Programs"
    url: "https://doi.org/10.1145/360933.360975"
    year: 1975
    arxiv: null
    doi: "10.1145/360933.360975"
  - title: "An Axiomatic Basis for Computer Programming"
    url: "https://doi.org/10.1145/363235.363259"
    year: 1969
    arxiv: null
    doi: "10.1145/363235.363259"
  - title: "Notes on Structured Programming"
    url: "https://www.cs.utexas.edu/users/EWD/ewd02xx/EWD249.PDF"
    year: 1970
    arxiv: null
    doi: null
see:
  - "591-guarded-commands-nondeterminacy-and-formal-derivation-of-pro"
  - "592-an-axiomatic-basis-for-computer-programming"
  - "589-notes-on-structured-programming"
---

# A Discipline of Programming

## One-sentence takeaway

Dijkstra develops weakest-precondition semantics and derives programs from their specifications by predicate calculation.

## Why it matters here

When ano or engine code is derived rather than debugged into existence, this 1976 book is the calculus: `wp(S,R)` as the meaning of statement `S`.

## Key ideas

- The weakest precondition `wp(S,R)` is the set of states from which `S` is guaranteed to terminate in `R`.
- Guarded commands (`if`/`do` with guarded alternatives) are the notation; nondeterminacy is a structured control idea.
- Chapters work examples — Dutch national flag, linear search, next permutation, convex hull — as derivations, not implementations first.
- Prentice-Hall Series in Automatic Computation, Englewood Cliffs, 1976, ISBN 0-13-215871-X, 217 pages.
- Chapter manuscripts are the EWD383–EWD468 sequence in the UT Austin archive.

## Caveats

## Links

- URL: https://research.tue.nl/en/publications/a-discipline-of-programming/
