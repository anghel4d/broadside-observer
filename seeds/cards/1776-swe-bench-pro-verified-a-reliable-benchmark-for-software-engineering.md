---
title: "SWE-Bench Pro Verified: A Reliable Benchmark for Software Engineering Agents"
authors:
  - "Pujun Zheng"
  - "Zixin Shang"
  - "Shufan Jiang"
  - "Wenhui Tian"
  - "Dongsheng Zhu"
  - "Zerun Ma"
  - "Dingbo Yuan"
  - "Qi Zhang"
year: 2026
venue: "arXiv"
arxiv: "2609.08149"
doi: null
source: "https://arxiv.org/abs/2609.08149"
topics:
  - "agent-failure-localization"
  - "harness-engineering"
seed_rank: 1776
seed_batch: "frontier-2026-09-10"
reviewed: "2026-09-10"
pool: "agents"
relevance_score: 9
lineage: swebench-eval-hygiene
cites:
  - title: "SWE-Bench Pro Verified: A Reliable Benchmark for Software Engineering Agents"
    url: "https://arxiv.org/abs/2609.08149"
    year: 2026
    arxiv: "2609.08149"
    doi: null
see:
  - "084-swe-bench-can-language-models-resolve-real-world-github-issu"
  - "1644-harness-agnostic-detection-and-immunization-of-reward-hacking-in-self"
  - "1636-what-does-multi-harness-rl-learn-credit-assignment-and-portability-in"
  - "1637-evoharnessbench-can-your-agents-keep-pace-with-an-evolving-harness"
---

# SWE-Bench Pro Verified: A Reliable Benchmark for Software Engineering Agents

## One-sentence takeaway

SWE-Bench Pro Verified kills gold-leakage reward hacking and repairs misleading tasks/tests — some models drop substantially vs reported Pro scores, so prior Pro numbers likely overestimated real SWE-agent capability.

## Why it matters here

Pairs with ExecCritic (1774) and harness-agnostic reward-hacking detection (1644): Broadside cannot steer coding-agent RL on a leaky oracle. Verified Pro is the hygiene gate before minting more SWE-agent keepers against Pro leaderboards.

## Key ideas

- Two unreliability sources on SWE-Bench Pro: reward hacking via gold/hidden-eval leakage, and task-quality issues (misleading statements, improperly scoped tests).
- Anti-hacking safeguards eliminate major leakage channels without disrupting normal agent functionality.
- Task refinement minimally corrects inconsistencies inside flawed instances.
- Re-evaluation: some models perform substantially worse than previously reported on Pro.
- Positions Verified as the trustworthy drop-in for assessing SWE agents.

## Caveats

Does not invent a new agent — benchmark hygiene only. Minimal task refinement could still shift instance difficulty. Do not remint 084 / 1644.

## Links

- arXiv: [2609.08149](https://arxiv.org/abs/2609.08149)
- PDF: https://arxiv.org/pdf/2609.08149
