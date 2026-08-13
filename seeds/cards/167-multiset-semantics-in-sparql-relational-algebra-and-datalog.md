---
title: "Multiset semantics in SPARQL, Relational Algebra and Datalog"
authors:
  - "Renzo Angles"
  - "Claudio Gutierrez"
  - "Daniel Hernández"
year: 2026
venue: "arXiv"
arxiv: "2605.00417"
doi: null
source: "https://arxiv.org/abs/2605.00417"
topics:
  - production-rules-triggers
  - relational-ecs-queries
seed_rank: 167
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
cites:
  - title: "Scaling Worst-Case Optimal Datalog to GPUs"
    url: "https://arxiv.org/abs/2604.20073"
    year: 2026
    arxiv: "2604.20073"
    doi: null
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
see:
  - "170-scaling-worst-case-optimal-datalog-to-gpus"
  - "039-what-you-always-wanted-to-know-about-datalog-and-never-dared"
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
---

# Multiset semantics in SPARQL, Relational Algebra and Datalog

## One-sentence takeaway

The paper analyzes and characterizes the algebraic and logical structure of the multiset semantics for SPARQL patterns involving AND, UNION, FILTER, EXCEPT, and SELECT.

## Why it matters here

Datalog/deductive evaluation relevant to ano standing rules over columnar ECS; Relational/query foundations for selection-as-reference.

## Key ideas

- The paper analyzes and characterizes the algebraic and logical structure of the multiset semantics for SPARQL patterns involving AND, UNION, FILTER, EXCEPT, and SELECT.
- To do this, we align SPARQL with two well-established query languages: Datalog and Relational Algebra.
- Specifically, we study (i) a version of non-recursive Datalog with safe negation extended to support multisets, and (ii) a multiset relational algebra comprising projection, selection, natural join, arithmetic union, and except.
- We prove that these three formalisms are expressively equivalent under multiset semantics.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2605.00417](https://arxiv.org/abs/2605.00417)
- URL: https://arxiv.org/abs/2605.00417
