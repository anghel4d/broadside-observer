---
title: "Harness Engineering: Anatomy, Architecture, and Evolution of Coding Agents -- A Source-Code Study of Eleven Systems"
authors:
  - "Paul Barbaste"
  - "Tristan Darrigol"
  - "Germain Vu"
  - "Tom Wiltberger"
year: 2026
venue: "arXiv:cs.SE"
arxiv: "2609.00006"
doi: null
source: "https://arxiv.org/abs/2609.00006"
topics:
  - "agent-failure-localization"
  - "agentic-llm-serving"
seed_rank: 1536
seed_batch: "frontier-2026-09-02"
reviewed: "2026-09-02"
pool: "agents"
relevance_score: 10
lineage: agent-harness-runtime
cites:
  - title: "DeepSeek Harness: Everything is a Plugin"
    url: "https://deepseek.com/harness/en/"
    year: 2026
    arxiv: null
    doi: null
  - title: "HELIX: Model-Harness Co-evolution for Recursive Self-Improvement"
    url: "https://arxiv.org/abs/2608.13951"
    year: 2026
    arxiv: "2608.13951"
    doi: null
  - title: "LoopsBench: From Harness Engineering to Loop Engineering in Coding Agent Evaluation"
    url: "https://arxiv.org/abs/2608.00267"
    year: 2026
    arxiv: "2608.00267"
    doi: null
  - title: "JIT-Agent: Scaling Harness Intelligence via Just-in-Time Harness Evolution"
    url: "https://arxiv.org/abs/2608.25593"
    year: 2026
    arxiv: "2608.25593"
    doi: null
see:
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "1079-helix-model-harness-co-evolution-for-recursive-self-improvement"
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
  - "1447-jit-agent-scaling-harness-intelligence-via-just-in-time"
  - "1119-harness-continual-learning-continual-adaptation-beyond-model-par"
---
# Harness Engineering: Anatomy, Architecture, and Evolution of Coding Agents -- A Source-Code Study of Eleven Systems

## One-sentence takeaway

An agent is a model plus a harness: a source-code anatomy of eleven production coding harnesses founds harness engineering as an empirical discipline.

## Why it matters here

Broadside's standing claim — capability is harness-dominated — finally has a comparative anatomy of Claude Code, Codex, OpenHands, and peers rather than one-off folklore. Cordis/dsh (1050) and HELIX (1079) need this map before inventing yet another plugin ABI.

## Key ideas

- Defines the harness as the runtime that couples an LLM to the world: loop, tools, context management, safety, orchestration, extension surfaces.
- Source-code study of eleven production coding agents (Claude Code, Codex, Gemini CLI, OpenCode, OpenHands, Goose, Aider, and peers named in the paper).
- Extracts shared anatomy and evolutionary pressure: context budgets, tool surfaces, safety gates, multi-agent orchestration, and extension hooks.
- Positions harness engineering (named early 2026) as design-and-evolution of that runtime, not prompt craft.

## Caveats

- Anatomy is descriptive; it does not prove which cut is optimal for GRID COMMAND or Broadside radar.
- Eleven systems is a snapshot — vendor CLIs churn weekly; treat stems as living, not frozen.
- Distinct from Aug-28 near-keeper 2608.26197 (different paper, same slogan); do not conflate IDs.

## Links

- arXiv: [2609.00006](https://arxiv.org/abs/2609.00006)
- PDF: https://arxiv.org/pdf/2609.00006
