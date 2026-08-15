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
seed_rank: 86
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Language Models are Few-Shot Learners"
    url: "https://arxiv.org/abs/2005.14165"
    year: 2020
    arxiv: "2005.14165"
    doi: null
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2022
    arxiv: "2210.03629"
    doi: null
see:
  - "093-language-models-are-few-shot-learners"
  - "007-react-synergizing-reasoning-and-acting-in-language-models"
---

# Toolformer: Language Models Can Teach Themselves to Use Tools

## One-sentence takeaway

Toolformer self-supervises API calls — which tool, when, with what arguments, how to splice the result — from a handful of demonstrations per API, then trains next-token prediction around those calls.

## Why it matters here

This is the pre-agent origin of ano tool use: a language model that inserts calculator, search, QA, translation, and calendar calls into its own generation.

## Key ideas

- Large LMs still fail at arithmetic and factual lookup where tiny specialized models succeed; APIs close that gap without giving up LM generality.
- Supervision is self-generated: the model proposes calls, keeps those that actually help future token prediction, and trains on the filtered traces.
- Tool set: calculator, a QA system, two search engines, a translation system, and a calendar.
- Zero-shot downstream performance rises substantially, often matching much larger models, without losing core language-modeling ability.
- No large human tool-use corpus is required beyond a few demos per API.

## Caveats

## Links

- arXiv: [2302.04761](https://arxiv.org/abs/2302.04761)
- PDF: https://arxiv.org/pdf/2302.04761
