---
title: "FlowLog: Re-thinking Datalog for Fast and Extensible Static Analysis"
authors: ["Zhenghong Yu", "Hangdong Zhao", "Wanzhu Hou", "Paraschos Koutris"]
year: 2026
venue: "SPLASH/ISSTA 2026 Tool Demonstrations (accepted)"
arxiv: "2607.23971"
doi: null
source: "https://arxiv.org/abs/2607.23971"
topics: [production-rules-triggers, typed-programming-systems]
seed_rank: 1593
seed_batch: "craft-2026-09-05"
reviewed: "2026-09-05"
pool: "languages"
relevance_score: 9
lineage: production-rules-triggers
cites:
  - title: "What You Always Wanted to Know About Datalog (And Never Dared to Ask)"
    url: "https://doi.org/10.1109/69.43410"
    year: 1989
    arxiv: null
    doi: "10.1109/69.43410"
  - title: "Rete: A Fast Algorithm for the Many Pattern/Many Object Pattern Match Problem"
    url: "https://doi.org/10.1016/0004-3702(82)90020-0"
    year: 1982
    arxiv: null
    doi: "10.1016/0004-3702(82)90020-0"
  - title: "Soufflé: On Synthesis of Program Analyzers"
    url: "https://doi.org/10.1007/978-3-662-49434-9_6"
    year: 2016
    arxiv: null
    doi: "10.1007/978-3-662-49434-9_6"
  - title: "Differential Dataflow"
    url: "https://www.cidrdb.org/cidr2013/Papers/CIDR13_Paper111.pdf"
    year: 2013
    arxiv: null
    doi: null
see:
  - "039-what-you-always-wanted-to-know-about-datalog-and-never-dared"
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
  - "1004-treat-a-better-match-algorithm-for-ai-production-systems"
  - "1490-fast-declarative-character-simulation-using-bottom-up-logic-programming"
---

# FlowLog: Re-thinking Datalog for Fast and Extensible Static Analysis

## One-sentence takeaway

Soufflé-style Datalog compiles to Differential Dataflow: incremental fact retract in milliseconds, a browser profiler for bad join orders, and hooks past standard Datalog — demonstrated on DOOP points-to, not on a game tick.

## Why it matters here

GRID COMMAND / Anoptic production rules still sit on Rete 42 / TREAT 1004 (incremental match) or TED 1490 (full derived-table recompute each tick). FlowLog is the incremental-*Datalog* leftover: standing rules as a DD incremental view, so retracting a fact does not replay the world. Steal the compiler+incremental runtime pattern for triggers; do not pretend the ISSTA tool demo *is* the trigger engine.

## Key ideas

- **Soufflé surface, DD executable.** Existing analyzer programs lower to Differential Dataflow instead of a one-shot engine, so edits to facts/rules are incremental.
- **Demo loop.** Same DOOP points-to program: one-shot eval → switch to incremental, retract a fact, results update in milliseconds; inspect per-operator costs in a browser profiler and fix a bad join order; extend with a *k*-core example that is not standard Datalog.
- **24 analyzer-derived benchmarks.** Claims: consistently faster than SOTA Datalog engines, memory-efficient, scales better. This is a tool-demo paper; the numbers live in the demo, not a systems bakeoff chapter.
- **Extensibility is the point.** Static analyses are not run-once: users edit facts, tune rules, diagnose bottlenecks, and need semantics beyond vanilla Datalog — exactly the standing-rule maintenance problem, in an analyzer costume.

## Caveats

Honestly a **static-analysis tool demonstration** (SPLASH/ISSTA 2026 Tool Demonstrations, accepted), not a game production system. DOOP points-to ≠ GRID COMMAND world ticks. TED 1490 remains the in-engine table recipe; Rete/TREAT remain the classical matchers; Naiad 1480 / DD 823 remain the streaming IVM ancestors. Near-keeper on Craft 2026-09-03; minted now as the incremental-Datalog bridge. Do not remint 39 / 42 / 1004 / 1490 / 823 / 1480 / 1094.

## Links

- arXiv abs: https://arxiv.org/abs/2607.23971
- PDF: https://arxiv.org/pdf/2607.23971
