---
title: "Apache Flink: Stream and Batch Processing in a Single Engine"
authors:
- Paris Carbone
- Asterios Katsifodimos
- Stephan Ewen
- Volker Markl
- Seif Haridi
- Kostas Tzoumas
year: 2015
venue: IEEE Data Engineering Bulletin
arxiv: null
doi: null
source: "https://www.diva-portal.org/smash/get/diva2:1059537/FULLTEXT01.pdf"
topics:
- databases
- contemporary-db
seed_rank: 837
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# Apache Flink: Stream and Batch Processing in a Single Engine

## One-sentence takeaway

Flink treats batch as a finite stream: one pipelined dataflow runtime with stateful operators, event-time windows, and distributed snapshots (asynchronous barrier checkpointing) so streaming, batch, and iterative jobs share an engine.

## Why it matters here

GRID COMMAND simulation ticks and Broadside ingest are streams that occasionally want a bounded replay. Flink is the “one runtime, two APIs” design to steal — stateful operators plus consistent checkpoints — rather than standing up Spark *and* a separate CEP bus.

## Key ideas

- The runtime is a cyclic dataflow of stateful operators; batch is the special case where the input is finite and watermarks eventually close.
- Event time plus watermarks let windows fire correctly on out-of-order streams; processing time is the low-latency fallback.
- Asynchronous barrier snapshots checkpoint operator state without stopping the pipeline, giving exactly-once sink semantics when combined with replayable sources.
- Iterative algorithms (bulk / delta iterations) are first-class cycles in the same dataflow, not an outer driver loop submitting new jobs.

## Caveats

## Links

- PDF: https://www.diva-portal.org/smash/get/diva2:1059537/FULLTEXT01.pdf
- Bulletin: IEEE Data Engineering Bulletin 38(4), 2015, pp. 28–38
