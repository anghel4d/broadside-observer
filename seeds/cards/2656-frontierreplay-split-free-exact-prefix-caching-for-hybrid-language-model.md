---
title: "FrontierReplay: Split-Free Exact Prefix Caching for Hybrid Language Models"
authors:
  - "Zekun Wang"
  - "Yizhuo Wang"
year: 2026
venue: "arXiv preprint (cs.LG)"
arxiv: "2611.26020"
doi: null
source: "https://arxiv.org/abs/2611.26020"
version_reviewed: "v1"
topics:
  - "agent-tokenization-and-caching"
  - "agentic-llm-serving"
seed_rank: 2656
seed_batch: "frontier-2026-11-20"
reviewed: "2026-11-20"
pool: "agents"
relevance_score: 8
see:
  - 001-swe-agent-agent-computer-interfaces-enable-automated-softwar
  - 002-efficient-memory-management-for-large-language-model-serving
  - 077-loongserve-efficiently-serving-long-context-large-language-m
  - 078-taming-throughput-latency-tradeoff-in-llm-inference-with-sar
  - 080-flashattention-2-faster-attention-with-better-parallelism-an
  - 083-sglang-efficient-execution-of-structured-language-model-prog
  - 087-tree-of-thoughts-deliberate-problem-solving-with-large-langu
  - 1540-tail-replay-escaping-the-curse-of-linear-attention-in-prefix-caching-f
  - 185-cacheblend-fast-large-language-model-serving-for-rag-with-ca
  - 187-cost-efficient-large-language-model-serving-for-multi-turn-c
  - 188-distserve-disaggregating-prefill-and-decoding-for-goodput-op
  - 2491-histate-hierarchical-prefix-cache-management-for-hybrid-llm-serving-in
cites:
  - title: "FrontierReplay: Split-Free Exact Prefix Caching for Hybrid Language Models"
    url: "https://arxiv.org/abs/2611.26020"
    year: 2026
    arxiv: "2611.26020"
    doi: null
---

# FrontierReplay: Split-Free Exact Prefix Caching for Hybrid Language Models

## One-sentence takeaway

FrontierReplay gives hybrid attention/recurrent models exact prefix caching at turn ends and branch points without cutting the prefill: it logs a short window of recurrent-layer inputs and rebuilds the state with a replay kernel 6-37x cheaper per token than recomputation, lowering median TTFT by 16-89%.

## Why it matters here

Hybrid models break the usual prefix-cache assumption because recurrent state is updated in place; exact reuse needs a checkpoint at the exact position. The key observation, that agent loops and tree search reuse prefixes at predictable structural boundaries, is the same one our harness can expose explicitly (turn ends, branch points). It follows Tail-Replay (1540) and HiState (2491), both cited.

## Key ideas

- **Problem.** Coarse state checkpoints waste reusable prefixes; fine-grained exact caches cut the prefill at each checkpoint and add scheduler steps that cost more than they save under load.
- **Boundary prediction.** In multi-turn chat, agent loops, document QA and tree search, reuse almost always ends at boundaries known in advance.
- **Split-free materialization.** The forward pass runs uncut while recurrent-layer inputs are logged; a cross-layer, state-only replay kernel builds the checkpoint state without host synchronization.
- **Retention.** A frontier-aware policy prioritizes active anchors and proven branches and lends dead checkpoint slots to the attention KV cache.
- **Results.** Median TTFT down 16-89% (up to 8.9x), 80%-SLO capacity up to 1.73x, goodput up to 4.26x vs existing exact caches; up to 1.54x goodput vs approximate replay without its up-to-17% long-context accuracy drop.

## Caveats

Abstract-level read of the v1 preprint (Friday 20 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. Specific to hybrid architectures; pure-attention models already get exact prefix reuse from paged KV caches. Boundary predictability is an empirical claim over the tested workloads.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.26020
- PDF: https://arxiv.org/pdf/2611.26020
- HTML: https://arxiv.org/html/2611.26020v1
