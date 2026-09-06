---
title: "TIGPO: Temporal Instance-Graph Policy Optimization for Long-Horizon LLM Agents"
authors:
  - "Jinwei Gan"
year: 2026
venue: "arXiv:cs.LG"
arxiv: "2609.03383"
doi: null
source: "https://arxiv.org/abs/2609.03383"
topics:
  - "agentic-llm-serving"
  - "continual-skills"
seed_rank: 1613
seed_batch: "frontier-2026-09-06"
reviewed: "2026-09-06"
pool: "agents"
relevance_score: 9
lineage: long-horizon-agents
cites:
  - title: "TIGPO: Temporal Instance-Graph Policy Optimization for Long-Horizon LLM Agents"
    url: "https://arxiv.org/abs/2609.03383"
    year: 2026
    arxiv: "2609.03383"
    doi: null
  - title: "SkillGLoW: Procedural-Family Skill Consolidation for Self-Improving Agents on Long-Horizon Task Streams"
    url: "https://arxiv.org/abs/2609.02217"
    year: 2026
    arxiv: "2609.02217"
    doi: null
see:
  - "1577-skillglow-procedural-family-skill-consolidation-for-self-improving"
  - "1581-speculative-macro-commit-for-faster-tool-using-agents"
  - "007-react-synergizing-reasoning-and-acting-in-language-models"
---
# TIGPO: Temporal Instance-Graph Policy Optimization for Long-Horizon LLM Agents

## One-sentence takeaway

TIGPO improves long-horizon LLM-agent credit assignment by organizing rollouts into temporal instance-graphs — graph policy optimization over state-transition structure rather than flat trajectory RL.

## Why it matters here

Long-horizon Broadside agents (skills streams, tool macros) need better credit than outcome RL. TIGPO is the graph-PO advance on that shelf beside SkillGLoW (1577).

## Key ideas

- Problem: flat trajectory credit assignment fails on long tool-using horizons.
- Design: temporal instance-graphs over rollout state transitions; policy optimization on the graph.
- Target: long-horizon LLM agents (not classical MARL only).
- Evidence: improved credit/return vs non-graph agent PO baselines (see paper).

## Caveats

- Graph construction overhead per rollout batch.
- Complements skill libraries; does not replace memory provenance.
- Single-author systems feel — replicate before betting the stack.

## Links

- arXiv: [2609.03383](https://arxiv.org/abs/2609.03383)
- PDF: https://arxiv.org/pdf/2609.03383
