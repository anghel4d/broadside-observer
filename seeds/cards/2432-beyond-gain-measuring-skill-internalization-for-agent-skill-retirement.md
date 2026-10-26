---
title: "Beyond Gain: Measuring Skill Internalization for Agent Skill Retirement"
authors:
  - "Yanze Wang"
  - "Pengfei Yao"
  - "Tianyi Sun"
  - "Hongda Chen"
  - "Yunyun Han"
  - "Jun Sun"
  - "Chuanrui Hu"
  - "Yafeng Deng"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2610.32322"
doi: null
source: "https://arxiv.org/abs/2610.32322"
topics:
  - "continual-agent-skills"
seed_rank: 2432
seed_batch: "frontier-2026-10-26"
reviewed: "2026-10-26"
pool: "agents"
relevance_score: 8
cites:
  - title: "Beyond Gain: Measuring Skill Internalization for Agent Skill Retirement"
    url: "https://arxiv.org/abs/2610.32322"
    year: 2026
    arxiv: "2610.32322"
    doi: null
---

# Beyond Gain: Measuring Skill Internalization for Agent Skill Retirement

## One-sentence takeaway

Retiring an agent skill because the with-versus-without gain is near zero confuses a skill the model has internalized with an uncovered one that neither the model nor the skill can do, so the paper retires on the unaided score instead, trusting a high score only when another model gains from the skill; on SkillsBench 28 of its 31 gain-based retirements rest on probes no run fully passed, while unaided retirement costs no detectable reward.

## Why it matters here

The skill library here is shared across every bot and every model version, and it only grows. This gives a concrete, per-model test for deleting a skill (withhold it, score the model on a task built from it, and check the task is valid via another model's gain), which pairs with card 2429's finding that lessons outlive the failures they fixed.

## Key ideas

- **Three states.** Working (aided passes, unaided fails), internalized (unaided passes), and uncovered (both fail); the gain is near zero in the last two.
- **Validity gate.** Nearly half of high unaided scores come from tasks no model benefits from, so a high score counts only when some other model gains from the skill.
- **Gain rule failure.** Under four models, a published gain rule with one task per skill removes over half of the uncovered skills.
- **Reliability.** Unaided verdicts reproduce across tasks more often than the gain rule (Cohen's kappa 0.42 versus 0.23) but differ across models, so retirement must be read per model.
- **Release.** 1,251 skills with synthesized tasks and item scores under four models.

## Caveats

Tasks are synthesized from the skills and scored by an LLM judge, so the verdict inherits the judge's errors. Kappa of 0.42 is only moderate agreement. Retirement is per model, which a shared library has to track as models change.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.32322
- PDF: https://arxiv.org/pdf/2610.32322
