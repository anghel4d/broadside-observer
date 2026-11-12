---
title: "SHADOWPREFILL: Keeping Your Next Model Warm for Per-Step Model Routing in Agentic LLM Serving"
authors:
  - "Haoran Qiu"
  - "Rohan Mahapatra"
  - "Rodrigo Fonseca"
  - "Mark Russinovich"
year: 2026
venue: "arXiv preprint (cs.DC)"
arxiv: "2611.13176"
doi: null
source: "https://arxiv.org/abs/2611.13176"
version_reviewed: "v1"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 2562
seed_batch: "frontier-2026-11-12"
reviewed: "2026-11-12"
pool: "systems"
relevance_score: 9
see:
  - 2542-inside-the-trap-a-renewal-law-for-prefix-cache-collapse-in-llm-agent-ser
cites:
  - title: "SHADOWPREFILL: Keeping Your Next Model Warm for Per-Step Model Routing in Agentic LLM Serving"
    url: "https://arxiv.org/abs/2611.13176"
    year: 2026
    arxiv: "2611.13176"
    doi: null
---

# SHADOWPREFILL: Keeping Your Next Model Warm for Per-Step Model Routing in Agentic LLM Serving

## One-sentence takeaway

Per-step model routing throws away prefix-cache reuse on every switch; SHADOWPREFILL prefills the session on the model the router did not pick, using idle SLO slack, so the next switch lands warm and routed token cost drops 22-46%.

## Why it matters here

Routing each agent step to the cheapest adequate model is the obvious cost lever for a harness, and this paper names its hidden bill: KV caches are per model, so every switch is a near-cold prefill of a long agent context. It gives a concrete serving pattern (shadow prefill in spare capacity, spill to host memory, cold fallback) that makes model-vs-harness routing compatible with prefix caching instead of fighting it.

## Key ideas

- **The switch tax.** On agentic workloads, including a production coding-agent trace with 63K-token mean context, prefix hit rate falls from 80-89% on same-model calls to 44-65% after a switch, and switch calls take 1.5-3.2x longer.
- **Shadow prefill.** The session context is prefilled on the not-chosen model in capacity that normal traffic leaves idle, harvesting per-iteration SLO slack of in-flight requests.
- **Safety rails.** Routed calls are protected, shadow KV spills to host memory, and an incomplete shadow falls back to a cold switch.
- **Results.** Across 24 model pairs and five agentic suites with LLMRouter: switch-call latency down 8.5-21.4%, LLM-call latency down 3.7-17.7%, routed token cost down 22.5-46.1%, normal traffic keeps its SLO, energy per request +0.4%.

## Caveats

Assumes spare capacity on the shadow model's instances; at high utilization there is no slack to harvest. Benefit scales with how often the router actually switches, which depends on the router.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.13176
- PDF: https://arxiv.org/pdf/2611.13176
