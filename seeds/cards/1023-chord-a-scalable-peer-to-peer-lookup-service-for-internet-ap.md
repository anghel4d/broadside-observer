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
seed_rank: 1023
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
  card: 1022-consistent-hashing-and-random-trees-distributed-caching-prot
- title: "Pastry: Scalable, Decentralized Object Location and Routing for Large-Scale Peer-to-Peer Systems"
  url: "https://doi.org/10.1007/3-540-45518-3_18"
  year: 2001
  arxiv: null
  doi: 10.1007/3-540-45518-3_18
  card: 1024-pastry-scalable-decentralized-object-location-and-routing-fo
- title: "Kademlia: A Peer-to-peer Information System Based on the XOR Metric"
  url: "https://doi.org/10.1007/3-540-45748-8_5"
  year: 2002
  arxiv: null
  doi: 10.1007/3-540-45748-8_5
  card: 1025-kademlia-a-peer-to-peer-information-system-based-on-the-xor-
---

# Chord: A Scalable Peer-to-peer Lookup Service for Internet Applications

## One-sentence takeaway

Chord DHT: O(log N) keyed lookup via finger tables on a consistent-hash ring.

## Why it matters here

Clean DHT design teaching scalable decentralized lookup.

## Key ideas

- Successor lists plus fingers.
- Logarithmic hops with high probability.
- Join/leave stabilization.
- Builds on consistent hashing.

## Caveats

- Churn and security need extra layers.
- Production often uses Kademlia variants.

## Links

- DOI: [10.1145/964723.383071](https://doi.org/10.1145/964723.383071)
- URL: https://doi.org/10.1145/964723.383071
