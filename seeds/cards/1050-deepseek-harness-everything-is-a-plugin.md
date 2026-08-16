---
title: "DeepSeek Harness: Everything is a Plugin"
authors: ["Yifan Shi", "Wei Zhang", "Tianyi Cui", "DeepSeek"]
year: 2026
venue: "DeepSeek"
arxiv: null
doi: null
source: "https://deepseek.com/harness/en/"
topics: [harness, coding-agents, model-vs-harness]
seed_rank: 1050
seed_batch: "frontier-2026-08-16"
reviewed: "2026-08-16"
pool: "agents"
relevance_score: 9
lineage: model-vs-harness
cites:
  - title: "A Programming Paradigm for Spatiotemporal Composability"
    url: "https://github.com/cordiverse/paper"
    year: 2026
    arxiv: null
    doi: null
  - title: "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering"
    url: "https://arxiv.org/abs/2405.15793"
    year: 2024
    arxiv: "2405.15793"
    doi: null
  - title: "Stop comparing LLM agents without disclosing the harness"
    url: "https://arxiv.org/abs/2605.23950"
    year: 2026
    arxiv: "2605.23950"
    doi: null
  - title: "QuoteBench: How Matched Scores Can Hide Command-Path Failures"
    url: "https://arxiv.org/abs/2608.13547"
    year: 2026
    arxiv: "2608.13547"
    doi: null
  - title: "The OpenHands Software Agent SDK: A Composable and Extensible Foundation for Production Agents"
    url: "https://arxiv.org/abs/2511.03690"
    year: 2025
    arxiv: "2511.03690"
    doi: null
see:
  - "001-swe-agent-agent-computer-interfaces-enable-automated-softwar"
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
  - "180-the-openhands-software-agent-sdk-a-composable-and-extensible"
  - "1000-deepseek-v4-pro-0813-ga"
  - "1013-quotebench-how-matched-scores-can-hide-command-path-failures"
  - "1018-correct-is-not-governed-provenance-integrity-in-agentic-workflows"
---

# DeepSeek Harness: Everything is a Plugin

## One-sentence takeaway

DeepSeek first-party agent runtime dsh makes the model a plugin among plugins: Cordis mounts revertible effects for tools, loop, sandbox, and UI, and an append-only session log is the only source of what the model is allowed to see.

## Why it matters here

Card 1000 is the V4-Pro-0813 model. This is the complementary harness last Frontier missed. Standing topic is model-vs-harness, not another DeepSeek-eval. GRID COMMAND needs a replaceable command path (Minimal mode is bash plus str_replace_editor). Anoptic/ano care that the loop, tool registry, and session log are unloadable effects rather than a privileged core. QuoteBench already showed matched scores hiding command-path collapse; here the vendor ships the seam as source.

## Key ideas

- Cordis kernel (Shi/Zhang/Cui, draft 2026-08-13): temporal composability equals revertible effects (every context transform carries a tracked inverse); spatial composability equals reactive coeffects (context change notifies against a coeffect spec). Unified into one context type; metatheory lifts from one component to interleaved systems. Implementation: effect tracking, coeffect resolution, declarative loader, config reconciliation, hot module replacement. Shi is PKU/DeepSeek (Koishi/Shigma); Cui leads the harness.
- Product slogan is literal: model adapter, tool registry, session log, and the agent loop itself are plugins. No privileged core to patch; mount a plugin beside the others; registrations unwind on unload.
- Profiles stack bundles (dsh-base then dsh-web-app or dsh-headless) then cordis.patch.yml. Modes: Standard (full toolset), Code (TypeScript SDK over the same tools), Minimal (two-tool bench harness), Creator (in-memory plugin experiments).
- Session log is the source of model-visible context. deriveMessages() projects history from it; a runtime invariant asserts anything that reaches a model request is reconstructable from the log. Fork, resume, Trajectory view, telemetry, and persistence all derive from the same append-only SessionEvent stream.
- Turn/step protocol: agent/pre-step may rewrite or reject claimed messages; tool pipeline is pre-execute then execute then post-execute; capability seams (fs, subprocess, sandbox, subagents) swap providers without forking consumers. Subagent providers can be a child dsh or a host-PATH Claude Code / Codex binary.

## Caveats

- Developer preview: APIs and plugin interfaces are explicitly compatibility-breaking.
- Recency is slightly stretched: GitHub created 2026-08-13 11:56 UTC (Thu 14:56 Bucharest), about 21h before last Frontier (Fri 12:00). Last Frontier's DeepSeek poll wrote "no newer first-party drop" after minting only V4-Pro. Press continued Aug 13-14. Not a remint of 1000; not a third-party DeepSeek-eval.
- Cordis is a GitHub preprint PDF, not arXiv. Product page and architecture docs are first-party; do not cite third-party handbooks as canon.
- Same-day (Sun 16:00 UTC) DeepSeek API peak/off-peak price flip is the already-announced V4-Pro schedule, not a new drop.

## Links

- Product: https://deepseek.com/harness/en/
- Source: https://github.com/deepseek-ai/deepseek-harness
- Architecture: https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md
- Cordis paper: https://github.com/cordiverse/paper
- Cordis runtime: https://github.com/cordiverse/cordis
