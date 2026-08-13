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
  - title: "CoGraM: Context-sensitive granular optimization method with rollback for robust model fusion"
    url: "https://arxiv.org/abs/2512.03610"
    year: 2025
    arxiv: "2512.03610"
    doi: null
  - title: "Overwatch Gameplay Architecture and Netcode (ECS-flavored)"
    url: "https://www.gdcvault.com/play/1024001/-Overwatch-Gameplay-Architecture-and"
    year: 2017
    arxiv: null
    doi: null
  - title: "GGPO Rollback Networking"
    url: "https://github.com/pond3r/ggpo"
    year: 2006
    arxiv: null
    doi: null
see:
  - "263-overwatch-gameplay-architecture-and-netcode-ecs-flavored"
  - "197-ggpo-rollback-networking"
---

# LOG.io: Unified Rollback Recovery and Data Lineage Capture for Distributed Data Pipelines

## One-sentence takeaway

This paper introduces LOG.io, a comprehensive solution designed for correct rollback recovery and fine-grain data lineage capture in distributed data pipelines.

## Why it matters here

Systems/HPC craft relevant to Anoptic concurrency, allocators, and parallel jobbing (LOG.io: Unified Rollback Recovery and Data Lineage Capture for Distributed Data ).

## Key ideas

- This paper introduces LOG.io, a comprehensive solution designed for correct rollback recovery and fine-grain data lineage capture in distributed data pipelines.
- It is tailored for serverless scalable architectures and uses a log-based rollback recovery protocol.
- LOG.io supports a general programming model, accommodating non-deterministic operators, interactions with external systems, and arbitrary custom code.
- It is non-blocking, allowing failed operators to recover independently without interrupting other active operators, thereby leveraging data parallelization, and it facilitates dynamic scaling of operators during pipeline execution.
- Performance evaluations, conducted within the SAP Data Intelligence system, compare LOG.io with the Asynchronous Barrier Snapshotting (ABS) protocol, originally implemented in Flink.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2512.16038](https://arxiv.org/abs/2512.16038)
- URL: https://arxiv.org/abs/2512.16038
