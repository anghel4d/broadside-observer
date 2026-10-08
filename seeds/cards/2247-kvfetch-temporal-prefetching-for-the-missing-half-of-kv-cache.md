---
title: "KVFetch: Temporal Prefetching for the Missing Half of KV Cache Compression"
authors:
  - "Linfeng Dong"
year: 2026
venue: "arXiv"
arxiv: "2610.08811"
doi: null
source: "https://arxiv.org/abs/2610.08811"
topics:
  - "agent-tokenization-and-caching"
  - "agentic-llm-serving"
seed_rank: 2247
seed_batch: "frontier-2026-10-08"
reviewed: "2026-10-08"
pool: "agents"
relevance_score: 8
lineage: kv-cache-compression
cites:
  - title: "KVFetch: Temporal Prefetching for the Missing Half of KV Cache Compression"
    url: "https://arxiv.org/abs/2610.08811"
    year: 2026
    arxiv: "2610.08811"
    doi: null
see:
  - "054-compresskv-semantic-retrieval-guided-kv-cache-compression-fo"
  - "1142-recache-efficient-kv-cache-reuse-and-compression-for-tool-aug"
  - "1578-vestigekv-the-nope-mla-kv-cache-carries-its-own-eviction-signal-in-a"
---

# KVFetch: Temporal Prefetching for the Missing Half of KV Cache Compression

## One-sentence takeaway

KV-cache compressors only address tokens by content relevance, so they keep the head of an identifier or code span and evict its continuation, breaking verbatim copying midway; KVFetch adds the missing positional channel, prefetching positional successors from a quantised cold tier and lifting RULER-16K verbatim copying from 0.8 to 78.4 at the same budget.

## Why it matters here

Agents copy things verbatim all the time: file paths, IDs, JSON fields, code. The paper names this failure (sequential forgetting), argues it is the main remaining quality loss under compression, and fixes it with an old hardware idea: caches support both associative and sequential access, and prefetchers exploit the second. That framing is useful well beyond this paper for anyone designing KV memory for long agent sessions.

## Key ideas

- **Two access modes.** Associative lookup by content and sequential traversal by position; eviction, summary compensation and offload-and-recall all implement only the first.
- **Sequential forgetting.** It resists better scoring, bigger budgets, summary compensation and dynamic re-scoring.
- **Mechanism.** Evicted candidates are demoted to a quantised cold tier; active copying is detected via a monotone read pointer; positional successors are prefetched into fixed-size hot-tier slots without raising attention cost.
- **Results.** Iso-budget RULER-16K: verbatim copying 0.8 → 78.4 and +8.4 on the 13-task average. On LongBench, where no task needs sequential access, the channel stays dormant at no cost.
- **Drop-in.** Training-free and works on top of any score-based compressor; ablations show admission, triggering and prefetching are each necessary.

## Caveats

Single-author paper evaluated on 7–8B-class open models at 16K context; behaviour at the 128K–1M contexts of production agents is not shown. The trigger and prefetch choices are one simple instantiation, as the author notes.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.08811
- PDF: https://arxiv.org/pdf/2610.08811
