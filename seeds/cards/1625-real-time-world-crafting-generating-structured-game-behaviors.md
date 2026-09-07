---
title: "Real-Time World Crafting: Generating Structured Game Behaviors from Natural Language with Large Language Models"
authors: ["Austin Drake", "Hang Dong"]
year: 2025
venue: "Wordplay @ EMNLP 2025"
arxiv: "2510.16952"
doi: null
source: "https://arxiv.org/abs/2510.16952"
topics: [nl-game-commands, ecs-data-oriented-simulation, embedded-scripting-dsls]
seed_rank: 1625
seed_batch: "craft-2026-09-07"
reviewed: "2026-09-07"
pool: "game-ai"
relevance_score: 10
lineage: nl-game-commands
cites:
  - title: "The Essence of Entity Component System"
    url: "https://arxiv.org/abs/2606.14919"
    year: 2026
    arxiv: "2606.14919"
    doi: "10.1145/3748522.3779910"
  - title: "Flecs: A Fast Entity Component System for C99"
    url: "https://github.com/SanderMertens/flecs"
    year: 2019
    arxiv: null
    doi: null
see:
  - "172-the-essence-of-entity-component-system"
  - "260-flecs-a-fast-entity-component-system-for-c99"
---

# Real-Time World Crafting: Generating Structured Game Behaviors from Natural Language with Large Language Models

## One-sentence takeaway

GRID COMMAND architecture pattern: an LLM translates unconstrained natural language into a constrained JSON DSL that *configures* an ECS at runtime — safety lives in the DSL and a validator, not in free-form generated code.

## Why it matters here

This is the transferable NL→standing-rules path for GRID COMMAND / Anoptic: player or designer text becomes data components a Flecs-like world can run, with a fizzle default instead of `eval`. Frame it as an architecture paper that happens to use LLMs, not as an LLM paper that happens to mention ECS.

## Key ideas

- **Three layers.** (1) LLM interface: NL → DSL JSON. (2) Custom ECS: parse DSL, instantiate entities/components. (3) Commercial engine as I/O container only. The LLM never emits general-purpose code.
- **Two DSLs, two tests.** *Battle Mode* (Latent Space): compositional spell DSL — unordered component bags plus event triggers that can nest other spells. *Alchemy Mode*: ordered cellular-automata material rules (Powder Toy / Sandspiel lineage). JSON as an abstract grammar, not a scripting language.
- **Grounding and failure.** Prompt injects DSL docs plus live world state (active elements, or the full automata ruleset). Validator: syntactic JSON, known component types, in-range params; strip extra text; default missing params; unusable scripts *fizzle* instead of crashing.
- **Prompting is task-dependent.** Gemini 2.5 Flash / GPT-4.1 mini / Claude 4 Sonnet / Gemma 3 4B × zero/one/few-shot × standard vs CoT. Larger models capture creative intent better; CoT helps creative alignment; few-shot is what makes *complex* DSL scripts valid. LLM-judge ratings validated on a handcrafted good/bad set.

## Caveats

Wordplay workshop paper on a 2D prototype, not a production command layer. Judge is an LLM. DSLs are JSON bags, not ano’s typed standing rules. Do not remint Essence of ECS 172 or Flecs 260/314. Not a reason to let a model emit C.

## Links

- arXiv abs: https://arxiv.org/abs/2510.16952
- PDF: https://arxiv.org/pdf/2510.16952
- Demo / data: https://github.com/austin-the-drake/real-time-world-crafting-wordplay-demo
