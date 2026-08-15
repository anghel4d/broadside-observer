---
title: "Agent Workflow Memory"
authors:
  - "Zora Zhiruo Wang"
  - "Jiayuan Mao"
  - "Daniel Fried"
  - "Graham Neubig"
year: 2024
venue: "arXiv:cs.CL"
arxiv: "2409.07429"
doi: null
source: "https://arxiv.org/abs/2409.07429"
topics:
  - skills
  - continual-agents
  - agent-eval
  - harness
seed_rank: 72
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
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2022
    arxiv: "2210.03629"
    doi: null
see:
  - "006-voyager-an-open-ended-embodied-agent-with-large-language-mod"
  - "007-react-synergizing-reasoning-and-acting-in-language-models"
---

# Agent Workflow Memory

## One-sentence takeaway

AWM induces reusable web-navigation workflows from past trajectories and selectively injects them to guide later action sequences, offline from train data or online from test queries.

## Why it matters here

Ano skill libraries and Broadside computer-use loops need reusable routines, not only episodic notes; AWM is the web-agent version of inducing those routines.

## Key ideas

- Long-horizon web tasks fail when the agent cannot reuse structure from earlier successes; humans solve this by learning workflows.
- Offline AWM mines workflows from training examples; online AWM induces them on the fly from test queries.
- On Mind2Web and WebArena (1000+ tasks, 200+ domains) AWM lifts relative success 24.6% and 51.1% and shortens successful WebArena trajectories.
- Online AWM generalizes as train–test gaps widen, gaining 8.9 to 14.0 absolute points in cross-task, website, and domain splits.
- Workflows are commonly reused routines, not full replayed trajectories.

## Caveats

## Links

- arXiv: [2409.07429](https://arxiv.org/abs/2409.07429)
- PDF: https://arxiv.org/pdf/2409.07429
