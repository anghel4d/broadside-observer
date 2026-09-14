---
title: "LifeFuse-Mem: Lifecycle-Aware State Fusion Against Temporary Overwriting for Long-Term Memory"
authors:
  - "Hanyu Zhao"
  - "Yuqian Feng"
  - "Zhenyu Song"
  - "Yuanchao Cheng"
  - "Yance Jiao"
  - "Tengfei Pan"
  - "Li Du"
year: 2026
venue: "arXiv"
arxiv: "2609.12436"
doi: null
source: "https://arxiv.org/abs/2609.12436"
topics:
  - "provenance-first-agent-memory"
  - "continual-agent-skills"
seed_rank: 1824
seed_batch: "frontier-2026-09-14"
reviewed: "2026-09-14"
pool: "agents"
relevance_score: 10
lineage: agent-memory-provenance
cites:
  - title: "LifeFuse-Mem: Lifecycle-Aware State Fusion Against Temporary Overwriting for Long-Term Memory"
    url: "https://arxiv.org/abs/2609.12436"
    year: 2026
    arxiv: "2609.12436"
    doi: null
see:
  - "1606-memorylace-memory-lifecycle-aware-consolidation-and-evidence-retrieval"
  - "1541-agent-zero-memory-provenance-aware-long-term-memory-for-llm-agents"
  - "1579-fresh-memory-stale-plans-dependency-scoped-validation-for-distributed"
  - "1802-grounding-agent-memory-environment-probing-curation-for-enterprise"
---

# LifeFuse-Mem: Lifecycle-Aware State Fusion Against Temporary Overwriting for Long-Term Memory

## One-sentence takeaway

LifeFuse-Mem uses lifecycle-labeled writes and phase-aware readout so temporary episode state cannot overwrite durable long-term agent memory.

## Why it matters here

Long-running Broadside / Anoptic agents already suffer temporary-overwrite: scratchpad facts crowd out durable skills and world beliefs. LifeFuse-Mem’s lifecycle metadata + phase-aware readout is the missing control plane beside MemoryLace’s consolidation loop.

## Key ideas

- Studied setting: write episodes carry lifecycle labels in training; readout is phase-aware at evaluation.
- Distinguishes information that should remain influential across future interactions from single-context temporaries.
- Fuses state against temporary overwriting — a concrete failure mode of naive append-only agent memories.
- Pairs naturally with provenance-first stores: lifecycle is another axis beside source evidence.

## Caveats

Lifecycle labels assume supervised write metadata; open-world agents may lack clean labels. Do not remint MemoryLace 1606 or Agent-Zero Memory 1541.

## Links

- arXiv: [2609.12436](https://arxiv.org/abs/2609.12436)
- PDF: https://arxiv.org/pdf/2609.12436
