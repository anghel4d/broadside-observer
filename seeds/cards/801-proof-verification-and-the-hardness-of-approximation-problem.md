---
title: Proof Verification and the Hardness of Approximation Problems
authors:
- Sanjeev Arora
- Carsten Lund
- Rajeev Motwani
- Madhu Sudan
- Mario Szegedy
year: 1998
venue: Journal of the ACM
arxiv: null
doi: 10.1145/278298.278306
source: "https://doi.org/10.1145/278298.278306"
topics:
- pcp-theorem
- hardness-of-approximation
seed_rank: 801
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: "Computers and Intractability: A Guide to the Theory of NP-Completeness"
  url: "https://en.wikipedia.org/wiki/Computers_and_Intractability"
  year: 1979
  arxiv: null
  doi: null
- title: Approximation Algorithms for Combinatorial Problems
  url: "https://doi.org/10.1016/S0022-0000(74)80044-9"
  year: 1974
  arxiv: null
  doi: 10.1016/S0022-0000(74)80044-9
- title: IP = PSPACE
  url: "https://doi.org/10.1145/146585.146609"
  year: 1992
  arxiv: null
  doi: 10.1145/146585.146609
see:
- "727-computers-and-intractability-a-guide-to-the-theory-of-np-com"
- "800-approximation-algorithms-for-combinatorial-problems"
- "802-ip-pspace"
---

# Proof Verification and the Hardness of Approximation Problems

## One-sentence takeaway

ALMSS prove NP ⊆ PCP[log n, O(1)]: every NP language has probabilistically checkable proofs that a verifier can accept or reject by reading O(1) randomly chosen bits after using O(log n) random coins, and the same machinery yields gap-producing reductions that make many approximation ratios NP-hard.

## Why it matters here

GRID COMMAND planning, matchmaking, and combinatorial search hit the same wall Johnson opened in 1974: once a problem is NP-hard, the interesting question is which approximation ratios are still easy. This paper is why “good enough” ratios are often themselves intractable, so Anoptic-side heuristics need explicit gap awareness rather than hoping a 2-approx always exists.

## Key ideas

- A PCP verifier tosses O(log n) coins, queries a constant number of proof bits, and accepts valid proofs with probability 1 while rejecting far-from-valid proofs with constant probability.
- The characterization NP = PCP[log n, O(1)] is obtained by arithmetizing NP computations and composing inner/outer proof systems so query complexity collapses to a constant.
- Gap-producing reductions turn the PCP soundness gap into inapproximability: for Max-3SAT, Clique, Chromatic Number, and Set Cover, beating certain constant or polylog ratios is already NP-hard.
- The argument sits on the interactive-proof arithmetization line (LFKN / Shamir) rather than on relativizing diagonalization.

## Caveats

## Links

- DOI: [10.1145/278298.278306](https://doi.org/10.1145/278298.278306)
- URL: https://doi.org/10.1145/278298.278306
