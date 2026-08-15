---
title: IP = PSPACE
authors:
- Adi Shamir
year: 1992
venue: Journal of the ACM
arxiv: null
doi: 10.1145/146585.146609
source: "https://doi.org/10.1145/146585.146609"
topics:
- interactive-proofs
- ip-pspace
seed_rank: 802
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: Algebraic Methods for Interactive Proof Systems
  url: "https://doi.org/10.1145/146585.146605"
  year: 1992
  arxiv: null
  doi: 10.1145/146585.146605
- title: Relativizations of the P =? NP Question
  url: "https://doi.org/10.1137/0204037"
  year: 1975
  arxiv: null
  doi: 10.1137/0204037
see:
- "734-relativizations-of-the-p-np-question"
---

# IP = PSPACE

## One-sentence takeaway

Shamir shows that public-coin interactive proofs capture exactly PSPACE by arithmetizing quantified Boolean formulas so a polynomial-time verifier can check a #SAT-style sum-check over a finite field.

## Why it matters here

It is the cleanest demonstration that interaction plus randomness can certify computations far beyond NP — the same arithmetization later feeds PCPs, and it is the conceptual ancestor of “spot-check a huge trace” thinking that Broadside-style agents inherit whenever they outsource a long proof.

## Key ideas

- Lund–Fortnow–Karloff–Nisan had already put the polynomial hierarchy in IP; Shamir tightens the upper bound to PSPACE by handling alternating quantifiers.
- A QBF is rewritten as an arithmetic expression over a finite field; the prover claims the value of a low-degree multivariate polynomial, and the verifier reduces dimension one variable at a time.
- The protocol is public-coin: the verifier’s messages are just random field elements.
- The technique does not relativize, matching the Baker–Gill–Solovay lesson that oracle worlds cannot settle the interesting proof-system collapses.

## Caveats

## Links

- DOI: [10.1145/146585.146609](https://doi.org/10.1145/146585.146609)
- URL: https://doi.org/10.1145/146585.146609
