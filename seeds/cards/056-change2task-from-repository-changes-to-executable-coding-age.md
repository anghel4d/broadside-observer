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
seed_rank: 56
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments

## One-sentence takeaway

Scaling coding agents requires a continuing supply of executable data for training, benchmarking, and continuous evaluation.

## Why it matters here

retrieval+evidence trails matter for Broadside provenance-rich digests; shapes harness/ACI design and model-vs-harness failure localization (Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments)

## Key ideas

- Scaling coding agents requires a continuing supply of executable data for training, benchmarking, and continuous evaluation.
- Each task must couple a realistic software state with a specification, development tools, and reliable verification.
- To expand this supply, we present Change2Task, a system grounded in repository history that converts merged pull requests into verified tasks on healthy modern revisions of the same repository.
- It aligns historical evidence with evolved code, reconstructs task states through Patch Reversal, Code Mapping, or Agent Reconstruction, and validates the lifecycle from a healthy base to a task state and a restored state.
- By deriving multiple tasks grounded in developer evidence from maintained environments, Change2Task provides executable data for coding agent

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2607.28591](https://arxiv.org/abs/2607.28591)
- URL: https://arxiv.org/abs/2607.28591
