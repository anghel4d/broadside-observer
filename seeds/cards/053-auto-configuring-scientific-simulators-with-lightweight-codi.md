---
title: "Auto-Configuring Scientific Simulators with Lightweight Coding-Agent Adapters"
authors:
  - "Matthew Ho"
  - "Brian Liu"
  - "Jixuan Chen"
  - "Audrey Wang"
  - "Lianhui Qin"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2606.09774"
doi: null
source: "https://arxiv.org/abs/2606.09774"
topics:
  - tool-use
  - react
  - coding-agents
  - harness
seed_rank: 53
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# Auto-Configuring Scientific Simulators with Lightweight Coding-Agent Adapters

## One-sentence takeaway

Configuring an advanced scientific simulator, translating a modeling goal into a valid, runnable input deck, is a persistent bottleneck that costs domain scientists hours to days.

## Why it matters here

shapes harness/ACI design and model-vs-harness failure localization (Auto-Configuring Scientific Simulators with Lightweight Coding-Agent Adapters)

## Key ideas

- Configuring an advanced scientific simulator, translating a modeling goal into a valid, runnable input deck, is a persistent bottleneck that costs domain scientists hours to days.
- Input decks are executable interfaces: simulator-specific vocabulary, cross-file references, schema constraints, and validation rules must align before a simulation can run.
- We show that this bottleneck can be substantially reduced with a lightweight adapter around an off-the-shelf coding agent, rather than a bespoke simulator agent.
- Coding agents already navigate files, edit code, run commands, and repair outputs; what they lack is the simulator's executable contract, and rebuilding the agent loop risks discarding harness-calibrated tool-use and self-correction behavior.
- We introduce SIGA, a coding-agent adapter

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2606.09774](https://arxiv.org/abs/2606.09774)
- URL: https://arxiv.org/abs/2606.09774
