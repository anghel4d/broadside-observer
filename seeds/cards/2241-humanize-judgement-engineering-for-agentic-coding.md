---
title: "Humanize: Judgement Engineering for Agentic Coding"
authors:
  - "Sihao Liu"
  - "Ligeng Zhu"
  - "Zijian Zhang"
  - "Dongyun Zou"
  - "Zhengyang Zhang"
  - "Changye Li"
  - "Song Bian"
  - "Song Han"
  - "Tony Nowatzki"
year: 2026
venue: "arXiv"
arxiv: "2610.08900"
doi: null
source: "https://arxiv.org/abs/2610.08900"
topics:
  - "agent-failure-localization"
  - "continual-agent-skills"
seed_rank: 2241
seed_batch: "frontier-2026-10-08"
reviewed: "2026-10-08"
pool: "agents"
relevance_score: 9
lineage: runtime-harness-evolution
cites:
  - title: "Humanize: Judgement Engineering for Agentic Coding"
    url: "https://arxiv.org/abs/2610.08900"
    year: 2026
    arxiv: "2610.08900"
    doi: null
see:
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
  - "1536-harness-engineering-anatomy-architecture-and-evolution-of-coding-agent"
  - "1822-harness-or-model-isolating-the-harness-effect-in-agentic-coding-with"
---

# Humanize: Judgement Engineering for Agentic Coding

## One-sentence takeaway

Humanize makes agentic coding reliable by taking the judgement calls away from the builder: a human approves a plan contract, a builder agent implements it in rounds, a reviewer agent from a different vendor decides when it is done, and deterministic hooks (not a model) route work between roles and enforce 72 mechanical gates.

## Why it matters here

This is the pattern Broadside sells and the fleet already runs: draft-only agents, human approval at the plan boundary, and gates that are code rather than prompts. The paper's useful twist is the cross-vendor reviewer. Viewed as a Markov chain over repository states, a defect survives only if two different models both miss it. Its 118 public postmortems are a rare dataset of how real agent loops actually fail, and the headline finding (stopping is the weak point) applies directly to long Anoptic and ano agent runs.

## Key ideas

- **Judgement engineering.** The decisions at the boundaries between planning, implementation, review and learning are made explicit and enforced mechanically, because the agent that writes the code is a weak judge of whether it is finished.
- **Roles.** Human-approved plan contract, then a builder agent working in rounds, then a reviewer agent from another vendor that decides completion. Deterministic hooks, including stop-hook gates, route between roles.
- **Two-model sampling argument.** Alternating builder and reviewer samples jointly from two models, so passing review requires both to miss the same defect.
- **Deployment evidence.** 68 versions in 108 days, 1,468 GitHub stars, a 567-file gem5 build-system migration under upstream review, and Kernel Design Agents that placed in the top three of all three Full-Agent tracks of the MLSys 2026 FlashInfer contest.
- **Postmortems.** Independent review catches unsupported builder claims, but stopping remains weak: in reports that separate rounds by phase, two thirds of rounds happened after implementation was already accepted.

## Caveats

The authors say themselves that the evidence is observational, not a controlled comparison of workflows. The olympiad, PutnamBench (672/672) and Lean-Eval claims are self-reported in this paper and were not checked here. GitHub stars are a popularity signal, not a quality measure.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.08900
- PDF: https://arxiv.org/pdf/2610.08900
- Code: https://github.com/humanfia/humanize
