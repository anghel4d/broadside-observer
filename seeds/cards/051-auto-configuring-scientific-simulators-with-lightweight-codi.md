---
title: "Auto-Configuring Scientific Simulators with Lightweight Coding-Agent Adapters"
authors:
  - "Matthew Ho"
  - "Brian Liu"
  - "Jixuan Chen"
  - "Audrey Wang"
  - "Lianhui Qin"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2606.09774"
doi: null
source: "https://arxiv.org/abs/2606.09774"
topics:
  - tool-use
  - react
  - coding-agents
  - harness
seed_rank: 51
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
  - title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"
    url: "https://arxiv.org/abs/2310.06770"
    year: 2023
    arxiv: "2310.06770"
    doi: null
  - title: "Schema First Tool APIs for LLM Agents: A Controlled Study of Tool Misuse, Recovery, and Budgeted Performance"
    url: "https://arxiv.org/abs/2603.13404"
    year: 2026
    arxiv: "2603.13404"
    doi: null
see:
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
  - "084-swe-bench-can-language-models-resolve-real-world-github-issu"
  - "065-schema-first-tool-apis-for-llm-agents-a-controlled-study-of-"
---

# Auto-Configuring Scientific Simulators with Lightweight Coding-Agent Adapters

## One-sentence takeaway

SIGA wraps an off-the-shelf coding agent with the simulator's executable contract — retrieval, procedural memory, callable validation, and validation-gated termination — instead of rebuilding a bespoke simulator agent.

## Why it matters here

Anoptic and GRID COMMAND already sit next to simulators and long-running engine loops; SIGA is a pattern for teaching a frozen coding agent a domain contract without discarding harness-calibrated tool use.

## Key ideas

- Scientific input decks are executable interfaces: simulator vocabulary, cross-file references, schema constraints, and validators must all line up before a run starts.
- Rebuilding the agent loop to specialize for a simulator risks throwing away the file navigation, edit, command, and self-repair behavior already calibrated in coding-agent harnesses.
- Because the contract is small and external, prior trajectories can rewrite adapter contents (self-evolution) without touching the underlying model or loop.
- On GEOS, SIGA lifts TreeSim from 0.720 to 0.789 on harder held-out tasks and cuts across-run standard deviation by about 16× by blocking empty or invalid decks.
- A human calibration shows SIGA matching an expert's three-hour deck quality in about five minutes; transfers to OpenFOAM and LAMMPS are portable but interface-dependent (completion gates vs. memory/retrieval).

## Caveats

## Links

- arXiv: [2606.09774](https://arxiv.org/abs/2606.09774)
- PDF: https://arxiv.org/pdf/2606.09774
