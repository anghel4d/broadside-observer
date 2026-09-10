---
title: "RobustSGPO: Search-Space Control for Agent Harness Evolution"
authors:
  - "Zibo Zhao"
  - "Jijun Shi"
  - "Mo Zhou"
  - "Zhongyuan Wang"
  - "Shifu Bie"
  - "Yunfei Zhang"
  - "Xuanting Zhou"
  - "Xiangyu Wu"
  - "Bin Liu"
  - "Ruiming Tang"
  - "Wenwu Ou"
  - "Kun Gai"
year: 2026
venue: "arXiv"
arxiv: "2609.09646"
doi: null
source: "https://arxiv.org/abs/2609.09646"
topics:
  - "harness-engineering"
  - "autoresearch-experiment-selection"
seed_rank: 1769
seed_batch: "frontier-2026-09-10"
reviewed: "2026-09-10"
pool: "agents"
relevance_score: 9
lineage: harness-evolution-search
cites:
  - title: "RobustSGPO: Search-Space Control for Agent Harness Evolution"
    url: "https://arxiv.org/abs/2609.09646"
    year: 2026
    arxiv: "2609.09646"
    doi: null
see:
  - "1637-evoharnessbench-can-your-agents-keep-pace-with-an-evolving-harness"
  - "1573-where-does-harness-optimization-value-live-localized-gains-and-the"
  - "1536-harness-engineering-anatomy-architecture-and-evolution-of-coding-agent"
  - "1119-harness-continual-learning-continual-adaptation-beyond-model-par"
---

# RobustSGPO: Search-Space Control for Agent Harness Evolution

## One-sentence takeaway

RobustSGPO adds edit-scope control, patch validation, and snapshot retention to SGPO harness search — periodic 1→2→3 permission scheduling beats fixed max-permission and lifts held-out completion 60%→80% under a 20M-token budget.

## Why it matters here

EVOHARNESSBENCH (1637) asked whether agents keep pace with evolving harnesses; RobustSGPO is the search-control side — how to evolve the harness itself without thrashing. Search-space control (edit scope + retention) is the missing knob for Broadside autoresearch loops that rewrite ano/GRID COMMAND scaffolds under token budgets.

## Key ideas

- SGPO’s local update leaves edit scope and operation underspecified; RobustSGPO specifies the edit, builds/checks the patch, and continues from incumbent or retained snapshots.
- AgentX brainstorming workflow: 120 tasks, 95 runs, 7,350 candidate attempts.
- Periodic 1→2→3 permission scheduling beats fixed maximum permission by 0.28 test-score points.
- Held-out 30 tasks: completion 60.0%→80.0%, test quality 3.77→4.14 under 20M-token budget.
- Category retention reduces source-task degradation after a shift; random retention reaches higher destination endpoint — retention policy is load-bearing.

## Caveats

Brainstorming/AgentX workflow, not coding-agent SWE repair. Retention overhead is real. Do not remint 1637 / 1573.

## Links

- arXiv: [2609.09646](https://arxiv.org/abs/2609.09646)
- PDF: https://arxiv.org/pdf/2609.09646
