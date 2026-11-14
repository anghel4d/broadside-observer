---
title: "Recompute or Restore? Host-Tier KV for Multi-Model Agent Workflows on a Static-Graph NPU Serving Stack"
authors:
  - "Sungwon Woo"
  - "Seyeon Kim"
year: 2026
venue: "arXiv preprint (cs.DC)"
arxiv: "2611.15126"
doi: null
source: "https://arxiv.org/abs/2611.15126"
version_reviewed: "v1"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 2587
seed_batch: "frontier-2026-11-14"
reviewed: "2026-11-14"
pool: "systems"
relevance_score: 8
see:
  - 2491-histate-hierarchical-prefix-cache-management-for-hybrid-llm-serving-in
cites:
  - title: "Recompute or Restore? Host-Tier KV for Multi-Model Agent Workflows on a Static-Graph NPU Serving Stack"
    url: "https://arxiv.org/abs/2611.15126"
    year: 2026
    arxiv: "2611.15126"
    doi: null
---

# Recompute or Restore? Host-Tier KV for Multi-Model Agent Workflows on a Static-Graph NPU Serving Stack

## One-sentence takeaway

On an ahead-of-time compiled NPU serving stack with a fixed device KV budget, a host-DRAM KV tier for multi-model agent workflows raised SLO attainment from 22.8% to 100% under overload, but whether restore beats recompute depends on scheduling and transfer cost, not only cache capacity.

## Why it matters here

Planner/executor workflows are our standard shape, and this measures that 89.5% of planner prompt tokens had already been computed once. It is also a good method example: the scheduler-aware event model's predictions were frozen before each test cohort, and the paper reports where the model got policy contrasts wrong.

## Key ideas

- **Waste.** Under default serving collapse, 89.5% of executed planner prompt tokens had been materialized before.
- **Host tier.** A synchronous host-DRAM tier built on the runtime's public KV copy calls (Rebellions ATOM+, vllm-rbln 0.10.2; Qwen3-8B planner on two cards, Qwen3-0.6B executor on one).
- **SLO.** Attainment rose from 22.8% to 100% and from 9.4% to 99.8% in two overload conditions; confirmed load gains 11.8% (chain) and 18.2% (fork).
- **Frozen predictions.** The event model hit median and P99 latency within 15% in all 24 common-load conditions, including a 16-18% P99 increase for fork workflows, but misordered three policy contrasts and overestimated a cheaper store path (11% predicted vs 3.1%).

## Caveats

One commercial NPU stack and two small models; mixed and bursty workloads stayed seed-sensitive. The transfer shares the engine thread with prefill and decode, which is specific to this runtime.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.15126
- PDF: https://arxiv.org/pdf/2611.15126
