---
title: "What Does Multi-Harness RL Learn? Credit Assignment and Portability in Coding Agents"
authors:
  - "Chenqian Le"
  - "Jiayi Cheng"
  - "Qijia He"
  - "Runhao Li"
  - "Yinghao Li"
  - "Xupeng Chen"
year: 2026
venue: "arXiv"
arxiv: "2609.04518"
doi: null
source: "https://arxiv.org/abs/2609.04518"
topics:
  - "agent-failure-localization"
  - "agentic-llm-serving"
  - "harness-engineering"
seed_rank: 1636
seed_batch: "frontier-2026-09-08"
reviewed: "2026-09-08"
pool: "agents"
relevance_score: 10
lineage: harness-credit-assignment
cites:
  - title: "Where Does Harness-Optimization Value Live? Localized Gains and the Budget-Splitting Trap in Self-Evolving LLM Agents"
    url: "https://arxiv.org/abs/2609.02889"
    year: 2026
    arxiv: "2609.02889"
    doi: null
see:
  - "1536-harness-engineering-anatomy-architecture-and-evolution-of-coding-agent"
  - "1573-where-does-harness-optimization-value-live-localized-gains-and-the"
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "1079-helix-model-harness-co-evolution-for-recursive-self-improvement"
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
---

# What Does Multi-Harness RL Learn? Credit Assignment and Portability in Coding Agents

## One-sentence takeaway

Multi-harness RL mixes two knobs — training on several harnesses, and pooling their rewards in one GRPO group — and sealed SWE-bench Verified runs show the evaluation harness moves mean solve rate by 4.3× while Cross-group reward pooling fails to buy portability.

## Why it matters here

Broadside's harness-vs-model shelf (1050 / 1536 / 1573) needs credit-assignment facts, not slogans. This isolates Within vs Cross GRPO on frozen Aider/OpenHands/Qwen-Code/SWE-agent traces and shows the eval harness dominates the policy — exactly the budget-splitting trap 1573 warned about, now measured under sealed oracles including a held-out minimal harness.

## Key ideas

- Decomposes multi-harness recipes into (1) multi-harness exposure and (2) Cross vs Within relative-advantage grouping under GRPO.
- Replays identical frozen task–harness records from Aider, OpenHands, Qwen Code, and SWE-agent from one Qwen3-8B SFT warm start with equal update budgets.
- Sealed SWE-bench Verified oracle: across 24,000 evaluations the eval harness alone moves mean solve rate from 2.14% to 9.27% (≈4.3×); held-out minimal harness included.
- Cross-group reward pooling does not purchase portability to the held-out harness — credit assignment across harnesses is not free transfer.
- Positions harness identity as a first-class confounder for agent RL leaderboards and for HELIX-style harness–weight co-evolution.

## Caveats

Coding-agent / SWE-bench Verified scope; does not measure GRID COMMAND or realtime ECS harnesses. Frozen traces remove online harness drift that EVOHARNESSBENCH (1637) studies. Do not remint 1536 / 1573 / 1050 / 1079.

## Links

- arXiv: [2609.04518](https://arxiv.org/abs/2609.04518)
- PDF: https://arxiv.org/pdf/2609.04518
