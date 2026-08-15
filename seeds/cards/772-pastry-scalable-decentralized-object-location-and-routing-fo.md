---
title: "Pastry: Scalable, Decentralized Object Location and Routing for Large-Scale Peer-to-Peer Systems"
authors:
- Antony Rowstron
- Peter Druschel
year: 2001
venue: Middleware
arxiv: null
doi: 10.1007/3-540-45518-3_18
source: "https://doi.org/10.1007/3-540-45518-3_18"
topics:
- dht
- pastry
seed_rank: 772
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
see:
- "770-consistent-hashing-and-random-trees-distributed-caching-prot"
---

# Pastry: Scalable, Decentralized Object Location and Routing for Large-Scale Peer-to-Peer Systems

## One-sentence takeaway

Pastry routes a message to the live node whose identifier is numerically closest to a key by matching successive ID prefixes, using a routing table, a leaf set, and a proximity-aware neighborhood set.

## Why it matters here

Pastry is the locality-aware sibling of Chord: the design to steal from when Anoptic or Broadside care about RTT, not just hop count, on a peer overlay.

## Key ideas

- Node IDs and keys are 128-bit; each routing-table row $i$ holds nodes that share an $i$-digit prefix and differ on the next digit.
- The leaf set of $L$ numerically closest IDs guarantees correctness even if the prefix table is stale.
- Among candidates for a prefix slot, Pastry prefers a nearby node in network delay, so paths are short in both hops and milliseconds.
- The API is object location plus application-level routing — the substrate for PAST storage and Scribe pub/sub.

## Caveats

## Links

- DOI: [10.1007/3-540-45518-3_18](https://doi.org/10.1007/3-540-45518-3_18)
- URL: https://doi.org/10.1007/3-540-45518-3_18
