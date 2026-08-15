---
title: On the Structure of Polynomial Time Reducibility
authors:
  - Richard E. Ladner
year: 1975
venue: Journal of the ACM
arxiv: null
doi: 10.1145/321864.321877
source: "https://doi.org/10.1145/321864.321877"
topics:
  - complexity
  - ladner
  - np-intermediate
seed_rank: 735
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 8
lineage: algorithms-and-complexity
cites:
  - title: The Complexity of Theorem-Proving Procedures
    url: "https://doi.org/10.1145/800157.805047"
    year: 1971
    arxiv: null
    doi: 10.1145/800157.805047
  - title: Reducibility Among Combinatorial Problems
    url: "https://doi.org/10.1007/978-1-4684-2001-2_9"
    year: 1972
    arxiv: null
    doi: 10.1007/978-1-4684-2001-2_9
see:
  - "724-the-complexity-of-theorem-proving-procedures"
  - "725-reducibility-among-combinatorial-problems"
---

# On the Structure of Polynomial Time Reducibility

## One-sentence takeaway

Ladner’s theorem: if P ≠ NP then there are languages in NP that are neither in P nor NP-complete.

## Why it matters here

NP-hard vs P is not the only landscape. An intermediate GRID COMMAND problem might be neither efficiently solvable nor a legitimate target for a SAT reduction — Ladner says such languages exist (non-constructively) unless P = NP.

## Key ideas

- A delayed diagonalization constructs a language that is “sometimes SAT, sometimes easy,” blowing the reduction either way.
- The polynomial-time degrees inside NP are therefore rich if P ≠ NP: infinitely many incomparable intermediate degrees.
- Cook and Karp supply the complete problems the construction carefully avoids being equivalent to.
- The languages are artificial; natural candidates (graph isomorphism, etc.) need separate treatment.
- JACM 22(1), January 1975, pp. 155–171. (A TCS 1975 paper of similar title is a different Ladner work; this is the theorem.)

## Caveats

## Links

- DOI: [10.1145/321864.321877](https://doi.org/10.1145/321864.321877)
- ACM: https://dl.acm.org/doi/10.1145/321864.321877
