---
title: "SkillGLoW: Procedural-Family Skill Consolidation for Self-Improving Agents on Long-Horizon Task Streams"
authors:
  - "Ao Yan"
  - "Xin Zhang"
  - "Jiawei Du"
  - "Joey Tianyi Zhou"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2609.02217"
doi: null
source: "https://arxiv.org/abs/2609.02217"
topics:
  - "continual-skills"
  - "autoresearch-rehearsal"
seed_rank: 1577
seed_batch: "frontier-2026-09-04"
reviewed: "2026-09-04"
pool: "agents"
relevance_score: 10
lineage: agent-skills
cites:
  - title: "SkillGLoW: Procedural-Family Skill Consolidation for Self-Improving Agents on Long-Horizon Task Streams"
    url: "https://arxiv.org/abs/2609.02217"
    year: 2026
    arxiv: "2609.02217"
    doi: null
  - title: "Towards a Systems Foundation for Agentic Skills: Architecture, Lifecycle, and Security"
    url: "https://arxiv.org/abs/2608.29596"
    year: 2026
    arxiv: "2608.29596"
    doi: null
  - title: "MASkills: Continual Skills Optimization for Multi-Agent LLM Systems"
    url: "https://arxiv.org/abs/2609.02094"
    year: 2026
    arxiv: "2609.02094"
    doi: null
see:
  - "1542-towards-a-systems-foundation-for-agentic-skills-architecture-lifecycle"
  - "1576-maskills-continual-skills-optimization-for-multi-agent-llm-systems"
  - "1119-harness-continual-learning-continual-adaptation-beyond-model-par"
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
---
# SkillGLoW: Procedural-Family Skill Consolidation for Self-Improving Agents on Long-Horizon Task Streams

## One-sentence takeaway

On heterogeneous long-horizon streams, flat skill pools and single global skill docs both fail; SkillGLoW consolidates local execution skills into procedural-family global priors and only commits a prior when live execution shows it does not degrade the library.

## Why it matters here

Fixes the skill-library failure mode Broadside will hit the moment radar/coding/RTS tasks stop looking alike: instance-bound entries explode, global docs go generic. The commit gate is the rehearsal discipline we wanted.

## Key ideas

- Unit of reuse = solving procedure shared by a cluster of related tasks (procedural family), not one doc and not one entry per task.
- Local skills from execution → aggregate into families → compress into de-instantiated global priors; instance detail regenerated per task.
- Commit gate: admit a prior only when live execution shows non-degradation of the deployed library.
- +17.2 hard points avg over no-skill baseline across math, terminal automation, software repair, embodied control (12 continual-improvement settings, 3 models).

## Caveats

- Commit gate needs executable eval; pure-text radar digests cannot self-verify the same way.
- Family discovery quality is the silent dependency — bad clustering yields bad priors.
- see 1576 is same-batch; packer must accept forward see within the mint.

## Links

- arXiv: [2609.02217](https://arxiv.org/abs/2609.02217)
- PDF: https://arxiv.org/pdf/2609.02217
