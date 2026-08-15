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
seed_rank: 176
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
  - title: "CacheWeaver: Cache-Aware Evidence Ordering for Efficient Grounded RAG Inference"
    url: "https://arxiv.org/abs/2606.19667"
    year: 2026
    arxiv: "2606.19667"
    doi: null
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
---

# KVFlow: Efficient Prefix Caching for Accelerating LLM-Based Multi-Agent Workflows

## One-sentence takeaway

KVFlow replaces LRU prefix-cache eviction with a workflow-aware policy derived from an Agent Step Graph, and prefetches the next agent's KV from CPU to GPU before that agent runs.

## Why it matters here

Long-running Broadside observers and multi-agent GRID COMMAND loops share huge system prompts. LRU dropping a prompt one step before reuse is exactly the miss pattern this paper measures and fixes.

## Key ideas

- Agentic serving reuses KV tensors of fixed agent prompts, but LRU cannot see the next activation and evicts them immediately before reuse.
- An Agent Step Graph assigns each agent a steps-to-execution distance that drives node-level eviction in a tree-structured prefix cache.
- Shared prefixes across agents are managed explicitly rather than as unrelated LRU entries.
- A fully overlapped prefetch loads the next step's tensors from CPU to GPU on background threads so generation does not stall on a miss.
- Against SGLang with hierarchical radix cache, KVFlow reports up to 1.83× on single large-prompt workflows and 2.19× with many concurrent workflows.

## Caveats

## Links

- arXiv: [2507.07400](https://arxiv.org/abs/2507.07400)
