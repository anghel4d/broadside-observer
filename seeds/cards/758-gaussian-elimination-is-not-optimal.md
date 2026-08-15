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
seed_rank: 758
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: Multiplication of Multidigit Numbers on Automata
  url: "https://en.wikipedia.org/wiki/Karatsuba_algorithm"
  year: 1962
  arxiv: null
  doi: null
see:
- "759-multiplication-of-multidigit-numbers-on-automata"
---

# Gaussian Elimination is Not Optimal

## One-sentence takeaway

Strassen multiplies $2\times 2$ blocks with seven multiplications instead of eight, so recursive block multiplication runs in $O(n^{\log_2 7})\approx O(n^{2.807})$ and the matrix-multiplication exponent $\omega$ is strictly less than 3.

## Why it matters here

It is the existence proof that textbook $O(n^3)$ linear algebra is not the last word — relevant whenever ano or Anoptic numeric kernels treat large GEMM as a cost model rather than a law.

## Key ideas

- The $2\times 2$ identity uses seven bilinear products and eighteen additions; recursion on even $n$ yields $\omega\le\log_2 7$.
- Inversion, determinant, and $LU$ inherit the same exponent: Gaussian elimination is not optimal for those either.
- The paper opens the modern hunt for $\omega$, later improved by Pan, Coppersmith–Winograd, and subsequent galactic algorithms.
- Numerical stability and addition overhead set a large practical crossover against tuned $n^3$ GEMM.

## Caveats

## Links

- DOI: [10.1007/BF02165411](https://doi.org/10.1007/BF02165411)
- URL: https://doi.org/10.1007/BF02165411
