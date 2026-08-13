---
title: An Algorithm for the Machine Calculation of Complex Fourier Series
authors:
- James W. Cooley
- John W. Tukey
year: 1965
venue: Mathematics of Computation
arxiv: null
doi: 10.1090/S0025-5718-1965-0178586-1
source: "https://doi.org/10.1090/S0025-5718-1965-0178586-1"
topics:
- fft
- cooley-tukey
seed_rank: 1030
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: Gaussian Elimination is Not Optimal
  url: "https://doi.org/10.1007/BF02165411"
  year: 1969
  arxiv: null
  doi: 10.1007/BF02165411
  card: 1031-gaussian-elimination-is-not-optimal
- title: Schnelle Multiplikation grosser Zahlen
  url: "https://doi.org/10.1007/BF02242355"
  year: 1971
  arxiv: null
  doi: 10.1007/BF02242355
  card: 1033-schnelle-multiplikation-grosser-zahlen
---

# An Algorithm for the Machine Calculation of Complex Fourier Series

## One-sentence takeaway

Cooley-Tukey FFT: n log n discrete Fourier transform.

## Why it matters here

Ubiquitous in signal processing, spectral methods, and fast convolutions.

## Key ideas

- Divide-and-conquer twiddle factorization.
- Radix-2 and general factorizations.
- DFT from O(n^2) to O(n log n).
- Enables fast polynomial multiply/convolution.

## Caveats

- Gauss had related ideas; Cooley-Tukey popularized the modern algorithm.
- Bit-reversal/stability are engineering concerns.

## Links

- DOI: [10.1090/S0025-5718-1965-0178586-1](https://doi.org/10.1090/S0025-5718-1965-0178586-1)
- URL: https://doi.org/10.1090/S0025-5718-1965-0178586-1
