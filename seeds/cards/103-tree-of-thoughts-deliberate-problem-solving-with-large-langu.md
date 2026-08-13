---
title: "Tree of Thoughts: Deliberate Problem Solving with Large Language Models"
authors:
  - "Shunyu Yao"
  - "Dian Yu"
  - "Jeffrey Zhao"
  - "Izhak Shafran"
  - "Thomas L. Griffiths"
  - "Yuan Cao"
  - "Karthik Narasimhan"
year: 2023
venue: "NeurIPS"
arxiv: "2305.10601"
doi: null
source: "https://arxiv.org/abs/2305.10601"
topics:
  - reasoning
  - planning
seed_rank: 103
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"
    url: "https://arxiv.org/abs/2201.11903"
    year: 2022
    arxiv: "2201.11903"
    doi: null
    card: "104-chain-of-thought-prompting-elicits-reasoning-in-large-langua"
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2022
    arxiv: "2210.03629"
    doi: null
    card: "007-react-synergizing-reasoning-and-acting-in-language-models"
  - title: "Track, Rank, Crack: Epistemic Working Memory Scales Multi-Hop Reasoning in Language Agents"
    url: "https://arxiv.org/abs/2607.12267"
    year: 2026
    arxiv: "2607.12267"
    doi: null
    card: "080-track-rank-crack-epistemic-working-memory-scales-multi-hop-r"
---

# Tree of Thoughts: Deliberate Problem Solving with Large Language Models

## One-sentence takeaway

Language models are increasingly being deployed for general problem solving across a wide range of tasks, but are still confined to token-level, left-to-right decision-making processes during inference.

## Why it matters here

planning/reasoning loops underlie autoresearch experiment selection (Tree of Thoughts: Deliberate Problem Solving with Large Language Models)

## Key ideas

- Language models are increasingly being deployed for general problem solving across a wide range of tasks, but are still confined to token-level, left-to-right decision-making processes during inference.
- This means they can fall short in tasks that require exploration, strategic lookahead, or where initial decisions play a pivotal role.
- To surmount these challenges, we introduce a new framework for language model inference, Tree of Thoughts (ToT), which generalizes over the popular Chain of Thought approach to prompting language models, and enables exploration over coherent units of text (thoughts) that serve as intermediate steps toward problem solving.
- ToT allows LMs to perform deliberate decision making by considering multiple different reasoning paths and self-evaluating choices to deci

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2305.10601](https://arxiv.org/abs/2305.10601)
- URL: https://arxiv.org/abs/2305.10601
