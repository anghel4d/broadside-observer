---
title: "Fast, Declarative, Character Simulation Using Bottom-Up Logic Programming"
authors: ["Ian Horswill", "Samuel Hill"]
year: 2024
venue: "AIIDE"
arxiv: null
doi: "10.1609/aiide.v20i1.31866"
source: "https://doi.org/10.1609/aiide.v20i1.31866"
topics: [production-rules-triggers]
seed_rank: 1490
seed_batch: "craft-2026-09-01"
reviewed: "2026-09-01"
pool: "game-ai"
relevance_score: 10
lineage: production-systems
cites:
  - title: "Declarative Specification of Temporal Entities for Large-Scale Character Simulation"
    url: "https://doi.org/10.1609/aiide.v21i1.36809"
    year: 2025
    arxiv: null
    doi: "10.1609/aiide.v21i1.36809"
  - title: "Rete: A Fast Algorithm for the Many Pattern/Many Object Pattern Match Problem"
    url: "https://doi.org/10.1016/0004-3702(82)90020-0"
    year: 1982
    arxiv: null
    doi: "10.1016/0004-3702(82)90020-0"
  - title: "What You Always Wanted to Know About Datalog (And Never Dared to Ask)"
    url: "https://doi.org/10.1109/69.43410"
    year: 1989
    arxiv: null
    doi: "10.1109/69.43410"
see:
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
  - "039-what-you-always-wanted-to-know-about-datalog-and-never-dared"
  - "1480-naiad-a-timely-dataflow-system"
---

# Fast, Declarative, Character Simulation Using Bottom-Up Logic Programming

## One-sentence takeaway

TED is typed bottom-up Datalog embedded in C#: tables are the world, rules compile to indexed loops, compiled TED is 25% slower than hand C# and 2–3 orders faster than SWI Prolog — standing GRID COMMAND / Anoptic world rules as data.

## Why it matters here

Rete 42 / TREAT 1004 / OPS5 155 match productions. Naiad 1480 timestamps standing triggers. GRID COMMAND still needs the *game-tick table engine*: designers write "siblings share a parent" and the runtime materialises full extensions every tick without pointer-chasing Prolog. TED is that leftover — C# objects build the program, indices are tuned separately from rules, and Unity/Godot already speak C#. Simulog AIIDE 2025 (DOI 10.1609/aiide.v21i1.36809) is the temporal sequel on top of TED; cite, do not mint. Do not remint 42 / 1004 / 155 / 39 / 1094 / 1480.

## Key ideas

- **Three table kinds.** Base tables hold tick-to-tick state. Derived tables are `If()` rules recomputed each tick. Update tables are derived lists of mutations applied to base tables at tick end. Needs-based action selection is two lines (`Maximal` over a `Score` definition) instead of `O(CON)` nested loops plus ad-hoc dirty lists.
- **Bottom-up, typed, embedded.** TED is a typed embedded Datalog (the acronym). Predicates are `Predicate<T1…Tn>` C# objects; operator overloading builds the AST; C# is the macro language. Unification is loads/stores/equality, not Prolog logic variables. The compiler picks the tightest loop given declared indices. No recursion inside a tick and no Prolog functors — Turing-completeness is "call C#".
- **Numbers from the PDF.** Townlike benchmark, 2000 characters × 100 locations, Apple M3 Pro 4.06 GHz, Unity 2021.3.11f1, 1000 warmup ticks then 1000 timed, single-core: C# 6.01 ms/tick, compiled TED 7.55 ms (125% of C#, i.e. 25% slower), interpreted TED 17.47 ms (2.9×). Table 1: update+data logic 15 TED lines vs 85 C# (5.6×), 36 vs 85 with TED variable/wrapper overhead (2.3×); abstract's 2–5× compact holds. SWI Prolog (deep index on one argument only) was 2–3 orders of magnitude slower on the same benchmark — lookup of affinity is `O(1)` in TED/C# vs `O(P²)` clause scan, pushing the tick to `O(P⁴/L)`. Shipped in Voix de la Ville and Rise of Industry 2.

## Caveats

Less expressive than Prolog: no intra-tick recursion, composite terms opaque to the matcher. Experimental C# regenerating compiler; interpreted path is the 2.9× figure. Parallel execution is claimed without modification but Table 2 is single-core. Clingo ASP was a non-starter (151 s + 10 GB to ground a 100-person affinity uniqueness constraint). Not Rete incremental matching — full derived-table recompute each tick.

## Links

- DOI: [10.1609/aiide.v20i1.31866](https://doi.org/10.1609/aiide.v20i1.31866)
- AAAI OJS: https://ojs.aaai.org/index.php/AIIDE/article/view/31866
- PDF: https://ojs.aaai.org/index.php/AIIDE/article/download/31866/34033
