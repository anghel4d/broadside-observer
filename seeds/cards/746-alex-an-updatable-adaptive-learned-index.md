---
title: "ALEX: An Updatable Adaptive Learned Index"
authors:
  - "Jialin Ding"
  - "Umar Farooq Minhas"
  - "Jia Yu"
  - "Chi Wang"
  - "Jaeyoung Do"
  - "Yinan Li"
  - "Badrish Chandramouli"
  - "Johannes Gehrke"
  - "Donald Kossmann"
year: 2020
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3318464.3389711"
source: "https://doi.org/10.1145/3318464.3389711"
topics:
  - learned-indexes
seed_rank: 746
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "From WiscKey to Bourbon: A Learned Index for Log-Structured Merge Trees"
    url: "https://www.usenix.org/conference/osdi20/presentation/dai"
    year: 2020
    arxiv: null
    doi: null
    card: "803-from-wisckey-to-bourbon-a-learned-index-for-log-structured-m"
  - title: "PGM-index: A Fully-Dynamic Compressed Learned Index with Provable Worst-Case Bounds"
    url: "https://doi.org/10.14778/3389133.3389135"
    year: 2020
    arxiv: null
    doi: "10.14778/3389133.3389135"
    card: "795-pgm-index-a-fully-dynamic-compressed-learned-index-with-prov"
  - title: "RadixSpline: A Single-Pass Learned Index"
    url: "https://doi.org/10.1145/3401071.3401659"
    year: 2020
    arxiv: null
    doi: "10.1145/3401071.3401659"
    card: "758-radixspline-a-single-pass-learned-index"
  - title: "XIndex: A Scalable Learned Index for Multicore Data Storage"
    url: "https://doi.org/10.1145/3332466.3374547"
    year: 2020
    arxiv: null
    doi: "10.1145/3332466.3374547"
    card: "759-xindex-a-scalable-learned-index-for-multicore-data-storage"
---

# ALEX: An Updatable Adaptive Learned Index

## One-sentence takeaway

ALEX: Replaces or accelerates classic indexes with learned models of key distributions.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores. Learned components hint where Broadside can specialize layouts/plans from observed workloads.

## Key ideas

- Venue/year anchor: SIGMOD 2020.
- Models predict key positions; fallback structures preserve correctness under updates.
- Primary topics: learned-indexes.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3318464.3389711](https://doi.org/10.1145/3318464.3389711)
- URL: https://doi.org/10.1145/3318464.3389711
