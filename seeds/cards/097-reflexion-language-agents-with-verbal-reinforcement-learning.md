---
title: "Reflexion: Language Agents with Verbal Reinforcement Learning"
authors:
  - "Noah Shinn"
  - "Federico Cassano"
  - "Edward Berman"
  - "Ashwin Gopinath"
  - "Karthik Narasimhan"
  - "Shunyu Yao"
year: 2023
venue: "arXiv:cs.AI"
arxiv: "2303.11366"
doi: null
source: "https://arxiv.org/abs/2303.11366"
topics:
  - agent-memory
  - reasoning
  - planning
seed_rank: 97
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# Reflexion: Language Agents with Verbal Reinforcement Learning

## One-sentence takeaway

Large language models (LLMs) have been increasingly used to interact with external environments (e.g., games, compilers, APIs) as goal-driven agents.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state; planning/reasoning loops underlie autoresearch experiment selection (Reflexion: Language Agents with Verbal Reinforcement Learning)

## Key ideas

- Large language models (LLMs) have been increasingly used to interact with external environments (e.g., games, compilers, APIs) as goal-driven agents.
- However, it remains challenging for these language agents to quickly and efficiently learn from trial-and-error as traditional reinforcement learning methods require extensive training samples and expensive model fine-tuning.
- We propose Reflexion, a novel framework to reinforce language agents not by updating weights, but instead through linguistic feedback.
- Concretely, Reflexion agents verbally reflect on task feedback signals, then maintain their own reflective text in an episodic memory buffer to induce better decision-making in subsequent trials.
- Reflexion is flexible enough to incorporate various types (scalar values or free-form languag

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2303.11366](https://arxiv.org/abs/2303.11366)
- URL: https://arxiv.org/abs/2303.11366
