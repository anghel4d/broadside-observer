---
title: "ExecCritic: Learn to Test, Test to Improve for Coding Agents"
authors:
  - "Leitian Tao"
  - "Baolin Peng"
  - "Haorui Wang"
  - "Hang Wang"
  - "Hao Cheng"
  - "Wenlin Yao"
  - "Qianhui Wu"
  - "Tao Ge"
  - "Sharon Li"
  - "Jianfeng Gao"
year: 2026
venue: "arXiv"
arxiv: "2609.09133"
doi: null
source: "https://arxiv.org/abs/2609.09133"
topics:
  - "agent-failure-localization"
  - "harness-engineering"
seed_rank: 1774
seed_batch: "frontier-2026-09-10"
reviewed: "2026-09-10"
pool: "agents"
relevance_score: 10
lineage: coding-agent-test-scaffold
cites:
  - title: "ExecCritic: Learn to Test, Test to Improve for Coding Agents"
    url: "https://arxiv.org/abs/2609.09133"
    year: 2026
    arxiv: "2609.09133"
    doi: null
see:
  - "084-swe-bench-can-language-models-resolve-real-world-github-issu"
  - "1636-what-does-multi-harness-rl-learn-credit-assignment-and-portability-in"
  - "1644-harness-agnostic-detection-and-immunization-of-reward-hacking-in-self"
  - "1536-harness-engineering-anatomy-architecture-and-evolution-of-coding-agent"
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
---

# ExecCritic: Learn to Test, Test to Improve for Coding Agents

## One-sentence takeaway

ExecCritic splits Test vs Repair agents under a fail-closed harness that freezes tests before repair — on SWE-bench Verified, test quality gates whether execution feedback helps, and role-specific RL trains each side separately on Qwen-3.5-35B-A3B.

## Why it matters here

Same-trajectory patch+test writing creates agreeing errors and false confidence — the coding-agent version of Broadside’s harness credit-assignment problem (1636 / 1644). Fail-closed frozen tests are the scaffold pattern to steal for GRID COMMAND acceptance checks and ano regression oracles.

## Key ideas

- Scaffold: Test agent writes repository-native tests → fail-closed harness qualifies and freezes them → Repair agent revises source from execution feedback without editing tests.
- Learn to Test: Test agent RL’d to produce behaviorally valid tests that distinguish correct vs incorrect patches.
- Test to Improve: Repair agent learns direct resolution and feedback-guided revision.
- Holding Repair fixed, tests from the trained Test agent determine whether feedback helps on SWE-bench Verified.
- Both roles share Qwen-3.5-35B-A3B backbone but are trained separately — role factorization over one monolith.

## Caveats

SWE-bench Verified / coding-agent scope. Fail-closed qualification still needs a trusted oracle signal. Do not remint 084 / 1636 / 1644.

## Links

- arXiv: [2609.09133](https://arxiv.org/abs/2609.09133)
- PDF: https://arxiv.org/pdf/2609.09133
