---
title: "When Agent Skills Go Stale: Runtime Behavior and Selective Maintenance in Evolving Environments"
authors:
  - "Ömer Faruk Akgül"
  - "Shuli Jiang"
  - "Yuting Zhang"
  - "Yi Zhang"
  - "Xiaohan Fei"
  - "Wei Xia"
  - "Stefano Soatto"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.22525"
doi: null
source: "https://arxiv.org/abs/2611.22525"
version_reviewed: "v1"
topics:
  - "continual-agent-skills"
seed_rank: 2630
seed_batch: "frontier-2026-11-18"
reviewed: "2026-11-18"
pool: "agents"
relevance_score: 8
see:
  - 2432-beyond-gain-measuring-skill-internalization-for-agent-skill-retirement
  - 2406-stale-instruction-files-override-the-code-in-coding-agents
  - 2285-cortex-measurement-gated-evolution-and-pruning-of-coding-agent-skills
  - 1579-fresh-memory-stale-plans-dependency-scoped-validation-for-distributed
cites:
  - title: "When Agent Skills Go Stale: Runtime Behavior and Selective Maintenance in Evolving Environments"
    url: "https://arxiv.org/abs/2611.22525"
    year: 2026
    arxiv: "2611.22525"
    doi: null
---

# When Agent Skills Go Stale: Runtime Behavior and Selective Maintenance in Evolving Environments

## One-sentence takeaway

When an environment changes, previously helpful agent skills can cut task accuracy by over 10 points or raise execution cost by nearly 40% versus no skill, and selective maintenance, which replays checks recorded from successful runs without extra model calls, repairs the stale parts and recovers up to 67 points of accuracy.

## Why it matters here

Continual skills only pay if they survive drift. This paper measures the decay and gives a maintenance mechanism that is cheap (replayed checks, no model calls, no description of the change needed), which fits our retire/repair questions alongside skill retirement (2432) and stale instruction files (2406).

## Key ideas

- **Skill state.** Skills retain experience that amortises reasoning and environment interaction; after an environment change some parts go stale while others stay useful.
- **Measured decay.** Across four task settings and two models, stale skills can lower performance by more than 10 points or increase execution cost by nearly 40% relative to no skill; success can also stay flat while savings decline.
- **Selective maintenance.** Replay checks from successful executions, verify whether observed differences conflict with skill state, repair affected content, validate updates, and rebuild when local repair is insufficient.
- **No change description.** The method is not told what changed.
- **Evidence.** Versus reusing stale state, maintenance improves task accuracy by up to 67 points and cuts execution steps by up to 37%.

## Caveats

Abstract-level read of the v1 preprint (Wednesday 18 Nov 2026 listing). Four task settings and two models; "up to" figures are best cases. Numbers are the authors'.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.22525
- PDF: https://arxiv.org/pdf/2611.22525
- HTML: https://arxiv.org/html/2611.22525v1
