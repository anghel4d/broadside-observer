---
title: The Google File System
authors:
- Sanjay Ghemawat
- Howard Gobioff
- Shun-Tak Leung
year: 2003
venue: SOSP
arxiv: null
doi: 10.1145/945445.945450
source: "https://doi.org/10.1145/945445.945450"
topics:
- distributed-systems
- gfs
- storage
seed_rank: 1070
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: "MapReduce: Simplified Data Processing on Large Clusters"
  url: "https://www.usenix.org/conference/osdi-04/mapreduce-simplified-data-processing-large-clusters"
  year: 2004
  arxiv: null
  doi: null
  card: 1071-mapreduce-simplified-data-processing-on-large-clusters
---

# The Google File System

## One-sentence takeaway

GFS: large-chunk, single-master, replication-centric file system for datacenter batch workloads.

## Why it matters here

Blueprint for HDFS and large-scale analytics storage assumptions.

## Key ideas

- Chunkservers plus master metadata.
- Replication for fault tolerance.
- Append-oriented relaxed consistency for throughput.
- Co-designed with MapReduce workloads.

## Caveats

- Single master was a deliberate tradeoff later revisited.
- Not a POSIX NAS replacement.

## Links

- DOI: [10.1145/945445.945450](https://doi.org/10.1145/945445.945450)
- URL: https://doi.org/10.1145/945445.945450
