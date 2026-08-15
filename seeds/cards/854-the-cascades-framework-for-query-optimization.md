---
title: The Cascades Framework for Query Optimization
authors:
- Goetz Graefe
year: 1995
venue: IEEE Data Engineering Bulletin
arxiv: null
doi: null
source: "https://15721.courses.cs.cmu.edu/spring2019/papers/22-optimizer1/graefe-ieee1995.pdf"
topics:
- databases
- contemporary-db
seed_rank: 854
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Volcano — An Extensible and Parallel Query Evaluation System"
    url: "https://doi.org/10.1109/69.273032"
    year: 1994
    arxiv: null
    doi: "10.1109/69.273032"
see:
  - "853-volcano-an-extensible-and-parallel-query-evaluation-system"
---

# The Cascades Framework for Query Optimization

## One-sentence takeaway

Cascades is a rule-driven, memoizing optimizer: transformation rules rewrite logical expressions, implementation rules pick physical algorithms, and a memo plus priority search reuse every subplan instead of re-enumerating it.

## Why it matters here

Any planner Broadside grows for GRID COMMAND queries, ECS filters, or agent-tool graphs will hit the same search explosion Cascades was built to tame. This is the architecture behind SQL Server's optimizer and most industrial Cascades descendants.

## Key ideas

- Successor to the EXODUS and Volcano optimizer generators: rules are data, not hard-coded search procedures.
- The memo (AND/OR graph of groups) stores logical and physical alternatives for each subexpression so dynamic programming / branch-and-bound never repeats work.
- Transformation rules vs implementation rules vs enforcers (sort/partition) let the search add missing physical properties instead of rejecting a plan.
- Guidance and promising-rule heuristics keep the search from exploding; materialized-view matching is just another set of rules.
- Physical properties (sort order, distribution, compression) are first-class goals the optimizer can enforce rather than hope for.

## Caveats

## Links

- PDF: https://15721.courses.cs.cmu.edu/spring2019/papers/22-optimizer1/graefe-ieee1995.pdf
- DBLP: https://dblp.org/rec/journals/debu/Graefe95a
