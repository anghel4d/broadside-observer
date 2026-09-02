---
title: "Tail-Replay: Escaping the Curse of Linear Attention in Prefix Caching for Hybrid LLMs"
authors:
  - "Yirui Liu"
  - "Ruoling Qi"
  - "Xuaner Wu"
  - "Penghang Liu"
  - "Jian Chen"
year: 2026
venue: "arXiv:cs.LG"
arxiv: "2608.30310"
doi: null
source: "https://arxiv.org/abs/2608.30310"
topics:
  - "agent-tokenization-and-caching"
  - "agentic-llm-serving"
seed_rank: 1540
seed_batch: "frontier-2026-09-02"
reviewed: "2026-09-02"
pool: "agents"
relevance_score: 10
lineage: agent-kv-serving
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "Nexus: Depth-Adaptive KV-Cache Splicing and Retrieval-Decoupled Tool Routing for Agentic LLMs on Unified Memory"
    url: "https://arxiv.org/abs/2608.20397"
    year: 2026
    arxiv: "2608.20397"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "1233-nexus-depth-adaptive-kv-cache-splicing-and-retrieval-decoupled"
  - "1448-vpp-virtual-pipeline-parallelism-for-efficient-chunked"
---
# Tail-Replay: Escaping the Curse of Linear Attention in Prefix Caching for Hybrid LLMs

## One-sentence takeaway

Hybrid LLMs break prefix caching: Tail-Replay escapes linear-attention's non-addressable recurrent state so prefixes can be reused without full replay.

## Why it matters here

Hybrid full+linear attention is the efficiency path Broadside wants for long agent sessions, but prefix caching dies on recurrent states. Tail-Replay is the in-window fix for that mismatch — keep full-attention KV token-addressable and repair linear-attention state at the tail.

## Key ideas

- Hybrid models interleave full-attention (token-addressable KV) with linear-attention (recurrent state, not rollback-friendly).
- Existing hybrid prefix caches checkpoint recurrent states and still pay replay costs at arbitrary boundaries.
- Tail-Replay: a method that escapes the linear-attention curse for prefix reuse without forcing full prefill.
- Targets long-context inference serving, not training.

## Caveats

- Hybrid-architecture-specific; pure Transformer stacks already have standard prefix cache.
- Interaction with agent tool-call branching / speculative decode needs measurement on Cordis sessions.
- Complements Adaptive KV Retention (1539) — different timescale and mechanism.

## Links

- arXiv: [2608.30310](https://arxiv.org/abs/2608.30310)
- PDF: https://arxiv.org/pdf/2608.30310
