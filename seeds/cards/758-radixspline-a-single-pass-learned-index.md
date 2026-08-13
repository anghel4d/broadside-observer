---
title: "RadixSpline: A Single-Pass Learned Index"
authors:
  - "Andreas Kipf"
  - "Ryan Marcus"
  - "Alexander van Renen"
  - "Mihail Stoian"
  - "Alfons Kemper"
  - "Tim Kraska"
  - "Thomas Neumann"
year: 2020
venue: "aiDM@SIGMOD"
arxiv: null
doi: "10.1145/3401071.3401659"
source: "https://doi.org/10.1145/3401071.3401659"
topics:
  - learned-indexes
seed_rank: 758
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "ALEX: An Updatable Adaptive Learned Index"
    url: "https://doi.org/10.1145/3318464.3389711"
    year: 2020
    arxiv: null
    doi: "10.1145/3318464.3389711"
    card: "746-alex-an-updatable-adaptive-learned-index"
  - title: "From WiscKey to Bourbon: A Learned Index for Log-Structured Merge Trees"
    url: "https://www.usenix.org/conference/osdi20/presentation/dai"
    year: 2020
    arxiv: null
    doi: null
    card: "803-from-wisckey-to-bourbon-a-learned-index-for-log-structured-m"
  - title: "XIndex: A Scalable Learned Index for Multicore Data Storage"
    url: "https://doi.org/10.1145/3332466.3374547"
    year: 2020
    arxiv: null
    doi: "10.1145/3332466.3374547"
    card: "759-xindex-a-scalable-learned-index-for-multicore-data-storage"
  - title: "Tsunami: A Learned Multi-dimensional Index for Correlated Data and Skewed Workloads"
    url: "https://doi.org/10.14778/3424573.3424574"
    year: 2020
    arxiv: null
    doi: "10.14778/3424573.3424574"
    card: "785-tsunami-a-learned-multi-dimensional-index-for-correlated-dat"
---

# RadixSpline: A Single-Pass Learned Index

## One-sentence takeaway

RadixSpline: Replaces or accelerates classic indexes with learned models of key distributions.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores. Learned components hint where Broadside can specialize layouts/plans from observed workloads.

## Key ideas

- Venue/year anchor: aiDM@SIGMOD 2020.
- Models predict key positions; fallback structures preserve correctness under updates.
- Primary topics: learned-indexes.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3401071.3401659](https://doi.org/10.1145/3401071.3401659)
- URL: https://doi.org/10.1145/3401071.3401659
