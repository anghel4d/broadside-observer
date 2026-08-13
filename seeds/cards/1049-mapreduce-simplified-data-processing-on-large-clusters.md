---
title: "MapReduce: Simplified Data Processing on Large Clusters"
authors:
- Jeffrey Dean
- Sanjay Ghemawat
year: 2004
venue: OSDI
arxiv: null
doi: null
source: "https://www.usenix.org/conference/osdi-04/mapreduce-simplified-data-processing-large-clusters"
topics:
- mapreduce
- distributed-systems
seed_rank: 1049
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: The Google File System
  url: "https://doi.org/10.1145/945445.945450"
  year: 2003
  arxiv: null
  doi: 10.1145/945445.945450
  card: 1048-the-google-file-system
---

# MapReduce: Simplified Data Processing on Large Clusters

## One-sentence takeaway

MapReduce: map/shuffle/reduce abstraction with automatic fault-tolerant execution.

## Why it matters here

Programming model that defined a decade of cluster analytics.

## Key ideas

- Map then shuffle-by-key then reduce.
- Runtime handles scheduling, faults, locality.
- Pairs with GFS.
- Ancestor of Hadoop/Spark dataflow thinking.

## Caveats

- Not ideal for iterative/low-latency workloads.
- Shuffle is the usual bottleneck.

## Links

- URL: https://www.usenix.org/conference/osdi-04/mapreduce-simplified-data-processing-large-clusters
