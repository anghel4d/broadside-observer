---
title: "Spark: Cluster Computing with Working Sets"
authors:
- Matei Zaharia
- Mosharaf Chowdhury
- Michael J. Franklin
- Scott Shenker
- Ion Stoica
year: 2010
venue: HotCloud
arxiv: null
doi: null
source: "https://www.usenix.org/conference/hotcloud-10/spark-cluster-computing-working-sets"
topics:
- databases
- contemporary-db
seed_rank: 826
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: "MapReduce: Simplified Data Processing on Large Clusters"
  url: "https://www.usenix.org/conference/osdi-04/mapreduce-simplified-data-processing-large-clusters"
  year: 2004
  arxiv: null
  doi: null
see:
- "841-mapreduce-simplified-data-processing-on-large-cluster"
- "827-resilient-distributed-datasets-a-fault-tolerant-abstraction"
---

# Spark: Cluster Computing with Working Sets

## One-sentence takeaway

Spark introduces resilient distributed datasets (RDDs) — read-only partitioned collections cached in memory and rebuilt from lineage — so iterative ML and interactive queries reuse a working set instead of writing every MapReduce stage to HDFS.

## Why it matters here

This is the one-page argument that “keep the working set hot and recompute on failure” beats Hadoop’s disk round-trip. Anoptic batch tools and Broadside corpus jobs that iterate (embeddings, connected components, join-then-filter loops) should think in RDDs / DataFrames, not in MapReduce stages.

## Key ideas

- An RDD is a partitioned, immutable collection defined by a lineage of deterministic transformations (map, filter, join, …); actions materialize results.
- Fault tolerance is lineage replay of lost partitions, not eager replication of intermediate data.
- Reported numbers: up to 10× faster than Hadoop on iterative logistic regression, and sub-second interactive queries on a 39 GB dataset.
- The HotCloud note is the sketch; the NSDI 2012 RDD paper is the full abstraction and evaluation.

## Caveats

## Links

- USENIX: [HotCloud ’10](https://www.usenix.org/conference/hotcloud-10/spark-cluster-computing-working-sets)
- PDF: https://www.usenix.org/legacy/events/hotcloud10/tech/full_papers/Zaharia.pdf
