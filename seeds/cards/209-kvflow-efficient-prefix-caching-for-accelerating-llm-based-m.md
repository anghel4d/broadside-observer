---
title: "KVFlow: Efficient Prefix Caching for Accelerating LLM-Based Multi-Agent Workflows"
authors:
  - "Zaifeng Pan"
  - "Ajjkumar Patel"
  - "Zhengding Hu"
  - "Yipeng Shen"
  - "Yue Guan"
  - "Wan-Lu Li"
  - "Lianhui Qin"
  - "Yida Wang"
  - "Yufei Ding"
year: 2025
venue: "arXiv:cs.DC"
arxiv: "2507.07400"
doi: null
source: "https://arxiv.org/abs/2507.07400"
topics:
  - kv-serving
  - inference-systems
  - multi-agent
  - agent-architecture
  - llm-serving
seed_rank: 209
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "A Survey of LLM $	imes$ DATA"
    url: "https://arxiv.org/abs/2505.18458"
    year: 2025
    arxiv: "2505.18458"
    doi: null
    card: "081-a-survey-of-llm-times-data"
  - title: "CacheWeaver: Cache-Aware Evidence Ordering for Efficient Grounded RAG Inference"
    url: "https://arxiv.org/abs/2606.19667"
    year: 2026
    arxiv: "2606.19667"
    doi: null
    card: "055-cacheweaver-cache-aware-evidence-ordering-for-efficient-grou"
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
    card: "002-efficient-memory-management-for-large-language-model-serving"
---

# KVFlow: Efficient Prefix Caching for Accelerating LLM-Based Multi-Agent Workflows

## One-sentence takeaway

Large language model (LLM) based agentic workflows have become a popular paradigm for coordinating multiple specialized agents to solve complex tasks.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; architecture patterns for long-running observers and interactive agents (KVFlow: Efficient Prefix Caching for Accelerating LLM-Based Multi-Agent Workflows)

## Key ideas

- Large language model (LLM) based agentic workflows have become a popular paradigm for coordinating multiple specialized agents to solve complex tasks.
- To improve serving efficiency, existing LLM systems employ prefix caching to reuse key-value (KV) tensors corresponding to agents' fixed prompts, thereby avoiding redundant computation across repeated invocations.
- However, current systems typically evict KV caches using a Least Recently Used (LRU) policy, which fails to anticipate future agent usage and often discards KV caches shortly before their reuse.
- This leads to frequent cache misses and substantial recomputation or swapping overhead.
- We present KVFlow, a workflow-aware KV cache management framework tailored for agentic workloads.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2507.07400](https://arxiv.org/abs/2507.07400)
- URL: https://arxiv.org/abs/2507.07400
