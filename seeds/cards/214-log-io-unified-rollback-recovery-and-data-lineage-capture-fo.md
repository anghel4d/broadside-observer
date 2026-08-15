---
title: "LOG.io: Unified Rollback Recovery and Data Lineage Capture for Distributed Data Pipelines"
authors:
  - "Eric Simon"
  - "Renato B. Hoffmann"
  - "Lucas Alf"
  - "Dalvan Griebler"
year: 2025
venue: "arXiv:cs.DC"
arxiv: "2512.16038"
doi: null
source: "https://arxiv.org/abs/2512.16038"
topics:
  - netcode
seed_rank: 214
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Lightweight Asynchronous Snapshots for Distributed Dataflows"
    url: "https://arxiv.org/abs/1506.08603"
    year: 2015
    arxiv: "1506.08603"
    doi: null
  - title: "A survey of rollback-recovery protocols in message-passing systems"
    url: "https://doi.org/10.1145/568522.568525"
    year: 2002
    arxiv: null
    doi: "10.1145/568522.568525"
---

# LOG.io: Unified Rollback Recovery and Data Lineage Capture for Distributed Data Pipelines

## One-sentence takeaway

LOG.io is a non-blocking, log-based rollback protocol for serverless data pipelines that also records event-granularity lineage between any two operators at under 1.5% overhead.

## Why it matters here

Broadside replay and Anoptic command-stream recovery need the same pair of properties: independent operator restart plus a lineage log that can answer "which inputs produced this output."

## Key ideas

- Programming model allows non-deterministic operators, external I/O, and arbitrary custom code — not just pure dataflow.
- Failed operators recover from the log without pausing healthy peers, so data-parallelism stays live during recovery.
- Operators can be rescaled while the pipeline is running.
- Versus Flink's Asynchronous Barrier Snapshotting inside SAP Data Intelligence: LOG.io matches or beats ABS with stragglers at moderate event rates (~10 Hz) and loses otherwise, unless extra data-parallelism is applied.
- Lineage is captured at event grain between any operator pair; measured tax is under 1.5% in every experiment.

## Caveats

## Links

- arXiv: [2512.16038](https://arxiv.org/abs/2512.16038)
- PDF: https://arxiv.org/pdf/2512.16038
