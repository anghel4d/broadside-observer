---
title: Multiplication of Multidigit Numbers on Automata
authors:
- A. Karatsuba
- Yu. Ofman
year: 1962
venue: Doklady Akademii Nauk SSSR / Soviet Physics Doklady
arxiv: null
doi: null
source: "https://www.mathnet.ru/eng/dan26729"
topics:
- karatsuba
- fast-multiplication
seed_rank: 759
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: maths-foundations
relevance_score: 8
lineage: algorithms-and-complexity
cites: []
see: []
---

# Multiplication of Multidigit Numbers on Automata

## One-sentence takeaway

Karatsuba–Ofman multiply two $n$-digit integers with three half-size products instead of four, giving the first practical $O(n^{\log_2 3})\approx O(n^{1.585})$ multiplication.

## Why it matters here

This is still the default big-int kernel below the FFT threshold in language runtimes and in any ano / Anoptic path that does large modular arithmetic or exact geometric predicates.

## Key ideas

- Split each operand into high and low halves; the cross term is recovered from $(a+b)(c+d)-ac-bd$, so only three recursive multiplies are required.
- Recurrence $T(n)=3T(n/2)+O(n)$ solves to $O(n^{\log_2 3})$, beating schoolbook $O(n^2)$.
- The note is two pages in *Doklady* 145:2 (1962); the English translation is *Soviet Physics Doklady* 7 (1963), 595–596.
- Direct ancestor of Toom–Cook (more parts) and of Schönhage–Strassen (FFT convolution).

## Caveats

## Links

- Math-Net.Ru: [dan26729](https://www.mathnet.ru/eng/dan26729)
- English Wikipedia overview: https://en.wikipedia.org/wiki/Karatsuba_algorithm
