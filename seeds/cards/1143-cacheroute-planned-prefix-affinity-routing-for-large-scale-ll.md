---
title: "CacheRoute: Planned Prefix-Affinity Routing for Large-Scale LLM Serving"
authors:
  - "Huang Cheng"
year: 2026
venue: "arXiv:cs.DC"
arxiv: "2608.19677"
doi: null
source: "https://arxiv.org/abs/2608.19677"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 1143
seed_batch: "frontier-2026-08-22"
reviewed: "2026-08-22"
pool: "agents"
relevance_score: 10
lineage: agent-kv-cache
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "Learning Agent Execution for KV-Cache Management in Agentic Serving"
    url: "https://arxiv.org/abs/2608.14624"
    year: 2026
    arxiv: "2608.14624"
    doi: null
  - title: "GraniKV: Asymmetric Granularity KV-Cache Paging for Multi-Agent Systems with Long Shared Prefix"
    url: "https://arxiv.org/abs/2608.15584"
    year: 2026
    arxiv: "2608.15584"
    doi: null
  - title: "From LLM Inference to Agentic Workloads: Characterization and Implications for Serving Systems"
    url: "https://arxiv.org/abs/2608.15127"
    year: 2026
    arxiv: "2608.15127"
    doi: null
  - title: "KVFlow: Efficient Prefix Caching for Accelerating LLM-Based Multi-Agent Workflows"
    url: "https://arxiv.org/abs/2507.07400"
    year: 2025
    arxiv: "2507.07400"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving"
  - "1080-granikv-asymmetric-granularity-kv-cache-paging"
  - "1081-from-llm-inference-to-agentic-workloads"
  - "176-kvflow-efficient-prefix-caching-for-accelerating-llm-based-m"
  - "1142-recache-efficient-kv-cache-reuse-and-compression-for-tool-aug"
---

# CacheRoute: Planned Prefix-Affinity Routing for Large-Scale LLM Serving

## One-sentence takeaway

Prefix KV only hits if the request *returns to the server that still holds it*: plan a periodic affinity table (top-rate admission + LPT placement), do not spray with a cache-blind balancer and do not pin with a sticky hash.

## Why it matters here

Standing topic: agentic serving. PagedAttention (002) makes prefix reuse cheap *inside one engine*; CacheScout (1077) and GraniKV (1080) decide *what* to keep; 1081 characterises agentic load. The missing layer is *where the request lands*. Multi-tenant GRID COMMAND / harness sessions will share a stable per-tenant prefix (system + world + skill pack) while the turn text changes. Cache-blind power-of-two sprays that prefix across the fleet until eviction; sticky hashing maps key skew onto one queue. CacheRoute is the control plane that keeps the reusable segment local without a hot-spot p99.

## Key ideas

- Periodic plan, not per-request remap: admit highest-rate keys into a warm-slot budget, size replicas by `k_b = max(1, ceil(λ_b / q_cap))`, place with LPT against expected load. Cold tail stays power-of-two. Table is a lookup on the request path (345 ms to rebuild for 128k keys, R=30).
- Primary 70B fp8 / 60 H100 result is *single-copy* affinity (every `k_b = 1`): 176±11 QPS at a 3.5 s p99 SLO, 2.3× Preble, 4.2× flat-LB. Served token-weighted KV hit 93.2% vs 64.1% cache-blind. At 100 QPS, p99 is 1.8 s vs 3.8–8.5 s.
- Affinity without placement is a trap: 8B ablation raises hit 56%→88% but imbalance 1.00×→3.46× and capacity stays 240 QPS; LPT drops imbalance to 1.24× and capacity hits the 500 QPS ceiling.
- Operating envelope is measured, not assumed. Two 32B aggregates *lose or tie* when affinity recovers too little KV work. Analytic residency predictors miss served hit by 14–45 points. Gate every deployment with a shadow replay.

## Caveats

- Equal-slot admission assumes roughly uniform reusable-prefix sizes; heterogeneous long contexts need a byte-aware knapsack they did not measure.
- Preble / DualMap / CHWBL are harness reimplementations, not the original systems. Several 8B knees are right-censored at 500 QPS.
- Does not move or pool KV (Mooncake / MemServe) and does not replace ReCache's schema-set blocks. Ingress affinity is complementary to intra-engine paging.

## Links

- arXiv: [2608.19677](https://arxiv.org/abs/2608.19677)
