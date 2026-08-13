---
title: "Lightweight LLM Agent Memory with Small Language Models"
authors:
  - "Jiaquan Zhang"
  - "Chaoning Zhang"
  - "Shuxu Chen"
  - "Zhenzhen Huang"
  - "Pengcheng Zheng"
  - "Zhicheng Wang"
  - "Ping Guo"
  - "Fan Mo"
  - "Sung-Ho Bae"
  - "Jie Zou"
  - "Jiwei Wei"
  - "Yang Yang"
year: 2026
venue: "ACL"
arxiv: "2604.07798"
doi: null
source: "https://arxiv.org/abs/2604.07798"
topics:
  - rag
  - retrieval
  - provenance
  - agent-memory
seed_rank: 66
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "A Survey on Long-Term Memory Security in LLM Agents: Attacks, Defenses, and Governance Across the Memory Lifecycle"
    url: "https://arxiv.org/abs/2604.16548"
    year: 2026
    arxiv: "2604.16548"
    doi: null
    card: "052-a-survey-on-long-term-memory-security-in-llm-agents-attacks-"
  - title: "Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents"
    url: "https://arxiv.org/abs/2605.20616"
    year: 2026
    arxiv: "2605.20616"
    doi: null
    card: "054-auto-dreamer-learning-offline-memory-consolidation-for-langu"
  - title: "Coupling Planning with Episodic Memory in LLM Agents for Software Issue Resolution"
    url: "https://arxiv.org/abs/2608.06811"
    year: 2026
    arxiv: "2608.06811"
    doi: null
    card: "059-coupling-planning-with-episodic-memory-in-llm-agents-for-sof"
---

# Lightweight LLM Agent Memory with Small Language Models

## One-sentence takeaway

Although LLM agents can leverage tools for complex tasks, they still need memory to maintain cross-turn consistency and accumulate reusable information in long-horizon interactions.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state; retrieval+evidence trails matter for Broadside provenance-rich digests (Lightweight LLM Agent Memory with Small Language Models)

## Key ideas

- Although LLM agents can leverage tools for complex tasks, they still need memory to maintain cross-turn consistency and accumulate reusable information in long-horizon interactions.
- However, retrieval-based external memory systems incur low online overhead but suffer from unstable accuracy due to limited query construction and candidate filtering.
- In contrast, many systems use repeated large-model calls for online memory operations, improving accuracy but accumulating latency over long interactions.
- We propose LightMem, a lightweight memory system for better agent memory driven by Small Language Models (SLMs).
- LightMem modularizes memory retrieval, writing, and long-term consolidation, and separates online processing from offline consolidation to enable efficient memory invocation under bo

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2604.07798](https://arxiv.org/abs/2604.07798)
- URL: https://arxiv.org/abs/2604.07798
