---
title: "What You Always Wanted to Know About Datalog (And Never Dared to Ask)"
authors:
  - "Stefano Ceri"
  - "Georg Gottlob"
  - "Letizia Tanca"
year: 1989
venue: "IEEE TKDE"
arxiv: null
doi: "10.1109/69.43410"
source: "https://doi.org/10.1109/69.43410"
topics:
  - production-rules-triggers
  - relational-ecs-queries
seed_rank: 39
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
cites:
  - title: "Magic Sets and Other Strange Ways to Implement Logic Programs"
    url: "https://dblp.uni-trier.de/db/conf/pods/pods86.html#BancilhonMSU86"
    year: 1986
    arxiv: null
    doi: null
  - title: "A Relational Model of Data for Large Shared Data Banks"
    url: "https://doi.org/10.1145/362384.362685"
    year: 1970
    arxiv: null
    doi: "10.1145/362384.362685"
see:
  - "047-a-relational-model-of-data-for-large-shared-data-banks"
---

# What You Always Wanted to Know About Datalog (And Never Dared to Ask)

## One-sentence takeaway

Ceri–Gottlob–Tanca’s TKDE tutorial is the classic Datalog primer: Horn clauses over a relational store, least-fixpoint semantics, bottom-up vs top-down evaluation, and the magic-sets rewrite.

## Why it matters here

ano standing rules and ECS queries are Datalog in engine clothing — recursive joins over component tables. This paper is the vocabulary (EDB/IDB, stratification, safety) to type those rules.

## Key ideas

- Datalog = function-free Horn clauses; unlike Prolog it is declarative and set-at-a-time, designed to sit on a database rather than a WAM.
- Least Herbrand / least-fixpoint semantics coincide for definite programs; inflationary and stratified negation are the standard extensions discussed.
- Naive and semi-naive bottom-up iteration, plus top-down SLD with memoing; magic-sets (Bancilhon et al. 1986) make bottom-up goal-directed.
- Safety / range-restriction conditions keep answers finite; recursion through negation needs stratification or inflationary iteration.
- Written as a survey for the then-new *IEEE Transactions on Knowledge and Data Engineering*; still the paper people hand to systems programmers.

## Caveats

## Links

- DOI: [10.1109/69.43410](https://doi.org/10.1109/69.43410)
