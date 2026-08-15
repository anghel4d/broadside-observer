---
title: Universal Sequential Search Problems
authors:
  - Leonid A. Levin
year: 1973
venue: Problems of Information Transmission
arxiv: null
doi: null
source: "https://www.mathnet.ru/eng/ppi914"
topics:
  - complexity
  - levin
  - np-completeness
seed_rank: 726
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

# Universal Sequential Search Problems

## One-sentence takeaway

Several inversion/search problems — including SAT-like proof search and tiling — are universal for sequential search, independently establishing what the West calls NP-completeness, plus a dovetailing universal search algorithm.

## Why it matters here

Completes the Cook–Levin story: hardness arrived twice. Levin’s search framing (invert a poly-time function) and universal search (dovetail enumerations by runtime) are the Kolmogorov-complexity-adjacent reading, not just another SAT reduction.

## Key ideas

- A sequential search problem is universal if every problem of the same type reduces to it efficiently.
- Six classical problems are shown universal, including Boolean-function minimization, proof search, graph homomorphism/isomorphism, and tiling.
- Universal search spends time proportional to \(2^{K(p)} t(p)\) on the first program \(p\) that solves the instance — theoretically optimal, rarely the practical solver.
- Originally *Probl. Peredachi Inf.* 9(3), 1973, pp. 115–116; English *Problems of Information Transmission* 9(3), 1973, pp. 265–266.
- Cook 1971 is the independent Western counterpart.

## Caveats

## Links

- Math-Net: https://www.mathnet.ru/eng/ppi914
- English scan: https://lance.fortnow.com/papers/files/Levin%20Universal.pdf
- Expanded proofs: https://lance.fortnow.com/papers/files/Levin%20Universal%20with%20Proofs.pdf
