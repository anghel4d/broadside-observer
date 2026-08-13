---
title: "Structured Streaming: A Declarative API for Real-Time Applications in Apache Spark"
authors:
  - "Michael Armbrust"
  - "Tathagata Das"
  - "Joseph Torres"
  - "Burak Yavuz"
  - "Reynold Xin"
  - "Ali Ghodsi"
  - "Ion Stoica"
  - "Matei Zaharia"
year: 2018
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3183713.3190664"
source: "https://doi.org/10.1145/3183713.3190664"
topics:
  - streaming
  - spark
seed_rank: 749
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Apache Flink: Stream and Batch Processing in a Single Engine"
    url: "http://sites.computer.org/debull/A15dec/p28.pdf"
    year: 2015
    arxiv: null
    doi: null
    card: "864-apache-flink-stream-and-batch-processing-in-a-single-engine"
  - title: "Spark SQL: Relational Data Processing in Spark"
    url: "https://doi.org/10.1145/2723372.2742797"
    year: 2015
    arxiv: null
    doi: "10.1145/2723372.2742797"
    card: "812-spark-sql-relational-data-processing-in-spark"
  - title: "The Dataflow Model: A Practical Approach to Balancing Correctness, Latency, and Cost in Massive-Scale, Unbounded, Out-of-Order Data Processing"
    url: "https://doi.org/10.14778/2824032.2824076"
    year: 2015
    arxiv: null
    doi: "10.14778/2824032.2824076"
    card: "751-the-dataflow-model-a-practical-approach-to-balancing-correct"
  - title: "MillWheel: Fault-Tolerant Stream Processing at Internet Scale"
    url: "https://doi.org/10.14778/2536222.2536229"
    year: 2013
    arxiv: null
    doi: "10.14778/2536222.2536229"
    card: "814-millwheel-fault-tolerant-stream-processing-at-internet-scale"
---

# Structured Streaming: A Declarative API for Real-Time Applications in Apache Spark

## One-sentence takeaway

Structured Streaming: Streaming/incremental computation with strong semantic models.

## Why it matters here

Incremental/streaming IVM is the right lens for live Broadside indexes and reactive observers.

## Key ideas

- Venue/year anchor: SIGMOD 2018.
- Differentials / timely frontiers keep views fresh without full recompute.
- Primary topics: streaming, spark.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3183713.3190664](https://doi.org/10.1145/3183713.3190664)
- URL: https://doi.org/10.1145/3183713.3190664
