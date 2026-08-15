---
title: A Maximization Technique Occurring in the Statistical Analysis of Probabilistic Functions of Markov Chains
authors:
- Leonard E. Baum
- Ted Petrie
- George Soules
- Norman Weiss
year: 1970
venue: Annals of Mathematical Statistics
arxiv: null
doi: 10.1214/aoms/1177697196
source: "https://doi.org/10.1214/aoms/1177697196"
topics:
- baum-welch
- hmm
- em
seed_rank: 777
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: Error Bounds for Convolutional Codes and an Asymptotically Optimum Decoding Algorithm
  url: "https://doi.org/10.1109/TIT.1967.1054010"
  year: 1967
  arxiv: null
  doi: 10.1109/TIT.1967.1054010
see:
- "776-error-bounds-for-convolutional-codes-and-an-asymptotically-o"
---

# A Maximization Technique Occurring in the Statistical Analysis of Probabilistic Functions of Markov Chains

## One-sentence takeaway

Baum–Welch trains a hidden Markov model by alternating a forward–backward E-step (expected transition and emission counts) with an M-step that renormalizes those counts, never decreasing observed-data likelihood.

## Why it matters here

This is the classic unsupervised sequence estimator sitting under GRID COMMAND order/speech models and any Anoptic tracker that still has an HMM before the neural net took over.

## Key ideas

- A probabilistic function of a Markov chain is today’s HMM: hidden transitions plus an emission distribution per state.
- Forward variables $\alpha_t(i)$ and backward variables $\beta_t(i)$ give posterior occupancy and pairwise transition counts in $O(T|\text{states}|^2)$.
- The re-estimation maps are an instance of expectation–maximization; each iteration is monotonically non-decreasing in likelihood.
- At inference time the trained model is usually decoded with Viterbi, not with the forward–backward posteriors.

## Caveats

## Links

- DOI: [10.1214/aoms/1177697196](https://doi.org/10.1214/aoms/1177697196)
- URL: https://doi.org/10.1214/aoms/1177697196
