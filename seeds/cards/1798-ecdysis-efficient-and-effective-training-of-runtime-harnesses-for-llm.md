---
title: "Ecdysis: Efficient and Effective Training of Runtime Harnesses for LLM Agents"
authors:
  - "Ruiqing Yue"
  - "Yu Cui"
  - "Zhuoyu Sun"
  - "Sicheng Pan"
  - "Xianhong Xue"
  - "Tingyu Li"
  - "Ting Li"
  - "Wenzhuo Zhu"
  - "Yi Chen"
  - "Yifei Liu"
  - "Baohan Huang"
  - "Zhe Cui"
  - "Haibin Zhang"
  - "Cong Zuo"
year: 2026
venue: "arXiv"
arxiv: "2609.11677"
doi: null
source: "https://arxiv.org/abs/2609.11677"
topics:
  - "harness-engineering"
  - "continual-agent-skills"
  - "agentic-llm-serving"
seed_rank: 1798
seed_batch: "frontier-2026-09-12"
reviewed: "2026-09-12"
pool: "agents"
relevance_score: 10
lineage: runtime-harness-evolution
cites:
  - title: "Ecdysis: Efficient and Effective Training of Runtime Harnesses for LLM Agents"
    url: "https://arxiv.org/abs/2609.11677"
    year: 2026
    arxiv: "2609.11677"
    doi: null
see:
  - "1536-harness-engineering-anatomy-architecture-and-evolution-of-coding-agent"
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "1574-safeevolve-harness-policy-co-evolution-from-agent-experience-for"
  - "1768-co-evolving-harnesses-and-models-on-policy-correction-helps-weaker"
  - "1769-robustsgpo-search-space-control-for-agent-harness-evolution"
---

# Ecdysis: Efficient and Effective Training of Runtime Harnesses for LLM Agents

## One-sentence takeaway

Ecdysis trains self-evolving runtime harnesses for LLM agents without the iterative search tax of re-running the full agent on every harness candidate.

## Why it matters here

Broadside’s harness shelf (1050 / 1536 / 1574 / 1768–1769) keeps paying for harness evolution with wall-clock agent rollouts. Ecdysis is the training-efficiency cut: if harness search can be amortized, GRID COMMAND and Anoptic tool buses can co-evolve policy without burning sandbox-hours per edit.

## Key ideas

- Frames self-evolving runtime harnesses as a first-class optimization target for LLM agent execution, not just prompt wrappers.
- Diagnoses the cost of iterative harness search: each candidate revision re-executes agents on task instances, dominating wall-clock.
- Proposes Ecdysis training methods that keep harness improvements while cutting repeated full-trajectory evaluations.
- Targets efficient and effective harness updates under realistic agent runtimes — complementary to RobustSGPO’s search-space control and SafeEvolve’s policy co-evolution.
- Keeps the model-vs-harness cut sharp: gains come from the harness training loop, not from swapping the base LLM.

## Caveats

Abstract emphasizes training efficiency for runtime harnesses; transfer to OpenHands/SWE-agent/Aider and GRID COMMAND tool schemas is unproven here. Do not remint 1536 / 1050 / 1574 / 1768–1769. Read the paper for exact objective and ablations before treating Ecdysis as a drop-in harness optimizer.

## Links

- arXiv: [2609.11677](https://arxiv.org/abs/2609.11677)
- PDF: https://arxiv.org/pdf/2609.11677
