---
title: "Agentic Harness Engineering Beta: Requirement-Centered Evolution of Agent Harnesses"
authors:
  - "Jiahang Lin"
  - "Jiahao Chen"
  - "Yiding Wang"
  - "Shichun Liu"
  - "Chengjun Pan"
  - "Shihan Dou"
  - "Honglin Guo"
  - "Yuyang Hu"
  - "Changhao Jiang"
  - "Zhenhua Han"
  - "Hang Yan"
  - "Qi Zhang"
  - "Tao Gui"
  - "Xuanjing Huang"
year: 2026
venue: "arXiv preprint (cs.SE)"
arxiv: "2611.24924"
doi: null
source: "https://arxiv.org/abs/2611.24924"
version_reviewed: "v1"
topics:
  - "agent-failure-localization"
  - "continual-agent-skills"
seed_rank: 2657
seed_batch: "frontier-2026-11-20"
reviewed: "2026-11-20"
pool: "agents"
relevance_score: 8
see:
  - 001-swe-agent-agent-computer-interfaces-enable-automated-softwar
  - 006-voyager-an-open-ended-embodied-agent-with-large-language-mod
  - 072-agent-workflow-memory
  - 081-reflexion-language-agents-with-verbal-reinforcement-learning
  - 084-swe-bench-can-language-models-resolve-real-world-github-issu
cites:
  - title: "Agentic Harness Engineering Beta: Requirement-Centered Evolution of Agent Harnesses"
    url: "https://arxiv.org/abs/2611.24924"
    year: 2026
    arxiv: "2611.24924"
    doi: null
---

# Agentic Harness Engineering Beta: Requirement-Centered Evolution of Agent Harnesses

## One-sentence takeaway

AHE-Beta evolves an agent harness from requirements that simulated users raise as issues, implements them as team-built general changes and merges only those that resolve a verified requirement and pass review, raising held-out pass@1 from 21.9% to 33.3% with 40.8% fewer tokens and transferring to other models without further evolution.

## Why it matters here

This is harness-side improvement with software-engineering discipline: issues, review and merge gates instead of score-chasing patches. That matches how we want self-improving harnesses to work, and the transfer to GLM-5.3 and DeepSeek-V4.1-Flash is more evidence that harness gains are partly model-independent (see the harness ladder in 2627 and the resolution hypothesis in 2628).

## Key ideas

- **User-driven evaluation.** Simulated users work with the harness over multiple turns and file their requirements as issues.
- **Team-based modification.** Requirements are implemented as general changes rather than task-specific patches.
- **Requirement-driven selection.** A change merges only if it resolves a verified requirement and passes review, which avoids benchmark-specific local optima.
- **Results.** Held-out pass@1 21.9% → 33.3% with 40.8% fewer tokens than the base harness; higher pass@1 than Claude Code, Meta-Harness and AHE; real users preferred it in 31 of 48 valid blind A/B pairs and rated it higher on all five dimensions.
- **Transfer.** Without further evolution, +15.8% pass@1 on GLM-5.3 and +5.3% on DeepSeek-V4.1-Flash over the base harness.

## Caveats

Abstract-level read of the v1 preprint (Thursday 19 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. The user simulator drives evolution, and the human A/B is small (48 valid pairs). Comparisons with Claude Code and other harnesses depend on the authors' task set and configuration.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.24924
- PDF: https://arxiv.org/pdf/2611.24924
- HTML: https://arxiv.org/html/2611.24924v1
- Code: https://github.com/Curry09/AHE-Beta
