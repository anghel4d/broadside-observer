---
title: "OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments"
authors:
  - "Tianbao Xie"
  - "Danyang Zhang"
  - "Jixuan Chen"
  - "Xiaochuan Li"
  - "Siheng Zhao"
  - "Ruisheng Cao"
  - "Toh Jing Hua"
  - "Zhoujun Cheng"
  - "Dongchan Shin"
  - "Fangyu Lei"
  - "Yitao Liu"
  - "Yiheng Xu"
  - "Shuyan Zhou"
  - "Silvio Savarese"
  - "Caiming Xiong"
  - "Victor Zhong"
  - "Tao Yu"
year: 2024
venue: "arXiv:cs.AI"
arxiv: "2404.07972"
doi: null
source: "https://arxiv.org/abs/2404.07972"
topics:
  - provenance
  - rag
  - agent-eval
  - harness
  - computer-use-agents
seed_rank: 192
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "The BrowserGym Ecosystem for Web Agent Research"
    url: "https://arxiv.org/abs/2412.05467"
    year: 2024
    arxiv: "2412.05467"
    doi: null
  - title: "Mobile-Agent-v3.5: Multi-platform Fundamental GUI Agents"
    url: "https://arxiv.org/abs/2602.16855"
    year: 2026
    arxiv: "2602.16855"
    doi: null
  - title: "Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents"
    url: "https://arxiv.org/abs/2605.20616"
    year: 2026
    arxiv: "2605.20616"
    doi: null
see:
  - "079-the-browsergym-ecosystem-for-web-agent-research"
---

# OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments

## One-sentence takeaway

OSWorld is a real Ubuntu/Windows/macOS computer environment with 369 execution-graded open-ended tasks; humans exceed 72% success while the best LLM/VLM agent of the paper reaches 12%.

## Why it matters here

Computer-use agents for Broadside and GRID COMMAND cannot be scored on static screenshots. OSWorld is the harness pattern: real apps, initial-state setup, execution-based eval — and it shows GUI grounding, not planning prose, is the current cliff.

## Key ideas

- Prior benchmarks either lack a live environment or lock the agent into one app or domain.
- OSWorld provides task setup, execution-based evaluation, and interactive learning across three desktop operating systems.
- The accompanying benchmark has 369 tasks over real web and desktop apps, OS file I/O, and multi-app workflows, each with a setup config and a custom grader.
- Human success is over 72.36%; the best model in the paper reaches 12.24%, failing mainly on GUI grounding and operational knowledge.
- Environment, baselines, and data are published at https://os-world.github.io.

## Caveats

## Links

- arXiv: [2404.07972](https://arxiv.org/abs/2404.07972)
- Project: https://os-world.github.io
