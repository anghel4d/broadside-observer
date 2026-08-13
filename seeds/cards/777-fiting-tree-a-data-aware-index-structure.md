---
title: "FITing-Tree: A Data-aware Index Structure"
authors:
  - "Alex Galakatos"
  - "Michael Markovitch"
  - "Carsten Binnig"
  - "Rodrigo Fonseca"
  - "Tim Kraska"
year: 2019
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3299869.3319860"
source: "https://doi.org/10.1145/3299869.3319860"
topics:
  - learned-indexes
seed_rank: 777
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "The Case for Learned Index Structures"
    url: "https://doi.org/10.1145/3183713.3196909"
    year: 2018
    arxiv: null
    doi: "10.1145/3183713.3196909"
    card: "779-the-case-for-learned-index-structures"
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
  - title: "RadixSpline: A Single-Pass Learned Index"
    url: "https://doi.org/10.1145/3401071.3401659"
    year: 2020
    arxiv: null
    doi: "10.1145/3401071.3401659"
    card: "758-radixspline-a-single-pass-learned-index"
---

# FITing-Tree: A Data-aware Index Structure

## One-sentence takeaway

FITing-Tree: Replaces or accelerates classic indexes with learned models of key distributions.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores. Learned components hint where Broadside can specialize layouts/plans from observed workloads.

## Key ideas

- Venue/year anchor: SIGMOD 2019.
- Models predict key positions; fallback structures preserve correctness under updates.
- Primary topics: learned-indexes.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3299869.3319860](https://doi.org/10.1145/3299869.3319860)
- URL: https://doi.org/10.1145/3299869.3319860
