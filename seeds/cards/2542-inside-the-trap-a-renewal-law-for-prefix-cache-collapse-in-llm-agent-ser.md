---
title: "Inside the Trap: A Renewal Law for Prefix-Cache Collapse in LLM Agent Serving"
authors:
  - "Akshat Valse"
  - "Ali Jannesari"
year: 2026
venue: "arXiv preprint (cs.DC)"
arxiv: "2611.08902"
doi: null
source: "https://arxiv.org/abs/2611.08902"
version_reviewed: "v1"
topics:
  - "agentic-llm-serving"
  - "agent-tokenization-and-caching"
seed_rank: 2542
seed_batch: "frontier-2026-11-10"
reviewed: "2026-11-10"
pool: "systems"
relevance_score: 9
see:
  - 2510-when-cache-pressure-becomes-a-trap-metastability-in-agent-serving
cites:
  - title: "Inside the Trap: A Renewal Law for Prefix-Cache Collapse in LLM Agent Serving"
    url: "https://arxiv.org/abs/2611.08902"
    year: 2026
    arxiv: "2611.08902"
    doi: null
---

# Inside the Trap: A Renewal Law for Prefix-Cache Collapse in LLM Agent Serving

## One-sentence takeaway

A burst of agent sessions can push a prefix-cached engine into a stable all-miss trap that a fluid renewal model predicts exactly, and a session cap (not load shedding) gets it out at the same load.

## Why it matters here

Agent harnesses lean on prefix caching for cheap follow-up turns, so the failure mode that matters is not slow turns but a cache that never recovers. This gives a capacity rule we can actually operate by: the all-miss capacity is the real recovery threshold, measured throughput during a trap overstates it, and admission by session count is the knob. It is the theory half of card 2510.

## Key ideas

- **The trap.** After a 200-session burst, engines stayed at zero cache hits to the end in all 30 runs; matched no-burst runs stayed healthy, and a session cap prevented the trap in all 30 capped runs.
- **Renewal law.** For an idealized FIFO server where every turn misses, cycles follow a linear renewal recursion; the trap drains only below all-miss capacity, and above it a Perron root fixes a self-similar regime where inter-turn gaps grow linearly.
- **Youth premium.** Trapped engines serve young, short turns, so completions run above all-miss capacity and make the trap look healthier than it is.
- **Retrospective fit.** With nothing fitted to trap data, the model matches 57 stuck runs (mean served prompt within 3% in 50).
- **Exit.** Refusing arrivals sheds sessions; a session cap rescued 9 of 9 established traps without shedding.

## Caveats

The authors do not prove the real engine converges to the fluid model. Tests cover two engines, two GPUs and two models with one workload shape; heavy tool latency and mixed session lengths deserve their own runs.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.08902
- PDF: https://arxiv.org/pdf/2611.08902
