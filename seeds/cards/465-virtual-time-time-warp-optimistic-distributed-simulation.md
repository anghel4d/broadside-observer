---
title: "Virtual Time"
authors:
  - "David R. Jefferson"
year: 1985
venue: "ACM TOPLAS"
arxiv: null
doi: "10.1145/3916.3988"
source: "https://doi.org/10.1145/3916.3988"
topics:
  - rollback
  - simulation
seed_rank: 465
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 8
lineage: game-networking
cites:
  - title: "Distributed Discrete-Event Simulation"
    url: "https://doi.org/10.1145/6462.6485"
    year: 1986
    doi: "10.1145/6462.6485"
---

# Virtual Time

## One-sentence takeaway

Jefferson's Time Warp lets each process advance on its own virtual clock and, on a causality fault, rolls back by sending antimessages that cancel the speculative events already sent.

## Why it matters here

Intellectual ancestor of GGPO-style speculate-and-rollback: same optimistic execute / undo-on-misprediction shape, even though DES virtual time is not fighting-game netcode.

## Key ideas

- Virtual time is a global partial order of events; processes may run ahead of others and later correct.
- Incorrect messages are annihilated by antimessages; the receiver rolls back to the last correct state and re-executes.
- Global Virtual Time (GVT) is the minimum unprocessed timestamp across the system and bounds fossil collection of old states.
- Optimistic alternative to conservative Chandy–Misra lookahead: no blocking wait for safe events.

## Caveats

## Links

- DOI: [10.1145/3916.3988](https://doi.org/10.1145/3916.3988)
