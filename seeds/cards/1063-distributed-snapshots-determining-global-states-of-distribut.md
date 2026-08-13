---
title: "Distributed Snapshots: Determining Global States of Distributed Systems"
authors:
- K. Mani Chandy
- Leslie Lamport
year: 1985
venue: ACM TOCS
arxiv: null
doi: 10.1145/214451.214456
source: "https://doi.org/10.1145/214451.214456"
topics:
- distributed-systems
- chandy-lamport
- snapshots
seed_rank: 1063
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: "Time, Clocks, and the Ordering of Events in a Distributed System"
  url: "https://doi.org/10.1145/359545.359563"
  year: 1978
  arxiv: null
  doi: 10.1145/359545.359563
  card: 1060-time-clocks-and-the-ordering-of-events-in-a-distributed-syst
---

# Distributed Snapshots: Determining Global States of Distributed Systems

## One-sentence takeaway

Chandy-Lamport snapshot algorithm for consistent global states.

## Why it matters here

Checkpoint/telemetry consistency primitive for distributed sims.

## Key ideas

- Marker messages on FIFO channels.
- Consistent cuts without stopping the system.
- Records local state plus channel state.
- Foundation for distributed debugging.

## Caveats

- Assumes FIFO channels in classic form.
- Not a consensus algorithm.

## Links

- DOI: [10.1145/214451.214456](https://doi.org/10.1145/214451.214456)
- URL: https://doi.org/10.1145/214451.214456
