---
title: "Learning Agent Execution for KV-Cache Management in Agentic Serving"
authors:
  - "Rui Zhang"
  - "Chaeeun Kim"
  - "Shaoting Feng"
  - "Kuntai Du"
  - "Yuhan Liu"
  - "Yi Zhong"
  - "Cheng-Wei Ching"
  - "Junchen Jiang"
  - "Liting Hu"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2608.14624"
doi: null
source: "https://arxiv.org/abs/2608.14624"
topics:
  - "agentic-serving"
  - "kv-cache"
  - "prefix-caching"
  - "multi-agent"
seed_rank: 1077
seed_batch: "frontier-2026-08-18"
reviewed: "2026-08-18"
pool: "agents"
relevance_score: 10
lineage: agentic-kv-serving
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "SGLang: Efficient Execution of Structured Language Model Programs"
    url: "https://arxiv.org/abs/2312.07104"
    year: 2024
    arxiv: "2312.07104"
    doi: null
  - title: "KVFlow: Efficient Prefix Caching for Accelerating LLM-Based Multi-Agent Workflows"
    url: "https://arxiv.org/abs/2507.07400"
    year: 2025
    arxiv: "2507.07400"
    doi: null
  - title: "vToken: Token-Level Virtualization for Reclaimable KV Caches"
    url: "https://arxiv.org/abs/2608.13263"
    year: 2026
    arxiv: "2608.13263"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "083-sglang-efficient-execution-of-structured-language-model-prog"
  - "176-kvflow-efficient-prefix-caching-for-accelerating-llm-based-m"
  - "1014-vtoken-token-level-virtualization-for-reclaimable-kv-caches"
  - "1017-total-recall-at-what-cost-benchmarking-the-serving-cost-of-agentic-memory"
---

# Learning Agent Execution for KV-Cache Management in Agentic Serving

## One-sentence takeaway

CacheScout learns online agent-to-agent transitions and uses them to evict and prefetch KV *anchors* (system prompt + tools + skills), instead of LRU over anonymous prefix blocks.

## Why it matters here

Standing topic: agentic LLM serving + prefix/KV caching for agents. vLLM/SGLang still treat KV as content-hashed blocks; KVFlow needs a declared DAG. Broadside agents (and any GRID COMMAND NL-order loop) dispatch the next specialist at runtime — recency then evicts the Travel/Hotel/Coder anchor while another agent runs. CacheScout is the first in-window paper that closes that semantic gap without a static workflow graph. Complements vToken (1014, reclaimable tokens) and Total Recall (1017, memory serving cost): this one is *which agent prefix to keep warm*.

## Key ideas

- Agent *anchor* = recurring system prompt + tool schemas + skills + few-shots. 53–62% of prompt tokens in their four multi-agent workloads; 4–13× more reuse than session-history blocks.
- Online first-order Markov chain over prompt-prefix fingerprints. No AutoGen/LangGraph graph, no offline training. Top-1 next-agent 76–86% within 50 dispatches.
- Survival scorer: BFS hop distance on a thresholded transition graph, blended with recency and reconstruction cost. Falls back toward LRU when routing is near-random.
- Background warmup is a normal `max_tokens=1` prefill of the predicted anchor, off the hot path, gated by predictability *R*.
- On vLLM V1: +10–18 pp hit rate, −18–45% TTFT, −29–38% per-turn latency, up to +57% throughput; on Qwen3-235B, −33–54% TTFT and +37% throughput. ~25 KB coordinator state, µs hot path.

## Caveats

- Gains collapse if the next agent is essentially random. Prefetch alone is inert without the eviction policy.
- Fingerprints assume a stable per-agent prefix; prompt rewriting / compaction that mutates the anchor will look like a new agent.
- Continuum comparison is TTL pinning around tool pauses, not a full DAG-aware rival.

## Links

- arXiv: [2608.14624](https://arxiv.org/abs/2608.14624)
