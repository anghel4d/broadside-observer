---
title: "Discretized Streams: Fault-Tolerant Streaming Computation at Scale"
authors:
  - "Matei Zaharia"
  - "Tathagata Das"
  - "Haoyuan Li"
  - "Timothy Hunter"
  - "Scott Shenker"
  - "Ion Stoica"
year: 2013
venue: "SOSP"
arxiv: null
doi: "10.1145/2517349.2522737"
source: "https://doi.org/10.1145/2517349.2522737"
topics:
  - streaming
  - spark
seed_rank: 828
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "MillWheel: Fault-Tolerant Stream Processing at Internet Scale"
    url: "https://doi.org/10.14778/2536222.2536229"
    year: 2013
    arxiv: null
    doi: "10.14778/2536222.2536229"
    card: "814-millwheel-fault-tolerant-stream-processing-at-internet-scale"
  - title: "Naiad: A Timely Dataflow System"
    url: "https://doi.org/10.1145/2517349.2522738"
    year: 2013
    arxiv: null
    doi: "10.1145/2517349.2522738"
    card: "829-naiad-a-timely-dataflow-system"
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
---

# Discretized Streams: Fault-Tolerant Streaming Computation at Scale

## One-sentence takeaway

Discretized Streams: Streaming/incremental computation with strong semantic models.

## Why it matters here

Incremental/streaming IVM is the right lens for live Broadside indexes and reactive observers.

## Key ideas

- Venue/year anchor: SOSP 2013.
- Differentials / timely frontiers keep views fresh without full recompute.
- Primary topics: streaming, spark.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/2517349.2522737](https://doi.org/10.1145/2517349.2522737)
- URL: https://doi.org/10.1145/2517349.2522737
