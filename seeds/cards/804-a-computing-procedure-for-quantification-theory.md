---
title: A Computing Procedure for Quantification Theory
authors:
- Martin Davis
- Hilary Putnam
year: 1960
venue: Journal of the ACM
arxiv: null
doi: 10.1145/321033.321034
source: "https://doi.org/10.1145/321033.321034"
topics:
- sat
- davis-putnam
seed_rank: 804
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: A Machine Program for Theorem-Proving
  url: "https://doi.org/10.1145/368273.368557"
  year: 1962
  arxiv: null
  doi: 10.1145/368273.368557
- title: The Complexity of Theorem-Proving Procedures
  url: "https://doi.org/10.1145/800157.805047"
  year: 1971
  arxiv: null
  doi: 10.1145/800157.805047
see:
- "803-a-machine-program-for-theorem-proving"
- "724-the-complexity-of-theorem-proving-procedures"
---

# A Computing Procedure for Quantification Theory

## One-sentence takeaway

Davis and Putnam give a ground-resolution procedure that decides propositional satisfiability by systematically eliminating variables, and then lift it to a Herbrand-based attack on first-order validity.

## Why it matters here

It is the immediate predecessor of DPLL: same unit and pure-literal rules, but elimination instead of search — the historical SAT root that later theorem provers and bounded model checkers still cite when they explain their propositional core.

## Key ideas

- Propositional SAT is decided by resolving on one variable at a time until the empty clause appears or the formula collapses to true.
- Unit propagation and pure-literal elimination are already present as simplifications before elimination.
- First-order validity is reduced to a sequence of ground instances via Herbrand’s theorem, so the propositional engine becomes a quantifier-free subroutine.
- The elimination rule can explode intermediate clause sets, which is exactly the defect DPLL later repairs by backtracking.

## Caveats

## Links

- DOI: [10.1145/321033.321034](https://doi.org/10.1145/321033.321034)
- URL: https://doi.org/10.1145/321033.321034
