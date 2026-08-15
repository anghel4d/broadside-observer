---
title: "Dynamo: Amazon's Highly Available Key-Value Store"
authors:
- Giuseppe DeCandia
- Deniz Hastorun
- Madan Jampani
- Gunavardhan Kakulapati
- Avinash Lakshman
- Alex Pilchin
- Swaminathan Sivasubramanian
- Peter Vosshall
- Werner Vogels
year: 2007
venue: SOSP
arxiv: null
doi: 10.1145/1294261.1294281
source: "https://doi.org/10.1145/1294261.1294281"
topics:
- databases
- contemporary-db
seed_rank: 814
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: "Bigtable: A Distributed Storage System for Structured Data"
  url: "https://www.usenix.org/conference/osdi-06/bigtable-distributed-storage-system-structured-data"
  year: 2006
  arxiv: null
  doi: 10.5555/1298455.1298475
see:
- "813-bigtable-a-distributed-storage-system-for-structured-data"
---

# Dynamo: Amazon's Highly Available Key-Value Store

## One-sentence takeaway

Dynamo is Amazon’s always-writable, primary-key key-value store: consistent hashing with virtual nodes, sloppy quorums plus hinted handoff, vector-clock versioning with application-side reconciliation, and gossip membership — tuned so shopping-cart puts are never rejected.

## Why it matters here

It is the anti-Spanner: when GRID COMMAND / session / inventory state must accept writes during partitions, you copy Dynamo’s knobs (N, R, W, hinted handoff) and push conflict merge to the application, rather than blocking on Paxos. Riak, Cassandra, and Voldemort are the open descendants.

## Key ideas

- Preference lists come from a consistent-hash ring; virtual nodes absorb heterogeneity and make add/remove a local ring edit.
- get/put use configurable R and W; R + W > N gives quorum-like behavior, but sloppy quorums plus hinted handoff keep writes flowing when the “right” replicas are down.
- Concurrent versions are vector clocks; syntactic descendants collapse automatically, otherwise the client merges (shopping-cart union) on read.
- Merkle-tree anti-entropy repairs permanent divergence; gossip spreads membership without a central registry.

## Caveats

## Links

- DOI: [10.1145/1294261.1294281](https://doi.org/10.1145/1294261.1294281)
- Author PDF: https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf
