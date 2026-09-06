---
title: "GrowPage: On-Demand KV Budgeting for Efficient LLM Reasoning Serving"
authors:
  - "Qiankun Ma"
  - "Yanjiang Zhou"
  - "Zinan Xiong"
  - "Haofei Wang"
  - "Zhen Song"
  - "Yang Xiang"
  - "Ziyao Zhang"
  - "Hairong Zheng"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2609.03494"
doi: null
source: "https://arxiv.org/abs/2609.03494"
topics:
  - "kv-caching"
  - "agentic-llm-serving"
  - "tokenization-prefix-caching"
seed_rank: 1605
seed_batch: "frontier-2026-09-06"
reviewed: "2026-09-06"
pool: "agents"
relevance_score: 10
lineage: kv-cache-agents
cites:
  - title: "GrowPage: On-Demand KV Budgeting for Efficient LLM Reasoning Serving"
    url: "https://arxiv.org/abs/2609.03494"
    year: 2026
    arxiv: "2609.03494"
    doi: null
  - title: "VestigeKV: The NoPE-MLA KV Cache Carries Its Own Eviction Signal in a Vestigial Branch"
    url: "https://arxiv.org/abs/2609.03949"
    year: 2026
    arxiv: "2609.03949"
    doi: null
  - title: "Adaptive KV Retention for LLM Agents at Human-Approval Timescales"
    url: "https://arxiv.org/abs/2608.30830"
    year: 2026
    arxiv: "2608.30830"
    doi: null
see:
  - "1578-vestigekv-the-nope-mla-kv-cache-carries-its-own-eviction-signal-in-a"
  - "1539-adaptive-kv-retention-for-llm-agents-at-human-approval-timescales"
  - "1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving"
  - "1080-granikv-asymmetric-granularity-kv-cache-paging"
  - "002-efficient-memory-management-for-large-language-model-serving"
---
# GrowPage: On-Demand KV Budgeting for Efficient LLM Reasoning Serving

## One-sentence takeaway

GrowPage treats KV capacity as a runtime resource: dual-timescale query summaries drive on-demand page growth/shrink for long-output reasoning serving instead of a fixed per-request budget.

## Why it matters here

Agentic reasoning traces blow the KV wall unevenly across requests and over time. GrowPage is the serving-side advance past VestigeKV (1578) / Adaptive KV (1539) — budgeting *how much* KV exists, not only *which* tokens stay.

## Key ideas

- Problem: fixed per-request KV budgets waste memory on light requests and starve heavy reasoning traces whose attention demand evolves mid-decode.
- Design: lightweight dual-timescale query summaries (recent + long-term attention demand) decide when to grow or reclaim KV pages at runtime.
- Serving: integrates with paged attention so capacity becomes elastic; targets long-output reasoning workloads where KV is the bottleneck.
- Evidence: reports efficiency gains on reasoning serving vs static-budget compression baselines (see paper tables).

## Caveats

- Systems paper; gains depend on paged-attention runtime and workload mix — not a drop-in for every vLLM config.
- Orthogonal to VestigeKV/NoPE-MLA eviction signal (1578) and to Aggressive KV Eviction leftovers (2609.03515) held this pass.
- Does not address multi-agent shared-prefix orchestration (see 1580).

## Links

- arXiv: [2609.03494](https://arxiv.org/abs/2609.03494)
- PDF: https://arxiv.org/pdf/2609.03494
