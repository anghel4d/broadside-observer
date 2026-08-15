---
title: Amazon Redshift and the Case for Simpler Data Warehouses
authors:
- Anurag Gupta
- Deepak Agarwal
- Derek Tan
- Jakub Kulesza
- Rahul Pathak
- Stefano Stefani
- Vidhya Srinivasan
year: 2015
venue: SIGMOD
arxiv: null
doi: 10.1145/2723372.2742795
source: "https://doi.org/10.1145/2723372.2742795"
topics:
- databases
- contemporary-db
seed_rank: 828
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# Amazon Redshift and the Case for Simpler Data Warehouses

## One-sentence takeaway

Redshift is AWS’s columnar, MPP warehouse built by taking ParAccel’s shared-nothing engine and making the operational surface small: one-click provisioning, baked-in columnar compression and zone maps, and a deliberately limited knob set so customers get C-Store-class scans without a DBA staff.

## Why it matters here

It is the “good-enough warehouse” foil to Snowflake’s elastic split and to Vertica’s knob-heavy commercial C-Store. When Broadside just needs SQL over a few TB of cards and traces, Redshift’s lesson is: hide the MPP, keep the column store.

## Key ideas

- Storage is columnar with automatic compression encodings and zone maps; a leader node plans, compute slices scan local blocks in a classic shared-nothing layout.
- The product thesis is simplicity: snapshot/restore, resize, and vacuum are first-class, while exotic tuner knobs are omitted on purpose.
- Workload isolation is coarse (WLM queues) rather than warehouse-per-workload elasticity — the contrast Snowflake later exploits.
- The paper reports production adoption numbers and argues that most warehouse customers were over-served by Teradata-class complexity.

## Caveats

## Links

- DOI: [10.1145/2723372.2742795](https://doi.org/10.1145/2723372.2742795)
- URL: https://doi.org/10.1145/2723372.2742795
