---
title: "Information-Theoretic Limitations of Formal Systems"
authors:
  - "Gregory J. Chaitin"
year: 1974
venue: "Journal of the ACM"
arxiv: null
doi: "10.1145/321812.321814"
source: "https://doi.org/10.1145/321812.321814"
topics:
  - incompleteness
  - chaitin
  - algorithmic-information
seed_rank: 609
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I"
    url: "https://doi.org/10.1007/BF01700692"
    year: 1931
    arxiv: null
    doi: "10.1007/BF01700692"
  - title: "On the Length of Programs for Computing Finite Binary Sequences"
    url: "https://doi.org/10.1145/321356.321363"
    year: 1966
    arxiv: null
    doi: "10.1145/321356.321363"
  - title: "Three Approaches to the Quantitative Definition of Information"
    url: "https://cqi.inf.usi.ch/qic/Kolmogorov_Complexity_1965.pdf"
    year: 1965
    arxiv: null
    doi: null
see:
  - "500-uber-formal-unentscheidbare-satze-der-principia-mathematica-"
  - "607-on-the-length-of-programs-for-computing-finite-binary-sequen"
  - "604-three-approaches-to-the-quantitative-definition-of-informati"
---

# Information-Theoretic Limitations of Formal Systems

## One-sentence takeaway

Chaitin recasts Gödel incompleteness as a complexity bound: a formal system of complexity n cannot prove that a string has complexity much larger than n.

## Why it matters here

This is the incompleteness spine wearing AIT glasses — the reason "we proved this trace is incompressible" is not something a small checker can generally do, and the conceptual parent of later Ω / unprovable randomness claims.

## Key ideas

- If a theory T has a description of length n, it can prove only finitely many statements of the form "C(x) ≥ m" for m ≫ n.
- Random (incompressible) strings exist in abundance, but T cannot certify the randomness of those that outrun its own size.
- The argument is information-theoretic rather than diagonal-via-provability-predicate, though it is a cousin of Gödel 1931.
- Sets up the later prefix-free / Ω incompleteness results in the 1975 JACM paper.

## Caveats

## Links

- DOI: [10.1145/321812.321814](https://doi.org/10.1145/321812.321814)
