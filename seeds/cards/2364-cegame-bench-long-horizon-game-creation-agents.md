---
title: "From Code to Playable Systems: CEGame-Bench for Long-Horizon Game Creation Agents"
authors:
  - "Zixuan Dong"
  - "Yanghai Wang"
  - "Hanyan Bian"
  - "Jiaxi Tao"
  - "Junze Li"
  - "Jiadong Wang"
  - "Xinyu Che"
  - "Lin Liu"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2610.26098"
doi: null
source: "https://arxiv.org/abs/2610.26098"
topics:
  - "procedural-content-codegen"
  - "agent-failure-localization"
seed_rank: 2364
seed_batch: "frontier-2026-10-20"
reviewed: "2026-10-20"
pool: "game-ai"
relevance_score: 8
cites:
  - title: "From Code to Playable Systems: CEGame-Bench for Long-Horizon Game Creation Agents"
    url: "https://arxiv.org/abs/2610.26098"
    year: 2026
    arxiv: "2610.26098"
    doi: null
see:
  - 2343-starskirmish-bench-v0-2-llms-write-starcraft-brood-war-bots
---

# From Code to Playable Systems: CEGame-Bench for Long-Horizon Game Creation Agents

## One-sentence takeaway

CEGame-Bench asks coding agents to build complete single-player games from an empty project and a design document on five production engines (Defold, Godot, Roblox Studio, Unity, Unreal Engine), accepting a game only when a hidden evaluator can play it with real input; across seven model and scaffold configurations, agents earn most integration points but usually under half the gameplay points and reach the game's ending in only 16% of runs, while engineer-plus-agent references score near the maximum.

## Why it matters here

GRID COMMAND and Anoptic are games and engines built with heavy agent help, so "the build succeeds" versus "a player can finish it" is the gap that matters day to day. The benchmark's contract style (design document as checkable rules plus a required state interface) and its Game Completion Boost skill (requirement-driven playtesting and repair) are directly reusable patterns for agent-built game features, and the finding that engines with stricter pre-play checks score higher argues for strong static validation in Broadside's own toolchain.

## Key ideas

- **Contract-driven evaluation.** Each design document doubles as a natural-language contract of checkable rules and a required state interface, so one hidden evaluator can accept any implementation on any engine by playing it.
- **Long runs.** Runs average up to 295 steps and 65M tokens; nine in ten runs deliver before the time limit, and neither steps nor tokens track the score.
- **Configurations.** Codex CLI with GPT-6 Astra, GPT-5.6 Sol, GPT-5.6 Terra and DeepSeek-V4-Pro (isolating the model); DeepSeek-V4-Pro also under DeepSeek Harness (isolating the scaffold); Claude Opus 5 in Claude Code; Kimi K3 in Kimi Code. GPT-6 Astra under Codex has the best score on every engine (65.0 of 90 across all engines) and is the only configuration that clears half the gameplay points on every engine; the next best manages at most 41.0, against 87.3 for the references.
- **The engine is a variable.** No two engines rank configurations alike (Kendall's τ 0.14 to 0.62), and the same game scores higher on the heavyweight engine in five of six engine pairs, by up to 21.5 points, in line with its stricter checks before play.
- **Game Completion Boost.** A lightweight agent skill that maps requirements to player checkpoints, compares game state with visible outcomes, and replays affected paths after repair; it raises the execution-based score of three models under Codex CLI by 14.1 to 24.3 points.

## Caveats

Single-player, offline, specification-driven games only: fun, multiplayer and live services are out of scope. Ten tasks per engine and seven configurations give wide spreads on engine-level rankings, which the authors report. The visual judge shares a model with one evaluated configuration. GCB was tested under one scaffold with three models, not on GPT-6 Astra. References were built by engineers working with coding agents, so they mark what human-directed agents reach, not unaided human skill. Starters, documents and the evaluator are promised on publication. Full Unreal runs can cost tens of millions of tokens.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.26098
- PDF: https://arxiv.org/pdf/2610.26098
