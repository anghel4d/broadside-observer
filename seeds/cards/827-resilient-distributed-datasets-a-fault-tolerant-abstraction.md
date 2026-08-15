---
title: "Resilient Distributed Datasets: A Fault-Tolerant Abstraction for In-Memory Cluster Computing"
authors:
- Matei Zaharia
- Mosharaf Chowdhury
- Tathagata Das
- Ankur Dave
- Justin Ma
- Murphy McCauley
- Michael J. Franklin
- Scott Shenker
- Ion Stoica
year: 2012
venue: NSDI
arxiv: null
doi: null
source: "https://www.usenix.org/conference/nsdi12/technical-sessions/presentation/zaharia"
topics:
- databases
- contemporary-db
seed_rank: 827
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: "Spark: Cluster Computing with Working Sets"
  url: "https://www.usenix.org/conference/hotcloud-10/spark-cluster-computing-working-sets"
  year: 2010
  arxiv: null
  doi: null
- title: "MapReduce: Simplified Data Processing on Large Clusters"
  url: "https://www.usenix.org/conference/osdi-04/mapreduce-simplified-data-processing-large-clusters"
  year: 2004
  arxiv: null
  doi: null
see:
- "826-spark-cluster-computing-with-working-sets"
- "841-mapreduce-simplified-data-processing-on-large-cluster"
---

# Resilient Distributed Datasets: A Fault-Tolerant Abstraction for In-Memory Cluster Computing

## One-sentence takeaway

RDDs are immutable, partitioned collections whose lineage graph lets Spark recompute lost partitions, persist chosen datasets in memory or on disk, and express a surprisingly wide set of cluster jobs (iterative ML, SQL, streaming) without a DSM or incremental-checkpoint runtime.

## Why it matters here

This is Spark’s real paper (NSDI Best Paper): the working-set idea from HotCloud, made into an abstraction with narrow vs. wide dependencies, controlled partitioning, and a scheduler that pipelines narrow transforms. Broadside ingest and GRID COMMAND analytics batches should prefer lineage-replay over replicating every intermediate.

## Key ideas

- Narrow dependencies (map, filter) pipeline inside a stage; wide dependencies (groupBy, join) shuffle and define stage boundaries.
- Persistence is user-controlled (`persist` / `cache`) with memory, disk, and replication options; unpersisted RDDs exist only as lineage.
- The scheduler reconstructs a lost partition by walking lineage back to a stable ancestor, recomputing only that slice.
- The programming model is coarse-grained transforms, which is why lineage stays small enough to be practical — not a fine-grained DSM.

## Caveats

## Links

- USENIX: [NSDI ’12](https://www.usenix.org/conference/nsdi12/technical-sessions/presentation/zaharia)
- PDF: https://www.usenix.org/system/files/conference/nsdi12/nsdi12-final138.pdf
