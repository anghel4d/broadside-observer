---
title: "Continuation-Guided LLM Evolution of Program Policies and Goal Compilers in Craftax"
authors:
  - "Víctor Gallego"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.19537"
doi: null
source: "https://arxiv.org/abs/2611.19537"
version_reviewed: "v1"
topics:
  - "strategy-rts-agents"
  - "procedural-content-codegen"
  - "partial-observability-multiagent"
seed_rank: 2633
seed_batch: "frontier-2026-11-18"
reviewed: "2026-11-18"
pool: "game-ai"
relevance_score: 8
see:
  - 006-voyager-an-open-ended-embodied-agent-with-large-language-mod
cites:
  - title: "Continuation-Guided LLM Evolution of Program Policies and Goal Compilers in Craftax"
    url: "https://arxiv.org/abs/2611.19537"
    year: 2026
    arxiv: "2611.19537"
    doi: null
---

# Continuation-Guided LLM Evolution of Program Policies and Goal Compilers in Craftax

## One-sentence takeaway

Coding agents evolve zero-LLM-call program policies for Craftax by refining against a feedback cascade (episode returns, then hierarchical goals and belief updates scored densely from the simulator), lifting final-stage arrival from under 1% to 50%, and then optimise a reusable goal compiler that turns structured tasks into new rule programs and transfers zero-shot to longer tasks.

## Why it matters here

For game AI this is the shape we want: an LLM as an offline author of fast, inspectable policy code rather than a per-tick inference call. Factoring the controller into a fixed interpreter (models, memory, skills) plus an editable rule program, and compiling goals into rule programs, maps directly onto rule/trigger systems for RTS agents.

## Key ideas

- **Program policies.** Coding agents synthesise and optimise code policies from simulator feedback; the result acts with zero model calls.
- **Feedback cascade.** Move from episode returns to hierarchical goals and belief updates that can be scored densely; episode-level feedback stalls below 1% final-level arrival, the cascade reaches the final stage 50% of the time (28% final boss defeats).
- **Factoring.** The controller is split into an environment interpreter I (models, memory, skills) and a rule program p0.
- **Goal compiler.** Coding agents optimise a compiler C mapping structured tasks g to new rule programs p_g.
- **Transfer.** Across five independent compiler searches trained only on short tasks, compilers transfer zero-shot to longer tasks without task-specific tuning or inference-time LLM calls.

## Caveats

Abstract-level read of the v1 preprint (Tuesday 17 Nov 2026 listing); single-author preprint on one environment (Craftax). Numbers are the author's.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.19537
- PDF: https://arxiv.org/pdf/2611.19537
- HTML: https://arxiv.org/html/2611.19537v1
- Code: https://github.com/vicgalle/craftax-program-policies
