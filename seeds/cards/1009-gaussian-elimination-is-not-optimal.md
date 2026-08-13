---
title: Gaussian Elimination is Not Optimal
authors:
- Volker Strassen
year: 1969
venue: Numerische Mathematik
arxiv: null
doi: 10.1007/BF02165411
source: "https://doi.org/10.1007/BF02165411"
topics:
- matrix-multiplication
- strassen
seed_rank: 1009
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: An Algorithm for the Machine Calculation of Complex Fourier Series
  url: "https://doi.org/10.1090/S0025-5718-1965-0178586-1"
  year: 1965
  arxiv: null
  doi: 10.1090/S0025-5718-1965-0178586-1
  card: 1008-an-algorithm-for-the-machine-calculation-of-complex-fourier-
- title: Multiplication of Multidigit Numbers on Automata
  url: "https://en.wikipedia.org/wiki/Karatsuba_algorithm"
  year: 1962
  arxiv: null
  doi: null
  card: 1010-multiplication-of-multidigit-numbers-on-automata
---

# Gaussian Elimination is Not Optimal

## One-sentence takeaway

Strassen sub-cubic matrix multiplication opens the MM exponent omega.

## Why it matters here

Shows algebraic complexity can beat textbook O(n^3).

## Key ideas

- Seven multiplications for 2x2 blocks.
- omega < 3 via recursion.
- Launches modern fast MM research.
- Tradeoffs with stability and constants.

## Caveats

- Practical crossover n is large.
- Later omega improvements are often galactic.

## Links

- DOI: [10.1007/BF02165411](https://doi.org/10.1007/BF02165411)
- URL: https://doi.org/10.1007/BF02165411
