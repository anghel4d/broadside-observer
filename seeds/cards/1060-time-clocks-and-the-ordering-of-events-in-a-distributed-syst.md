---
title: "Time, Clocks, and the Ordering of Events in a Distributed System"
authors:
- Leslie Lamport
year: 1978
venue: Communications of the ACM
arxiv: null
doi: 10.1145/359545.359563
source: "https://doi.org/10.1145/359545.359563"
topics:
- distributed-systems
- lamport-clocks
seed_rank: 1060
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: Timestamps in Message-Passing Systems That Preserve the Partial Ordering
  url: "https://en.wikipedia.org/wiki/Vector_clock"
  year: 1988
  arxiv: null
  doi: null
  card: 1061-timestamps-in-message-passing-systems-that-preserve-the-part
- title: Virtual Time and Global States of Distributed Systems
  url: "https://homes.cs.washington.edu/~arvind/cs425/doc/mattern89virtual.pdf"
  year: 1989
  arxiv: null
  doi: null
  card: 1062-virtual-time-and-global-states-of-distributed-systems
- title: "Distributed Snapshots: Determining Global States of Distributed Systems"
  url: "https://doi.org/10.1145/214451.214456"
  year: 1985
  arxiv: null
  doi: 10.1145/214451.214456
  card: 1063-distributed-snapshots-determining-global-states-of-distribut
- title: The Part-Time Parliament
  url: "https://doi.org/10.1145/279227.279229"
  year: 1998
  arxiv: null
  doi: 10.1145/279227.279229
  card: 1064-the-part-time-parliament
---

# Time, Clocks, and the Ordering of Events in a Distributed System

## One-sentence takeaway

Happens-before and Lamport logical clocks — partial order of distributed events.

## Why it matters here

Root of causality tracking for Anoptic/GRID COMMAND distributed sims and logs.

## Key ideas

- Happens-before partial order.
- Logical clocks obey causality.
- Distributed state machine motivation.
- Foundation for vector clocks.

## Caveats

- Logical time is not synchronized real time.
- Clock skew needs NTP/PTP separately.

## Links

- DOI: [10.1145/359545.359563](https://doi.org/10.1145/359545.359563)
- URL: https://doi.org/10.1145/359545.359563
