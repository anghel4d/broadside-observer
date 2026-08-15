---
title: "Generative Agents: Interactive Simulacra of Human Behavior"
authors:
  - "Joon Sung Park"
  - "Joseph C. O'Brien"
  - "Carrie J. Cai"
  - "Meredith Ringel Morris"
  - "Percy Liang"
  - "Michael S. Bernstein"
year: 2023
venue: "UIST"
arxiv: "2304.03442"
doi: "10.1145/3586183.3606763"
source: "https://arxiv.org/abs/2304.03442"
topics:
  - multi-agent
  - agent-architecture
seed_rank: 3
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
  - title: "Language Models are Few-Shot Learners"
    url: "https://arxiv.org/abs/2005.14165"
    year: 2020
    arxiv: "2005.14165"
    doi: null
see:
  - "007-react-synergizing-reasoning-and-acting-in-language-models"
  - "093-language-models-are-few-shot-learners"
---

# Generative Agents: Interactive Simulacra of Human Behavior

## One-sentence takeaway

An LLM plus a natural-language memory stream, periodic reflection, and retrieval-conditioned planning produces 25 Sims-like townspeople who independently spread a party invitation and show up on time.

## Why it matters here

This is the architecture sketch for long-running Broadside observers and GRID COMMAND civilians: persist every observation, compress it into reflections, retrieve on demand — not a sliding chat window and not a raw vector dump.

## Key ideas

- Each agent stores a complete memory stream of natural-language observations rather than a fixed context window or a hand-authored behavior tree.
- A reflection loop synthesizes higher-level inferences (“Klaus is dedicated to his research”) from clusters of recent memories so later plans can condition on identity, not just last-turn text.
- Retrieval scores memories by recency, importance, and relevance to the current query, then feeds the hits into a hierarchical daily plan that decomposes into hour- and minute-scale actions.
- Ablations show observation, planning, and reflection each contribute to believability; without reflection, agents fail to form lasting social commitments.
- End users interact with the sandbox in natural language; one seeded intent (throw a Valentine’s party) produces multi-day, multi-agent coordination without further scripting.

## Caveats

## Links

- arXiv: [2304.03442](https://arxiv.org/abs/2304.03442)
- PDF: https://arxiv.org/pdf/2304.03442
- DOI: [10.1145/3586183.3606763](https://doi.org/10.1145/3586183.3606763)
