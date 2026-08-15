---
title: Timestamps in Message-Passing Systems That Preserve the Partial Ordering
authors:
- Colin J. Fidge
year: 1988
venue: Australian Computer Science Communications
arxiv: null
doi: null
source: "https://en.wikipedia.org/wiki/Vector_clock"
topics:
- vector-clocks
- distributed-systems
seed_rank: 786
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
- title: Virtual Time and Global States of Distributed Systems
  url: "https://vs.inf.ethz.ch/publ/papers/VirtTimeGlobStates.pdf"
  year: 1989
  arxiv: null
  doi: null
see:
- "785-time-clocks-and-the-ordering-of-events-in-a-distributed-syst"
- "787-virtual-time-and-global-states-of-distributed-systems"
---

# Timestamps in Message-Passing Systems That Preserve the Partial Ordering

## One-sentence takeaway

Fidge timestamps each event with an $n$-vector of per-process counters so $V(a)<V(b)$ (componentwise) if and only if $a$ happens-before $b$, detecting concurrency that scalar Lamport clocks cannot.

## Why it matters here

Vector clocks are what replication, CRDT merges, and GRID COMMAND multiplayer logs need when “concurrent vs causal” is a real distinction, not just a total order for a state machine.

## Key ideas

- Process $i$ increments $V_i$ on each local event and piggybacks the whole vector on messages.
- On receive, the process takes the componentwise max with the incoming vector, then increments its own component.
- Incomparable vectors mean concurrent events; this is exactly the happens-before partial order.
- Independent of Mattern 1989; cite both. The 1988 ACSC paper is *Australian Computer Science Communications* 10(1):56–66.

## Caveats

## Links

- Wikipedia (stable landing; no DOI): https://en.wikipedia.org/wiki/Vector_clock
- Companion formulation: https://vs.inf.ethz.ch/publ/papers/VirtTimeGlobStates.pdf
