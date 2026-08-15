---
title: Large-scale incremental processing using distributed transactions and notifications
authors:
- Daniel Peng
- Frank Dabek
year: 2010
venue: OSDI
arxiv: null
doi: null
source: "https://www.usenix.org/conference/osdi10/large-scale-incremental-processing-using-distributed-transactions-and"
topics:
- databases
- contemporary-db
seed_rank: 858
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Bigtable: A Distributed Storage System for Structured Data"
    url: "https://research.google/pubs/pub27898/"
    year: 2006
    arxiv: null
    doi: null
  - title: "The Google File System"
    url: "https://research.google/pubs/the-google-file-system/"
    year: 2003
    arxiv: null
    doi: null
see:
  - "813-bigtable-a-distributed-storage-system-for-structured-data"
  - "795-the-google-file-system"
---

# Large-scale incremental processing using distributed transactions and notifications

## One-sentence takeaway

Percolator layers snapshot-isolated distributed transactions and observer notifications on Bigtable so Google's web index can update incrementally instead of waiting for the next MapReduce bulk rebuild.

## Why it matters here

Broadside and GRID COMMAND ingest a firehose of events that should poke only the dependent views, not rebuild the world. Percolator is the "observers + 2PC over a distributed table" pattern for that incremental graph.

## Key ideas

- Built as a client library on Bigtable: each row/column can hold a lock, write, and data column; a timestamp oracle issues strictly increasing snapshot timestamps.
- Snapshot isolation via optimistic 2PC: primary lock, secondary locks, then commit-wait; workers clash and abort rather than blocking for long.
- Observers register on columns; a committed write enqueues notifications that wake later transactions, chaining incremental document → link → PageRank-style work.
- Deployed on the Google web index: same documents/day as the old batch pipeline, but mean document age in search results dropped ~50%.
- Stragglers and worker death are handled by lock-steal after a timeout; the timestamp oracle is the remaining centralized piece.

## Caveats

## Links

- USENIX: https://www.usenix.org/conference/osdi10/large-scale-incremental-processing-using-distributed-transactions-and
- PDF: https://www.usenix.org/legacy/event/osdi10/tech/full_papers/Peng.pdf
