---
title: The Complexity of Computing the Permanent
authors:
- Leslie G. Valiant
year: 1979
venue: Theoretical Computer Science
arxiv: null
doi: 10.1016/0304-3975(79)90044-6
source: "https://doi.org/10.1016/0304-3975(79)90044-6"
topics:
- counting-complexity
- permanent
- sharp-p
seed_rank: 809
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 9
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

# The Complexity of Computing the Permanent

## One-sentence takeaway

Valiant defines #P and proves that computing the permanent of a 0-1 matrix — equivalently, counting perfect matchings in a bipartite graph — is #P-complete, even though the determinant of the same matrix is in P.

## Why it matters here

Decision NP-completeness does not tell you the cost of counting solutions. Matchings, parse forests, and “how many plans satisfy this GRID COMMAND constraint” sit on the permanent side of that split; determinant-style cancellation is the rare algebraic gift, not the default.

## Key ideas

- #P is the class of functions that count accepting paths of a polynomial-time nondeterministic Turing machine.
- A parsimonious-style reduction from counting satisfying assignments shows the permanent is #P-hard; it is obviously in #P.
- The determinant is a signed permanent: the sign pattern is what makes Gaussian elimination work, and dropping the signs restores hardness.
- The paper founds counting complexity; Toda’s theorem and Jerrum–Sinclair–Vigoda approximation of the permanent are later chapters.

## Caveats

## Links

- DOI: [10.1016/0304-3975(79)90044-6](https://doi.org/10.1016/0304-3975(79)90044-6)
- URL: https://doi.org/10.1016/0304-3975(79)90044-6
