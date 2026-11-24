---
title: "AutoPILOT: A Visual Agent Harness for Real-Time Gameplay"
authors:
  - "Mark Zhao"
  - "Pengcheng Wang"
  - "Rui Yang"
  - "Jiarui Yao"
  - "Xirui Jiang"
  - "Yuxi Chen"
  - "Bingxuan Li"
  - "Hanyang Chen"
  - "Ke Yang"
  - "Manling Li"
  - "Tong Zhang"
  - "Huan Zhang"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.28202"
doi: null
source: "https://arxiv.org/abs/2611.28202"
version_reviewed: "v1"
topics:
  - "strategy-rts-agents"
  - "harness-engineering"
  - "game-ai-benchmarks"
seed_rank: 2707
seed_batch: "frontier-2026-11-24"
reviewed: "2026-11-24"
pool: "game-ai"
relevance_score: 8
see:
  - 001-swe-agent-agent-computer-interfaces-enable-automated-softwar
  - 006-voyager-an-open-ended-embodied-agent-with-large-language-mod
  - 007-react-synergizing-reasoning-and-acting-in-language-models
  - 081-reflexion-language-agents-with-verbal-reinforcement-learning
  - 192-osworld-benchmarking-multimodal-agents-for-open-ended-tasks-
  - 2315-the-world-won-t-wait-evaluating-and-teaching-agents-under-a-live-clock
  - 2340-deepseek-v4-1-flash-pushing-the-limits-of-kv-cache-compression
cites:
  - title: "AutoPILOT: A Visual Agent Harness for Real-Time Gameplay"
    url: "https://arxiv.org/abs/2611.28202"
    year: 2026
    arxiv: "2611.28202"
    doi: null
  - title: "The World Won't Wait: Evaluating and Teaching Agents under a Live Clock"
    url: "https://arxiv.org/abs/2610.20665"
    year: 2026
    arxiv: "2610.20665"
    doi: null
  - title: "ReAct: Synergizing Reasoning and Acting in Language Models"
    url: "https://arxiv.org/abs/2210.03629"
    year: 2022
    arxiv: "2210.03629"
    doi: null
---

# AutoPILOT: A Visual Agent Harness for Real-Time Gameplay

## One-sentence takeaway

Real-time games break agents because the usual harness turns one model call into at most one action; AutoPILOT lets each call send a primitive action, start an open-loop macro, or write a closed-loop Python controller that keeps playing from screenshots (about every 0.4 s) until a wake event hands control back, raising real-time success with GPT-6.1 Sol from 38.3% (VISTA) to 68.6% on a new 120-game AFK-Bench, and reaching VISTA's final success rate at a fifth of its API cost.

## Why it matters here

For GRID COMMAND this is the right shape for an LLM commander: the model should not micromanage at tick rate; it should write small controllers (standing orders) that run until something unexpected happens, then re-plan. "Wake events" (controller done, handoff requested, unrecognized screen) are a clean interface between slow deliberation and fast control, and they map onto ano's standing rules. It is also a model-vs-harness result: with the model fixed, the action-over-time part of the harness moved real-time success by 30 points, while better perception/memory (VISTA) or more reasoning effort (+4–7 points) did not close the gap.

## Key ideas

- **Three execution modes per call.** (1) primitive action; (2) open-loop macro (action sequence); (3) closed-loop controller, a short model-written Python program that reads the screen and acts without further model calls.
- **Wake events.** Control returns to the model when the macro/controller finishes, requests a handoff, or meets a screen it was not written for. Model and controllers both see screenshots, not game state.
- **AFK-Bench.** 120 browser games, split evenly into hostile real-time (inaction risks failure), benign real-time, and turn-based; each playable in real time or paused, so the cost of real time is measurable. Lost games restart within fixed budgets of calls, game time and steps.
- **Results (GPT-6.1 Sol, same budgets).** 68.6% vs 38.3% real-time success on AFK-Bench; 62.5% vs 16.7% on hostile real-time games. Running the clock costs AutoPILOT 4.5 points (AFK-Bench) and 2.9 (GameWorld) versus 17.8 and 41.2 for VISTA; on GameWorld AutoPILOT keeps 80.0% in real time while VISTA drops from 84.1% to 42.9%.
- **Diagnosis.** VISTA, with visual memory and inspection tools, performs on par with a plain Codex harness in real time (38.3% vs 38.9%), so perception and memory were not the bottleneck.

## Caveats

Read from the abstract and introduction of the v1 HTML. Browser games, not RTS: no multi-unit control, fog of war or adversarial opponents with their own planners. Controllers are generated from screenshots at run time, so safety and correctness of model-written code in a live loop are taken on trust. Results centre on one frontier model; the abstract says gains hold across models. Same-budget comparisons depend on how budgets count controller steps versus model calls.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.28202
- PDF: https://arxiv.org/pdf/2611.28202
- HTML: https://arxiv.org/html/2611.28202v1
