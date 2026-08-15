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
seed_rank: 67
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2022
    arxiv: "2210.03629"
    doi: null
  - title: "Toolformer: Language Models Can Teach Themselves to Use Tools"
    url: "https://arxiv.org/abs/2302.04761"
    year: 2023
    arxiv: "2302.04761"
    doi: null
see:
  - "007-react-synergizing-reasoning-and-acting-in-language-models"
  - "086-toolformer-language-models-can-teach-themselves-to-use-tools"
---

# ToolGate: Token-Efficient Pre-Call Control for Tool-Augmented Vision-Language Agents

## One-sentence takeaway

ToolGate is an external execute/skip controller that intercepts a ReAct-style VLM tool proposal before the tool output enters context, cutting token cost to 64–69% of unrestricted ReAct.

## Why it matters here

Vision-tool spam (OCR, detect, segment) will hit any GRID COMMAND or Broadside computer-use loop; ToolGate is pre-call admission control rather than another better detector.

## Key ideas

- The decision is made after the agent proposes a perceptual tool call and before that call's output is written into the trajectory.
- Across five benchmarks the baseline has poor local selectivity: helpful vs harmful calls occur at 11.8% vs 9.9%, and most calls do not change the immediate forced-answer prediction.
- The controller reads trajectory text plus simple structural features; it is not a finetune of the VLM.
- On two Qwen3-VL backbones, cross-domain accuracy holds while tokens drop to 64–69% of unrestricted ReAct; matched-domain training on Qwen3-VL-30B adds +1.65 average accuracy.
- The claim is that VLM agents need control over when a tool output is worth paying for, not only better tools.

## Caveats

## Links

- arXiv: [2606.03054](https://arxiv.org/abs/2606.03054)
- PDF: https://arxiv.org/pdf/2606.03054
