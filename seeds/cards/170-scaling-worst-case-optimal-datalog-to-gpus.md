---
title: "Scaling Worst-Case Optimal Datalog to GPUs"
authors:
  - "Yihao Sun"
  - "Kunting Qi"
  - "Thomas Gilray"
  - "Sidharth Kumar"
  - "Kristopher Micinski"
year: 2026
venue: "arXiv:cs.DB"
arxiv: "2604.20073"
doi: null
source: "https://arxiv.org/abs/2604.20073"
topics:
  - production-rules-triggers
  - relational-ecs-queries
seed_rank: 170
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
cites:
  - title: "Multiset semantics in SPARQL, Relational Algebra and Datalog"
    url: "https://arxiv.org/abs/2605.00417"
    year: 2026
    arxiv: "2605.00417"
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
  - "167-multiset-semantics-in-sparql-relational-algebra-and-datalog"
  - "039-what-you-always-wanted-to-know-about-datalog-and-never-dared"
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
---

# Scaling Worst-Case Optimal Datalog to GPUs

## One-sentence takeaway

SRDatalog is a GPU Datalog engine built on worst-case optimal joins with columnar storage and skew-aware load balancing, avoiding the AGM blowup that binary-join GPU engines hit on DOOP- and ddisasm-class rules.

## Why it matters here

Standing rules over a wide ECS world are multiway joins, not pairwise hash joins. If ano ever evaluates them on GPU, WCOJ plus flat columns is the engine shape — binary join trees will OOM on the same queries.

## Key ideas

- Existing GPU Datalog engines implement iterated binary joins; complex program-analysis rules then suffer AGM-bound blowup and run out of memory regardless of join order.
- Worst-case optimal joins avoid that blowup but map poorly to SIMT under key skew, starving some SMs.
- SRDatalog uses flat columnar storage and two-phase deterministic allocation so it does not rebuild indices the way static WCOJ systems do.
- Skew is handled with root-level histogram-guided load balancing, helper-relation splitting, and stream-aligned rule multiplexing.
- On real program-analysis workloads the authors report 21×–47× geometric-mean speedups over prior engines.

## Caveats

## Links

- arXiv: [2604.20073](https://arxiv.org/abs/2604.20073)
