---
title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"
authors:
  - "Jason Wei"
  - "Xuezhi Wang"
  - "Dale Schuurmans"
  - "Maarten Bosma"
  - "Brian Ichter"
  - "Fei Xia"
  - "Ed Chi"
  - "Quoc Le"
  - "Denny Zhou"
year: 2022
venue: "arXiv:cs.CL"
arxiv: "2201.11903"
doi: null
source: "https://arxiv.org/abs/2201.11903"
topics:
  - reasoning
  - planning
seed_rank: 88
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
  - title: "Tree of Thoughts: Deliberate Problem Solving with Large Language Models"
    url: "https://arxiv.org/abs/2305.10601"
    year: 2023
    arxiv: "2305.10601"
    doi: null
see:
  - "093-language-models-are-few-shot-learners"
  - "087-tree-of-thoughts-deliberate-problem-solving-with-large-langu"
---

# Chain-of-Thought Prompting Elicits Reasoning in Large Language Models

## One-sentence takeaway

A few exemplars that show intermediate reasoning steps elicit those same steps from a sufficiently large LM, unlocking arithmetic, commonsense, and symbolic reasoning that standard few-shot prompting misses.

## Why it matters here

Every later ano planner — ReAct, ToT, Reflexion — starts from this observation that reasoning is a prompting format, not a fine-tune.

## Key ideas

- Chain of thought is a series of intermediate natural-language steps, demonstrated in-context rather than trained.
- The ability emerges with scale: three large LMs all improve on arithmetic, commonsense, and symbolic tasks when CoT exemplars are added.
- Eight CoT exemplars on a 540B model set a then-SOTA on GSM8K, beating even fine-tuned GPT-3 with a verifier.
- Standard few-shot prompting of the same models does not produce the intermediate scratchpad, so the gain is specifically from the reasoning format.
- No parameter updates are required.

## Caveats

## Links

- arXiv: [2201.11903](https://arxiv.org/abs/2201.11903)
- PDF: https://arxiv.org/pdf/2201.11903
