---
title: "Pixel Decodability Is Not a Compression Signal: Causally Evaluating Importance Proxies for Visual KV-Cache Eviction"
authors:
  - "Chenyu Zhou"
  - "Qiliang Jiang"
  - "Shuning Wu"
  - "Xu Zhou"
year: 2026
venue: "arXiv"
arxiv: "2609.13012"
doi: null
source: "https://arxiv.org/abs/2609.13012"
topics:
  - "agent-tokenization-and-caching"
  - "agentic-llm-serving"
seed_rank: 1825
seed_batch: "frontier-2026-09-14"
reviewed: "2026-09-14"
pool: "agents"
relevance_score: 9
lineage: kv-cache-systems
cites:
  - title: "Pixel Decodability Is Not a Compression Signal: Causally Evaluating Importance Proxies for Visual KV-Cache Eviction"
    url: "https://arxiv.org/abs/2609.13012"
    year: 2026
    arxiv: "2609.13012"
    doi: null
see:
  - "1804-building-py-kvcache-a-performance-characterization-of-external-kv"
  - "1773-kvsharearena-kv-cache-reuse-across-contexts-and-model-checkpoints"
  - "1578-vestigekv-the-nope-mla-kv-cache-carries-its-own-eviction-signal-in-a"
  - "1605-growpage-on-demand-kv-budgeting-for-efficient-llm-reasoning-serving"
  - "1640-kvmem-virtualizing-million-token-agent-workspaces-on-a-consumer-gpu"
---

# Pixel Decodability Is Not a Compression Signal: Causally Evaluating Importance Proxies for Visual KV-Cache Eviction

## One-sentence takeaway

How much visual KV still decodes to pixels is not a reliable signal of whether the model causally uses that cache for the answer — importance proxies need causal ablation, not reconstruction fidelity.

## Why it matters here

Agent serving with vision (GRID COMMAND maps, Anoptic debug views) will be tempted to evict “undecodable” visual KV. This paper kills that heuristic: pixel-decodability ≠ causal importance. Pair with py-kvcache 1804 and VestigeKV 1578 when designing multimodal cache budgets.

## Key ideas

- Shows vision-language models retain substantial pixel-decodable content in visual KV that is task-inert under causal tests.
- Measures retention via a learned pixel-inversion decoder; measures causal use via single-super-patch KV ablation.
- Finds retention never positively tracks causal reliance across preregistered tests in their setting.
- Reframes visual KV eviction/compression proxies: optimize for answer causation, not reconstructability.

## Caveats

Vision-language setting; text-only agent KV heuristics may differ. Preregistered but single-setting — read ablations before generalizing to all VLMs. Do not remint 1804 / 1578 / 1773.

## Links

- arXiv: [2609.13012](https://arxiv.org/abs/2609.13012)
- PDF: https://arxiv.org/pdf/2609.13012
