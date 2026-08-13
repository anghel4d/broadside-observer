---
title: "SkinnerDB: Regret-Bounded Query Evaluation via Reinforcement Learning"
authors:
  - "Immanuel Trummer"
  - "Junxiong Wang"
  - "Deepak Maram"
  - "Samuel Moseley"
  - "Saehan Jo"
  - "Amin Saeidi"
year: 2019
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3299869.3300088"
source: "https://doi.org/10.1145/3299869.3300088"
topics:
  - learned-qo
seed_rank: 769
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Learned Cardinalities: Estimating Correlated Joins with Deep Learning"
    url: "https://www.cidrdb.org/cidr2019/papers/p101-kipf-cidr19.pdf"
    year: 2019
    arxiv: null
    doi: null
    card: "862-learned-cardinalities-estimating-correlated-joins-with-deep-"
  - title: "Neo: A Learned Query Optimizer"
    url: "https://doi.org/10.14778/3342263.3342644"
    year: 2019
    arxiv: null
    doi: "10.14778/3342263.3342644"
    card: "747-neo-a-learned-query-optimizer"
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

# SkinnerDB: Regret-Bounded Query Evaluation via Reinforcement Learning

## One-sentence takeaway

SkinnerDB: Learns cost models / plan choice instead of relying only on hand-tuned heuristics.

## Why it matters here

Learned components hint where Broadside can specialize layouts/plans from observed workloads.

## Key ideas

- Venue/year anchor: SIGMOD 2019.
- Learned cardinality/cost or value networks steer plan search under real feedback.
- Primary topics: learned-qo.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3299869.3300088](https://doi.org/10.1145/3299869.3300088)
- URL: https://doi.org/10.1145/3299869.3300088
