---
title: "The Definition of Random Sequences"
authors:
  - "Per Martin-Löf"
year: 1966
venue: "Information and Control"
arxiv: null
doi: "10.1016/S0019-9958(66)80018-9"
source: "https://doi.org/10.1016/S0019-9958(66)80018-9"
topics:
  - algorithmic-randomness
  - martin-lof
  - measure
seed_rank: 611
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
  - title: "On the Length of Programs for Computing Finite Binary Sequences"
    url: "https://doi.org/10.1145/321356.321363"
    year: 1966
    arxiv: null
    doi: "10.1145/321356.321363"
  - title: "Foundations of the Theory of Probability"
    url: "https://archive.org/details/foundationsofthe00kolm"
    year: 1933
    arxiv: null
    doi: "10.1007/978-3-642-49888-6"
see:
  - "604-three-approaches-to-the-quantitative-definition-of-informati"
  - "607-on-the-length-of-programs-for-computing-finite-binary-sequen"
  - "603-foundations-of-the-theory-of-probability"
---

# The Definition of Random Sequences

## One-sentence takeaway

Martin-Löf defines an infinite sequence as random when it lies in no constructive measure-zero set — equivalently, when it passes every effective statistical test.

## Why it matters here

Third leg of AIT with Kolmogorov/Chaitin: randomness as *passing all computable tests*, not just incompressibility. That is the right language for "is this engine RNG / hash stream distinguishable from noise by any program we can write?"

## Key ideas

- A Martin-Löf test is a uniformly computable sequence of open sets U_n with μ(U_n) ≤ 2^{−n}; the null cover ∩ U_n is an effective null set.
- A sequence is random iff it avoids every such cover.
- The definition is measure-theoretic (Kolmogorov 1933) but restricted to *constructive* null sets, so individual sequences can be called random.
- Schnorr, Levin, Chaitin later prove equivalence (up to the usual O(1)) with prefix incompressibility of all prefixes.

## Caveats

## Links

- DOI: [10.1016/S0019-9958(66)80018-9](https://doi.org/10.1016/S0019-9958(66)80018-9)
