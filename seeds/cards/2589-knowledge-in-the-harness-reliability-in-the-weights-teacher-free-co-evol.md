---
title: "Knowledge in the Harness, Reliability in the Weights: Teacher-Free Co-Evolution of an LLM Agent"
authors:
  - "Yujia Zhang"
  - "Xinqi Ren"
  - "Shixiong Zhou"
  - "Jia Meng"
year: 2026
venue: "arXiv preprint (cs.CL)"
arxiv: "2611.15268"
doi: null
source: "https://arxiv.org/abs/2611.15268"
version_reviewed: "v1"
topics:
  - "continual-agent-skills"
  - "autoresearch-experiment-selection"
seed_rank: 2589
seed_batch: "frontier-2026-11-14"
reviewed: "2026-11-14"
pool: "agents"
relevance_score: 8
cites:
  - title: "Knowledge in the Harness, Reliability in the Weights: Teacher-Free Co-Evolution of an LLM Agent"
    url: "https://arxiv.org/abs/2611.15268"
    year: 2026
    arxiv: "2611.15268"
    doi: null
---

# Knowledge in the Harness, Reliability in the Weights: Teacher-Free Co-Evolution of an LLM Agent

## One-sentence takeaway

A Gemma 4 12B customer-service agent improves from its own deployment logs without a teacher: it writes policy rules into on-demand skills (kept only if they pass code checks, counterexample review, a paired retest and a noise-calibrated gate), then GRPO trains a LoRA on full conversations; rules carry knowledge and weights carry reliability.

## Why it matters here

This is the clearest split yet between what belongs in skills and what belongs in weights. The 2x2 ablation shows rules rescue tasks the agent never solved and carry policy knowledge that RL with the rules in context does not absorb, while training makes already-solved tasks reliable. The four-gate rule admission is a template for our own skill updates.

## Key ideas

- **Policy as skills.** The agent reads domain policy from on-demand skills instead of the system prompt.
- **Gated rule writing.** The base model diagnoses failed conversations and writes rules; a rule survives only after code checks, counterexample self-review, a paired retest and a noise-calibrated validation gate.
- **Then RL.** GRPO trains a LoRA adapter on complete multi-turn tool-using conversations.
- **Results.** After two rounds on tau2-bench: +12.5 / +19.5 pass^1 (retail / airline) and +18.4 / +22.0 pass^4 over the start; beats the reference agent with the whole policy in-prompt by 11.8 / 8.0 pass^1.
- **Ablation.** Rules carry knowledge; weights carry reliability.

## Caveats

Two tau2-bench domains, one 12B model, two rounds. Needs reference outcomes for deployment logs, which many deployments lack.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.15268
- PDF: https://arxiv.org/pdf/2611.15268
