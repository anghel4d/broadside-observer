---
title: "TROVE: Adaptive Agent Skill Orchestration via Trace-Grounded Route Validation and Editing"
authors:
  - "Tianxing Wang"
  - "Mingming Zhao"
  - "Shuai Huang"
  - "Huiyang Xu"
  - "Chaoyue Niu"
  - "Shengzhong Liu"
  - "Fan Wu"
year: 2026
venue: "arXiv"
arxiv: "2609.05019"
doi: null
source: "https://arxiv.org/abs/2609.05019"
topics:
  - "continual-skills"
  - "agentic-llm-serving"
  - "provenance-first-memory"
seed_rank: 1639
seed_batch: "frontier-2026-09-08"
reviewed: "2026-09-08"
pool: "agents"
relevance_score: 10
lineage: trace-grounded-skill-orchestration
cites:
  - title: "MASkills: Continual Skills Optimization for Multi-Agent LLM Systems"
    url: "https://arxiv.org/abs/2609.02094"
    year: 2026
    arxiv: "2609.02094"
    doi: null
see:
  - "1577-skillglow-procedural-family-skill-consolidation-for-self-improving"
  - "1576-maskills-continual-skills-optimization-for-multi-agent-llm-systems"
  - "1542-towards-a-systems-foundation-for-agentic-skills-architecture-lifecycle"
  - "072-agent-workflow-memory"
  - "1613-tigpo-temporal-instance-graph-policy-optimization-for-long-horizon-llm"
---

# TROVE: Adaptive Agent Skill Orchestration via Trace-Grounded Route Validation and Editing

## One-sentence takeaway

TROVE treats a planned skill route as provisional: offline it distills workflow-search traces into atomic/composite skills plus an outcome-conditioned transition graph; online it validates and locally edits only the fragments runtime evidence invalidates.

## Why it matters here

Pre-commit orchestration is the GRID COMMAND / agent-workflow failure mode — stale plans after intermediate evidence flips. TROVE's trace-grounded local edit (keep valid continuation, patch only the broken span) is the systems cousin of Fresh-Memory/Stale-Plans (1579) and TIGPO (1613) for skill graphs rather than memory fences.

## Key ideas

- Names the pre-execution commitment bottleneck: optimize/select structure before decisive runtime outcomes, then either run stale steps or replan broadly.
- Offline: distill evaluated workflow-search traces into atomic + composite skills and an outcome-conditioned transition graph.
- Online: commit one top-level skill, retain a valid continuation, insert a trace-supported local response when evidence invalidates the pending route.
- Preserves stable fragments instead of discarding progress on every replan — compute and provenance both win.
- Skill orchestration as validation+editing over a route, not just retrieval from a flat library.

## Caveats

Depends on quality of offline trace distillation; cold-start graphs may be thin. Not a drop-in for lock-free ECS planners. Pair with SkillGLoW / MASkills rather than replacing them.

## Links

- arXiv: [2609.05019](https://arxiv.org/abs/2609.05019)
- PDF: https://arxiv.org/pdf/2609.05019
