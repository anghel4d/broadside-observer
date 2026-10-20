---
title: "Understanding KV Residency in Production-Scale Agentic LLM Workloads"
authors:
  - "Mayank Arya"
  - "Agrim Bari"
  - "Anjaly Parayil"
  - "Yogesh Simmhan"
  - "Renee St. Amant"
  - "Victor Rühle"
  - "Saravan Rajmohan"
year: 2026
venue: "arXiv preprint (cs.DC)"
arxiv: "2610.22863"
doi: null
source: "https://arxiv.org/abs/2610.22863"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 2361
seed_batch: "frontier-2026-10-20"
reviewed: "2026-10-20"
pool: "agents"
relevance_score: 9
cites:
  - title: "Understanding KV Residency in Production-Scale Agentic LLM Workloads"
    url: "https://arxiv.org/abs/2610.22863"
    year: 2026
    arxiv: "2610.22863"
    doi: null
see:
  - 176-kvflow-efficient-prefix-caching-for-accelerating-llm-based-m
  - 1077-learning-agent-execution-for-kv-cache-management-in-agentic-serving
  - 2318-when-the-kv-cache-is-slower-than-the-gpu-scaling-remote-kv-tiers-for
---

# Understanding KV Residency in Production-Scale Agentic LLM Workloads

## One-sentence takeaway

A characterization of four Microsoft M365 production traces (Deep Research, Enterprise Assistant, Coding Agent, Enterprise Chat; more than 121 million model calls) shows that agentic sessions grow context call after call, that keeping every live session's KV state resident would need an estimated 501.8 TB of HBM while inference uses only 5.6% of that retention time, and that under tight budgets demoting cold sessions to int4 beats eviction, cutting Deep Research recomputes from 63% (LRU) to 13.6%.

## Why it matters here

Broadside's agent workflows are exactly this shape: one request becomes many model and tool calls over a growing prefix. The paper turns "prefix caching helps" into numbers for real agent traffic: where the KV bytes live, how long sessions sit idle between calls, what an idle cap or a precision demotion buys, and how much reuse is lost when the next call lands on a different deployment. It is a solid reference for sizing self-hosted agent serving and for arguing that the orchestrator should tell the serving layer what the next call will be.

## Key ideas

- **Context keeps growing.** In Deep Research the application (not the user) issues 89% of model calls, and the median context grows from about 10K to about 68K tokens by the 30th call. About 80% of context tokens are served from the prefix cache.
- **KV concentrates in one model class.** A heavyweight "Spine" class that carries the long-running context holds 67% of call-context KV bytes but only 32% of uncached tokens, with a self-transition probability of 0.97, so the next model is predictable.
- **Retention is a fleet memory problem.** Using the public Llama-2-70B KV layout as a stand-in, one p99 Deep Research session exceeds an H100's 80 GB, and holding all live sessions at peak would need about 501.8 TB of HBM.
- **Idle caps are cheap.** A one-hour idle cap cuts that ceiling 3.6× while raising the share of calls that must recompute context only from 4.07% to 4.53%.
- **Change the representation, not just the victim.** At one tenth of the busiest hour's demand, LRU makes 63% of Deep Research calls recompute and even clairvoyant furthest-next-use makes 31%; multi-resolution retention (demote the LRU session's KV to int4) lowers this to 13.6%.
- **Placement is a separate limit.** When the next call reaches a different deployment, cached-context reuse drops from 89% to 29%; treating KV as deployment-local raises the recompute floor under unlimited memory from 5.4% to 20.2%.
- The authors plan to release AgenticTraceSim (a parametric trace generator) and a residency replay framework, since the production traces cannot be published.

## Caveats

Four workloads from one company over late June to early August 2026; the authors warn these are not universal properties. Byte figures scale with an assumed per-token KV size borrowed from Llama-2-70B, because the production models are confidential. MRR is evaluated only for recompute share, not for output quality under int4 KV, and the authors frame it as a research direction rather than a tested design. Deployment identifiers may hide worker-level placement. The simulator and replay framework were announced, not yet released, at reading time.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.22863
- PDF: https://arxiv.org/pdf/2610.22863
