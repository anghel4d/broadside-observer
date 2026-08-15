---
title: Coordination Avoidance in Database Systems
authors:
- Peter Bailis
- Alan Fekete
- Michael J. Franklin
- Ali Ghodsi
- Joseph M. Hellerstein
- Ion Stoica
year: 2014
venue: Proceedings of the VLDB Endowment
arxiv: "1402.2237"
doi: 10.14778/2735508.2735509
source: "https://arxiv.org/abs/1402.2237"
topics:
- databases
- contemporary-db
seed_rank: 845
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: "Highly Available Transactions: Virtues and Limitations (Extended Version)"
  url: "https://arxiv.org/abs/1302.0309"
  year: 2013
  arxiv: "1302.0309"
  doi: 10.48550/arXiv.1302.0309
see:
- "848-highly-available-transactions-virtues-and-limitations-extend"
---

# Coordination Avoidance in Database Systems

## One-sentence takeaway

I-confluence is a criterion on invariants: if every pair of locally valid transactions can be merged into a globally valid state, those transactions need no runtime coordination; Bailis et al. apply it to foreign keys, unique counters, and TPC-C payment/new-order and show large geo-distributed speedups when coordination is skipped.

## Why it matters here

GRID COMMAND matchmaking, inventory decrements, and “unique name” constraints are invariants, not a blanket SERIALIZABLE tax. I-confluence is the test for which ECS / SQL constraints can stay coordination-free on a partitioned world sim.

## Key ideas

- An invariant I is I-confluent if, whenever two states each satisfy I and arose from a common ancestor by commuting operations, their merge also satisfies I.
- Many textbook constraints fail (uniqueness of a scarce resource, sequential ids); many others pass (monotonic counters, some foreign keys, replicated grow-only sets).
- The paper’s system (on top of their HAT / invariant-confluence line) admits uncoordinated commit for I-confluent operations and falls back to coordination only for the rest.
- TPC-C new-order/payment can be made mostly I-confluent with modest invariant rewrites, which is where the WAN latency win comes from.

## Caveats

## Links

- arXiv: [1402.2237](https://arxiv.org/abs/1402.2237)
- DOI: [10.14778/2735508.2735509](https://doi.org/10.14778/2735508.2735509)
