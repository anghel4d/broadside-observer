---
title: "How Feedback-Free Self-Evolution Reshapes Agent Skills: A Systematic Study"
authors:
  - "Litao Guo"
  - "Man Chen"
  - "Xinli Xu"
  - "Jinsong Zhou"
  - "Zixin Zhang"
  - "Ying-Cong Chen"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.25534"
doi: null
source: "https://arxiv.org/abs/2611.25534"
version_reviewed: "v1"
topics:
  - "continual-agent-skills"
seed_rank: 2659
seed_batch: "frontier-2026-11-20"
reviewed: "2026-11-20"
pool: "agents"
relevance_score: 9
see:
  - 006-voyager-an-open-ended-embodied-agent-with-large-language-mod
  - 081-reflexion-language-agents-with-verbal-reinforcement-learning
  - 193-openhands-an-open-platform-for-ai-software-developers-as-gen
cites:
  - title: "How Feedback-Free Self-Evolution Reshapes Agent Skills: A Systematic Study"
    url: "https://arxiv.org/abs/2611.25534"
    year: 2026
    arxiv: "2611.25534"
    doi: null
---

# How Feedback-Free Self-Evolution Reshapes Agent Skills: A Systematic Study

## One-sentence takeaway

When models rewrite expert-written agent skills round after round without feedback, the skills get worse (15 points lower on SkillsBench on average after thirty rounds) because rewriting pulls them toward the model's own prior and drops first the knowledge the model would not have written; marking that knowledge in place (SkillDiff) recovers 4.8 points.

## Why it matters here

This is a clean negative result for unsupervised skill self-maintenance: an expert skill is valuable mostly for what the model does not already know, and that is exactly what feedback-free rewriting erases. Any skill-evolution loop we run needs feedback or a guard on out-of-prior content. It pairs with stale skills (2630) and coverage-guided evolution (2660).

## Key ideas

- **Setup.** Models rewrite expert skills for many rounds with no task, run or judgment; agents on the same models then use the rewritten skills.
- **Result.** Every tested model performs worse with rewritten skills on every benchmark, by 15 points on average on SkillsBench after thirty rounds.
- **Mechanism.** Comparing with skills each model writes from the topic alone shows rewriting drifts toward the model's prior and loses out-of-prior knowledge first; restoring that knowledge recovers much of the loss.
- **SkillDiff.** Marks the out-of-prior knowledge in place, with no feedback and no change to the skill text, for +4.8 points on SkillsBench on average.

## Caveats

Abstract-level read of the v1 preprint (Friday 20 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. The setting is deliberately feedback-free; loops with execution feedback may behave differently. Results centre on SkillsBench.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.25534
- PDF: https://arxiv.org/pdf/2611.25534
- HTML: https://arxiv.org/html/2611.25534v1
- Code: https://github.com/LitaoGuo/How-Self-Evolution-Reshapes-Skills
