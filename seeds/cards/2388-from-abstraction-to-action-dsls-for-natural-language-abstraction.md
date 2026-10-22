---
title: "From Abstraction to Action: DSLs for Natural Language Abstraction Interpretation and Execution"
authors:
  - "Amit Lisha"
  - "Reut Tsarfaty"
year: 2026
venue: "arXiv preprint (cs.CL)"
arxiv: "2610.28311"
doi: null
source: "https://arxiv.org/abs/2610.28311"
topics:
  - "nl-game-commands"
  - "embedded-scripting-dsls"
  - "computational-linguistics-interfaces"
seed_rank: 2388
seed_batch: "frontier-2026-10-22"
reviewed: "2026-10-22"
pool: "languages"
relevance_score: 8
cites:
  - title: "From Abstraction to Action: DSLs for Natural Language Abstraction Interpretation and Execution"
    url: "https://arxiv.org/abs/2610.28311"
    year: 2026
    arxiv: "2610.28311"
    doi: null
  - title: "Voyager: An Open-Ended Embodied Agent with Large Language Models"
    url: "https://arxiv.org/abs/2305.16291"
    year: 2023
    arxiv: "2305.16291"
    doi: null
  - title: "Text2CAD: Generating Sequential CAD Models from Beginner-to-Expert Level Text Prompts"
    url: "https://arxiv.org/abs/2409.17106"
    year: 2024
    arxiv: "2409.17106"
    doi: null
  - title: "Draw Me a Flower: Processing and Grounding Abstraction in Natural Language"
    url: null
    year: 2022
    arxiv: null
    doi: null
see:
  - 006-voyager-an-open-ended-embodied-agent-with-large-language-mod
---

# From Abstraction to Action: DSLs for Natural Language Abstraction Interpretation and Execution

## One-sentence takeaway

LLMs lose accuracy as instructions get more abstract ("draw a pyramid", "repeat this pattern along the edge"), and having them write code over a human-curated domain-specific language whose primitives name those abstractions closes most of the gap, up to 10 absolute F1 points over plain code generation on the Hexagons grid-drawing task and reaching the human skyline, while DSLs the models induce themselves recover only part of that gain.

## Why it matters here

This is the GRID COMMAND natural-language-orders problem in miniature: a player says "form a line along the ridge" and something has to unroll that into many unit actions. The paper's evidence argues for designing the command vocabulary (an ano-side DSL of formations, patterns and repetitions) by hand and letting the model target it, rather than asking the model to emit raw actions or free Python, and it shows the gains land exactly at the high-abstraction end where game orders live.

## Key ideas

- **Representation layer.** A DSL whose documented primitives name recurring abstractions (objects, patterns, repetition, conditions) that expand into concrete actions; the model generates programs over it.
- **Hexagons → HexaGen.** On the Hexagons benchmark (instructions annotated with abstraction levels), code over the curated DSL beats direct tile-level output and unrestricted Python in F1 for every model tested (GPT-5.1, Gemini 3 / 3.1 Pro, Qwen3-30B-A3B, Gemma 3 27B); the best configuration (Gemini 3 Pro, high reasoning, F1 0.853) essentially matches the reported human skyline of F1 82.06. Exact-match gains are smaller and not uniform (Gemma 3 is slightly lower).
- **Gains concentrate at high abstraction.** F1 by abstraction level shows the DSL's advantage growing as instructions get more abstract.
- **Transfers to CAD.** On Text2CAD, VLM-judge pairwise preferences favor DSL outputs, most clearly at the expert level (e.g. 43.8% DSL versus 20.9% direct for Qwen3-30B-A3B-Thinking).
- **Induction is the open problem.** Model-induced DSLs (three independent libraries per model) recover only part of the gain and vary across runs.

## Caveats

Two domains, both 2-D/CAD construction rather than real-time multi-agent control. Text2CAD is scored by a VLM judge with a single seed per level. The curated DSL was written by people who knew the task well, so the result partly measures expert design effort. No latency or cost analysis for interactive use.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.28311
- PDF: https://arxiv.org/pdf/2610.28311
