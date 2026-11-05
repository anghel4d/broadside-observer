---
title: "Compiling Linear Datalog to SQL for Program Analysis"
authors:
  - "Amir Shaikhha"
  - "Anna Herlihy"
  - "Hung Ngo"
year: 2026
venue: "arXiv preprint (cs.DB / cs.PL)"
arxiv: "2609.06301"
doi: null
source: "https://arxiv.org/abs/2609.06301"
topics:
  - "production-rules-triggers"
  - "relational-ecs-queries"
  - "typed-programming-systems"
seed_rank: 2522
seed_batch: "craft-2026-11-05"
reviewed: "2026-11-05"
pool: "languages"
relevance_score: 8
cites:
  - title: "Compiling Linear Datalog to SQL for Program Analysis"
    url: "https://arxiv.org/abs/2609.06301"
    year: 2026
    arxiv: "2609.06301"
    doi: null
see: ["039-what-you-always-wanted-to-know-about-datalog-and-never-dared", "1593-flowlog-re-thinking-datalog-for-fast-and-extensible", "1809-differential-datalog"]
---

# Compiling Linear Datalog to SQL for Program Analysis

## One-sentence takeaway

Linear Datalog (reduced kernels of call-graph, borrow-check, points-to, escape and dataflow analyses) compiles through a Midlog IR into portable recursive SQL that recovers functional dependencies as schema keys, so Umbra runs the analyses 5.46× geomean faster than Soufflé at 8 threads with no engine patches.

## Why it matters here

Standing rules in ano want a Datalog surface and a fast bottom-up engine; this paper says the engine can be recursive SQL you already have, if you stay in the Linear fragment, route mutual recursion through Midlog, and expose keys the optimiser understands — a practical lowering path rather than another bespoke Soufflé port.

## Key ideas

- **Linear Datalog fragment.** Expressive enough for five canonical static analyses once kernels are reduced; avoids the worst of mutual recursion at the source.
- **Midlog IR.** Resolves the two mismatches with recursive SQL — mutual recursion and scoping — before SQL is emitted.
- **DLSQL pipeline.** Four-phase compile through Midlog; multi-head elimination removes needless mutual recursion; FD recovery turns program structure into schema keys.
- **Portable SQL.** Generated queries run unmodified on seven database systems; Umbra 5.46× geomean vs Soufflé at 8 threads, DuckDB competitive single-threaded but 0.68× at 8 threads.
- **Large EDBs.** Escape analysis on 42M-tuple VarPointsTo, Linux-kernel value-flow graphs, Polonius borrow-checker facts.

## Caveats

Linear fragment only; full Datalog with arbitrary mutual recursion still needs more engine support. Speedups are backend-sensitive (Umbra yes, DuckDB parallelism weak). Program-analysis workloads, not game-tick standing rules measured directly. I read the abstract, contributions and experiment setup.

## Links

- arXiv abstract: https://arxiv.org/abs/2609.06301
- PDF: https://arxiv.org/pdf/2609.06301
