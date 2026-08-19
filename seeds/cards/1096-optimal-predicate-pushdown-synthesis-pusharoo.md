---
title: "Optimal Predicate Pushdown Synthesis"
authors: ["Robert Zhang", "Eric Hayden Campbell", "Dixin Tang", "Işıl Dillig"]
year: 2026
venue: "PACMPL / PLDI 2026"
arxiv: "2604.13351"
doi: "10.1145/3808312"
source: "https://arxiv.org/abs/2604.13351"
topics: [relational-ecs-queries, typed-programming-systems]
seed_rank: 1096
seed_batch: "craft-2026-08-19"
reviewed: "2026-08-19"
pool: "languages"
relevance_score: 9
lineage: relational-ecs-queries
cites:
  - title: "Predicate Pushdown for Data Science Pipelines"
    url: "https://doi.org/10.1145/3589281"
    year: 2023
    arxiv: null
    doi: "10.1145/3589281"
  - title: "Database Systems: The Complete Book"
    url: "https://dl.acm.org/doi/book/10.5555/1796434"
    year: 2008
    arxiv: null
    doi: null
  - title: "A Compiler for Operations on Relations with Bag Semantics"
    url: "https://arxiv.org/abs/2502.06988"
    year: 2026
    arxiv: "2502.06988"
    doi: null
see:
  - "1060-a-compiler-for-operations-on-relations-with-bag-semantics"
  - "1037-bonsai-compiling-queries-to-pruned-tree-traversals"
  - "260-flecs-a-fast-entity-component-system-for-c99"
  - "314-flecs-relationships-and-queries"
---

# Optimal Predicate Pushdown Synthesis

## One-sentence takeaway

Treat fold-UDF + post-filter as a bisimulation: synthesize the *strongest* pre-filter Q and *weakest* residual P′ (split pushdown, not just exact/partial), witnessed by a relational invariant — 2.4× average (up to 100×) on 150 pandas/Spark pipelines, median 1.6 s synthesis.

## Why it matters here

ano's query-and-command surface is "filter entities, then fold" — standing rules, NL orders, Flecs relationship hops. Last Craft kept bag-semantics fusion (1060) and Bonsai pruned traversals (1037); Pusharoo is the *filter-through-UDF* rewrite those compilers assume a human wrote. Concrete: push `score > 90` *into* a top-2 aggregation and drop the redundant post-check. Different slice from Remora (1062) / WGSL (1061).

## Key ideas

- Generalized pushdown: Lift(P, F(x)) = Lift(P′, F(filter_Q(x))). Exact is P′=true; partial is P′=P; split is a weaker residual that still agrees.
- Four VCs on a bisimulation ψ between original and filtered accumulators: Init, Sync (both process r), Stutter (Q skips r), Final (accept/reject agree).
- Synthesis is not CHC: Stutter has ¬Q. Enumerate Q strongest-first, bound ψ with unrealizability certificates, Houdini-weaken the strongest admissible ψ, then strengthen P′ from ⊤ until Final holds. Repair from Sync/Stutter models.
- 150/150 real UDFs; MagicPush's theoretical ceiling is 22/150. Split on 87/150.

## Caveats

- Optimality is relative to extracted finite predicate universes (CNF from control-flow + post-filter). Not a complete decision procedure over all predicates.
- IR is a Python-like fold DSL; ano bytecode is not pandas. You re-encode the accumulator, you do not paste the OCaml synthesizer into the engine.
- 10-minute timeout; median is 1.6 s but split cases average 5.3 s.

## Links

- arXiv: [2604.13351](https://arxiv.org/abs/2604.13351)
- DOI: [10.1145/3808312](https://doi.org/10.1145/3808312)
