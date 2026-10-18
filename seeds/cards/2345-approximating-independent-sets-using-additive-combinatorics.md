---
title: "Approximating Independent Sets Using Additive Combinatorics"
authors:
  - "Shachar Lovett"
year: 2026
venue: "ECCC TR26-257"
arxiv: null
doi: null
source: "https://eccc.weizmann.ac.il/report/2026/257"
topics:
  - "approximation-algorithms"
  - "independent-set"
  - "additive-combinatorics"
  - "semidefinite-programming"
seed_rank: 2345
seed_batch: "curiosity-2026-10-19"
reviewed: "2026-10-19"
pool: "maths-foundations"
relevance_score: 8
cites:
  - title: "Approximating Independent Sets Using Additive Combinatorics"
    url: "https://eccc.weizmann.ac.il/report/2026/257"
    year: 2026
    arxiv: null
    doi: null
  - title: "Strong bounds for 3-progressions (Kelley and Meka)"
    url: "https://arxiv.org/abs/2302.05537"
    year: 2023
    arxiv: "2302.05537"
    doi: null
see: ["2015-erdoss-reciprocal-sum-conjecture-and-quasipolynomial-szemeredi-bounds", "2321-simple-faster-min-plus-matrix-multiplication-and-apsp"]
---

# Approximating Independent Sets Using Additive Combinatorics

## One-sentence takeaway

A deterministic quasi-polynomial-time algorithm finds an independent set of size 2^t in any N-vertex graph that has one of size 2^{−t}N, for t up to about (log N)^{1/3}, giving an approximation ratio N / exp(Ω((log N)^{1/3})) whose shape matches the known hardness results for quasi-polynomial time.

## Why it's lovely

Maximum independent set is the textbook problem where approximation looks hopeless, and the gap between algorithms and hardness had been enormous. Lovett closes it to "same shape, different exponent" by importing the spreadness and sifting tools from the Kelley–Meka breakthrough on 3-term progressions. The guiding idea is pleasant on its own: a large exact solution forces a large approximate one with a simple structure, and that structure lives in a family small enough to search. In the Cayley-graph warm-up the structure is literally a subspace; in general graphs it is a set you reach by conditioning a few vertices, and an SDP supplies the probabilities you condition on.

## Key ideas

- **Main theorem.** If α(G) ≥ 2^{−t}N with t ≤ c(log N)^{1/3}, a deterministic algorithm finds an independent set of size ≥ 2^t in time N^{O(t)}.
- **Sparse sets first.** The core result finds a set U with |U| ≥ 2^{−O(t²h)}N and edge density ≤ 2^{−h}. Greedy minimum-degree removal (Turán's bound) then extracts an independent set of size about |U|/(1 + d(U)|U|).
- **Cayley warm-up.** On F_2^n, an independent set A means A + A misses the generator set S. The quasi-polynomial Bogolyubov lemma gives a subspace U of small codimension mostly inside A + A, so U is large and sparse, and subspaces of small codimension can be enumerated.
- **General graphs.** Start from a distribution on independent sets. Conditioning on one vertex in a dense region raises many other inclusion probabilities by a constant factor; iterating must stop at a sparse set because probabilities are bounded by 1. Only low-order marginals are used, so SDP pseudo-marginals suffice and the conditioning sets can be enumerated.
- **Comparison.** Hardness rules out N/2^{(log N)^{3/4+ε}} under randomized-NP assumptions (Khot–Ponnuswami); exhaustive search only gives N/(log N)^a.

## Caveats

The exponent 1/3 versus the hardness side's 3/4 + ε still leaves a gap, and the running time N^{O((log N)^{1/3})} is a theory result, not a practical solver. Fresh, single-author ECCC report, not yet refereed.

## Links

- ECCC report page: https://eccc.weizmann.ac.il/report/2026/257
- PDF: https://eccc.weizmann.ac.il/report/2026/257/download/
- Kelley and Meka, Strong bounds for 3-progressions: https://arxiv.org/abs/2302.05537
