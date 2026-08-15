---
title: Relativizations of the P =? NP Question
authors:
  - Theodore Baker
  - John Gill
  - Robert Solovay
year: 1975
venue: SIAM J. Comput.
arxiv: null
doi: 10.1137/0204037
source: "https://doi.org/10.1137/0204037"
topics:
  - complexity
  - relativization
  - oracles
seed_rank: 734
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
see:
  - "724-the-complexity-of-theorem-proving-procedures"
---

# Relativizations of the P =? NP Question

## One-sentence takeaway

There are oracles \(A\) and \(B\) with \(\mathrm{P}^A = \mathrm{NP}^A\) and \(\mathrm{P}^B \ne \mathrm{NP}^B\), so any proof technique that relativizes cannot settle P vs NP.

## Why it matters here

Explains why diagonalization-style arguments that would also work in the presence of an arbitrary oracle cannot resolve the question Anoptic actually cares about. Later circuit and PCP methods exist precisely because of this barrier.

## Key ideas

- Relativization: give both P and NP machines the same oracle tape and ask the question again.
- One oracle construction collapses the classes; another separates them.
- Therefore a proof that goes through unchanged for every oracle is the wrong kind of proof.
- Cook’s unrelativized SAT-completeness is the problem being shown immune to this proof style.
- SIAM J. Comput. 4(4), 1975, pp. 431–442. Does not claim independence of P vs NP.

## Caveats

## Links

- DOI: [10.1137/0204037](https://doi.org/10.1137/0204037)
- SIAM: https://epubs.siam.org/doi/10.1137/0204037
