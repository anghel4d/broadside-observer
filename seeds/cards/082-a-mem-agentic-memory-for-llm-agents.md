---
title: "A-MEM: Agentic Memory for LLM Agents"
authors:
  - "Wujiang Xu"
  - "Zujie Liang"
  - "Kai Mei"
  - "Hang Gao"
  - "Juntao Tan"
  - "Yongfeng Zhang"
year: 2025
venue: "NeurIPS"
arxiv: "2502.12110"
doi: null
source: "https://arxiv.org/abs/2502.12110"
topics:
  - rag
  - retrieval
  - provenance
  - agent-memory
seed_rank: 82
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# A-MEM: Agentic Memory for LLM Agents

## One-sentence takeaway

While large language model (LLM) agents can effectively use external tools for complex real-world tasks, they require memory systems to leverage historical experiences.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state; retrieval+evidence trails matter for Broadside provenance-rich digests (A-MEM: Agentic Memory for LLM Agents)

## Key ideas

- While large language model (LLM) agents can effectively use external tools for complex real-world tasks, they require memory systems to leverage historical experiences.
- Current memory systems enable basic storage and retrieval but lack sophisticated memory organization, despite recent attempts to incorporate graph databases.
- Moreover, these systems' fixed operations and structures limit their adaptability across diverse tasks.
- To address this limitation, this paper proposes a novel agentic memory system for LLM agents that can dynamically organize memories in an agentic way.
- Following the basic principles of the Zettelkasten method, we designed our memory system to create interconnected knowledge networks through dynamic indexing and linking.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2502.12110](https://arxiv.org/abs/2502.12110)
- URL: https://arxiv.org/abs/2502.12110
