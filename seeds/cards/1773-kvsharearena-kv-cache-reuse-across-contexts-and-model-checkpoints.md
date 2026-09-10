---
title: "KVShareArena: KV-Cache Reuse Across Contexts and Model Checkpoints"
authors:
  - "Xi Shi"
  - "Qian Lou"
year: 2026
venue: "arXiv"
arxiv: "2609.10266"
doi: null
source: "https://arxiv.org/abs/2609.10266"
topics:
  - "agent-tokenization-and-caching"
  - "agentic-llm-serving"
seed_rank: 1773
seed_batch: "frontier-2026-09-10"
reviewed: "2026-09-10"
pool: "agents"
relevance_score: 9
lineage: kv-reuse-cross-context
cites:
  - title: "KVShareArena: KV-Cache Reuse Across Contexts and Model Checkpoints"
    url: "https://arxiv.org/abs/2609.10266"
    year: 2026
    arxiv: "2609.10266"
    doi: null
see:
  - "1142-recache-efficient-kv-cache-reuse-and-compression-for-tool-aug"
  - "1233-nexus-depth-adaptive-kv-cache-splicing-and-retrieval-decoupled"
  - "1641-same-request-different-answer-quantization-amplifies-cache-induced-div"
  - "1642-does-your-agents-memory-survive-a-model-upgrade-a-controlled-study"
  - "054-compresskv-semantic-retrieval-guided-kv-cache-compression-fo"
---

# KVShareArena: KV-Cache Reuse Across Contexts and Model Checkpoints

## One-sentence takeaway

KVShareArena benchmarks KV reuse beyond exact-prefix: retrieved chunks and multi-agent reports break position/attention assumptions, and cross-checkpoint caches need repair — scored as fraction of no-cache→full-recompute gap recovered.

## Why it matters here

Prefix caching is table stakes; agentic RAG and multi-agent report stitching are the Broadside reality (GRID COMMAND orders + shared world reports). Pairs with ReCache 1142, Nexus 1233, and the Sep-8 memory-upgrade card 1642 — finally a shared arena instead of three communities measuring past each other.

## Key ideas

- Exact-prefix reuse fails when reused text is not at prompt start: RAG chunk sets and multi-agent reports carry wrong positions and never attended to peer sources.
- Cross-checkpoint reuse (same model family, different weights) further corrupts stored values.
- Arena scores every method by fraction of gap recovered between no-cache and full recomputation; separately charges compute, memory, latency, and one-time cache-build cost.
- Position correction alone (no recompute) suffices until questions need cross-source attention; then deeper repair is required.
- Unifies repair methods previously siloed across communities under one protocol.

## Caveats

Benchmark paper — method SOTA will move. Position-only repair limits are workload-dependent. Do not remint 1142 / 1233 / 1642.

## Links

- arXiv: [2609.10266](https://arxiv.org/abs/2609.10266)
- PDF: https://arxiv.org/pdf/2609.10266
