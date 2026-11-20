---
title: "Aggron: Aggressive Compression of Agentic KV Caches during Head-of-Line Stalls in the Request Queue"
authors:
  - "Rishabh Ravi"
  - "Tony Hong"
  - "Chen Wang"
  - "Yue Zhu"
  - "Mengmei Ye"
  - "Hubertus Franke"
  - "Fan Lai"
  - "Josep Torrellas"
year: 2026
venue: "arXiv preprint (cs.DC)"
arxiv: "2611.26435"
doi: null
source: "https://arxiv.org/abs/2611.26435"
version_reviewed: "v1"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 2654
seed_batch: "frontier-2026-11-20"
reviewed: "2026-11-20"
pool: "agents"
relevance_score: 8
see:
  - 001-swe-agent-agent-computer-interfaces-enable-automated-softwar
  - 002-efficient-memory-management-for-large-language-model-serving
  - 004-memgpt-towards-llms-as-operating-systems
  - 007-react-synergizing-reasoning-and-acting-in-language-models
  - 082-sarathi-efficient-llm-inference-by-piggybacking-decodes-with
  - 083-sglang-efficient-execution-of-structured-language-model-prog
  - 084-swe-bench-can-language-models-resolve-real-world-github-issu
  - 086-toolformer-language-models-can-teach-themselves-to-use-tools
  - 185-cacheblend-fast-large-language-model-serving-for-rag-with-ca
  - 942-deepseek-v3-technical-report
  - 999-deepseek-v4-million-token-context-intelligence
cites:
  - title: "Aggron: Aggressive Compression of Agentic KV Caches during Head-of-Line Stalls in the Request Queue"
    url: "https://arxiv.org/abs/2611.26435"
    year: 2026
    arxiv: "2611.26435"
    doi: null
---

# Aggron: Aggressive Compression of Agentic KV Caches during Head-of-Line Stalls in the Request Queue

## One-sentence takeaway

Aggron compresses agentic KV caches a little at every turn instead of in big threshold-triggered summaries, and runs those summarizations from a separate queue while the agent's request is stuck in a head-of-line stall, cutting P99 program latency by 27-31% and raising throughput 1.34-1.40x at high load.

## Why it matters here

For agent serving, the KV capacity wall is a scheduling problem as much as a compression one. Aggron uses idle capacity during queue stalls for compaction and only issues work it predicts will finish before the request runs. The same idea fits any harness that compacts context: do it incrementally and off the critical path. It complements prefetch-side work such as TripleKV (2655) from overlapping authors and the burst-trap results (2542).

## Key ideas

- **Per-turn, selective summarization.** Summarize every turn and only parts of the KV cache, so summaries stay lightweight and accuracy holds.
- **Summarization Queue.** A separate queue uses compute and memory left idle by head-of-line stalls in the main request queue.
- **Completion prediction.** Summaries are issued only when predicted to finish before the stalled agentic request executes.
- **Results.** Against state-of-the-art asynchronous summarization at high load: P99 program latency down 27-31%, throughput up 1.34-1.40x.

## Caveats

Abstract-level read of the v1 preprint (Friday 20 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. Same-engine summarization changes the context the agent sees, so the accuracy claim depends on the summarizer and workloads tested; the gains are reported at high load, where stalls exist to be harvested.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.26435
- PDF: https://arxiv.org/pdf/2611.26435
- HTML: https://arxiv.org/html/2611.26435v1
