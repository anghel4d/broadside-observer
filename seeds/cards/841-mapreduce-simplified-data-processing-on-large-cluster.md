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
- databases
- contemporary-db
seed_rank: 841
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# MapReduce: Simplified Data Processing on Large Clusters

## One-sentence takeaway

Dean and Ghemawat reduce large-cluster batch jobs to a user `map` and `reduce`: the library partitions input, schedules workers, shuffles by key, and re-executes failed or slow tasks, so programmers process terabytes without writing the fault-tolerance themselves.

## Why it matters here

This is the paper the 2018 lookalike DOI on the old card was not. Broadside corpus jobs, Anoptic offline baking, and GRID COMMAND replay reduction still start here — even when the runtime is Spark or Flink, the mental model is map then group-by-key reduce, plus backup tasks for stragglers.

## Key ideas

- `map(k1, v1) → list(k2, v2)` and `reduce(k2, list(v2)) → list(v2)`; the runtime hashes intermediate keys into R reduce partitions.
- Locality: the master prefers map tasks on GFS replicas of the 16–64 MB input split so most bytes never hit the network.
- Worker failure re-runs in-progress work and completed maps (local output died with the machine); completed reduces are already in GFS. Backup tasks kill stragglers.
- Combiners, custom partitioners, and per-partition sorted output are the practical extensions; the master is a single scheduling point (and a rare abort).

## Caveats

## Links

- USENIX: [OSDI ’04](https://www.usenix.org/conference/osdi-04/mapreduce-simplified-data-processing-large-clusters)
- PDF: https://www.usenix.org/legacy/event/osdi04/tech/full_papers/dean/dean.pdf
