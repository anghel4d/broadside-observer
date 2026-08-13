---
title: "Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents"
authors:
  - "Chongrui Ye"
  - "Yuxiang Liu"
  - "Yu Wang"
  - "Haofei Yu"
  - "Yining Zhao"
  - "Ge Liu"
  - "Julian McAuley"
  - "Jiaxuan You"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2605.20616"
doi: null
source: "https://arxiv.org/abs/2605.20616"
topics:
  - tool-use
  - react
  - rag
  - retrieval
  - provenance
  - agent-memory
  - agent-eval
  - harness
seed_rank: 54
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
  - title: "Infini Memory: Maintainable Topic Documents for Long-Term LLM Agent Memory"
    url: "https://arxiv.org/abs/2606.10677"
    year: 2026
    arxiv: "2606.10677"
    doi: null
    card: "065-infini-memory-maintainable-topic-documents-for-long-term-llm"
  - title: "MemGPT: Towards LLMs as Operating Systems"
    url: "https://arxiv.org/abs/2310.08560"
    year: 2023
    arxiv: "2310.08560"
    doi: null
    card: "004-memgpt-towards-llms-as-operating-systems"
---

# Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents

## One-sentence takeaway

Language agents increasingly operate over streams of related tasks, yet existing memory systems struggle to convert accumulated experience into reusable knowledge.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state; retrieval+evidence trails matter for Broadside provenance-rich digests (Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents)

## Key ideas

- Language agents increasingly operate over streams of related tasks, yet existing memory systems struggle to convert accumulated experience into reusable knowledge.
- Retrieval-augmented and structured memory methods record per-session observations effectively, but often couple acquisition and consolidation into a single online process, leaving the agent without a global view across sessions to discover recurring patterns, abstract shared procedures, or prune redundant entries.
- Inspired by complementary learning systems theory, we propose Auto-Dreamer, a learned offline consolidator for language-agent memory.
- Auto-Dreamer decouples fast per-session memory acquisition from slow cross-session consolidation.
- Given a selected working region of a typed memory bank, the consolidator treats the regi

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2605.20616](https://arxiv.org/abs/2605.20616)
- URL: https://arxiv.org/abs/2605.20616
