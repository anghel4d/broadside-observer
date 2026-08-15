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
seed_rank: 53
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"
    url: "https://arxiv.org/abs/2310.06770"
    year: 2023
    arxiv: "2310.06770"
    doi: null
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
  - title: "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models"
    url: "https://arxiv.org/abs/2402.03300"
    year: 2024
    arxiv: "2402.03300"
    doi: null
see:
  - "084-swe-bench-can-language-models-resolve-real-world-github-issu"
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
---

# CodeGrep: An RL-Trained Retrieval Agent for LLM Coding Agents

## One-sentence takeaway

A 14B retrieval agent trained with GRPO issues multi-turn parallel grep/glob/read calls and hands candidate files to a frozen coding agent, cutting exploration tokens without dropping resolve rate.

## Why it matters here

Ano coding agents and Broadside issue loops spend most of the budget finding the file; CodeGrep isolates that search as a trained specialist rather than letting the main agent wander the tree.

## Key ideas

- On SWE-Bench Verified a 30B OpenHands agent averages 23 rounds and 631K tokens per resolved issue, much of it spent on grep, glob, and view_file.
- Across 500 Verified instances CodeGrep holds resolve rate (27.0% vs 25.8% no-retrieval) while using 15% fewer rounds and 19% fewer tokens on resolved cases.
- Downstream utility follows a precision threshold: BM25 at 0.375 degrades the agent, Jina at 0.445 is neutral, CodeGrep at 0.677 is where retrieval starts reducing rollout cost.
- Supervision is mined from 67K open-source agent trajectories with CATM; training runs in a Git-worktree environment for multi-turn agent RL.
- Applying the efficiency signal at the advantage layer rather than the reward layer reduces KL drift and translates into downstream token savings.

## Caveats

## Links

- arXiv: [2608.05886](https://arxiv.org/abs/2608.05886)
- PDF: https://arxiv.org/pdf/2608.05886
