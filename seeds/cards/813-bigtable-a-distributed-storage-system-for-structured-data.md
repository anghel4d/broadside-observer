---
title: "Bigtable: A Distributed Storage System for Structured Data"
authors:
- Fay Chang
- Jeffrey Dean
- Sanjay Ghemawat
- Wilson C. Hsieh
- Deborah A. Wallach
- Mike Burrows
- Tushar Chandra
- Andrew Fikes
- Robert E. Gruber
year: 2006
venue: OSDI
arxiv: null
doi: 10.5555/1298455.1298475
source: "https://www.usenix.org/conference/osdi-06/bigtable-distributed-storage-system-structured-data"
topics:
- databases
- contemporary-db
seed_rank: 813
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
- title: "Paxos Made Live: An Engineering Perspective"
  url: "https://research.google.com/archive/paxos_made_live.html"
  year: 2007
  arxiv: null
  doi: 10.1145/1281100.1281103
see:
- "841-mapreduce-simplified-data-processing-on-large-cluster"
- "839-paxos-made-live-an-engineering-perspective-2006-invited-talk"
---

# Bigtable: A Distributed Storage System for Structured Data

## One-sentence takeaway

Bigtable is a sparse, distributed, persistent multidimensional sorted map `(row, column, timestamp) → bytes` that scales to petabytes across thousands of commodity machines by splitting row ranges into tablets served from GFS SSTables.

## Why it matters here

It is the template for “wide-column store as the engine’s telemetry / replay / catalog spine”: locality is a schema choice (reverse-URL rows, column families, locality groups), not a JOIN. HBase, Cassandra’s data model, and Spanner’s tablet layer all start here.

## Key ideas

- Rows are lexicographically ordered and dynamically partitioned into tablets (~100–200 MB); a three-level METADATA / Chubby hierarchy locates them, and clients talk to tablet servers directly.
- Column families are the unit of access control, compression, and locality; timestamps version cells, with per-family GC (keep last n, or only recent).
- Writes go to a commit log plus an in-memory memtable, then flush to immutable SSTables; minor / merging / major compactions bound file count and reclaim deletes.
- Chubby elects the master, holds schema and server locks; Bloom filters and two-level caches keep most point reads off GFS.

## Caveats

## Links

- USENIX: [OSDI 2006](https://www.usenix.org/conference/osdi-06/bigtable-distributed-storage-system-structured-data)
- PDF: http://usenix.org/event/osdi06/tech/chang/chang.pdf
- Google Research: https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf
