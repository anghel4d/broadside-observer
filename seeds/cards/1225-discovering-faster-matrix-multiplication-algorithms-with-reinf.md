---
title: "Discovering faster matrix multiplication algorithms with reinforcement learning"
authors:
  - "Alhussein Fawzi"
  - "Matej Balog"
  - "Aja Huang"
  - "Thomas Hubert"
  - "Bernardino Romera-Paredes"
  - "Mohammadamin Barekatain"
  - "Alexander Novikov"
  - "Francisco J. R. Ruiz"
  - "Julian Schrittwieser"
  - "Grzegorz Swirszcz"
  - "David Silver"
  - "Demis Hassabis"
  - "Pushmeet Kohli"
year: 2022
venue: "Nature"
arxiv: null
doi: "10.1038/s41586-022-05172-4"
source: "https://doi.org/10.1038/s41586-022-05172-4"
topics:
  - "algorithm-discovery"
  - "mathematical-reasoning"
seed_rank: 1225
seed_batch: "alpoge-math-2026-08-24"
reviewed: "2026-08-24"
pool: "agents"
relevance_score: 10
lineage: ai-mathematical-reasoning
cites:
  - title: "Mastering the game of Go without human knowledge"
    url: "https://doi.org/10.1038/nature24270"
    year: 2017
    arxiv: null
    doi: "10.1038/nature24270"
see:
  - "1224-mathematical-discoveries-from-program-search-with-large-langua"
---

# Discovering faster matrix multiplication algorithms with reinforcement learning

## One-sentence takeaway

AlphaTensor: AlphaZero on the tensor-decomposition game finds matrix-multiplication algorithms beating Strassen in relevant sizes, including a rank-47 algorithm for 4x4 over F_2 — algorithm discovery counted as math.

## Why it matters here

User: count AlphaTensor as math (yes). Named algorithm-discovery event, 2022 Nature.

## Problem

The bilinear complexity of matrix multiplication is a classical open problem. Human-designed improvements after Strassen are rare.

## Design

Cast tensor decomposition as a single-player game; AlphaZero-style RL; play in a factorisation space; extract explicit algorithms.

## Evidence

Nature 610, 47-53 (2022). DOI 10.1038/s41586-022-05172-4. Nature is the artifact.

## Limitations

Does not settle the exponent. Later AlphaEvolve (1231) improves 4x4 complex (48 scalar multiplies).

## Implications for Broadside

See FunSearch 1224 and AlphaEvolve 1231.

## Bottom line

Mint AlphaTensor Nature.

## Links

- DOI: [10.1038/s41586-022-05172-4](https://doi.org/10.1038/s41586-022-05172-4)
