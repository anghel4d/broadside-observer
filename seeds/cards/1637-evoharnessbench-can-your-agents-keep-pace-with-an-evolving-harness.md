---
title: "EVOHARNESSBENCH: Can Your Agents Keep Pace with an Evolving Harness?"
authors:
  - "Zixuan Ke"
  - "Vaidehi Patil"
  - "Haizhou Shi"
  - "Yang Li"
  - "Ye Liu"
  - "Sarath Shekkizhar"
  - "Anurag Koul"
  - "Jiayu Wang"
  - "Xuan Phi Nguyen"
  - "Semih Yavuz"
  - "Mohit Bansal"
  - "Shafiq Joty"
year: 2026
venue: "arXiv"
arxiv: "2609.04280"
doi: null
source: "https://arxiv.org/abs/2609.04280"
topics:
  - "harness-engineering"
  - "continual-skills"
  - "agent-failure-localization"
seed_rank: 1637
seed_batch: "frontier-2026-09-08"
reviewed: "2026-09-08"
pool: "agents"
relevance_score: 10
lineage: evolving-harness-benchmark
cites:
  - title: "JIT-Agent: Scaling Harness Intelligence via Just-in-Time Harness Evolution"
    url: "https://arxiv.org/abs/2608.25593"
    year: 2026
    arxiv: "2608.25593"
    doi: null
  - title: "HELIX: Model-Harness Co-evolution for Recursive Self-Improvement"
    url: "https://arxiv.org/abs/2608.13951"
    year: 2026
    arxiv: "2608.13951"
    doi: null
  - title: "SafeEvolve: Harness-Policy Co-Evolution from Agent Experience for Safety Alignment"
    url: "https://arxiv.org/abs/2609.02786"
    year: 2026
    arxiv: "2609.02786"
    doi: null
see:
  - "1119-harness-continual-learning-continual-adaptation-beyond-model-par"
  - "1079-helix-model-harness-co-evolution-for-recursive-self-improvement"
  - "1447-jit-agent-scaling-harness-intelligence-via-just-in-time"
  - "1536-harness-engineering-anatomy-architecture-and-evolution-of-coding-agent"
  - "1574-safeevolve-harness-policy-co-evolution-from-agent-experience-for"
---

# EVOHARNESSBENCH: Can Your Agents Keep Pace with an Evolving Harness?

## One-sentence takeaway

EVOHARNESSBENCH moves non-stationarity from the task stream into the harness itself — 17 multi-stage streams over tools, skills, and specialist agents (802 tasks / 520 tools / 42 skills / 62 agents) — so agents must keep pace with an evolving external runtime.

## Why it matters here

JIT-Agent (1447), HELIX (1079), and SafeEvolve (1574) all assume the harness can change underneath the model. This is the missing controlled benchmark: what fails when tools/skills/agents are added mid-stream while the model stays fixed. Direct radar input for Broadside harness-evolution claims and for Anoptic agent runtimes that grow plugin surfaces over a campaign.

## Key ideas

- Three evolution axes: tools, reusable skills, and specialist agents — independently and jointly scheduled.
- 17 deterministically constructed multi-stage harness streams from verifier-based benchmarks; 802 tasks, 520 tools, 42 skills, 62 agents.
- Inverts the usual continual-agent setup: task stream fixed-ish, harness non-stationary — the realistic production failure mode.
- Two complementary eval settings matching the central challenges of harness evolution (keep-up vs exploit-new-capability).
- Gives HELIX / JIT-Agent / SafeEvolve a shared yardstick instead of one-off plugin anecdotes.

## Caveats

Verifier-constructed streams are cleaner than messy production plugin churn. Does not itself propose a keep-up algorithm — it is a bench. Distinct from task-stream continual skills (MASkills 1576 / SkillGLoW 1577); do not conflate.

## Links

- arXiv: [2609.04280](https://arxiv.org/abs/2609.04280)
- PDF: https://arxiv.org/pdf/2609.04280
