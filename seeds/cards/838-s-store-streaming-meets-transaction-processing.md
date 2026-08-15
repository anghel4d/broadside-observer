---
title: "S-Store: Streaming Meets Transaction Processing"
authors:
- John Meehan
- Nesime Tatbul
- Stan Zdonik
- Cansu Aslantas
- Ugur Cetintemel
- Jiang Du
- Tim Kraska
- Samuel Madden
- David Maier
- Andrew Pavlo
- Michael Stonebraker
- Kristin Tufte
- Hao Wang
year: 2015
venue: arXiv cs.DB
arxiv: "1503.01143"
doi: 10.48550/arXiv.1503.01143
source: "https://arxiv.org/abs/1503.01143"
topics:
- databases
- contemporary-db
seed_rank: 838
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# S-Store: Streaming Meets Transaction Processing

## One-sentence takeaway

S-Store fuses streaming and OLTP inside H-Store: stream windows become transactional stored procedures with ACID boundaries, so a streaming pipeline can share tables with OLTP and still beat Spark Streaming / Storm on the paper’s workloads while offering stronger guarantees.

## Why it matters here

GRID COMMAND needs both “this tick’s orders are atomic” and “this sensor stream is continuous.” S-Store is the design that refuses to run those in two systems — model the stream as sequenced transactions on the same in-memory partitioned store.

## Key ideas

- A streaming workflow is a graph of stored procedures; each invocation is a transaction over the current window plus shared OLTP tables.
- Correctness is defined as a hybrid of ACID and stream recovery: exactly-once processing, ordered windows, and isolation from concurrent OLTP.
- Built on H-Store so single-partition transactions stay in memory with no locks; streaming is extra machinery (windows, triggers, recovery) on that substrate.
- Throughput on streaming workloads exceeds a pure H-Store encoding of the same job, and matches or beats Storm / Spark Streaming with transactional semantics those engines lack.

## Caveats

## Links

- arXiv: [1503.01143](https://arxiv.org/abs/1503.01143)
