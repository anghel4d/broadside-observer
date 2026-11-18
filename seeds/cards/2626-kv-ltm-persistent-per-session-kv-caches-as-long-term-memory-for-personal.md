---
title: "KV-LTM: Persistent Per-Session KV Caches as Long-Term Memory for Personal Assistants"
authors:
  - "Ziv Kfir"
  - "Ido Kfir"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.21998"
doi: null
source: "https://arxiv.org/abs/2611.21998"
version_reviewed: "v1"
topics:
  - "agent-tokenization-and-caching"
  - "provenance-first-agent-memory"
seed_rank: 2626
seed_batch: "frontier-2026-11-18"
reviewed: "2026-11-18"
pool: "agents"
relevance_score: 7
see:
  - 2318-when-the-kv-cache-is-slower-than-the-gpu-scaling-remote-kv-tiers-for
  - 1773-kvsharearena-kv-cache-reuse-across-contexts-and-model-checkpoints
  - 2312-prune-the-summary-not-the-history-source-judged-compaction-for-long
cites:
  - title: "KV-LTM: Persistent Per-Session KV Caches as Long-Term Memory for Personal Assistants"
    url: "https://arxiv.org/abs/2611.21998"
    year: 2026
    arxiv: "2611.21998"
    doi: null
---

# KV-LTM: Persistent Per-Session KV Caches as Long-Term Memory for Personal Assistants

## One-sentence takeaway

KV-LTM proposes a long-term-memory tier that stores each past session's raw text plus its KV cache under a fixed reader model, so a question is answered by restoring cached sessions and appending it, with text as the memory of record and the cache only a recompute-free prefill accelerator.

## Why it matters here

This is the provenance-first memory argument made from the serving side: no extraction or summary sits between the question and the evidence, and the authoritative record stays raw text. It also puts honest numbers on what that costs (terabytes of KV per user-year against megabytes of text), which is the trade we need to reason about when choosing between raw-history replay, retrieval, and cached prefixes for long-running agents.

## Key ideas

- **Motivation.** Commercial memory stacks put derivation or selection between a question and its evidence; on LongMemEval two commercial assistants scored well below the same model reading the history offline (cited system-level comparison, not an isolation).
- **Design.** Per-session record of raw text plus KV cache under a fixed reader; budget-derived retention, append-only read path, bounded aggregation; degrades gracefully to text.
- **Sizing.** Per-token state about 31K-328K bytes across pinned GQA and MLA configurations (about 8.1K bytes/token plus a per-session recurrent term for a KDA+MLA hybrid), giving about 0.34-3.6 TB per user-year at 30K tokens/day versus about 49 MB of raw text.
- **Evaluation protocol.** Per-session prefill emulates valid cache reuse for logical QA, with named arms and a preregistered reader-model gate; a separate real-cache replay tests numerical equivalence and cost.
- **Position.** Complementary to retrieval and indexing, not a replacement.

## Caveats

Abstract-level read of the v1 preprint (Wednesday 18 Nov 2026 listing; 45 pages). This is primarily a design and analytical-sizing paper with a specified evaluation protocol; the abstract reports no measured accuracy or latency results for a real persistent-cache implementation.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.21998
- PDF: https://arxiv.org/pdf/2611.21998
- HTML: https://arxiv.org/html/2611.21998v1
