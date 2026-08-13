---
title: "Apache Flink: Stream and Batch Processing in a Single Engine"
authors:
  - "Paris Carbone"
  - "Asterios Katsifodimos"
  - "Stephan Ewen"
  - "Volker Markl"
  - "Seif Haridi"
  - "Kostas Tzoumas"
year: 2015
venue: "IEEE Data Eng. Bull."
arxiv: null
doi: null
source: "http://sites.computer.org/debull/A15dec/p28.pdf"
topics:
  - streaming
  - batch
seed_rank: 864
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "The Dataflow Model: A Practical Approach to Balancing Correctness, Latency, and Cost in Massive-Scale, Unbounded, Out-of-Order Data Processing"
    url: "https://doi.org/10.14778/2824032.2824076"
    year: 2015
    arxiv: null
    doi: "10.14778/2824032.2824076"
    card: "751-the-dataflow-model-a-practical-approach-to-balancing-correct"
  - title: "Discretized Streams: Fault-Tolerant Streaming Computation at Scale"
    url: "https://doi.org/10.1145/2517349.2522737"
    year: 2013
    arxiv: null
    doi: "10.1145/2517349.2522737"
    card: "828-discretized-streams-fault-tolerant-streaming-computation-at-"
  - title: "Structured Streaming: A Declarative API for Real-Time Applications in Apache Spark"
    url: "https://doi.org/10.1145/3183713.3190664"
    year: 2018
    arxiv: null
    doi: "10.1145/3183713.3190664"
    card: "749-structured-streaming-a-declarative-api-for-real-time-applica"
  - title: "MillWheel: Fault-Tolerant Stream Processing at Internet Scale"
    url: "https://doi.org/10.14778/2536222.2536229"
    year: 2013
    arxiv: null
    doi: "10.14778/2536222.2536229"
    card: "814-millwheel-fault-tolerant-stream-processing-at-internet-scale"
---

# Apache Flink: Stream and Batch Processing in a Single Engine

## One-sentence takeaway

Apache Flink: Streaming/incremental computation with strong semantic models.

## Why it matters here

Incremental/streaming IVM is the right lens for live Broadside indexes and reactive observers.

## Key ideas

- Venue/year anchor: IEEE Data Eng. Bull. 2015.
- Differentials / timely frontiers keep views fresh without full recompute.
- Primary topics: streaming, batch.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- URL: http://sites.computer.org/debull/A15dec/p28.pdf
