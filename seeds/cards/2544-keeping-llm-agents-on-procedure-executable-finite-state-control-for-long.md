---
title: "Keeping LLM Agents on Procedure: Executable Finite-State Control for Long-Horizon Instruction Fidelity"
authors:
  - "Yutao Sun"
  - "Haokun Li"
  - "Mingshuai Chen"
  - "Guanyan Li"
  - "Zhongyi Wang"
  - "Shengchao Qin"
  - "Jianwei Yin"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.10884"
doi: null
source: "https://arxiv.org/abs/2611.10884"
version_reviewed: "v1"
topics:
  - "agent-failure-localization"
  - "continual-agent-skills"
seed_rank: 2544
seed_batch: "frontier-2026-11-10"
reviewed: "2026-11-10"
pool: "agents"
relevance_score: 9
see:
  - 2515-do-agents-still-follow-the-rules-benchmarking-rule-compliance-under-ag
cites:
  - title: "Keeping LLM Agents on Procedure: Executable Finite-State Control for Long-Horizon Instruction Fidelity"
    url: "https://arxiv.org/abs/2611.10884"
    year: 2026
    arxiv: "2611.10884"
    doi: null
---

# Keeping LLM Agents on Procedure: Executable Finite-State Control for Long-Horizon Instruction Fidelity

## One-sentence takeaway

Keeping an SOP's state in an executable finite-state machine outside the model, enforced at tool calls, transitions and end of turn, stops long-run procedural drift and lets a small model beat a larger one at a third of the cost.

## Why it matters here

Skills are written once and must hold for hours of unattended work, which is exactly where our agents drift. This is clean evidence that reliability should live in the runtime rather than the prompt, and that restating instructions or resuming only moves the drift. It suggests compiling repeatable skills into checked state machines.

## Key ideas

- **Drift is real.** Over long runs agents leave the procedure; restating instructions or resuming a stopped agent just shifts the shortcut.
- **Three enforcement points.** The FSM checks tool calls, state transitions and the end of each turn.
- **Pre-registered result.** On 200-account SOP-Bench batches, Claude Haiku 4.5 with the FSM averaged 139 correct by-procedure decisions vs 48 for the strongest baseline (95% CI of difference [46, 130]), steady to the end.
- **Small models carry procedure.** Haiku 4.5 with FSM beat plain Claude Sonnet 4.6 at 38% of the cost; gains tracked how much the plain agent drifted.
- **Breadth.** Further analyses on SWE-bench Verified, tau-squared-bench and staged and cross-context workflows.

## Caveats

Needs the procedure to be expressible as an FSM up front; open-ended tasks benefit less. Main headline uses one benchmark family.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.10884
- PDF: https://arxiv.org/pdf/2611.10884
