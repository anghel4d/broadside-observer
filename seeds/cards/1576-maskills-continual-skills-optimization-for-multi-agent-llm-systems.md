---
title: "MASkills: Continual Skills Optimization for Multi-Agent LLM Systems"
authors:
  - "Huaiyuan Yao"
  - "Xiaoou Liu"
  - "Charles Fleming"
  - "Tianlong Chen"
  - "Hua Wei"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2609.02094"
doi: null
source: "https://arxiv.org/abs/2609.02094"
topics:
  - "continual-skills"
  - "agentic-llm-serving"
seed_rank: 1576
seed_batch: "frontier-2026-09-04"
reviewed: "2026-09-04"
pool: "agents"
relevance_score: 10
lineage: agent-skills
cites:
  - title: "MASkills: Continual Skills Optimization for Multi-Agent LLM Systems"
    url: "https://arxiv.org/abs/2609.02094"
    year: 2026
    arxiv: "2609.02094"
    doi: null
  - title: "Towards a Systems Foundation for Agentic Skills: Architecture, Lifecycle, and Security"
    url: "https://arxiv.org/abs/2608.29596"
    year: 2026
    arxiv: "2608.29596"
    doi: null
see:
  - "1542-towards-a-systems-foundation-for-agentic-skills-architecture-lifecycle"
  - "1119-harness-continual-learning-continual-adaptation-beyond-model-par"
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
  - "1050-deepseek-harness-everything-is-a-plugin"
---
# MASkills: Continual Skills Optimization for Multi-Agent LLM Systems

## One-sentence takeaway

MASkills treats skills — not flat experience memories — as the continual-learning unit for multi-agent LLM systems, with skill-conditioned credit assignment, hierarchical aggregation, and momentum-smoothed library evolution (refine/induce/consolidate/prune).

## Why it matters here

Standing continual-skills topic after Agentic Skills systems (1542): MASkills is the multi-agent optimization loop that actually mutates a skill library from interaction, not another reflection scrapbook. HotpotQA / LoCoMo / GAIA evidence; code public.

## Key ideas

- Argues experience memories are hard to invoke/refine/scale; skills specify when/how/with-what-tools.
- Pipeline: skill-conditioned credit assignment → hierarchical credit aggregation → momentum-smoothed optimization.
- Library ops: refinement, induction, consolidation, pruning — a full lifecycle, not append-only.
- Evaluated on HotpotQA, LoCoMo, GAIA; open-sourced at DaRL-GenAI/MASkills.

## Caveats

- QA / research-agent benchmarks; RTS / ECS sim skill transfer is untested.
- Credit assignment still needs outcome signal — silent mid-horizon failures remain hard.
- Pair with SkillGLoW (1577) for the procedural-family consolidation angle; do not conflate the two.

## Links

- arXiv: [2609.02094](https://arxiv.org/abs/2609.02094)
- PDF: https://arxiv.org/pdf/2609.02094
