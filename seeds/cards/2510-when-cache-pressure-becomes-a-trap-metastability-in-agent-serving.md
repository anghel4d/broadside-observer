---
title: "When Cache Pressure Becomes a Trap: Metastability in Agent Serving"
authors:
  - "Chengzhi Lu"
  - "Boxi Zhou"
  - "Yanying Lin"
  - "Dmitrii Ustiugov"
year: 2026
venue: "arXiv preprint (cs.DC)"
arxiv: "2611.02543"
doi: null
source: "https://arxiv.org/abs/2611.02543"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 2510
seed_batch: "frontier-2026-11-04"
reviewed: "2026-11-04"
pool: "systems"
relevance_score: 9
see:
  - 1539-adaptive-kv-retention-for-llm-agents-at-human-approval-timescales
  - 2450-wakman-workload-aware-kvcache-manager
cites:
  - title: "When Cache Pressure Becomes a Trap: Metastability in Agent Serving"
    url: "https://arxiv.org/abs/2611.02543"
    year: 2026
    arxiv: "2611.02543"
    doi: null
---

# When Cache Pressure Becomes a Trap: Metastability in Agent Serving

## One-sentence takeaway

A ten-minute traffic surge can leave a prefill–decode disaggregated agent server degraded for an hour after load returns to normal, because slower calls lengthen sessions, enlarge the shared prefix working set, cause cache misses and recomputation, and slow calls further; Basin breaks the loop with session priorities, peak-context reservations and load shedding.

## Why it matters here

Agent sessions resend a growing conversation, so prefix reuse is the whole economics of agent serving. This paper shows the failure mode that appears when that reuse collapses: a stable bad state, not a transient spike. Anyone running long agent sessions on shared inference (our own fleets included) needs admission control that reasons about the working set, not just the arrival rate.

## Key ideas

- **Metastable failure.** On SGLang, a ten-minute surge cut goodput by about 88% over the following hour; removing the leftover burst sessions restored service within minutes.
- **Population–cache feedback.** Slower calls prolong sessions, which enlarges aggregate context, which raises misses and recomputation, which delays departures further.
- **Fluid model.** Identifies the resource conditions (cache capacity, tool time, base load) for the feedback; across 36 simulated deployments it flags all 17 cache-first cases.
- **Basin.** Fixed per-session priority, reservation of each session's predicted peak context against an adaptive admission budget, idle decode memory used as extra cache, and shedding of excess demand.
- **Results.** On H200 1P3D deployments under surges, including long-context SWE-bench Pro sessions, 1.20–1.70x the goodput of Continuum and 2.35–3.59x that of HiCache alone.

## Caveats

Results are for PD-disaggregated SGLang deployments; the predictor-driven policy is shown in simulation, while the real deployment uses an arrival-time prototype. Shedding demand is a product decision that the paper treats as available.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.02543
- PDF: https://arxiv.org/pdf/2611.02543
