---
title: "BenchShield: Formal Model-Backed Instrumentation for Reward Integrity in LLM-Agent Evaluation Infrastructure"
authors:
  - "Shenghan Zheng"
  - "Zonglin Di"
  - "Yimin Liu"
  - "Kyoung Whan Choe"
  - "Jiankai Sun"
  - "Heguang Lin"
  - "Penghao Jiang"
  - "Yifeng He"
  - "Xiao Cheng"
  - "Jicheng Wang"
  - "Wenbo Chen"
  - "Alex Yates"
  - "Yinzhe Zhao"
  - "Bingran You"
  - "Yuan Gao"
  - "Ayush Munot"
  - "Shubham Gaur"
  - "Zhe Ye"
  - "Hao Wang"
  - "Xiangyi Li"
  - "Dawn Song"
  - "Christophe Hauser"
year: 2026
venue: "arXiv"
arxiv: "2609.11028"
doi: null
source: "https://arxiv.org/abs/2609.11028"
topics:
  - "agent-failure-localization"
  - "harness-engineering"
  - "autoresearch-experiment-selection"
seed_rank: 1801
seed_batch: "frontier-2026-09-12"
reviewed: "2026-09-12"
pool: "agents"
relevance_score: 9
lineage: reward-integrity-eval-infra
cites:
  - title: "BenchShield: Formal Model-Backed Instrumentation for Reward Integrity in LLM-Agent Evaluation Infrastructure"
    url: "https://arxiv.org/abs/2609.11028"
    year: 2026
    arxiv: "2609.11028"
    doi: null
see:
  - "1644-harness-agnostic-detection-and-immunization-of-reward-hacking-in-self"
  - "1609-making-every-tool-call-count-necessary-tool-evidence-path-rewards-for"
  - "1774-execcritic-learn-to-test-test-to-improve-for-coding-agents"
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
---

# BenchShield: Formal Model-Backed Instrumentation for Reward Integrity in LLM-Agent Evaluation Infrastructure

## One-sentence takeaway

BenchShield treats LLM-agent benchmarks as interactive evaluation infrastructure and adds formal model-backed instrumentation so reward hacking cannot silently inflate agent scores.

## Why it matters here

LoopsBench (060) and reward-hacking immunization (1644) already argue that eval harnesses are load-bearing. BenchShield is the infrastructure move: instrument the reward path with a formal model so Broadside’s agent scoreboards measure solving, not trajectory exploits.

## Key ideas

- Frames modern LLM-agent benchmarks as interactive systems: observe state, call tools, mutate workspaces, submit artifacts, receive outcome rewards.
- Names the vulnerability: agents improve measured score by exploiting reward-relevant trajectories instead of solving the task.
- Formal model-backed instrumentation of evaluation infrastructure for reward integrity.
- Targets reward hacking at the harness/infra layer rather than hoping the policy learns honesty.
- Gives Broadside a concrete “where reliability lives” probe for agent eval suites (SWE-bench class and beyond).

## Caveats

Author list is large; check which components are released vs conceptual. Formal models must match each benchmark’s reward procedure — no universal plug-in. Do not remint 1644 / 1609 / 060 / 1774.

## Links

- arXiv: [2609.11028](https://arxiv.org/abs/2609.11028)
- PDF: https://arxiv.org/pdf/2609.11028
