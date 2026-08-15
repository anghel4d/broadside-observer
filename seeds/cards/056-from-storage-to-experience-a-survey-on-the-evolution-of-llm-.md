---
title: "From Storage to Experience: A Survey on the Evolution of LLM Agent Memory Mechanisms"
authors:
  - "Jinghao Luo"
  - "Yuchen Tian"
  - "Chuxue Cao"
  - "Ziyang Luo"
  - "Hongzhan Lin"
  - "Kaixin Li"
  - "Chuyi Kong"
  - "Ruichao Yang"
  - "Jing Ma"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2605.06716"
doi: null
source: "https://arxiv.org/abs/2605.06716"
topics:
  - rag
  - retrieval
  - agent-memory
  - skills
  - continual-agents
seed_rank: 56
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Voyager: An Open-Ended Embodied Agent with Large Language Models"
    url: "https://arxiv.org/abs/2305.16291"
    year: 2023
    arxiv: "2305.16291"
    doi: null
  - title: "MemGPT: Towards LLMs as Operating Systems"
    url: "https://arxiv.org/abs/2310.08560"
    year: 2023
    arxiv: "2310.08560"
    doi: null
  - title: "Reflexion: Language Agents with Verbal Reinforcement Learning"
    url: "https://arxiv.org/abs/2303.11366"
    year: 2023
    arxiv: "2303.11366"
    doi: null
see:
  - "006-voyager-an-open-ended-embodied-agent-with-large-language-mod"
  - "004-memgpt-towards-llms-as-operating-systems"
  - "081-reflexion-language-agents-with-verbal-reinforcement-learning"
---

# From Storage to Experience: A Survey on the Evolution of LLM Agent Memory Mechanisms

## One-sentence takeaway

The survey frames LLM-agent memory as an evolution from Storage (trajectory preservation) through Reflection (trajectory refinement) to Experience (trajectory abstraction).

## Why it matters here

Broadside's provenance store and ano's standing loops sit exactly on this Storage → Reflection → Experience axis; the survey is a map for which memory mechanism belongs at which layer of the agent/ECS stack.

## Key ideas

- Current memory work is split between OS-style paging/engineering and cognitive-science metaphors, which blocks a unified design vocabulary.
- Three drivers push the evolution: long-range consistency, dynamic environments, and continual learning.
- The Experience stage is characterized by two frontier mechanisms: proactive exploration and cross-trajectory abstraction.
- Storage keeps raw traces; Reflection rewrites them into reusable lessons; Experience compresses many traces into transferable skills.
- The authors offer design principles and a roadmap rather than a single system, aimed at next-generation persistent agents.

## Caveats

## Links

- arXiv: [2605.06716](https://arxiv.org/abs/2605.06716)
- PDF: https://arxiv.org/pdf/2605.06716
