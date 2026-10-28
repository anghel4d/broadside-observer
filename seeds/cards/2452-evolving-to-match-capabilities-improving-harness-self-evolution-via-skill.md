---
title: "Evolving to Match Capabilities: Improving Harness Self-Evolution via Skill Adaptation"
authors:
  - "Zhihao Yang"
  - "Haojin Wang"
  - "Juncheng Wu"
  - "Kuan Zhang"
  - "Yukun Chen"
  - "Run Luo"
  - "Yaojie Lu"
  - "Yuyin Zhou"
  - "Lu Wang"
  - "Xianpei Han"
year: 2026
venue: "arXiv preprint (cs.LG)"
arxiv: "2610.33024"
doi: null
source: "https://arxiv.org/abs/2610.33024"
topics:
  - "continual-agent-skills"
  - "agent-failure-localization"
seed_rank: 2452
seed_batch: "frontier-2026-10-28"
reviewed: "2026-10-28"
pool: "agents"
relevance_score: 8
see:
  - 2432-beyond-gain-measuring-skill-internalization-for-agent-skill-retirement
  - 2285-cortex-measurement-gated-evolution-and-pruning-of-coding-agent-skills
cites:
  - title: "Evolving to Match Capabilities: Improving Harness Self-Evolution via Skill Adaptation"
    url: "https://arxiv.org/abs/2610.33024"
    year: 2026
    arxiv: "2610.33024"
    doi: null
---

# Evolving to Match Capabilities: Improving Harness Self-Evolution via Skill Adaptation

## One-sentence takeaway

Skills are not portable across model strength: on 103 task-skill pairs the same skill lifts GPT-5.6-luna by 31.1 points and drops Gemma-4-E4B by 8.8, and in 86% of the weak model's failures the violated requirement was already written in the skill, so rewriting skills to fit the executor (guided by a fixed meta-skill) recovers 5.1–14.1 points.

## Why it matters here

Skills here are shared across bots that run on different models and effort levels, and this says a skill tuned on a strong executor can actively hurt a weaker one. It pairs with card 2432 (retire skills a model has internalized) as the other half of continual skills: a skill library needs per-executor variants, not one canonical text.

## Key ideas

- **Capability mismatch.** Across seven models and three benchmarks, harness gains from skills are non-uniform and can be negative for weak executors.
- **Knowing is not doing.** Most weak-model failures violate a requirement the skill already states, so the fix is making guidance executable, not adding more of it.
- **Meta-skill.** Failures are diagnosed into tool execution, context management, instruction following and verification, then distilled into one fixed meta-skill for rewriting skills.
- **Offline adaptation.** An external rewriter (Kimi-K3) guided by the meta-skill, with no execution evidence, improves three weak executors by 5.1–14.1 points.
- **In the loop.** In a five-round self-evolution loop across seven executors, adding the meta-skill improves final scores by 2.0–5.1 points.

## Caveats

Gains are reported against the same loop without the meta-skill, not against simply choosing a stronger model. Benchmarks and skill sets are the authors'; the meta-skill itself may be tuned to these failure categories.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.33024
- PDF: https://arxiv.org/pdf/2610.33024
- Project page: https://zhihaoyang30.github.io/skill-adaptation/
