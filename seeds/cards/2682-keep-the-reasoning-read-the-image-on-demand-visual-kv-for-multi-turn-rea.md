---
title: "Keep the Reasoning, Read the Image: On-Demand Visual KV for Multi-Turn Reasoning VLMs"
authors:
  - "Ziyi Wang"
  - "Xiyue Zhang"
  - "Bing Hu"
  - "Guangmin Song"
  - "Chenyi Zhang"
  - "Li Wang"
year: 2026
venue: "arXiv preprint (cs.CV)"
arxiv: "2611.23769"
doi: null
source: "https://arxiv.org/abs/2611.23769"
version_reviewed: "v1"
topics:
  - "agent-tokenization-and-caching"
  - "kv-serving"
  - "agentic-llm-serving"
seed_rank: 2682
seed_batch: "frontier-2026-11-22"
reviewed: "2026-11-22"
pool: "agents"
relevance_score: 8
cites:
  - title: "Keep the Reasoning, Read the Image: On-Demand Visual KV for Multi-Turn Reasoning VLMs"
    url: "https://arxiv.org/abs/2611.23769"
    year: 2026
    arxiv: "2611.23769"
    doi: null
---

# Keep the Reasoning, Read the Image: On-Demand Visual KV for Multi-Turn Reasoning VLMs

## One-sentence takeaway

When a reasoning VLM's KV retention policy lets the image and the growing reasoning share one budget, the image gets crowded out in multi-turn conversations. ShelfKV keeps every visual entry on a CPU "shelf" and, at each decode step, swaps in the visual entries the current query scores highest in place of the lowest-scoring text entries. It improves the strongest retention policy by up to 20.3 points at matched GPU memory.

## Why it matters here

Replace "image" with "long tool output, retrieved document or repo file" and this is the agent KV problem. Bulky evidence and growing reasoning compete for one retention budget, and later turns need evidence the reasoning never attended to. The paper's diagnostic is the transferable result: evidence lacks protection, not capacity (a protected reserve recovers far more than the same slots in the shared pool). The fix keeps evidence in a cheaper tier and pages it onto the GPU by query score each step, which is a template for agent KV tiering on top of any existing eviction policy.

## Key ideas

- **Failure mode.** Under DBTrimKV with 256 entries/head, a CharXiv question loses 8.3 points vs full cache when asked first but 24.3 after a round of reasoning. By the follow-up, 97.9% of the image's entries are gone.
- **Protection, not capacity.** A protected 128-entry/head visual reserve recovers 17.7 points, which is 10.3 more than the same entries recover when the host policy can evict them.
- **ShelfKV.** Training-free and layered on a host retention policy (DBTrimKV or R-KV) that manages text only. All visual KV lives in CPU memory. A compact sketch of the visual keys proposes swap candidates, so only a few keys are read in full each step.
- **Results.** +20.3 points over DBTrimKV at matched GPU memory, still +8.7 when DBTrimKV gets twice the memory. Within 1.7 points of full cache at 386 entries/head. Up to 12.7 points over the best fixed text/image split, with no loss on standalone questions.

## Caveats

Read from the abstract and the introduction of the v1 HTML; numbers are the authors' and unreplicated. Evaluated on chart/document VLM benchmarks with two Qwen3-VL-Thinking models, not on text agents; transfer to tool-output KV is my extrapolation. CPU↔GPU swap cost and latency under batching need checking in the full paper. Submitted 18 Nov (Thursday 19 Nov listing, cs.CV), a category the 11-20 frontier did not poll, so this is gap-fill.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.23769
- PDF: https://arxiv.org/pdf/2611.23769
- HTML: https://arxiv.org/html/2611.23769v1
