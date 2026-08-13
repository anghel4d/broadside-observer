---
title: "Virtual-Memory Assisted Buffer Management"
authors:
  - "Viktor Leis"
  - "Adnan Alhomssi"
  - "Tobias Ziegler"
  - "Yannick Loeck"
  - "Christian Dietrich"
year: 2023
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3588709"
source: "https://doi.org/10.1145/3588709"
topics:
  - buffer-manager
  - umbra
seed_rank: 774
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "AnyBlob: A Multi-Cloud Download Agent for High-Performance Data Processing"
    url: "https://www.cidrdb.org/cidr2023/papers/p47-durner.pdf"
    year: 2023
    arxiv: null
    doi: null
    card: "870-anyblob-a-multi-cloud-download-agent-for-high-performance-da"
  - title: "Umbra: A Disk-Based System with In-Memory Performance"
    url: "https://www.cidrdb.org/cidr2020/papers/p29-neumann-cidr20.pdf"
    year: 2020
    arxiv: null
    doi: null
    card: "871-umbra-a-disk-based-system-with-in-memory-performance"
  - title: "LeanStore: In-Memory Data Management Beyond Main Memory"
    url: "https://doi.org/10.1109/ICDE.2018.00026"
    year: 2018
    arxiv: null
    doi: "10.1109/ICDE.2018.00026"
    card: "842-leanstore-in-memory-data-management-beyond-main-memory"
---

# Virtual-Memory Assisted Buffer Management

## One-sentence takeaway

Seminal contemporary database systems paper (2023) on buffer-manager, umbra.

## Why it matters here

Vectorized/compiled execution is the performance model for ano batched interpreters and analytics paths. Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores.

## Key ideas

- Venue/year anchor: SIGMOD 2023.
- Primary topics: buffer-manager, umbra.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3588709](https://doi.org/10.1145/3588709)
- URL: https://doi.org/10.1145/3588709
