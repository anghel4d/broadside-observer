---
title: "Algorithm = Logic + Control"
authors:
  - "Robert A. Kowalski"
year: 1979
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/359131.359136"
source: "https://doi.org/10.1145/359131.359136"
topics:
  - logic-programming
  - kowalski
  - prolog
  - control
seed_rank: 678
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Predicate Logic as Programming Language"
    url: "https://www.doc.ic.ac.uk/~rak/papers/IFIP74.pdf"
    year: 1974
    arxiv: null
    doi: null
  - title: "Can Programming Be Liberated from the von Neumann Style? A Functional Style and Its Algebra of Programs"
    url: "https://doi.org/10.1145/359576.359579"
    year: 1978
    arxiv: null
    doi: "10.1145/359576.359579"
see:
  - "677-predicate-logic-as-programming-language"
  - "157-can-programming-be-liberated-from-the-von-neumann-style-a-fu"
---

# Algorithm = Logic + Control

## One-sentence takeaway

Kowalski separates the logic of an algorithm (what is true) from its control (how the deduction is scheduled), so you can change search without rewriting the clauses.

## Why it matters here

This is still the right split when embedding a query/planner DSL in ano or GRID COMMAND: keep the rule base stable and swap the control — backtracking, tabling, or a frame-budgeted search.

## Key ideas

- Hayes, Bibel, and Pratt had already said computation ≈ controlled deduction; Kowalski works out the programming consequences, including the Codd analogy (relational logic vs retrieval control).
- Prolog's operational reading (clause order, goal order, cut) is *one* control component, not the meaning of the logic.
- You improve a program by changing control while leaving the logic invariant — or by enriching the logic while keeping a fixed interpreter.
- CACM 22(7), July 1979, DOI 10.1145/359131.359136.

## Caveats

## Links

- DOI: [10.1145/359131.359136](https://doi.org/10.1145/359131.359136)
