---
title: Reaching Agreement in the Presence of Faults
authors:
- M. Pease
- R. Shostak
- L. Lamport
year: 1980
venue: Journal of the ACM
arxiv: null
doi: 10.1145/322186.322188
source: "https://doi.org/10.1145/322186.322188"
topics:
- distributed-systems
- byzantine
- consensus
seed_rank: 792
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites: []
see: []
---

# Reaching Agreement in the Presence of Faults

## One-sentence takeaway

Pease–Shostak–Lamport formalize interactive consistency for $n$ processors with $f$ arbitrary faults and prove that $n\ge 3f+1$ is necessary and sufficient in the unauthenticated synchronous model.

## Why it matters here

This 1980 JACM paper is the theorem; the 1982 *Byzantine Generals* paper is the story. Cite this one for the interactive-consistency conditions GRID COMMAND or Broadside BFT reasoning actually uses.

## Key ideas

- Interactive consistency: every nonfaulty processor computes the same vector $(v_1,\ldots,v_n)$, and $v_i$ equals processor $i$’s private value whenever $i$ is nonfaulty.
- Sufficiency: a recursive exchange of values along all paths of length $f+1$, followed by majority, works when $n>3f$.
- Necessity: with $n\le 3f$ the faulty set can partition the loyal processors so they cannot distinguish who is lying.
- The model is synchronous rounds with reliable (but forgeable) messages — the oral Byzantine model later named in TOPLAS.

## Caveats

## Links

- DOI: [10.1145/322186.322188](https://doi.org/10.1145/322186.322188)
- URL: https://doi.org/10.1145/322186.322188
