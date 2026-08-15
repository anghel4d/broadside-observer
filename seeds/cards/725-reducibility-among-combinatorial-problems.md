---
title: Reducibility Among Combinatorial Problems
authors:
  - Richard M. Karp
year: 1972
venue: Complexity of Computer Computations
arxiv: null
doi: 10.1007/978-1-4684-2001-2_9
source: "https://doi.org/10.1007/978-1-4684-2001-2_9"
topics:
  - complexity
  - np-completeness
  - karp
seed_rank: 725
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 10
lineage: algorithms-and-complexity
cites:
  - title: The Complexity of Theorem-Proving Procedures
    url: "https://doi.org/10.1145/800157.805047"
    year: 1971
    arxiv: null
    doi: 10.1145/800157.805047
see:
  - "724-the-complexity-of-theorem-proving-procedures"
---

# Reducibility Among Combinatorial Problems

## One-sentence takeaway

Twenty-one combinatorial problems — including clique, Hamiltonian cycle, chromatic number, and knapsack — are NP-complete by polynomial reductions from SAT.

## Why it matters here

This is the catalogue that made NP-completeness an engineering reflex: if your GRID COMMAND subproblem looks like one of Karp’s 21, you stop looking for an exact poly-time algorithm and start approximating, restricting, or SAT-encoding.

## Key ideas

- Many-one polynomial reductions are the proof pattern: transform instances, not algorithms.
- The list includes SAT variants, clique/independent set/vertex cover, Hamiltonian cycle, chromatic number, knapsack, exact cover, and Steiner tree.
- Cook’s SAT-completeness is the single source; each new problem is a reduction, not a new tableau encoding.
- The paper is the template Garey & Johnson later encyclopedize.
- In *Complexity of Computer Computations*, Plenum, 1972, pp. 85–103.

## Caveats

## Links

- DOI: [10.1007/978-1-4684-2001-2_9](https://doi.org/10.1007/978-1-4684-2001-2_9)
- Springer: https://link.springer.com/chapter/10.1007/978-1-4684-2001-2_9
