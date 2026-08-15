---
title: "A Theory of Program Size Formally Identical to Information Theory"
authors:
  - "Gregory J. Chaitin"
year: 1975
venue: "Journal of the ACM"
arxiv: null
doi: "10.1145/321892.321894"
source: "https://doi.org/10.1145/321892.321894"
topics:
  - algorithmic-information
  - prefix-complexity
  - chaitin
seed_rank: 608
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
lineage: foundations-of-computing
cites:
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
  - title: "A Mathematical Theory of Communication"
    url: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"
    year: 1948
    arxiv: null
    doi: "10.1002/j.1538-7305.1948.tb01338.x"
  - title: "Information-Theoretic Limitations of Formal Systems"
    url: "https://doi.org/10.1145/321812.321814"
    year: 1974
    arxiv: null
    doi: "10.1145/321812.321814"
see:
  - "607-on-the-length-of-programs-for-computing-finite-binary-sequen"
  - "604-three-approaches-to-the-quantitative-definition-of-informati"
  - "553-a-mathematical-theory-of-communication"
  - "609-information-theoretic-limitations-of-formal-systems"
---

# A Theory of Program Size Formally Identical to Information Theory

## One-sentence takeaway

Chaitin switches to self-delimiting (prefix-free) programs so algorithmic information H satisfies the same additive identities as Shannon entropy, via the Kraft inequality.

## Why it matters here

This is the technically mature AIT: prefix complexity H(x), H(x,y) = H(x) + H(y|x) + O(1), and the setup that makes Chaitin's Ω a well-defined real. Use it whenever Broadside talks about program priors rather than plain C(x).

## Key ideas

- Programs must be prefix-free so a machine can know when a program has ended without a length header.
- Kraft's inequality then makes Σ 2^{−H(x)} ≤ 1, the same numerical skeleton as a Shannon code.
- Joint / conditional program-size identities mirror entropy identities up to O(1).
- The same prefix-free setting is what later lets Ω = Σ_{U(p)↓} 2^{−|p|} converge.

## Caveats

## Links

- DOI: [10.1145/321892.321894](https://doi.org/10.1145/321892.321894)
