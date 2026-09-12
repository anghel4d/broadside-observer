---
title: "When Synthetic Data Hurts: On Catastrophic Forgetting in Skill Retrieval for LLM Agents"
authors:
  - "Syed Shariyar Murtaza"
  - "Yifan Nie"
  - "Utkarsh Soni"
  - "Eugene Wen"
  - "Arvid Frydenlund"
year: 2026
venue: "arXiv"
arxiv: "2609.10750"
doi: null
source: "https://arxiv.org/abs/2609.10750"
topics:
  - "continual-agent-skills"
  - "provenance-first-agent-memory"
  - "agentic-llm-serving"
seed_rank: 1800
seed_batch: "frontier-2026-09-12"
reviewed: "2026-09-12"
pool: "agents"
relevance_score: 10
lineage: skill-retrieval-forgetting
cites:
  - title: "When Synthetic Data Hurts: On Catastrophic Forgetting in Skill Retrieval for LLM Agents"
    url: "https://arxiv.org/abs/2609.10750"
    year: 2026
    arxiv: "2609.10750"
    doi: null
see:
  - "1576-maskills-continual-skills-optimization-for-multi-agent-llm-systems"
  - "1771-se-gos-self-evolving-graph-of-skills-for-skill-library-at-scale"
  - "1119-harness-continual-learning-continual-adaptation-beyond-model-par"
  - "1015-practice-makes-unsafe-skill-misevolution-in-self-improving-llm-agents"
  - "1643-forgetting-without-restarting-execution-state-unlearning-for-stateful"
---

# When Synthetic Data Hurts: On Catastrophic Forgetting in Skill Retrieval for LLM Agents

## One-sentence takeaway

On a 34k-skill production router, synthetic-data fine-tuning boosts in-distribution skill retrieval but causes catastrophic forgetting on real and OOD skills — so skill libraries cannot treat synthetic expansion as free.

## Why it matters here

SE-GoS (1771) and MASKills (1576) push skill libraries at scale; Broadside’s continual-skills topic needs the failure mode in writing. If synthetic supervision quietly erases real skill routing, GRID COMMAND and Anoptic agent skill banks will look healthy in-dist and fail in the wild.

## Key ideas

- Positions runtime skill retrieval over large repositories as a first-class agent systems problem (34,396 skills in production).
- Shows synthetic fine-tuning improves in-distribution retrieval while inducing catastrophic forgetting on real and out-of-distribution skills.
- Studies forgetting-mitigation fine-tuning strategies under limited real supervision.
- Separates “skill library grew” from “router still finds the right skill” — a harness/data cut, not just a model-size story.
- Warns that synthetic skill data is not a free rehearsal loop; rehearsal must preserve real/OOD routing.

## Caveats

Production router details and exact mitigation winners need the paper tables. Domain mix of the 34k skills may not match GRID COMMAND NL-order skills. Do not remint 1771 / 1576 / 1015 / 1119.

## Links

- arXiv: [2609.10750](https://arxiv.org/abs/2609.10750)
- PDF: https://arxiv.org/pdf/2609.10750
