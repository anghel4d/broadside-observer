---
title: "Consistent Hashing and Random Trees: Distributed Caching Protocols for Relieving Hot Spots on the World Wide Web"
authors:
- David Karger
- Eric Lehman
- Tom Leighton
- Matthew Levine
- Daniel Lewin
- Rina Panigrahy
year: 1997
venue: STOC
arxiv: null
doi: 10.1145/258533.258660
source: "https://doi.org/10.1145/258533.258660"
topics:
- consistent-hashing
- karger
seed_rank: 1044
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: "Chord: A Scalable Peer-to-peer Lookup Service for Internet Applications"
  url: "https://doi.org/10.1145/964723.383071"
  year: 2001
  arxiv: null
  doi: 10.1145/964723.383071
  card: 1045-chord-a-scalable-peer-to-peer-lookup-service-for-internet-ap
- title: "Pastry: Scalable, Decentralized Object Location and Routing for Large-Scale Peer-to-Peer Systems"
  url: "https://doi.org/10.1007/3-540-45518-3_18"
  year: 2001
  arxiv: null
  doi: 10.1007/3-540-45518-3_18
  card: 1046-pastry-scalable-decentralized-object-location-and-routing-fo
- title: "Kademlia: A Peer-to-peer Information System Based on the XOR Metric"
  url: "https://doi.org/10.1007/3-540-45748-8_5"
  year: 2002
  arxiv: null
  doi: 10.1007/3-540-45748-8_5
  card: 1047-kademlia-a-peer-to-peer-information-system-based-on-the-xor-
---

# Consistent Hashing and Random Trees: Distributed Caching Protocols for Relieving Hot Spots on the World Wide Web

## One-sentence takeaway

Consistent hashing minimizes remapping when nodes join/leave — CDN/DHT load-balancing primitive.

## Why it matters here

Essential for distributed caches, shards, and service rings.

## Key ideas

- Hash keys and nodes onto a ring.
- Only nearby keys move on membership change.
- Virtual nodes for balance.
- Foundation for Chord and many CDNs.

## Caveats

- Skew without virtual nodes.
- Membership/failure detection out of scope.

## Links

- DOI: [10.1145/258533.258660](https://doi.org/10.1145/258533.258660)
- URL: https://doi.org/10.1145/258533.258660
