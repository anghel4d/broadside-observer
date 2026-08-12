---
title: "ToolGate: Token-Efficient Pre-Call Control for Tool-Augmented Vision-Language Agents"
authors:
  - "Anjie Liu"
  - "Yan Song"
  - "Zhixun Chen"
  - "Ziqin Gong"
  - "Zhongwei Yu"
  - "Jun Wang"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2606.03054"
doi: null
source: "https://arxiv.org/abs/2606.03054"
topics:
  - tool-use
  - react
  - rag
  - retrieval
  - provenance
seed_rank: 79
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# ToolGate: Token-Efficient Pre-Call Control for Tool-Augmented Vision-Language Agents

## One-sentence takeaway

Tool-augmented vision-language agents can acquire external perceptual evidence through OCR, detection, segmentation, and other tools, but executing every proposed tool call is costly and sometimes unnecessary.

## Why it matters here

retrieval+evidence trails matter for Broadside provenance-rich digests; shapes harness/ACI design and model-vs-harness failure localization (ToolGate: Token-Efficient Pre-Call Control for Tool-Augmented Vision-Language Agents)

## Key ideas

- Tool-augmented vision-language agents can acquire external perceptual evidence through OCR, detection, segmentation, and other tools, but executing every proposed tool call is costly and sometimes unnecessary.
- We study the pre-call control problem: after a ReAct-style VLM agent proposes a perceptual tool call, should the call be executed, or skipped before its output enters the context?
- Across five benchmarks, we find that the baseline agent exhibits poor local selectivity: helpful and harmful calls occur at similar rates (11.8% vs.
- 9.9%), while most calls do not change the immediate forced-answer prediction.
- We introduce ToolGate, a lightweight external controller that predicts execute/skip decisions from trajectory text and simple structural features.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2606.03054](https://arxiv.org/abs/2606.03054)
- URL: https://arxiv.org/abs/2606.03054
