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
seed_rank: 87
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
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2022
    arxiv: "2210.03629"
    doi: null
see:
  - "088-chain-of-thought-prompting-elicits-reasoning-in-large-langua"
  - "007-react-synergizing-reasoning-and-acting-in-language-models"
---

# Tree of Thoughts: Deliberate Problem Solving with Large Language Models

## One-sentence takeaway

Tree of Thoughts searches a tree of coherent intermediate thoughts with self-evaluation, lookahead, and backtracking, instead of committing to one left-to-right chain.

## Why it matters here

Autoresearch experiment selection and GRID COMMAND planning need exploration, not a single CoT; ToT is the deliberate-search wrapper around an LM.

## Key ideas

- Token-level left-to-right decoding cannot look ahead or recover from an early bad choice.
- Thoughts are coherent text units that serve as intermediate problem-solving steps, generalizing chain-of-thought prompting.
- The LM proposes candidates, evaluates them, and can backtrack — BFS/DFS over thoughts rather than tokens.
- Game of 24: GPT-4 + CoT solves 4%; ToT reaches 74%. Also evaluated on Creative Writing and Mini Crosswords.
- Prompts and code: https://github.com/princeton-nlp/tree-of-thought-llm.

## Caveats

## Links

- arXiv: [2305.10601](https://arxiv.org/abs/2305.10601)
- PDF: https://arxiv.org/pdf/2305.10601
- Code: https://github.com/princeton-nlp/tree-of-thought-llm
