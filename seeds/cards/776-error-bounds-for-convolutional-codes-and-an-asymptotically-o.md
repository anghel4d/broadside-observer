---
title: Error Bounds for Convolutional Codes and an Asymptotically Optimum Decoding Algorithm
authors:
- Andrew J. Viterbi
year: 1967
venue: IEEE Transactions on Information Theory
arxiv: null
doi: 10.1109/TIT.1967.1054010
source: "https://doi.org/10.1109/TIT.1967.1054010"
topics:
- viterbi
- dynamic-programming
- hmm
seed_rank: 776
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: A Maximization Technique Occurring in the Statistical Analysis of Probabilistic Functions of Markov Chains
  url: "https://doi.org/10.1214/aoms/1177697196"
  year: 1970
  arxiv: null
  doi: 10.1214/aoms/1177697196
- title: Dynamic Programming
  url: "https://press.princeton.edu/books/paperback/9780691146683/dynamic-programming"
  year: 1957
  arxiv: null
  doi: null
see:
- "777-a-maximization-technique-occurring-in-the-statistical-analys"
- "805-dynamic-programming"
---

# Error Bounds for Convolutional Codes and an Asymptotically Optimum Decoding Algorithm

## One-sentence takeaway

Viterbi decoding finds the maximum-likelihood path through a convolutional-code trellis by add-compare-select, and the same DP later became the standard MAP path algorithm for HMMs.

## Why it matters here

This is the trellis shortest-path that GRID COMMAND sequence labelers, speech/command decoders, and any Anoptic HMM-style tracker still run: one column of states, keep the survivor.

## Key ideas

- A convolutional encoder is a finite-state machine; received symbols label edges of its time-unrolled trellis.
- At each depth the decoder retains, for every state, only the best path into that state (add-compare-select).
- The paper proves exponential error bounds that show the decoder is asymptotically optimum for convolutional codes.
- Replacing Hamming/Euclidean branch metrics with $\log p(\text{obs}\mid\text{state})$ yields Viterbi for hidden Markov models.

## Caveats

## Links

- DOI: [10.1109/TIT.1967.1054010](https://doi.org/10.1109/TIT.1967.1054010)
- URL: https://doi.org/10.1109/TIT.1967.1054010
