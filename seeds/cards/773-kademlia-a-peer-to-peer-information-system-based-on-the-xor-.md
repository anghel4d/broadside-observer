---
title: "Kademlia: A Peer-to-peer Information System Based on the XOR Metric"
authors:
- Petar Maymounkov
- David Mazières
year: 2002
venue: IPTPS
arxiv: null
doi: 10.1007/3-540-45748-8_5
source: "https://doi.org/10.1007/3-540-45748-8_5"
topics:
- dht
- kademlia
seed_rank: 773
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: "Consistent Hashing and Random Trees: Distributed Caching Protocols for Relieving Hot Spots on the World Wide Web"
  url: "https://doi.org/10.1145/258533.258660"
  year: 1997
  arxiv: null
  doi: 10.1145/258533.258660
- title: "Chord: A Scalable Peer-to-peer Lookup Service for Internet Applications"
  url: "https://doi.org/10.1145/964723.383071"
  year: 2001
  arxiv: null
  doi: 10.1145/964723.383071
see:
- "770-consistent-hashing-and-random-trees-distributed-caching-prot"
- "771-chord-a-scalable-peer-to-peer-lookup-service-for-internet-ap"
---

# Kademlia: A Peer-to-peer Information System Based on the XOR Metric

## One-sentence takeaway

Kademlia DHT — XOR-metric routing used by BitTorrent and many P2P systems.

## Why it matters here

More deployed DHT design than Chord/Pastry in the wild.

## Key ideas

- XOR distance.
- k-buckets.
- Parallel iterative lookups.
- Simple and robust under churn.

## Caveats

- Security/eclipse attacks need care.
- Systems-adjacent companion to algorithms lineage.

## Links

- DOI: [10.1007/3-540-45748-8_5](https://doi.org/10.1007/3-540-45748-8_5)
- URL: https://doi.org/10.1007/3-540-45748-8_5
