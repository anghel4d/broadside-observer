---
title: "Forget Freely, Grep Later: Lossless, Index-Free Memory for Long-Horizon LLM Agents"
authors:
  - "Ziyan Yang"
  - "Taiwei Shi"
  - "Jieyu Zhao"
year: 2026
venue: "arXiv preprint (cs.CL)"
arxiv: "2611.25123"
doi: null
source: "https://arxiv.org/abs/2611.25123"
version_reviewed: "v1"
topics:
  - "provenance-first-agent-memory"
  - "agent-tokenization-and-caching"
seed_rank: 2653
seed_batch: "frontier-2026-11-20"
reviewed: "2026-11-20"
pool: "agents"
relevance_score: 9
see:
  - 001-swe-agent-agent-computer-interfaces-enable-automated-softwar
  - 002-efficient-memory-management-for-large-language-model-serving
  - 003-generative-agents-interactive-simulacra-of-human-behavior
  - 004-memgpt-towards-llms-as-operating-systems
  - 007-react-synergizing-reasoning-and-acting-in-language-models
  - 069-a-mem-agentic-memory-for-llm-agents
  - 075-hipporag-neurobiologically-inspired-long-term-memory-for-lar
  - 977-deepseekmath-pushing-limits-of-mathematical-reasoning
cites:
  - title: "Forget Freely, Grep Later: Lossless, Index-Free Memory for Long-Horizon LLM Agents"
    url: "https://arxiv.org/abs/2611.25123"
    year: 2026
    arxiv: "2611.25123"
    doi: null
---

# Forget Freely, Grep Later: Lossless, Index-Free Memory for Long-Horizon LLM Agents

## One-sentence takeaway

GrepMem keeps an append-only plain-text log of the agent's whole history plus a regex search tool, with no embeddings, index, extraction or extra model; trained with RL on Qwen3.5-9B it reaches 95-97% on ContextBench where lossy context strategies reach at most 21%.

## Why it matters here

This is the bluntest case yet for provenance-first memory: keep the raw record, never decide in advance what to forget, and retrieve by exact search. An append-only log is also prefix-cache friendly and trivially auditable, unlike summaries that rewrite history (compare compaction laundering in 2383 and source-judged compaction in 2312). It is a strong baseline any structured memory we build has to beat.

## Key ideas

- **Two parts.** An append-only plain-text log of the complete agent history and a regular-expression search tool for on-demand recall.
- **No infrastructure.** No embeddings, retrieval index, memory extraction step or additional models.
- **Training.** Qwen3.5-9B trained with reinforcement learning under five context-management strategies, evaluated on multi-question research sessions, long-stream recall and agent-trajectory QA.
- **Results.** 95-97% on ContextBench vs at most 21% for lossy baselines; 8.8 points above SUPO's summarization on BCP-Multi; stays on the accuracy-token-cost Pareto frontier on all five tasks as streams lengthen.

## Caveats

Abstract-level read of the v1 preprint (Friday 20 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. The model is trained to use the grep tool, so the gains may not carry over to off-the-shelf models; scaling of the raw log itself (storage, search latency) beyond the tested streams is not covered in the abstract.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.25123
- PDF: https://arxiv.org/pdf/2611.25123
- HTML: https://arxiv.org/html/2611.25123v1
- Code: https://github.com/limenlp/GrepMem
