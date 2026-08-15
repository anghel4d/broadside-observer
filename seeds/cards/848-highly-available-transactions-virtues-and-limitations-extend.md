---
title: "Highly Available Transactions: Virtues and Limitations (Extended Version)"
authors:
- Peter Bailis
- Aaron Davidson
- Alan Fekete
- Ali Ghodsi
- Joseph M. Hellerstein
- Ion Stoica
year: 2013
venue: arXiv cs.DB
arxiv: "1302.0309"
doi: 10.48550/arXiv.1302.0309
source: "https://arxiv.org/abs/1302.0309"
topics:
- databases
- contemporary-db
seed_rank: 848
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: "Consistency Tradeoffs in Modern Distributed Database System Design: CAP is Only Part of the Story"
  url: "https://doi.org/10.1109/MC.2012.33"
  year: 2012
  arxiv: null
  doi: 10.1109/MC.2012.33
see:
- "844-consistency-tradeoffs-in-modern-distributed-database-system"
- "845-coordination-avoidance-in-database-systems"
---

# Highly Available Transactions: Virtues and Limitations (Extended Version)

## One-sentence takeaway

HATs are transactional isolation levels that remain available under partitions and avoid cross-replica coordination in the common case; Bailis et al. classify which ACID isolation and replica-consistency guarantees are HAT-compliant and measure 100–1000× WAN latency wins against strongly coordinated txns, at the cost of forbidding true serializability.

## Why it matters here

This is the taxonomy behind “can GRID COMMAND take a snapshot without pausing the sim.” Read committed, many forms of repeatable read, and causal / atomic visibility *can* be HAT; full serializability cannot. Pick the guarantee that matches the invariant, then apply I-confluence (card 845) to the rest.

## Key ideas

- A HAT system never stalls a transaction on a remote replica or a minority partition; that rules out globally synchronized commit.
- The paper’s taxonomy unifies isolation (RC, SI, serializability, …) with replica consistency (eventual, causal, linearizable) and marks which cells are achievable as HATs.
- Experiments show the availability/latency gap is not a few milliseconds — it is orders of magnitude on transcontinental RTT.
- Semantic compromises are explicit: no serializability, no tight global snapshots, unless you leave the HAT envelope.

## Caveats

## Links

- arXiv: [1302.0309](https://arxiv.org/abs/1302.0309)
- VLDB 2014 conference version of the same result
