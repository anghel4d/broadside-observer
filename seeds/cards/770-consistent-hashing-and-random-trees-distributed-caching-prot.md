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
seed_rank: 770
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites: []
see: []
---

# Consistent Hashing and Random Trees: Distributed Caching Protocols for Relieving Hot Spots on the World Wide Web

## One-sentence takeaway

Consistent hashing maps keys and cache nodes onto a common circle so that adding or removing a node remaps only its neighboring keys, not the whole table.

## Why it matters here

This is the shard/ring primitive for Broadside caches, Anoptic asset CDNs, and any GRID COMMAND service that must rebalance without a full reshuffle.

## Key ideas

- Hash both object names and node names onto the unit circle; an object lives at the first node clockwise from its hash.
- When a node joins or leaves, only the keys in its arc move — expected load stays balanced.
- Virtual nodes (several hash points per physical server) flatten hot spots and capacity differences.
- The companion “random trees” construction spreads popular objects through a cache hierarchy so a few hot URLs cannot melt a single server.

## Caveats

## Links

- DOI: [10.1145/258533.258660](https://doi.org/10.1145/258533.258660)
- URL: https://doi.org/10.1145/258533.258660
