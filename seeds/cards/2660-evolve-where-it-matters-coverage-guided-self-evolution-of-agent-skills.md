---
title: "Evolve Where It Matters: Coverage-Guided Self-Evolution of Agent Skills"
authors:
  - "Boyin Tan"
  - "Jiadong Zhang"
  - "Xiaosong Ma"
  - "Chun Jason Xue"
  - "Xiaowei Huang"
  - "Youcheng Sun"
year: 2026
venue: "arXiv preprint (cs.CL)"
arxiv: "2611.25429"
doi: null
source: "https://arxiv.org/abs/2611.25429"
version_reviewed: "v1"
topics:
  - "continual-agent-skills"
  - "agent-failure-localization"
seed_rank: 2660
seed_batch: "frontier-2026-11-20"
reviewed: "2026-11-20"
pool: "agents"
relevance_score: 8
see:
  - 006-voyager-an-open-ended-embodied-agent-with-large-language-mod
  - 081-reflexion-language-agents-with-verbal-reinforcement-learning
  - 193-openhands-an-open-platform-for-ai-software-developers-as-gen
cites:
  - title: "Evolve Where It Matters: Coverage-Guided Self-Evolution of Agent Skills"
    url: "https://arxiv.org/abs/2611.25429"
    year: 2026
    arxiv: "2611.25429"
    doi: null
---

# Evolve Where It Matters: Coverage-Guided Self-Evolution of Agent Skills

## One-sentence takeaway

SkillPlumber uses instruction-level coverage (each skill instruction labelled follow, not-follow or not covered) to tell a wrong instruction from an ignored one, evolves skills only where coverage shows a gap, and solves 64.7-70.5% of tasks, 25.6-30.4 points above the initial skill and 8.7-14.0 above the strongest baseline.

## Why it matters here

Failure localization inside a skill is the missing piece of most skill-evolution loops, which judge runs as a whole. Coverage labels make the edit target explicit, and the root-cause agent checks each revision against the next run, so revisions are tested rather than assumed. It is the feedback-driven counterpart to the erosion result in 2659.

## Key ideas

- **Coverage signal.** Instruction-level coverage separates incorrect instructions from instructions the agent did not follow.
- **Root-cause agent.** A persistent agent turns each coverage label into a revision question and checks each revision on the next run.
- **Maintainer.** Distills investigations across tasks into a shared strategy library.
- **Results.** Across three benchmarks and three executors: 64.7-70.5% solved, +25.6 to +30.4 points over the initial skill, +8.7 to +14.0 over the strongest baseline; removing coverage cuts recovered failures by 20.8% on SkillsBench with GPT-5.5.

## Caveats

Abstract-level read of the v1 preprint (Friday 20 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. Coverage labelling itself relies on judging whether instructions were followed; its error rate is not given in the abstract.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.25429
- PDF: https://arxiv.org/pdf/2611.25429
- HTML: https://arxiv.org/html/2611.25429v1
