---
title: "Distributed Datalog at Scale with Worst-Case Optimal Joins"
authors:
  - "Kunting Qi"
  - "Yihao Sun"
  - "Kristopher Micinski"
  - "Thomas Gilray"
  - "Sidharth Kumar"
year: 2026
venue: "arXiv preprint (cs.DB)"
arxiv: "2610.12692"
doi: null
source: "https://arxiv.org/abs/2610.12692"
topics:
  - "production-rules-triggers"
  - "relational-ecs-queries"
  - "ecs-data-oriented-simulation"
seed_rank: 2521
seed_batch: "craft-2026-11-05"
reviewed: "2026-11-05"
pool: "languages"
relevance_score: 9
cites:
  - title: "Distributed Datalog at Scale with Worst-Case Optimal Joins"
    url: "https://arxiv.org/abs/2610.12692"
    year: 2026
    arxiv: "2610.12692"
    doi: null
see: ["170-scaling-worst-case-optimal-datalog-to-gpus", "1554-free-join-unifying-worst-case-optimal-and-traditional-joins", "1809-differential-datalog"]
---

# Distributed Datalog at Scale with Worst-Case Optimal Joins

## One-sentence takeaway

The first distributed-memory Datalog engine that runs worst-case optimal joins through recursive semi-naïve fixpoint evaluation: HyperCube partitioning is reused across iterations so each WCOJ intersection stays rank-local while only newly derived tuples are reshuffled over MPI.

## Why it matters here

ano's standing rules and GRID COMMAND triggers are recursive relational joins over ECS worlds; the shared-memory / GPU WCOJ line (card 170) already matters on one box, and this paper is the recipe for the same join style when the fact table no longer fits one node — HyperCube layout plus delta-only reshuffles is the distributed analogue of keeping the interaction list local.

## Key ideas

- **Problem.** Binary-join Datalog on cyclic multi-way queries (triangles, peer-influence) materialises exploding two-hop intermediates and pays network redistribution every iteration.
- **WCOJ fix.** Variable-at-a-time joins kill intermediate blowup; prior WCOJ was shared-memory or one-shot non-recursive on dataflow platforms.
- **Iterated HyperCube.** Hash-partition along variable-aligned grid dims, replicate along missing dims; across semi-naïve rounds only $\Delta$-tuples are all-to-all'd / all-gathered on subcube communicators, layout held fixed so intersections stay local.
- **Eval.** Aurora and Polaris (Argonne) on graph-mining and program-analysis workloads; beats prior Datalog engines on most benchmarks; partition dimensionality trades runtime for memory.
- **Scope.** MPI shared-nothing HPC, not a serverless / cloud-shuffle rewrite.

## Caveats

Leadership-class MPI clusters, not a drop-in for a game-process job system; communication cost still dominates some partition choices. I read the abstract and introduction.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.12692
- PDF: https://arxiv.org/pdf/2610.12692
