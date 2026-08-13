---
title: "ElasticMem: Latent Memory as a Learnable Resource for LLM Agents"
authors:
  - "Tao Feng"
  - "Chongrui Ye"
  - "Tianyang Luo"
  - "Jingjun Xu"
  - "Xueqiang Xu"
  - "Haozhen Zhang"
  - "Ge Liu"
  - "Jiaxuan You"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2605.30690"
doi: null
source: "https://arxiv.org/abs/2605.30690"
topics:
  - rag
  - retrieval
  - provenance
  - agent-memory
seed_rank: 61
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

# ElasticMem: Latent Memory as a Learnable Resource for LLM Agents

## One-sentence takeaway

Long-term memory is essential for LLM agents to reason coherently across extended interactions, personalize responses, and reuse past experience.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state; retrieval+evidence trails matter for Broadside provenance-rich digests (ElasticMem: Latent Memory as a Learnable Resource for LLM Agents)

## Key ideas

- Long-term memory is essential for LLM agents to reason coherently across extended interactions, personalize responses, and reuse past experience.
- However, existing memory-augmented methods typically treat memory as a fixed resource: text-space approaches concatenate retrieved memories into the context window, causing substantial token overhead and sensitivity to noisy evidence, while latent-space approaches reduce textual cost but still rely on rigid retrieval or fixed-capacity memory interfaces.
- This creates a mismatch between query-dependent memory utility and fixed memory allocation.
- We propose ElasticMem, a memory-augmented LLM framework that learns to use memory as an elastic latent resource.
- ElasticMem builds an offline latent memory bank with retrieval keys and content caches, retri

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2605.30690](https://arxiv.org/abs/2605.30690)
- URL: https://arxiv.org/abs/2605.30690
