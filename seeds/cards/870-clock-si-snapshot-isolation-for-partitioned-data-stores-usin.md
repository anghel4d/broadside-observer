---
title: "Clock-SI: Snapshot Isolation for Partitioned Data Stores Using Loosely Synchronized Clocks"
authors:
- Jiaqing Du
- Sameh Elnikety
- Willy Zwaenepoel
year: 2013
venue: SRDS
arxiv: null
doi: 10.1109/SRDS.2013.26
source: "https://doi.org/10.1109/SRDS.2013.26"
topics:
- databases
- contemporary-db
seed_rank: 870
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# Clock-SI: Snapshot Isolation for Partitioned Data Stores Using Loosely Synchronized Clocks

## One-sentence takeaway

Clock-SI assigns snapshot and commit timestamps from each partition's local physical clock, so distributed snapshot isolation needs no centralized timestamp oracle.

## Why it matters here

Percolator-style SI in GRID COMMAND usually implies a timestamp service. Clock-SI is the "NTP-grade clocks are good enough if you delay a snapshot that is in the future of a slow partition" alternative.

## Key ideas

- A transaction's snapshot time is the local clock at its originating partition; a partition whose clock is behind that snapshot serves the read only after its clock catches up (or returns a slightly older consistent version).
- Commit timestamp is likewise local; remote partitions enforce SI write-write checks against that timestamp without a global counter.
- Loosely synchronized clocks replace both a timestamp oracle and a commit-wait against trueTime-style uncertainty, at the cost of short delayed reads.
- Implemented over a partitioned key-value store; evaluation shows the delay is small under normal NTP skew and SI anomaly rates stay in line with centralized SI.
- Ancestor of later clock-SI / hybrid-logical-clock work in Cockroach-style systems, distinct from Spanner's TrueTime commit-wait.

## Caveats

## Links

- DOI: [10.1109/SRDS.2013.26](https://doi.org/10.1109/SRDS.2013.26)
- PDF: https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/samehe-clocksi.srds2013.pdf
