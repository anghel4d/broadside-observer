---
title: "Coupling Planning with Episodic Memory in LLM Agents for Software Issue Resolution"
authors:
  - "Jiahao Zhang"
  - "Yifan Zhang"
  - "Yu Huang"
year: 2026
venue: "arXiv:cs.SE"
arxiv: "2608.06811"
doi: null
source: "https://arxiv.org/abs/2608.06811"
topics:
  - rag
  - retrieval
  - provenance
  - agent-memory
  - coding-agents
  - harness
seed_rank: 55
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?"
    url: "https://arxiv.org/abs/2310.06770"
    year: 2023
    arxiv: "2310.06770"
    doi: null
  - title: "MemGPT: Towards LLMs as Operating Systems"
    url: "https://arxiv.org/abs/2310.08560"
    year: 2023
    arxiv: "2310.08560"
    doi: null
  - title: "Reflexion: Language Agents with Verbal Reinforcement Learning"
    url: "https://arxiv.org/abs/2303.11366"
    year: 2023
    arxiv: "2303.11366"
    doi: null
see:
  - "084-swe-bench-can-language-models-resolve-real-world-github-issu"
  - "004-memgpt-towards-llms-as-operating-systems"
  - "081-reflexion-language-agents-with-verbal-reinforcement-learning"
---

# Coupling Planning with Episodic Memory in LLM Agents for Software Issue Resolution

## One-sentence takeaway

PMCoder couples a hierarchical phase planner with episodic memory so the current plan phase conditions retrieval and memory-derived trajectory statistics drive stuck detection and replanning.

## Why it matters here

Ano issue loops already span exploration, hypothesis, edit, and verify; PMCoder is the argument that planning and memory have to condition each other, and that verification should come from execution, not the agent's own claims.

## Key ideas

- Real issue resolution is a long repair episode (tens to hundreds of steps); isolated planning or isolated memory leaves stale evidence, repeated failed edits, and self-reported "done".
- The coupling is bidirectional: plan phase gates what memory is retrieved; trajectory statistics from memory trigger replans.
- When available, issue-reproduction verdicts ground verification in execution evidence rather than completion claims.
- On SWE-bench Verified, PMCoder resolves about 25 more cases (+5.0 pp) than a harness-matched baseline; Verified-500 ports to Claude Haiku 4.5, DeepSeek-V4-Flash, and OpenHands keep at least +2.8 pp.
- Ablations show the joint planner-memory system beats either component alone and reduces repeated failed actions, empty-patch exits, and context-window exhaustion.

## Caveats

## Links

- arXiv: [2608.06811](https://arxiv.org/abs/2608.06811)
- PDF: https://arxiv.org/pdf/2608.06811
