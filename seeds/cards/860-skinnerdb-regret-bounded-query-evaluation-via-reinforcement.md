---
title: "SkinnerDB: Regret-bounded Query Evaluation via Reinforcement Learning"
authors:
- Immanuel Trummer
- Junxiong Wang
- Ziyun Wei
- Deepak Maram
- Samuel H. Moseley
- Saehan Jo
- Joseph Antonakakis
- Ankush Rayabhari
year: 2021
venue: ACM Transactions on Database Systems
arxiv: "1901.05152"
doi: 10.1145/3464389
source: "https://arxiv.org/abs/1901.05152"
topics:
- databases
- contemporary-db
seed_rank: 860
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# SkinnerDB: Regret-bounded Query Evaluation via Reinforcement Learning

## One-sentence takeaway

SkinnerDB never trusts a cardinality model: it time-slices many join orders during the same query, merges their tuples, and bounds expected regret versus the single best order.

## Why it matters here

Agent-built queries and ad-hoc GRID COMMAND filters will guess cardinalities badly. SkinnerDB is the "pay a small adaptive tax rather than one catastrophic join order" executor, complementary to Bao's planner-steering.

## Key ideas

- No statistics, no cost model: progress per time slice is the only signal; a multi-armed bandit reallocates slices to promising join orders.
- Intermediate tuples from different orders are merged until the result is complete, so the engine can switch mid-query without restarting.
- Quality metric is execution-cost regret against an oracle join order, not just "did we pick a good plan up front."
- Two deployments: a wrapper that can sit on Postgres/MonetDB, and a custom engine with multi-way joins and compact tuples for cheap order switches.
- JOB, TPC-H, and UDF-heavy JCC-H: the overhead of reliable ordering is small next to one disastrous plan. SIGMOD 2019 is the conference cut; TODS 2021 is the journal expansion.

## Caveats

## Links

- arXiv: [1901.05152](https://arxiv.org/abs/1901.05152)
- DOI: [10.1145/3464389](https://doi.org/10.1145/3464389)
- SIGMOD 2019 DOI: [10.1145/3299869.3300088](https://doi.org/10.1145/3299869.3300088)
