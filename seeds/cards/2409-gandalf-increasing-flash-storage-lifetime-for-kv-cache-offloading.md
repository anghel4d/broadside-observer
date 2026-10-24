---
title: "Gandalf: Flash Shall Not Die! Increasing Flash Storage Lifetime for KV Cache Offloading in LLM Serving"
authors:
  - "Maharani A. P. Irawan"
  - "Kuntai Du"
  - "Jiayi Yao"
  - "Dongjoo Seo"
  - "Yuyang Huang"
  - "Haryadi S. Gunawi"
  - "Junchen Jiang"
year: 2026
venue: "arXiv preprint (cs.LG)"
arxiv: "2610.30791"
doi: null
source: "https://arxiv.org/abs/2610.30791"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 2409
seed_batch: "frontier-2026-10-24"
reviewed: "2026-10-24"
pool: "systems"
relevance_score: 8
cites:
  - title: "Gandalf: Flash Shall Not Die! Increasing Flash Storage Lifetime for KV Cache Offloading in LLM Serving"
    url: "https://arxiv.org/abs/2610.30791"
    year: 2026
    arxiv: "2610.30791"
    doi: null
---

# Gandalf: Flash Shall Not Die! Increasing Flash Storage Lifetime for KV Cache Offloading in LLM Serving

## One-sentence takeaway

Offloading agent KV caches to SSD wears drives out in days to months under production multi-turn traffic, and Gandalf fixes it by admitting to flash only what the model architecture says will be reused (full-attention KV for the preceding context is reused every later round, while linear-attention and sliding-window states are reused once), extending SSD lifetime 7.3× on average with negligible loss of cache hit rate.

## Why it matters here

Agent sessions are the workload that makes KV offload worth it and also the one that burns flash fastest. The useful idea is that the admission signal is architectural, not historical: hybrid models (full attention plus linear or sliding-window layers) have KV with very different reuse lifetimes, and a tier that knows this can skip most writes. It belongs next to card 2318 on remote KV tiers and card 1804 on external KV caches.

## Key ideas

- **The wear problem.** SSD endurance is a write budget (TBW = capacity × DWPD × 365 × years). Using two one-day SemiAnalysis Claude Code traces, the authors show that even a 30-TB enterprise SSD can exhaust its rated TBW quickly, and a 2-TB drive within days.
- **History-gated admission trades hit rate for lifetime.** Writing only after N observed reuses saves writes but loses the hits from second-round reuse.
- **Application-level signal.** In multi-round conversations, full-attention KV of the whole preceding context is reused by all future rounds, while a linear-attention layer's state and sliding-window cache are superseded and reused only once; per-layer-type lifetime predicts reuse.
- **Result.** 7.3× average SSD-lifetime extension with negligible hit-rate impact across traces and hardware capacities.

## Caveats

Evaluation is trace-driven over a small set of agent traces and models; the gain depends on hybrid-attention architectures, so pure full-attention models get less. Lifetime is computed from rated endurance rather than measured wear.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.30791
- PDF: https://arxiv.org/pdf/2610.30791
