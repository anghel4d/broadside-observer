---
title: "A Formal Theory of Inductive Inference, Parts I–II"
authors:
  - "R. J. Solomonoff"
year: 1964
venue: "Information and Control"
arxiv: null
doi: "10.1016/S0019-9958(64)90131-7"
source: "https://doi.org/10.1016/S0019-9958(64)90131-7"
topics:
  - algorithmic-probability
  - solomonoff
  - induction
  - agi
seed_rank: 610
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "A Mathematical Theory of Communication"
    url: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"
    year: 1948
    arxiv: null
    doi: "10.1002/j.1538-7305.1948.tb01338.x"
  - title: "Prediction and Entropy of Printed English"
    url: "https://doi.org/10.1002/j.1538-7305.1951.tb01366.x"
    year: 1951
    arxiv: null
    doi: "10.1002/j.1538-7305.1951.tb01366.x"
  - title: "Computing Machinery and Intelligence"
    url: "https://doi.org/10.1093/mind/LIX.236.433"
    year: 1950
    arxiv: null
    doi: "10.1093/mind/LIX.236.433"
see:
  - "553-a-mathematical-theory-of-communication"
  - "558-prediction-and-entropy-of-printed-english"
  - "519-computing-machinery-and-intelligence"
---

# A Formal Theory of Inductive Inference, Parts I–II

## One-sentence takeaway

Solomonoff puts a universal prior on programs — M(x) = Σ_{U(p)=x*} 2^{−|p|} — and treats induction as Bayesian prediction under that prior.

## Why it matters here

Conceptual ancestor of every "compression = intelligence" and universal-agent story in the agents pool: GRID COMMAND / Broadside agents that prefer short explanations of traces are approximating this prior, not inventing a new one.

## Key ideas

- The universal a priori probability of a string is the mass of all programs that produce it (or a prefix of a continuation).
- Prediction of the next bit is Bayes with that prior; Occam's razor is the 2^{−|p|} weighting.
- Part I (DOI 10.1016/S0019-9958(64)90131-7) sets up the prior; Part II (DOI 10.1016/S0019-9958(64)90223-2) develops sequential prediction and applications.
- Shannon's printed-English prediction experiments are the empirical foil; Turing 1950 is the AI foil.

## Caveats

## Links

- Part I DOI: [10.1016/S0019-9958(64)90131-7](https://doi.org/10.1016/S0019-9958(64)90131-7)
- Part II DOI: [10.1016/S0019-9958(64)90223-2](https://doi.org/10.1016/S0019-9958(64)90223-2)
