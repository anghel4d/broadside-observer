---
title: "ReAct: Synergizing Reasoning and Acting in Language Models"
authors:
  - "Shunyu Yao"
  - "Jeffrey Zhao"
  - "Dian Yu"
  - "Nan Du"
  - "Izhak Shafran"
  - "Karthik Narasimhan"
  - "Yuan Cao"
year: 2022
venue: "ICLR"
arxiv: "2210.03629"
doi: null
source: "https://arxiv.org/abs/2210.03629"
topics:
  - tool-use
  - react
  - reasoning
  - planning
seed_rank: 7
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 10
---

# ReAct: Synergizing Reasoning and Acting in Language Models

## One-sentence takeaway

While large language models (LLMs) have demonstrated impressive capabilities across tasks in language understanding and interactive decision making, their abilities for reasoning (e.g.

## Why it matters here

shapes harness/ACI design and model-vs-harness failure localization; planning/reasoning loops underlie autoresearch experiment selection (ReAct: Synergizing Reasoning and Acting in Language Models)

## Key ideas

- While large language models (LLMs) have demonstrated impressive capabilities across tasks in language understanding and interactive decision making, their abilities for reasoning (e.g.
- chain-of-thought prompting) and acting (e.g.
- action plan generation) have primarily been studied as separate topics.
- In this paper, we explore the use of LLMs to generate both reasoning traces and task-specific actions in an interleaved manner, allowing for greater synergy between the two: reasoning traces help the model induce, track, and update action plans as well as handle exceptions, while actions allow it to interface with external sources, such as knowledge bases or environments, to gather additional information.
- We apply our approach, named ReAct, to a diverse set of language and decision making task

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2210.03629](https://arxiv.org/abs/2210.03629)
- URL: https://arxiv.org/abs/2210.03629
