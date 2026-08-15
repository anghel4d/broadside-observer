---
title: Dynamic Programming
authors:
- Richard Bellman
year: 1957
venue: Princeton University Press
arxiv: null
doi: null
source: "https://press.princeton.edu/books/paperback/9780691146683/dynamic-programming"
topics:
- dynamic-programming
- bellman
seed_rank: 805
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: A Dynamic Programming Approach to Sequencing Problems
  url: "https://doi.org/10.1145/321105.321111"
  year: 1962
  arxiv: null
  doi: 10.1145/321105.321111
- title: On a Routing Problem
  url: "https://doi.org/10.1090/qam/102435"
  year: 1958
  arxiv: null
  doi: 10.1090/qam/102435
- title: Error Bounds for Convolutional Codes and an Asymptotically Optimum Decoding Algorithm
  url: "https://doi.org/10.1109/TIT.1967.1054010"
  year: 1967
  arxiv: null
  doi: 10.1109/TIT.1967.1054010
see:
- "806-a-dynamic-programming-approach-to-sequencing-problems"
- "739-on-a-routing-problem"
- "776-error-bounds-for-convolutional-codes-and-an-asymptotically-o"
---

# Dynamic Programming

## One-sentence takeaway

Bellman’s 1957 monograph names the principle of optimality and turns sequential decision problems into functional equations whose solutions are computed by tabulating subproblems — the method later called dynamic programming.

## Why it matters here

Shortest paths, HMM decoding, inventory control, and GRID COMMAND-style action-value recurrences are all the same Bellman backup. Anoptic planners and ano sequence kernels inherit the “optimal substructure + overlapping subproblems” split from this book, including the curse of dimensionality that still bounds tabular RL.

## Key ideas

- An optimal policy has the property that remaining decisions are optimal from the state the first decision produces (principle of optimality).
- Sequential problems become functional equations; the book solves allocation, inventory, and control examples by tabulation rather than by expanding the full decision tree.
- State-space growth is named as the curse of dimensionality — the reason tabular DP needs structure or approximation.
- The same recurrences later specialize to Ford–Bellman routing, Held–Karp TSP, and Viterbi decoding.

## Caveats

## Links

- URL: https://press.princeton.edu/books/paperback/9780691146683/dynamic-programming
