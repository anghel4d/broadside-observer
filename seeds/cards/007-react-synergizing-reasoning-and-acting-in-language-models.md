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
year: 2023
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
cites:
  - title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"
    url: "https://arxiv.org/abs/2201.11903"
    year: 2022
    arxiv: "2201.11903"
    doi: null
  - title: "WebShop: Towards Scalable Real-World Web Interaction with Grounded Language Agents"
    url: "https://arxiv.org/abs/2207.01206"
    year: 2022
    arxiv: "2207.01206"
    doi: null
see:
  - "088-chain-of-thought-prompting-elicits-reasoning-in-large-langua"
---

# ReAct: Synergizing Reasoning and Acting in Language Models

## One-sentence takeaway

Interleaving free-form thoughts with environment actions lets an LLM update plans from observations and ground those plans in Wikipedia, ALFWorld, or WebShop — beating isolated chain-of-thought or act-only baselines.

## Why it matters here

ReAct is the default control loop for Broadside agents and GRID COMMAND commanders: think, act, observe, revise. Harness failures show up as missing thoughts or ungrounded actions, not as a missing model capability.

## Key ideas

- Prior work treated reasoning (CoT) and acting (action-plan generation) as separate topics; ReAct generates both in one trajectory so thoughts can rewrite the plan after each observation.
- On HotpotQA and FEVER, a Wikipedia API action cuts CoT hallucination and error propagation; the resulting traces are more inspectable than act-only rollouts.
- On ALFWorld and WebShop, few-shot ReAct beats imitation and RL methods by 34 and 10 absolute success points with one or two in-context examples.
- Thoughts handle exception paths — “the page does not mention X, try a different query” — that a static action list cannot express.
- The format is prompt-only: no fine-tune, so the same loop ports to new tools as long as the observation language stays concise.

## Caveats

## Links

- arXiv: [2210.03629](https://arxiv.org/abs/2210.03629)
- PDF: https://arxiv.org/pdf/2210.03629
- Project: https://react-lm.github.io
