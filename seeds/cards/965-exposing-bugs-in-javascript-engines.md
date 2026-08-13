---
title: "Exposing bugs in JavaScript engines through test transplantation and differential testing"
authors:
  - "Igor Lima"
  - "Jefferson Silva"
  - "Breno Miranda"
  - "Gustavo Pinto"
  - "Marcelo d'Amorim"
year: 2021
venue: "Software Quality Journal"
arxiv: null
doi: "10.1007/s11219-020-09537-8"
source: "https://doi.org/10.1007/s11219-020-09537-8"
topics:
  - "differential-testing"
  - "javascript-engines"
  - "fuzzing"
seed_rank: 965
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: unix-foundations
cites:
  - title: "Differential testing for software"
    url: "https://www.hpl.hp.com/hpjournal/dtj/vol10num1/vol10num1art9.pdf"
    year: 1998
see:
  - "968-differential-testing-for-software"
---

# Exposing bugs in JavaScript engines through test transplantation and differential testing

## One-sentence takeaway

Test transplantation + differential testing against multiple JS engines as cross-oracles — the methodology uutils adapts from browsers to coreutils.

## Why it matters here

The cited inspiration for grammar-guided differential fuzzing of uutils vs GNU.

## Key ideas

- Softw. Qual. J. 29(1):129–158, 2021. DOI `10.1007/s11219-020-09537-8`.
- Multiple implementations of the same language become oracles for each other.
- uutils copies the pattern: GNU vs Rust vs Toybox/BusyBox.

## Caveats

- JS engines, not Unix utilities. The citation is methodological.

## Links

- DOI: https://doi.org/10.1007/s11219-020-09537-8
