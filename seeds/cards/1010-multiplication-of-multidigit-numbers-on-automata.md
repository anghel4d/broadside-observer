---
title: Multiplication of Multidigit Numbers on Automata
authors:
- A. Karatsuba
- Yu. Ofman
year: 1962
venue: Soviet Physics Doklady
arxiv: null
doi: null
source: "https://en.wikipedia.org/wiki/Karatsuba_algorithm"
topics:
- karatsuba
- fast-multiplication
seed_rank: 1010
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: Schnelle Multiplikation grosser Zahlen
  url: "https://doi.org/10.1007/BF02242355"
  year: 1971
  arxiv: null
  doi: 10.1007/BF02242355
  card: 1011-schnelle-multiplikation-grosser-zahlen
- title: Gaussian Elimination is Not Optimal
  url: "https://doi.org/10.1007/BF02165411"
  year: 1969
  arxiv: null
  doi: 10.1007/BF02165411
  card: 1009-gaussian-elimination-is-not-optimal
---

# Multiplication of Multidigit Numbers on Automata

## One-sentence takeaway

Karatsuba O(n^log2(3)) multiplication via three half-size products.

## Why it matters here

First practical subquadratic multiply; still used under FFT thresholds.

## Key ideas

- Divide integers into halves.
- Three recursive multiplies plus shifts/adds.
- Beats schoolbook O(n^2).
- Ancestor of Toom-Cook and Schonhage-Strassen.

## Caveats

- Original note is short.
- FFT multiply wins for huge n.

## Links

- URL: https://en.wikipedia.org/wiki/Karatsuba_algorithm
