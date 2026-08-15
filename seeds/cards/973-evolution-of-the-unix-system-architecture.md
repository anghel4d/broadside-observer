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
seed_rank: 973
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
see:
  - "969-an-empirical-study-of-the-reliability-of-unix-utilities"
---

# Evolution of the Unix System Architecture: An Exploratory Case Study

## One-sentence takeaway

Spinellis and Avgeriou track Unix architecture across decades and find a long trend toward modularization, layering, and factoring — many small functions and shared libraries rather than a growing monolith.

## Why it matters here

Why 'rewrite coreutils' is an architecture paper, not just a language paper. Unix evolved by splitting; uutils claims the same trend when it reports more functions (2800 vs 1400) in the Rust rewrite.

## Key ideas

- IEEE TSE 47(6):1134–1163, 2021. DOI `10.1109/TSE.2019.2892146`.
- Exploratory case study of Unix-the-system (kernels and userland over historical releases), not a GNU-coreutils-only measurement.
- Documents layering and the growth of factoring: functionality moves into smaller units and shared libraries as the system ages.
- Ledru et al. read their 2800-vs-1400 function counts as the modern continuation of that modularization.

## Caveats

## Links

- DOI: https://doi.org/10.1109/TSE.2019.2892146
