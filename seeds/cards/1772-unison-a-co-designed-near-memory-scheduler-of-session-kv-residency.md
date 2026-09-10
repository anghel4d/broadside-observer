---
title: "UNISON: A Co-Designed Near-Memory Scheduler of Session KV Residency for LLM Agents"
authors:
  - "Fan He"
  - "Yan Li"
  - "Xiaoyang Zeng"
year: 2026
venue: "arXiv"
arxiv: "2609.09643"
doi: null
source: "https://arxiv.org/abs/2609.09643"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 1772
seed_batch: "frontier-2026-09-10"
reviewed: "2026-09-10"
pool: "agents"
relevance_score: 10
lineage: agent-session-kv-scheduling
cites:
  - title: "UNISON: A Co-Designed Near-Memory Scheduler of Session KV Residency for LLM Agents"
    url: "https://arxiv.org/abs/2609.09643"
    year: 2026
    arxiv: "2609.09643"
    doi: null
see:
  - "1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving"
  - "1078-aborted-but-not-forgotten-kv-cache-retention-breaks-rollback-consistency"
  - "1640-kvmem-virtualizing-million-token-agent-workspaces-on-a-consumer-gpu"
  - "1605-growpage-on-demand-kv-budgeting-for-efficient-llm-reasoning-serving"
  - "1233-nexus-depth-adaptive-kv-cache-splicing-and-retrieval-decoupled"
---

# UNISON: A Co-Designed Near-Memory Scheduler of Session KV Residency for LLM Agents

## One-sentence takeaway

UNISON co-designs near-memory session KV scheduling for agent loops: SPEAR evicts by return-gap hazard and TIDE spends tool-wait idle as DMA budget — best non-oracle on 1,415 sessions / 33,596 turns across three model families.

## Why it matters here

Agent loops hold growing KV prefixes across tool waits; recency/timeout proxies treat a live wait as cold. This is the serving substrate Broadside needs beside 1077 / 1640 / Nexus 1233 — session-level residency for GRID COMMAND multi-unit NL sessions and long Anoptic harness traces.

## Key ideas

- Frames agent KV as a session-level hierarchy problem orthogonal to compute-mode optimization.
- SPEAR (Survival-Penalty Eviction for Agent Return-gap): who leaves, from gap average + turn-indexed hazard.
- TIDE (Tiering in Idle-window DMA Events): spends observed tool-wait as DMA budget for who sits in the fast tier.
- Shared live ranking between SPEAR and TIDE — one policy surface.
- Coding + general-mission benchmarks, 1,415 sessions, 33,596 turns, three model families; joint policy best non-oracle on every trace.

## Caveats

Near-memory / HW-adjacent scheduler; software-only vLLM/SGLang ports may need re-tuning. Do not remint 1077 / 1640 / 1233.

## Links

- arXiv: [2609.09643](https://arxiv.org/abs/2609.09643)
- PDF: https://arxiv.org/pdf/2609.09643
