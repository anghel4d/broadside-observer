---
title: "Technical Leverage in a Software Ecosystem: Development Opportunities and Security Risks"
authors:
  - "Fabio Massacci"
  - "Ivan Pashchenko"
year: 2021
venue: "ICSE"
arxiv: null
doi: "10.1109/ICSE43902.2021.00124"
source: "https://doi.org/10.1109/ICSE43902.2021.00124"
topics:
  - "technical-leverage"
  - "dependencies"
  - "security"
seed_rank: 1230
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: unix-foundations
cites:
  - title: "SoK: Taxonomy of Attacks on Open-Source Software Supply Chains"
    url: "https://arxiv.org/abs/2204.04008"
    year: 2023
    arxiv: "2204.04008"
    card: "1228-sok-taxonomy-of-attacks-on-oss-supply-chains"
---

# Technical Leverage in a Software Ecosystem: Development Opportunities and Security Risks

## One-sentence takeaway

Technical leverage = how much of your shipped LOC you did not write — a development win and a security concentration risk. uutils is ×33; Gnulib is ×3.3.

## Why it matters here

The metric the coreutils paper uses. Anoptic's crate graph should be quoted in this unit.

## Key ideas

- ICSE 2021. DOI `10.1109/ICSE43902.2021.00124`.
- Leverage as opportunity (velocity) and risk (unvetted code).
- uutils: 90 kLOC → 3 MLOC with deps; GNU: 60 kLOC → 200 kLOC with Gnulib.

## Caveats

- Ecosystem paper, not a coreutils measurement. The ×33 figure is Ledru et al. applying this definition.

## Links

- DOI: https://doi.org/10.1109/ICSE43902.2021.00124
