---
title: "Learned Cardinalities: Estimating Correlated Joins with Deep Learning"
authors:
  - "Andreas Kipf"
  - "Thomas Kipf"
  - "Bernhard Radke"
  - "Viktor Leis"
  - "Peter Boncz"
  - "Alfons Kemper"
year: 2019
venue: "CIDR"
arxiv: null
doi: null
source: "https://www.cidrdb.org/cidr2019/papers/p101-kipf-cidr19.pdf"
topics:
  - learned-qo
  - cardinality-estimation
seed_rank: 862
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Neo: A Learned Query Optimizer"
    url: "https://doi.org/10.14778/3342263.3342644"
    year: 2019
    arxiv: null
    doi: "10.14778/3342263.3342644"
    card: "747-neo-a-learned-query-optimizer"
  - title: "SkinnerDB: Regret-Bounded Query Evaluation via Reinforcement Learning"
    url: "https://doi.org/10.1145/3299869.3300088"
    year: 2019
    arxiv: null
    doi: "10.1145/3299869.3300088"
    card: "769-skinnerdb-regret-bounded-query-evaluation-via-reinforcement-"
  - title: "Are We Ready For Learned Cardinality Estimation?"
    url: "https://doi.org/10.14778/3476249.3476255"
    year: 2021
    arxiv: null
    doi: "10.14778/3476249.3476255"
    card: "776-are-we-ready-for-learned-cardinality-estimation"
  - title: "Bao: Making Learned Query Optimization Practical"
    url: "https://doi.org/10.1145/3448016.3452838"
    year: 2021
    arxiv: null
    doi: "10.1145/3448016.3452838"
    card: "764-bao-making-learned-query-optimization-practical"
---

# Learned Cardinalities: Estimating Correlated Joins with Deep Learning

## One-sentence takeaway

Learned Cardinalities: Learns cost models / plan choice instead of relying only on hand-tuned heuristics.

## Why it matters here

Learned components hint where Broadside can specialize layouts/plans from observed workloads.

## Key ideas

- Venue/year anchor: CIDR 2019.
- Learned cardinality/cost or value networks steer plan search under real feedback.
- Primary topics: learned-qo, cardinality-estimation.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- URL: https://www.cidrdb.org/cidr2019/papers/p101-kipf-cidr19.pdf
