---
title: "Agentless: Demystifying LLM-based Software Engineering Agents"
authors:
  - "Chunqiu Steven Xia"
  - "Yinlin Deng"
  - "Soren Dunn"
  - "Lingming Zhang"
year: 2024
venue: "arXiv:cs.SE"
arxiv: "2407.01489"
doi: null
source: "https://arxiv.org/abs/2407.01489"
topics:
  - coding-agents
  - harness
seed_rank: 182
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
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
  - title: "Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments"
    url: "https://arxiv.org/abs/2607.28591"
    year: 2026
    arxiv: "2607.28591"
    doi: null
see:
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
  - "051-auto-configuring-scientific-simulators-with-lightweight-codi"
  - "052-change2task-from-repository-changes-to-executable-coding-age"
---

# Agentless: Demystifying LLM-based Software Engineering Agents

## One-sentence takeaway

Agentless solves SWE-bench Lite with a fixed localize–repair–validate pipeline and no autonomous tool loop, posting 32% (96 fixes) at $0.70 — above the open agent baselines the authors compare.

## Why it matters here

Before Broadside or Anoptic grows another ReAct coding agent, this is the baseline that must lose: a dumb three-phase harness may already be the model, and “the agent chose the wrong tool” may be harness theatre.

## Key ideas

- Autonomous SWE agents plan, call tools, and observe the environment; Agentless asks whether that complexity is required.
- The pipeline is localization, then repair, then patch validation, with the LLM never choosing the next action or driving a shell.
- On SWE-bench Lite the authors report 32.00% (96 correct fixes) at $0.70, the best among compared open systems at the time.
- Manual audit of Lite finds issues with leaked ground-truth patches or misleading descriptions; SWE-bench Lite-S drops those for a stricter comparison.
- The paper's claim is methodological: reset the baseline for autonomous SWE agents to this simple, interpretable pipeline.

## Caveats

## Links

- arXiv: [2407.01489](https://arxiv.org/abs/2407.01489)
