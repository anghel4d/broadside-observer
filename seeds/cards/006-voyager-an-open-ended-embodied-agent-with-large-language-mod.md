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
  - title: "From Storage to Experience: A Survey on the Evolution of LLM Agent Memory Mechanisms"
    url: "https://arxiv.org/abs/2605.06716"
    year: 2026
    arxiv: "2605.06716"
    doi: null
  - title: "GRC: Unifying Reasoning-Driven Generation, Retrieval and Compression"
    url: "https://arxiv.org/abs/2605.09100"
    year: 2026
    arxiv: "2605.09100"
    doi: null
  - title: "Governing Evolving Memory in LLM Agents: Risks, Mechanisms, and the Stability and Safety Governed Memory (SSGM) Framework"
    url: "https://arxiv.org/abs/2603.11768"
    year: 2026
    arxiv: "2603.11768"
    doi: null
see:
  - "062-from-storage-to-experience-a-survey-on-the-evolution-of-llm-"
  - "063-grc-unifying-reasoning-driven-generation-retrieval-and-compr"
  - "064-governing-evolving-memory-in-llm-agents-risks-mechanisms-and"
---

# Voyager: An Open-Ended Embodied Agent with Large Language Models

## One-sentence takeaway

We introduce Voyager, the first LLM-powered embodied lifelong learning agent in Minecraft that continuously explores the world, acquires diverse skills, and makes novel discoveries without human intervention.

## Why it matters here

skill libraries and continual evolution match standing research loops (Voyager: An Open-Ended Embodied Agent with Large Language Models)

## Key ideas

- We introduce Voyager, the first LLM-powered embodied lifelong learning agent in Minecraft that continuously explores the world, acquires diverse skills, and makes novel discoveries without human intervention.
- Voyager consists of three key components: 1) an automatic curriculum that maximizes exploration, 2) an ever-growing skill library of executable code for storing and retrieving complex behaviors, and 3) a new iterative prompting mechanism that incorporates environment feedback, execution errors, and self-verification for program improvement.
- Voyager interacts with GPT-4 via blackbox queries, which bypasses the need for model parameter fine-tuning.
- The skills developed by Voyager are temporally extended, interpretable, and compositional, which compounds the agent's abilities rapidly and

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2305.16291](https://arxiv.org/abs/2305.16291)
- URL: https://arxiv.org/abs/2305.16291
