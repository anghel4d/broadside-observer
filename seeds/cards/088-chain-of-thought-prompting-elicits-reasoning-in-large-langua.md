---
title: Chain-of-Thought Prompting Elicits Reasoning in Large Language Models
authors:
- Jason Wei
- Xuezhi Wang
- Dale Schuurmans
- Maarten Bosma
- Brian Ichter
- Fei Xia
- Ed Chi
- Quoc Le
- Denny Zhou
year: 2022
venue: arXiv:cs.CL
arxiv: '2201.11903'
doi: null
source: https://arxiv.org/abs/2201.11903
topics:
- reasoning
- planning
seed_rank: 88
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: agents
relevance_score: 9
cites:
- title: 'Tree of Thoughts: Deliberate Problem Solving with Large Language Models'
  url: https://arxiv.org/abs/2305.10601
  year: 2023
  arxiv: '2305.10601'
  doi: null
- title: 'ReAct: Synergizing Reasoning and Acting in Language Models'
  url: https://arxiv.org/abs/2210.03629
  year: 2022
  arxiv: '2210.03629'
  doi: null
see:
- "087-tree-of-thoughts-deliberate-problem-solving-with-large-langu"
- "007-react-synergizing-reasoning-and-acting-in-language-models"
---

# Chain-of-Thought Prompting Elicits Reasoning in Large Language Models

## One-sentence takeaway

We explore how generating a chain of thought -- a series of intermediate reasoning steps -- significantly improves the ability of large language models to perform complex reasoning.

## Why it matters here

planning/reasoning loops underlie autoresearch experiment selection (Chain-of-Thought Prompting Elicits Reasoning in Large Language Models)

## Key ideas

- We explore how generating a chain of thought -- a series of intermediate reasoning steps -- significantly improves the ability of large language models to perform complex reasoning.
- In particular, we show how such reasoning abilities emerge naturally in sufficiently large language models via a simple method called chain of thought prompting, where a few chain of thought demonstrations are provided as exemplars in prompting.
- Experiments on three large language models show that chain of thought prompting improves performance on a range of arithmetic, commonsense, and symbolic reasoning tasks.
- The empirical gains can be striking.
- For instance, prompting a 540B-parameter language model with just eight chain of thought exemplars achieves state of the art accuracy on the GSM8K benchmark of math

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2201.11903](https://arxiv.org/abs/2201.11903)
- URL: https://arxiv.org/abs/2201.11903
