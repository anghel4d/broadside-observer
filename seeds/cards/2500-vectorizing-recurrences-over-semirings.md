---
title: "Vectorizing Recurrences over Semirings"
authors:
  - "Yihong Zhang"
  - "Bala Vinaithirthan"
  - "Karima Ma"
  - "Zachary Tatlock"
  - "Maaz Bin Safeer Ahmad"
  - "Andrew Adams"
year: 2026
venue: "POPL 2027 (conditionally accepted); arXiv preprint (cs.PL)"
arxiv: "2611.02451"
doi: null
source: "https://arxiv.org/abs/2611.02451"
topics:
  - "array-languages"
  - "vectorization"
  - "semirings"
  - "scan"
  - "compilers"
seed_rank: 2500
seed_batch: "craft-2026-11-03"
reviewed: "2026-11-03"
pool: "languages"
relevance_score: 9
cites:
  - title: "Vectorizing Recurrences over Semirings"
    url: "https://arxiv.org/abs/2611.02451"
    year: 2026
    arxiv: "2611.02451"
    doi: null
see: ["307-scans-as-primitive-parallel-operations", "1571-prefix-sums-and-their-applications", "1154-single-pass-parallel-prefix-scan-with-decoupled-look-back"]
---

# Vectorizing Recurrences over Semirings

## One-sentence takeaway

Prefix sums, IIR filters, distance transforms, sequence alignment and many dynamic programs are all one equation \(F = A \otimes F \oplus G\) over a semiring, and a handful of algebraic identities on that form (dilation, fast associative scan, path decomposition, lifting mutual recurrences to kernel matrices) let the VecRec compiler emit SIMD C++ that runs up to an order of magnitude faster than the serial loop.

## Why it matters here

This is the scan primitive ano already leans on, generalised to any linear recurrence over any semiring, with a compiler that picks the vectorised form by profiling. Distance transforms, flow fields and influence maps in the RTS are min-plus recurrences, so ano could expose one recurrence form and lower it this way instead of shipping a hand-tuned kernel per case. The Halide pedigree (Andrew Adams) shows in how practical it is.

## Key ideas

- **One normal form.** A recurrence is a kernel of taps \(A\) convolved with its own output plus an input signal \(G\), parameterised by the semiring; plus-times gives filters, min-plus gives distance transforms, max-plus gives alignment.
- **Dilation and delay.** Substituting the recurrence into itself removes the dependence on the previous \(n-1\) outputs, so \(n\) lanes compute at once; over rings this needs care to avoid extra work, and over idempotent semirings (tropical) idempotence makes the dilation cheap.
- **Fast associative scan and path decomposition** apply to any kernel, including time-varying ones.
- **2D and mutual recurrences.** 2D recurrences are marginalised to 1D, and coupled recurrences are lifted to matrix-valued kernels.
- **Search plus profiling.** VecRec applies all applicable rewrites, generates a kernel for each form and keeps the fastest; on bioinformatics alignment it matches or beats hand-vectorised libraries.

## Caveats

The output is C++ for CPU SIMD; GPU lowering is not the subject. Speedups depend on recurrence order and semiring, and some rewrites over floating-point rings change rounding. I read the abstract, introduction and overview.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.02451
- PDF: https://arxiv.org/pdf/2611.02451
