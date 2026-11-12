---
title: "Placing LLM Lookup Tables by Per-Layer Prefetch Deadlines"
authors:
  - "Wen Huang"
  - "Jack Liu"
year: 2026
venue: "arXiv preprint (cs.DC)"
arxiv: "2611.13413"
doi: null
source: "https://arxiv.org/abs/2611.13413"
version_reviewed: "v1"
topics:
  - "agentic-llm-serving"
  - "custom-allocators-runtime"
seed_rank: 2564
seed_batch: "frontier-2026-11-12"
reviewed: "2026-11-12"
pool: "systems"
relevance_score: 8
see:
  - 997-engram-conditional-memory-via-scalable-lookup
cites:
  - title: "Placing LLM Lookup Tables by Per-Layer Prefetch Deadlines"
    url: "https://arxiv.org/abs/2611.13413"
    year: 2026
    arxiv: "2611.13413"
    doi: null
---

# Placing LLM Lookup Tables by Per-Layer Prefetch Deadlines

## One-sentence takeaway

Engram-style n-gram lookup tables can leave host DRAM for NVMe or remote memory almost for free, because row indices depend only on input tokens and each layer's prefetch deadline decides which tier it can live on.

## Why it matters here

This is the systems sequel to the Engram card: DeepSeek-V4.1's 203 GB of tables dominate host memory today. A deadline-driven placement model plus a bit-exact tier for SGLang frees that memory, and on a KV-constrained agent workload reusing it as host KV cache raises throughput 36%, so lookup memory and prefix caching compete for the same budget and this paper shows how to trade.

## Key ideas

- **Deadlines decide tiers.** V4.1's two Engram layers have prefetch windows differing 30x (0.3 vs 9.3 ms); deadline, session reuse and device contention decide each table's tier and cache needs, with a model predicting slowdown from measured read times.
- **Session reuse.** Agent and chat traffic reuse rows within sessions; static hot sets transfer poorly.
- **SlackTier.** Issues all lookups at step start, reads the short-window layer first, splits a small GPU row cache across layers, and runs inside the decode CUDA graph, bit-exact with the original gather.
- **Results.** Layer 14's table goes to NVMe uncached at no measurable cost; with both tables on four NVMe disks, time per output token rises at most 1.4% and host memory falls from 212 to 34 GiB; over RDMA neither table needs a cache and one copy serves two instances.
- **Payoff.** Freed memory as host KV cache: +36% median throughput, median p90 TTFT 38 s to 24 s.

## Caveats

Specific to DeepSeek-V4.1's Engram layout and SGLang; numbers come from one hardware setup and replayed traces.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.13413
- PDF: https://arxiv.org/pdf/2611.13413
