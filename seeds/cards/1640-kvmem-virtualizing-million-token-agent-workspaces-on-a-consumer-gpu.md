---
title: "KVMem: Virtualizing Million-Token Agent Workspaces on a Consumer GPU"
authors:
  - "Di Chai"
  - "Leye Wang"
  - "Zeshen Su"
  - "Zhiguo Xia"
  - "Zhihang Yu"
year: 2026
venue: "arXiv"
arxiv: "2609.04852"
doi: null
source: "https://arxiv.org/abs/2609.04852"
topics:
  - "kv-caching"
  - "agentic-llm-serving"
  - "provenance-first-memory"
seed_rank: 1640
seed_batch: "frontier-2026-09-08"
reviewed: "2026-09-08"
pool: "agents"
relevance_score: 10
lineage: agent-kv-virtualization
cites:
  - title: "GrowPage: On-Demand KV Budgeting for Efficient LLM Reasoning Serving"
    url: "https://arxiv.org/abs/2609.03494"
    year: 2026
    arxiv: "2609.03494"
    doi: null
see:
  - "1605-growpage-on-demand-kv-budgeting-for-efficient-llm-reasoning-serving"
  - "1578-vestigekv-the-nope-mla-kv-cache-carries-its-own-eviction-signal-in-a"
  - "1233-nexus-depth-adaptive-kv-cache-splicing-and-retrieval-decoupled"
  - "1014-vtoken-token-level-virtualization-for-reclaimable-kv-caches"
  - "002-efficient-memory-management-for-large-language-model-serving"
---

# KVMem: Virtualizing Million-Token Agent Workspaces on a Consumer GPU

## One-sentence takeaway

KVMem virtualizes overflowed agent workspace history as paged KV across GPU / host / NVMe with model-native attention-space indexes, materializing a query-dependent view inside the native context window instead of summarizing away execution evidence.

## Why it matters here

Agent workspaces for Broadside radar and long GRID COMMAND sessions blow past GPU KV and native windows. Summarize-or-RAG loses fine-grained tool evidence; KVMem keeps history as KV state — the systems move GrowPage (1605) / VestigeKV (1578) / Nexus (1233) were pointing at for million-token agent traces on a consumer GPU.

## Key ideas

- Pages overflowed workspace KV across GPU memory, host memory, and NVMe rather than compacting to text summaries.
- Lightweight model-native attention-space indexes select relevant historical blocks per query.
- Materializes a query-dependent execution view bounded by the model's native context window — already-processed tokens stay as KV, not re-prefill text.
- Evaluated on LongMemEval, MemoryAgentBench, and AgentLongBench with histories up to ~1M tokens.
- Separates storage virtualization from retrieval policy: evidence stays in KV form until selected.

## Caveats

Consumer-GPU paging latency and NVMe bandwidth matter in realtime loops; not free. Index quality governs what gets rematerialized. Do not remint GrowPage 1605 / VestigeKV 1578 / Nexus 1233 — this is the workspace-virtualization sibling.

## Links

- arXiv: [2609.04852](https://arxiv.org/abs/2609.04852)
- PDF: https://arxiv.org/pdf/2609.04852
