---
title: A Machine Program for Theorem-Proving
authors:
- Martin Davis
- George Logemann
- Donald Loveland
year: 1962
venue: Communications of the ACM
arxiv: null
doi: 10.1145/368273.368557
source: "https://doi.org/10.1145/368273.368557"
topics:
- sat
- dpll
seed_rank: 803
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: A Computing Procedure for Quantification Theory
  url: "https://doi.org/10.1145/321033.321034"
  year: 1960
  arxiv: null
  doi: 10.1145/321033.321034
see:
- "804-a-computing-procedure-for-quantification-theory"
- "724-the-complexity-of-theorem-proving-procedures"
---

# A Machine Program for Theorem-Proving

## One-sentence takeaway

Davis, Logemann, and Loveland replace Davis–Putnam’s memory-hungry variable elimination with a backtracking search that splits on a literal, applies unit propagation and pure-literal elimination, and is the direct ancestor of modern CDCL SAT solvers.

## Why it matters here

Verification, planning, and synthesis tools that Anoptic/GRID COMMAND might call still run a DPLL spine: watched literals and VSIDS are later engineering, but the split / propagate / backtrack skeleton is this 1962 program.

## Key ideas

- The Davis–Putnam resolution/elimination rule is swapped for chronological case-splitting so the procedure stays in roughly linear workspace.
- Unit clauses immediately force their remaining literal; pure literals can be assigned without search.
- The implementation is a concrete IBM 704 program for propositional theorem proving, not only a recurrences-on-paper algorithm.
- Cook’s later NP-completeness of SAT explains why the search is exponential in the worst case yet still the practical engine.

## Caveats

## Links

- DOI: [10.1145/368273.368557](https://doi.org/10.1145/368273.368557)
- URL: https://doi.org/10.1145/368273.368557
