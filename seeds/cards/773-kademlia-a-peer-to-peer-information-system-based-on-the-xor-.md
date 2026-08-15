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

Kademlia treats node IDs as leaves of a binary tree and uses XOR distance, so every lookup both finds the $k$ closest nodes to a key and refreshes the querier’s $k$-buckets.

## Why it matters here

This is the DHT that actually shipped (BitTorrent Mainline DHT, Ethereum discovery): the overlay design to copy if Broadside or a GRID COMMAND matchmaker needs a deployed peer lookup.

## Key ideas

- Distance is $d(x,y)=x\oplus y$; it is unidirectional, so a query for a key always walks toward that key’s neighborhood.
- Contacts live in $k$-buckets indexed by the leading XOR-bit of the distance; buckets prefer long-lived nodes.
- Lookups are iterative and $\alpha$-parallel: ask the $\alpha$ closest known nodes, then recurse on the closer replies.
- Routing-table maintenance is free: every lookup is also a bucket refresh, which is why Kademlia survives churn better than Chord in the wild.

## Caveats

## Links

- DOI: [10.1007/3-540-45748-8_5](https://doi.org/10.1007/3-540-45748-8_5)
- URL: https://doi.org/10.1007/3-540-45748-8_5
