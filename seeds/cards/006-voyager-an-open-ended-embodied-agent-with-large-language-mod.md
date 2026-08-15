---
title: "Voyager: An Open-Ended Embodied Agent with Large Language Models"
authors:
  - "Guanzhi Wang"
  - "Yuqi Xie"
  - "Yunfan Jiang"
  - "Ajay Mandlekar"
  - "Chaowei Xiao"
  - "Yuke Zhu"
  - "Linxi Fan"
  - "Anima Anandkumar"
year: 2023
venue: "arXiv:cs.AI"
arxiv: "2305.16291"
doi: null
source: "https://arxiv.org/abs/2305.16291"
topics:
  - skills
  - continual-agents
seed_rank: 6
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 10
cites:
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2023
    arxiv: "2210.03629"
    doi: null
  - title: "Generative Agents: Interactive Simulacra of Human Behavior"
    url: "https://arxiv.org/abs/2304.03442"
    year: 2023
    arxiv: "2304.03442"
    doi: "10.1145/3586183.3606763"
see:
  - "007-react-synergizing-reasoning-and-acting-in-language-models"
  - "003-generative-agents-interactive-simulacra-of-human-behavior"
---

# Voyager: An Open-Ended Embodied Agent with Large Language Models

## One-sentence takeaway

Voyager is a GPT-4 Minecraft agent that grows an executable skill library under an automatic exploration curriculum and iterative self-verification, unlocking tech-tree milestones up to 15.3× faster than prior SOTA without fine-tuning.

## Why it matters here

This is the standing-loop pattern Broadside wants for skill acquisition: store programs, not traces; retrieve them compositionally; let environment errors rewrite the next attempt. GRID COMMAND units and ano command libraries should grow the same way.

## Key ideas

- Three parts: an automatic curriculum that proposes progressively harder open-ended goals, a skill library of executable code indexed for retrieval, and an iterative prompting loop that folds in execution errors and self-checks.
- Skills are temporally extended JavaScript programs, not one-shot actions, so later tasks compose earlier ones instead of relearning mine-wood-then-craft from scratch.
- Interaction is black-box GPT-4 queries — no gradient updates — which makes the skill store the only persistent learned state.
- Empirically: 3.3× more unique items, 2.3× longer travel, and up to 15.3× faster key tech-tree unlocks versus prior lifelong Minecraft agents.
- The library transfers to a fresh world: Voyager solves novel tasks from scratch by retrieving stored skills, while baselines fail to generalize.

## Caveats

## Links

- arXiv: [2305.16291](https://arxiv.org/abs/2305.16291)
- PDF: https://arxiv.org/pdf/2305.16291
- Project: https://voyager.minedojo.org/
