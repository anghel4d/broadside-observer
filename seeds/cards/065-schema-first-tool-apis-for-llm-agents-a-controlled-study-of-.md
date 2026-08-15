---
title: "Schema First Tool APIs for LLM Agents: A Controlled Study of Tool Misuse, Recovery, and Budgeted Performance"
authors:
  - "Akshey Sigdel"
  - "Rista Baral"
year: 2026
venue: "arXiv:cs.SE"
arxiv: "2603.13404"
doi: null
source: "https://arxiv.org/abs/2603.13404"
topics:
  - tool-use
  - react
  - provenance
  - rag
  - coding-agents
  - harness
seed_rank: 65
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Toolformer: Language Models Can Teach Themselves to Use Tools"
    url: "https://arxiv.org/abs/2302.04761"
    year: 2023
    arxiv: "2302.04761"
    doi: null
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2022
    arxiv: "2210.03629"
    doi: null
see:
  - "086-toolformer-language-models-can-teach-themselves-to-use-tools"
  - "007-react-synergizing-reasoning-and-acting-in-language-models"
---

# Schema First Tool APIs for LLM Agents: A Controlled Study of Tool Misuse, Recovery, and Budgeted Performance

## One-sentence takeaway

Holding tool semantics fixed, JSON Schema contracts cut interface misuse versus free-form docs, but in this local-model pilot they do not raise end-task success or cut semantic misuse.

## Why it matters here

Ano tool surfaces and GRID COMMAND command schemas should still be schema-first for contract adherence; this study is the warning that schemas do not fix bad action selection under a tight local-inference budget.

## Key ideas

- Three conditions keep identical tool semantics and information content: free-form documentation, JSON Schema, and JSON Schema plus structured diagnostics.
- The sandbox is a deterministic software-engineering environment (logs, metrics, configs, repo tasks) crossed with one open local model, three seeds, and four interaction budgets.
- Metrics include end-task success, interface misuse, execution failures, semantic misuse, recovery, and overhead.
- Success stays zero across conditions; schema conditions reduce interface misuse only.
- Dominant remaining bottlenecks are semantic action quality and timeout-sensitive tasks under constrained local inference.

## Caveats

## Links

- arXiv: [2603.13404](https://arxiv.org/abs/2603.13404)
- PDF: https://arxiv.org/pdf/2603.13404
