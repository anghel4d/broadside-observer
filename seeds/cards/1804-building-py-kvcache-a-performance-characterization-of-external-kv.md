---
title: "Building py-kvcache: A Performance Characterization of External KV Caching for vLLM with NVMe SSDs"
authors:
  - "Joseph Kanichai"
  - "Tiziano De Matteis"
  - "Animesh Trivedi"
year: 2026
venue: "arXiv"
arxiv: "2609.11744"
doi: null
source: "https://arxiv.org/abs/2609.11744"
topics:
  - "agent-tokenization-and-caching"
  - "agentic-llm-serving"
seed_rank: 1804
seed_batch: "frontier-2026-09-12"
reviewed: "2026-09-12"
pool: "agents"
relevance_score: 9
lineage: external-kv-prefix-cache-tiers
cites:
  - title: "Building py-kvcache: A Performance Characterization of External KV Caching for vLLM with NVMe SSDs"
    url: "https://arxiv.org/abs/2609.11744"
    year: 2026
    arxiv: "2609.11744"
    doi: null
see:
  - "1773-kvsharearena-kv-cache-reuse-across-contexts-and-model-checkpoints"
  - "1772-unison-a-co-designed-near-memory-scheduler-of-session-kv-residency"
  - "185-cacheblend-fast-large-language-model-serving-for-rag-with-ca"
  - "1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving"
  - "1233-nexus-depth-adaptive-kv-cache-splicing-and-retrieval-decoupled"
---

# Building py-kvcache: A Performance Characterization of External KV Caching for vLLM with NVMe SSDs

## One-sentence takeaway

py-kvcache characterizes when external KV/prefix caches (GPU → CPU → NVMe) beat recomputation for vLLM — showing transfer granularity and admission timing dominate raw cache age for agent-length contexts.

## Why it matters here

KVShareArena (1773), UNISON (1772), and Nexus (1233) already put session KV on the Broadside shelf. This is the engineering measurement layer: when does loading a prefix from NVMe lose to recompute on a fast GPU — exactly the question for long-lived agent sessions.

## Key ideas

- Prefix caching cuts TTFT by reusing KV states, but short prefixes or fast GPUs can make recomputation cheaper than external loads.
- Characterizes the tradeoff in vLLM across GPU, CPU, and NVMe tiers with synthetic loads, long-context benches, and production traces.
- Finds cache performance depends on transfer granularity, intermediate memory use, and when transfers enter the critical path — not merely “is it cached.”
- Practical guidance for multi-tier external KV in agentic serving stacks.
- Complements session-KV schedulers (UNISON) with measured admission/recompute frontiers.

## Caveats

vLLM-specific paths; other engines may shift the recompute frontier. NVMe results are hardware-sensitive. Do not remint 1773 / 1772 / 1233 / 1077.

## Links

- arXiv: [2609.11744](https://arxiv.org/abs/2609.11744)
- PDF: https://arxiv.org/pdf/2609.11744
