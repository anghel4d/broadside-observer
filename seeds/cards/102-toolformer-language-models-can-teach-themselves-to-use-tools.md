---
title: "Toolformer: Language Models Can Teach Themselves to Use Tools"
authors:
  - "Timo Schick"
  - "Jane Dwivedi-Yu"
  - "Roberto Dessì"
  - "Roberta Raileanu"
  - "Maria Lomeli"
  - "Luke Zettlemoyer"
  - "Nicola Cancedda"
  - "Thomas Scialom"
year: 2023
venue: "arXiv:cs.CL"
arxiv: "2302.04761"
doi: null
source: "https://arxiv.org/abs/2302.04761"
topics:
  - tool-use
  - react
seed_rank: 102
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
    card: "007-react-synergizing-reasoning-and-acting-in-language-models"
  - title: "Auto-Configuring Scientific Simulators with Lightweight Coding-Agent Adapters"
    url: "https://arxiv.org/abs/2606.09774"
    year: 2026
    arxiv: "2606.09774"
    doi: null
    card: "053-auto-configuring-scientific-simulators-with-lightweight-codi"
  - title: "Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents"
    url: "https://arxiv.org/abs/2605.20616"
    year: 2026
    arxiv: "2605.20616"
    doi: null
    card: "054-auto-dreamer-learning-offline-memory-consolidation-for-langu"
---

# Toolformer: Language Models Can Teach Themselves to Use Tools

## One-sentence takeaway

Language models (LMs) exhibit remarkable abilities to solve new tasks from just a few examples or textual instructions, especially at scale.

## Why it matters here

shapes harness/ACI design and model-vs-harness failure localization (Toolformer: Language Models Can Teach Themselves to Use Tools)

## Key ideas

- Language models (LMs) exhibit remarkable abilities to solve new tasks from just a few examples or textual instructions, especially at scale.
- They also, paradoxically, struggle with basic functionality, such as arithmetic or factual lookup, where much simpler and smaller models excel.
- In this paper, we show that LMs can teach themselves to use external tools via simple APIs and achieve the best of both worlds.
- We introduce Toolformer, a model trained to decide which APIs to call, when to call them, what arguments to pass, and how to best incorporate the results into future token prediction.
- This is done in a self-supervised way, requiring nothing more than a handful of demonstrations for each API.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2302.04761](https://arxiv.org/abs/2302.04761)
- URL: https://arxiv.org/abs/2302.04761
