---
title: "Meta-Policy Reflexion: Reusable Reflective Memory and Rule Admissibility for Resource-Efficient LLM Agent"
authors:
  - "Chunlong Wu"
  - "Ye Luo"
  - "Zhibo Qu"
  - "Min Wang"
year: 2025
venue: "arXiv:cs.AI"
arxiv: "2509.03990"
doi: null
source: "https://arxiv.org/abs/2509.03990"
topics:
  - tool-use
  - react
  - multi-agent
  - agent-architecture
  - reasoning
  - planning
seed_rank: 86
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# Meta-Policy Reflexion: Reusable Reflective Memory and Rule Admissibility for Resource-Efficient LLM Agent

## One-sentence takeaway

Large language model (LLM) agents achieve impressive single-task performance but commonly exhibit repeated failures, inefficient exploration, and limited cross-task adaptability.

## Why it matters here

shapes harness/ACI design and model-vs-harness failure localization; architecture patterns for long-running observers and interactive agents (Meta-Policy Reflexion: Reusable Reflective Memory and Rule Admissibility for Resource-Effi)

## Key ideas

- Large language model (LLM) agents achieve impressive single-task performance but commonly exhibit repeated failures, inefficient exploration, and limited cross-task adaptability.
- Existing reflective strategies (e.g., Reflexion, ReAct) improve per-episode behavior but typically produce ephemeral, task-specific traces that are not reused across tasks.
- Reinforcement-learning based alternatives can produce transferable policies but require substantial parameter updates and compute.
- In this work we introduce Meta-Policy Reflexion (MPR): a hybrid framework that consolidates LLM-generated reflections into a structured, predicate-like Meta-Policy Memory (MPM) and applies that memory at inference time through two complementary mechanisms soft memory-guided decoding and hard rule admissibility check

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2509.03990](https://arxiv.org/abs/2509.03990)
- URL: https://arxiv.org/abs/2509.03990
