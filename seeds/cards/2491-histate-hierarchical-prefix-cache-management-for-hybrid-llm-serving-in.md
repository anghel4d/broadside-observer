---
title: "HiState: Hierarchical Prefix Cache Management for Hybrid LLM Serving in Agentic Workloads"
authors:
  - "Zaifeng Pan"
  - "Lucas Wang"
  - "Xinwei Qiang"
  - "Yanbo Zhou"
  - "Chang Chen"
  - "Zhengding Hu"
  - "Yue Guan"
  - "Yufei Ding"
year: 2026
venue: "arXiv preprint (cs.DC)"
arxiv: "2610.41508"
doi: null
source: "https://arxiv.org/abs/2610.41508"
topics:
  - "agent-tokenization-and-caching"
  - "agentic-llm-serving"
seed_rank: 2491
seed_batch: "frontier-2026-11-02"
reviewed: "2026-11-02"
pool: "agents"
relevance_score: 9
see:
  - 2450-wakman-workload-aware-kvcache-manager
  - 2439-prefix-sharing-is-a-sorting-problem
cites:
  - title: "HiState: Hierarchical Prefix Cache Management for Hybrid LLM Serving in Agentic Workloads"
    url: "https://arxiv.org/abs/2610.41508"
    year: 2026
    arxiv: "2610.41508"
    doi: null
---

# HiState: Hierarchical Prefix Cache Management for Hybrid LLM Serving in Agentic Workloads

## One-sentence takeaway

In hybrid attention/recurrent models a prefix hit needs every matching KV entry but only one recurrent checkpoint, so HiState keeps the checkpoint history on SSD and fast memory for KV, cutting p99 time-to-first-token on real coding-agent traces by up to 5.7x versus vLLM-Marconi and 5.4x versus SGLang-HiCache.

## Why it matters here

Agent sessions edit and revisit earlier context, which is exactly where hybrid-model prefix caches lose their saved recurrent states. This is the first serving design I've seen shaped around that agent access pattern for linear-attention hybrids, and it extends the standing prefix/KV caching thread to the model families now shipping in production.

## Key ideas

- **The asymmetry.** A prefix hit reads all matching KV entries but exactly one recurrent checkpoint, whose size does not grow with context length.
- **Tiered placement.** Historical checkpoints go to SSD; DRAM/HBM is reserved for KV entries, so keeping more checkpoints no longer evicts other sessions' reusable prefixes.
- **Adaptive interval control.** The spacing between saved checkpoints is tuned to trade checkpoint storage against recomputation.
- **Unified eviction.** Checkpoint sparsification and reclamation of stale agent trajectories are coordinated in one policy.
- **Evaluation.** Built on vLLM; two public coding-agent trace datasets plus microbenchmarks.

## Caveats

Gains are reported on coding-agent traces and p99 TTFT; other agent workloads and throughput under SSD contention are less clear from the abstract. Applies only to hybrid models with recurrent layers.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.41508
- PDF: https://arxiv.org/pdf/2610.41508
