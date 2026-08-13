---
title: "NeuroCard: One Cardinality Estimator for All Tables"
authors:
  - "Zongheng Yang"
  - "Amog Kamsetty"
  - "Sifei Luan"
  - "Eric Liang"
  - "Yan Duan"
  - "Xi Chen"
  - "Ion Stoica"
year: 2021
venue: "VLDB"
arxiv: null
doi: "10.14778/3436905.3436914"
source: "https://doi.org/10.14778/3436905.3436914"
topics:
  - learned-qo
  - cardinality-estimation
seed_rank: 755
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
  - title: "Bao: Making Learned Query Optimization Practical"
    url: "https://doi.org/10.1145/3448016.3452838"
    year: 2021
    arxiv: null
    doi: "10.1145/3448016.3452838"
    card: "764-bao-making-learned-query-optimization-practical"
  - title: "Balsa: Learning a Query Optimizer Without Expert Demonstrations"
    url: "https://doi.org/10.1145/3514221.3517885"
    year: 2022
    arxiv: null
    doi: "10.1145/3514221.3517885"
    card: "763-balsa-learning-a-query-optimizer-without-expert-demonstratio"
  - title: "Flow-Loss: Learning Cardinality Estimates That Matter"
    url: "https://doi.org/10.14778/3476249.3476254"
    year: 2021
    arxiv: null
    doi: "10.14778/3476249.3476254"
    card: "753-flow-loss-learning-cardinality-estimates-that-matter"
---

# NeuroCard: One Cardinality Estimator for All Tables

## One-sentence takeaway

NeuroCard: Learns cost models / plan choice instead of relying only on hand-tuned heuristics.

## Why it matters here

Learned components hint where Broadside can specialize layouts/plans from observed workloads.

## Key ideas

- Venue/year anchor: VLDB 2021.
- Learned cardinality/cost or value networks steer plan search under real feedback.
- Primary topics: learned-qo, cardinality-estimation.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.14778/3436905.3436914](https://doi.org/10.14778/3436905.3436914)
- URL: https://doi.org/10.14778/3436905.3436914
