---
title: "vToken: Token-Level Virtualization for Reclaimable KV Caches"
authors: ["Yuanhang Gao", "Xiangrui Yang", "Yuanfeng Chen", "Hongjia Chen", "Qianru Lv", "Wenfei Wu", "Dongsheng Li"]
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2608.13263"
doi: null
source: "https://arxiv.org/abs/2608.13263"
topics: [agent-tokenization-and-caching, agentic-llm-serving]
seed_rank: 1014
seed_batch: "frontier-2026-08-14"
reviewed: "2026-08-14"
pool: "agents"
relevance_score: 10
lineage: kv-cache-serving
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "H2O: Heavy-Hitter Oracle for Efficient Generative Inference of Large Language Models"
    url: "https://arxiv.org/abs/2306.14048"
    year: 2023
    arxiv: "2306.14048"
    doi: null
  - title: "Efficient Streaming Language Models with Attention Sinks"
    url: "https://arxiv.org/abs/2309.17453"
    year: 2023
    arxiv: "2309.17453"
    doi: null
  - title: "Scissorhands: Exploiting the Persistence of Importance Hypothesis for LLM KV Cache Compression at Test Time"
    url: "https://arxiv.org/abs/2305.17118"
    year: 2023
    arxiv: "2305.17118"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "062-ragged-paged-attention-a-high-performance-and-flexible-llm-i"
  - "089-flashattention-fast-and-memory-efficient-exact-attention-wit"
---

# vToken: Token-Level Virtualization for Reclaimable KV Caches

## One-sentence takeaway

Token-level KV eviction is a no-op on PagedAttention until you virtualize token liveness over blocks; vToken’s indirection + async compaction turns H2O/Scissorhands holes into reusable GPU pages.

## Why it matters here

Agent sessions are append-heavy and eviction-shaped (skills, traces, long GRID COMMAND loops). PagedAttention (002) already sits on the shelf; the missing layer is that H2O-style per-token drops leave 40–60% of allocated blocks half-dead. vToken is the runtime boundary that makes prefix/KV-cache policy physically effective without rewriting attention kernels — the exact grain of agentic serving, not another eviction heuristic.

## Key ideas

- Token table maps logical token IDs to (block, offset) + liveness; policies call `evict_token` / `sync_new_tokens` and never touch blocks.
- Lazy compaction repacks live tokens asynchronously on a side CUDA stream after forward, CUDA-event before next attention; CUDA Graphs stay captured.
- vs Naive-Evict (same eviction, no reclamation): 27–72% fewer retained blocks, up to 1.37× SLA throughput, up to 2× feasible concurrency under a tight KV budget; policy integration drops from 500+ LOC to <50.
- Conservatively skips shared-prefix blocks; private suffixes still reclaim. Pressure-activated: native full-KV path when memory is not the bottleneck.

## Caveats


## Links

- arXiv: [2608.13263](https://arxiv.org/abs/2608.13263)
- PDF: https://arxiv.org/pdf/2608.13263
