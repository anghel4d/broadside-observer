---
title: "SoK: Taxonomy of Attacks on Open-Source Software Supply Chains"
authors:
  - "Piergiorgio Ladisa"
  - "Henrik Plate"
  - "Matias Martinez"
  - "Olivier Barais"
year: 2023
venue: "IEEE S&P"
arxiv: "2204.04008"
doi: "10.1109/SP46215.2023.00010"
source: "https://arxiv.org/abs/2204.04008"
topics:
  - "supply-chain"
  - "oss"
  - "sok"
seed_rank: 964
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: unix-foundations
cites:
  []
---

# SoK: Taxonomy of Attacks on Open-Source Software Supply Chains

## One-sentence takeaway

Ladisa, Plate, Martinez, and Barais build a 107-vector attack tree on OSS supply chains from code contribution through package distribution, link it to 94 public incidents and 33 safeguards, and validate the taxonomy with expert and developer surveys.

## Why it matters here

This is the named risk behind uutils' ×33 crate leverage (8 direct → 110 runtime crates). Anoptic should not swallow a Cargo graph blindly; quote this SoK when someone says 'just add a crate'.

## Key ideas

- IEEE S&P 2023; arXiv:2204.04008; DOI `10.1109/SP46215.2023.00010`.
- Language- and ecosystem-agnostic tree: compromise source, build, and distribution; each leaf is a concrete attack vector observed or plausibly instantiated.
- 94 real incidents are placed on the tree; 33 safeguards (signing, reproducible builds, review gates, lockfiles) are mapped back onto the same nodes.
- Expert + developer surveys check coverage and naming; the paper is a taxonomy, not a Cargo-specific audit.

## Caveats

## Links

- arXiv: [2204.04008](https://arxiv.org/abs/2204.04008)
- DOI: https://doi.org/10.1109/SP46215.2023.00010
