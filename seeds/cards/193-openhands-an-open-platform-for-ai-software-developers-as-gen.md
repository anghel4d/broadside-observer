---
title: "OpenHands: An Open Platform for AI Software Developers as Generalist Agents"
authors:
  - "Xingyao Wang"
  - "Boxuan Li"
  - "Yufan Song"
  - "Frank F. Xu"
  - "Xiangru Tang"
  - "Mingchen Zhuge"
  - "Jiayi Pan"
  - "Yueqi Song"
  - "Bowen Li"
  - "Jaskirat Singh"
  - "Hoang H. Tran"
  - "Fuqiang Li"
  - "Ren Ma"
  - "Mingzhang Zheng"
  - "Bill Qian"
  - "Yanjun Shao"
  - "Niklas Muennighoff"
  - "Yizhe Zhang"
  - "Binyuan Hui"
  - "Junyang Lin"
  - "Robert Brennan"
  - "Hao Peng"
  - "Heng Ji"
  - "Graham Neubig"
year: 2024
venue: "ICLR"
arxiv: "2407.16741"
doi: null
source: "https://arxiv.org/abs/2407.16741"
topics:
  - coding-agents
  - harness
  - agent-eval
seed_rank: 193
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "Learn-by-interact: A Data-Centric Framework for Self-Adaptive Agents in Realistic Environments"
    url: "https://arxiv.org/abs/2501.10893"
    year: 2025
    arxiv: "2501.10893"
    doi: null
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
  - title: "Auto-Configuring Scientific Simulators with Lightweight Coding-Agent Adapters"
    url: "https://arxiv.org/abs/2606.09774"
    year: 2026
    arxiv: "2606.09774"
    doi: null
see:
  - "177-learn-by-interact-a-data-centric-framework-for-self-adaptive"
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
  - "051-auto-configuring-scientific-simulators-with-lightweight-codi"
---

# OpenHands: An Open Platform for AI Software Developers as Generalist Agents

## One-sentence takeaway

OpenHands (formerly OpenDevin) is an MIT-licensed platform where agents write code, use a shell, and browse the web inside sandboxes, with multi-agent coordination and a built-in eval harness.

## Why it matters here

This is the reference ACI for software-developer agents: sandbox, tools that match a human developer, and a bench suite that already includes SWE-bench and WebArena. Later OpenHands SDK work (card 180) rebuilds this core.

## Key ideas

- Agents should act like human developers: edit code, run commands, browse docs — not only emit a single patch.
- The platform supports implementing new agents, sandboxed execution, multi-agent coordination, and plugging in evaluation benchmarks.
- An evaluation over 15 tasks includes software engineering (SWE-bench) and web browsing (WebArena) among others.
- The project is community-run (the paper cites 2.1K contributions from 188+ contributors) under MIT.
- OpenHands is the system; the later Software Agent SDK is the production redesign of its agent components.

## Caveats

## Links

- arXiv: [2407.16741](https://arxiv.org/abs/2407.16741)
- Code: https://github.com/All-Hands-AI/OpenHands
