---
title: "Predicate Logic as Programming Language"
authors:
  - "Robert A. Kowalski"
year: 1974
venue: "IFIP Congress"
arxiv: null
doi: null
source: "https://www.doc.ic.ac.uk/~rak/papers/IFIP74.pdf"
topics:
  - prolog
  - kowalski
  - logic-programming
  - horn-clauses
seed_rank: 677
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Algorithm = Logic + Control"
    url: "https://doi.org/10.1145/359131.359136"
    year: 1979
    arxiv: null
    doi: "10.1145/359131.359136"
see:
  - "678-algorithm-logic-control"
---

# Predicate Logic as Programming Language

## One-sentence takeaway

Kowalski's IFIP 74 paper reads a Horn clause `B if A1 and … and An` as a procedure: to solve B, solve the Ai — so a proof procedure *is* an interpreter.

## Why it matters here

This is why Prolog and Datalog sit on Broadside's languages shelf, and why a GRID COMMAND planner can treat a rule base as a program rather than as documentation.

## Key ideas

- Clausal form is the programming notation; a goal statement is a query; SLD-style resolution is the operational semantics.
- The procedural interpretation of implication is the manifesto; Colmerauer's Marseille Prolog is the contemporary implementation, not this paper.
- Computation = deduction under a control strategy — the slogan crystallized five years later as Algorithm = Logic + Control.
- IFIP Congress 1974, Stockholm, North-Holland, pp. 569–574. Author PDF on Kowalski's Imperial page.

## Caveats

## Links

- Author PDF: https://www.doc.ic.ac.uk/~rak/papers/IFIP74.pdf
