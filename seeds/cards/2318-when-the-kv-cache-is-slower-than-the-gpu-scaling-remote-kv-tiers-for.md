---
title: "When the KV Cache Is Slower Than the GPU: Scaling Remote KV Tiers for Context-Parallel Prefill"
authors:
  - "Muhammad Ibrahim"
year: 2026
venue: "arXiv"
arxiv: "2610.21500"
doi: null
source: "https://arxiv.org/abs/2610.21500"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 2318
seed_batch: "frontier-2026-10-16"
reviewed: "2026-10-16"
pool: "systems"
relevance_score: 8
lineage: runtime-harness-evolution
cites:
  - title: "When the KV Cache Is Slower Than the GPU: Scaling Remote KV Tiers for Context-Parallel Prefill"
    url: "https://arxiv.org/abs/2610.21500"
    year: 2026
    arxiv: "2610.21500"
    doi: null
see: []
---

# When the KV Cache Is Slower Than the GPU: Scaling Remote KV Tiers for Context-Parallel Prefill

## One-sentence takeaway

A shared remote KV tier can be slower than recomputing: in a GLM-5.3 disaggregated deployment on 8×B300 with prefill context parallelism, a remote hit took 0.88 s against 0.31 s to recompute and synchronous loading drove p99 to 83 s with GPUs 7% busy; a two-term cost model (break-even bandwidth B* = sR ≈ 2.53 GB/s plus a ~0.33 s fixed per-hit cost) explains it, and rank-sharded async loading brings p99 to 0.67 s.

## Why it matters here

Cache-everything is the default instinct for agent serving; this gives the back-of-envelope rule for when a cache hit loses (below ~17k-token prompts no bandwidth helps here) and a production postmortem with upstreamed fixes, the kind of evidence Broadside should demand before adding a tier.

## Key ideas

- **Symptom.** Enabling LMCache with a Valkey store left median TTFT unchanged but raised 16k-token p99 from 3.96 s to 17.3 s.
- **Cost model.** A hit pays off only if the tier delivers more than B* = sR; a fixed per-hit engine cost T0 means short prompts can never beat recompute.
- **MLA sharding.** Shard the MLA KV store across context-parallel ranks, with a proof that the existing minimum-over-ranks lookup returns the longest cached prefix and a load protocol that cannot desynchronize collectives.
- **Per-rank tier partitioning.** One server instance per rank with no coordination: GET bandwidth up 6.3× to 10.76 GB/s; plus async loading and three client-bug fixes that caused unbounded stalls.
- **Outcome.** With 98.5% of prompt tokens served remotely, p99 83.32 s to 0.67 s; prefill throughput +14% (+34% with an upstream kernel fix). Changes submitted to LMCache.

## Caveats

Single runs per condition (effects under ~10% not established); prefill only, one engine as the sole store client (multi-engine contention estimated); one 14.7k–17.9k-token prompt bucket, with T0 fitted on one point; the hit-heavy subset fits a private instance rather than production's evicting one. Single-author industry report, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.21500
- PDF: https://arxiv.org/pdf/2610.21500
- HTML: https://arxiv.org/html/2610.21500v1
