---
title: Virtual Time and Global States of Distributed Systems
authors:
- Friedemann Mattern
year: 1989
venue: Workshop on Parallel and Distributed Algorithms
arxiv: null
doi: null
source: "https://vs.inf.ethz.ch/publ/papers/VirtTimeGlobStates.pdf"
topics:
- vector-clocks
- distributed-systems
seed_rank: 787
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: "Time, Clocks, and the Ordering of Events in a Distributed System"
  url: "https://doi.org/10.1145/359545.359563"
  year: 1978
  arxiv: null
  doi: 10.1145/359545.359563
- title: Timestamps in Message-Passing Systems That Preserve the Partial Ordering
  url: "https://en.wikipedia.org/wiki/Vector_clock"
  year: 1988
  arxiv: null
  doi: null
see:
- "785-time-clocks-and-the-ordering-of-events-in-a-distributed-syst"
- "786-timestamps-in-message-passing-systems-that-preserve-the-part"
---

# Virtual Time and Global States of Distributed Systems

## One-sentence takeaway

Mattern models virtual time as a lattice of clock vectors isomorphic to causality, characterizes consistent global states as antichains in that lattice, and gives a snapshot algorithm that tolerates out-of-order messages.

## Why it matters here

This is the cut-theory companion to Fidge: the citation for consistent snapshots and “concurrency = incomparable timestamps” when Anoptic or GRID COMMAND debugs a distributed sim.

## Key ideas

- Clock vectors form a lattice; $V(a)\le V(b)$ iff $a$ can causally affect $b$, so concurrent events are exactly the incomparable pairs.
- A consistent global state (cut) is a downward-closed set of events with no message received before it is sent — an antichain in vector time.
- The paper relates this lattice to Minkowski-style space-time and to Chandy–Lamport snapshots.
- A new snapshot algorithm is given that does not require FIFO channels.

## Caveats

## Links

- Author PDF (ETH): https://vs.inf.ethz.ch/publ/papers/VirtTimeGlobStates.pdf
