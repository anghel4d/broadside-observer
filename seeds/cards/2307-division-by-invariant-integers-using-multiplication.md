---
title: "Division by Invariant Integers using Multiplication"
authors:
  - "Torbjörn Granlund"
  - "Peter L. Montgomery"
year: 1994
venue: "PLDI '94 (ACM SIGPLAN Conf. on Programming Language Design and Implementation), 61–72"
arxiv: null
doi: "10.1145/178243.178249"
source: "https://gmplib.org/~tege/divcnst-pldi94.pdf"
topics:
  - integer-arithmetic
  - strength-reduction
  - code-generation
  - compiler-construction
seed_rank: 2307
seed_batch: "archive-2026-10-16"
reviewed: "2026-10-16"
pool: "languages"
relevance_score: 8
lineage: integer-division-by-constants
see:
  - 2304-superoptimizer-a-look-at-the-smallest-program
  - 1438-optimizing-an-ansi-c-interpreter-with-superoperators
cites:
  - title: "Division by Invariant Integers using Multiplication"
    url: "https://doi.org/10.1145/178243.178249"
    year: 1994
    arxiv: null
    doi: "10.1145/178243.178249"
  - title: "Superoptimizer: A Look at the Smallest Program"
    url: "https://doi.org/10.1145/36206.36194"
    year: 1987
    arxiv: null
    doi: "10.1145/36206.36194"
---

# Division by Invariant Integers using Multiplication

## One-sentence takeaway

Granlund and Montgomery give exact, proved code sequences that replace integer division by any nonzero constant or loop-invariant divisor with a multiply-high plus shifts and adds — unsigned, signed truncating, signed flooring, and known-exact division (multiply by the divisor's modular inverse) — the technique every modern compiler uses for `x / 7`.

## Why it matters here

ano and any engine VM or shader compiler will emit division by constants constantly (array strides, fixed-point, hash buckets, radix conversion, pointer differences). This paper is the reference for doing it correctly for every signedness and rounding mode, and its run-time-invariant variant is what libraries like libdivide later productized for divisors known only at load time (e.g. a grid width chosen per map).

## Key ideas

- **The core theorem.** For N-bit unsigned n, if 2^(N+l) ≤ m·d ≤ 2^(N+l) + 2^l, then floor(n/d) = floor(m·n / 2^(N+l)). So pick l = ceil(log2 d) and the matching multiplier m; the quotient is the high half of a product plus a shift.
- **The N+1-bit multiplier trick.** The ideal m can need N+1 bits; the paper splits it as 2^N + m′ and recovers the quotient with 1 multiply-high, 2 adds/subtracts and 2 shifts per quotient (after a one-time setup), avoiding double-width arithmetic.
- **Signed variants.** Separate sequences for quotients rounded toward zero and toward −∞, with sign-correction steps; the remainder, when needed, costs one more multiply and subtract, and the paper also covers testing for a given remainder. None of this helps when the divisor changes every step, as in Euclid's GCD.
- **Exact division.** When the remainder is known to be zero (C pointer subtraction divided by element size), write d = 2^e · d_odd, multiply by the inverse of d_odd modulo 2^N (low half of the product only), then shift right by e.
- **Implemented in GCC.** Constant-divisor sequences went into GCC 2.6 for all targets; a binary-to-decimal conversion loop ran 1.2x–4.6x faster across 1994 processors (12x on Alpha, which had no divide instruction). SPEC92 integer gains were mostly negligible (best about 3%), but hashing-heavy code improved up to about 30%.

## Caveats

The win depends on multiply being much faster than divide; on recent CPUs with fast dividers the gap is smaller, though still real for 64-bit division. The run-time-invariant case was described but not implemented in GCC at the time, and it pays a setup cost to compute the multiplier, so it needs enough loop iterations. Correctness relies on two's-complement semantics and access to the high half of a product.

## Links

- Paper (author PDF): https://gmplib.org/~tege/divcnst-pldi94.pdf
- Paper (DOI): https://doi.org/10.1145/178243.178249
