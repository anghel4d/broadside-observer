---
title: "Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments"
authors:
  - "Haomin Qi"
  - "Xingliang Wang"
  - "Xuanqi Gao"
  - "Baihui Sang"
  - "Xin Zhang"
  - "Minghua Ma"
  - "Pengfei Gao"
  - "Yu Kang"
  - "Qingwei Lin"
  - "Saravan Rajmohan"
  - "Dongmei Zhang"
  - "Qi Zhang"
year: 2026
venue: "arXiv:cs.SE"
arxiv: "2607.28591"
doi: null
source: "https://arxiv.org/abs/2607.28591"
topics:
  - rag
  - retrieval
  - provenance
  - coding-agents
  - harness
seed_rank: 52
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

# Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments

## One-sentence takeaway

Change2Task turns merged pull requests into verified coding-agent tasks on healthy modern revisions of the same repository, reconstructing task state by patch reversal, code mapping, or agent reconstruction.

## Why it matters here

Broadside and standing research loops need a continuing supply of executable, provenance-grounded coding tasks; Change2Task is a factory for those environments rather than a one-off SWE-bench scrape.

## Key ideas

- Each task couples a realistic software state with a specification, development tools, and reliable verification on a maintained modern base.
- Historical evidence is aligned with evolved code, then the lifecycle is validated from healthy base → task state → restored state.
- Five task families are constructed: bug fix, feature addition, test generation, API migration, and security repair.
- From 1,130 eligible source changes the pipeline reaches 79.6% verified construction success and recovers 29.2% more verified tasks than a PR-based construction baseline.
- Historical and reconstructed cases agree on agent outcomes up to 98.0%; reusing modern bases cuts measured pipeline expenditure by 10.8%.

## Caveats

## Links

- arXiv: [2607.28591](https://arxiv.org/abs/2607.28591)
- PDF: https://arxiv.org/pdf/2607.28591
