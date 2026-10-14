---
title: "TurnCost: Turns, Not Observations: Cache-Aware Loop Engineering for Coding Agents"
authors:
  - "Pramod Kumar"
  - "Raj Kumar Pandey"
year: 2026
venue: "arXiv"
arxiv: "2610.15093"
doi: null
source: "https://arxiv.org/abs/2610.15093"
topics:
  - "agent-tokenization-and-caching"
  - "runtime-harness-evolution"
seed_rank: 2287
seed_batch: "frontier-2026-10-14"
reviewed: "2026-10-14"
pool: "agents"
relevance_score: 8
lineage: runtime-harness-evolution
cites:
  - title: "TurnCost: Turns, Not Observations: Cache-Aware Loop Engineering for Coding Agents"
    url: "https://arxiv.org/abs/2610.15093"
    year: 2026
    arxiv: "2610.15093"
    doi: null
see: []
---

# TurnCost: Turns, Not Observations: Cache-Aware Loop Engineering for Coding Agents

## One-sentence takeaway

Under prefix caching, coding-agent cost is driven by turn count, not observation size: across 600 published trajectories 98.6% of input tokens hit the cache, flat pricing overstates loop cost ~7×, and turns explain 84% of log-cost variance versus 4% for mean observation size.

## Why it matters here

Directly re-prices how Broadside agents should be optimised: compressing tool output and routing turns to cheaper models are second-order; cutting unnecessary turns is the lever, and the closed-form delegation break-even says when a cheaper sub-model actually saves money.

## Key ideas

- **Loop engineering.** Context management, model selection, compaction and termination as one design space.
- **Observations are small.** Median observations are 118–286 tokens; the giant build logs that motivate compression sit near the 99th percentile.
- **Cache-aware cost model.** With ~98.6% prefix-cache hits, flat input pricing overestimates loop cost by roughly 7× on average.
- **Delegation break-even.** A closed-form condition, empirically validated: delegating to a cheaper model increased cost in half the evaluated settings, near the predicted boundary.
- **TurnCost tool.** Re-scores trajectory corpora under alternative caching, pricing, compression and routing policies.

## Caveats

Re-analysis of 600 trajectories sampled from nvidia/Open-SWE-Traces (OpenHands and SWE-agent × Qwen3.5-122B-A10B and Minimax-M2.5, SWE-rebench-V2 instances) under near-ideal caching assumptions; the authors note they do not show turns can be removed at fixed task success. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.15093
- PDF: https://arxiv.org/pdf/2610.15093
- HTML: https://arxiv.org/html/2610.15093v1
