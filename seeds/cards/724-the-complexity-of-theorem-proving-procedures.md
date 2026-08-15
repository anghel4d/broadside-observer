---
title: The Complexity of Theorem-Proving Procedures
authors:
  - Stephen A. Cook
year: 1971
venue: STOC
arxiv: null
doi: 10.1145/800157.805047
source: "https://doi.org/10.1145/800157.805047"
topics:
  - complexity
  - np-completeness
  - sat
seed_rank: 724
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 10
lineage: algorithms-and-complexity
cites:
  - title: A Machine Program for Theorem-Proving
    url: "https://doi.org/10.1145/368273.368557"
    year: 1962
    arxiv: null
    doi: 10.1145/368273.368557
  - title: On the Computational Complexity of Algorithms
    url: "https://doi.org/10.1090/S0002-9947-1965-0170805-7"
    year: 1965
    arxiv: null
    doi: 10.1090/S0002-9947-1965-0170805-7
see:
  - "803-a-machine-program-for-theorem-proving"
  - "728-on-the-computational-complexity-of-algorithms"
---

# The Complexity of Theorem-Proving Procedures

## One-sentence takeaway

Boolean satisfiability is NP-complete: every language decidable in nondeterministic polynomial time reduces in polynomial time to SAT.

## Why it matters here

Any Anoptic claim that a planner, layout, or packing problem is “intractable” bottoms out here. Cook’s theorem is the root hardness result; Karp’s 21 problems and Levin’s independent proof are the immediate sequels.

## Key ideas

- Polynomial-time (many-one) reducibility is the comparison tool between decision problems.
- A nondeterministic Turing-machine computation is encoded as a CNF whose satisfying assignments are accepting tableaux.
- SAT therefore captures the whole of NP; the paper launches the NP-completeness program.
- Davis–Putnam-style theorem-proving procedures and Hartmanis–Stearns complexity are the cited background.
- STOC 1971, pp. 151–158. Independently, Levin 1973.

## Caveats

## Links

- DOI: [10.1145/800157.805047](https://doi.org/10.1145/800157.805047)
- ACM: https://dl.acm.org/doi/10.1145/800157.805047
