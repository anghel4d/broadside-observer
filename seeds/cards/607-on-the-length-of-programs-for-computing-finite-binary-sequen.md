---
title: "On the Length of Programs for Computing Finite Binary Sequences"
authors:
  - "Gregory J. Chaitin"
year: 1966
venue: "Journal of the ACM"
arxiv: null
doi: "10.1145/321356.321363"
source: "https://doi.org/10.1145/321356.321363"
topics:
  - algorithmic-information
  - chaitin
  - kolmogorov-complexity
seed_rank: 607
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Three Approaches to the Quantitative Definition of Information"
    url: "https://cqi.inf.usi.ch/qic/Kolmogorov_Complexity_1965.pdf"
    year: 1965
    arxiv: null
    doi: null
  - title: "A Formal Theory of Inductive Inference, Parts I–II"
    url: "https://doi.org/10.1016/S0019-9958(64)90223-2"
    year: 1964
    arxiv: null
    doi: "10.1016/S0019-9958(64)90223-2"
see:
  - "604-three-approaches-to-the-quantitative-definition-of-informati"
  - "610-a-formal-theory-of-inductive-inference-parts-i-ii"
---

# On the Length of Programs for Computing Finite Binary Sequences

## One-sentence takeaway

Chaitin independently defines the complexity of a finite binary string as the length of a shortest Turing-machine program that emits it, and proves that almost all strings are incompressible.

## Why it matters here

Pair with Kolmogorov 1965: two independent parents of AIT. Chaitin's machine-and-program-size packaging is the one that later produces incompleteness-via-complexity (609) and prefix Ω.

## Key ideas

- Program-size complexity of an n-bit string is the size of a shortest program for a fixed universal machine.
- Counting argument: at most 2^k programs of length < k, so most n-bit strings satisfy C(x) ≥ n − O(1).
- A string is random when it has no description shorter than itself; pattern is identified with compressibility.
- The paper is JACM 13(4), 1966, pp. 547–569 — Chaitin's first AIT paper, written as an undergraduate.

## Caveats

## Links

- DOI: [10.1145/321356.321363](https://doi.org/10.1145/321356.321363)
