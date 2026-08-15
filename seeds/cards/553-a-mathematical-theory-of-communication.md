---
title: "A Mathematical Theory of Communication"
authors:
  - "Claude E. Shannon"
year: 1948
venue: "Bell System Technical Journal"
arxiv: null
doi: "10.1002/j.1538-7305.1948.tb01338.x"
source: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"
topics:
  - information-theory
  - entropy
  - shannon
  - coding
seed_rank: 553
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "Extrapolation, Interpolation, and Smoothing of Stationary Time Series"
    url: "https://mitpress.mit.edu/9780262730051/extrapolation-interpolation-and-smoothing-of-stationary-time-series/"
    year: 1949
    arxiv: null
    doi: null
  - title: "Transmission of Information"
    url: "https://doi.org/10.1002/j.1538-7305.1928.tb01236.x"
    year: 1928
    arxiv: null
    doi: "10.1002/j.1538-7305.1928.tb01236.x"
  - title: "Certain Factors Affecting Telegraph Speed"
    url: "https://doi.org/10.1002/j.1538-7305.1924.tb01361.x"
    year: 1924
    arxiv: null
    doi: "10.1002/j.1538-7305.1924.tb01361.x"
see:
  - "563-extrapolation-interpolation-and-smoothing-of-stationary-time"
---

# A Mathematical Theory of Communication

## One-sentence takeaway

Shannon defines information entropy, proves source and noisy-channel coding theorems, and makes the bit the unit of communication.

## Why it matters here

Anoptic and Broadside treat logs, netcode, and agent observations as scarce channels; this paper is why those streams have a capacity and a compression floor.

## Key ideas

- A discrete source is a stochastic process; its entropy \(H = -\sum p_i\log p_i\) is the average information per symbol.
- The source coding theorem: entropy is the greatest lower bound on bits per symbol for vanishing error.
- A noisy channel has a capacity \(C\); rates below \(C\) admit codes with arbitrarily small error, rates above \(C\) do not.
- Continuous channels get a geometric treatment (signal space, noise spheres) and the famous \(C = W\log(1+P/N)\) bandlimited formula.
- The two-part BSTJ paper (July and October 1948) is the primary technical source; the 1949 Shannon–Weaver book is a later reprint plus essay.

## Caveats

## Links

- DOI: [10.1002/j.1538-7305.1948.tb01338.x](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x)
- URL: https://doi.org/10.1002/j.1538-7305.1948.tb01338.x
