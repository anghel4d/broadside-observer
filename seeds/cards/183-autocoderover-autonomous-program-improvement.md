---
title: "AutoCodeRover: Autonomous Program Improvement"
authors:
  - "Yuntong Zhang"
  - "Haifeng Ruan"
  - "Zhiyu Fan"
  - "Abhik Roychoudhury"
year: 2024
venue: "ISSTA"
arxiv: "2404.05427"
doi: null
source: "https://arxiv.org/abs/2404.05427"
topics:
  - rag
  - retrieval
  - coding-agents
  - harness
seed_rank: 183
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments"
    url: "https://arxiv.org/abs/2607.28591"
    year: 2026
    arxiv: "2607.28591"
    doi: null
  - title: "CodeGrep: An RL-Trained Retrieval Agent for LLM Coding Agents"
    url: "https://arxiv.org/abs/2608.05886"
    year: 2026
    arxiv: "2608.05886"
    doi: null
  - title: "Coupling Planning with Episodic Memory in LLM Agents for Software Issue Resolution"
    url: "https://arxiv.org/abs/2608.06811"
    year: 2026
    arxiv: "2608.06811"
    doi: null
see:
  - "052-change2task-from-repository-changes-to-executable-coding-age"
  - "053-codegrep-an-rl-trained-retrieval-agent-for-llm-coding-agents"
  - "055-coupling-planning-with-episodic-memory-in-llm-agents-for-sof"
---

# AutoCodeRover: Autonomous Program Improvement

## One-sentence takeaway

AutoCodeRover patches GitHub issues by walking the AST with class/method-structured search and optional spectrum-based fault localization, reaching 19% on SWE-bench-lite at about $0.43.

## Why it matters here

Anoptic engine repair should search a program, not a bag of files: class/method retrieval plus tests-as-spectrum is the SE-shaped alternative to a general tool-using agent, and the cost number is the one to beat.

## Key ideas

- The outlook is software-engineering-first: the project is an AST, not a directory the LLM greps.
- Iterative code search uses class and method structure to retrieve a root-cause context.
- When a test suite exists, spectrum-based fault localization further narrows that context.
- On 300 SWE-bench-lite issues the authors report 19% resolved, above the then-reported SWE-agent figure, at $0.43 average.
- The intended future is autonomous improvement of already-generated code, not only issue-to-patch demos.

## Caveats

## Links

- arXiv: [2404.05427](https://arxiv.org/abs/2404.05427)
