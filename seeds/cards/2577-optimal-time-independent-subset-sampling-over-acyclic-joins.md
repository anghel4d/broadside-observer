---
title: "Optimal-Time Independent Subset Sampling over Acyclic Joins"
authors:
  - "Xuyang Liu"
  - "Zijian Zhang"
  - "Zhen Li"
year: 2026
venue: "arXiv preprint (cs.DB)"
arxiv: "2611.15675"
doi: null
source: "https://arxiv.org/abs/2611.15675"
topics:
  - "join-sampling"
  - "acyclic-joins"
  - "poisson-sampling"
  - "query-processing"
  - "relational-algebra"
seed_rank: 2577
seed_batch: "craft-2026-11-13"
reviewed: "2026-11-13"
pool: "languages"
relevance_score: 7
lineage: contemporary-databases
cites: []
see:
  - "2507-algorithms-for-acyclic-database-schemes"
  - "1550-size-bounds-and-query-plans-for-relational-joins"
---

# Optimal-Time Independent Subset Sampling over Acyclic Joins

## One-sentence takeaway

For a fixed acyclic join where each result should be kept independently with probability equal to the product of its input-tuple weights, one shared join-tree index built in linear time lets you draw such a subset in expected time proportional to the sample you return, with no log factors: heavy results get direct Bernoulli trials and Poisson thinning skips over the light ones.

## Why it matters here

ano's relational hops turn into joins over component columns, and game rules often want "each pair independently with probability p" (spotting checks, proximity events, ambient chatter) without materialising every pair. This is the principled form of that: build a Yannakakis-style join tree once, then sample without ever enumerating the full join. It is also a clean pattern for weighted sampling over hierarchical data in general (split heavy items from the light tail, thin the tail geometrically).

## Key ideas

- **PRODUCT sampling.** Each join result included independently with probability given by the product of its tuples' weights.
- **Shared join-tree index** supports weighted draws over the whole join and locates high-probability results.
- **Split by probability.** Direct Bernoulli trials for high-probability results; Poisson thinning generates the remaining independent decisions with bounded overhead.
- **Bounds.** Expected \(O(N)\) preprocessing and index space; expected \(O(1+m\mu)\) per call, including output, where \(m\) counts relation occurrences and \(\mu\) is the expected sample size. Optimal, since it matches reading input and writing output.
- **Evidence.** Floating-point prototype has lower latency than the fastest applicable baseline in 17 of 18 settings on STATS; 20.5x faster than indexed materialization for construction plus 300 calls at \(\mu=100\).

## Caveats

Read from the abstract only. Static weights and fixed full acyclic joins only; dynamic updates (the normal case in a running simulation) are not covered, and cyclic patterns (triangles) are out of scope. The optimality proof assumes a real RAM with exact arithmetic; the prototype uses floats.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.15675
- PDF: https://arxiv.org/pdf/2611.15675
