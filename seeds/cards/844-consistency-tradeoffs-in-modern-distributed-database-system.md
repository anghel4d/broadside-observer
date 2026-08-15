---
title: "Consistency Tradeoffs in Modern Distributed Database System Design: CAP is Only Part of the Story"
authors:
- Daniel J. Abadi
year: 2012
venue: IEEE Computer
arxiv: null
doi: 10.1109/MC.2012.33
source: "https://doi.org/10.1109/MC.2012.33"
topics:
- databases
- contemporary-db
seed_rank: 844
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: "Dynamo: Amazon's Highly Available Key-Value Store"
  url: "https://doi.org/10.1145/1294261.1294281"
  year: 2007
  arxiv: null
  doi: 10.1145/1294261.1294281
- title: "Spanner: Google's Globally-Distributed Database"
  url: "https://www.usenix.org/conference/osdi12/technical-sessions/presentation/corbett"
  year: 2012
  arxiv: null
  doi: 10.5555/2387880.2387905
see:
- "814-dynamo-amazon-s-highly-available-key-value-store"
- "812-spanner-google-s-globally-distributed-database"
---

# Consistency Tradeoffs in Modern Distributed Database System Design: CAP is Only Part of the Story

## One-sentence takeaway

Abadi’s PACELC says CAP is the partition case: if Partitioned, choose Availability or Consistency; Else (normal operation) choose Latency or Consistency — so Dynamo-style systems are PA/EL and Spanner-style systems are PC/EC.

## Why it matters here

When GRID COMMAND or Broadside pick a store, “we are CAP-available” is not a design. PACELC forces the everyday question: do cross-region writes wait for a quorum (EC) or return after a local write (EL)? That is the knob that actually shows up in frame time.

## Key ideas

- Most of a system’s life is not a partition; latency-vs-consistency in the common case is the neglected axis.
- PA/EL (Dynamo, Cassandra defaults): stay up during partitions and also avoid cross-replica round-trips when healthy.
- PC/EC (Spanner, H-Store-style): refuse to serve inconsistent answers, and pay coordination latency even in the failure-free case.
- PC/EL and PA/EC are possible but rarer; the taxonomy is a way to read product claims instead of treating every store as “CAP.”

## Caveats

## Links

- DOI: [10.1109/MC.2012.33](https://doi.org/10.1109/MC.2012.33)
- URL: https://doi.org/10.1109/MC.2012.33
