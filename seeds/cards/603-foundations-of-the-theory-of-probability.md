---
title: "Foundations of the Theory of Probability"
authors:
  - "A. N. Kolmogorov"
year: 1933
venue: "Springer (Grundbegriffe der Wahrscheinlichkeitsrechnung); English Chelsea 1950"
arxiv: null
doi: "10.1007/978-3-642-49888-6"
source: "https://archive.org/details/foundationsofthe00kolm"
topics:
  - probability
  - measure-theory
  - kolmogorov
seed_rank: 603
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 10
lineage: foundations-of-computing
cites: []
see: []
---

# Foundations of the Theory of Probability

## One-sentence takeaway

Kolmogorov axiomatizes probability as a normalized measure on a σ-algebra, so chance becomes ordinary measure theory rather than a separate informal calculus.

## Why it matters here

This is the background ontology for stochastic sim, Monte Carlo in the engine, and the later algorithmic-randomness cards: without a measure space there is no well-defined "almost sure" for lockstep noise or agent priors.

## Key ideas

- Probability is a countably additive measure P with P(Ω) = 1 on a field of events.
- Conditional probability and independence are defined from the measure, not taken as primitives.
- Random variables are measurable functions; expectation is Lebesgue integration.
- Infinite product spaces and the strong law sit on the same axioms.
- Original German *Grundbegriffe* (Springer, 1933); standard English is Nathan Morrison's Chelsea translation (1950/1956).

## Caveats

## Links

- Springer reprint DOI: [10.1007/978-3-642-49888-6](https://doi.org/10.1007/978-3-642-49888-6)
- Chelsea English scan: https://archive.org/details/foundationsofthe00kolm
