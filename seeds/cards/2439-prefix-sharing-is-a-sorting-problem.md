---
title: "Prefix Sharing Is a Sorting Problem"
authors:
  - "Rong He"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2609.13692"
doi: null
source: "https://arxiv.org/abs/2609.13692"
topics:
  - "prefix-caching"
  - "kv-cache"
  - "llm-serving"
  - "algorithms"
seed_rank: 2439
seed_batch: "craft-2026-10-27"
reviewed: "2026-10-27"
pool: "systems"
relevance_score: 9
cites:
  - title: "Prefix Sharing Is a Sorting Problem"
    url: "https://arxiv.org/abs/2609.13692"
    year: 2026
    arxiv: "2609.13692"
    doi: null
see: ["083-sglang-efficient-execution-of-structured-language-model-prog", "1143-cacheroute-planned-prefix-affinity-routing-for-large-scale-ll", "176-kvflow-efficient-prefix-caching-for-accelerating-llm-based-m"]
---

# Prefix Sharing Is a Sorting Problem

## One-sentence takeaway

When a prompt is built from reusable chunks (retrieved passages, tool definitions, few-shot examples), the order of those chunks decides how much KV cache an exact-prefix cache can reuse, and picking the best orders is the same as picking one binary hierarchy over the requests; the usual single global order is Θ(n²) where the optimum is Θ(n log n).

## Why it matters here

Prefix and KV caching for agents is a core Broadside topic, and agent prompts are exactly the chunk-assembled kind: system prompt, tool schemas, skills, retrieved notes. Every serving stack we've filed (SGLang's radix tree, CacheRoute, KVFlow) treats the prompt order as given and optimizes routing or eviction around it. This paper says the order is the bigger lever, gives an exact characterization, and adds a practical result: serve requests in the hierarchy's DFS order and even a cache that holds one request's context matches the unbounded-cache optimum. That turns cache capacity and reorder window into substitutes, which is a direct design knob for an agent harness that controls both prompt assembly and batching.

## Key ideas

- **Structure theorem.** Minimum prefix-trie cost = min over binary hierarchies H of Σ_x w(x)·t_x(H), where t_x(H) is how many hierarchy nodes it takes to cover the requests that need chunk x.
- **Global orders are optimal only up to two chunks per request**; the two-chunk case is minimum vertex cover, and the leave-one-out family reduces to merge-sort recursion (minimum external path length).
- **Algorithms.** An exact O(3^m) algorithm, and agglomerative clustering by common intersection as a tight ½-approximation of the achievable saving.
- **Evidence.** On BM25 retrieval traces over three BEIR corpora, the layout cuts prefill 17–36% against production RAG ordering, and the gap grows with retrieval depth as predicted.
- **DFS serving order** lets a one-request cache hit the unbounded-cache optimum exactly.

## Caveats

It assumes chunk order is semantically free; for RAG passages that's roughly true, but tool and instruction order can change model behavior, which the paper doesn't measure. The evidence is prefill-token counts on retrieval traces, not end-to-end latency in a real serving engine. Single author, first posted September 2026. I read the abstract only.

## Links

- arXiv abstract: https://arxiv.org/abs/2609.13692
- PDF: https://arxiv.org/pdf/2609.13692
