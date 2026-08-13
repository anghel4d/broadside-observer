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
seed_rank: 88
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
    card: "006-voyager-an-open-ended-embodied-agent-with-large-language-mod"
  - title: "SKILLFOUNDRY: Building Self-Evolving Agent Skill Libraries from Heterogeneous Scientific Resources"
    url: "https://arxiv.org/abs/2604.03964"
    year: 2026
    arxiv: "2604.03964"
    doi: null
    card: "074-skillfoundry-building-self-evolving-agent-skill-libraries-fr"
  - title: "SWE-chat: Coding Agent Interactions From Real Users in the Wild"
    url: "https://arxiv.org/abs/2604.20779"
    year: 2026
    arxiv: "2604.20779"
    doi: null
    card: "075-swe-chat-coding-agent-interactions-from-real-users-in-the-wi"
---

# Agent Workflow Memory

## One-sentence takeaway

Despite the potential of language model-based agents to solve real-world tasks such as web navigation, current methods still struggle with long-horizon tasks with complex action trajectories.

## Why it matters here

shapes harness/ACI design and model-vs-harness failure localization; skill libraries and continual evolution match standing research loops (Agent Workflow Memory)

## Key ideas

- Despite the potential of language model-based agents to solve real-world tasks such as web navigation, current methods still struggle with long-horizon tasks with complex action trajectories.
- In contrast, humans can flexibly solve complex tasks by learning reusable task workflows from past experiences and using them to guide future actions.
- To build agents that can similarly benefit from this process, we introduce Agent Workflow Memory (AWM), a method for inducing commonly reused routines, i.e., workflows, and selectively providing workflows to the agent to guide subsequent generations.
- AWM flexibly applies to both offline and online scenarios, where agents induce workflows from training examples beforehand or from test queries on the fly.
- We experiment on two major web navigation benchmar

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2409.07429](https://arxiv.org/abs/2409.07429)
- URL: https://arxiv.org/abs/2409.07429
