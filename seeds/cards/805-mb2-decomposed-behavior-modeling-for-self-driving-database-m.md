---
title: "MB2: Decomposed Behavior Modeling for Self-Driving Database Management Systems"
authors:
  - "Lin Ma"
  - "William Zhang"
  - "Jie Jiao"
  - "Wuwen Wang"
  - "Matthew Butrovich"
  - "Wan Shen Lim"
  - "Prashanth Menon"
  - "Andrew Pavlo"
year: 2021
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3448016.3457276"
source: "https://doi.org/10.1145/3448016.3457276"
topics:
  - autonomous-db
  - noisepage
seed_rank: 805
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "CDBTune: An End-to-End Deep Reinforcement Learning based Database Tuning System"
    url: "https://doi.org/10.1145/3299869.3300085"
    year: 2019
    arxiv: null
    doi: "10.1145/3299869.3300085"
    card: "808-cdbtune-an-end-to-end-deep-reinforcement-learning-based-data"
  - title: "OtterTune: Automatic Database Tuning"
    url: "https://doi.org/10.1145/3035918.3064029"
    year: 2017
    arxiv: null
    doi: "10.1145/3035918.3064029"
    card: "844-ottertune-automatic-database-tuning"
  - title: "TiDB: A Raft-based HTAP Database"
    url: "https://doi.org/10.14778/3415478.3415535"
    year: 2020
    arxiv: null
    doi: "10.14778/3415478.3415535"
    card: "738-tidb-a-raft-based-htap-database"
---

# MB2: Decomposed Behavior Modeling for Self-Driving Database Management Systems

## One-sentence takeaway

MB2: Self-driving / learned tuning of database configuration and physical design.

## Why it matters here

Learned components hint where Broadside can specialize layouts/plans from observed workloads.

## Key ideas

- Venue/year anchor: SIGMOD 2021.
- Closed-loop observe → model → act for knobs, indexes, and layout.
- Primary topics: autonomous-db, noisepage.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3448016.3457276](https://doi.org/10.1145/3448016.3457276)
- URL: https://doi.org/10.1145/3448016.3457276
