---
title: Practical Byzantine Fault Tolerance
authors:
- Miguel Castro
- Barbara Liskov
year: 1999
venue: OSDI
arxiv: null
doi: 10.1145/296806.296824
source: "https://www.usenix.org/conference/osdi-99/presentation/practical-byzantine-fault-tolerance"
topics:
- bft
- pbft
- consensus
seed_rank: 793
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
- title: The Part-Time Parliament
  url: "https://doi.org/10.1145/279227.279229"
  year: 1998
  arxiv: null
  doi: 10.1145/279227.279229
see:
- "791-the-byzantine-generals-problem"
- "789-the-part-time-parliament"
---

# Practical Byzantine Fault Tolerance

## One-sentence takeaway

PBFT replicates a service with $3f+1$ replicas using a primary and three-phase (pre-prepare / prepare / commit) quorums, so $f$ Byzantine replicas cannot violate linearizability in an asynchronous network.

## Why it matters here

This is the systems sequel that made BFT look deployable: the protocol family a GRID COMMAND matchmaker or Broadside metadata service would actually implement, not OM($f$).

## Key ideas

- A view has one primary; clients send requests to the primary, which assigns sequence numbers.
- Prepare certificates prove a quorum agrees on that $(v,n,m)$; commit certificates prove a quorum will execute $m$ at $n$.
- View change replaces a silent or malicious primary without losing committed requests.
- Optimizations (MACs instead of public-key signatures on the normal path, request batching) make a Byzantine NFS only ~3% slower than unreplicated NFS in the paper’s measurements.
- Works in asynchrony for safety; liveness needs eventual timely links, as FLP requires.

## Caveats

## Links

- USENIX: https://www.usenix.org/conference/osdi-99/presentation/practical-byzantine-fault-tolerance
- HTML: http://usenix.org/publications/library/proceedings/osdi99/full_papers/castro/castro_html/castro.html
- DOI: [10.1145/296806.296824](https://doi.org/10.1145/296806.296824)
