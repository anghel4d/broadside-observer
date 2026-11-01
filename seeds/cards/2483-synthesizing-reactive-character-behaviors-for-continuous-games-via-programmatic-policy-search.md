---
title: "Synthesizing Reactive Character Behaviors for Continuous Games via Programmatic Policy Search"
authors:
  - "Maxim Gumin"
  - "Hsueh-Ti Derek Liu"
  - "Victor Zordan"
  - "Daniel Ritchie"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2609.24025"
doi: null
source: "https://arxiv.org/abs/2609.24025"
topics:
  - "program-synthesis"
  - "programmatic-rl"
  - "game-ai"
  - "dsl"
  - "llm-agents"
seed_rank: 2483
seed_batch: "craft-2026-11-01"
reviewed: "2026-11-01"
pool: "game-ai"
lineage: game-ai-planning
relevance_score: 9
cites:
  - title: "Synthesizing Reactive Character Behaviors for Continuous Games via Programmatic Policy Search"
    url: "https://arxiv.org/abs/2609.24025"
    year: 2026
    arxiv: "2609.24025"
    doi: null
see: ["103-wave-function-collapse", "283-behavior-trees-for-next-gen-game-ai"]
---

# Synthesizing Reactive Character Behaviors for Continuous Games via Programmatic Policy Search

## One-sentence takeaway

Searching directly over a small typed DSL of raycast-driven geometric decisions, pruned by hand-written antipatterns and steered by a coding agent that writes policy sketches with holes for an enumerator to fill, finds short, readable, often surprising character policies for 14 continuous games and beats both pure enumeration and the agent alone.

## Why it matters here

This is the cleanest route yet to the RTS unit behaviour we want: designers write a reward, the system returns a few lines of editable s-expression instead of a neural net or a hand-built behaviour tree. The DSL is the kind of thing ano's standing rules could host directly (sensors as columns, `maxDirection` as an argmax over a direction set), and the antipattern list is a ready-made recipe for keeping any rule-search space small. Gumin is the WaveFunctionCollapse author, and code plus the benchmark are public.

## Key ideas

- DSL built around reactive geometry: raycasts as the main sensor, `closest`, `near`, `to`, `go`, and higher-order `maxDirection` that discretize a continuous action space into enumerable programs.
- Bottom-up enumeration pruned by syntactic antipatterns (for example `(if (not B) A C)` is dropped because `(if B C A)` covers it) instead of observational equivalence, which is too costly when each test is a game simulation.
- Agentic sketching: a coding agent proposes the policy skeleton with a typed hole plus sketch-specific antipatterns; the enumerator tries every well-typed fill up to a size bound and reports scores back.
- Aggregate normalized score 0.76 for the coding agent alone (~540 policy tests), 1.00 for search (~2.0M tests), 1.23 for agentic sketching (~171k tests).
- Benchmark spans classic control up to multi-agent football and dodgeball with rigid-body physics; the ButtonCheese mouse discovers pressing the button repeatedly to flood the map before collecting.

## Caveats

Read abstract, introduction, method, results table, limitations and future work (15-page preprint). Policies have only one numeric constant (2.5), so thresholds, radii and timings cannot be tuned; antipatterns are hand-coded; policies are purely reactive with no planning or memory, so long-horizon RTS strategy is out of scope.

## Links

- [arXiv abstract](https://arxiv.org/abs/2609.24025)
- [PDF](https://arxiv.org/pdf/2609.24025)
- [Code and benchmark](https://github.com/mxgmn)
