---
title: "DBSP: Automatic Incremental View Maintenance for Rich Query Languages"
authors: ["Mihai Budiu", "Tej Chajed", "Frank McSherry", "Leonid Ryzhyk", "Val Tannen"]
year: 2023
venue: "PVLDB"
arxiv: "2203.16684"
doi: "10.14778/3587136.3587137"
source: "https://www.vldb.org/pvldb/vol16/p1601-budiu.pdf"
topics: [relational-ecs-queries, production-rules-triggers]
seed_rank: 1489
seed_batch: "craft-2026-09-01"
reviewed: "2026-09-01"
pool: "languages"
relevance_score: 10
lineage: contemporary-databases
cites:
  - title: "Naiad: A Timely Dataflow System"
    url: "https://doi.org/10.1145/2517349.2522738"
    year: 2013
    arxiv: null
    doi: "10.1145/2517349.2522738"
  - title: "Differential Dataflow"
    url: "https://www.cidrdb.org/cidr2013/Papers/CIDR13_Paper111.pdf"
    year: 2013
    arxiv: null
    doi: null
  - title: "What You Always Wanted to Know About Datalog (And Never Dared to Ask)"
    url: "https://doi.org/10.1109/69.43410"
    year: 1989
    arxiv: null
    doi: "10.1109/69.43410"
see:
  - "1480-naiad-a-timely-dataflow-system"
  - "823-differential-dataflow"
  - "039-what-you-always-wanted-to-know-about-datalog-and-never-dared"
---

# DBSP: Automatic Incremental View Maintenance for Rich Query Languages

## One-sentence takeaway

IVM as stream differentiation over Z-sets: any DBSP circuit incrementalizes by `Q^Δ = D ∘ Q ∘ I`, and the chain rule pushes that rewrite into plus/join/agg/recursion — standing ano rules as incremental views over ECS columns.

## Why it matters here

Naiad 1480 is the timestamp/`ONNOTIFY` runtime leftover of Differential Dataflow 823. GRID COMMAND still needs the *algebra* leftover that is not Soufflé/DDlog: given a standing query over changing facts, mechanically produce the circuit that consumes deltas and emits deltas. DBSP's answer is streams of abelian-group values (Z-sets for tables), four operators plus delay, and a heuristic-free Algorithm 4.6. Treat ECS columns as Z-sets, world ticks as stream time, and mission/trigger rules as incremental views. VLDB 2023 (arxiv 2022 is the preprint). Do not remint 1480 / 823 / 42 / 1004 / 1094.

## Key ideas

- **Streams over groups.** An `A`-stream is `ℕ → A`. Time is transaction index, not wall clock. `I` integrates (prefix sum of deltas → snapshots); `D` differentiates (`s[t] − s[t−1]`). They invert. Lifting `↑f` applies a scalar function pointwise. All operators are causal and time-invariant; delay `z⁻¹` is the only strict primitive needed for feedback.
- **IVM is one definition.** For a stream operator `Q`, `Q^Δ ≔ D ∘ Q ∘ I`. Naive form rebuilds the database each step; the chain rule `(Q₁ ∘ Q₂)^Δ = Q₁^Δ ∘ Q₂^Δ`, additivity, and a cycle rule push `Δ` to the leaves. Primitive relational ops have incremental versions faster than recompute by ~`|R|/|ΔR|`.
- **Z-sets.** Tables are finitely supported `A → ℤ`. Insert weight +1, delete −1; bags are non-negative weights; `distinct` recovers sets. SQL UNION is plus-then-distinct, UNION ALL is plus. Indexed Z-sets (`K → Z[A]`) handle GROUP BY. Stratified recursive Datalog and nested streams (integration inside a loop) sit in the same calculus.
- **Implementation, not a sealed DSL.** Rust library (groups, Z-sets, circuit API, sharded multicore, Kafka/CSV adapters) plus a Calcite SQL→DBSP compiler that passed all 7 million SQL Logic Tests. Lean formalization (~5K lines) of every theorem in the paper. Artifact: `github.com/vmware/database-stream-processor`.

## Caveats

This paper is the theory; "very promising" benchmarks are deferred to the repo/future work — do not invent timings. Recursive nested circuits are not guaranteed to terminate; if they do, they compute the least fixpoint. Correlated subqueries/outer joins are rewritten to multi-join plans. Not Soufflé (analyzer synthesis) and not Naiad (progress tracking). McSherry is shared with 823/1480 — same lineage, new algebra.

## Links

- VLDB PDF: https://www.vldb.org/pvldb/vol16/p1601-budiu.pdf
- DOI: [10.14778/3587136.3587137](https://doi.org/10.14778/3587136.3587137)
- arXiv: [2203.16684](https://arxiv.org/abs/2203.16684)
- Artifact: https://github.com/vmware/database-stream-processor
