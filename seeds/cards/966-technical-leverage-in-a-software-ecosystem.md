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
seed_rank: 966
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
see:
  - "964-sok-taxonomy-of-attacks-on-oss-supply-chains"
---

# Technical Leverage in a Software Ecosystem: Development Opportunities and Security Risks

## One-sentence takeaway

Massacci and Pashchenko define technical leverage as how much of your shipped LOC you did not write: a development win (velocity from reuse) and a security concentration risk (unvetted transitive code).

## Why it matters here

The metric the uutils paper actually quotes. Anoptic's crate graph should be reported in this unit: GNU/Gnulib is ×3.3; uutils/crates is ×33.

## Key ideas

- ICSE 2021. DOI `10.1109/ICSE43902.2021.00124`.
- Leverage = (own + dependency LOC) / own LOC. High leverage is how ecosystems ship fast; it is also how a single compromised crate becomes everyone else's incident.
- Opportunity and risk are the same number: more reuse, more surface. The paper is an ecosystem measurement, not a coreutils audit.
- Ledru et al. apply the definition: uutils 90 kLOC → 3 MLOC with deps (×33.3, 110 runtime crates); GNU 60 kLOC → 200 kLOC with Gnulib (×3.3).

## Caveats

## Links

- DOI: https://doi.org/10.1109/ICSE43902.2021.00124
