---
title: Schnelle Multiplikation grosser Zahlen
authors:
- A. Schönhage
- V. Strassen
year: 1971
venue: Computing
arxiv: null
doi: 10.1007/BF02242355
source: "https://doi.org/10.1007/BF02242355"
topics:
- schoenhage-strassen
- fft
seed_rank: 1033
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: An Algorithm for the Machine Calculation of Complex Fourier Series
  url: "https://doi.org/10.1090/S0025-5718-1965-0178586-1"
  year: 1965
  arxiv: null
  doi: 10.1090/S0025-5718-1965-0178586-1
  card: 1030-an-algorithm-for-the-machine-calculation-of-complex-fourier-
- title: Multiplication of Multidigit Numbers on Automata
  url: "https://en.wikipedia.org/wiki/Karatsuba_algorithm"
  year: 1962
  arxiv: null
  doi: null
  card: 1032-multiplication-of-multidigit-numbers-on-automata
---

# Schnelle Multiplikation grosser Zahlen

## One-sentence takeaway

Schonhage-Strassen integer multiplication via FFT — near-linear multiplication.

## Why it matters here

Classic asymptotic integer multiply used conceptually in big-int libraries.

## Key ideas

- FFT convolution for integer multiply.
- O(n log n log log n) classic bound.
- Transfers DFT techniques to integers.
- Bridge to Furer / Harvey-van der Hoeven.

## Caveats

- Practical thresholds are huge.
- Implementation is delicate.

## Links

- DOI: [10.1007/BF02242355](https://doi.org/10.1007/BF02242355)
- URL: https://doi.org/10.1007/BF02242355
