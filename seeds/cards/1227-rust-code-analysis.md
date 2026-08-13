---
title: "rust-code-analysis: A Rust library to analyze and extract maintainability information from source codes"
authors:
  - "Luca Ardito"
  - "Luca Barbato"
  - "Marco Castelluccio"
  - "Riccardo Coppola"
  - "Calixte Denizet"
  - "Sylvestre Ledru"
  - "Michele Valsesia"
year: 2020
venue: "SoftwareX"
arxiv: null
doi: "10.1016/j.softx.2020.100635"
source: "https://doi.org/10.1016/j.softx.2020.100635"
topics:
  - "static-analysis"
  - "rust"
  - "complexity"
seed_rank: 1227
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: unix-foundations
cites:
  - title: "A Complexity Measure"
    url: "https://doi.org/10.1109/TSE.1976.233837"
    year: 1976
    doi: "10.1109/TSE.1976.233837"
see:
  - "1231-a-complexity-measure"
---

# rust-code-analysis: A Rust library to analyze and extract maintainability information from source codes

## One-sentence takeaway

Mozilla/uutils-adjacent Rust library that extracts maintainability metrics (including cognitive/cyclomatic complexity) from source — the second analyzer in the coreutils comparison.

## Why it matters here

How Ledru et al. cross-check Lizard. Same people later rewrite coreutils; metrics tooling first.

## Key ideas

- SoftwareX 12:100635, 2020. DOI `10.1016/j.softx.2020.100635`.
- Used in the 2026 uutils paper alongside Lizard; results agree in direction (Rust much less complex than C).
- Ledru is a co-author — continuity from analysis tooling to the rewrite.

## Caveats

- Metrics library, not a rewrite paper. Complexity numbers still depend on what you count (destructors, macros).

## Links

- DOI: https://doi.org/10.1016/j.softx.2020.100635
