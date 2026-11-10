---
title: "PACE: Keeping the Right Tokens in the KV Cache Is Not Enough for Long-Horizon LLM Agents"
authors:
  - "Suman Chatterjee"
year: 2026
venue: "arXiv preprint (cs.LG)"
arxiv: "2611.10240"
doi: null
source: "https://arxiv.org/abs/2611.10240"
version_reviewed: "v1"
topics:
  - "agent-tokenization-and-caching"
  - "agentic-llm-serving"
seed_rank: 2545
seed_batch: "frontier-2026-11-10"
reviewed: "2026-11-10"
pool: "systems"
relevance_score: 8
cites:
  - title: "PACE: Keeping the Right Tokens in the KV Cache Is Not Enough for Long-Horizon LLM Agents"
    url: "https://arxiv.org/abs/2611.10240"
    year: 2026
    arxiv: "2611.10240"
    doi: null
---

# PACE: Keeping the Right Tokens in the KV Cache Is Not Enough for Long-Horizon LLM Agents

## One-sentence takeaway

For long-horizon agents, keeping the needed tokens in the KV cache is not enough because their rotary distance to the query keeps growing; PACE pairs planner-guided retention with renumbered bounded positions and holds accuracy out to 2M-token sessions on one 24 GB GPU.

## Why it matters here

Agent sessions are append-heavy and long, and our caching notes assume residency equals recall. This shows the failure is positional, gives a cheap exact fix (renumber kept tokens), and uses the agent's own planner as the eviction oracle, a natural fit for a harness that already knows what it will read next.

## Key ideas

- **Resident but unretrievable.** With 99.6% residency, accuracy still fell from 93% to 64% as definition-to-use distance grew from 2K to 90K tokens.
- **Plan-aware retention.** The planner tells the cache which context future steps will read.
- **Bounded positions.** Kept tokens are renumbered so rotary distance to the query stays below 8K at any length; exact, no measurable perplexity cost, about 9% wall time.
- **Results.** 97% hidden tests at 100K tokens vs 42% (H2O) and 3% (SnapKV) at the same 2,048-token budget; either component alone reaches 63%.
- **Scale.** At 1M and 2M tokens PACE passes 99% and 100% with under 0.7 GB of KV state versus 147-295 GB for full cache.

## Caveats

Single author; mainly Qwen3-8B coding sessions. Depends on a planner that can name future reads, which many harnesses lack.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.10240
- PDF: https://arxiv.org/pdf/2611.10240
