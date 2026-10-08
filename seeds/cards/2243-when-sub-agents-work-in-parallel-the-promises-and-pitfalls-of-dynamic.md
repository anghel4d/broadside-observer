---
title: "When Sub-Agents Work in Parallel: The Promises and Pitfalls of Dynamic Concurrency in Long-Horizon Coding Tasks"
authors:
  - "Han Li"
  - "HanHaoNing Li"
  - "Ziqian Jiang"
  - "Yiling Lou"
year: 2026
venue: "arXiv"
arxiv: "2610.10263"
doi: null
source: "https://arxiv.org/abs/2610.10263"
topics:
  - "agent-failure-localization"
  - "agentic-llm-serving"
seed_rank: 2243
seed_batch: "frontier-2026-10-08"
reviewed: "2026-10-08"
pool: "agents"
relevance_score: 9
lineage: runtime-harness-evolution
cites:
  - title: "When Sub-Agents Work in Parallel: The Promises and Pitfalls of Dynamic Concurrency in Long-Horizon Coding Tasks"
    url: "https://arxiv.org/abs/2610.10263"
    year: 2026
    arxiv: "2610.10263"
    doi: null
see:
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
  - "1120-position-multi-agent-systems-should-prioritize-concurrency-contr"
  - "1536-harness-engineering-anatomy-architecture-and-evolution-of-coding-agent"
---

# When Sub-Agents Work in Parallel: The Promises and Pitfalls of Dynamic Concurrency in Long-Horizon Coding Tasks

## One-sentence takeaway

Letting frontier coding agents spawn concurrent sub-agents mid-task (Codex, Claude Code, Kimi Code) does not reliably raise success: across 2,124 matched executions the effect ranged from −11.9 to +2.3 points while token use rose 1.41–3.31×, with real gains only on long-horizon work such as LoopsBench.

## Why it matters here

This is the first controlled measurement of the exact execution policy the Grok Bot fleet and cloud agents use: a main agent fanning work out to sub-agents. It says fan-out pays off only on long-horizon tasks and costs 1.4–3.3× the tokens, and it gives a failure taxonomy (orchestration, execution governance, global context, shared state and merge) to design against. It also ties back to card 060 (LoopsBench), the benchmark where concurrency helped most.

## Key ideas

- **Design.** 354 tasks × 3 agents × concurrency on/off = 2,124 execution cells across five benchmarks of varying horizon; the recorded token use corresponds to about $20.8k in API cost.
- **Mixed end-to-end effect.** Resolution changes ranged from an 11.9-point drop to a 2.3-point gain; bounded tasks often saw little or negative benefit.
- **Taxonomy.** 4 categories, 13 subcategories and 28 observable patterns of concurrency-specific failure: task orchestration, execution governance, global context management, and shared state and merge.
- **When it works.** Three mechanisms behind observed advantages: complementary work, alternative attempts with selection, and independent validation. In each, the main agent turns parallel activity into progress by integrating, selecting or correcting.
- **Artifact.** Full manifest, normalised main- and sub-agent event records, codebook and scripts that regenerate every table.

## Caveats

Results are tied to specific agent versions and their built-in concurrency policies at the time of the study; vendors change these quickly. The failure taxonomy comes from qualitative coding of trajectories, so category boundaries reflect the authors' codebook.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.10263
- PDF: https://arxiv.org/pdf/2610.10263
- Artifact: https://github.com/schwerli/Concurrency-Failures-Trajectory-Artifact
