---
title: "MemGPT: Towards LLMs as Operating Systems"
authors:
  - "Charles Packer"
  - "Sarah Wooders"
  - "Kevin Lin"
  - "Vivian Fang"
  - "Shishir G. Patil"
  - "Ion Stoica"
  - "Joseph E. Gonzalez"
year: 2023
venue: "arXiv:cs.AI"
arxiv: "2310.08560"
doi: null
source: "https://arxiv.org/abs/2310.08560"
topics:
  - agent-memory
seed_rank: 4
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 10
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
  - title: "Coupling Planning with Episodic Memory in LLM Agents for Software Issue Resolution"
    url: "https://arxiv.org/abs/2608.06811"
    year: 2026
    arxiv: "2608.06811"
    doi: null
    card: "059-coupling-planning-with-episodic-memory-in-llm-agents-for-sof"
---

# MemGPT: Towards LLMs as Operating Systems

## One-sentence takeaway

Large language models (LLMs) have revolutionized AI, but are constrained by limited context windows, hindering their utility in tasks like extended conversations and document analysis.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state (MemGPT: Towards LLMs as Operating Systems)

## Key ideas

- Large language models (LLMs) have revolutionized AI, but are constrained by limited context windows, hindering their utility in tasks like extended conversations and document analysis.
- To enable using context beyond limited context windows, we propose virtual context management, a technique drawing inspiration from hierarchical memory systems in traditional operating systems that provide the appearance of large memory resources through data movement between fast and slow memory.
- Using this technique, we introduce MemGPT (Memory-GPT), a system that intelligently manages different memory tiers in order to effectively provide extended context within the LLM's limited context window, and utilizes interrupts to manage control flow between itself and the user.
- We evaluate our OS-inspired design

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2310.08560](https://arxiv.org/abs/2310.08560)
- URL: https://arxiv.org/abs/2310.08560
