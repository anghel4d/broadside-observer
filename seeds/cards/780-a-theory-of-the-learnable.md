---
title: A Theory of the Learnable
authors:
- Leslie G. Valiant
year: 1984
venue: Communications of the ACM
arxiv: null
doi: 10.1145/1968.1972
source: "https://doi.org/10.1145/1968.1972"
topics:
- pac-learning
- valiant
seed_rank: 780
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: "Probabilistic Computations: Toward a Unified Measure of Complexity"
  url: "https://doi.org/10.1109/SFCS.1977.24"
  year: 1977
  arxiv: null
  doi: 10.1109/SFCS.1977.24
- title: The Complexity of Computing the Permanent
  url: "https://doi.org/10.1016/0304-3975(79)90044-6"
  year: 1979
  arxiv: null
  doi: 10.1016/0304-3975(79)90044-6
see:
- "779-probabilistic-computations-toward-a-unified-measure-of-compl"
- "809-the-complexity-of-computing-the-permanent"
---

# A Theory of the Learnable

## One-sentence takeaway

Valiant’s PAC model says a concept class is learnable if a polynomial-time algorithm, given samples from any distribution, returns a hypothesis that is $\varepsilon$-accurate with probability $1-\delta$.

## Why it matters here

This is the vocabulary for sample complexity whenever Broadside, GRID COMMAND, or an Anoptic agent claims to “learn” a classifier from traces rather than just fit a net.

## Key ideas

- Two parameters: accuracy $\varepsilon$ (how far the hypothesis may be from the target) and confidence $\delta$ (how often the draw may be unlucky).
- Both sample size and running time must be polynomial in $1/\varepsilon$, $1/\delta$, and the representation size.
- Learnability is a property of a *class* of concepts, not of a single function.
- The framework seeds VC-dimension sample bounds, Occam algorithms, and later boosting theory.

## Caveats

## Links

- DOI: [10.1145/1968.1972](https://doi.org/10.1145/1968.1972)
- URL: https://doi.org/10.1145/1968.1972
