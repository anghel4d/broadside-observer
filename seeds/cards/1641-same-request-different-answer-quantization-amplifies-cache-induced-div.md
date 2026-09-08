---
title: "Same Request, Different Answer: Quantization Amplifies Cache-Induced Divergence in LLM Serving"
authors:
  - "Aditi Patodiya"
year: 2026
venue: "arXiv"
arxiv: "2609.04748"
doi: null
source: "https://arxiv.org/abs/2609.04748"
topics:
  - "kv-caching"
  - "agentic-llm-serving"
  - "agent-failure-localization"
seed_rank: 1641
seed_batch: "frontier-2026-09-08"
reviewed: "2026-09-08"
pool: "agents"
relevance_score: 10
lineage: prefix-cache-reproducibility
cites:
  - title: "GrowPage: On-Demand KV Budgeting for Efficient LLM Reasoning Serving"
    url: "https://arxiv.org/abs/2609.03494"
    year: 2026
    arxiv: "2609.03494"
    doi: null
  - title: "VestigeKV: The NoPE-MLA KV Cache Carries Its Own Eviction Signal in a Vestigial Branch"
    url: "https://arxiv.org/abs/2609.03949"
    year: 2026
    arxiv: "2609.03949"
    doi: null
see:
  - "1078-aborted-but-not-forgotten-kv-cache-retention-breaks-rollback-consistency"
  - "1605-growpage-on-demand-kv-budgeting-for-efficient-llm-reasoning-serving"
  - "1142-recache-efficient-kv-cache-reuse-and-compression-for-tool-aug"
  - "1578-vestigekv-the-nope-mla-kv-cache-carries-its-own-eviction-signal-in-a"
  - "1232-benchmarking-llm-serving-systems-for-agentic-ai-workloads-with"
---

# Same Request, Different Answer: Quantization Amplifies Cache-Induced Divergence in LLM Serving

## One-sentence takeaway

Prefix caching is not a transparent optimization for agentic tool-use: under serial batch-size-1 replay it changes trajectories on 36% of episodes at 16-bit and 75% at 4-bit, while cache-off runs are bit-identical — quantization amplifies cache-induced divergence.

## Why it matters here

Anoptic/Broadside agent serving treats prefix/KV cache as free speed. This measurement says otherwise for multi-turn tool-use: the same request diverges once the cache is on, and low-bit weights make it worse. Pairs with Aborted-but-not-Forgotten (1078) rollback inconsistency — reproducibility and provenance require an explicit cache policy, not defaults.

## Key ideas

- Holds model, decoding params, seed, and request order fixed; serial batch-size-one; cache on vs off across two engines and four weight formats.
- Eighty-episode multi-turn agentic tool-use workload: cache-on changes trajectories on 36.2% (16-bit) vs 75.0% (4-bit) of episodes.
- Cache-off repeated execution is bit-identical in every configuration (0/800 episodes diverge).
- Shows the reproducibility cost of default-on prefix caching rises sharply under weight quantization.
- Implies agent eval harnesses and CI must pin cache configuration or accept non-reproducible trajectories.

## Caveats

Single-author study; verify engine versions and cache implementations before treating percentages as universal. Does not propose a fix — it is a measurement paper. Still the clearest agentic divergence number in this window.

## Links

- arXiv: [2609.04748](https://arxiv.org/abs/2609.04748)
- PDF: https://arxiv.org/pdf/2609.04748
