---
title: "What to Practice Next? Latent Profile-Guided Task Selection for Skill-Evolving LLM Agents"
authors:
  - "Qijin Zhang"
  - "Hanzhen Wang"
  - "Yan Huang"
  - "Zhongxiang Dai"
  - "Shuang Qiu"
year: 2026
venue: "arXiv preprint (cs.LG)"
arxiv: "2611.18818"
doi: null
source: "https://arxiv.org/abs/2611.18818"
version_reviewed: "v1"
topics:
  - "autoresearch-experiment-selection"
  - "continual-agent-skills"
seed_rank: 2629
seed_batch: "frontier-2026-11-18"
reviewed: "2026-11-18"
pool: "agents"
relevance_score: 7
see:
  - 1015-practice-makes-unsafe-skill-misevolution-in-self-improving-llm-agents
  - 1227-formal-mathematics-statement-curriculum-learning
cites:
  - title: "What to Practice Next? Latent Profile-Guided Task Selection for Skill-Evolving LLM Agents"
    url: "https://arxiv.org/abs/2611.18818"
    year: 2026
    arxiv: "2611.18818"
    doi: null
---

# What to Practice Next? Latent Profile-Guided Task Selection for Skill-Evolving LLM Agents

## One-sentence takeaway

SPG-Select allocates a limited practice budget for skill-evolving agents by inferring a multidimensional skill profile from binary task outcomes (MIRT) and practising where predicted progress on the largest proficiency gaps is highest, beating uniform task sampling in all six backend-benchmark pairs on ALFWorld and WebShop.

## Why it matters here

Rehearsal and practice loops are a standing topic, and "what should the agent practise next?" is the scheduling question inside them. This gives a principled, cheap answer that works from pass/fail outcomes only, plugs into existing skill-evolution backends, and comes with a regret bound; it is a concrete alternative to fixed schedules for our own practice loops.

## Key ideas

- **Problem.** Fixed practice schedules or scalar progress measures ignore that skill demands differ across tasks and change over time.
- **Profile.** A multidimensional latent skill profile is inferred from binary outcomes with multidimensional item response theory (MIRT).
- **Selection.** Predict surrogate progress (difference between consecutive profile estimates) and prioritise dimensions with larger estimated proficiency gaps; SPG-Select-R adds uncertainty-based exploration and periodic restarts for nonstationarity.
- **Evidence.** Higher mean held-out terminal success than uniform sampling in all six backend-benchmark combinations: +1.49 to +13.18 points on ALFWorld and +0.93 to +3.13 on WebShop, across three skill-evolution backends.
- **Theory.** High-probability dynamic pseudo-regret bound under a predictable linear surrogate model and boundedness assumptions.

## Caveats

Abstract-level read of the v1 preprint (Tuesday 17 Nov 2026 listing). Gains on WebShop are small; benchmarks are ALFWorld and WebShop only, and the regret bound holds under the stated linear-surrogate assumptions.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.18818
- PDF: https://arxiv.org/pdf/2611.18818
- HTML: https://arxiv.org/html/2611.18818v1
