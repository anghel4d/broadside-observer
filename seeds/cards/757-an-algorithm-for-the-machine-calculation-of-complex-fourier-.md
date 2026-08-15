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
seed_rank: 757
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 10
lineage: algorithms-and-complexity
cites: []
see: []
---

# An Algorithm for the Machine Calculation of Complex Fourier Series

## One-sentence takeaway

Cooley–Tukey factors an $N$-point DFT into smaller DFTs when $N$ is composite, cutting the arithmetic from $O(N^2)$ to $O(N\log N)$ via twiddle-factor butterflies.

## Why it matters here

FFT is the convolution engine for Anoptic audio, bloom/filter banks, spectral GI debug, and the fast polynomial multiply sitting under big-integer and NTT paths.

## Key ideas

- If $N = r_1 r_2$, the transform splits into $r_1$ transforms of length $r_2$ (or vice versa) glued by $W_N^{jk}$ twiddles.
- Radix-2 is the familiar case: even/odd decimation, $\frac{N}{2}\log_2 N$ complex multiplies in the idealized count.
- The same factorization gives fast circular convolution and therefore fast polynomial and large-integer multiplication.
- The paper is the machine-oriented popularization; Gauss had a related factorization, but this is the algorithm that entered numerical software.

## Caveats

## Links

- DOI: [10.1090/S0025-5718-1965-0178586-1](https://doi.org/10.1090/S0025-5718-1965-0178586-1)
- URL: https://doi.org/10.1090/S0025-5718-1965-0178586-1
