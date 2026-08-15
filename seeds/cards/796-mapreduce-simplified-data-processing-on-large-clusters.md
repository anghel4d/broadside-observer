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
seed_rank: 796
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
see:
- "795-the-google-file-system"
---

# MapReduce: Simplified Data Processing on Large Clusters

## One-sentence takeaway

MapReduce lets a user write `map(k1,v1)→list(k2,v2)` and `reduce(k2,list(v2))→list(v2)` while the runtime partitions input, schedules workers, shuffles by key, retries failures, and kills stragglers.

## Why it matters here

This is the programming model that defined a decade of cluster analytics and still shapes how Broadside would batch-process a corpus or how GRID COMMAND would roll up replay logs — locality-aware map, shuffle, reduce.

## Key ideas

- Input is split into $M$ map tasks; intermediate keys are hashed into $R$ reduce partitions; the master assigns idle workers.
- GFS locality: the master prefers a mapper that already holds a replica of the split, so most bytes never leave the machine.
- Worker failure re-executes in-flight tasks and completed maps (their output lived on the dead disk); completed reduces are already in GFS.
- Combiners do a local reduce before the shuffle; backup tasks cover stragglers; optional skip-bad-record mode unsticks deterministic crashes.

## Caveats

## Links

- USENIX: https://www.usenix.org/conference/osdi-04/mapreduce-simplified-data-processing-large-clusters
- PDF: https://www.usenix.org/legacy/event/osdi04/tech/full_papers/dean/dean.pdf
