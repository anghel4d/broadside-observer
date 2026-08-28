---
title: "JIT-Agent: Scaling Harness Intelligence via Just-in-Time Harness Evolution"
authors:
  - "Guibin Zhang"
  - "Leo Lu"
  - "Fangzhou Xie"
  - "Kang Zhu"
  - "Junhao Wang"
  - "Zhifei Xie"
  - "Zhaochen Yu"
  - "Zihang Liu"
  - "Zhongxiang Sun"
  - "Qiankun Li"
  - "Yue Liao"
  - "Heng Chang"
  - "Xiaobin Hu"
  - "Qibing Ren"
  - "Wangchunshu Zhou"
  - "Shuicheng Yan"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2608.25593"
doi: null
source: "https://arxiv.org/abs/2608.25593"
topics:
  - "agent-failure-localization"
  - "continual-agent-skills"
seed_rank: 1447
seed_batch: "frontier-2026-08-28"
reviewed: "2026-08-28"
pool: "agents"
relevance_score: 10
lineage: agent-harness-runtime
cites:
  - title: "DeepSeek Harness: Everything is a Plugin"
    url: "https://deepseek.com/harness/en/"
    year: 2026
    arxiv: null
    doi: null
  - title: "HELIX: Model-Harness Co-evolution for Recursive Self-Improvement"
    url: "https://arxiv.org/abs/2608.13951"
    year: 2026
    arxiv: "2608.13951"
    doi: null
  - title: "LoopsBench: From Harness Engineering to Loop Engineering in Coding Agent Evaluation"
    url: "https://arxiv.org/abs/2608.00267"
    year: 2026
    arxiv: "2608.00267"
    doi: null
see:
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "1079-helix-model-harness-co-evolution-for-recursive-self-improvement"
  - "1119-harness-continual-learning-continual-adaptation-beyond-model-par"
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
  - "1000-deepseek-v4-pro-0813-ga"
---

# JIT-Agent: Scaling Harness Intelligence via Just-in-Time Harness Evolution

## One-sentence takeaway

Agent capability is harness-dominated: JIT-Agent synthesizes, repairs, and self-evolves task-adaptive harnesses for off-the-shelf agentic LLMs.

## Problem

Harness design — memory, planning, action protocol, tool/skill orchestration — still eats more of the agent than the foundation model, yet it is hand-written per task. HELIX (1079) co-evolves model and harness offline; DeepSeek Harness (1050) makes everything a plugin but does not synthesize the plugin graph per task. Broadside needs a way to mint a task-shaped harness without a human rewrite every time GRID COMMAND's order loop or a research radar changes shape.

## Design

- Formalizes the agent harness as a composable, machine-generatable artifact under a fixed four-module protocol (memory, planning, action, tool/skill orchestration).
- JIT-Agent is a harness-intelligence model that **customizes** a harness for the task at hand, **repairs** it for stable execution, and **self-evolves** by distilling signals from an archive of prior harness configs.
- Drop-in helper around off-the-shelf agentic LLMs rather than a new agent framework.
- Reported with DeepSeek-V4-Flash as the wrapped model: harness helper lifts it past stronger baselines on the paper's agentic suite.

## Evidence

Empirical agentic eval with DeepSeek-V4-Flash + JIT-Agent harness helper vs stronger models without the helper. Claims harness synthesis/repair/self-evolve under a fixed protocol — not a formal safety proof.

## Limitations

- Harness archive and self-evolve loop need a durable store; naive logging will reintroduce the KV-vs-rollback issues of 1078.
- Four-module protocol is the authors' cut — map it onto 1050's plugin surface before adopting.
- Does not decide which tool effects are irreversible (see 27146 / 1144).

## Implications for Broadside

Treat harness synthesis as a Broadside subsystem beside the model. Pair with 1050 (plugin surface) and 1079 (co-evolution): JIT-Agent is the online synthesizer; HELIX is the offline co-trainer; DeepSeek Harness is the plugin ABI. Do not ship task-specific hand harnesses for new GRID COMMAND modes if a JIT harness helper can emit them.

## Links

- arXiv: [2608.25593](https://arxiv.org/abs/2608.25593)
- PDF: https://arxiv.org/pdf/2608.25593
