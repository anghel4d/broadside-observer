---
title: "Rethinking How to Remember: Beyond Atomic Facts in Lifelong LLM Agent Memory"
authors:
  - "Jingwei Sun"
  - "Jianing Zhu"
  - "Jiangchao Yao"
  - "Tongliang Liu"
  - "Bo Han"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2605.19952"
doi: null
source: "https://arxiv.org/abs/2605.19952"
topics:
  - rag
  - retrieval
  - provenance
  - agent-memory
  - skills
  - continual-agents
seed_rank: 64
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "From Storage to Experience: A Survey on the Evolution of LLM Agent Memory Mechanisms"
    url: "https://arxiv.org/abs/2605.06716"
    year: 2026
    arxiv: "2605.06716"
    doi: null
  - title: "Governing Evolving Memory in LLM Agents: Risks, Mechanisms, and the Stability and Safety Governed Memory (SSGM) Framework"
    url: "https://arxiv.org/abs/2603.11768"
    year: 2026
    arxiv: "2603.11768"
    doi: null
  - title: "SKILLFOUNDRY: Building Self-Evolving Agent Skill Libraries from Heterogeneous Scientific Resources"
    url: "https://arxiv.org/abs/2604.03964"
    year: 2026
    arxiv: "2604.03964"
    doi: null
see:
  - "056-from-storage-to-experience-a-survey-on-the-evolution-of-llm-"
  - "058-governing-evolving-memory-in-llm-agents-risks-mechanisms-and"
---

# Rethinking How to Remember: Beyond Atomic Facts in Lifelong LLM Agent Memory

## One-sentence takeaway

To enable reliable long-term interaction, LLM agents require a memory system that can faithfully store, efficiently retrieve, and deeply reason over accumulated dialogue history.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state; retrieval+evidence trails matter for Broadside provenance-rich digests (Rethinking How to Remember: Beyond Atomic Facts in Lifelong LLM Agent Memory)

## Key ideas

- To enable reliable long-term interaction, LLM agents require a memory system that can faithfully store, efficiently retrieve, and deeply reason over accumulated dialogue history.
- Most existing methods adopt an extracted fact based paradigm: handcrafted static prompts compress raw dialogues into atomic facts, which are then stored, matched, and injected into downstream reasoning.
- Nevertheless, such fact-centric designs inevitably discard fine-grained details in original dialogues and fail to support deep reasoning over scattered isolated facts.
- Moreover, static prompts cannot maintain consistent extraction granularity across diverse dialogue styles.
- To address these limitations, we propose TriMem, which maintains three coexisting representation granularities, including raw dialogue segments

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2605.19952](https://arxiv.org/abs/2605.19952)
- URL: https://arxiv.org/abs/2605.19952
