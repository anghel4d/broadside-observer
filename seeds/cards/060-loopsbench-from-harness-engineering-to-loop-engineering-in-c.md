---
title: "LoopsBench: From Harness Engineering to Loop Engineering in Coding Agent Evaluation"
authors:
  - "Han Li"
  - "Zhemin Fang"
  - "Rili Feng"
  - "Yingqi Zhao"
  - "Jiaheng Liu"
  - "Pengfei Gao"
  - "He Ye"
  - "Dayi Lin"
  - "Qingwei Lin"
  - "Saravan Rajmohan"
  - "Dongmei Zhang"
year: 2026
venue: "arXiv:cs.SE"
arxiv: "2608.00267"
doi: null
source: "https://arxiv.org/abs/2608.00267"
topics:
  - provenance
  - rag
  - coding-agents
  - harness
seed_rank: 60
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"
    url: "https://arxiv.org/abs/2310.06770"
    year: 2023
    arxiv: "2310.06770"
    doi: null
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
see:
  - "084-swe-bench-can-language-models-resolve-real-world-github-issu"
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
---

# LoopsBench: From Harness Engineering to Loop Engineering in Coding Agent Evaluation

## One-sentence takeaway

LoopsBench evaluates long-horizon coding agents as dependency DAGs of separately testable units, with a flow-aware runtime that releases tests on the ready frontier and keeps finished nodes as regression obligations.

## Why it matters here

Standing ano research loops are DAG-shaped work, not single-issue patches; LoopsBench is the evaluation shape that matches that, and it shows even Opus-4.7 + Claude Code only clears 25% of tasks.

## Key ideas

- Harness engineering (tools, sandboxes, ACI) is giving way to loop engineering (how the agent continues, replans, and does not regress).
- 112 tasks from authentic sources span 8 languages and 9 domains, with more than 5,300 development units and executable tests.
- Prerequisite edges are source-evidenced; recorded agent plans recover only part of the source DAG.
- The strongest evaluated configuration (Opus-4.7, Claude Code, outer continuation) resolves 25.00% of tasks; regression events remain visible across loop profiles.
- Data and code are at microsoft/Loopsbench; project page https://loopsbench.ai/.

## Caveats

## Links

- arXiv: [2608.00267](https://arxiv.org/abs/2608.00267)
- PDF: https://arxiv.org/pdf/2608.00267
- Project: https://loopsbench.ai/
