---
title: "Scaling Worst-Case Optimal Datalog to GPUs"
authors:
  - "Yihao Sun"
  - "Kunting Qi"
  - "Thomas Gilray"
  - "Sidharth Kumar"
  - "Kristopher Micinski"
year: 2026
venue: "arXiv"
arxiv: "2604.20073"
doi: null
source: "https://arxiv.org/abs/2604.20073"
topics:
  - production-rules-triggers
  - relational-ecs-queries
seed_rank: 198
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
---

# Scaling Worst-Case Optimal Datalog to GPUs

## One-sentence takeaway

Datalog is a declarative logic-programming language used for complex analytic reasoning workloads such as program analysis and graph analytics.

## Why it matters here

Datalog/deductive evaluation relevant to ano standing rules over columnar ECS.

## Key ideas

- Datalog is a declarative logic-programming language used for complex analytic reasoning workloads such as program analysis and graph analytics.
- Datalog's popularity is due to its unique price-point, marrying logic-defined specification with the potential for massive data parallelism.
- While traditional engines are CPU-based, the memory-bound nature of Datalog has led to increasing interest in leveraging GPUs.
- These engines beat CPU-based engines by operationalizing iterated relational joins via SIMT-friendly join algorithms.
- Unfortunately, all existing GPU Datalog engines are built on binary joins, which are inadequate for the complex multi-way queries arising in production systems such as DOOP and ddisasm.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2604.20073](https://arxiv.org/abs/2604.20073)
- URL: https://arxiv.org/abs/2604.20073
