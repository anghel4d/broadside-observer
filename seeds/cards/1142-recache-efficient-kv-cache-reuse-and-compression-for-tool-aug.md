---
title: "ReCache: Efficient KV Cache Reuse and Compression for Tool-Augmented LLM Agents"
authors:
  - "Yichu Fang"
  - "Sitong Wei"
  - "Haozhe Hu"
  - "Xiaoyu Shen"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2608.19662"
doi: null
source: "https://arxiv.org/abs/2608.19662"
topics:
  - "agent-tokenization-and-caching"
  - "agentic-llm-serving"
  - "continual-agent-skills"
seed_rank: 1142
seed_batch: "frontier-2026-08-22"
reviewed: "2026-08-22"
pool: "agents"
relevance_score: 10
lineage: agent-kv-cache
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "Learning Agent Execution for KV-Cache Management in Agentic Serving"
    url: "https://arxiv.org/abs/2608.14624"
    year: 2026
    arxiv: "2608.14624"
    doi: null
  - title: "GraniKV: Asymmetric Granularity KV-Cache Paging for Multi-Agent Systems with Long Shared Prefix"
    url: "https://arxiv.org/abs/2608.15584"
    year: 2026
    arxiv: "2608.15584"
    doi: null
  - title: "CacheBlend: Fast Large Language Model Serving for RAG with Cached Knowledge Fusion"
    url: "https://arxiv.org/abs/2405.16444"
    year: 2024
    arxiv: "2405.16444"
    doi: null
  - title: "vToken: Token-Level Virtualization for Reclaimable KV Caches"
    url: "https://arxiv.org/abs/2608.13263"
    year: 2026
    arxiv: "2608.13263"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving"
  - "1080-granikv-asymmetric-granularity-kv-cache-paging"
  - "185-cacheblend-fast-large-language-model-serving-for-rag-with-ca"
  - "1014-vtoken-token-level-virtualization-for-reclaimable-kv-caches"
  - "1116-skilleffect-checked-lowering-for-memory-bounded-agent-tools"
---

# ReCache: Efficient KV Cache Reuse and Compression for Tool-Augmented LLM Agents

## One-sentence takeaway

Tool and skill schemas recur in *different combinations and orders*, so prefix caching never hits: encode each schema as a composition-invariant KV block, then prune to invocation-critical fields and contribution-selected layer–head routes.

## Why it matters here

Standing topic: tokenization / KV reuse for agents. CacheScout (1077) prefetches from *execution transitions*; GraniKV (1080) pages *shared prefixes*; vToken (1014) reclaims tokens; CacheBlend (185) fuses RAG chunks. None of them is "the tool list is a set, not a prefix." GRID COMMAND and DeepSeek-harness (1050) skill plugins will keep reordering the same schemas. ReCache is the cache contract for that set: resource-wise attention (no cross-schema edges, local positions), then structural + field-aware compression so the block stays cheap to store and to attend. SkillEffect (1116) bounds *tool-body* memory; this bounds *schema* KV.

## Key ideas

- Resource-wise attention: drop inter-resource attention, reset positions inside each schema. The KV block no longer depends on neighbours or global order, so it can be built once and reused across retrieval combinations.
- Structural pruning: leave-one-in contribution scores over layers × KV-head-groups; only the top routes see resource KV (`Ω* = L* × G*`). Qwen3-4B keeps 20/36 layers × 3/8 groups (79% route sparsity) at −0.2 Inv-F1.
- Semantic pruning: keep resource name, argument names, argument descriptions, and the suffix token. Generic gist/beacon summaries hallucinate tool names; field-aware retention does not.
- Benchmark from seven tool/skill sets with a resource-disjoint OOD split. Resource-wise attention matches dense Inv-F1 (82.3 vs 82.4) at 3.655× TTFT. Full ReCache: −92.43% allocated KV-tensor memory, 1.423× attention, 80.3 / 60.8 Inv-F1 (IND / OOD).

## Caveats

- Requires fine-tuning onto the new masks and positions; frozen-model reuse is future work. Evaluated on Qwen3-1.7B/4B only.
- Assumes relatively stable system prompts and schemas. If cross-resource order *is* the signal, independent blocks are the wrong abstraction.
- Not a replacement for prefix-affinity routing (CacheRoute) or execution-transition prefetch (1077): this is the *schema-set* cache, not the conversation prefix and not the tool-trace policy.

## Links

- arXiv: [2608.19662](https://arxiv.org/abs/2608.19662)
- Code: [https://github.com/EIT-NLP/ReCache](https://github.com/EIT-NLP/ReCache)
