---
title: "Presto: SQL on Everything"
authors:
- Raghav Sethi
- Martin Traverso
- Dain Sundstrom
- David Phillips
- Wenlei Xie
- Yutian Sun
- Nezih Yegitbasi
- Haozhun Jin
- Eric Hwang
- Nileema Shingte
- Christopher Berner
year: 2019
venue: ICDE
arxiv: null
doi: 10.1109/ICDE.2019.00196
source: "https://doi.org/10.1109/ICDE.2019.00196"
topics:
- databases
- contemporary-db
seed_rank: 825
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# Presto: SQL on Everything

## One-sentence takeaway

Presto is Facebook’s ANSI-SQL engine that federates Hive, Kafka, MySQL, and proprietary stores through a coordinator/worker architecture with pipelined, in-memory, vectorized operators and a connector SPI, so one SQL dialect queries everything without first loading it into a warehouse.

## Why it matters here

Broadside already lives across heterogeneous sources. Presto (now Trino) is the practical “SQL over adapters” engine sitting next to Calcite: use it when the job is interactive federation, not owning storage.

## Key ideas

- A coordinator parses, plans, and schedules; workers execute pipelined fragments and shuffle over the network — no MapReduce materialization between stages.
- The connector SPI lets a catalog own splits, layouts, and push-downs (projection, predicate, aggregation) so a Hive connector and a Kafka connector look the same to the planner.
- Execution is vectorized and memory-oriented, with spilling as a backstop; the design target is human-interactive latency on warehouse-scale scans.
- Isolation and multi-tenancy come from per-query resource tracking rather than from moving data into a dedicated warehouse cluster.

## Caveats

## Links

- DOI: [10.1109/ICDE.2019.00196](https://doi.org/10.1109/ICDE.2019.00196)
- URL: https://doi.org/10.1109/ICDE.2019.00196
