---
title: "An Amateur's Introduction to Recursive Query Processing Strategies"
authors:
  - "François Bancilhon"
  - "Raghu Ramakrishnan"
year: 1986
venue: "SIGMOD 1986, pp. 16–52"
arxiv: null
doi: "10.1145/16894.16859"
source: "https://users.dcc.uchile.cl/~cgutierr/cursos/FDB/p16-bancilhon.pdf"
topics:
  - "datalog"
  - "recursive-queries"
  - "semi-naive-evaluation"
  - "magic-sets"
  - "fixpoint"
seed_rank: 2508
seed_batch: "archive-2026-11-04"
reviewed: "2026-11-04"
pool: "languages"
lineage: production-rules
relevance_score: 8
cites:
  - title: "An Amateur's Introduction to Recursive Query Processing Strategies"
    url: "https://users.dcc.uchile.cl/~cgutierr/cursos/FDB/p16-bancilhon.pdf"
    year: 1986
    arxiv: null
    doi: "10.1145/16894.16859"
see: ["039-what-you-always-wanted-to-know-about-datalog-and-never-dared", "1809-differential-datalog", "1856-fixing-the-fixpoint-convergence-detection-incremental-recursion"]
---

# An Amateur's Introduction to Recursive Query Processing Strategies

## One-sentence takeaway

Bancilhon and Ramakrishnan put every 1980s strategy for evaluating recursive Horn-clause queries on one page and compare them analytically. The strategies are naive, semi-naive, query-subquery, APEX, Prolog-style, Henschen–Naqvi, magic sets and counting. The paper makes the bottom-up (delta fixpoint) vs top-down (goal-directed) trade-off concrete.

## Why it matters here

ano's standing rules (する/なる) are recursive rules re-run to fixpoint over columns. The engine has to choose between iterating only on deltas (semi-naive) and rewriting rules so evaluation is driven by the query's bound arguments (magic sets). This survey is the clearest single map of that design space, and it includes when each strategy wins.

## Key ideas

- Setting: Datalog-style Horn clauses with evaluable predicates and no function symbols. A query is a goal with some arguments bound.
- Naive evaluation re-derives everything each round. Semi-naive joins only the previous round's new tuples (the delta) against the full relations. That is the core of incremental bottom-up evaluation.
- Top-down strategies (query-subquery, Prolog, APEX) propagate bindings from the goal. Magic sets and counting are rewritings that let a bottom-up engine get the same binding propagation.
- The strategies are compared analytically on canonical recursive queries (e.g. same-generation, ancestor) under different data shapes, showing that no one method dominates.

## Caveats

- This is a 1986 survey. Later results (stratified negation, well-founded semantics, differential/incremental maintenance under deletions) are out of scope.
- The cost models are analytical estimates for particular query and data families, not measurements on a modern columnar engine.

## Links

- [PDF](https://users.dcc.uchile.cl/~cgutierr/cursos/FDB/p16-bancilhon.pdf)
- [ACM DOI](https://doi.org/10.1145/16894.16859)
- [SIGMOD Record page](https://sigmodrecord.org/1986/06/13/an-amateurs-introduction-to-recursive-query-processing-strategies/)
