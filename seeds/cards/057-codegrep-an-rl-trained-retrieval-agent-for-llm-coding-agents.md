---
title: "CodeGrep: An RL-Trained Retrieval Agent for LLM Coding Agents"
authors:
  - "Wuya Chen"
  - "Yihao yang"
  - "Yang Cao"
  - "Yue Lin"
year: 2026
venue: "arXiv:cs.SE"
arxiv: "2608.05886"
doi: null
source: "https://arxiv.org/abs/2608.05886"
topics:
  - rag
  - retrieval
  - coding-agents
  - harness
seed_rank: 57
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# CodeGrep: An RL-Trained Retrieval Agent for LLM Coding Agents

## One-sentence takeaway

Modern LLM coding agents such as Claude Code and OpenHands share a common inefficiency: they spend much of their token budget finding the file to patch, rather than patching it.

## Why it matters here

retrieval+evidence trails matter for Broadside provenance-rich digests; shapes harness/ACI design and model-vs-harness failure localization (CodeGrep: An RL-Trained Retrieval Agent for LLM Coding Agents)

## Key ideas

- Modern LLM coding agents such as Claude Code and OpenHands share a common inefficiency: they spend much of their token budget finding the file to patch, rather than patching it.
- On SWE-Bench Verified, a 30B OpenHands agent averages 23 rounds and 631K tokens per resolved issue, with many calls spent on grep, glob, and view_file during repository exploration.
- We introduce CodeGrep, a 14B retrieval agent trained end-to-end with GRPO to issue multi-turn parallel grep, glob, and read tool calls and return candidate files to a frozen downstream coding agent.
- On all 500 SWE-Bench Verified instances, CodeGrep preserves resolve rate while substantially improving efficiency: 27.0% versus 25.8% for the no-retrieval baseline, with 15% fewer rounds and 19% fewer tokens on resolved instances.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2608.05886](https://arxiv.org/abs/2608.05886)
- URL: https://arxiv.org/abs/2608.05886
