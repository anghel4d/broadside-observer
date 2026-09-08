---
title: "From Interaction Traces to Persistent Skills: Online Evolution for Computer-Use Agents"
authors:
  - "Longtao Hu"
  - "Xiao Liang"
  - "Linchao Zhu"
year: 2026
venue: "arXiv"
arxiv: "2609.04869"
doi: null
source: "https://arxiv.org/abs/2609.04869"
topics:
  - "continual-skills"
  - "computer-use-agents"
  - "provenance-first-memory"
seed_rank: 1638
seed_batch: "frontier-2026-09-08"
reviewed: "2026-09-08"
pool: "agents"
relevance_score: 10
lineage: online-skill-evolution
cites:
  - title: "SkillGLoW: Procedural-Family Skill Consolidation for Self-Improving Agents on Long-Horizon Task Streams"
    url: "https://arxiv.org/abs/2609.02217"
    year: 2026
    arxiv: "2609.02217"
    doi: null
see:
  - "1576-maskills-continual-skills-optimization-for-multi-agent-llm-systems"
  - "1577-skillglow-procedural-family-skill-consolidation-for-self-improving"
  - "1542-towards-a-systems-foundation-for-agentic-skills-architecture-lifecycle"
  - "1015-practice-makes-unsafe-skill-misevolution-in-self-improving-llm-agents"
  - "1612-simskill-a-lifelong-learning-ai-agent-for-autonomous-mastery-of-traffi"
---

# From Interaction Traces to Persistent Skills: Online Evolution for Computer-Use Agents

## One-sentence takeaway

An online skill-evolution loop turns computer-use trajectories plus evaluator feedback into a versioned procedural library — frozen snapshot per iteration, evidence-guided updates next — beating a matched empty-library control by 5.7–18.6 pp across four OSWorld domains after warm-up.

## Why it matters here

Continual skills for GRID COMMAND / Broadside agents need the longitudinal ablation this paper actually runs: same fixed GUI stack, with vs without an evolving library. Provenance-aware GIMP analysis shows cross-task retrieval and revision churn that fails to recover the originating task — a direct warning for SkillGLoW-style consolidation and Practice-Makes-Unsafe (1015).

## Key ideas

- Converts interaction traces + evaluator feedback into a persistent, versioned skill library without changing model weights.
- Each iteration executes against a frozen library snapshot; accepted edits land only in subsequent iterations.
- Configuration-matched empty-library control across four OSWorld domains; post-warm-up mean gains 5.7–18.6 pp.
- GIMP provenance analysis: retrieval crosses task-of-origin boundaries; repeated accepted revisions do not guarantee recovery.
- Frames evolving skill libraries as auditable shared procedural memory whose benefits are conditional, not automatic.

## Caveats

OSWorld GUI computer-use scope; not yet RTS/NL-order skills. Benefits are domain-dependent and revision can misevolve (pair with 1015). Code at github.com/LongtaoHu/Skill-Evo4GUI.

## Links

- arXiv: [2609.04869](https://arxiv.org/abs/2609.04869)
- PDF: https://arxiv.org/pdf/2609.04869
