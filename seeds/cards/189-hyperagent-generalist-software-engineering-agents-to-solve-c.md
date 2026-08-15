---
title: "HyperAgent: Generalist Software Engineering Agents to Solve Coding Tasks at Scale"
authors:
  - "Huy Nhat Phan"
  - "Tien N. Nguyen"
  - "Phong X. Nguyen"
  - "Nghi D. Q. Bui"
year: 2024
venue: "arXiv:cs.SE"
arxiv: "2409.16299"
doi: null
source: "https://arxiv.org/abs/2409.16299"
topics:
  - rag
  - retrieval
  - coding-agents
  - harness
  - multi-agent
  - agent-architecture
seed_rank: 189
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"
    url: "https://arxiv.org/abs/2310.06770"
    year: 2023
    arxiv: "2310.06770"
    doi: null
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
  - title: "Agentless: Demystifying LLM-based Software Engineering Agents"
    url: "https://arxiv.org/abs/2407.01489"
    year: 2024
    arxiv: "2407.01489"
    doi: null
  - title: "AutoCodeRover: Autonomous Program Improvement"
    url: "https://arxiv.org/abs/2404.05427"
    year: 2024
    arxiv: "2404.05427"
    doi: null
see:
  - "084-swe-bench-can-language-models-resolve-real-world-github-issu"
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
  - "182-agentless-demystifying-llm-based-software-engineering-agents"
  - "183-autocoderover-autonomous-program-improvement"
---

# HyperAgent: Generalist Software Engineering Agents to Solve Coding Tasks at Scale

## One-sentence takeaway

HyperAgent is a four-agent SE system — Planner, Navigator, Code Editor, Executor — aimed at many languages and task types rather than a single SWE-bench specialist.

## Why it matters here

A generalist Anoptic coding crew should look like this lifecycle (plan, navigate the repo, edit, execute), and it should be scored on issue resolution, repo-level generation, and repair together, not on one leaderboard.

## Key ideas

- Most LLM SE agents are specialized to one function; HyperAgent is explicitly generalist across languages and task kinds.
- Four roles cover the lifecycle: a central Planner plus Navigator, Editor, and Executor child agents talking over an async message queue.
- On SWE-bench Verified / Lite, HyperAgent-Full-1 reports 33.00% / 26.00% resolved; Lite-1 is cheaper ($0.45) at 30.20% / 25.33%.
- RepoExec Pass@5 is 53.33% with auto-retrieved context; Defects4J fault localization Acc@1 is 59.70%, with 82 and 110 correct repairs on v1.2 and v2.
- Ablations show dropping Navigator or Editor hurts resolve rate most; the authors also ship a public GitHub implementation.

## Caveats

## Links

- arXiv: [2409.16299](https://arxiv.org/abs/2409.16299)
