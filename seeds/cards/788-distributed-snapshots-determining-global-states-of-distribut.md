---
title: "Distributed Snapshots: Determining Global States of Distributed Systems"
authors:
- K. Mani Chandy
- Leslie Lamport
year: 1985
venue: ACM Transactions on Computer Systems
arxiv: null
doi: 10.1145/214451.214456
source: "https://doi.org/10.1145/214451.214456"
topics:
- distributed-systems
- chandy-lamport
- snapshots
seed_rank: 788
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
see:
- "785-time-clocks-and-the-ordering-of-events-in-a-distributed-syst"
---

# Distributed Snapshots: Determining Global States of Distributed Systems

## One-sentence takeaway

Chandy–Lamport records a consistent global state without pausing the system: a process saves its local state and floods a marker on every outgoing FIFO channel; incoming messages before the marker are channel state.

## Why it matters here

This is the checkpoint/telemetry cut for distributed Anoptic sims and Broadside multi-node ingest: a consistent snapshot you can take while the world keeps ticking.

## Key ideas

- A cut is consistent if no recorded receive lacks its send — markers implement that rule on FIFO channels.
- The initiator records its state and sends markers; a process that first sees a marker records its own state, then forwards markers.
- Messages received on a channel after the local snapshot and before that channel’s marker are saved as in-flight channel state.
- The recorded state “could have occurred” and is enough to detect stable properties (termination, deadlock) even if it never occurred as a simultaneous freeze.

## Caveats

## Links

- DOI: [10.1145/214451.214456](https://doi.org/10.1145/214451.214456)
- URL: https://doi.org/10.1145/214451.214456
