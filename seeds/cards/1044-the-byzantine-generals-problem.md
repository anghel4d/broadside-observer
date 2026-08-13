---
title: The Byzantine Generals Problem
authors:
- Leslie Lamport
- Robert Shostak
- Marshall Pease
year: 1982
venue: ACM TOPLAS
arxiv: null
doi: 10.1145/357172.357176
source: "https://doi.org/10.1145/357172.357176"
topics:
- distributed-systems
- byzantine
seed_rank: 1044
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: Reaching Agreement in the Presence of Faults
  url: "https://doi.org/10.1145/322186.322188"
  year: 1980
  arxiv: null
  doi: 10.1145/322186.322188
- title: Practical Byzantine Fault Tolerance
  url: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
  year: 1999
  arxiv: null
  doi: null
see:
- "1045-reaching-agreement-in-the-presence-of-faults"
- "1046-practical-byzantine-fault-tolerance"
---

# The Byzantine Generals Problem

## One-sentence takeaway

Byzantine generals: agreement with arbitrary faults needs more than 3f processes in the classic oral model.

## Why it matters here

Defines adversarial fault tolerance for consensus mindsets.

## Key ideas

- Oral vs signed message models.
- 3f+1 lower bound (oral).
- Recursive OM algorithm.
- Separates crash vs Byzantine worlds.

## Caveats

- Bounds depend on synchrony and crypto assumptions.
- Modern BFT refines practical protocols.

## Links

- DOI: [10.1145/357172.357176](https://doi.org/10.1145/357172.357176)
- URL: https://doi.org/10.1145/357172.357176
