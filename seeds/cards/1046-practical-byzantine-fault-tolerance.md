---
title: Practical Byzantine Fault Tolerance
authors:
- Miguel Castro
- Barbara Liskov
year: 1999
venue: OSDI
arxiv: null
doi: null
source: "https://pmg.csail.mit.edu/papers/osdi99.pdf"
topics:
- bft
- pbft
- consensus
seed_rank: 1046
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: The Byzantine Generals Problem
  url: "https://doi.org/10.1145/357172.357176"
  year: 1982
  arxiv: null
  doi: 10.1145/357172.357176
  card: 1044-the-byzantine-generals-problem
- title: The Part-Time Parliament
  url: "https://doi.org/10.1145/279227.279229"
  year: 1998
  arxiv: null
  doi: 10.1145/279227.279229
  card: 1042-the-part-time-parliament
---

# Practical Byzantine Fault Tolerance

## One-sentence takeaway

PBFT — practical Byzantine fault tolerance for state machine replication.

## Why it matters here

Engineering sequel to Lamport-Shostak-Pease; makes BFT seem deployable.

## Key ideas

- Primary/backup views.
- Quorum certificates.
- Safety under Byzantine faults with 3f+1.
- Triggers modern BFT research.

## Caveats

- Leader bottlenecks; later protocols refine.
- Links generals theory to systems practice.

## Links

- URL: https://pmg.csail.mit.edu/papers/osdi99.pdf
