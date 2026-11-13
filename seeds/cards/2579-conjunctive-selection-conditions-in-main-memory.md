---
title: "Conjunctive Selection Conditions in Main Memory"
authors:
  - "Kenneth A. Ross"
year: 2002
venue: "PODS 2002"
arxiv: null
doi: "10.1145/543613.543628"
source: "https://www.cs.columbia.edu/~kar/pubsk/selections.pdf"
topics:
  - "branch-misprediction"
  - "selection-predicates"
  - "column-stores"
  - "query-planning"
  - "relational-ecs-queries"
seed_rank: 2579
seed_batch: "archive-2026-11-14"
reviewed: "2026-11-14"
pool: "systems"
relevance_score: 9
lineage: data-layout
cites:
  - title: "Database Architecture Optimized for the New Bottleneck: Memory Access"
    url: "https://ir.cwi.nl/pub/11189/11189B.pdf"
    year: 1999
    arxiv: null
    doi: null
  - title: "Weaving Relations for Cache Performance"
    url: "https://www.vldb.org/conf/2001/P169.pdf"
    year: 2001
    arxiv: null
    doi: null
  - title: "Filtering Algorithms and Implementation for Very Fast Publish/Subscribe Systems"
    url: "https://doi.org/10.1145/375663.375677"
    year: 2001
    arxiv: null
    doi: "10.1145/375663.375677"
see:
  - "2423-database-architecture-optimized-for-the-new-bottleneck-memory-access"
  - "2401-weaving-relations-for-cache-performance"
---

# Conjunctive Selection Conditions in Main Memory

## One-sentence takeaway

Ross shows that how you AND predicates over column arrays (short-circuit `&&`, bitwise `&`, or a branch-free `j += mask` store) is a cost-based plan choice driven by selectivity and branch misprediction, and gives a dynamic program plus a cheap heuristic that pick the mixed plan per query.

## Why it matters here

An ano selection (`where a and b and c` over ECS columns) compiles to exactly the loop this paper studies: arrays per column, a conjunction of per-column tests, and an output list of matching row offsets. The paper says the compiler cannot choose the loop shape alone, since `&` versus `&&` is only legal when tests have no side effects and only wise given selectivity estimates. ano knows both, because its predicates are pure and its runtime can keep per-column selectivity stats. That makes the plan space here (which terms are grouped with `&`, which are split by `&&`, and whether the tail is branch-free) a direct template for ano's selection lowering, and it predates the vectorized-engine papers already in the library.

## Key ideas

- **Three base loops.** Branching-and (`&&`, k branches; best when the first test is very selective), logical-and (`&`, one branch; best at intermediate selectivity), and no-branch (`answer[j] = i; j += f1 & ... & fk;`, no branch; best when conditions are not selective). On the Pentium III and UltraSparc tests, each one is best somewhere and roughly twice as slow as optimal elsewhere.
- **Mixed plans.** Plans like `if ((f1 & f2) && f3) { answer[j] = i; j += f4 & ... & fk; }` beat all three basic loops over some selectivity ranges. In the four-condition experiment the optimizer switched between four different plans as selectivity rose (the switch points were 0.14, 0.45 and 0.52).
- **Cost model with misprediction.** Per-record cost charges a misprediction penalty (17 cycles on Pentium III in their parameters) according to each branch's probability of going either way, and the modeled misprediction counts matched hardware counter measurements closely.
- **Optimizer.** A dynamic program over subsets of terms (O(4^k), pruned by two dominance lemmas) finds the optimal plan; it ran in under 0.01 s for k ≤ 9. A heuristic in O(k log k) average time comes within about 10% except at high selectivity, fixed by also comparing against the pure no-branch plan.
- **Contexts.** The same loop structure covers full scans, the loop after an index lookup, and fact-table scans where a dimension-table predicate is precomputed into a lookup array.

## Caveats

The measurements are on 2002 CPUs with gcc and L1-resident data; modern cores have different penalties, wider SIMD, and compilers that emit conditional moves, so the crossover points will move, though the plan space and the reasoning still apply. The model assumes independent selectivities, with an appendix sketching the correlated case. The evaluation is a microbenchmark plus a publish/subscribe (Le Subscribe) case study, where the gain was up to a factor of two in the subscription-scan part of the cost. I read the full author PDF: the abstract, sections 1 to 5, and the appendix headings.

## Links

- PDF: https://www.cs.columbia.edu/~kar/pubsk/selections.pdf
- DOI: https://doi.org/10.1145/543613.543628
- PODS 2002 open TOC: https://sigmod.org/pods/opentoc/pods2002.html
