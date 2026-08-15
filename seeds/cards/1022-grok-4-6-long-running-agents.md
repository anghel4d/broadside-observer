---
title: "Introducing Grok 4.6"
authors: ["xAI"]
year: 2026
venue: "xAI"
arxiv: null
doi: null
source: "https://x.ai/news/grok-4-6"
topics: [agentic-llm-serving, coding-agents]
seed_rank: 1022
seed_batch: "frontier-2026-08-14"
reviewed: "2026-08-14"
pool: "agents"
relevance_score: 8
lineage: frontier-labs
cites:
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
  - title: "Terminal-Bench"
    url: "https://www.tbench.ai/"
    year: 2025
    arxiv: null
    doi: null
see:
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
---

# Introducing Grok 4.6

## One-sentence takeaway

xAI’s Aug 12 first-party drop: Grok 4.6 is a long-running-agent post-train of 4.5 (SFT regenerated across harnesses, then agentic RL including kernel-opt and CAD), not a new base model — $2/$6 per M tokens.

## Why it matters here

Lab drops in-window are in scope. This is the xAI answer to “agents that stay on a task”: extra SFT from 4.5 trajectories across harnesses, RL on coding/kernel/web/CAD environments, claimed self-testing on long trajectories. For Broadside it is a *model* card next to harness papers (QuoteBench, Ready Cohorts), not a remint of DeepSeek V4-Pro.

## Key ideas

- Longer supplemental pretrain than 4.5, then 4.5-regenerated SFT filtered by model-based checks, then agentic RL.
- Positioned for multi-step research, codebase work, and interactive/visual first passes; 2× included usage in Grok Build and Cursor for the first week.
- Published evals (vendor table): AA Intelligence 61 (ties GPT-5.6 Sol Max, behind Fable 5 Max 62); CursorBench 69.9%; DeepSWE 65.9% (behind Sol 73%); Terminal-Bench v3 26% (behind Sol 34.6%).
- Fast variant at 2× price. API + OpenRouter/Vercel/Cloudflare.

## Caveats


## Links

- Post: https://x.ai/news/grok-4-6
- API docs: https://x.ai/docs
