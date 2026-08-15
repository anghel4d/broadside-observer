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
seed_rank: 81
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2022
    arxiv: "2210.03629"
    doi: null
  - title: "Tree of Thoughts: Deliberate Problem Solving with Large Language Models"
    url: "https://arxiv.org/abs/2305.10601"
    year: 2023
    arxiv: "2305.10601"
    doi: null
see:
  - "007-react-synergizing-reasoning-and-acting-in-language-models"
  - "087-tree-of-thoughts-deliberate-problem-solving-with-large-langu"
---

# Reflexion: Language Agents with Verbal Reinforcement Learning

## One-sentence takeaway

Reflexion reinforces language agents by writing linguistic self-critiques into an episodic memory buffer instead of updating weights.

## Why it matters here

Ano standing loops and Broadside experiment selection need trial-and-error without a fine-tune; Reflexion is verbal RL over compilers, games, and APIs.

## Key ideas

- Traditional RL needs many samples and expensive fine-tunes; language agents can instead verbalize what went wrong.
- Feedback may be scalar or free-form and may come from the environment or from an internal simulator.
- The reflective text lives in an episodic buffer and conditions later trials of the same task.
- On HumanEval, Reflexion reaches 91% pass@1, above the then-SOTA GPT-4 mark of 80%.
- Ablations vary feedback type, incorporation method, and agent type across sequential decision-making, coding, and language reasoning.

## Caveats

## Links

- arXiv: [2303.11366](https://arxiv.org/abs/2303.11366)
- PDF: https://arxiv.org/pdf/2303.11366
