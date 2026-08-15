---
title: "Three Approaches to the Quantitative Definition of Information"
authors:
  - "A. N. Kolmogorov"
year: 1965
venue: "Problemy Peredachi Informatsii / Problems of Information Transmission"
arxiv: null
doi: null
source: "https://cqi.inf.usi.ch/qic/Kolmogorov_Complexity_1965.pdf"
topics:
  - algorithmic-information
  - kolmogorov-complexity
  - information
seed_rank: 604
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "A Mathematical Theory of Communication"
    url: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"
    year: 1948
    arxiv: null
    doi: "10.1002/j.1538-7305.1948.tb01338.x"
  - title: "A Formal Theory of Inductive Inference, Parts I–II"
    url: "https://doi.org/10.1016/S0019-9958(64)90223-2"
    year: 1964
    arxiv: null
    doi: "10.1016/S0019-9958(64)90223-2"
  - title: "Foundations of the Theory of Probability"
    url: "https://archive.org/details/foundationsofthe00kolm"
    year: 1933
    arxiv: null
    doi: "10.1007/978-3-642-49888-6"
see:
  - "553-a-mathematical-theory-of-communication"
  - "610-a-formal-theory-of-inductive-inference-parts-i-ii"
  - "603-foundations-of-the-theory-of-probability"
---

# Three Approaches to the Quantitative Definition of Information

## One-sentence takeaway

Kolmogorov defines the information in an individual object as the length of a shortest program that prints it, and contrasts that algorithmic quantity with combinatorial and probabilistic (Shannon) measures.

## Why it matters here

This is the root of "randomness = incompressibility" that later cards use for AIT and for thinking about what an agent can actually store: Broadside's provenance and memory budgets are finite programs, not ensemble entropies.

## Key ideas

- Three measures of information: combinatorial (log of a class size), probabilistic (Shannon entropy of a distribution), algorithmic (shortest effective description).
- Algorithmic complexity K(x) is well-defined up to an additive constant once a universal machine is fixed.
- Most strings are incompressible; a string is "random" when K(x) is close to |x|.
- Conditional complexity K(x|y) gives a notion of information in x about y that does not need a joint distribution.
- Original: *Probl. Peredachi Inf.* 1:1 (1965), 3–11 (Math-Net ppi68).

## Caveats

## Links

- English scan: https://cqi.inf.usi.ch/qic/Kolmogorov_Complexity_1965.pdf
- Math-Net original: https://www.mathnet.ru/eng/ppi68
