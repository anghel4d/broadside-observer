---
title: "Evolution of the Unix System Architecture: An Exploratory Case Study"
authors:
  - "Diomidis Spinellis"
  - "Paris Avgeriou"
year: 2021
venue: "IEEE Transactions on Software Engineering"
arxiv: null
doi: "10.1109/TSE.2019.2892146"
source: "https://doi.org/10.1109/TSE.2019.2892146"
topics:
  - "unix"
  - "architecture-evolution"
  - "modularity"
seed_rank: 1237
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: unix-foundations
cites:
  - title: "An Empirical Study of the Reliability of UNIX Utilities"
    url: "https://doi.org/10.1145/96267.96279"
    year: 1990
    doi: "10.1145/96267.96279"
    card: "1233-an-empirical-study-of-the-reliability-of-unix-utilities"
---

# Evolution of the Unix System Architecture: An Exploratory Case Study

## One-sentence takeaway

Longitudinal study of Unix architecture: modularization, layering, and the growth of factoring — the historical backdrop uutils claims to continue (many small functions, shared libs).

## Why it matters here

Why 'rewrite coreutils' is an architecture paper, not just a language paper. Unix evolved by splitting; uutils claims the same trend.

## Key ideas

- IEEE TSE 47(6):1134–1163, 2021. DOI `10.1109/TSE.2019.2892146`.
- Exploratory case study of Unix system architecture over decades.
- uutils: more functions (2800 vs 1400) as the modern continuation of that modularization.

## Caveats

- About Unix-the-system, not GNU coreutils specifically. The 2800-vs-1400 comparison is Ledru et al.'s reading.

## Links

- DOI: https://doi.org/10.1109/TSE.2019.2892146
