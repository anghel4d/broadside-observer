---
title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
authors:
  - "John Yang"
  - "Carlos E. Jimenez"
  - "Alexander Wettig"
  - "Kilian Lieret"
  - "Shunyu Yao"
  - "Karthik Narasimhan"
  - "Ofir Press"
year: 2024
venue: "NeurIPS"
arxiv: "2405.15793"
doi: "10.52202/079017-1601"
source: "https://arxiv.org/abs/2405.15793"
topics:
  - coding-agents
  - harness
seed_rank: 1
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 10
cites:
  - title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"
    url: "https://arxiv.org/abs/2310.06770"
    year: 2024
    arxiv: "2310.06770"
    doi: null
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2023
    arxiv: "2210.03629"
    doi: null
  - title: "InterCode: Standardizing and Benchmarking Interactive Coding with Execution Feedback"
    url: "https://arxiv.org/abs/2306.14898"
    year: 2023
    arxiv: "2306.14898"
    doi: null
see:
  - "084-swe-bench-can-language-models-resolve-real-world-github-issu"
  - "007-react-synergizing-reasoning-and-acting-in-language-models"
---

# SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering

## One-sentence takeaway

A custom agent-computer interface — search, a 100-line file viewer, lint-gated edits, and collapsed history — lifts GPT-4 Turbo from a 3.8% non-interactive RAG baseline to 12.47% resolve on SWE-bench, without changing model weights.

## Why it matters here

Broadside coding agents fail first at the harness, not the model: the ACI is the same design surface as GRID COMMAND tool APIs — compact actions, concise observations, and guardrails that stop a bad edit from poisoning the rest of the trajectory.

## Key ideas

- LM agents are a new end-user class: Linux-shell UIs built for humans dump too much context and make multi-line edits brittle, so the interface itself is a first-class research object.
- SWE-agent sits on a Linux shell but exposes a small command set (`find_file`, `search_file`/`search_dir`, `open`/`scroll`/`goto`, `edit`) with at most 50 search hits and a 100-line viewer window.
- The `edit` command replaces a line range in one turn, redisplays the file, and rejects the patch if a linter flags a syntax error — ablations drop Lite resolve from 18.0% to 10.3% without a dedicated editor.
- Context management keeps only the last five observations fully expanded and collapses older ones, so the agent can take more turns inside a fixed token budget.
- On SWE-bench Lite the ACI beats a shell-only agent 18.0% vs 11.0%; HumanEvalFix pass@1 is 87.7% (Python) with the same interface.

## Caveats

## Links

- arXiv: [2405.15793](https://arxiv.org/abs/2405.15793)
- PDF: https://arxiv.org/pdf/2405.15793
- NeurIPS: https://proceedings.neurips.cc/paper_files/paper/2024/hash/5a7c947568c1b1328ccc5230172e1e7c-Abstract-Conference.html
- Project: https://swe-agent.com/
