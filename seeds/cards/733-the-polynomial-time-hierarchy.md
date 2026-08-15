---
title: The Polynomial-Time Hierarchy
authors:
  - Larry J. Stockmeyer
year: 1976
venue: Theoretical Computer Science
arxiv: null
doi: 10.1016/0304-3975(76)90061-X
source: "https://doi.org/10.1016/0304-3975(76)90061-X"
topics:
  - complexity
  - polynomial-hierarchy
seed_rank: 733
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

# The Polynomial-Time Hierarchy

## One-sentence takeaway

The polynomial-time hierarchy is the scaled analogue of the arithmetic hierarchy: \(\Sigma_k^p\) / \(\Pi_k^p\) via alternating quantifiers or via NP oracles.

## Why it matters here

Hardness discussions above NP — “exists a layout such that for all opponent replies …” — live in PH. Stockmeyer is the map Anoptic should use before inventing a new class name for a quantified planning problem.

## Key ideas

- \(\Sigma_{k+1}^p = \mathrm{NP}^{\Sigma_k^p}\) and the complementary \(\Pi\) levels give the oracle characterization.
- Alternating \(\exists\forall\exists\ldots\) quantifiers over polynomial-size witnesses are the logical characterization.
- Collapse of any two levels has strong consequences (including, at the first level, P = NP).
- Cook’s NP-completeness is the \(k=1\) base; Meyer–Stockmeyer notes circulate slightly earlier, this TCS paper is the journal account.
- Theoretical Computer Science 3(1), 1976, pp. 1–22.

## Caveats

## Links

- DOI: [10.1016/0304-3975(76)90061-X](https://doi.org/10.1016/0304-3975(76)90061-X)
