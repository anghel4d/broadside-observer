---
title: "Apache Calcite: A Foundational Framework for Optimized Query Processing Over Heterogeneous Data Sources"
authors:
- Edmon Begoli
- Jesús Camacho-Rodríguez
- Julian Hyde
- Michael J. Mior
- Daniel Lemire
year: 2018
venue: SIGMOD
arxiv: "1802.10233"
doi: 10.1145/3183713.3190662
source: "https://arxiv.org/abs/1802.10233"
topics:
- databases
- contemporary-db
seed_rank: 822
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# Apache Calcite: A Foundational Framework for Optimized Query Processing Over Heterogeneous Data Sources

## One-sentence takeaway

Calcite is an embeddable query toolkit — parser, relational algebra, cost-based optimizer with hundreds of rules, and adapter bindings — that Hive, Flink, Druid, MapD, and others reuse instead of each reinventing SQL planning over heterogeneous stores.

## Why it matters here

GRID COMMAND / Broadside already mix columnar ECS, logs, and external tables. Calcite is the off-the-shelf “SQL + optimizer as a library” so ano-side query front-ends can plan across those adapters without owning a Cascades implementation.

## Key ideas

- Everything lowers to a relational algebra of convention-over-configuration operators; pluggable calling conventions let the planner push work into a JDBC source, a streaming runtime, or a geospatial index.
- The optimizer is Volcano/Cascades-style: hundreds of built-in transformation and implementation rules, with metadata providers supplying costs and statistics per adapter.
- Adapters wrap heterogeneous models (relational, semi-structured, streaming, geospatial) behind a common schema/catalog SPI.
- The framework is deliberately unbundled from storage and execution: engines embed Calcite for planning and keep their own operators.

## Caveats

## Links

- arXiv: [1802.10233](https://arxiv.org/abs/1802.10233)
- DOI: [10.1145/3183713.3190662](https://doi.org/10.1145/3183713.3190662)
