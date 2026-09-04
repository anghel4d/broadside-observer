---
title: "VestigeKV: The NoPE-MLA KV Cache Carries Its Own Eviction Signal in a Vestigial Branch"
authors:
  - "WenJie Fan"
year: 2026
venue: "arXiv:cs.LG"
arxiv: "2609.03949"
doi: null
source: "https://arxiv.org/abs/2609.03949"
topics:
  - "kv-caching"
  - "agentic-llm-serving"
  - "tokenization-prefix-caching"
seed_rank: 1578
seed_batch: "frontier-2026-09-04"
reviewed: "2026-09-04"
pool: "agents"
relevance_score: 10
lineage: kv-cache-agents
cites:
  - title: "VestigeKV: The NoPE-MLA KV Cache Carries Its Own Eviction Signal in a Vestigial Branch"
    url: "https://arxiv.org/abs/2609.03949"
    year: 2026
    arxiv: "2609.03949"
    doi: null
  - title: "Adaptive KV Retention for LLM Agents at Human-Approval Timescales"
    url: "https://arxiv.org/abs/2608.30830"
    year: 2026
    arxiv: "2608.30830"
    doi: null
  - title: "Tail-Replay: Escaping the Curse of Linear Attention in Prefix Caching for Hybrid LLMs"
    url: "https://arxiv.org/abs/2608.30310"
    year: 2026
    arxiv: "2608.30310"
    doi: null
see:
  - "1539-adaptive-kv-retention-for-llm-agents-at-human-approval-timescales"
  - "1540-tail-replay-escaping-the-curse-of-linear-attention-in-prefix-caching-f"
  - "1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving"
  - "1080-granikv-asymmetric-granularity-kv-cache-paging"
  - "002-efficient-memory-management-for-large-language-model-serving"
---
# VestigeKV: The NoPE-MLA KV Cache Carries Its Own Eviction Signal in a Vestigial Branch

## One-sentence takeaway

On NoPE-MLA caches, observed-attention eviction collapses for future queries; VestigeKV evicts by a query-independent salience signal already in the 64-d decoupled RoPE-vestige branch, archiving rather than deleting rows — training-free, kernel-free.

## Why it matters here

Agent serving keeps long-lived KV before the queries that will read it exist — exactly where H2O/SnapKV fail (0.00–0.33 needle on NoPE MLA). VestigeKV is the standing-topic KV advance past Adaptive KV (1539) and Tail-Replay (1540) for the MLA/NoPE stack Broadside will meet in hybrid agents.

## Key ideas

- Problem: selection by observed attention collapses when the future query does not yet exist.
- Signal: Kimi Linear's 64-d decoupled branch (RoPE vestige repurposed by NoPE training into a salience channel); read 11% of each row.
- Policy: top-m stay attended; all others move exactly (never deleted) to a GPU-resident archive with certified per-step trigger; host offload as VRAM-reclaiming variant.
- Retrieval holds 1.00 under 8× and 0.92 under 32× from 8k–65k; recall-tier config holds 128× at 1.00. Notes Kimi K3 NoPE Gated-MLA relevance.

## Caveats

- Tied to NoPE-MLA / Kimi Linear cache layout; not a drop-in for vanilla GQA vLLM pages.
- Single-author systems note; treat numbers as architecture-specific until replicated.
- Random Attention (2609.03430) and SGD-KV held as leftovers — different thesis on the same shelf.

## Links

- arXiv: [2609.03949](https://arxiv.org/abs/2609.03949)
- PDF: https://arxiv.org/pdf/2609.03949
