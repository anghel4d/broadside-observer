---
title: "System-One RSI: Building Muscle Memory for Interactive Agents through Guided Practice"
authors:
  - "Qingxu Fu"
  - "Xuanfa Jin"
  - "Ziqian Chen"
  - "Zhaoyang Liu"
  - "Bolin Ding"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.26007"
doi: null
source: "https://arxiv.org/abs/2611.26007"
version_reviewed: "v1"
topics:
  - "autoresearch-experiment-selection"
  - "continual-agent-skills"
seed_rank: 2661
seed_batch: "frontier-2026-11-20"
reviewed: "2026-11-20"
pool: "game-ai"
relevance_score: 8
see:
  - 006-voyager-an-open-ended-embodied-agent-with-large-language-mod
  - 081-reflexion-language-agents-with-verbal-reinforcement-learning
  - 192-osworld-benchmarking-multimodal-agents-for-open-ended-tasks-
cites:
  - title: "System-One RSI: Building Muscle Memory for Interactive Agents through Guided Practice"
    url: "https://arxiv.org/abs/2611.26007"
    year: 2026
    arxiv: "2611.26007"
    doi: null
---

# System-One RSI: Building Muscle Memory for Interactive Agents through Guided Practice

## One-sentence takeaway

System-One RSI pairs a fast inner OODA loop (a 27B decision model plus a decision tree issuing timed actions) with an offline team of reasoning agents that revise the prompt and tree, derive supervision from interaction records and retrain, building 'muscle memory' from few real episodes: mean Snake score rises from 1.30 to 7.35 and a Black Myth: Wukong offensive policy goes from 0% to 66.7% wins in the evaluated configurations.

## Why it matters here

This is a rehearsal/practice loop in concrete form: slow agents coach a fast policy between rounds, and the fast policy runs without calling a reasoner at decision time. For GRID COMMAND it is a template for real-time unit control where deliberation is too slow: a cheap reactive layer plus an offline improvement loop that consolidates experience into it.

## Key ideas

- **Inner loop.** Observe-Orient-Decide-Act: a decision model maps each visual observation and task question to structured judgments, and a decision tree turns them into timed actions without a reasoning model.
- **Outer loop.** A team of reasoning agents revises the decision-model prompt and decision tree, captures interaction records, derives supervision and trains or deploys updated parameters.
- **Few episodes.** No expert demonstrations, environment modification, sandboxing or parallel simulation.
- **Results.** Snake mean score 1.30 → 7.35; Zenless Zone Zero median completion time −8.4% in one scenario; Black Myth: Wukong evasive policy reaches 11x the survival time of a stationary reference and offensive win rate rises from 0% to 66.7% across evaluated configurations.

## Caveats

Abstract-level read of the v1 preprint (Friday 20 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. Results are per evaluated scenario in commercial games, with small episode counts, not general game-playing benchmarks.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.26007
- PDF: https://arxiv.org/pdf/2611.26007
- HTML: https://arxiv.org/html/2611.26007v1
