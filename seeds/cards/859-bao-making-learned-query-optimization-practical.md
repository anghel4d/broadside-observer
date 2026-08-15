---
title: "Bao: Making Learned Query Optimization Practical"
authors:
- Ryan Marcus
- Parimarjan Negi
- Hongzi Mao
- Nesime Tatbul
- Mohammad Alizadeh
- Tim Kraska
year: 2021
venue: SIGMOD
arxiv: "2004.03814"
doi: 10.1145/3448016.3452838
source: "https://arxiv.org/abs/2004.03814"
topics:
- databases
- contemporary-db
seed_rank: 859
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Neo: A Learned Query Optimizer"
    url: "https://doi.org/10.14778/3342263.3342644"
    year: 2019
    arxiv: null
    doi: "10.14778/3342263.3342644"
  - title: "The Cascades Framework for Query Optimization"
    url: "https://15721.courses.cs.cmu.edu/spring2019/papers/22-optimizer1/graefe-ieee1995.pdf"
    year: 1995
    arxiv: null
    doi: null
see:
  - "854-the-cascades-framework-for-query-optimization"
---

# Bao: Making Learned Query Optimization Practical

## One-sentence takeaway

Bao steers an existing optimizer with per-query hints chosen by a tree-convolutional net plus Thompson sampling, learning an order of magnitude faster than full learned optimizers and improving tail latency.

## Why it matters here

GRID COMMAND and Broadside will keep a classical planner for a long time. Bao is the "don't replace Cascades, bandit-steer its hint set" path for when cardinality estimates go wrong on agent/ECS workloads that drift.

## Key ideas

- Arms are optimizer hint-sets (e.g. disable nested-loop, force hash join) rather than entire plan trees, so the search space stays small and the host optimizer still does legal rewrites.
- A tree-convolutional neural net scores (plan, hint) pairs; Thompson sampling explores under uncertainty and adapts when data, schema, or workload shift.
- Training overhead is ~10× lower than Neo-style full learned optimizers because Bao never has to invent join order from scratch.
- Cloud experiments show both cheaper bills and better p99 than a tuned commercial optimizer; tail plans are the explicit target, not just mean latency.
- The arXiv preprint was titled "Bao: Learning to Steer Query Optimizers"; SIGMOD 2021 is the archival version.

## Caveats

## Links

- arXiv: [2004.03814](https://arxiv.org/abs/2004.03814)
- DOI: [10.1145/3448016.3452838](https://doi.org/10.1145/3448016.3452838)
- Author PDF: https://people.csail.mit.edu/tatbul/publications/bao_sigmod21.pdf
