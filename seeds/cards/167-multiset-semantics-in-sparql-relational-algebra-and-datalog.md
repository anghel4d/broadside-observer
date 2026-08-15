---
title: "Multiset semantics in SPARQL, Relational Algebra and Datalog"
authors:
  - "Renzo Angles"
  - "Claudio Gutierrez"
  - "Daniel Hernández"
year: 2026
venue: "arXiv:cs.DB"
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

Angles, Gutierrez, and Hernández prove that SPARQL patterns under multiset semantics, a multiset relational algebra, and non-recursive Datalog with safe negation and multiplicities are expressively equivalent.

## Why it matters here

Ano standing rules over a columnar ECS are a Datalog/relational fragment that must respect bag semantics: joins and filters on components are not set-theoretic, and SPARQL-style AND/UNION/EXCEPT is the right comparison point.

## Key ideas

- The fragment studied is SPARQL AND, UNION, FILTER, EXCEPT, and SELECT, interpreted with multiplicities rather than set semantics.
- The Datalog side is non-recursive Datalog with safe negation, extended so predicates carry bag multiplicities.
- The algebra has projection, selection, natural join, arithmetic union, and except, all in the multiset reading.
- The three formalisms are shown to have the same expressive power, so equivalences and rewrites can move freely among them.
- The result is a characterization of the algebraic/logical structure of SPARQL bags, not a new engine.

## Caveats

## Links

- arXiv: [2605.00417](https://arxiv.org/abs/2605.00417)
