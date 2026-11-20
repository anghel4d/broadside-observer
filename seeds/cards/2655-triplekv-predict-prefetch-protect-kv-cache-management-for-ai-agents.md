---
title: "TripleKV: Predict, Prefetch, Protect -- KV Cache Management for AI Agents"
authors:
  - "Shashwat Jaiswal"
  - "Chloe Alverti"
  - "Mengmei Ye"
  - "Chen Wang"
  - "Hubertus Franke"
  - "Fan Lai"
  - "Tianyin Xu"
  - "Josep Torrellas"
year: 2026
venue: "arXiv preprint (cs.DC)"
arxiv: "2611.25112"
doi: null
source: "https://arxiv.org/abs/2611.25112"
version_reviewed: "v1"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 2655
seed_batch: "frontier-2026-11-20"
reviewed: "2026-11-20"
pool: "agents"
relevance_score: 8
see:
  - 002-efficient-memory-management-for-large-language-model-serving
  - 007-react-synergizing-reasoning-and-acting-in-language-models
  - 083-sglang-efficient-execution-of-structured-language-model-prog
  - 1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving
  - 176-kvflow-efficient-prefix-caching-for-accelerating-llm-based-m
  - 187-cost-efficient-large-language-model-serving-for-multi-turn-c
cites:
  - title: "TripleKV: Predict, Prefetch, Protect -- KV Cache Management for AI Agents"
    url: "https://arxiv.org/abs/2611.25112"
    year: 2026
    arxiv: "2611.25112"
    doi: null
---

# TripleKV: Predict, Prefetch, Protect -- KV Cache Management for AI Agents

## One-sentence takeaway

TripleKV predicts when each tool call will return and prefetches the agent's KV blocks from SSD into host DRAM just in time, cutting critical-path SSD reads from 45-76% of requests to under 10% and P95 TTFT by up to 49% against vLLM with DRAM and SSD tiers.

## Why it matters here

In agent loops the next request's prefix is known; only its arrival time is uncertain. TripleKV turns tool latency into a prefetch signal, which is the right decomposition for agent-aware KV tiering. Prefetching to DRAM rather than GPU avoids stealing memory from live requests. It is a direct successor to agent-execution-aware KV management (1077) and KVFlow-style prefix caching (176), both cited.

## Key ideas

- **Observation.** The KV blocks needed by the next inference request are known in advance; only the time of reuse is uncertain.
- **Tool-aware latency predictor.** Estimates when each tool call will complete and prefetches the required blocks from SSD into host DRAM ahead of time.
- **DRAM efficiency.** Removes duplication of GPU-resident blocks in DRAM and adds a victim cache that refills from SSD when blocks are evicted from GPU memory.
- **Results.** Across data, web and coding agents, critical-path SSD reads drop from 45-76% of requests to under 10%; P95 TTFT down up to 49% vs vLLM with DRAM+SSD tiers and 1.5-7x lower than recent agent-aware systems.

## Caveats

Abstract-level read of the v1 preprint (Friday 20 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. Gains depend on how predictable tool latencies are in the evaluated agents; highly variable tools (human-in-the-loop, long builds) are the hard case and are not separated out in the abstract.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.25112
- PDF: https://arxiv.org/pdf/2611.25112
- HTML: https://arxiv.org/html/2611.25112v1
