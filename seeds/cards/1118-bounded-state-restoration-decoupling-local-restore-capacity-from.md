---
title: "Bounded-State Restoration: Decoupling Local Restore Capacity from External LLM State"
authors:
  - "Zixuan Li"
year: 2026
venue: "arXiv:cs.DC"
arxiv: "2608.17826"
doi: null
source: "https://arxiv.org/abs/2608.17826"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 1118
seed_batch: "frontier-2026-08-20"
reviewed: "2026-08-20"
pool: "agents"
relevance_score: 9
lineage: agentic-kv-serving
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "Learning Agent Execution for KV-Cache Management in Agentic Serving"
    url: "https://arxiv.org/abs/2608.14624"
    year: 2026
    arxiv: "2608.14624"
    doi: null
  - title: "Aborted but Not Forgotten: KV-Cache Retention Breaks Rollback Consistency in Language Agents"
    url: "https://arxiv.org/abs/2608.15939"
    year: 2026
    arxiv: "2608.15939"
    doi: null
  - title: "GraniKV: Asymmetric Granularity KV-Cache Paging for Multi-Agent Systems with Long Shared Prefix"
    url: "https://arxiv.org/abs/2608.15584"
    year: 2026
    arxiv: "2608.15584"
    doi: null
  - title: "vToken: Token-Level Virtualization for Reclaimable KV Caches"
    url: "https://arxiv.org/abs/2608.13263"
    year: 2026
    arxiv: "2608.13263"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving"
  - "1078-aborted-but-not-forgotten-kv-cache-retention-breaks-rollback-consistency"
  - "1080-granikv-asymmetric-granularity-kv-cache-paging"
  - "1014-vtoken-token-level-virtualization-for-reclaimable-kv-caches"
---

# Bounded-State Restoration: Decoupling Local Restore Capacity from External LLM State

## One-sentence takeaway

Keeping KV off-GPU is not the same as being able to run it: restoration has its own working set, and BSR bounds that working set to a window of W chunks without exposing a partial prefix.

## Why it matters here

Tuesday Frontier kept CacheScout (1077, which prefix to keep warm), rollback-vs-retained-KV (1078), and GraniKV (1080, how to page it). This is the restore path those papers assumed was free. Hierarchical caches (LMCache whole-plan) can hold 2–31 GiB/rank of reusable state; pinned full-reuse first succeeds only when L1 is as big as the state. Broadside agents and any GRID COMMAND NL-order loop that parks a specialist will *restore* that specialist's prefix. If restore OOMs the GPU, retention was a lie. BSR is the first in-window paper that names the restoration working set as a first-class resource.

## Key ideas

- Restoration working set (RWS) = peak local staging whose lifetimes overlap during restore. Retention capacity ≠ RWS.
- Pinned LMCache whole-plan: 1.956 / 7.823 / 15.646 GiB/rank states first succeed at 2 / 8 / 16 GiB L1 rungs — restore is essentially a full copy into L1.
- BSR probes the complete reusable prefix without materializing the whole hit, then installs through a reusable window of at most W chunks. Peak restore capacity O(W); transfer/install work still Θ(|S|).
- Request-level commit: partial installation is never advertised as a valid reusable prefix. Failures invalidate the prefix and fall back to a lower tier or deterministic recompute. Measured on DeepSeek-V4-Flash, TP=2, two DGX Spark nodes.

## Caveats

- Single-author systems paper on LMCache's pinned path; not a vLLM-V1 merge. Numbers are restore, not TTFT-under-load.
- Does not choose *which* agent prefix to restore (that's CacheScout) or how to page it (GraniKV).
- Window W is a knob: too small and you serialize restore; too large and you recreate the L1 cliff.

## Links

- arXiv: [2608.17826](https://arxiv.org/abs/2608.17826)
