---
title: "Probabilistic Computations: Toward a Unified Measure of Complexity"
authors:
- Andrew Chi-Chih Yao
year: 1977
venue: 18th Annual Symposium on Foundations of Computer Science
arxiv: null
doi: 10.1109/SFCS.1977.24
source: "https://doi.org/10.1109/SFCS.1977.24"
topics:
- yao-minimax
- randomized-algorithms
seed_rank: 779
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 9
lineage: algorithms-and-complexity
cites: []
see: []
---

# Probabilistic Computations: Toward a Unified Measure of Complexity

## One-sentence takeaway

Yao’s minimax principle equates the worst-case cost of a randomized algorithm with the expected cost of the best deterministic algorithm on the hardest input distribution.

## Why it matters here

This is the standard lower-bound tool for randomized data structures and communication in Anoptic/ano algorithms: pick a hard distribution, analyze only deterministic algorithms, conclude about randomness.

## Key ideas

- Distributional complexity $\max_D\min_{\text{det }A}\mathbb{E}_{x\sim D}[\text{cost}(A,x)]$ equals randomized worst-case complexity.
- The proof is von Neumann minimax applied to the finite payoff matrix of algorithms versus inputs.
- To prove a randomized lower bound it is enough to exhibit one distribution on which every deterministic algorithm is expensive.
- The same swap is the workhorse of communication-complexity and decision-tree lower bounds.

## Caveats

## Links

- DOI: [10.1109/SFCS.1977.24](https://doi.org/10.1109/SFCS.1977.24)
- URL: https://doi.org/10.1109/SFCS.1977.24
