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
- title: The Complexity of Theorem-Proving Procedures
  url: "https://doi.org/10.1145/800157.805047"
  year: 1971
  arxiv: null
  doi: 10.1145/800157.805047
see:
- "804-a-computing-procedure-for-quantification-theory"
- "724-the-complexity-of-theorem-proving-procedures"
---

# A Machine Program for Theorem-Proving

## One-sentence takeaway

DPLL backtracking SAT procedure — ancestor of modern CDCL solvers.

## Why it matters here

Practical SAT spine behind verification, planning, and synthesis tools.

## Key ideas

- Unit propagation.
- Pure literal elimination.
- Chronological backtracking search.
- Root of MiniSat/Chaff lineage.

## Caveats

- CDCL watched literals/VSIDS are later.
- Worst-case exponential remains.

## Links

- DOI: [10.1145/368273.368557](https://doi.org/10.1145/368273.368557)
- URL: https://doi.org/10.1145/368273.368557
