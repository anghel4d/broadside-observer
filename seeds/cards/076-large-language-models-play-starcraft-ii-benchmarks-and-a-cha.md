---
title: "Large Language Models Play StarCraft II: Benchmarks and A Chain of Summarization Approach"
authors:
  - "Weiyu Ma"
  - "Qirui Mi"
  - "Yongcheng Zeng"
  - "Xue Yan"
  - "Yuqiao Wu"
  - "Runji Lin"
  - "Haifeng Zhang"
  - "Jun Wang"
year: 2024
venue: "NeurIPS"
arxiv: "2312.11865"
doi: null
source: "https://arxiv.org/abs/2312.11865"
topics:
  - rts-bots
  - nl-commands
seed_rank: 76
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
cites:
  - title: "LLM-PySC2: Starcraft II learning environment for Large Language Models"
    url: "https://arxiv.org/abs/2411.05348"
    year: 2024
    arxiv: "2411.05348"
    doi: null
  - title: "Grandmaster level in StarCraft II using multi-agent reinforcement learning"
    url: "https://doi.org/10.1038/s41586-019-1724-z"
    year: 2019
    arxiv: null
    doi: "10.1038/s41586-019-1724-z"
  - title: "The StarCraft Multi-Agent Challenge"
    url: "https://arxiv.org/abs/1902.04043"
    year: 2019
    arxiv: "1902.04043"
    doi: null
see:
  - "190-llm-pysc2-starcraft-ii-learning-environment-for-large-langua"
  - "010-the-starcraft-multi-agent-challenge"
---

# Large Language Models Play StarCraft II: Benchmarks and A Chain of Summarization Approach

## One-sentence takeaway

TextStarCraft II exposes StarCraft II as a textual environment, and Chain of Summarization compresses raw frames then multi-frame game state into strategic commands an LLM can issue.

## Why it matters here

GRID COMMAND and Broadside already want natural-language RTS control; TextStarCraft II plus CoS is the interface pattern — summarize the foggy frame, then decide.

## Key ideas

- AlphaStar-style agents are strong at micro but weak at long-term interpretable strategy; the paper tests whether LLMs can fill that gap.
- Single-frame summarization turns raw observations into text; multi-frame summarization analyzes game info, recommends commands, and emits strategy.
- Human experts judge the LLM agents close to an eight-year average SC2 player; agents beat the built-in AI at Harder (Lv5).
- Evaluation splits knowledge/planning interviews from in-game win rate and CoS ablations.
- Code and demo videos are released with the paper.

## Caveats

## Links

- arXiv: [2312.11865](https://arxiv.org/abs/2312.11865)
- PDF: https://arxiv.org/pdf/2312.11865
