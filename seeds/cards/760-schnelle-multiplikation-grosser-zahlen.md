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
seed_rank: 760
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
- title: Multiplication of Multidigit Numbers on Automata
  url: "https://www.mathnet.ru/eng/dan26729"
  year: 1962
  arxiv: null
  doi: null
see:
- "757-an-algorithm-for-the-machine-calculation-of-complex-fourier-"
- "759-multiplication-of-multidigit-numbers-on-automata"
---

# Schnelle Multiplikation grosser Zahlen

## One-sentence takeaway

Schönhage–Strassen multiply $n$-bit integers by FFT convolution over a Fermat ring, in $O(n\log n\log\log n)$ bit operations — the first near-linear integer multiply.

## Why it matters here

This is the asymptotic engine inside GMP-class big-int libraries once Karatsuba/Toom stop winning, and the conceptual parent of every NTT multiply an Anoptic/ano numeric path might grow into.

## Key ideas

- Integer multiplication is cyclic convolution of digit vectors, evaluated by a discrete Fourier transform.
- Working in $\mathbb{Z}/(2^{2^k}+1)\mathbb{Z}$ keeps twiddles as bit rotations, avoiding floating-point FFT error.
- The 1971 bound $O(n\log n\log\log n)$ stood until Fürer (2007) and Harvey–van der Hoeven (2019, $O(n\log n)$).
- Practical thresholds are huge; implementations are delicate about ring size and carry correction.

## Caveats

## Links

- DOI: [10.1007/BF02242355](https://doi.org/10.1007/BF02242355)
- URL: https://doi.org/10.1007/BF02242355
