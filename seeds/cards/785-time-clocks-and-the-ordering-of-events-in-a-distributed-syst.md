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
seed_rank: 785
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites: []
see: []
---

# Time, Clocks, and the Ordering of Events in a Distributed System

## One-sentence takeaway

Lamport defines happens-before as the least partial order closed under program order and message send/receive, then implements it with scalar logical clocks that satisfy $a\to b\implies C(a)<C(b)$.

## Why it matters here

This is the causality primitive for Anoptic/GRID COMMAND lockstep logs, Broadside distributed ingest, and any multi-node sim that must order events without a shared wall clock.

## Key ideas

- $a\to b$ if $a$ precedes $b$ in the same process, or $a$ is a send and $b$ the matching receive, or they are chained by such steps.
- Each process keeps a counter, increments on every event, and piggybacks the counter on messages; the receiver takes $\max(\text{local},\text{msg})+1$.
- Logical time totally orders events consistently with causality but cannot *detect* concurrency ($C(a)<C(b)$ does not imply $a\to b$).
- The paper motivates distributed state machines: agree on a total order of commands by ordering their logical timestamps.

## Caveats

## Links

- DOI: [10.1145/359545.359563](https://doi.org/10.1145/359545.359563)
- URL: https://doi.org/10.1145/359545.359563
