---
title: "The OpenHands Software Agent SDK: A Composable and Extensible Foundation for Production Agents"
authors:
  - "Xingyao Wang"
  - "Simon Rosenberg"
  - "Juan Michelini"
  - "Calvin Smith"
  - "Hoang Tran"
  - "Engel Nyst"
  - "Rohit Malhotra"
  - "Xuhui Zhou"
  - "Valerie Chen"
  - "Robert Brennan"
  - "Graham Neubig"
year: 2025
venue: "MLSys"
arxiv: "2511.03690"
doi: null
source: "https://arxiv.org/abs/2511.03690"
topics:
  - provenance
  - rag
  - coding-agents
  - harness
seed_rank: 180
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
  - title: "Coupling Planning with Episodic Memory in LLM Agents for Software Issue Resolution"
    url: "https://arxiv.org/abs/2608.06811"
    year: 2026
    arxiv: "2608.06811"
    doi: null
  - title: "LoopsBench: From Harness Engineering to Loop Engineering in Coding Agent Evaluation"
    url: "https://arxiv.org/abs/2608.00267"
    year: 2026
    arxiv: "2608.00267"
    doi: null
see:
  - "052-change2task-from-repository-changes-to-executable-coding-age"
  - "055-coupling-planning-with-episodic-memory-in-llm-agents-for-sof"
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
---

# The OpenHands Software Agent SDK: A Composable and Extensible Foundation for Production Agents

## One-sentence takeaway

The OpenHands Software Agent SDK rebuilds OpenHands' agent core as a small default interface with sandbox-portable execution, multi-LLM routing, lifecycle control, and built-in security analysis.

## Why it matters here

This is the production shape of a coding-agent harness: local and remote sandboxes, REST/WebSocket control, VS Code/VNC/CLI faces, and a measured drop in system-attributable failures from V0 to V1. Broadside should steal the SDK boundaries, not the product UI.

## Key ideas

- Production agents need three things the paper treats as first-class: a tiny implementation surface, reliable sandboxed execution, and human-facing interfaces.
- The default agent is a few lines of code; custom tools, memory, and full-featured agents are extensions of that interface.
- Local-to-remote execution portability, REST/WebSocket services, and visual workspaces (VS Code, VNC, browser) are part of the SDK rather than host-specific glue.
- Relative to OpenAI, Claude, and Google SDKs, the authors claim native sandboxing, lifecycle control, model-agnostic routing, and security analysis as the distinguishing bundle.
- Production data is reported to show V1 cutting system-attributable failures versus V0 with negligible event-sourcing overhead.

## Caveats

## Links

- arXiv: [2511.03690](https://arxiv.org/abs/2511.03690)
