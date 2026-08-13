---
title: "Bao: Making Learned Query Optimization Practical"
authors:
  - "Ryan Marcus"
  - "Parimarjan Negi"
  - "Hongzi Mao"
  - "Nesime Tatbul"
  - "Mohammad Alizadeh"
  - "Tim Kraska"
year: 2021
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3448016.3452838"
source: "https://doi.org/10.1145/3448016.3452838"
topics:
  - learned-qo
  - query-optimization
seed_rank: 764
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Are We Ready For Learned Cardinality Estimation?"
    url: "https://doi.org/10.14778/3476249.3476255"
    year: 2021
    arxiv: null
    doi: "10.14778/3476249.3476255"
    card: "776-are-we-ready-for-learned-cardinality-estimation"
  - title: "Flow-Loss: Learning Cardinality Estimates That Matter"
    url: "https://doi.org/10.14778/3476249.3476254"
    year: 2021
    arxiv: null
    doi: "10.14778/3476249.3476254"
    card: "753-flow-loss-learning-cardinality-estimates-that-matter"
  - title: "Balsa: Learning a Query Optimizer Without Expert Demonstrations"
    url: "https://doi.org/10.1145/3514221.3517885"
    year: 2022
    arxiv: null
    doi: "10.1145/3514221.3517885"
    card: "763-balsa-learning-a-query-optimizer-without-expert-demonstratio"
  - title: "Predicate Transfer: Efficient Pre-Filtering on Multi-Join Queries"
    url: "https://doi.org/10.14778/3598581.3598590"
    year: 2023
    arxiv: null
    doi: "10.14778/3598581.3598590"
    card: "837-predicate-transfer-efficient-pre-filtering-on-multi-join-que"
---

# Bao: Making Learned Query Optimization Practical

## One-sentence takeaway

Bao: Learns cost models / plan choice instead of relying only on hand-tuned heuristics.

## Why it matters here

Learned components hint where Broadside can specialize layouts/plans from observed workloads.

## Key ideas

- Venue/year anchor: SIGMOD 2021.
- Learned cardinality/cost or value networks steer plan search under real feedback.
- Primary topics: learned-qo, query-optimization.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3448016.3452838](https://doi.org/10.1145/3448016.3452838)
- URL: https://doi.org/10.1145/3448016.3452838
