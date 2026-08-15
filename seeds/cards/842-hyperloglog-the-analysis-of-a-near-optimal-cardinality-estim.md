---
title: "HyperLogLog: the analysis of a near-optimal cardinality estimation algorithm"
authors:
- Philippe Flajolet
- Éric Fusy
- Olivier Gandouet
- Frédéric Meunier
year: 2007
venue: Discrete Mathematics & Theoretical Computer Science
arxiv: null
doi: 10.46298/dmtcs.3545
source: "https://doi.org/10.46298/dmtcs.3545"
topics:
- databases
- contemporary-db
seed_rank: 842
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# HyperLogLog: the analysis of a near-optimal cardinality estimation algorithm

## One-sentence takeaway

HyperLogLog estimates the number of distinct elements in a stream by averaging the maximum observed leading-zero counts across m stochastic-averaging registers, using O(ε⁻² log log n) bits for a relative standard error of about 1.04/√m.

## Why it matters here

GRID COMMAND “how many unique units / players / events” and Broadside ingest cardinality checks cannot keep a hash set of every key. HLL (and Redis/Presto HyperLogLog++) is the sketch: mergeable, tiny, and accurate enough for planner stats and dashboards.

## Key ideas

- Hash each item, keep per-register the max ρ (rank of the first 1-bit); the harmonic mean of 2^M_j estimates cardinality, correcting the bias of a raw max.
- Stochastic averaging into m = 2^b registers replaces one noisy max with a stable mean; the paper’s analysis gives the 1.04/√m constant.
- Registers store only a small integer (log log of the universe), so the structure is measured in kilobits even for astronomical n.
- Union is a register-wise max, so independent observers merge without raw data — the property later systems use for distributed DISTINCT.

## Caveats

## Links

- DOI: [10.46298/dmtcs.3545](https://doi.org/10.46298/dmtcs.3545)
- DMTCS: https://dmtcs.episciences.org/3545
