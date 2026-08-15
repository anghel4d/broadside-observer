---
title: "The Evolution of Tool Use in LLM Agents: From Single-Tool Call to Multi-Tool Orchestration"
authors:
  - "Haoyuan Xu"
  - "Chang Li"
  - "Xinyan Ma"
  - "Xianhao Ou"
  - "Zihan Zhang"
  - "Tao He"
  - "Xiangyu Liu"
  - "Zixiang Wang"
  - "Jiafeng Liang"
  - "Zheng Chu"
  - "Runxuan Liu"
  - "Rongchuan Mu"
  - "Dandan Tu"
  - "Ming Liu"
  - "Bing Qin"
year: 2026
venue: "arXiv:cs.SE"
arxiv: "2603.22862"
doi: null
source: "https://arxiv.org/abs/2603.22862"
topics:
  - tool-use
  - react
  - provenance
  - rag
  - coding-agents
  - harness
seed_rank: 66
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Toolformer: Language Models Can Teach Themselves to Use Tools"
    url: "https://arxiv.org/abs/2302.04761"
    year: 2023
    arxiv: "2302.04761"
    doi: null
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2022
    arxiv: "2210.03629"
    doi: null
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
see:
  - "086-toolformer-language-models-can-teach-themselves-to-use-tools"
  - "007-react-synergizing-reasoning-and-acting-in-language-models"
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
---

# The Evolution of Tool Use in LLM Agents: From Single-Tool Call to Multi-Tool Orchestration

## One-sentence takeaway

The survey relocates the tool-use problem from "pick the right API once" to long-horizon multi-tool orchestration under intermediate state, execution feedback, and safety/cost/verifiability constraints.

## Why it matters here

Ano, GRID COMMAND, and Broadside agents already live on the orchestration side of that split; the six-dimension taxonomy is a checklist for harness design rather than another single-call benchmark.

## Key ideas

- Early work asked whether a model could select and execute one correct tool call; current systems must plan over changing environments with feedback.
- Six organizing dimensions: inference-time planning and execution, training and trajectory construction, safety and control, efficiency under resource constraints, capability completeness in open environments, and benchmark design.
- Application slices cover software engineering, enterprise workflows, GUIs, and mobile systems.
- Single-call tool use and long-horizon orchestration are treated as distinct task formulations, not the same leaderboard.
- The closing agenda is reliable, scalable, verifiable multi-tool agents.

## Caveats

## Links

- arXiv: [2603.22862](https://arxiv.org/abs/2603.22862)
- PDF: https://arxiv.org/pdf/2603.22862
