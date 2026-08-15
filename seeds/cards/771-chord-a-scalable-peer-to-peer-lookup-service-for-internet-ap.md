---
title: "Chord: A Scalable Peer-to-peer Lookup Service for Internet Applications"
authors:
- Ion Stoica
- Robert Morris
- David Karger
- M. Frans Kaashoek
- Hari Balakrishnan
year: 2001
venue: SIGCOMM
arxiv: null
doi: 10.1145/964723.383071
source: "https://doi.org/10.1145/964723.383071"
topics:
- dht
- chord
seed_rank: 771
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: "Consistent Hashing and Random Trees: Distributed Caching Protocols for Relieving Hot Spots on the World Wide Web"
  url: "https://doi.org/10.1145/258533.258660"
  year: 1997
  arxiv: null
  doi: 10.1145/258533.258660
see:
- "770-consistent-hashing-and-random-trees-distributed-caching-prot"
---

# Chord: A Scalable Peer-to-peer Lookup Service for Internet Applications

## One-sentence takeaway

Chord places nodes and keys on a consistent-hash ring and routes with $O(\log N)$ finger-table hops: the $i$-th finger of node $n$ points at the successor of $n+2^{i-1}$.

## Why it matters here

Chord is the cleanest teaching DHT: the lookup contract Broadside or a GRID COMMAND matchmaker would want if identity were just a key on a ring.

## Key ideas

- Each node stores a successor list plus $m$ fingers on an $m$-bit identifier circle.
- Lookup for key $k$ jumps to the farthest known predecessor of $k$, then walks successors — $O(\log N)$ hops with high probability.
- Join copies keys from the successor; a periodic stabilize protocol repairs successor pointers under churn.
- Correctness rests on consistent hashing: a node is responsible for the arc back to its predecessor.

## Caveats

## Links

- DOI: [10.1145/964723.383071](https://doi.org/10.1145/964723.383071)
- URL: https://doi.org/10.1145/964723.383071
